import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://projects.mindx.us';
const configuredBase = process.env.BASE_PATH || '/dongming-zhao';

const base =
  configuredBase === '/'
    ? '/'
    : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
});
