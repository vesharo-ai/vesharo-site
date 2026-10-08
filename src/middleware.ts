import { defineMiddleware } from "astro:middleware";

/**
 * Security response headers.
 *
 * These are deliberately conservative:
 *  - No Content-Security-Policy. The site relies on inline JSON-LD scripts and
 *    Astro islands, and a guessed CSP would break them. Add one only after
 *    auditing every inline script and setting real report-only violations.
 *  - HSTS is only sent over HTTPS so it can never be pinned accidentally in
 *    local or preview environments.
 */
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const headers = response.headers;

  // Never let a browser second-guess a declared content type.
  headers.set("X-Content-Type-Options", "nosniff");

  // Send only the origin we actually need; no referrer leakage to third parties.
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Deny powerful browser features the site never uses.
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  );

  // Clickjacking protection.
  headers.set("X-Frame-Options", "SAMEORIGIN");

  // HSTS: only meaningful (and only safe) over TLS.
  if (new URL(_context.request.url).protocol === "https:") {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  // This API only ever accepts JSON submissions from our own form.
  if (_context.url.pathname.startsWith("/api/")) {
    headers.set("Cache-Control", "no-store");
  }

  return response;
});