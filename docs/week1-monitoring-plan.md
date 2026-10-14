# Vesharo Post-Launch Week-1 Monitoring & Bug Triage Plan (VS-39)

**Execution Window:** Day 1 to Day 7 Post-Go-Live  
**Lead Engineer:** Harsh Siddhapura  
**Executive Sponsor:** Hitesh Chauhan  
**Goal:** Guarantee 99.9% uptime, zero dropped project inquiries, rapid P1 defect resolution within 24h, and search engine indexation health.

---

## 1. Daily Morning Audit Checklist (Days 1–7)

Execute every business day at 09:30 IST:

- [ ] **1. Form Delivery Verification:**
  - Verify Vercel Function logs for `/api/contact`.
  - Confirm Resend API dashboard shows 100% delivery rate with 0 bounces or drops.
  - Test live contact form submission with internal test account; verify inbox reception in < 30s.
- [ ] **2. Uptime & Status Checks:**
  - Inspect BetterStack / UptimeRobot dashboard for `https://vesharo.com/`.
  - Confirm average response time < 350ms across global edge nodes.
  - Verify SSL certificate validity and absence of certificate chain errors.
- [ ] **3. Search Console & Indexing Health:**
  - Check Google Search Console -> Pages -> Indexing status.
  - Review 404 / 500 error reports; verify absence of soft 404s.
  - Check sitemap processing status (`/sitemap-index.xml`).
- [ ] **4. Web Analytics & Event Telemetry:**
  - Verify Plausible / Umami dashboard displays incoming visitor traffic.
  - Verify key conversion events firing: `cta_click`, `form_submit`, `calendar_booking`.
- [ ] **5. Browser Console & Sentry Logs:**
  - Check for unhandled client-side JavaScript errors or hydration mismatches.

---

## 2. Issue Severity & Triage SLA Matrix

| Severity | Definition | Target Response | Target Resolution | Examples |
|---|---|---|---|---|
| **P1 — Critical** | Site unavailable, contact form broken, SSL error, severe layout breakdown | < 1 hour | < 24 hours | `/api/contact` returning 500, apex domain failing to resolve |
| **P2 — Major** | Functional defect with workaround, visual regression on specific device | < 4 hours | < 48 hours | Dropdown navigation stutter on older Safari versions, non-critical image failing to load |
| **P3 — Minor** | Copy typo, minor spacing discrepancy, enhancement request | < 12 hours | Next release | Small alignment offset, minor wording change |

---

## 3. Bug Triage & Ticketing Workflow

1. **Detection:** Issue reported via automated monitoring alert or visitor email.
2. **Reproduction:** Verify defect on staging / local dev server (`http://localhost:4321`).
3. **Ticket Creation:** Open ClickUp bug ticket tagged `[Hotfix]` with reproduction steps, viewport, and browser.
4. **Patch & Verify:** Commit fix with message `VS-FIX: brief explanation`, run `npm run check`.
5. **Deploy & Verify:** Deploy to Vercel preview, test, and promote to production.

---

## 4. Day-7 Executive Report Template

At 18:00 IST on Day 7, deliver the following summary report:
1. **Total Traffic & Unique Visitors**
2. **Form Inquiries Received & Response Times**
3. **Uptime Percentage (Target: 99.9%+)**
4. **Resolved Bugs & Patches Summary**
5. **Next Milestone Roadmap (Sprint Planning)**
