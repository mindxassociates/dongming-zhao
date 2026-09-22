import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL || 'https://therapywithdongming.com';
export default defineConfig({
  site,
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
