import Link from 'next/link';
import { Icon } from './Icons';

export type PostCard = { slug: string; title: string; date: string; summary: string; cover: string; coverAlt: string; readingMinutes: number };

const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

/** One horizontally scrolling row of posts (swipe, trackpad or wheel). The next card peeks in to show there's more. */
export const BlogRow = ({ posts }: { posts: PostCard[] }) => (
	<div className="scroll-row -mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-6 overflow-x-auto px-5 pb-2" tabIndex={0} aria-label="Blog posts, scroll horizontally">
		{posts.map((p) => (
			<Link
				key={p.slug}
				href={`/blog/${p.slug}/`}
				className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:w-[380px]"
			>
				<img src={p.cover} alt={p.coverAlt} width={1200} height={630} loading="lazy" decoding="async" className="aspect-[1200/630] w-full object-cover" />
				<div className="flex flex-1 flex-col p-6">
					<p className="text-xs font-medium text-primary">
						{fmt(p.date)} · {p.readingMinutes} min read
					</p>
					<h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy">{p.title}</h3>
					<p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
					<span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
						Read post <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
					</span>
				</div>
			</Link>
		))}
	</div>
);
