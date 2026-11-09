'use client';

import { useState, type FormEvent } from 'react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, profile, socials, waLink } from '../data/site';
import { Icon, SocialIcon } from './Icons';
import { Reveal, SectionHead } from './Reveal';

const field = 'w-full rounded-xl border border-white/15 bg-navy/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky';

export const Contact = () => {
	const [name, setName] = useState('');
	const [msg, setMsg] = useState('');
	const submit = (e: FormEvent) => {
		e.preventDefault();
		window.open(waLink(`Hi Gursimran, I'm ${name}.\n\n${msg}`), '_blank', 'noopener');
	};
	return (
		<section className="bg-navy">
		<div className="mx-auto max-w-5xl px-5 py-24">
			<SectionHead dark id="contact" kicker="Contact" title="Let's build something great" />
			<Reveal>
				<div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:p-12">
					<div>
						<p className="leading-relaxed text-slate-300">Send me a message and it lands straight in my WhatsApp, or call or email me. I usually reply within a few hours.</p>
						<a href={`tel:+${WHATSAPP_NUMBER}`} className="mt-6 flex items-center gap-2 text-white hover:text-sky">
							<Icon name="phone" className="h-5 w-5 text-sky" /> {PHONE_DISPLAY}
						</a>
						<a href={`mailto:${profile.email}`} className="mt-3 flex items-center gap-2 text-white hover:text-sky">
							<Icon name="mail" className="h-5 w-5 text-sky" /> {profile.email}
						</a>
						<div className="mt-8 flex gap-3">
							{socials.map((s) => (
								<a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="group"><SocialIcon name={s.icon} /></a>
							))}
						</div>
					</div>
					<form onSubmit={submit} className="space-y-4">
						<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
						<textarea required rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="How can I help?" className={field} />
						<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-400">
							<Icon name="whatsapp" mono /> Send on WhatsApp
						</button>
					</form>
				</div>
			</Reveal>
		</div>
		</section>
	);
};

export const WhatsAppFab = () => (
	<a href={waLink("Hi Gursimran, I'd like to connect.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-500 p-4 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-110">
		<Icon name="whatsapp" mono className="h-6 w-6" />
	</a>
);

export const Footer = () => (
	<footer className="border-t border-white/10 bg-navy py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Gursimran Singh</footer>
);
