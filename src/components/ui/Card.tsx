import type { ReactNode } from 'react';

const tones = {
	/** White card on the light page */
	light: 'border border-slate-200 bg-white shadow-sm',
	/** Translucent card on navy backgrounds */
	glass: 'border border-white/10 bg-white/5',
	/** Solid navy card */
	dark: 'bg-navy shadow-xl',
} as const;

const paddings = { none: '', sm: 'p-4 sm:p-5', md: 'p-5 sm:p-7', lg: 'p-6 sm:p-8 md:p-10' } as const;

type Props = {
	children: ReactNode;
	tone?: keyof typeof tones;
	padding?: keyof typeof paddings;
	/** Lift + border highlight on hover (for cards that act as links or feature tiles). */
	interactive?: boolean;
	className?: string;
};

/** The rounded surface used for services, skills, projects, blog cards, etc. */
export const Card = ({ children, tone = 'light', padding = 'md', interactive = false, className = '' }: Props) => (
	<div
		className={`rounded-3xl ${tones[tone]} ${paddings[padding]} ${
			interactive ? 'transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl' : ''
		} ${className}`}
	>
		{children}
	</div>
);
