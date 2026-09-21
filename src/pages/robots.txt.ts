export const prerender = true;
export function GET({ site }: { site?: URL }) {
  const base = import.meta.env.BASE_URL;
  const origin = site || new URL('https://projects.mindx.us');
  return new Response(`User-agent: *\nAllow: ${base}\nSitemap: ${new URL(`${base}sitemap-index.xml`, origin)}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
