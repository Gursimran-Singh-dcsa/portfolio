import { PHONE_DISPLAY, WHATSAPP_NUMBER, profile, socials, stats } from '../data/site';
import { Icon, SocialIcon } from './Icons';
import { Reveal } from './Reveal';

export const Hero = () => (
	<section id="top" className="relative overflow-hidden bg-navy pt-32 pb-24 sm:pt-44">
		<div aria-hidden className="pointer-events-none absolute inset-0">
			<div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/50 blur-[140px]" />
			<div className="absolute top-40 right-0 h-[360px] w-[360px] rounded-full bg-sky/15 blur-[120px]" />
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
		</div>
		<div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.3fr_1fr]">
			<div>
				<Reveal>
					<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
						<span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for new opportunities
					</span>
				</Reveal>
				<Reveal delay={100}>
					<h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
						Hi, I'm <span className="bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">{profile.name}</span>
					</h1>
				</Reveal>
				<Reveal delay={200}>
					<p className="mt-4 font-display text-xl text-white/90 sm:text-2xl">Full Stack Developer from Ambala · Senior Software Engineer at Trantor, Chandigarh</p>
					<p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{profile.tagline}</p>
				</Reveal>
				<Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
					<a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/40 transition hover:bg-blue-600">
						Let's talk <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
					</a>
					<a href="#work" className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">See my work</a>
					<a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-slate-300 transition hover:text-white">
						<Icon name="download" className="h-4 w-4" /> Resume
					</a>
				</Reveal>
				<Reveal delay={400} className="mt-10 flex gap-3">
					{socials.map((s) => (
						<a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="group">
							<SocialIcon name={s.icon} />
						</a>
					))}
				</Reveal>
				<Reveal delay={500} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
					<a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 transition hover:text-white">
						<Icon name="phone" className="h-4 w-4 text-sky" /> {PHONE_DISPLAY}
					</a>
					<a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
						<Icon name="mail" className="h-4 w-4 text-sky" /> {profile.email}
					</a>
				</Reveal>
			</div>
			<Reveal delay={250} className="mx-auto">
				<div className="relative animate-float">
					<div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary to-sky opacity-40 blur-2xl" />
					<div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-primary/60 via-primary/30 to-navy shadow-2xl">
						<img src="/profile.png" alt="Gursimran Singh, full stack developer from Ambala working at Trantor in Chandigarh" fetchPriority="high" width={512} height={512} className="h-72 w-72 object-contain object-bottom sm:h-96 sm:w-96" />
					</div>
				</div>
			</Reveal>
		</div>
		<div id="about" className="relative mx-auto mt-24 grid max-w-6xl scroll-mt-24 gap-6 px-5 md:grid-cols-[1.4fr_1fr]">
			<Reveal className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
				<h2 className="font-display text-2xl font-bold text-white">About me</h2>
				<p className="mt-4 leading-relaxed text-slate-300">
					I'm a senior software engineer from Ambala, based in Chandigarh. Over 7+ years I've delivered high-traffic web applications across media, logistics, recruitment and digital marketing, and I now build AI-powered products with OpenAI APIs, RAG, vector search and function calling. I care about performance, accessibility and code that's easy to maintain. Outside software, I hold a Diploma in Pharmacy (D.Pharm) and interned at the District Hospital, Ambala City (Sept 2025 – Feb 2026), and I run a health-information site, Pharmacist Notes.
				</p>
			</Reveal>
			<div className="grid grid-cols-3 gap-4 md:grid-cols-1">
				{stats.map((s, i) => (
					<Reveal key={s.label} delay={i * 100} className="rounded-2xl border border-white/10 bg-white/5 p-5">
						<div className="font-display text-3xl font-bold text-white">{s.value}</div>
						<div className="mt-1 text-xs text-slate-300 sm:text-sm">{s.label}</div>
					</Reveal>
				))}
			</div>
		</div>
	</section>
);
