import { certification as c, courses } from '../data/site';
import { Icon } from './Icons';
import { Reveal, SectionHead } from './Reveal';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Chip } from './ui/Chip';
import { Section } from './ui/Section';

export const Learning = () => (
	<Section>
		<SectionHead id="learning" kicker="Certifications & courses" title="Always learning" />
		<Reveal>
			<Card tone="dark" padding="lg" className="grid items-center gap-6 overflow-hidden md:grid-cols-[auto_1fr] md:gap-8">
				<img src={c.image} alt={c.title} width={352} height={352} className="mx-auto h-36 w-auto drop-shadow-2xl sm:h-52" />
				<div className="text-center md:text-left">
					<Chip className="!bg-sky/15 !text-sky">Certification</Chip>
					<h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">{c.title}</h3>
					<p className="mt-1 text-slate-300">Issued by {c.issuer} · {c.issued} · Valid until {c.expires}</p>
					<p className="mt-4 max-w-2xl leading-relaxed text-slate-300">{c.description}</p>
					<Button href={c.url} external size="sm" className="mt-6 w-full sm:w-auto">
						Verify on Credly <Icon name="external" className="h-4 w-4" />
					</Button>
				</div>
			</Card>
		</Reveal>
		<div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-3">
			{courses.map((g, i) => (
				<Reveal key={g.provider} delay={i * 100}>
					<Card className="h-full">
						<h3 className="font-display text-lg font-bold text-navy">{g.provider}</h3>
						<ul className="mt-4 space-y-3">
							{g.items.map((t) => (
								<li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-700">
									<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
									{t}
								</li>
							))}
						</ul>
					</Card>
				</Reveal>
			))}
		</div>
	</Section>
);
