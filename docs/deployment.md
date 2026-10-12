# Vesharo — Vercel Deployment & Domain Connection Guide

This guide details the step-by-step process for deploying the Vesharo production website to Vercel, connecting your custom domain, and verifying post-launch services.

---

## 1. Prerequisites
- GitHub repository access: `vesharo-ai/vesharo-site`
- A [Vercel](https://vercel.com) account
- Domain registrar access (e.g. Cloudflare, Namecheap, GoDaddy, Hostinger)
- (Optional) [Resend](https://resend.com) account for live contact form transactional emails

---

## 2. Linking GitHub to Vercel

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** → **"Project"**.
2. Select your GitHub organization/account and click **"Import"** next to `vesharo-site`.
3. Configure Project Settings:
   - **Framework Preset**: `Astro`
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` (default for Astro)
   - **Install Command**: `npm install`
4. Set Node.js Version:
   - In **Project Settings** → **General** → **Node.js Version**, ensure Node `22.x` or `24.x` is selected.

---

## 3. Environment Variables Configuration

In Vercel **Project Settings** → **Environment Variables**, add the following keys for **Production** and **Preview**:

| Variable Name | Production Value | Description |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | `https://vesharo.com` | Base canonical domain |
| `CONTACT_TO` | `vesharo.ai@gmail.com` | Lead notification recipient |
| `CONTACT_FROM` | `Vesharo Inquiries <leads@vesharo.com>` | Verified sender address in Resend |
| `RESEND_API_KEY` | `re_...` | API key from [Resend](https://resend.com/api-keys) |
| `PUBLIC_PLAUSIBLE_DOMAIN` | `vesharo.com` | Cookieless privacy analytics |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | *(Google token string)* | Google Search Console verification token |
| `PUBLIC_BING_SITE_VERIFICATION` | *(Bing token string)* | Bing Webmaster verification token |

> [!NOTE]
> If `RESEND_API_KEY` is not provided, the contact endpoint runs in safe mock mode without throwing errors.

---

## 4. Custom Domain Connection & DNS Records

### Step 4.1: Add Domain in Vercel
1. In Vercel, go to **Settings** → **Domains**.
2. Enter your apex domain: `vesharo.com` and click **Add**.
3. Select the recommended redirect option:
   - **Redirect `www.vesharo.com` to `vesharo.com`** (Apex canonical, HTTP 308).

### Step 4.2: Configure DNS Records at your Registrar
Log in to your DNS provider (Cloudflare / Namecheap / GoDaddy) and add these records:

| Type | Name / Host | Target / Value | TTL | Proxy Status (Cloudflare) |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `76.76.21.21` | Auto (or 3600) | DNS Only (Gray cloud) |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto (or 3600) | DNS Only (Gray cloud) |

> [!TIP]
> If using Cloudflare, set the Proxy status to **DNS Only** (Gray cloud) during initial SSL issuance by Vercel. Once Vercel issues the certificate, you may enable Cloudflare proxying if desired (SSL mode: *Full (Strict)*).

### Step 4.3: Automatic SSL Certificate
- Vercel automatically issues and renews Let's Encrypt SSL certificates for both `vesharo.com` and `www.vesharo.com`.
- Certificate issuance usually completes within 2–5 minutes after DNS propagation.

---

## 5. Security & Redirect Verification

The site includes production security headers pre-configured in `vercel.json`:
- **HSTS**: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- **Clickjacking Protection**: `X-Frame-Options: DENY`
- **MIME Sniffing**: `X-Content-Type-Options: nosniff`
- **Referrer Policy**: `Referrer-Policy: strict-origin-when-cross-origin`
- **Permissions Policy**: `camera=(), microphone=(), geolocation=()`
- **Content Security Policy (CSP)**: Configured for self assets, Cal.com modals, and Plausible analytics.
- **Apex Redirect**: `www.vesharo.com` permanently redirects (`301`) to `https://vesharo.com`.

---

## 6. Post-Launch Checklist

1. **Verify SSL & Apex Redirect**:
   - Visit `http://vesharo.com` → redirects to `https://vesharo.com`.
   - Visit `https://www.vesharo.com` → redirects to `https://vesharo.com`.
2. **Custom 404 Page**:
   - Visit `https://vesharo.com/non-existent-page` → renders custom branded 404 with instant search.
3. **Submit XML Sitemap**:
   - Submit `https://vesharo.com/sitemap-index.xml` in:
     - [Google Search Console](https://search.google.com/search-console)
     - [Bing Webmaster Tools](https://www.bing.com/webmasters)
4. **Test Live Contact Form**:
   - Submit an inquiry on `https://vesharo.com/contact`.
   - Verify incoming email at `vesharo.ai@gmail.com`.
5. **Set Up Free 24/7 Uptime Monitoring**:
   - Register a free monitor on [BetterStack](https://betterstack.com) or [UptimeRobot](https://uptimerobot.com).
   - URL: `https://vesharo.com` (Check interval: 3–5 minutes).
   - Configure alert notifications to `vesharo.ai@gmail.com` or Telegram/SMS.
