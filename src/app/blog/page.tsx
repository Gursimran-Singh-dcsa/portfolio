import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCard } from '../../components/BlogCard';
import { Contact } from '../../components/Contact';
import { getPosts } from '../../data/blogs';

const SITE = 'https://gursimran.in';
const TITLE = 'Blog: AI, React, SEO and Cloud Articles by Gursimran Singh';
const DESCRIPTION =
	'Articles by Gursimran Singh on AI-assisted development, React unit testing, SEO case studies, AWS and Kubernetes cost savings, and building fast websites.';

export const metadata: Metadata = {
	title: { absolute: TITLE },
	description: DESCRIPTION,
	keywords: ['Gursimran Singh blog', 'full stack developer blog', 'React', 'AI-assisted development', 'SEO case study', 'AWS cost optimization', ...new Set(getPosts().flatMap((p) => p.tags))],
	authors: [{ name: 'Gursimran Singh', url: SITE }],
	alternates: { canonical: '/blog/', types: { 'application/rss+xml': '/feed.xml' } },
	openGraph: {
		type: 'website',
		siteName: 'Gursimran Singh',
		locale: 'en_IN',
		url: `${SITE}/blog/`,
		title: TITLE,
		description: DESCRIPTION,
		images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Blog by Gursimran Singh, full stack developer from Ambala' }],
	},
	twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [{ url: '/og.png', alt: 'Blog by Gursimran Singh, full stack developer from Ambala' }] },
};

export default function BlogIndex() {
	const posts = getPosts();
	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Blog',
			name: 'Gursimran Singh: Blog',
			description: DESCRIPTION,
			url: `${SITE}/blog/`,
			inLanguage: 'en',
			author: { '@type': 'Person', name: 'Gursimran Singh', url: SITE },
			blogPost: posts.map((p) => ({
				'@type': 'BlogPosting',
				headline: p.title,
				url: `${SITE}/blog/${p.slug}/`,
				datePublished: p.date,
				image: `${SITE}${p.cover}`,
				description: p.summary,
			})),
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
				{ '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
			],
		},
	];
	return (
		<>
			<main className="mx-auto max-w-6xl px-5 pt-28 pb-16 sm:pt-32 sm:pb-24">
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<nav aria-label="Breadcrumb" className="text-sm text-slate-500">
					<Link href="/" className="hover:text-primary">Home</Link> / <span aria-current="page">Blog</span>
				</nav>
				<header className="mt-8 max-w-3xl">
					<h1 className="font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">Blog</h1>
					<p className="mt-4 text-lg leading-relaxed text-slate-600">
						Notes from my work as a full stack developer: building with AI, testing React apps, SEO case studies, cutting cloud bills and many more.
					</p>
					<p className="mt-3 text-sm text-slate-500">
						Prefer a feed reader? <a href="/feed.xml" className="font-medium text-primary hover:text-navy">Subscribe via RSS</a>.
					</p>
				</header>
				<div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
					{posts.map((p) => (
						<BlogCard key={p.slug} post={p} />
					))}
				</div>
			</main>
			<Contact />
		</>
	);
}
