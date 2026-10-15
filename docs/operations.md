# Vesharo Website — Operations & Runbook Guide

> **Audience**: Site administrators, DevOps engineers, and developers responsible for running, testing, deploying, and maintaining the Vesharo website.  
> **Cold Read Guarantee**: Following this document from top to bottom is sufficient to set up the environment, run builds, configure third-party services, execute zero-downtime deployments, and perform rollbacks.

---

## 1. Quick Start & Local Development

### 1.1 Prerequisites
- **Node.js**: `>= 22.12.0` (Recommended: Node 24 or 26).
  ```bash
  # Check Node version
  node -v
  # If on Mac Homebrew:
  export PATH="/opt/homebrew/bin:$PATH"
  ```
- **Git**: Configured with SSH or Personal Access Token.

### 1.2 Local Setup
```bash
# Clone the repository
git clone https://github.com/vesharo-ai/vesharo-site.git
cd vesharo-site

# Switch to the active feature/release branch
git checkout feature/VS-00-05-website-fixes

# Install dependencies cleanly
npm ci

# Create your local environment configuration
cp .env.example .env

# Start the Astro development server
npm run dev
# Server listening at http://localhost:4321
```

### 1.3 Running Quality Gates
```bash
# Run unit tests, SEO metadata verification, and link audits
npm test

# Run placeholder launch gate check
npm run check:placeholders

# Run Astro typecheck and production build
npm run check
```

---

## 2. Environment Variables Reference

All runtime and build configuration is controlled through environment variables. Never commit `.env` or production credentials to Git.

| Variable Name | Required in Prod? | Default / Fallback | Purpose & Where to Obtain |
|---|:---:|---|---|
| `PUBLIC_SITE_URL` | **Yes** | `https://vesharo.com` | Canonical root domain used for SEO tags, sitemaps, and Open Graph cards. |
| `PUBLIC_REVIEW_MODE` | No | `false` | When `true`, enables demo placeholder content and adds `<meta name="robots" content="noindex">`. Must be `false` on production. |
| `RESEND_API_KEY` | **Yes** | None | API key from [Resend](https://resend.com) used to dispatch lead notification emails. |
| `RESEND_FROM_EMAIL` | No | `onboarding@resend.dev` | Sender address. `onboarding@resend.dev` delivers safely to the Resend account owner email (`vesharo.ai@gmail.com`) before the custom domain is verified. |
| `CONTACT_FORM_RECIPIENT`| No | `vesharo.ai@gmail.com` | Target inbox receiving new client contact inquiries. |
| `GOOGLE_SHEETS_WEBHOOK_URL`| No | None | Free Google Apps Script web app URL for logging leads directly into a Google Spreadsheet. |
| `PUBLIC_TURNSTILE_SITE_KEY` | No | Demo Key | Cloudflare Turnstile public widget key for spam protection. |
| `TURNSTILE_SECRET_KEY` | No | None | Cloudflare Turnstile private key for backend token verification. |
| `UPSTASH_REDIS_REST_URL` | No | In-memory fallback | Upstash Redis REST endpoint for distributed serverless rate limiting. |
| `UPSTASH_REDIS_REST_TOKEN`| No | None | Upstash Redis REST access token. |
| `PUBLIC_UMAMI_WEBSITE_ID` | No | None | Free privacy-friendly analytics website tracking ID (Umami Cloud). |

---

## 3. Production Deployment Guide (Vercel)

Vesharo is configured for seamless deployment on Vercel via `@astrojs/vercel` serverless adapter.

### 3.1 Vercel Project Settings
- **Framework Preset**: `Astro`
- **Build Command**: `npm run build`
- **Output Directory**: Automatically handled by Astro Vercel adapter (`.vercel/output`)
- **Node.js Version**: `24.x` (Configured in Vercel project settings)

### 3.2 Setting Up the Custom Domain (`vesharo.com`)
1. In the Vercel Dashboard, go to **Settings > Domains**.
2. Add `vesharo.com` and `www.vesharo.com`.
3. In your DNS registrar (Namecheap, Cloudflare, etc.), add the recommended DNS records:
   - `A` record for `@` pointing to `76.76.21.21`
   - `CNAME` record for `www` pointing to `cname.vercel-dns.com`
4. Wait for SSL certificate provisioning (typically 2–5 minutes).

### 3.3 Production Launch Gate Checklist
Before pointing DNS to production, ensure:
```bash
# 1. Run full verification suite
npm test

# 2. Check that no demo content would leak to production
npm run check:placeholders

# 3. Verify Astro build compiles without errors
npm run check
```

---

## 4. Rollback & Disaster Recovery Procedures

### 4.1 Instant Vercel Rollback (Recommended - 30 seconds)
If a critical regression is detected in production:
1. Log into [vercel.com](https://vercel.com).
2. Navigate to **Deployments**.
3. Locate the previous healthy deployment (marked with a green checkmark).
4. Click the three dots `...` next to the deployment and select **Instant Rollback**.
5. Confirm. Vercel routes 100% of live traffic to the healthy build immediately without rebuilding.

### 4.2 Git Rollback (Permanent Fix)
```bash
# Find the last stable commit hash
git log --oneline -n 5

# Revert the offending commit cleanly
git revert <COMMIT_HASH> -m "VS-REVERT: Fix critical regression"

# Push to your deployment branch
git push origin feature/VS-00-05-website-fixes
```

---

## 5. Contact Ingestion & Email Delivery Architecture

The `/api/contact` endpoint executes four tiers of automated validation and resilience:

```text
[ Incoming POST /api/contact ]
         │
         ▼
[ 1. Rate Limiting Check ]
   ├── Upstash Redis REST API (Serverless distributed counter)
   └── Fallback to in-memory bounded LRU cache if Redis unavailable
         │
         ▼
[ 2. Anti-Spam Security ]
   ├── Payload Size Check (<= 64KB)
   ├── Honeypot Field (_gotcha must be empty)
   ├── Time-Trap Detection (Reject submissions faster than 1500ms)
   └── Cloudflare Turnstile Validation (If configured)
         │
         ▼
[ 3. Dispatch Pipeline ]
   ├── Forward lead data to Google Sheets Webhook (Async, non-blocking)
   └── Send transactional alert via Resend to vesharo.ai@gmail.com
```

---

## 6. Monitoring & Health Checks

- **Site Health**: Monitor HTTP 200 responses on `https://vesharo.com/` and `https://vesharo.com/services/mobile-app-development`.
- **API Health**: `POST https://vesharo.com/api/contact` with an empty body should return HTTP `400` with descriptive JSON validation errors (not HTTP 500 or 404).
- **SSL Status**: Automatic renewal via Let's Encrypt / Vercel.
- **Analytics**: Real-time traffic metrics visible in Umami Cloud or Vercel Web Analytics dashboard.
