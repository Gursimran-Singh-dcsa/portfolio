'use client';

import { useState, type FormEvent } from 'react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, profile, socials, waLink } from '../data/site';
import { Icon, SocialIcon } from './Icons';
import { Reveal, SectionHead } from './Reveal';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

// text-base (16px) stops iOS Safari from zooming the page when a field is focused
const field = 'w-full min-h-12 rounded-xl border border-white/15 bg-navy/60 px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky';

export const Contact = () => {
	const [name, setName] = useState('');
	const [msg, setMsg] = useState('');
	const submit = (e: FormEvent) => {
		e.preventDefault();
		window.open(waLink(`Hi Gursimran, I'm ${name}.\n\n${msg}`), '_blank', 'noopener');
		// Clear the form once the message has been handed off to WhatsApp
		setName('');
		setMsg('');
	};
	return (
		<Section dark size="lg">
			<SectionHead dark id="contact" kicker="Contact" title="Let's build something great" />
			<Reveal>
				<Card tone="glass" padding="lg" className="grid gap-8 md:grid-cols-2 md:gap-10">
					<div>
						<p className="leading-relaxed text-slate-300">Send me a message and it lands straight in my WhatsApp, or call or email me. I usually reply within a few hours.</p>
						<a href={`tel:+${WHATSAPP_NUMBER}`} className="mt-4 flex min-h-11 items-center gap-3 text-white hover:text-sky">
							<Icon name="phone" className="h-5 w-5 shrink-0 text-sky" /> {PHONE_DISPLAY}
						</a>
						<a href={`mailto:${profile.email}`} className="flex min-h-11 items-center gap-3 break-all text-white hover:text-sky">
							<Icon name="mail" className="h-5 w-5 shrink-0 text-sky" /> {profile.email}
						</a>
						<div className="mt-5 flex gap-3">
							{socials.map((s) => (
								<a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="group"><SocialIcon name={s.icon} /></a>
							))}
						</div>
					</div>
					<form onSubmit={submit} className="space-y-4">
						<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" className={field} />
						<textarea required rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="How can I help?" className={field} />
						<Button type="submit" variant="whatsapp" className="w-full">
							<Icon name="whatsapp" mono /> Send on WhatsApp
						</Button>
					</form>
				</Card>
			</Reveal>
		</Section>
	);
};

export const WhatsAppFab = () => (
	<a href={waLink("Hi Gursimran, I'd like to connect.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 rounded-full bg-emerald-500 p-3.5 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-110 sm:bottom-5 sm:right-5 sm:p-4">
		<Icon name="whatsapp" mono className="h-6 w-6" />
	</a>
);

export const Footer = () => (
	<footer className="border-t border-white/10 bg-navy px-5 pt-8 pb-24 text-center text-sm text-slate-400 sm:pb-8">© {new Date().getFullYear()} Gursimran Singh</footer>
);
