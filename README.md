# KinesioCal.com landing site

Static marketing site for **KinesioCal** (KinesioCal, LLC) — booking and
practice management built by a massage therapist. Designed to be hosted on
GitHub Pages; no build step, no dependencies.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page: hero, four highlight cards, the spotlight feature rows (with real product screenshots), "and that's just the start" cards, about/principles, contact CTA |
| `features.html` | The comprehensive feature list, grouped by area, with Pro / Premium tags where a feature is gated |
| `roadmap.html` | Coming soon — this year / next year / no timeline yet (HIPAA certification note, SMS) |
| `pricing.html` | Plans & pricing — three tier cards plus the full tier-by-tier comparison table (`#compare`) |
| `support.html` | Support & contact page (KinesioCalendar@gmail.com) |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `styles.css` | Shared stylesheet — brand palette from the product design bible (navy→teal gradient, Leaf Green accent), light default + dark toggle; screenshot, feature-list and comparison-table styles at the end |
| `theme.js` | Dark-mode toggle (OS preference default, persisted in `localStorage` `kc-theme`) |
| `img/` | Product screenshots (see below) |

## Screenshots (`img/`)

Captured 2026-10-16 from the demo business (Serenity Massage) in the
BetterBook dev stack with Playwright at 1440×900, 2× device pixels, light
theme, America/Chicago. Rig: `scratchpad/shots/final.js` in the capture
session (a Playwright container with a TCP proxy to the host's Vite dev
server); the showcase data is tagged `notes="showcase"` on 2026-10-20 /
10-21 in the dev database.

| File | Used for |
|---|---|
| `calendar-day.png`, `calendar-week.png` | The master calendar (day: Alice / Bob / Carol columns) |
| `floating-break.png`, `break-rules.png` | Floating auto-breaks |
| `mobile-route.png`, `mobile-travel-panel.png`, `mobile-slot-finder.png` | Drive-time travel engine and "Find times that fit" |
| `event-sessions-panel.png`, `event-public-grid.png`, `event-kiosk.png` | Events sub-calendar and kiosk mode |
| `network-blocking.png` | Blocklist + shared safety network card |
| `guest-booking-details.png`, `guest-booking-phone.png`, `public-booking.png`, `public-times.png`, `public-booking-phone.png` | Booking without signing in / the public page |
| `client-invoice.png`, `portal-invoice.png`, `portal-appointments.png` | Client-downloadable invoices and the portal |
| `repeat-options.png` | Standing appointments |
| `easy-mode-settings.png` | Easy Mode |
| `reports-what-sold.png`, `accounting-pnl.png`, `accounting-income.png` | Accounting overview and the Reports statistics pie (2026-10-17) |
| `gift-grants.png` | Gift cards, packages, memberships and the gift-grant send |
| `booking-log.png` | Abandoned bookings (a real declined-card run with Stripe's 4000 0000 0000 0002 test card, 2026-10-16) |

Still placeholders (dashed boxes) on `index.html`: the reminder email with a
pay-deposit button and the waitlist page with entries.

## Deploying to GitHub Pages

1. Create the GitHub repo and push this folder's contents.
2. In the repo: **Settings → Pages → Source: Deploy from a branch**, pick
   `main` and `/ (root)`.
3. For the custom domain, add `kinesiocal.com` under **Settings → Pages →
   Custom domain** (GitHub creates a `CNAME` file), and point DNS at GitHub
   Pages (apex `A` records + `www` CNAME per GitHub's docs). Enable
   **Enforce HTTPS** once the certificate is issued.

## Notes

- Icons are inline SVGs (Heroicon-style strokes) — no emoji, per the product
  design rules.
- The legal pages (privacy, terms) are plain-language drafts written for the
  pre-launch site. Have counsel review them before launch — in particular the
  governing-law clause in the terms, which currently references the state of
  organization generically.
- Contact/support email everywhere: **KinesioCalendar@gmail.com**.
