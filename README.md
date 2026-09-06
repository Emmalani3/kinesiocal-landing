# KinesioCal.com landing site

Static marketing site for **KinesioCal** (KinesioCal, LLC) — booking and
practice management built by a massage therapist. Designed to be hosted on
GitHub Pages; no build step, no dependencies.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page: hero, feature highlights, deep-dive feature rows, about/principles, contact CTA |
| `support.html` | Support & contact page (KinesioCalendar@gmail.com) |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `styles.css` | Shared stylesheet — brand palette from the product design bible (navy→teal gradient, Leaf Green accent), light default + dark toggle |
| `theme.js` | Dark-mode toggle (OS preference default, persisted in `localStorage` `kc-theme`) |

## Deploying to GitHub Pages

1. Create the GitHub repo and push this folder's contents.
2. In the repo: **Settings → Pages → Source: Deploy from a branch**, pick
   `main` and `/ (root)`.
3. For the custom domain, add `kinesiocal.com` under **Settings → Pages →
   Custom domain** (GitHub creates a `CNAME` file), and point DNS at GitHub
   Pages (apex `A` records + `www` CNAME per GitHub's docs). Enable
   **Enforce HTTPS** once the certificate is issued.

## Notes

- Image placeholders (dashed boxes) mark where real product screenshots go —
  swap them for `<img>` tags when screenshots are ready.
- Icons are inline SVGs (Heroicon-style strokes) — no emoji, per the product
  design rules.
- The legal pages (privacy, terms) are plain-language drafts written for the
  pre-launch site. Have counsel review them before launch — in particular the
  governing-law clause in the terms, which currently references the state of
  organization generically.
- Contact/support email everywhere: **KinesioCalendar@gmail.com**.
