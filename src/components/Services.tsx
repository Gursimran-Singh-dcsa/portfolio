import { services } from '../data/site';
import { Reveal, SectionHead } from './Reveal';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

export const Services = () => (
	<Section>
		<SectionHead id="services" kicker="Services" title="How I can help your business" />
		<p className="-mt-4 mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:-mt-6 sm:mb-10 sm:text-lg">
			I'm a full stack developer from Ambala, working in Chandigarh. If you're looking for a web developer near you, or for a senior engineer who can take a product from idea to production, this is what I do.
		</p>
		<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
			{services.map((s, i) => (
				<Reveal key={s.title} delay={(i % 3) * 100}>
					<Card interactive className="h-full">
						<span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 font-display text-lg font-bold text-primary">{i + 1}</span>
						<h3 className="mt-4 font-display text-xl font-bold text-navy sm:mt-5">{s.title}</h3>
						<p className="mt-2 leading-relaxed text-slate-600 sm:mt-3">{s.text}</p>
					</Card>
				</Reveal>
			))}
		</div>
		<Reveal className="mt-8 flex justify-center sm:mt-10">
			<Button href="#contact" className="w-full sm:w-auto">Start a project</Button>
		</Reveal>
	</Section>
);
