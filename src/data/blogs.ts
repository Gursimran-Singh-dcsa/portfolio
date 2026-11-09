import fs from 'node:fs';
import path from 'node:path';

// Add a post by dropping a Markdown file in src/content/blog/<slug>.md with frontmatter:
// ---
// title: My post
// date: 2026-01-31
// summary: One-line description
// tags: react, performance
// cover: /blog/covers/<slug>.png   (1200x630 — also the social-share image; make it with scripts/make-cover.py)
// coverAlt: Describe the image for screen readers
// ---
// Read at build time (static export), so this only ever runs on the server.
export type Post = { slug: string; title: string; date: string; summary: string; tags: string[]; body: string; readingMinutes: number; cover: string; coverAlt: string };

const dir = path.join(process.cwd(), 'src/content/blog');

function parse(file: string): Post {
	const raw = fs.readFileSync(path.join(dir, file), 'utf8');
	const slug = file.replace(/\.md$/, '');
	const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	const meta: Record<string, string> = {};
	m?.[1].split('\n').forEach((l) => {
		const i = l.indexOf(':');
		if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim();
	});
	return {
		slug,
		title: meta.title ?? slug,
		date: meta.date ?? '',
		summary: meta.summary ?? '',
		tags: (meta.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean),
		cover: meta.cover ?? '/og.png',
		coverAlt: meta.coverAlt ?? (meta.title ?? slug),
		body: m ? m[2] : raw,
		readingMinutes: Math.max(1, Math.round((m ? m[2] : raw).split(/\s+/).length / 200)),
	};
}

export function getPosts(): Post[] {
	return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map(parse).sort((a, b) => b.date.localeCompare(a.date));
}
