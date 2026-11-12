# emergencyplumberlansing.us

Production-ready Astro static site for a local plumbing business serving Lansing, MI and nearby areas.

## Stack

- **Astro** (static output)
- **Cloudflare Pages** deployment
- **Web3Forms** for the contact form

## Setup

```bash
npm install
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro` with your [Web3Forms](https://web3forms.com) access key.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Cloudflare Pages

1. Connect the repository (or upload the project) in the Cloudflare dashboard.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or 20 recommended
3. Add environment variables if needed (none required for static build).
4. Deploy. Custom domain: `emergencyplumberlansing.us`

Alternatively with Wrangler:

```bash
npx wrangler pages deploy dist --project-name=emergencyplumberlansing
```

## Project structure

```
src/
  components/     # (reserved)
  content/blog/   # Markdown source for sample posts
  data/           # services.ts, areas.ts
  layouts/        # BaseLayout.astro
  pages/          # All routes
  styles/         # global.css
public/           # robots.txt, sitemap.xml, llms.txt, favicon
```

## Pages

- Home
- Services index + 20 service detail pages
- Service areas index + 8 area pages
- About, Contact (Web3Forms + honeypot + thank-you state)
- Blog index + 2 posts
- 404, Privacy Policy, Terms

## SEO

- Unique titles and meta descriptions
- Canonical URLs, Open Graph, Twitter cards
- sitemap.xml, robots.txt (allows major search & AI crawlers), llms.txt
- Semantic HTML, skip link, WCAG-oriented patterns
- Clean hyphenated URLs

## Notes

- Phone number was not provided; CTAs route to the contact form. Add a `tel:` link when a number is available.
- No fabricated licenses, statistics, or reviews beyond generic positive themes labeled as feedback themes.
- Sticky mobile CTA links to contact.
