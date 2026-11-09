import { marked } from 'marked';
import Link from 'next/link';
import { BlogRow } from './BlogRow';
import { getPosts, type Post } from '../data/blogs';
import { Reveal, SectionHead } from './Reveal';

const fmt = (d: string) => (d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '');

export const BlogSection = () => {
	const posts = getPosts();
	return (
		<section className="mx-auto max-w-6xl px-5 py-24">
			<SectionHead id="blog" kicker="Writing" title="From the blog" />
			{posts.length === 0 ? (
				<p className="text-slate-500">Posts are on the way. Check back soon.</p>
			) : (
				<Reveal>
					<BlogRow posts={posts.map(({ slug, title, date, summary, cover, coverAlt, readingMinutes }) => ({ slug, title, date, summary, cover, coverAlt, readingMinutes }))} />
				</Reveal>
			)}
		</section>
	);
};

export const BlogPost = ({ post }: { post: Post }) => {
	const site = 'https://gursimran.in';
	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.summary,
			datePublished: post.date,
			dateModified: post.date,
			keywords: post.tags.join(', '),
			image: `${site}${post.cover}`,
			wordCount: post.body.split(/\s+/).length,
			inLanguage: 'en',
			url: `${site}/blog/${post.slug}/`,
			mainEntityOfPage: `${site}/blog/${post.slug}/`,
			author: { '@type': 'Person', name: 'Gursimran Singh', url: site },
			publisher: { '@type': 'Person', name: 'Gursimran Singh', url: site },
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
				{ '@type': 'ListItem', position: 2, name: 'Blog', item: `${site}/#blog` },
				{ '@type': 'ListItem', position: 3, name: post.title, item: `${site}/blog/${post.slug}/` },
			],
		},
	];
	return (
		<main className="mx-auto max-w-3xl px-5 pt-40 pb-24">
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<nav aria-label="Breadcrumb" className="text-sm text-slate-500">
				<Link href="/" className="hover:text-primary">Home</Link> / <Link href="/#blog" className="hover:text-primary">Blog</Link>
			</nav>
			<article>
				<header className="mt-8">
					<p className="text-sm font-medium text-primary">
						<time dateTime={post.date}>{fmt(post.date)}</time> · {post.readingMinutes} min read
					</p>
					<h1 className="mt-2 font-display text-4xl font-bold text-navy sm:text-5xl">{post.title}</h1>
					<p className="mt-4 text-lg text-slate-600">By <span className="font-medium text-navy">Gursimran Singh</span></p>
				</header>
				<img src={post.cover} alt={post.coverAlt} width={1200} height={630} fetchPriority="high" className="mt-8 w-full rounded-2xl border border-slate-200 shadow-sm" />
				<div
					className="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:text-navy prose-a:text-primary prose-code:text-primary prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-pre:bg-navy prose-pre:text-white [&_pre_code]:bg-transparent [&_pre_code]:text-white"
					dangerouslySetInnerHTML={{ __html: (marked.parse(post.body, { async: false }) as string).replace(/<img /g, '<img loading="lazy" decoding="async" ') }}
				/>
			</article>
		</main>
	);
};
