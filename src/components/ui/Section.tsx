import type { ReactNode } from 'react';

const widths = { md: 'max-w-3xl', lg: 'max-w-5xl', xl: 'max-w-6xl' } as const;

type Props = {
	children: ReactNode;
	/** Content max width. Defaults to the widest layout. */
	size?: keyof typeof widths;
	/** Full-bleed navy background (hero-style sections). */
	dark?: boolean;
	className?: string;
};

/**
 * Page section: consistent max-width, side gutter and mobile-first vertical rhythm
 * (py-16 on phones, py-24 from the `sm` breakpoint up). Use this instead of repeating the classes.
 */
export const Section = ({ children, size = 'xl', dark = false, className = '' }: Props) => (
	<section className={dark ? 'bg-navy' : undefined}>
		<div className={`mx-auto px-5 py-16 sm:py-24 ${widths[size]} ${className}`}>{children}</div>
	</section>
);
