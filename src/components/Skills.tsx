import { skills } from '../data/site';
import { Reveal, SectionHead } from './Reveal';
import { Card } from './ui/Card';
import { Chip } from './ui/Chip';
import { Section } from './ui/Section';

export const Skills = () => (
	<Section>
		<SectionHead id="skills" kicker="Toolbox" title="Tech I work with" />
		<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
			{Object.entries(skills).map(([group, items], i) => (
				<Reveal key={group} delay={(i % 2) * 100}>
					<Card className="h-full">
						<h3 className="font-display text-lg font-bold text-navy">{group}</h3>
						<ul className="mt-4 flex flex-wrap gap-2">
							{items.map((s) => (
								<li key={s}>
									<Chip variant="outline">{s}</Chip>
								</li>
							))}
						</ul>
					</Card>
				</Reveal>
			))}
		</div>
	</Section>
);
