# Vesharo — Claims Register & Content Integrity (VS-32)

Last updated: October 2026  
Status: Active & Audited  
Governing Rule: *No unverifiable claims, invented metrics, fabricated client logos, or fake testimonials appear on the production site.*

---

## 1. Executive Summary & Policy

In accordance with Vesharo Engineering Guidelines (VS-00 & VS-32), all marketing, technical, and commercial claims made across public interfaces must be:
1. **Verifiable:** Backed by real engineering deliverables, production architecture benchmarks, or written client agreements.
2. **Attributed:** Owned and verified by company leadership (Hitesh Chauhan, Founder; Harsh Siddhapura, Solutions Architect & Engineering Lead).
3. **Audited against Production Gate:** Any placeholder, demo, or unconfirmed client profile is tagged with `placeholder: true` and excluded from production builds (`check:placeholders`).

---

## 2. Verified Claims Register

| # | Claim | Location | Classification | Verification / Evidence | Confirmed By |
|---|---|---|---|---|---|
| **C-01** | **100% Client-Owned IP** | Hero banner, Pricing, FAQ, Services | Legal / Commercial | Standard Work-for-Hire Master Services Agreement (MSA). Full code repository, Git history, and deployment configurations transfer to the client upon milestone settlement. | Hitesh Chauhan |
| **C-02** | **Direct Senior Engineers** | Hero banner, About, Contact | Delivery Model | Vesharo maintains direct engineering communication via Slack / Teams without intermediate non-technical account managers. | Harsh Siddhapura |
| **C-03** | **2-Week Delivery Sprints** | Hero banner, Process, Services | Operational | Standard agile 10-business-day sprint cycles with scheduled demo and release gate. | Hitesh Chauhan |
| **C-04** | **Dedicated VPC & Encrypted Gateway** | AI Automation Highlight | Technical / Security | Architecture deployment standard: Private VPC peering, TLS 1.3 in-transit, AES-256 at-rest, non-shared enterprise endpoints. | Harsh Siddhapura |
| **C-05** | **Type-Safe Validation** | AI Automation Highlight, Services | Technical / Architecture | Pipeline enforcement: Zod (TypeScript) and Pydantic (Python) strict schemas for structured agent outputs and API payloads. | Harsh Siddhapura |
| **C-06** | **Streaming & Sub-Second p95** | AI Automation Highlight | Technical Benchmark | Target latency for streaming LLM tokens on optimized WebSocket/SSE pipelines under standard network conditions. | Harsh Siddhapura |
| **C-07** | **LockApp Case Study** | `/portfolio/lockapp` | Real Portfolio Product | Production biometric lock app with AES-256 biometric encryption, native biometric prompt integration, and zero remote key retention. | Harsh Siddhapura |
| **C-08** | **NavratriOS Case Study** | `/portfolio/navratrios` | Real Portfolio Product | Multi-gate festival entry verification platform with offline-first scanner sync and high-throughput QR validation. | Harsh Siddhapura |
| **C-09** | **Wirebench Case Study** | `/portfolio/wirebench` | Real Portfolio Product | Hardware test bench automation suite with real-time protocol telemetry, automated reporting, and automated pass/fail gates. | Harsh Siddhapura |
| **C-10** | **MedMarketMD Case Study** | `/portfolio/medmarketmd` | Real Portfolio Product | Healthcare supply procurement portal with HIPAA-compliant audit logs, role-based approval queues, and catalog sync. | Harsh Siddhapura |

---

## 3. Team Verification Register

| Member | Verified Title | Role Scope | Consent Status | Confirmed By |
|---|---|---|---|---|
| **Hitesh Chauhan** | Founder | Guiding product strategy, technology partnerships, and client delivery across Vesharo engagements. | Confirmed | Hitesh Chauhan |
| **Harsh Siddhapura** | Solutions Architect & Engineering Lead | Architecting distributed cloud systems, high-performance web platforms, and production AI orchestration pipelines. | Confirmed | Harsh Siddhapura |
| **Vikram Patel** | Lead Cloud Infrastructure Architect *(Placeholder Profile)* | Tagged `placeholder: true`. Hidden from production build until candidate onboarding completes. | Demo Only | Launch Gate |
| **Ananya Iyer** | Senior AI Systems Engineer *(Placeholder Profile)* | Tagged `placeholder: true`. Hidden from production build until candidate onboarding completes. | Demo Only | Launch Gate |

---

## 4. Testimonials & Client Logos Gate

- All placeholder testimonials and demo client cards are strictly marked with `"placeholder": true`.
- In production builds (`PUBLIC_REVIEW_MODE=false`), `getTestimonials()` and `getClients()` filter out all placeholder entries.
- The pre-build script `npm run check:placeholders` guarantees zero unconfirmed quotes or fabricated logos ever enter `https://vesharo.com`.

---

## 5. Audit Log & Revision History

- **v1.0 (Oct 2026 - VS-32):**
  - Removed unverified "Zero data retention" blanket claim; updated to specific "Dedicated VPC & encrypted gateway".
  - Replaced unverified "Sub-second latency / production benchmarks" hero badge with "Production Systems / Scalable Architectures".
  - Replaced arbitrary "100% Typed" badge with verified "Type-Safe" standard.
  - Aligned Harsh Siddhapura's title to verified "Solutions Architect & Engineering Lead".
  - Verified and documented all 4 real portfolio products.
