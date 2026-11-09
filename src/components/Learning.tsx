import { certification as c, courses } from '../data/site';
import { Icon } from './Icons';
import { Reveal, SectionHead } from './Reveal';

export const Learning = () => (
	<section className="mx-auto max-w-6xl px-5 py-24">
		<SectionHead id="learning" kicker="Certifications & courses" title="Always learning" />
		<Reveal>
			<div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-8 shadow-xl md:grid-cols-[auto_1fr] md:p-10">
				<img src={c.image} alt={c.title} width={352} height={352} className="mx-auto h-44 w-auto drop-shadow-2xl sm:h-52" />
				<div>
					<span className="inline-block rounded-full bg-sky/15 px-3 py-1 text-xs font-medium text-sky">Certification</span>
					<h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">{c.title}</h3>
					<p className="mt-1 text-slate-300">Issued by {c.issuer} · {c.issued} · Valid until {c.expires}</p>
					<p className="mt-4 max-w-2xl leading-relaxed text-slate-300">{c.description}</p>
					<a href={c.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600">
						Verify on Credly <Icon name="external" className="h-4 w-4" />
					</a>
				</div>
			</div>
		</Reveal>
		<div className="mt-6 grid gap-6 md:grid-cols-3">
			{courses.map((g, i) => (
				<Reveal key={g.provider} delay={i * 100}>
					<div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
						<h3 className="font-display text-lg font-bold text-navy">{g.provider}</h3>
						<ul className="mt-4 space-y-3">
							{g.items.map((t) => (
								<li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-700">
									<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
									{t}
								</li>
							))}
						</ul>
					</div>
				</Reveal>
			))}
		</div>
	</section>
);
