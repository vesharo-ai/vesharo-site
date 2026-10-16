# Vesharo — Account Inventory & Environment Runbook (VS-40)

Last updated: October 2026  
Maintainers: Hitesh Chauhan (Founder), Harsh Siddhapura (Solutions Architect & Engineering Lead)

---

## 1. Environment Variables Matrix

Configured in **Vercel Project Settings -> Environment Variables**:

| Variable Name | Environments | Default / Example | Purpose |
|---|---|---|---|
| `PUBLIC_SITE_URL` | Production | `https://vesharo.com` | Root canonical domain used for metadata, sitemaps, and Open Graph cards. |
| `PUBLIC_REVIEW_MODE` | Production | `false` | When `false`, enables search engine indexing, removes review banner, and strips placeholder demo content. |
| `PUBLIC_REVIEW_MODE` | Preview / Dev | `true` | When `true`, displays review build banner, enforces `noindex, nofollow`, and shows demo content with `DEMO` badges. |
| `RESEND_API_KEY` | Production | `re_...` | Transactional email delivery key for `/api/contact`. |
| `CONTACT_FORM_RECIPIENT`| Production | `vesharo.ai@gmail.com` | Destination inbox for prospective client inquiries (single source of truth). |
| `RESEND_FROM_EMAIL` | Production | `onboarding@resend.dev` | Default sending identity in Resend delivering directly to account owner prior to custom domain mailbox. |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Production | None | Optional Google Apps Script webhook URL to automatically record form leads in Google Sheets for free. |
| `UPSTASH_REDIS_REST_URL` | Production | None | Upstash Redis REST URL for distributed serverless rate limiting. |
| `UPSTASH_REDIS_REST_TOKEN` | Production | None | Upstash Redis REST authentication token. |
| `PUBLIC_UMAMI_WEBSITE_ID` | Production | None | Free privacy-friendly telemetry identifier (Umami Cloud). |
| `PUBLIC_GA4_ID` | Production | `G-...` *(Optional)* | Google Analytics 4 measurement ID (if enabled). |

---

## 2. Infrastructure & Services Inventory

| Service | Category | URL / Console | Admin Account |
|---|---|---|---|
| **Vercel** | Hosting & Edge Functions | `https://vercel.com/vesharo-ai` | Hitesh Chauhan |
| **GitHub** | Version Control & CI/CD | `https://github.com/vesharo-ai/vesharo-site` | `vesharo-ai` Org Owners |
| **Domain Registrar** | Apex DNS & Nameservers | Cloudflare / Namecheap Console | Hitesh Chauhan |
| **Resend** | Transactional Email Service | `https://resend.com` | `vesharo.ai@gmail.com` |
| **Cal.com** | Call Booking | `https://cal.com/vesharo/15min` | Hitesh Chauhan |
| **Google Search Console**| Search Indexing & Health | `https://search.google.com/search-console` | `vesharo.ai@gmail.com` |
| **Umami Analytics**| Privacy Site Analytics (Free) | `https://cloud.umami.is` | Hitesh Chauhan |

---

## 3. Deployment & Instant Rollback Procedure

### A. Routine Deployment:
1. Merge pull request into branch `main`.
2. Vercel automatically deploys within 45–90 seconds.
3. Verify live status at `https://vesharo.com`.

### B. Instant Rollback (< 5 seconds):
If any defect occurs in production:
1. Log into [Vercel Deployments Dashboard](https://vercel.com/vesharo-ai/vesharo-site/deployments).
2. Locate the previous working production deployment.
3. Click the three dots `...` -> Select **Instant Rollback**.
4. The edge routing flips immediately to the stable deployment without rebuilding.
