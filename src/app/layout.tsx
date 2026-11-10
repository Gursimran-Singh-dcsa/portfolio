import type { Metadata, Viewport } from 'next';
import { Footer, WhatsAppFab } from '../components/Contact';
import { Nav } from '../components/Nav';
import { RegisterSW } from '../components/RegisterSW';
import { seo } from '../data/site';
import './globals.css';

const SITE = 'https://gursimran.in';
const OG_ALT = 'Gursimran Singh, Senior Software Engineer and Full Stack Developer from Ambala, based in Chandigarh';

export const metadata: Metadata = {
	metadataBase: new URL(SITE),
	title: { default: seo.title, template: '%s | Gursimran Singh' },
	description: seo.description,
	keywords: seo.keywords,
	applicationName: 'Gursimran Singh',
	authors: [{ name: 'Gursimran Singh', url: SITE }],
	creator: 'Gursimran Singh',
	publisher: 'Gursimran Singh',
	category: 'technology',
	manifest: '/manifest.webmanifest',
	icons: { icon: '/me.ico', apple: '/icons/icon-192.png' },
	alternates: { canonical: '/', types: { 'application/rss+xml': '/feed.xml' } },
	robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
	openGraph: {
		type: 'website',
		siteName: 'Gursimran Singh',
		locale: 'en_IN',
		url: SITE,
		title: seo.title,
		description: seo.description,
		images: [{ url: '/og.png', width: 1200, height: 630, alt: OG_ALT }],
	},
	twitter: { card: 'summary_large_image', title: seo.title, description: seo.description, images: [{ url: '/og.png', alt: OG_ALT }] },
	// Regional hints for local searches ("web developer near me")
	other: { 'geo.region': 'IN-CH', 'geo.placename': 'Chandigarh, Ambala', 'geo.country': 'IN' },
};

export const viewport: Viewport = { themeColor: '#0b1f3a' };

const jsonLd = [
	{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Gursimran Singh',
		alternateName: ['Gursimran Singh Portfolio', 'Gursimran Full Stack Developer'],
		url: SITE,
		inLanguage: 'en-IN',
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${SITE}/#person`,
		name: 'Gursimran Singh',
		alternateName: ['Gursimran', 'Gursimran Ambala', 'Gursimran Trantor'],
		jobTitle: 'Senior Software Engineer and Full Stack Developer',
		description: seo.description,
		url: SITE,
		image: `${SITE}/profile.png`,
		email: 'mailto:gursimran0812.dcsa@gmail.com',
		telephone: '+918950848075',
		homeLocation: { '@type': 'Place', name: 'Ambala, Haryana, India' },
		workLocation: { '@type': 'Place', name: 'Chandigarh, India' },
		address: { '@type': 'PostalAddress', addressLocality: 'Chandigarh', addressCountry: 'IN' },
		worksFor: { '@type': 'Organization', name: 'Trantor', address: { '@type': 'PostalAddress', addressLocality: 'Chandigarh', addressCountry: 'IN' } },
		alumniOf: [
			{ '@type': 'CollegeOrUniversity', name: 'Panjab University, Chandigarh' },
			{ '@type': 'CollegeOrUniversity', name: 'Kurukshetra University' },
		],
		hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'Claude Certified Architect – Foundations', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'Anthropic' } },
		knowsAbout: ['Full stack development', 'React', 'React Native', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'Astro', 'Web development', 'E-commerce', 'Shopify', 'SEO', 'AWS', 'Kubernetes', 'Generative AI', 'OpenAI', 'RAG'],
		sameAs: ['https://github.com/Gursimran-Singh-dcsa', 'https://www.linkedin.com/in/gursimran-singh-b83a3b126', 'https://www.instagram.com/gursimran__singh_/', 'https://pharmacistnotes.com', 'https://gadgetsimplify.in'],
	},
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-IN">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			</head>
			<body>
				<Nav />
				{children}
				<Footer />
				<WhatsAppFab />
				<RegisterSW />
			</body>
		</html>
	);
}
