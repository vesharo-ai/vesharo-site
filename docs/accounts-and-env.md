# Vesharo — Account Inventory & Environment Runbook (VS-40)

Last updated: October 2026  
Maintainers: Hitesh Chauhan (Founder), Harsh Siddhapura (Solutions Architect & Engineering Lead)

---

## 1. Environment Variables Matrix

Configured in **Vercel Project Settings -> Environment Variables**:

| Variable Name | Environments | Default / Example | Purpose |
|---|---|---|---|
| `PUBLIC_REVIEW_MODE` | Production | `false` | When `false`, enables search engine indexing, removes review banner, and strips placeholder demo content. |
| `PUBLIC_REVIEW_MODE` | Preview / Dev | `true` | When `true`, displays review build banner, enforces `noindex, nofollow`, and shows demo content with `DEMO` badges. |
| `RESEND_API_KEY` | Production | `re_...` | Transactional email delivery key for `/api/contact`. If unset, API runs in safe mock mode without crashing. |
| `CONTACT_TO_EMAIL` | Production | `contact@vesharo.com` | Destination inbox for verified prospective client inquiries. |
| `CONTACT_FROM_EMAIL`| Production | `notifications@vesharo.com` | Verified sending identity configured in Resend. |
| `PUBLIC_GA4_ID` | Production | `G-...` *(Optional)* | Google Analytics 4 measurement ID (if enabled). |
| `PUBLIC_PLAUSIBLE_DOMAIN`| Production| `vesharo.com` | Cookieless privacy-friendly site telemetry domain. |

---

## 2. Infrastructure & Services Inventory

| Service | Category | URL / Console | Admin Account |
|---|---|---|---|
| **Vercel** | Hosting & Edge Functions | `https://vercel.com/vesharo-ai` | Hitesh Chauhan |
| **GitHub** | Version Control & CI/CD | `https://github.com/vesharo-ai/vesharo-site` | `vesharo-ai` Org Owners |
| **Domain Registrar** | Apex DNS & Nameservers | Cloudflare / Namecheap Console | Hitesh Chauhan |
| **Resend** | Transactional Email Service | `https://resend.com` | `contact@vesharo.com` |
| **Cal.com** | Discovery Call Booking | `https://cal.com/vesharo/discovery` | Hitesh Chauhan |
| **Google Search Console**| Search Indexing & Health | `https://search.google.com/search-console` | `contact@vesharo.com` |
| **Plausible Analytics**| Privacy Site Analytics | `https://plausible.io` | Hitesh Chauhan |

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
