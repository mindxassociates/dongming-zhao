# Administrator setup

## Cloudflare Pages

Connect this GitHub repository as a Cloudflare Pages project:

- Production branch: `main`
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22
- Environment variable: `SITE_URL=https://therapywithdongming.com`

First verify the generated `*.pages.dev` URL, including `/about/`, `/zh/`, `/blog/`, and `/zh/blog/`.

## Domain

The Astro project is configured for `https://therapywithdongming.com` at the site root; there is no GitHub Pages repository prefix. In Cloudflare Pages, add the custom domain only after the preview deployment passes. Preserve existing email-related MX, SPF, DKIM, and DMARC records.

## Pages CMS

Authorize Pages CMS for this repository and grant Dongming editor access. The editable areas are practice settings and two separate blog collections. Layout, styles, workflows, and deployment configuration are intentionally not editable in the CMS.

## Recovery and offboarding

GitHub commit history is the recovery record. Revert the specific content commit if a CMS edit causes a problem. Remove former collaborators from Pages CMS and GitHub without transferring ownership of the domain or Cloudflare project.
