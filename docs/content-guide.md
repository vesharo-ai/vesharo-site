# Vesharo — Content Editing & Maintenance Guide (VS-40)

This guide provides step-by-step instructions for Hitesh and future developers to add, edit, or update website content on the Vesharo website without needing deep technical assistance.

---

## 1. Directory Structure Overview

All content is structured cleanly in JSON and TypeScript data models:

```text
src/
├── config/
│   └── site.ts               # Global company facts, social links, contact info
├── content/
│   ├── blog.json             # Blog articles & technical guides
│   ├── faq.json              # Frequently Asked Questions categorized by topic
│   ├── services.json         # 7 core capabilities & deliverables
│   ├── portfolio.json        # Verified case studies (LockApp, NavratriOS, Wirebench)
│   ├── team.json             # Verified team leadership and credentials
│   ├── clients.json          # Client organizations & industry verticals
│   └── testimonials.json     # Client testimonials & reviews
├── data/
│   └── pricing.ts            # Pricing tiers, estimation parameters, comparison table
└── pages/
    ├── index.astro           # Homepage
    ├── about/index.astro     # About page & leadership facts
    ├── contact/index.astro   # Contact & inquiry form page
    ├── services/             # Services index & dynamic [slug].astro routes
    └── ...                   # Legal & utility pages
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
};
```
*Changes made here automatically propagate across Header, Footer, Contact Page, and SEO structured data (JSON-LD).*

---

## 3. Adding or Editing Blog Posts

Blog articles live inside:
👉 `src/content/blog.json`

To add a new post, simply append an object to the JSON array:
```json
{
  "id": "new-article-slug",
  "title": "Article Title Here",
  "summary": "Short 1-2 sentence preview for cards and meta description.",
  "date": "2026-10-14",
  "readTime": "5 min read",
  "category": "AI Automation",
  "content": [
    "Paragraph 1 text...",
    "Paragraph 2 text..."
  ],
  "author": {
    "name": "Vesharo Engineering",
    "role": "Systems Architecture"
  }
}
```

---

## 4. Adding or Editing FAQs

FAQs live in:
👉 `src/content/faq.json`

```json
{
  "id": "faq-unique-id",
  "question": "What is the question text?",
  "answer": "Detailed answer explaining the technical architecture or business policy.",
  "category": "Engineering & Security"
}
```

---

## 5. Editing Portfolio Case Studies

Verified case studies live in:
👉 `src/content/portfolio.json`

> [!IMPORTANT]
> **Content Integrity Rule**: Vesharo maintains 100% authentic work history. Only genuine projects (e.g. LockApp, NavratriOS, Wirebench, MedMarketMD) with verified technical architecture and deliverables may be added.

```json
{
  "id": "case-study-slug",
  "title": "Product Title",
  "tagline": "One-line technical summary",
  "client": "Client Name or Internal Initiative",
  "overview": "Detailed project description...",
  "stack": ["React Native", "Go", "Docker", "AWS"],
  "metrics": [
    "Sub-second verification response",
    "Zero database downtime"
  ]
}
```

---

## 6. Updating Team Members & Credentials

Team members live in:
👉 `src/content/team.json`

```json
{
  "id": "member-slug",
  "name": "Full Name",
  "role": "Official Role Title",
  "bio": "2-3 sentence overview of engineering focus.",
  "initials": "FN",
  "socials": {
    "linkedin": "https://linkedin.com",
    "github": "https://github.com/vesharo-ai"
  },
  "order": 1,
  "placeholder": false
}
```
*Note: Any unverified member must have `"placeholder": true` so it is safely omitted from production builds.*

---

## 7. Testing & Verifying Changes Locally

Before committing or pushing changes to production:

```bash
# 1. Start development server
npm run dev

# 2. Verify types, content schema and production build
npm run check

# 3. Check for any leaking demo placeholders
npm run check:placeholders
```
If `npm run check` exits with `0 errors, 0 warnings`, your changes are valid and ready to push to production!
