export const prerender = true;
export function GET({ site }: { site?: URL }) {
  const origin = site || new URL('https://therapywithdongming.com');
  const url = (path: string) => new URL(path, origin).href;
  const body = `# Dongming Zhao, LCSW\n\nDongming Zhao is a Licensed Clinical Social Worker offering individual and couples therapy in English and Mandarin to clients located in California.\n\n## Primary pages\n- Home: ${url('/')}\n- About: ${url('/about/')}\n- Individual therapy: ${url('/individual-therapy/')}\n- Couples therapy: ${url('/couples-therapy/')}\n- Chinese-language services: ${url('/zh/')}\n- English articles: ${url('/blog/')}\n- Chinese articles: ${url('/zh/blog/')}\n- FAQ: ${url('/faq/')}\n- Contact: ${url('/contact/')}\n\nFor current practice details and scheduling, use the canonical pages above.\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
