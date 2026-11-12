'use client';

import { useState } from 'react';
import { domains, projects, type Domain, type Project } from '../data/site';
import { Icon } from './Icons';
import { Reveal, SectionHead } from './Reveal';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Chip } from './ui/Chip';
import { Section } from './ui/Section';

const Shots = ({ p }: { p: Project }) => (
	<div className="relative flex h-52 items-end justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-soft to-navy/10 sm:h-80">
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

const FilterChip = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
	<button
		type="button"
		onClick={onClick}
		aria-pressed={active}
		className={`inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition ${active ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary'}`}
	>
		{children}
	</button>
);

export const Projects = ({ id = 'work', kicker = 'Selected work', title = "Things I've built", items = projects, filterable = false }: { id?: string; kicker?: string; title?: string; items?: Project[]; filterable?: boolean }) => {
	const [domain, setDomain] = useState<Domain | 'all'>('all');
	// only offer domains that actually have work, most populated first
	const counts = domains.map((d) => ({ d, n: items.filter((p) => p.domain === d).length })).filter((c) => c.n > 0).sort((a, b) => b.n - a.n);
	const shown = domain === 'all' ? items : items.filter((p) => p.domain === domain);
	return (
	<Section>
		<SectionHead id={id} kicker={kicker} title={title} />
		{filterable && (
			<div role="group" aria-label="Filter work by domain" className="scroll-row -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mb-10 sm:flex-wrap sm:overflow-visible sm:px-0">
				<FilterChip active={domain === 'all'} onClick={() => setDomain('all')}>All <span className="opacity-70">{items.length}</span></FilterChip>
				{counts.map(({ d, n }) => (
					<FilterChip key={d} active={domain === d} onClick={() => setDomain(d)}>{d} <span className="opacity-70">{n}</span></FilterChip>
				))}
			</div>
		)}
		<div className="grid gap-5 sm:gap-8 md:grid-cols-2">
			{shown.map((p, i) => (
				<Reveal key={p.slug} delay={(i % 2) * 100}>
					<Card interactive padding="none" className="h-full overflow-hidden">
						<article>
							<div className="relative">
								<Shots p={p} />
								{p.badge && <Chip variant="badge" className="absolute left-3 top-3 sm:left-4 sm:top-4">{p.badge}</Chip>}
							</div>
							<div className="p-5 sm:p-7">
								<p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{p.domain}</p>
								<h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{p.title}</h3>
								<p className="mt-3 leading-relaxed text-slate-600">{p.summary}</p>
								<p className="mt-3 text-sm text-slate-500"><span className="font-medium text-navy">Role:</span> {p.role}</p>
								<ul className="mt-4 flex flex-wrap gap-2">
									{p.tech.map((t) => (
										<li key={t}>
											<Chip>{t}</Chip>
										</li>
									))}
								</ul>
								{p.url && (
									<Button href={p.url} external variant="link" size="link" className="mt-3 justify-start">
										Visit website <Icon name="external" className="h-4 w-4" />
									</Button>
								)}
							</div>
						</article>
					</Card>
				</Reveal>
			))}
		</div>
	</Section>
	);
};
