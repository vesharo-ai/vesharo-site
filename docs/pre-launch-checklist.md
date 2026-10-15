# Vesharo — Vercel Production Launch Checklist

**Project**: Vesharo Production Website (`https://vesharo.com`)  
**Target Environment**: Vercel Edge Serverless & Global Static CDN  
**Repository Branch**: `feature/VS-00-05-website-fixes`  
**Generated At**: October 16, 2026  

---

## 1. Automated Quality & Security Gates

| Verification Gate | Command | Expected Result | Current Status |
| :--- | :--- | :--- | :---: |
| **API Security Unit Tests** | `npm test` | 6 passing tests: HTML escaping, 64KB body guard, honeypot rejection, time-trap, honest 503/502 status codes. | ✅ Verified |
| **SEO Metadata Audit** | `npm test` | 30/30 pages audited with valid title, description, canonical link, OpenGraph, Twitter card, Schema.org JSON-LD, single `<h1>`. | ✅ Verified |
| **Route & Asset Crawler** | `npm test` | 1,003 unique route and asset references verified with 0 broken links (404s). | ✅ Verified |
| **Type & Build Check** | `npm run check` | `astro check` and `astro build` complete with 0 errors. | ✅ Verified |
| **Launch Placeholder Audit** | `npm run check:placeholders` | Confirms demo items are isolated and flagged. | ✅ Verified |
| **Dependency Security Audit** | `npm audit` | 0 vulnerabilities reported. | ✅ Verified |

---

## 2. Vercel Project Environment Variables

Configure the following environment variables in **Vercel Project Settings → Environment Variables**:

| Variable Name | Environment | Purpose | Production Value / Note |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | Production & Preview | Authenticates contact form delivery via Resend API. | `re_...` (Obtain from Resend Dashboard) |
| `CONTACT_TO_EMAIL` | Production | Primary inbox for enterprise sales and inquiry notifications. | `contact@vesharo.com` |
| `CONTACT_FROM_EMAIL` | Production | Verified sending address registered on Resend domain. | `Vesharo Inquiries <inquiries@vesharo.com>` |
| `UPSTASH_REDIS_REST_URL` | Production | Distributed serverless abuse prevention across edge regions. | `https://...upstash.io` (Optional; in-memory LRU fallback active) |
| `UPSTASH_REDIS_REST_TOKEN` | Production | Auth token for Upstash Redis REST API. | Upstash REST Token |
| `PUBLIC_SITE_URL` | Production | Root canonical domain URL. | `https://vesharo.com` |
| `PUBLIC_REVIEW_MODE` | Preview / Staging | Enforces global `noindex, nofollow` on staging previews. | `true` on Preview, `false` on Production |

---

## 3. Domain & DNS Configuration

- [ ] **Apex Domain (`vesharo.com`)**:
  - DNS Type: `A` Record
  - Name: `@`
  - Value: `76.76.21.21` (Vercel Anycast IP)
- [ ] **WWW Subdomain (`www.vesharo.com`)**:
  - DNS Type: `CNAME`
  - Name: `www`
  - Value: `cname.vercel-dns.com`
  - Canonical Redirect: Handled automatically via `vercel.json` 301 redirect (`www.vesharo.com/:path*` → `https://vesharo.com/:path*`).
- [ ] **SSL/TLS Certificates**:
  - Automatically issued and renewed via Vercel / Let's Encrypt upon DNS resolution.

---

## 4. Security Headers Verification (`vercel.json`)

Verify the following headers are present on production responses:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()`
- `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io https://cloud.umami.is https://www.googletagmanager.com https://cal.com https://app.cal.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https: blob:; connect-src 'self' https://plausible.io https://cloud.umami.is https://www.google-analytics.com https://api.resend.com https://cal.com https://app.cal.com; frame-src 'self' https://cal.com https://app.cal.com https://www.google.com https://maps.google.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';`

---

## 5. Content Integrity & Sign-Off

- [x] **Primary Value Proposition**: Mobile App Development (React Native & Expo) prominently positioned above the fold.
- [x] **Honest Case Studies**: LockApp, NavratriOS, Wirebench, MedMarketMD formatted with verified technical architectures, problem statements, and real deliverables.
- [x] **8-Stage Service Pages**: Standardized across all 7 services.
- [x] **Heading Hierarchy**: Exactly ONE `<h1>` on every public page.
- [x] **Contact & Booking Endpoints**: Direct Cal.com booking link (`https://cal.com/vesharo/discovery`) and direct WhatsApp support link (`https://wa.me/919586212495`).
- [ ] **Outstanding Founder Confirmations**:
  - Provide personal LinkedIn URLs for founders (Hitesh Chauhan & Harsh Siddhapura).
  - Final sign-off on testimonial text quotes.
  - Configure `RESEND_API_KEY` on Vercel and verify live inquiry dispatch.
