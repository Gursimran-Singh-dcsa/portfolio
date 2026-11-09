'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
		}, { threshold: 0.12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>;
};

export const SectionHead = ({ id, kicker, title, dark = false }: { id: string; kicker: string; title: string; dark?: boolean }) => (
	<Reveal className="mb-8 sm:mb-12">
		<p id={id} className={`scroll-mt-24 font-display text-sm font-medium uppercase tracking-[0.25em] ${dark ? 'text-sky' : 'text-primary'}`}>{kicker}</p>
		<h2 className={`mt-3 font-display text-3xl font-bold sm:text-5xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
	</Reveal>
);
