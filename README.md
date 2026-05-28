# Boccata di Mare

Luxury one-page private chef website for Francesco Battistel and Boccata di Mare.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Resend email API
- Optional Plausible Analytics
- Cloudflare Pages

## Local development

~~~bash
npm install
npm run dev
~~~

Open `http://localhost:3000`.

## Environment variables

Server-side email variables:

Configure these variables in Cloudflare Pages production and preview environments:

- `RESEND_API_KEY`
- `BOOKING_TO_EMAIL`
- `BOOKING_FROM_EMAIL` using a sender verified in Resend, for example the final `boccatadimare.com` mail domain

`RESEND_API_KEY` and `BOOKING_TO_EMAIL` are never imported by client components. If they are missing, `/api/quote` returns a preview-safe success response and logs a development warning instead of failing the site.

Optional client-side analytics:

~~~bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=boccatadimare.com
~~~

When `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is unset, Plausible scripts and events are disabled without console errors.

## Booking form email

The concierge quote form posts to `/api/quote` and validates with Zod. The request includes guest count, date, occasion, preferred menu experience, event location, dietary requirements, preferred contact method, and optional notes.

`BOOKING_FROM_EMAIL` must use a sender domain verified in Resend for production delivery.

## Analytics events

The site tracks these optional Plausible events when enabled:

- Hero CTA Click
- Booking Form Opened
- Booking Submit Clicked
- Booking Submitted
- WhatsApp Click
- Instagram Click
- Menu Interest Click

Social URLs and brand details live in `src/config/site.ts` for future editing. Instagram and WhatsApp links are intentionally blank until final production URLs are available; the UI falls back to email instead of rendering unverified links.

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In Cloudflare: **Workers & Pages -> Create -> Pages -> Connect to Git**.
3. Select the GitHub repository.
4. Framework preset: **Next.js**.
5. Build command: `npm run build`.
6. Build output directory: `.next`.
7. Node version: 20 or higher.
8. Add environment variables for Resend and analytics.
9. Deploy.

## Custom domain

In Cloudflare Pages, open **Custom domains** and add:

- `boccatadimare.com`, or
- `www.boccatadimare.com`

Cloudflare will provision DNS and SSL. Recommended security/performance settings:

- Always Use HTTPS: ON
- Minimum TLS: 1.2 or higher
- Brotli: ON
- HTTP/3: ON
- Early Hints: ON
- Cache Level: Standard
- Image Optimization: ON

## Phase 2 ideas

- Gallery CMS
- Seasonal menus
- Deposit payments
- WhatsApp booking flow
- Reviews section
- Instagram feed
- Multi-language EN / IT
