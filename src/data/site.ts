export const WHATSAPP_NUMBER = '918950848075'; // +91-8950848075 (same number for calls and WhatsApp)
export const PHONE_DISPLAY = '+91 89508 48075';

export const profile = {
	name: 'Gursimran Singh',
	role: 'Full Stack Developer',
	tagline: '7+ years building scalable web applications, from pixel-perfect interfaces to resilient APIs and AI-powered products.',
	location: 'Chandigarh, India',
	company: 'Trantor Software',
	resume: '/Resume.pdf',
	email: 'gursimran0812.dcsa@gmail.com',
};

export const socials = [
	{ name: 'GitHub', href: 'https://github.com/Gursimran-Singh-dcsa', icon: 'github' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/gursimran-singh-b83a3b126', icon: 'linkedin' },
	{ name: 'Instagram', href: 'https://www.instagram.com/gursimran__singh_/', icon: 'instagram' },
	{ name: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'whatsapp' },
] as const;

export type Role = { role: string; org: string; start: string; end?: string; stack: string };

// `end` omitted = current role. Dates are YYYY-MM.
export const career: Role[] = [
	{ role: 'Software Engineer', org: 'Agile Media Lab, Chandigarh', start: '2018-11', end: '2021-01', stack: 'Migrated Backbone.js to React · REST APIs · PHP-Symfony · MySQL' },
	{ role: 'Senior Software Engineer', org: 'Aristeia Services, Singapore', start: '2021-02', end: '2021-09', stack: 'Content-rich blogging platforms · React · Docker · CI/CD' },
	{ role: 'Senior Software Engineer', org: 'Trantor Inc, Chandigarh', start: '2021-09', stack: 'High-traffic campaign, logistics and recruitment platforms · Gen AI with OpenAI, RAG, vector search and function calling · React · Astro · Next.js · Node.js' },
	{ role: 'Intern', org: 'District Hospital, Ambala City', start: '2025-09', end: '2026-02', stack: 'Hands-on hospital pharmacy training alongside my D.Pharm' },
];

export const education: { degree: string; school?: string; year?: string }[] = [
	{ degree: 'Diploma in Pharmacy (D.Pharm)', school: 'P.S.B.T.E', year: '2026' },
	{ degree: 'MCA', school: 'Panjab University, Chandigarh', year: '2019' },
	{ degree: 'B.Sc Computer Science', school: 'Kurukshetra University', year: '2016' },
];

export const skills: Record<string, string[]> = {
	Frontend: ['React', 'React Native', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit Query', 'GraphQL', 'MUI', 'Ant Design', 'i18n', 'Accessibility (WCAG)'],
	Backend: ['Node.js', 'NestJS', 'Express', 'PHP', 'Symfony', 'Doctrine ORM', 'MySQL', 'MongoDB', 'WebSockets', 'OAuth 2.0 / JWT'],
	'AI & LLMs': ['OpenAI APIs', 'Function calling', 'RAG', 'Vector search', 'Hugging Face', 'Structured outputs'],
	'Testing & DevOps': ['Jest', 'React Testing Library', 'Playwright', 'Docker', 'Kubernetes', 'GitLab CI', 'AWS (EC2, S3, CodePipeline)', 'SonarQube', 'Varnish', 'Nginx'],
};

export type Project = {
	slug: string;
	title: string;
	summary: string;
	role: string;
	tech: string[];
	url?: string;
	// screenshots live in public/projects/<slug>-desktop.png and <slug>-mobile.png
	desktop?: string;
	mobile?: string;
	badge?: string;
};

export const products: Project[] = [
	{
		slug: 'gadgetsimplify',
		title: 'GadgetSimplify',
		badge: 'Vibe-coded with Claude Code',
		summary: 'A technology publication that explains gadgets in simple language, with smartphone coverage and step-by-step buying guides so readers can make smarter buying decisions. Built end to end with Claude Code and deployed on Cloudflare with no database at all: every article and category lives in JSON files.',
		role: 'Founder & Full Stack Developer',
		tech: ['Next.js', 'Claude Code', 'Cloudflare', 'JSON content (no database)'],
		url: 'https://gadgetsimplify.in',
		desktop: '/projects/gadgetsimplify-desktop.jpg',
		mobile: '/projects/gadgetsimplify-mobile.jpg',
	},
	{
		slug: 'pharmacistnotes',
		title: 'Pharmacist Notes',
		badge: 'Powered by WordPress',
		summary: 'A medicine and health information blog for students and healthcare learners, grounded in pharmacology textbooks, clinical references and official drug-labelling sources. Includes a medicines guide, topic categories and a WhatsApp channel, managed and hosted on WordPress.',
		role: 'Founder & Author',
		tech: ['WordPress', 'Managed hosting', 'Healthcare content'],
		url: 'https://pharmacistnotes.com',
		desktop: '/projects/pharmacistnotes-desktop.jpg',
		mobile: '/projects/pharmacistnotes-mobile.jpg',
	},
];

export const projects: Project[] = [
	{
		slug: 'tevnt',
		title: 'Tevnt — FIFA World Cup Campaigns',
		summary: 'High-traffic promotional campaign sites for major payment networks and banks, including Visa, Chase, Wells Fargo and Capital One. Handled 1.2M+ users in a one-hour window at ~120 TPS, with ~20,000 secure ticket-redemption links, Visa iframe integration, retry logic and zero Checkmarx findings.',
		role: 'Senior Software Engineer',
		tech: ['Astro', 'React', 'TypeScript', 'Tailwind', 'i18n', 'AWS WAF Captcha'],
		url: 'https://tevnt.com',
		desktop: '/projects/tevnt-desktop.jpg',
		mobile: '/projects/tevnt-mobile.jpg',
	},
	{
		slug: 'trantor',
		title: 'Trantor — Corporate Website',
		summary: 'The corporate website for Trantor, an enterprise technology services company: an immersive, animated experience presenting its AI modernisation, Centers of Excellence and cybersecurity services, with content managed in a headless CMS.',
		role: 'Full Stack Developer',
		tech: ['Astro', 'Storyblok CMS', 'Tailwind CSS', 'SEO'],
		url: 'https://www.trantorinc.com',
		desktop: '/projects/trantor-desktop.jpg',
		mobile: '/projects/trantor-mobile.jpg',
	},
	{
		slug: 'sourcesmart',
		title: 'Source Smart with AI',
		summary: 'An AI-powered recruitment tool where HR teams upload job descriptions and resumes and let an agentic AI shortlist the best candidates. Features bulk and PDF/DOCX uploads, resubmitting updated resumes, role-based access, FSR interview-question generation and full CRUD for projects and JDs.',
		role: 'Senior Software Engineer',
		tech: ['React', 'TypeScript', 'Ant Design', 'Express', 'OAuth 2.0', 'Agentic AI'],
		url: 'https://ss.trantorinc.com',
		desktop: '/projects/sourcesmart-desktop.jpg',
		mobile: '/projects/sourcesmart-mobile.jpg',
	},
	{
		slug: 'xataka',
		title: 'Webedia España — Xataka',
		summary: 'A high-traffic technology blogging platform and sister sites (Trendencias, Directo al Paladar) sharing one codebase. Migrated legacy Backbone modules to React, and improved performance and SEO with Varnish caching and Google Ads / header-bidding monetisation.',
		role: 'Full Stack Developer',
		tech: ['PHP (Symfony)', 'Doctrine ORM', 'React', 'Node.js', 'Express', 'jQuery', 'Prebid.js', 'Docker'],
		url: 'https://www.xataka.com',
		desktop: '/projects/xataka-desktop.jpg',
		mobile: '/projects/xataka-mobile.jpg',
	},
	{
		slug: 'vimenpaq',
		title: 'Vimenpaq',
		summary: 'A multilingual (i18n) parcel and shipment management platform for branch managers, delivered as a PWA. Features role-based access control with JWT, encrypted login, GraphQL APIs with RTK Query caching, a shared design system and Playwright end-to-end tests, shipped to Kubernetes on AWS through GitLab runners and CodePipeline.',
		role: 'Full Stack Developer',
		tech: ['React', 'Ant Design', 'Axios', 'GraphQL', 'Redux Toolkit', 'RBAC / JWT', 'i18n', 'PWA', 'Kubernetes', 'AWS', 'GitLab CI'],
		desktop: '/projects/vimenpaq-desktop.jpg',
		mobile: '/projects/vimenpaq-mobile.jpg',
	},
	{
		slug: 'ai-todo',
		title: 'AI Todo Management Assistant',
		summary: 'A natural-language task assistant built on OpenAI function calling that creates, updates, prioritises, completes and retrieves tasks, with structured outputs, date normalisation and multi-step conversation state.',
		role: 'Full Stack Developer',
		tech: ['Node.js', 'TypeScript', 'OpenAI', 'OAuth 2.0'],
		desktop: '/projects/ai-todo-desktop.jpg',
		mobile: '/projects/ai-todo-mobile.jpg',
	},
	{
		slug: 'cdt',
		title: 'Customer Discovery Tool',
		summary: 'An enterprise admin application for VMware with caching, efficient rendering for large datasets, reusable components and a unit-tested codebase, deployed on Docker/Kubernetes.',
		role: 'Senior Software Engineer',
		tech: ['React', 'React Router', 'Jest', 'Enzyme', 'Docker', 'Kubernetes'],
		desktop: '/projects/cdt-desktop.jpg',
		mobile: '/projects/cdt-mobile.jpg',
	},
	{
		slug: 'movemate',
		title: 'Move Mate Relocations NZ',
		summary: 'A business website for a New Zealand moving company offering house, office, warehouse and intercity relocation, with service pages, a blog and a quote-request flow.',
		role: 'Full Stack Developer',
		tech: ['Next.js', 'Tailwind CSS', 'SEO'],
		url: 'https://movematerelocations.co.nz',
		desktop: '/projects/movemate-desktop.jpg',
		mobile: '/projects/movemate-mobile.jpg',
	},
	{
		slug: 'png',
		title: 'PNG Software Technologies',
		summary: 'A business portfolio website for PNG Software, a full-service technology partner offering web development, AI solutions, SEO and digital marketing. Designed, built and launched end to end as the sole developer.',
		role: 'Full Stack Developer (sole developer)',
		tech: ['Next.js', 'GitHub Pages', 'SEO', 'Web3Forms'],
		url: 'https://pngsoftware.in',
		desktop: '/projects/png-desktop.jpg',
		mobile: '/projects/png-mobile.jpg',
	},
];

export const stats = [
	{ value: '7+', label: 'Years building for the web' },
	{ value: '3', label: 'Companies across India and Singapore' },
	{ value: String(projects.length), label: 'Products and sites featured here' },
];

export const certification = {
	title: 'Claude Certified Architect – Foundations',
	issuer: 'Anthropic',
	issued: 'Oct 2026',
	expires: 'Oct 2027',
	description: 'Credential for solution architects who design and build production-grade applications with Claude using Claude Code, the Claude Agent SDK, the Claude API and MCP.',
	url: 'https://www.credly.com/badges/f8b2dff1-155d-47e0-9ba8-681499214960',
	image: '/certs/claude-architect.png',
};

export const courses: { provider: string; items: string[] }[] = [
	{ provider: 'Anthropic', items: ['Claude with the Anthropic API', 'Introduction to Agent Skills', 'Introduction to Model Context Protocol (MCP)'] },
	{ provider: 'Udemy', items: ['Generative AI for Node.js: OpenAI, LangChain & TypeScript', 'ChatGPT Prompt Engineering', 'Learn to Code in Python 3', 'React, Node.js, Express & MongoDB — The MERN Fullstack Guide'] },
	{ provider: 'NamasteDev', items: ['Namaste Frontend System Design'] },
];

export const seo = {
	title: 'Gursimran Singh | Full Stack Developer - Ambala, Chandigarh',
	description: 'Gursimran Singh is a full stack developer from Ambala, working at Trantor in Chandigarh. Hire a web developer for React, Next.js and Node.js websites and apps.',
	// Target searches: the name, name + place, name + role, name + employer, and local/business intent.
	keywords: [
		'Gursimran Singh',
		'Gursimran Ambala',
		'Gursimran full stack developer',
		'Gursimran Trantor',
		'web developer near me',
		'full stack developer Chandigarh',
		'full stack developer Ambala',
		'web developer Ambala',
		'web developer Chandigarh',
		'website developer near me',
		'React developer Chandigarh',
		'Next.js developer India',
		'senior software engineer Chandigarh',
		'hire full stack developer',
		'ecommerce website developer',
		'Shopify developer',
		'digital marketing services',
		'Trantor software engineer',
	],
};

export const services = [
	{ title: 'Scalable business websites & web apps', text: 'Fast, scalable, SEO-ready websites and web applications in React, Next.js and Astro, like the sites I built for Move Mate Relocations, PNG Software and Trantor.' },
	{ title: 'E-commerce / Shopify websites', text: 'Online stores and e-commerce websites, including Shopify, built to be fast, easy to manage and ready to sell, from product pages and checkout to launch.' },
	{ title: 'AI-powered features', text: 'OpenAI, RAG, vector search and function calling, as in Source Smart with AI and my AI task assistant: practical AI inside real products.' },
	{ title: 'SEO & performance', text: 'Technical SEO, structured data and content structure that helps a business show up in search. One case study reached page 1 for a very competitive local keyword.' },
	{ title: 'Digital marketing services', text: 'Social media posts, blogging and search-friendly content that put a business in front of local customers, like the work that took Move Mate Relocations to page 1 for a very competitive keyword.' },
	{ title: 'Cloud hosting & deployments', text: 'Setting up cloud hosting and deployments on AWS, Docker and Kubernetes with CI/CD, and reviewing setups to cut waste: for one customer, fewer load balancers and standard Kubernetes support cut the bill by about two-thirds.' },
];

export const waLink = (text = '') => `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
