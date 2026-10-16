---
name: vesharo-astro-engineering
description: Astro 7, React 19 island architecture, Vercel Serverless Edge, API security, Upstash rate limiting, and email dispatch standards for the Vesharo website.
---

# Vesharo — Astro & API Engineering Specialist Skill

## 1. Engine & Runtime Constraints
- **Core Framework**: Astro 7 with `@astrojs/vercel` serverless adapter.
- **Node.js**: Requires Node `>= 22.12.0` (Local execution: prefix with `PATH="/opt/homebrew/bin:$PATH"`).
- **React Islands (React 19)**: Use React only for interactive components (Navbar mobile drawer, Contact Form, Sliders). Always prefer Astro-native `.astro` components for presentation.
- **Hydration Directives**: Use `client:visible` or `client:idle`. Never use blanket `client:load`.

## 2. Contact Ingestion & API Security (`/api/contact`)
The edge contact endpoint enforces multi-layer defense against spam, abuse, and failure:
1. **Serverless-Safe Distributed Rate Limiting**: Upstash Redis REST token-bucket (`5 submissions per hour per IP`). If Redis is unconfigured or unreachable, automatically falls back to an in-memory bounded LRU cache.
2. **Honeypot Trap**: Invisible `_gotcha` input; non-empty values trigger silent rejection (`HTTP 200` with mock success) to thwart automated scrapers.
3. **Time-Trap Detection**: Rejects submissions completed in under 1,500ms from form load (`_form_loaded_at`).
4. **Cloudflare Turnstile**: Free bot verification with secret token validation.
5. **Payload Limit**: Strictly bounded to 64KB max body size.
6. **Zero False Successes**:
   - If `RESEND_API_KEY` is missing in production, returns `503 Service Unavailable`.
   - If Resend upstream rejects delivery (4xx/5xx), returns `502 Bad Gateway` with actionable instructions. Never claim an email sent when it failed.

## 3. Email & Lead Delivery Routing
- **Public Email (Single Source of Truth)**: `vesharo.ai@gmail.com` in `src/config/site.ts`.
- **Resend Sender Default**: `onboarding@resend.dev` (delivers safely to the Resend account owner `vesharo.ai@gmail.com` before custom domain MX records are active).
- **Google Sheets Lead Webhook**: Optional, non-blocking webhook forwarder via `GOOGLE_SHEETS_WEBHOOK_URL` to log inquiries directly into a spreadsheet for free.

## 4. Single Source of Truth (`src/config/site.ts`)
- All global company facts, phone numbers, booking URLs, and social profiles live strictly in `src/config/site.ts`.
- Booking link is **always** `https://cal.com/vesharo/15min`. Never use `/discovery` or generic URLs.
