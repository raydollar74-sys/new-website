# Static HTML/CSS/JS clone of huanqiupreciousmetal.com

Plain-HTML mirror of the Next.js site. No Node.js, no framework runtime —
just `.html` files, one stylesheet, one small vanilla JS file, fonts, and
images that already exist in this repository.

## Hosting

Upload the contents of this folder to ANY static host (cPanel/shared
hosting, GitHub Pages, Netlify, Cloudflare Pages, an S3 bucket…).
`index.html` is the home page; other pages land here as they are converted
(`about.html`, `services.html`, `blog.html`, …).

## What is in here

- `index.html`  – exact markup taken from the production build snapshot
- `css/styles.css` – the site's compiled stylesheet (all pages' styles)
- `fonts/*.woff2` – the real Inter font files from the production build
- `js/main.js` – vanilla JS re-implementation of the interactive parts:
  mobile menu, hero image slider, stats count-up, the Request-an-Assay
  modal (made working — it is broken on the Next.js site), WhatsApp float
- images – copied verbatim from `/public` in this repository

## Known gaps (same as the original site)

- `logo.png` is referenced by the header/footer but does not exist in the
  repository, so the logo shows broken until the real file is added here.
- Pages not yet converted: links to them 404 for now.
