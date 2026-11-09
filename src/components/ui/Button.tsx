import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const variants = {
	primary: 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-blue-600',
	/** Outlined button for navy backgrounds */
	outline: 'border border-white/15 text-white hover:bg-white/5',
	/** Text-only button for navy backgrounds */
	ghost: 'text-slate-300 hover:text-white',
	whatsapp: 'bg-emerald-500 text-white hover:bg-emerald-400',
	/** Inline text link (e.g. "Visit website") */
	link: 'text-primary hover:text-navy',
} as const;

const sizes = {
	md: 'min-h-12 px-6 py-3',
	sm: 'min-h-11 px-5 py-2.5 text-sm',
	link: 'min-h-11 text-sm',
} as const;

type Common = { variant?: keyof typeof variants; size?: keyof typeof sizes; children: ReactNode; className?: string };
type AsLink = Common & { href: string; external?: boolean; download?: boolean } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;
type AsButton = Common & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * One button for the whole site. With `href` it renders a link (Next `Link` for internal paths,
 * a plain anchor for hashes/external URLs); without it, a real `<button>`.
 * Touch-friendly minimum height (44-48px) and a pointer cursor are built in.
 */
export const Button = (props: AsLink | AsButton) => {
	const { variant = 'primary', size = 'md', children, className = '', ...rest } = props;
	const cls = `group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition ${sizes[size]} ${variants[variant]} ${className}`;

	if ('href' in props && props.href !== undefined) {
		const { href, external, download } = props as AsLink;
		if (external) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
		if (download) return <a href={href} download className={cls}>{children}</a>;
		if (href.startsWith('/') && !href.startsWith('/#')) return <Link href={href} className={cls}>{children}</Link>;
		return <a href={href} className={cls}>{children}</a>;
	}
	const { type = 'button', ...btn } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
	return <button type={type} className={cls} {...btn}>{children}</button>;
};
