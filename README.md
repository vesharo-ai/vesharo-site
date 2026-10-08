# Vesharo — Production Website

Official company website for **Vesharo** (IT services & AI automation company).

- **Brand**: Vesharo
- **Public Contact**: `contact@vesharo.com` · Phone/WhatsApp: `+91 95862 12495`
- **Location**: Ahmedabad, Gujarat, India
- **Business Hours**: Mon–Fri 9:00–18:30 IST
- **Deployment**: Vercel

---

## 🛠 Tech Stack

- **Framework**: [Astro 7](https://astro.build) (Static site generation + selective hydration)
- **UI Islands**: React 19
- **CSS / Styling**: Design Tokens (`src/styles/tokens.css`, `src/styles/brand.css`) + Bootstrap 5 + Vanilla CSS
- **Typography**: Self-hosted variable `Plus Jakarta Sans` (headings) and `Inter` (body)
- **Animation & Motion**: GSAP, Swiper

---

## 📋 Core Services (7)

1. **AI Automation**: Workflow automation, LLM integration, intelligent pipeline orchestration.
2. **AI Agents & Chatbots**: Custom conversational AI, autonomous task agents, customer care bots.
3. **Custom Software Development**: Enterprise SaaS, full-stack web platforms, robust APIs.
4. **Web Development**: High-performance websites, Next.js / Astro apps, headless CMS.
5. **Mobile App Development**: Cross-platform Flutter / React Native, native Android/iOS solutions.
6. **Cloud & DevOps**: AWS, GCP, containerization, automated CI/CD pipelines, infrastructure as code.
7. **IT Consulting**: Technical roadmapping, architecture audits, digital transformation strategy.

---

## 🚀 Real Portfolio Products

- **LockApp**: B2B SaaS for remote management of Android devices sold on EMI.
- **NavratriOS**: Multi-tenant Navratri festival registration + QR gate-entry SaaS.
- **Wirebench**: Private API client featuring migration tools, contract-drift detection, and team changelogs.

---

## 💻 Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts dev server locally at `http://localhost:4321` |
| `npx astro dev --background` | Runs dev server in background mode |
| `npx astro dev stop` | Stops background dev server |
| `npm run check` | Runs `astro check` followed by `astro build` |
| `npm run build` | Builds production-ready static output in `dist/` |
| `npm run preview` | Previews production build locally |

---

## 🛡 Content Integrity Rule

**Non-negotiable**:
- No invented clients, testimonials, logos, statistics, awards, or fake team members.
- Use only verified, real content. Where real data is not yet available, sections are built data-driven to hide themselves cleanly when empty.

---

## ✅ Global Definition of Done (DoD)

Every ticket and PR must satisfy:
1. `npm run check` (`astro check` and `npm run build`) passes with **0 errors and 0 warnings**.
2. Zero console errors and zero broken links / images.
3. Zero template placeholder text (`DigiFlow`, `digiflow`, `Lorem ipsum`).
4. Mobile-first responsive (360, 768, 1024, 1440px), accessible with visible keyboard focus states.
5. Lighthouse (mobile) ≥ 95 across Performance, Accessibility, Best Practices, and SEO.
6. Unique `<title>`, meta description, canonical URL, and OG/Twitter tags on every page.
