import { BlogSection } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Journey } from '../components/Journey';
import { Learning } from '../components/Learning';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Skills } from '../components/Skills';
import { products } from '../data/site';

const SITE = 'https://gursimran.in';

const jsonLd = [
	{
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': `${SITE}/#service`,
		name: 'Gursimran Singh — Web Developer',
		description: 'Full stack web development, SEO-ready business websites, AI-powered features and cloud cost optimisation.',
		url: SITE,
		image: `${SITE}/og.png`,
		telephone: '+918950848075',
		email: 'gursimran0812.dcsa@gmail.com',
		founder: { '@id': `${SITE}/#person` },
		areaServed: [
			{ '@type': 'City', name: 'Ambala' },
			{ '@type': 'City', name: 'Chandigarh' },
		],
		address: { '@type': 'PostalAddress', addressLocality: 'Chandigarh', addressCountry: 'IN' },
		knowsAbout: ['Web development', 'Full stack development', 'React', 'Next.js', 'SEO'],
	},
	{
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Products by Gursimran Singh',
		itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: p.url })),
	},
];

export default function Home() {
	return (
		<main>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Hero />
			<Services />
			<Journey />
			<Projects id="products" kicker="My products" title="Products I run" items={products} />
			<Projects />
			<Skills />
			<Learning />
			<BlogSection />
			<Contact />
		</main>
	);
}
