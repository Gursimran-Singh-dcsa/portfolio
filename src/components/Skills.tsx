import { skills } from '../data/site';
import { Reveal, SectionHead } from './Reveal';

export const Skills = () => (
	<section className="mx-auto max-w-6xl px-5 py-24">
		<SectionHead id="skills" kicker="Toolbox" title="Tech I work with" />
		<div className="grid gap-6 md:grid-cols-2">
			{Object.entries(skills).map(([group, items], i) => (
				<Reveal key={group} delay={(i % 2) * 100}>
					<div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
						<h3 className="font-display text-lg font-bold text-navy">{group}</h3>
						<ul className="mt-4 flex flex-wrap gap-2">
							{items.map((s) => <li key={s} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:border-primary hover:text-primary">{s}</li>)}
						</ul>
					</div>
				</Reveal>
			))}
		</div>
	</section>
);
