/**
 * Email templates for the Vesharo lead flow.
 *
 * Server-only. Never import this from client code — it reads no secrets itself,
 * but it is intended to run behind /api/contact.
 */

export type LeadSubmission = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  submittedAt: string;
  /** Where on the site the enquiry came from. */
  source?: string;
};

const BRAND = {
  name: "Vesharo",
  legalName: "Vesharo Technologies",
  tagline: "Engineering Digital Products That Scale",
  email: "contact@vesharo.com",
  phone: "+91 95862 12495",
  phoneRaw: "+919586212495",
  location: "Ahmedabad, Gujarat, India",
  coverage: "Remote worldwide",
  siteUrl: "https://vesharo.com",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Shared email chrome so both emails look like they come from the same team. */
const shell = (preheader: string, body: string) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark light">
<title>${escapeHtml(preheader)}</title>
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#171717;border:1px solid #2a2a2a;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;border-bottom:1px solid #2a2a2a;">
              <span style="display:inline-block;background:#7C5CFF;color:#ffffff;font-weight:700;font-size:18px;line-height:28px;width:32px;height:32px;text-align:center;border-radius:8px;vertical-align:middle;">V</span>
              <span style="color:#ffffff;font-size:18px;font-weight:600;vertical-align:middle;margin-left:10px;">Vesharo</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;color:#e8e8e6;font-size:15px;line-height:1.7;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #2a2a2a;color:#8a8a8f;font-size:12px;line-height:1.6;">
              Vesharo Technologies &middot; ${BRAND.location} &middot; ${BRAND.coverage}<br>
              <a href="mailto:${BRAND.email}" style="color:#A78BFA;text-decoration:none;">${BRAND.email}</a>
              &nbsp;&middot;&nbsp;
              <a href="tel:${BRAND.phoneRaw}" style="color:#A78BFA;text-decoration:none;">${BRAND.phone}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

/**
 * Email 1 — sent to the person who submitted the form.
 * Warm and personal; no automated-system tone.
 */
export const buildClientConfirmationEmail = (lead: LeadSubmission) => {
  const firstName = lead.name.trim().split(/\s+/)[0] || "there";

  const html = shell(
    `Thanks ${firstName} — we have your enquiry and will be in touch shortly.`,
    `
      <h1 style="margin:0 0 16px;font-size:22px;line-height:1.35;color:#ffffff;">Thank you, ${escapeHtml(firstName)}.</h1>
      <p style="margin:0 0 16px;">
        We have received your enquiry and it has reached our team directly. I appreciate you taking the time to get in touch about
        <strong style="color:#ffffff;">${escapeHtml(lead.service)}</strong>.
      </p>
      <p style="margin:0 0 16px;">
        Here is what happens next:
      </p>
      <ol style="margin:0 0 20px;padding-left:20px;">
        <li style="margin-bottom:8px;">Our team reads through the details you shared, properly &mdash; not just a keyword scan.</li>
        <li style="margin-bottom:8px;">Someone from Vesharo gets back to you within 24 business hours.</li>
        <li style="margin-bottom:8px;">If it is useful, we will suggest a short call to understand the problem properly before quoting anything.</li>
      </ol>
      <p style="margin:0 0 20px;">
        In the meantime, if anything changes or you want to add detail, simply reply to this email &mdash; it reaches us.
      </p>
      <p style="margin:0 0 24px;">
        Talk soon,<br>
        <strong style="color:#ffffff;">The Vesharo Team</strong><br>
        <span style="color:#8a8a8f;font-size:13px;">${escapeHtml(BRAND.tagline)}</span>
      </p>
      <p style="margin:0;">
        <a href="${BRAND.siteUrl}/services" style="display:inline-block;background:#7C5CFF;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:40px;">Browse our services</a>
      </p>
    `,
  );

  const text = `Hi ${firstName},

Thanks for getting in touch. We have received your enquiry about ${lead.service} and it has reached our team directly.

What happens next:
1. Our team reads through the details you shared.
2. Someone from Vesharo replies within 24 business hours.
3. If useful, we'll suggest a short call before we quote anything.

If anything changes, just reply to this email — it reaches us.

Talk soon,
The Vesharo Team
${BRAND.tagline}
${BRAND.email} · ${BRAND.phone}`;

  return {
    subject: `We have your enquiry — thanks, ${firstName}`,
    html,
    text,
  };
};

/**
 * Email 2 — sent internally so the team can pick up and follow up.
 * Structured so it can be triaged at a glance.
 */
export const buildInternalLeadEmail = (lead: LeadSubmission) => {
  const when = new Date(lead.submittedAt);
  const submittedLocal = Number.isNaN(when.getTime())
    ? lead.submittedAt
    : when.toISOString().replace("T", " ").slice(0, 16) + " UTC";

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #2a2a2a;color:#8a8a8f;font-size:13px;white-space:nowrap;vertical-align:top;width:150px;">${escapeHtml(label)}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #2a2a2a;color:#e8e8e6;font-size:14px;word-break:break-word;">${value}</td>
    </tr>`;

  const replyToName = escapeHtml(lead.name.trim() || "Website visitor");
  const replyToEmail = escapeHtml(lead.email);

  const html = shell(
    `New enquiry: ${lead.name} — ${lead.service}`,
    `
      <h1 style="margin:0 0 4px;font-size:20px;line-height:1.35;color:#ffffff;">New website enquiry</h1>
      <p style="margin:0 0 20px;color:#8a8a8f;font-size:13px;">Submitted ${escapeHtml(submittedLocal)}${lead.source ? ` &middot; ${escapeHtml(lead.source)}` : ""}</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;margin-bottom:20px;">
        ${row("Name", `<strong>${replyToName}</strong>`)}
        ${row("Email", `<a href="mailto:${replyToEmail}" style="color:#A78BFA;">${replyToEmail}</a>`)}
        ${row("Phone", lead.phone ? `<a href="tel:${escapeHtml(lead.phone.replace(/\s+/g, ""))}" style="color:#A78BFA;">${escapeHtml(lead.phone)}</a>` : `<span style="color:#6a6a6f;">Not provided</span>`)}
        ${row("Company", lead.company ? escapeHtml(lead.company) : `<span style="color:#6a6a6f;">Not provided</span>`)}
        ${row("Service needed", `<span style="color:#A78BFA;font-weight:600;">${escapeHtml(lead.service)}</span>`)}
        ${row("Budget range", escapeHtml(lead.budget))}
        ${row("Submitted", escapeHtml(submittedLocal))}
      </table>

      <p style="margin:0 0 8px;font-size:13px;color:#8a8a8f;text-transform:uppercase;letter-spacing:0.08em;">Project details</p>
      <div style="padding:16px;background:#121212;border:1px solid #2a2a2a;border-radius:12px;color:#e8e8e6;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(lead.message)}</div>

      <p style="margin:20px 0 0;">
        <a href="mailto:${replyToEmail}?subject=${encodeURIComponent(`Re: Your enquiry — ${lead.service}`)}" style="display:inline-block;background:#7C5CFF;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:40px;">Reply to ${escapeHtml(lead.name.trim())}</a>
      </p>
    `,
  );

  const text = [
    "NEW WEBSITE ENQUIRY",
    `Submitted: ${submittedLocal}${lead.source ? ` | Source: ${lead.source}` : ""}`,
    "",
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    `Phone:    ${lead.phone || "Not provided"}`,
    `Company:  ${lead.company || "Not provided"}`,
    `Service:  ${lead.service}`,
    `Budget:   ${lead.budget}`,
    "",
    "PROJECT DETAILS",
    "-".repeat(60),
    lead.message,
    "-".repeat(60),
    "",
    `Reply to: ${lead.email}`,
  ].join("\n");

  return {
    subject: `New enquiry — ${lead.name} (${lead.service})`,
    html,
    text,
    replyTo: `${lead.name.trim()} <${lead.email}>`,
  };
};