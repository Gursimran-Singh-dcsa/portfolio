import { featuredService, services, waLink, type ServiceGroup } from '../data/site';
import { Reveal, SectionHead } from './Reveal';
import { Icon } from './Icons';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Chip } from './ui/Chip';
import { Section } from './ui/Section';

const groups: { name: ServiceGroup; blurb: string }[] = [
	{ name: 'Build it', blurb: 'Stores and smart features on top of your site' },
	{ name: 'Get found', blurb: 'Show up in search and in front of local customers' },
	{ name: 'Run it', blurb: 'Hosting that stays fast and affordable' },
];

export const Services = () => (
	<Section>
		<SectionHead id="services" kicker="Services" title="How I can help your business" />
		<p className="-mt-4 mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:-mt-6 sm:mb-10 sm:text-lg">
			I'm a full stack developer from Ambala, working in Chandigarh. If you're looking for a web developer near you, or for a senior engineer who can take a product from idea to production, this is what I do.
		</p>

		<Reveal>
			<Card tone="dark" padding="lg">
				<p className="text-sm font-medium uppercase tracking-[0.2em] text-sky">Most requested</p>
				<h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">{featuredService.title}</h3>
				<p className="mt-3 max-w-2xl leading-relaxed text-slate-300">{featuredService.text}</p>
				<ul className="mt-5 flex flex-wrap gap-2" aria-label="Examples of this work">
					{featuredService.examples.map((e) => (
						<li key={e}><Chip variant="glass" className="!px-3 !py-1.5">{e}</Chip></li>
					))}
				</ul>
				<div className="mt-6 flex flex-col gap-3 sm:flex-row">
					<Button href="#contact" className="w-full sm:w-auto">Start a project</Button>
					<Button href="#work" variant="outline" className="w-full sm:w-auto">See the work</Button>
				</div>
			</Card>
		</Reveal>

		<div className="mt-10 space-y-10 sm:mt-14 sm:space-y-12">
			{groups.map((g) => (
				<Reveal key={g.name}>
					<div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
						<h3 className="font-display text-lg font-bold text-navy sm:text-xl">{g.name}</h3>
						<p className="text-sm text-slate-500">{g.blurb}</p>
					</div>
					<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
						{services.filter((s) => s.group === g.name).map((s) => (
							<Card key={s.title} interactive className="flex h-full flex-col">
								<h4 className="font-display text-xl font-bold text-navy">{s.title}</h4>
								<p className="mt-2 flex-1 leading-relaxed text-slate-600 sm:mt-3">{s.text}</p>
								{s.proof ? (
									<div className="mt-4 border-t border-slate-200 pt-4 sm:mt-5 sm:pt-5">
										<p className="text-sm font-medium text-navy">{s.proof.text}</p>
										<Button href={s.proof.href} variant="link" size="link" className="justify-start">
											{s.proof.label} <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
										</Button>
									</div>
								) : (
									<div className="mt-4 border-t border-slate-200 pt-4 sm:mt-5 sm:pt-5">
										<Button href={waLink('Hi Gursimran, I need an online store. Can we talk?')} external variant="link" size="link" className="justify-start">
											Ask about a store <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
										</Button>
									</div>
								)}
							</Card>
						))}
					</div>
				</Reveal>
			))}
		</div>
	</Section>
);
