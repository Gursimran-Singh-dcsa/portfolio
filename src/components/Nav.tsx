'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, profile } from '../data/site';
import { Icon } from './Icons';

const links = [['About', '#about'], ['Journey', '#journey'], ['Products', '#products'], ['Work', '#work'], ['Skills', '#skills'], ['Blog', '#blog'], ['Contact', '#contact']];

export const Nav = () => {
	const home = usePathname() === '/';
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const f = () => setScrolled(window.scrollY > 20);
		f();
		window.addEventListener('scroll', f, { passive: true });
		return () => window.removeEventListener('scroll', f);
	}, []);
	const href = (h: string) => (home ? h : `/${h}`);
	return (
		<header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl transition ${scrolled ? 'shadow-lg shadow-navy/30' : ''}`}>
			<div className="border-b border-white/10 bg-black/25 text-xs text-slate-300">
				<div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-5">
					<p className="hidden sm:block">Full Stack Developer · Ambala · Chandigarh, India</p>
					<div className="flex items-center gap-5">
						<a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-1.5 transition hover:text-white">
							<Icon name="phone" className="h-3.5 w-3.5 text-sky" /> {PHONE_DISPLAY}
						</a>
						<a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className="inline-flex items-center gap-1.5 transition hover:text-white">
							<Icon name="mail" className="h-3.5 w-3.5 text-sky" /> <span className="hidden sm:inline">{profile.email}</span>
						</a>
					</div>
				</div>
			</div>
			<nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
				<a href={href('#top')} className="font-display text-lg font-bold text-white">
					Gursimran Singh
				</a>
				<ul className="hidden items-center gap-5 text-sm text-slate-300 md:flex lg:gap-8">
					{links.map(([n, h]) => (
						<li key={n}><a href={href(h)} className="transition hover:text-white">{n}</a></li>
					))}
					<li>
						<a href="/Resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-1.5 text-white transition hover:border-sky hover:bg-primary/30">Resume</a>
					</li>
				</ul>
				<button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
					<Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
				</button>
			</nav>
			{open && (
				<ul className="flex flex-col gap-1 px-5 pb-5 md:hidden">
					{links.map(([n, h]) => (
						<li key={n}><a onClick={() => setOpen(false)} href={href(h)} className="block rounded-lg px-3 py-3 text-lg text-white hover:bg-white/5">{n}</a></li>
					))}
				</ul>
			)}
		</header>
	);
};
