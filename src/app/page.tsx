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
		description: 'Scalable business websites and web apps, e-commerce and Shopify websites, AI-powered features, SEO, digital marketing services, and cloud hosting and deployments.',
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
		knowsAbout: ['Web development', 'Full stack development', 'E-commerce', 'Shopify', 'React', 'Next.js', 'SEO', 'Digital marketing', 'Cloud hosting'],
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
			<Projects filterable />
			<Skills />
			<Learning />
			<BlogSection />
			<Contact />
		</main>
	);
}
