import type { ReactNode } from 'react';

const variants = {
	/** Small blue tag (tech tags, dates) */
	brand: 'bg-primary/10 px-3 py-1 text-xs font-medium text-primary',
	/** Neutral bordered pill (skills) */
	outline: 'border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:border-primary hover:text-primary',
	/** Solid navy badge (e.g. "Vibe-coded with Claude Code") */
	badge: 'bg-navy px-3 py-1 text-xs font-medium text-white shadow',
	/** Pill on navy backgrounds */
	glass: 'border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky hover:text-white',
	success: 'bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700',
	neutral: 'bg-navy/10 px-3 py-1 text-xs font-medium text-navy',
} as const;

export const Chip = ({ children, variant = 'brand', className = '' }: { children: ReactNode; variant?: keyof typeof variants; className?: string }) => (
	<span className={`inline-block rounded-full ${variants[variant]} ${className}`}>{children}</span>
);
