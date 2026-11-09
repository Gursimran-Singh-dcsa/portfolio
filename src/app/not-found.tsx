import Link from 'next/link';
import { Icon } from '../components/Icons';
import { waLink } from '../data/site';

const quick = [
	['My work', '/#work'],
	['Products', '/#products'],
	['Skills', '/#skills'],
	['Blog', '/#blog'],
	['Contact', '/#contact'],
];

export default function NotFound() {
	return (
		<main className="relative flex min-h-screen items-center overflow-hidden bg-navy px-5 pt-24 pb-16">
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/40 blur-[140px]" />
				<div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-sky/15 blur-[120px]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
			</div>
			<div className="relative mx-auto max-w-2xl text-center">
				<p className="select-none bg-gradient-to-b from-white to-sky/40 bg-clip-text font-display text-[8rem] font-black leading-none text-transparent sm:text-[12rem]">404</p>
				<h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-5xl">This page took a wrong turn</h1>
				<p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
					The page you're looking for doesn't exist or has moved. Let's get you back to something worth reading.
				</p>
				<div className="mt-9 flex flex-wrap justify-center gap-3">
					<Link href="/" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/40 transition hover:bg-blue-600">
						Back to home <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
					</Link>
					<a href={waLink('Hi Gursimran, I found a broken link on your website.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
						<Icon name="whatsapp" className="h-4 w-4" /> Report a broken link
					</a>
				</div>
				<nav aria-label="Popular pages" className="mt-12 border-t border-white/10 pt-8">
					<p className="text-xs font-medium uppercase tracking-[0.25em] text-sky">Or jump to</p>
					<ul className="mt-4 flex flex-wrap justify-center gap-2">
						{quick.map(([label, href]) => (
							<li key={label}>
								<Link href={href} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky hover:text-white">{label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</main>
	);
}
