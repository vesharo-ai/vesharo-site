# Vesharo — Content Editing & Maintenance Guide

This guide explains how engineering and marketing team members can add, edit, or update website content on the Vesharo website.

---

## 1. Directory Structure Overview

```text
src/
├── config/
│   └── site.ts               # Global company facts, social links, contact info
├── content/
│   ├── blog/                 # Markdown / MDX blog articles
│   └── portfolio/            # Portfolio case studies (LockApp, NavratriOS, Wirebench)
├── data/
│   └── pricing.ts            # Pricing tiers, estimation parameters, comparison table
├── pages/
│   ├── index.astro           # Homepage
│   ├── about/index.astro     # About page & leadership facts
│   ├── contact/index.astro   # Contact & inquiry form page
│   ├── services/             # Services index & dynamic [slug].astro routes
│   └── ...                   # Legal & utility pages
└── styles/
    ├── tokens.css            # Color, typography, spacing CSS variables
    └── brand.css             # Theme and styling overrides
```

---

## 2. Updating Company Contact & General Info

To change phone number, email, address, working hours, or social media links, edit:
👉 `src/config/site.ts`

```ts
export const siteConfig = {
  name: "Vesharo",
  tagline: "Software and AI automation that ships.",
  url: "https://vesharo.com",

  contact: {
    email: "contact@vesharo.com",
    phone: "+91 95862 12495",
    whatsapp: "+919586212495",
    whatsappUrl: "https://wa.me/919586212495",
    bookingUrl: "https://cal.com/vesharo/discovery",
    location: "Ahmedabad, Gujarat, India",
    hours: "Mon–Fri 9:00–18:30 IST",
  },
  // ...
};
```
*Changes made here automatically propagate across Header, Footer, Contact Page, SEO structured data (JSON-LD), and schema.*

---

## 3. Adding or Editing Blog Posts

Blog articles live as individual Markdown files inside:
👉 `src/content/blog/<slug>.md`

### Frontmatter Schema:
```yaml
---
title: "What AI Agents Can and Cannot Do in 2026"
description: "A realistic engineering guide to autonomous agents, tool calling, and workflow automation."
pubDate: 2026-03-15
author: "Vesharo Engineering Team"
category: "AI & Automation"
readTime: "7 min read"
heroImage: "/images/blog/ai-agents.jpg"
tags: ["AI", "Agents", "Automation", "Architecture"]
---

## Article Content in Markdown...
```

*When a new `.md` file is committed, Astro automatically generates its route at `/blog/<slug>`, updates `/blog`, regenerates RSS feed (`/rss.xml`), and updates the XML sitemap.*

---

## 4. Adding or Editing Portfolio Case Studies

Real case studies live in:
👉 `src/content/portfolio/<id>.md`

> [!IMPORTANT]
> **Content Integrity Rule**: Vesharo maintains 100% authentic work history. Only genuine projects (e.g. LockApp, NavratriOS, Wirebench) with verified technical architecture and deliverables may be added.

### Case Study Schema:
```yaml
---
id: "wirebench"
title: "Wirebench"
tagline: "High-Throughput Distributed Performance Testing Bench"
category: "Developer Tooling & Cloud Benchmarking"
client: "Open Source / Internal"
duration: "4 Months"
year: "2025"
technologies: ["Go", "gRPC", "Docker", "Prometheus", "Grafana"]
impact: ["100k+ req/sec simulation", "Sub-millisecond jitter tracking"]
---
```

---

## 5. Editing Services & FAQs

- **Service Pages**: Individual service definitions and capabilities are maintained in `src/pages/services/[slug].astro` and `src/config/site.ts`.
- **Pricing Data**: Tiers, FAQ accordions, and comparison matrix are located in `src/data/pricing.ts`.

---

## 6. Testing & Verifying Changes Locally

Before pushing changes to GitHub:

```bash
# 1. Start development server
npm run dev

# 2. Verify types and production build
npm run check
```
If `npm run check` exits with `0 errors, 0 warnings`, your changes are valid and ready to commit!
