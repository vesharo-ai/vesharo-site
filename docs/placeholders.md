# Vesharo Demo & Placeholder Content Registry (VS-30 / VS-29.4)

> **Document Status**: Active  
> **Review Mode Flag**: `PUBLIC_REVIEW_MODE`  
> **Launch Gate**: `npm run check:placeholders`  
> **Sign-off Authority**: Hitesh Chauhan (Founder)  
> **Linked Post-Launch Task**: `VS-29 -> 29.4 Replace placeholders with real logos, testimonials, photos & screenshots`

---

## 1. Overview & Policy

Per **AGENTS.md** and **VS-00 Content Integrity Rules**:
1. **No Invented Proof in Production**: Vesharo never displays fabricated statistics, fake client names, fictitious testimonials, or unverified portfolio case studies on the live public domain (`https://vesharo.com`).
2. **Review Mode (`PUBLIC_REVIEW_MODE=true`)**: For internal stakeholder reviews, design approvals, and preview deployments (`*.vercel.app`), realistic demo content is permitted **strictly** under the condition that:
   - Every demo entry carries `placeholder: true`.
   - A visible amber **"DEMO CONTENT"** badge is rendered next to the item.
   - A site-wide top review banner announces `"Review build — demo content active for internal sign-off, not final"`.
   - `noindex, nofollow` meta tags and `robots.txt Disallow: /` are enforced automatically.
3. **Production Mode (`PUBLIC_REVIEW_MODE=false`)**:
   - The build filter (`src/lib/content.ts`) strips all `placeholder: true` entries automatically.
   - The site renders strictly verified production content.

---

## 2. Active Placeholder Registry

The following table catalogs every demo entry across all content collections:

| Collection | ID | Entry Name / Title | Category / Role | File Location | Replacement Requirement | Post-Launch Task |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Team** | `demo-cloud-lead` | Vikram Patel | Lead Cloud Infrastructure Architect | `src/content/team.json` | Replace with actual senior hire profile or remove when team expands | VS-29.4 |
| **Team** | `demo-ai-lead` | Ananya Iyer | Senior AI Systems Engineer | `src/content/team.json` | Replace with actual AI research hire or client solutions engineer | VS-29.4 |
| **Clients** | `demo-supply-chain` | Enterprise Freight Logistics | Supply Chain & IoT | `src/content/clients.json` | Replace with authorized enterprise logistics client logo & name | VS-29.4 |
| **Clients** | `demo-healthtech` | PulseCare Telehealth Systems | Healthcare Automation | `src/content/clients.json` | Replace with authorized digital health client engagement | VS-29.4 |
| **Testimonials** | `demo-telehealth-feedback` | PulseCare Network | Digital Health Systems | `src/content/testimonials.json` | Replace with verified quote & written consent from healthcare client | VS-29.4 |
| **Testimonials** | `demo-logistics-feedback` | Apex Freight Solutions | Fleet Intelligence & Telematics | `src/content/testimonials.json` | Replace with verified quote & written consent from supply chain client | VS-29.4 |

---

## 3. Verified Real Production Content (Always Active)

The following portfolio projects and leadership profiles are **100% verified real assets** (`placeholder: false`):

### Real Products & Case Studies
1. **LockApp (`/portfolio/lockapp`)**: Android MDM platform with offline EMI lock, kiosk locking, and real-time cloud management.
2. **NavratriOS (`/portfolio/navratrios`)**: Cultural festival & large venue ticketing engine with offline-first QR scanners handling 50k+ attendees.
3. **Wirebench (`/portfolio/wirebench`)**: Developer API workbench with contract drift detection, automated schema mocking, and CI/CD gates.

### Real Verified Leadership
1. **Hitesh Chauhan (`id: hitesh-chauhan`)**: Founder (`order: 1`, `placeholder: false`).
2. **Harsh Siddhapura (`id: harsh-siddhapura`)**: Co-Founder & Principal Solutions Architect (`order: 2`, `placeholder: false`).

---

## 4. Replacement & Go-Live Runbook (VS-29.4)

When real client assets or team approvals are obtained post-launch:

1. **Obtain Written Consent**:
   - For client logos: Signed email confirmation or logo usage agreement.
   - For testimonials: Exact approved quote, author full name, verified title, and company legal name.
2. **Update Content Files**:
   - Open target JSON file (`src/content/testimonials.json`, `src/content/clients.json`, or `src/content/team.json`).
   - Replace demo data with approved details and set `"placeholder": false`.
3. **Execute Launch Gate Validation**:
   ```bash
   npm run check:placeholders
   ```
4. **Deploy to Production**:
   - Ensure Vercel production environment variable `PUBLIC_REVIEW_MODE` is set to `false`.
   - Run type & build verification:
     ```bash
     npm run check
     ```
