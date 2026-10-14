# Vesharo Post-Launch Operations Runbook (VS-29)

> **Execution Phase**: Post-Domain Purchase & Go-Live  
> **Target Production Domain**: `https://vesharo.com`  
> **Covered Sub-Tasks**: VS-29.1, VS-29.2, VS-29.3, VS-29.4, VS-29.5  
> **Author**: Vesharo Core Engineering Team  

---

## 1. Task 29.1 — Domain Email Setup & Public Email Swap

Once the apex domain `vesharo.com` is active on Cloudflare or Namecheap:

### A. Mail Provider Configuration (Zoho Mail Free Tier or Google Workspace)
1. **MX Records**:
   | Priority | Host | Points To | TTL |
   | :--- | :--- | :--- | :--- |
   | 10 | `@` | `mx.zoho.in` (or `aspmx.l.google.com`) | Auto / 3600 |
   | 20 | `@` | `mx2.zoho.in` (or `alt1.aspmx.l.google.com`) | Auto / 3600 |
   | 50 | `@` | `mx3.zoho.in` (or `alt2.aspmx.l.google.com`) | Auto / 3600 |

2. **SPF Record (TXT)**:
   ```txt
   v=spf1 include:zoho.in include:resend.com ~all
   ```
   *(Ensure both mail client and transactional provider Resend are authorized)*

3. **DKIM Record (TXT)**:
   - Host: `zoho._domainkey.vesharo.com`
   - Value: Generated from Zoho Admin Console (2048-bit key)

4. **DMARC Record (TXT)**:
   - Host: `_dmarc.vesharo.com`
   - Value: `v=DMARC1; p=quarantine; rua=mailto:postmaster@vesharo.com; pct=100; sp=quarantine`

### B. Codebase Email Swap Checklist
Update the placeholder email address across all project files:
- [ ] `src/config/site.ts`: Update `contact.email` to `contact@vesharo.com`
- [ ] `src/lib/jsonLd.ts`: Update `email` in `getOrganizationJsonLd`
- [ ] `public/llms.txt` and `public/llms-full.txt`: Verify contact line reads `contact@vesharo.com`
- [ ] `src/pages/privacy.astro`, `terms.astro`, `cookies.astro`: Replace grievance/legal email
- [ ] **Vercel Environment Variables**:
  - `CONTACT_TO_EMAIL`: `contact@vesharo.com`
  - `CONTACT_FROM_EMAIL`: `notifications@vesharo.com`
- [ ] **End-to-End Verification**: Submit live `/contact` form and confirm delivery into the inbox within 15 seconds.

---

## 2. Task 29.2 — Real Social Profile Links & Schema `sameAs`

### A. Profiles Checklist
Create and configure authentic organization handles:
- **LinkedIn**: `https://www.linkedin.com/company/vesharo`
- **X (Twitter)**: `https://x.com/vesharo_ai`
- **GitHub**: `https://github.com/vesharo-ai`

### B. Schema Alignment
Update `src/lib/jsonLd.ts` and `src/config/site.ts`:
```ts
sameAs: [
  "https://www.linkedin.com/company/vesharo",
  "https://x.com/vesharo_ai",
  "https://github.com/vesharo-ai"
]
```
Verify schema using the **Google Rich Results Test** tool to confirm zero warnings on `Organization` schema.

---

## 3. Task 29.3 — Google Business Profile & LinkedIn Company Page

### A. Google Business Profile (GBP)
1. **Sign in** to Google Business Profile Manager with the official Google account.
2. **Business Name**: `Vesharo` (Exact match — do not keyword stuff).
3. **Primary Category**: `Software Company` (Secondary: `Information Technology Services`).
4. **Physical Location**: Ahmedabad, Gujarat, India (Zip: 380015).
5. **Contact Phone**: `+91 95862 12495`.
6. **Website URL**: `https://vesharo.com`.
7. **Appointment URL**: `https://cal.com/vesharo/discovery`.
8. **Services Listed**:
   - AI Automation & LLM Workflows
   - Autonomous AI Agents & Chatbots
   - Custom Software Engineering
   - Mobile Application Development
   - Cloud Infrastructure & DevOps

### B. LinkedIn Company Page
1. Set Profile Picture to `/brand/logo.svg` icon mark (Blue Chevron on Navy).
2. Set Cover Image to modern cyber grid visual with tagline: `"Software and AI automation that ships."`
3. Add Custom CTA Button: `Visit Website` pointing to `https://vesharo.com`.

---

## 4. Task 29.4 — Replace Placeholders with Real Client Assets

