import { statSync } from 'node:fs';
import path from 'node:path';
import { getPosts } from '../../data/blogs';

export const dynamic = 'force-static';

const SITE = 'https://gursimran.in';
const size = (file: string) => {
	try {
		return statSync(path.join(process.cwd(), 'public', file)).size;
	} catch {
		return 0;
	}
};
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** RSS feed so readers and search engines can discover new posts. */
export function GET() {
	const items = getPosts()
		.map(
			(p) => `<item>
<title>${esc(p.title)}</title>
<link>${SITE}/blog/${p.slug}/</link>
<guid isPermaLink="true">${SITE}/blog/${p.slug}/</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${esc(p.summary)}</description>
<enclosure url="${SITE}${p.cover}" type="image/png" length="${size(p.cover)}" />
${p.tags.map((t) => `<category>${esc(t)}</category>`).join('')}
</item>`
		)
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Gursimran Singh — Blog</title>
<link>${SITE}/blog/</link>
<description>Posts by Gursimran Singh on web development, SEO, Claude Code, AWS and Kubernetes.</description>
<language>en-in</language>
${items}
</channel></rss>`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
