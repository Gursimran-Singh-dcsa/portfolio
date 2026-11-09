import { projects, type Project } from '../data/site';
import { Icon } from './Icons';
import { Reveal, SectionHead } from './Reveal';

const Shots = ({ p }: { p: Project }) => (
	<div className="relative flex h-64 items-end justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-soft to-navy/10 sm:h-80">
		{p.desktop ? (
			<div className="mt-8 w-[82%] overflow-hidden rounded-t-xl border border-navy/20 bg-navy shadow-2xl">
				<div className="flex gap-1.5 border-b border-white/10 px-3 py-2"><i className="h-2 w-2 rounded-full bg-red-400/70" /><i className="h-2 w-2 rounded-full bg-yellow-400/70" /><i className="h-2 w-2 rounded-full bg-green-400/70" /></div>
				<img src={p.desktop} alt={`${p.title} desktop screenshot`} loading="lazy" className="w-full" />
			</div>
		) : (
			<span className="m-auto font-display text-5xl font-bold text-navy/15">{p.title.split(' ')[0]}</span>
		)}
		{p.mobile && (
			<div className="absolute bottom-0 right-[4%] w-[22%] overflow-hidden rounded-t-2xl border-2 border-navy/40 bg-navy shadow-2xl">
				<img src={p.mobile} alt={`${p.title} mobile screenshot`} loading="lazy" className="w-full" />
			</div>
		)}
	</div>
);

export const Projects = ({ id = 'work', kicker = 'Selected work', title = "Things I've built", items = projects }: { id?: string; kicker?: string; title?: string; items?: Project[] }) => (
	<section className="mx-auto max-w-6xl px-5 py-24">
		<SectionHead id={id} kicker={kicker} title={title} />
		<div className="grid gap-8 md:grid-cols-2">
			{items.map((p, i) => (
				<Reveal key={p.slug} delay={(i % 2) * 100}>
					<article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
						<div className="relative">
							<Shots p={p} />
							{p.badge && <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1 text-xs font-medium text-white shadow">{p.badge}</span>}
						</div>
						<div className="p-7">
							<h3 className="font-display text-2xl font-bold text-navy">{p.title}</h3>
							<p className="mt-3 leading-relaxed text-slate-600">{p.summary}</p>
							<p className="mt-3 text-sm text-slate-500"><span className="font-medium text-navy">Role:</span> {p.role}</p>
							<ul className="mt-4 flex flex-wrap gap-2">
								{p.tech.map((t) => <li key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</li>)}
							</ul>
							{p.url && (
								<a href={p.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-navy">
									Visit website <Icon name="external" className="h-4 w-4" />
								</a>
							)}
						</div>
					</article>
				</Reveal>
			))}
		</div>
	</section>
);
