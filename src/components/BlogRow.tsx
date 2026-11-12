'use client';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BlogCard, type PostCard } from './BlogCard';
import { Icon } from './Icons';

export type { PostCard };
const PAD = 20; // matches the row's px-5 / scroll-pl-5

const arrow =
	'absolute top-[26%] z-10 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-navy/75 text-white shadow-lg backdrop-blur transition hover:bg-navy disabled:cursor-default disabled:opacity-30 sm:h-12 sm:w-12';

/**
 * One horizontally scrolling row of posts. Round arrows overlay the edges and a dot indicator underneath shows
 * where you are (the active dot is a wider pill; dots are clickable). Swipe, trackpad and wheel work too.
 */
export const BlogRow = ({ posts, total = posts.length }: { posts: PostCard[]; total?: number }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [targets, setTargets] = useState<number[]>([0]);
	const [active, setActive] = useState(0);
	const [canLeft, setCanLeft] = useState(false);
	const [canRight, setCanRight] = useState(true);

	const update = useCallback(() => {
		const el = ref.current;
		if (!el) return;
		const max = Math.max(0, el.scrollWidth - el.clientWidth);
		// One dot per distinct scroll position: cards past the maximum scroll all collapse into the final stop
		const stops = Array.from(
			new Set((Array.from(el.children) as HTMLElement[]).map((c) => Math.min(Math.max(0, c.offsetLeft - PAD), max)))
		);
		let best = 0;
		stops.forEach((t, i) => {
			if (Math.abs(t - el.scrollLeft) < Math.abs(stops[best] - el.scrollLeft)) best = i;
		});
		setTargets((prev) => (prev.length === stops.length && prev.every((v, i) => v === stops[i]) ? prev : stops));
		setActive(el.scrollLeft >= max - 4 ? stops.length - 1 : best);
		setCanLeft(el.scrollLeft > 4);
		setCanRight(el.scrollLeft < max - 4);
	}, []);

	useEffect(() => {
		update();
		const el = ref.current;
		el?.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			el?.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, [update]);

	const goTo = (i: number) => ref.current?.scrollTo({ left: targets[i] ?? 0, behavior: 'smooth' });
	const step = (dir: 1 | -1) => goTo(Math.min(targets.length - 1, Math.max(0, active + dir)));

	return (
		<div className="relative">
			<div ref={ref} className="scroll-row relative -mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-6 overflow-x-auto px-5 pb-2" tabIndex={0} aria-label="Latest blog posts, scroll horizontally">
				{posts.map((p) => (
					<BlogCard key={p.slug} post={p} className="w-[82%] shrink-0 snap-start sm:w-[380px]" />
				))}
				<Link
					href="/blog/"
					className="group flex w-[82%] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-primary/40 bg-primary/5 p-8 text-center transition hover:-translate-y-1 hover:border-primary hover:bg-primary/10 sm:w-[380px]"
				>
					<span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
						<Icon name="arrow" className="h-6 w-6 transition group-hover:translate-x-1" />
					</span>
					<span className="font-display text-xl font-bold text-navy">Show more</span>
					<span className="text-sm leading-relaxed text-slate-600">{total > posts.length ? `Browse all ${total} posts on the blog` : 'Browse the blog'}</span>
				</Link>
			</div>

			{/* Arrows overlay the cards at the edges */}
			<button type="button" onClick={() => step(-1)} disabled={!canLeft} aria-label="Previous post" className={`${arrow} left-1 sm:left-2`}>
				<Icon name="chevron" className="h-5 w-5 rotate-180" />
			</button>
			<button type="button" onClick={() => step(1)} disabled={!canRight} aria-label="Next post" className={`${arrow} right-1 sm:right-2`}>
				<Icon name="chevron" className="h-5 w-5" />
			</button>

			{/* Dot indicator: one dot per scroll stop */}
			<div className="mt-5 flex items-center justify-center gap-2" role="group" aria-label="Choose a post">
				{targets.map((_, i) => (
					<button
						key={i}
						type="button"
						onClick={() => goTo(i)}
						aria-label={`Show posts, step ${i + 1} of ${targets.length}`}
						aria-current={i === active}
						className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${i === active ? 'w-12 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
					/>
				))}
			</div>
		</div>
	);
};
