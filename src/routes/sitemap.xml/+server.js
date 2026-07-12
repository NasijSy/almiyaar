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

export function GET({ url }) {
    const siteUrl = url.origin;
    const now = new Date().toISOString();

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
    .map(
        (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
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
