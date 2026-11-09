import { career, education } from '../data/site';
import { Reveal, SectionHead } from './Reveal';

const AXIS_START = 2018;
const AXIS_END = 2027; // exclusive: axis covers Jan 2018 → Dec 2026
const SPAN = (AXIS_END - AXIS_START) * 12;

const toMonths = (ym: string) => {
	const [y, m] = ym.split('-').map(Number);
	return (y - AXIS_START) * 12 + (m - 1);
};
const pct = (n: number) => `${(n / SPAN) * 100}%`;
const label = (ym: string) => new Date(`${ym}-01`).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });

const nowYm = () => {
	const d = new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};

const years = Array.from({ length: AXIS_END - AXIS_START }, (_, i) => AXIS_START + i);

export const Journey = () => {
	const now = nowYm();
	return (
		<section className="mx-auto max-w-5xl px-5 py-24">
			<SectionHead id="journey" kicker="Experience" title="Career path" />
			<Reveal>
				<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<div className="relative">
						{/* year grid */}
						<div aria-hidden className="pointer-events-none absolute inset-0">
							{years.map((y) => (
								<div key={y} className="absolute inset-y-0 border-l border-dashed border-slate-200" style={{ left: pct((y - AXIS_START) * 12) }}>
									<span className="absolute -top-1 left-1 hidden text-[10px] font-medium text-slate-400 sm:block">{y}</span>
								</div>
							))}
						</div>
						<ol className="relative space-y-9 pt-6">
							{career.map((r) => {
								const current = !r.end;
								const s = toMonths(r.start);
								const e = toMonths(r.end ?? now) + 1;
								return (
									<li key={r.start}>
										<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
											<h3 className="font-display text-lg font-bold text-navy">{r.role}</h3>
											<span className="text-sm font-medium text-primary">
												{label(r.start)} – {r.end ? label(r.end) : 'Present'}
											</span>
										</div>
										<p className="text-sm font-medium text-slate-700">{r.org}</p>
										<div className="relative mt-3 h-3.5 rounded-full bg-slate-100">
											<div
												className={`absolute inset-y-0 rounded-full ${current ? 'bg-gradient-to-r from-primary to-sky shadow-md shadow-primary/30' : 'bg-navy'}`}
												style={{ left: pct(s), width: pct(Math.max(e - s, 1)) }}
											/>
										</div>
										<p className="mt-2 text-sm leading-relaxed text-slate-500">{r.stack}</p>
									</li>
								);
							})}
						</ol>
					</div>
					<div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
						{education.map((e) => (
							<div key={e.degree} className="flex items-center gap-3 rounded-2xl bg-soft px-4 py-3">
								{e.year && <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{e.year}</span>}
								<div>
									<p className="text-sm font-bold text-navy">{e.degree}</p>
									{e.school && <p className="text-xs text-slate-500">{e.school}</p>}
								</div>
							</div>
						))}
					</div>
				</div>
			</Reveal>
		</section>
	);
};
