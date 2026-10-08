# Vesharo — Asset Audit & Classification (Phase 1)

Audited against the built site, not the source alone. Every judgement below was confirmed
in a browser at 1440px against the live build.

**Inventory:** `public/` went from **111 images → 14** files, **19 MB → 2.4 MB**.
Build output `dist/` went from **23 MB → 4.7 MB**.

The golden rule applied throughout: **we never represent work we cannot prove.** A stock
photo of a "happy team" is a liability, not an asset — it implies headcount and culture we
cannot verify. So everything is sorted by *what it would be claiming*.

---

## A. Required real assets from me

These **cannot** be generated or sourced without lying. The site stays visually incomplete
until they arrive. **All are blocking for full conversion credibility, none are blocking for launch.**

1. **Team / founder photograph** — real photo of the people who will actually do the work.
   For `/about` and the trust block. *This is the single highest-trust asset on the site.*
2. **Work-environment photograph** — desk, setup, or a genuine Vesharo working space.
   Ahmedabad or remote, whatever is truthful.
3. **Per-engineer portrait set** (optional, 3–6 people) — only if you want named accountability.
4. **Real project visuals** — for each engagement you are willing to name: a UI screenshot,
   architecture diagram, or implementation photo. Currently `/portfolio` shows six
   *engagement archetypes* (honest, generic) instead of named client work.
5. **Client logos** — SVG or PNG with permission, for the trust strip.
6. **Testimonials** — with the person's real name, role, company, and their exact words.
7. **Certifications & awards** — only certificates you actually hold, with issuing body and date.
8. **Branded OG card with real positioning line** — I can generate a *template*; you approve the words.

> Items 4–7 are all currently **absent by design**. The site makes no such claims today.
> Nothing above is stubbed with invented content.

## B. Assets that can be generated

Conceptual, brand-native, and structurally honest — they illustrate *how we work*, never
*what we shipped*. Generated as SVG in Vesharo purple `#7C5CFF` / `#A78BFA` on `#121212`.

1. **Hero conceptual graphic** — replaces `banner/banner1-shape1.png` (a grey chrome 3D
   swoosh + floating sphere). It read as generic SaaS template art and clashed with the
   purple brand.
2. **Six per-service conceptual diagrams** — replaces `service/service1-card-shape1.svg`,
   currently **one identical wireframe cube rendered 16 times** (4 homepage cards + 6 on
   `/services` + 6 on the detail pages). Cloud topology, CI/CD pipeline, mobile device frames,
   data-flow, layered architecture, design grid — one distinct diagram per service.
3. **Six per-service line icons** — same shared cube, replaced with the Phosphor set already
   loaded site-wide (`ph ph-cloud`, `ph ph-device-mobile`, `ph ph-brain`, …).
4. **Social / Open Graph card, 1200×630** — replaces `banner/banner1-img.jpg`, a grey chrome
   ball with a dead black band. This is the image shown when the link is pasted on
   LinkedIn, WhatsApp or Slack; right now it is the least on-brand thing Vesharo ships.
5. **Four blog covers, 1200×750** — replaces four chrome primitives (sphere, cube, cone)
   from one stock 3D set, none of which relate to their article.
6. **Text-slider separator diamonds** — `text-slider-icon1.png` is grey; retint to brand.

## C. Assets that should be sourced

1. **A photographer for team + environment shots** — a half-day job in Ahmedabad; the one
   spend on this list that pays for itself.
2. **A brand/favicon pass at true resolution** — the logo is 168×36 and the favicon
   180×180. Both are fine on screen but will look soft on a retina OG card or a conference badge.
3. **Stock, only as a deliberate last resort** — abstract engineering texture at low
   prominence as a *background*, never labelled as project work.

## D. Assets that should simply be removed

**Already executed and verified in this phase:**

1. **83 orphaned images** — unreferenced template stock (invented client logos, testimonial
   avatars, team photos, portfolio screenshots, video stills). Zero overlap with files in use.
2. **5.6 MB of SVG icon fonts** — `Phosphor.svg`, `Phosphor-Fill.svg`, and the whole dead
   `tz-icon` family. Modern browsers never take the SVG-font path; the 2 `@font-face` rules
   were removed with them.
3. **`Service2.tsx` + `Service2Card.tsx`** — unused component pair.
4. **7 empty image directories** — `footer/`, `video/`, `project/`, `team/`, `breadcrumb/`, `wwa/`.
5. **`service2Cards` seed array** — dead data pointing at six SVGs that no longer exist.
6. **`public/file.svg`, `public/globe.svg`** — unused starter files.

**Remaining, to be removed by this phase's implementation:**

7. `banner/banner1-shape1.png` · 8. `banner/banner1-img.jpg` · 9. `banner/banner1-shape2.svg`
10. `service/service1-card-shape1.svg` · 11. `banner/text-slider-icon1.png`
12. The four `blog/cover-*.jpg` chrome primitives.
13. `about/about1-shape2.svg` — decorative, off-brand, carries no meaning.

> The guiding principle: **an honest empty space beats a decorative lie.** Where a real asset
> is missing, the layout was made to work without it rather than padded with a placeholder.

## E. Existing assets to keep

1. **`site-logo.svg`** — 168×36, purple `#7C5CFF` rounded square + white V. The brand anchor.
   Every generated asset in this phase is derived from it.
2. **`favicon.svg`** (32×32) and **`favicon.ico`** — correct geometry, correct spec.
3. **`favicon.png`** — 180×180, exactly Apple's apple-touch-icon spec. KEEP.
4. **`fonts/icons/Phosphor*.woff2/.woff/.ttf`** — both faces, trimmed to the formats browsers use.
5. **`robots.txt`**, sitemap, `DEPLOYMENT.md`, `.env.example`.

---

## Outcome

| | Before | After |
|---|---|---|
| Image files in `public/` | 111 | 17 |
| `public/` on disk | 19 MB | 2.3 MB |
| `dist/` build output | 23 MB | 4.6 MB |
| Distinct service visuals | 1 (the same cube, 16 uses) | 6 (one per service) |
| Off-brand grey chrome art | hero + OG card + 4 blog covers | 0 |

All generated artwork is reproducible via `npm run visuals` ([scripts/generate-visuals.mjs](scripts/generate-visuals.mjs)),
which emits the six service diagrams, the hero graphic, the slider diamond, the 1200×630
social card and the four blog covers from Vesharo's own palette.

**Verification on the built site:** `astro check` 0 errors / 0 warnings · `astro build` exit 0 ·
0 broken links · 0 missing asset references across HTML, CSS and `@font-face` sources.

**Not touched, and deliberately so:** no client, project, testimonial, team member, award,
statistic or product screenshot was invented. Absent proof stays visibly absent.