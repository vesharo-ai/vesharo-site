# Deployment — vesharo.com

The site is a **hybrid** Astro build:

- **Every page is pre-rendered** to static HTML for speed and CDN caching.
- **One route, `/api/contact`, runs on a server** to send the lead emails.

The build produces two folders:

```
dist/client/   static HTML + assets  (serve from your CDN / web root)
dist/server/   the Node server that handles /api/contact
```

## 1. Required environment variables

Set these in your host's dashboard (do **not** commit a `.env` file — see `.env.example`).

| Variable | Where | Required | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | Server only | **Yes** | Sends the two emails. Without it `/api/contact` returns 503 and asks the visitor to email directly — it never fakes success. |
| `LEAD_FROM_EMAIL` | Server only | Recommended | Verified sender, e.g. `Vesharo <hello@vesharo.com>`. Defaults to Resend's test address. |
| `PUBLIC_GA_MEASUREMENT_ID` | Client-safe | Optional | GA4 ID. Unset = analytics fully disabled, no script loaded. |

## 2. Email setup (Resend)

1. Create an account at [resend.com](https://resend.com) and generate an API key.
2. Add the domain `vesharo.com` and add the DNS records Resend gives you
   (SPF and DKIM). This is required before you can send as your own address.
3. Until the domain is verified, leave the default sender — Resend only permits
   `onboarding@resend.dev`, which delivers fine but shows that address as sender.

**Deliverability tip:** point a DMARC record at Resend too, and keep
`LEAD_FROM_EMAIL` on the same domain you verify.

## 3. Running the server

```bash
npm ci
npm run build
npm start          # listens on $HOST:$PORT (defaults to localhost:4321)
```

The server honours `HOST` and `PORT`. **Always set both in production**, and
run it behind a reverse proxy that terminates TLS (Nginx, Caddy, Cloudflare).

### If you host on Vercel / Netlify / Cloudflare

Swap the adapter in `astro.config.mjs` — one line, nothing else changes:

```js
import vercel from '@astrojs/vercel';        // or netlify / cloudflare
adapter: vercel(),
```

Then remove `@astrojs/node`. Every page is still prerendered; only
`/api/contact` becomes a serverless function. Remember to add
`RESEND_API_KEY` to that platform's environment variables.

## 4. Requirements

- **Node 22.12+** is required (Node 20 cannot build this project).
  `npm start` runs on Node 18+, but keep them aligned.
- `npm run build` always cleans `dist` first (`prebuild`), so a stale folder
  can never be deployed by accident.

## 5. After deploying — verify

```bash
curl -I https://vesharo.com/                      # expect 200
curl -I https://vesharo.com/team                   # expect 301 -> /about
curl -s -X POST https://vesharo.com/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"you@example.com","message":"Checking the enquiry flow works."}'
```

A real submission should return `{"ok":true}` **and** deliver two emails: a
confirmation to the address you typed, and a notification to
contact@vesharo.com with `Reply-To` set to the sender. If you get a 503, the
API key or verified domain is not configured.

## 6. Analytics

Set `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` and rebuild. The tag only renders
when that variable matches a real GA4 ID, so nothing loads and no cookies are
set until you deliberately enable it.

GA4 sets cookies. If you serve visitors in the EU/UK, add a consent banner
**before** enabling it.
## 7. Security headers — where they apply

`src/middleware.ts` sets `X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy`, `X-Frame-Options` and (HTTPS only) HSTS.

**These headers reach the `/api/contact` route, but NOT the prerendered pages.**
Astro's Node adapter serves static files directly from `dist/client`, bypassing
middleware. Add the headers for static assets at the CDN or reverse proxy — for
example, Nginx in front of `npm start`:

```nginx
server {
  listen 443 ssl http2;
  server_name vesharo.com;

  add_header X-Content-Type-Options   "nosniff"                          always;
  add_header X-Frame-Options          "SAMEORIGIN"                       always;
  add_header Referrer-Policy          "strict-origin-when-cross-origin"  always;
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header Permissions-Policy       "camera=(), microphone=(), geolocation=()" always;

  root /var/www/vesharo/dist/client;

  # Prerendered pages and assets
  location / {
    try_files $uri $uri/index.html $uri/ @app;
  }

  # Everything the Node server handles
  location @app {
    proxy_pass http://127.0.0.1:4321;
    proxy_set_header Host $host;
  }

  location /api/ {
    proxy_pass http://127.0.0.1:4321;
    proxy_set_header Host $host;
  }
}
```

### About Content-Security-Policy

Deliberately **not** set. The site ships inline JSON-LD structured-data scripts
and Astro island bootstrapping; a guessed CSP would break both. Add one only
after auditing every inline script, starting in report-only mode:

```
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
```
