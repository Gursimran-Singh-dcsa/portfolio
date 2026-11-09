import type { MetadataRoute } from 'next';
import { getPosts } from '../data/blogs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const base = 'https://gursimran.in';
	const posts = getPosts();
	const latest = posts.map((p) => p.date).sort().pop();
	return [
		{ url: `${base}/`, lastModified: latest, changeFrequency: 'weekly', priority: 1 },
		...posts.map((p) => ({ url: `${base}/blog/${p.slug}/`, lastModified: p.date || undefined, changeFrequency: 'monthly' as const, priority: 0.7 })),
	];
}
