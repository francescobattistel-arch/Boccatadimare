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
- Cloudflare Pages

## Local development

~~~bash
npm install
npm run dev
~~~

Open `http://localhost:3000`.

## Booking form email

The quote form posts to `/api/quote`. In preview builds, submissions return success without sending email until these environment variables are configured:

~~~bash
RESEND_API_KEY=your_resend_key
BOOKING_TO_EMAIL=francesco@example.com
BOOKING_FROM_EMAIL="Boccata di Mare <bookings@boccatadimare.com>"
~~~

`BOOKING_FROM_EMAIL` must use a sender domain verified in Resend.

## Analytics

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=boccatadimare.com` to load Plausible Analytics. Key links and buttons include `data-analytics` attributes for booking, WhatsApp, Instagram, and email click tracking.

Google Analytics can be added in `src/app/layout.tsx` if preferred.

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
