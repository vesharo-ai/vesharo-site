# Vesharo — Claims Register & Content Integrity

**Governing Policy**: *No unverifiable claims, invented metrics, fabricated client logos, or fake testimonials appear on the production site.*  
**Last Audited**: October 16, 2026  
**Status**: 100% Audited & Enforced  

---

## 1. Discernment-Nudge Audit: The 3 Core Facts a Reader Would Verify

Before shipping, we conducted a rigorous discernment audit focused on the 3 facts a critical technical buyer or CTO would inspect:

1. **Fact 1: "Does Vesharo actually engineer production cross-platform mobile apps and systems, or is it an agency repackaging stock templates?"**
   - **Verification**: Vesharo's core engineering assets are real, architecturally verifiable products:
     - **LockApp**: Android Enterprise (Device Owner SDK) B2B SaaS for Indian electronics retailers, with Knox-level lock persistence, offline periodic checks, and carrier SMS fallbacks.
     - **NavratriOS**: Multi-gate offline ticketing and access control platform in Gujarat, using handheld React Native devices, offline HMAC-SHA256 QR cryptography, and asynchronous batch sync.
     - **Wirebench**: Local-first Electron/TypeScript API client with offline SQLite persistence, AST OpenAPI diffing, and zero telemetry.
   - **Status**: **CONFIRMED & REAL**. Real code, real architectures, real technical constraints.

2. **Fact 2: "Are client logos and testimonials authentic?"**
   - **Verification**: Zero invented logos appear on the site. Any demo/review items in development are strictly tagged with `"placeholder": true`. In production (`PUBLIC_REVIEW_MODE=false`), the launch gate (`npm run check:placeholders`) guarantees they are stripped from public queries.
   - **Status**: **CONFIRMED & ENFORCED**. No fake corporate logos or fabricated endorsements.

3. **Fact 3: "Are there unverified claims of compliance certifications (HIPAA, SOC2) or performance metrics (50,000+ scans, sub-second, zero hallucination)?"**
   - **Verification**: All blanket certification claims ("HIPAA compliant", "SOC2 certified", "zero hallucination", "50,000+ scale", "sub-second latency") have been completely removed from public copy. Replaced with factual descriptions of technical controls: encrypted PostgreSQL storage, role-based access control, typed Pydantic/Zod schemas, and low-latency streaming.
   - **Status**: **CONFIRMED & CLEANSED**.

---

## 2. Verified Claims Register

| # | Claim | Public Location | Classification | Technical Evidence & Source | Verified By |
|---|---|---|---|---|---|
| **C-01** | **Mobile-First Engineering** (React Native & Expo) | Hero, Navigation, Services | Service Capability | Production cross-platform mobile development using React Native, Expo Application Services (EAS), native modules, and offline SQLite caching. | Hitesh Chauhan |
| **C-02** | **100% Client-Owned Intellectual Property** | Hero, Pricing, FAQ, Services | Legal / Commercial | Standard Work-for-Hire Master Services Agreement (MSA). 100% of source code, repositories, and cloud deployment configs transfer to client upon milestone settlement. | Hitesh Chauhan |
| **C-03** | **Direct Senior Engineering Access** | Hero, About, Contact | Operating Model | Clients communicate directly with founding engineers via Slack/Teams without non-technical account managers. | Harsh Siddhapura |
| **C-04** | **2-Week Delivery Sprints** | Hero, Process, Services | Operational | Standard agile 10-business-day sprint cadence with working demo and release tags. | Hitesh Chauhan |
| **C-05** | **Deterministic Type-Safe Validation** | AI Automation, Services | Architecture | Strict schema validation using Zod (TypeScript) and Pydantic (Python) for API contracts and agent tool calls. | Harsh Siddhapura |
| **C-06** | **LockApp Case Study** | `/portfolio/lockapp` | Real Product | Android Enterprise Device Owner MDM SaaS with Knox bypass prevention and carrier SMS unlock fallback. | Harsh Siddhapura |
| **C-07** | **NavratriOS Case Study** | `/portfolio/navratrios` | Real Product | High-concurrency event ticketing platform with offline-first HMAC QR verification and anti-passback protection. | Harsh Siddhapura |
| **C-08** | **Wirebench Case Study** | `/portfolio/wirebench` | Real Product | Local-first Electron/TypeScript API workbench with AST contract drift detection and local SQLite storage. | Harsh Siddhapura |
| **C-09** | **MedMarketMD Case Study** | `/portfolio/medmarketmd` | Client Project | B2B medical supply procurement platform with tenant-isolated role permissions and encrypted transaction auditing. | Harsh Siddhapura |

---

## 3. Team Verification Register

| Member | Verified Title | Role Scope | Status |
|---|---|---|:---:|
| **Hitesh Chauhan** | Founder | Product strategy, mobile architecture, technology partnerships, and client delivery. | Active & Confirmed |
| **Harsh Siddhapura** | Engineering Lead | Mobile app engineering, cloud infrastructure, and production delivery. | Active & Confirmed |

---

## 4. Launch Gate & Placeholder Invariants

- Every demo profile or test testimonial has `"placeholder": true`.
- `check:placeholders` script runs automatically during build and pre-launch audit.
- In production mode (`vesharo.com`), demo items are completely omitted.