Refer to **`docs/placeholders.md`** for the complete audit of 6 demo items:
1. Replace fictional demo profiles in `src/content/team.json`.
2. Replace demo client vertical representation in `src/content/clients.json`.
3. Replace demo reviews in `src/content/testimonials.json` with client-authorized quotes.
4. Run validation gate:
   ```bash
   npm run check:placeholders
   ```
5. Ensure `PUBLIC_REVIEW_MODE=false` in Vercel production settings.

---

## 5. Task 29.5 — Search Console, Indexing & Uptime Monitoring

### A. Search Engine Indexing
1. **Google Search Console**:
   - Add Domain property: `vesharo.com` (DNS TXT verification).
   - Submit Sitemap: `https://vesharo.com/sitemap-index.xml`.
   - Inspect and request initial indexing for top priority URLs:
     - `https://vesharo.com/`
     - `https://vesharo.com/services`
     - `https://vesharo.com/portfolio`
     - `https://vesharo.com/pricing`
     - `https://vesharo.com/about`
     - `https://vesharo.com/contact`
2. **Bing Webmaster Tools**:
   - Import verification directly from Google Search Console.
   - Verify indexation of `sitemap-index.xml`.

### B. Continuous Uptime Monitoring (BetterStack / UptimeRobot)
1. **Endpoint Monitors**:
   - Primary: `https://vesharo.com/` (HTTP 200, 3-minute interval, SSL expiry alert 14 days prior).
   - API Health: `https://vesharo.com/api/contact` (Method: GET / OPTIONS).
2. **Alert Notifications**:
   - Route alerts to `contact@vesharo.com` and admin SMS/WhatsApp webhook.
3. **Core Web Vitals Check**:
   - After 7 days of live traffic, audit GSC Page Experience report:
     - LCP (Largest Contentful Paint) < 2.5s
     - CLS (Cumulative Layout Shift) < 0.1
     - INP (Interaction to Next Paint) < 200ms

---

## 6. Task 38 — Production Go-Live & Rollback Runbook (VS-38)

### A. Vercel Domain Connection & DNS Records (38.1 & 38.2)
1. **Vercel Project Settings -> Domains**:
   - Add Domain: `vesharo.com` (Set as Primary Domain).
   - Add Domain: `www.vesharo.com` (Set to automatically redirect to `vesharo.com` with 301).
2. **DNS Registrar Records (Cloudflare or Namecheap)**:
   | Type | Name | Content / Target | Proxy Status |
   | :--- | :--- | :--- | :--- |
   | **A** | `@` | `76.76.21.21` (Vercel IP) | DNS Only (or Cloudflare Proxied) |
   | **CNAME** | `www` | `cname.vercel-dns.com.` | DNS Only (or Cloudflare Proxied) |
3. **SSL Certificate**:
   - Vercel automatically generates and auto-renews Let's Encrypt Wildcard SSL.
   - Verify certificate status turns **Valid** within 3–15 minutes.

### B. Production Environment Switch (38.3)
1. **In Vercel Project Settings -> Environment Variables**:
   - `PUBLIC_REVIEW_MODE` = `false` (Production environment)
   - `PUBLIC_REVIEW_MODE` = `true` (Preview environment only)
   - `RESEND_API_KEY` = Production key from Resend dashboard
   - `CONTACT_TO_EMAIL` = `contact@vesharo.com`
2. **Trigger Production Deployment**:
   - Merge `feature/VS-00-05-website-fixes` into `main`.
   - Vercel automatically builds and deploys to `https://vesharo.com`.

### C. Live Smoke Test Checklist (38.4)
- [ ] `https://vesharo.com` loads with valid HTTPS lock icon (zero mixed content warnings).
- [ ] `http://vesharo.com` redirects to `https://vesharo.com`.
- [ ] `https://www.vesharo.com` redirects to `https://vesharo.com`.
- [ ] Yellow review banner is absent.
- [ ] `/robots.txt` returns `Allow: /` and links `Sitemap: https://vesharo.com/sitemap-index.xml`.
- [ ] Live contact form submitted and verified in team inbox.
- [ ] Booking button opens Cal.com scheduling modal cleanly.

### D. Emergency Rollback Readiness (38.4)
If any critical blocker is identified post-switch:
1. **Instant Vercel Rollback**:
   - In Vercel Deployments dashboard, click the previous known-good deployment -> Click **Instant Rollback**. Rollback takes < 5 seconds.
2. **Review Mode Re-engagement**:
   - Set `PUBLIC_REVIEW_MODE=true` in Vercel to reinstate `noindex` headers and review disclaimers while debugging.

