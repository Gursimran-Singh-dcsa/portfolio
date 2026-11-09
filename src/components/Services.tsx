import { services } from '../data/site';
import { Reveal, SectionHead } from './Reveal';

export const Services = () => (
	<section className="mx-auto max-w-6xl px-5 py-24">
		<SectionHead id="services" kicker="Services" title="How I can help your business" />
		<p className="-mt-6 mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
			I'm a full stack developer from Ambala, working in Chandigarh. If you're looking for a web developer near you, or for a senior engineer who can take a product from idea to production, this is what I do.
		</p>
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{services.map((s, i) => (
				<Reveal key={s.title} delay={(i % 3) * 100}>
					<div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
						<span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 font-display text-lg font-bold text-primary">{i + 1}</span>
						<h3 className="mt-5 font-display text-xl font-bold text-navy">{s.title}</h3>
						<p className="mt-3 leading-relaxed text-slate-600">{s.text}</p>
					</div>
				</Reveal>
			))}
		</div>
		<Reveal className="mt-10 flex justify-end">
			<a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-blue-600">Start a project</a>
		</Reveal>
	</section>
);
