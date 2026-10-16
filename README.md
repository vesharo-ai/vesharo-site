# Vesharo — Production Website

Official company website for **Vesharo** (IT services & AI automation company).

- **Brand**: Vesharo
- **Public Contact**: `vesharo.ai@gmail.com` · Phone/WhatsApp: `+91 95862 12495`
- **Location**: Ahmedabad, Gujarat, India
- **Business Hours**: Mon–Fri 9:00–18:30 IST
- **Deployment Platform**: Vercel

---

## 🛠 Tech Stack

- **Framework**: [Astro 7](https://astro.build) (Static site generation + selective serverless API routes)
- **Adapter**: `@astrojs/vercel` (for serverless `/api/contact` route)
- **UI Islands**: React 19
- **CSS / Styling**: Design Tokens (`src/styles/tokens.css`, `src/styles/brand.css`) + Bootstrap 5 + Vanilla CSS
- **Typography**: Self-hosted variable `Plus Jakarta Sans` (headings) and `Inter` (body)
- **Analytics**: Cookieless Plausible / Umami wrapper (`src/components/common/Analytics.astro`)
- **Animation & Motion**: GSAP, Swiper, lightweight IntersectionObserver scroll-reveal
- **Security & Headers**: Strict HSTS, Content Security Policy (CSP), anti-clickjacking in `vercel.json`

---

## 📋 Core Services (7)

1. **Mobile App Development** (Flagship): Cross-platform iOS & Android mobile apps built with React Native and Expo, 60 FPS performance, offline SQLite caching, and automated store delivery.
2. **AI Automation**: Workflow automation, LLM integration, intelligent pipeline orchestration.
3. **AI Agents & Chatbots**: Custom conversational AI, autonomous task agents, customer care bots.
4. **Custom Software Development**: Enterprise SaaS, full-stack web platforms, robust APIs.
5. **Web Development**: High-performance websites, Next.js / Astro apps, headless CMS.
6. **Cloud & DevOps**: AWS, GCP, containerization, automated CI/CD pipelines, infrastructure as code.
7. **IT Consulting**: Technical roadmapping, architecture audits, digital transformation strategy.

---

## 🚀 Real Portfolio Products

- **LockApp**: B2B SaaS for remote management of Android devices sold on EMI.
- **NavratriOS**: Multi-tenant Navratri festival registration + QR gate-entry SaaS.
- **Wirebench**: Private API client featuring migration tools, contract-drift detection, and team changelogs.

---

## 📚 Documentation & Guides

- [Deployment & Custom Domain Guide](docs/deployment.md) — Step-by-step Vercel setup, DNS records, SSL, Search Console, and uptime monitoring.
- [Content Editing Guide](docs/content-guide.md) — How to edit services, add blog posts, portfolio case studies, and update company facts.
- [Brand Guidelines](docs/brand.md) — Color palette, typography tokens, logo usage, and design standards.
- [Image Credits](docs/image-credits.md) — Unsplash & curated asset attribution.

---

## 💻 Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts dev server locally at `http://localhost:4321` |
| `npx astro dev --background` | Runs dev server in background mode |
| `npx astro dev stop` | Stops background dev server |
| `npm run check` | Runs `astro check` followed by `astro build` |
| `npm run build` | Builds production-ready static output + Vercel serverless function |
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
