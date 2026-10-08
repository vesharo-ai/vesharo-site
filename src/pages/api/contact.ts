import type { APIRoute } from "astro";
import {
  buildClientConfirmationEmail,
  buildInternalLeadEmail,
  type LeadSubmission,
} from "@/lib/lead-email";

export const prerender = false;

/**
 * POST /api/contact
 *
 * Real lead-generation flow:
 *   1. Validate and normalise the submission.
 *   2. Email the enquirer a personal confirmation.
 *   3. Email Vesharo the full enquiry, with Reply-To set to the enquirer.
 *
 * Secrets are read from the server environment only and are never exposed to
 * the client bundle. If the email provider is not configured, the endpoint
 * fails loudly (503) rather than pretending a lead was captured.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const NOTIFICATION_TO = "contact@vesharo.com";
const MAX_FIELD = 5000;

/** Simple in-memory throttle. Resets on cold start / redeploy — enough to blunt casual abuse. */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;

function throttled(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

// Keep the map from growing without bound on a long-lived server.
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of hits) if (now > entry.resetAt) hits.delete(ip);
}, WINDOW_MS).unref?.();

const clean = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

async function sendEmail(payload: Record<string, unknown>, apiKey: string) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Email provider responded ${res.status}: ${detail.slice(0, 300)}`);
  }
  return res.json();
}

export const POST: APIRoute = async ({ request }) => {
  // --- Parse ------------------------------------------------------------
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid request." });
  }

  // --- Honeypot: bots fill every field. Pretend nothing happened, and do NOT
  //     consume a real visitor's rate-limit budget. ------------------------
  if (clean(raw.website, 200)) {
    return json(200, { ok: true });
  }

  // --- Rate limit -------------------------------------------------------
  // Checked after the honeypot so bot traffic cannot lock out a genuine
  // visitor sharing the same IP (offices, mobile carriers, VPN egress).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (throttled(ip)) {
    return json(429, {
      ok: false,
      error: "Too many submissions from this address. Please wait a few minutes, or email us directly.",
    });
  }

  const name = clean(raw.name, 120);
  const email = clean(raw.email, 200).toLowerCase();
  const phone = clean(raw.phone, 40);
  const company = clean(raw.company, 160);
  const service = clean(raw.service, 120) || "Not specified";
  const budget = clean(raw.budget, 80) || "Not specified";
  const message = clean(raw.message, MAX_FIELD);
  const source = clean(raw.source, 120);
  const submittedAt = new Date().toISOString();

  // --- Validate ---------------------------------------------------------
  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!EMAIL_RE.test(email)) errors.push("email");
  if (message.length < 10) errors.push("message");
  if (errors.length) {
    return json(400, {
      ok: false,
      error: `Please check these fields: ${errors.join(", ")}.`,
    });
  }

  const lead: LeadSubmission = {
    name,
    email,
    phone: phone || undefined,
    company: company || undefined,
    service,
    budget,
    message,
    submittedAt,
    source: source || undefined,
  };

  // --- Provider config --------------------------------------------------
  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromAddress = import.meta.env.LEAD_FROM_EMAIL || "Vesharo Website <onboarding@resend.dev>";

  if (!apiKey) {
    // Fail loudly. A silent 200 here is exactly the bug this endpoint replaced.
    console.error("[contact] RESEND_API_KEY is not configured — enquiry not delivered:", lead.email);
    return json(503, {
      ok: false,
      error:
        "Our enquiry service is not configured yet. Please email contact@vesharo.com directly and we will pick it up.",
    });
  }

  const confirmation = buildClientConfirmationEmail(lead);
  const notification = buildInternalLeadEmail(lead);

  try {
    // Both emails are sent; we only report success if the client's copy went out.
    const [clientResult, internalResult] = await Promise.allSettled([
      sendEmail(
        {
          from: fromAddress,
          to: [lead.email],
          subject: confirmation.subject,
          html: confirmation.html,
          text: confirmation.text,
        },
        apiKey,
      ),
      sendEmail(
        {
          from: fromAddress,
          to: [NOTIFICATION_TO],
          reply_to: notification.replyTo,
          subject: notification.subject,
          html: notification.html,
          text: notification.text,
        },
        apiKey,
      ),
    ]);

    if (clientResult.status === "rejected") throw clientResult.reason;

    if (internalResult.status === "rejected") {
      // The client got their confirmation but we lost the lead — log loudly.
      console.error("[contact] Internal notification failed:", internalResult.reason);
    }

    return json(200, { ok: true });
  } catch (error) {
    console.error("[contact] Failed to send enquiry emails:", error);
    return json(502, {
      ok: false,
      error:
        "We could not send that just now. Please email contact@vesharo.com or call +91 95862 12495 and we will pick it up.",
    });
  }
};

// Anything other than POST on this path is a client error.
export const ALL: APIRoute = () =>
  json(405, { ok: false, error: "Method not allowed. Use POST." });