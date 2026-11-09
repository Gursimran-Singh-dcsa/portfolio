import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost } from '../../../components/Blog';
import { getPosts } from '../../../data/blogs';

export const dynamicParams = false;

export function generateStaticParams() {
	return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = getPosts().find((p) => p.slug === slug);
	if (!post) return {};
	const url = `/blog/${slug}/`;
	return {
		// absolute: keep the <title> under ~60 characters instead of appending the site suffix
		title: { absolute: post.title },
		description: post.summary,
		keywords: post.tags,
		authors: [{ name: 'Gursimran Singh', url: 'https://gursimran.in' }],
		alternates: { canonical: url, types: { 'application/rss+xml': '/feed.xml' } },
		openGraph: {
			type: 'article',
			siteName: 'Gursimran Singh',
			locale: 'en_IN',
			url,
			title: post.title,
			description: post.summary,
			publishedTime: post.date,
			authors: ['Gursimran Singh'],
			tags: post.tags,
			images: [{ url: post.cover, width: 1200, height: 630, alt: post.coverAlt }],
		},
		twitter: { card: 'summary_large_image', title: post.title, description: post.summary, images: [{ url: post.cover, alt: post.coverAlt }] },
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPosts().find((p) => p.slug === slug);
	if (!post) notFound();
	return <BlogPost post={post} />;
}
