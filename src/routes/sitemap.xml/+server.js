const staticPages = [
    '/',
    '/about',
    '/achievements',
    '/contribute',
    `/mistakes`,
    `/issues`,
    '/promises',
    '/studies'
];

export const prerender = true;
const BASE_URL = 'https://almiyaar.nasij.org';

export function GET() {
    const now = new Date().toISOString();

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
    .map(
        (path) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${now}</lastmod>
  </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
    });
}
