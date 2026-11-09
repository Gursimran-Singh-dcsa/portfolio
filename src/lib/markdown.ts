import { marked } from 'marked';

const strip = (s: string) => s.replace(/<[^>]*>/g, '').trim();
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/**
 * Markdown -> HTML for blog posts, with a few presentation tweaks:
 *  - images are lazy-loaded
 *  - tables get `data-label` on each cell (column heading) and a scroll wrapper, so on phones
 *    they can be restyled as stacked cards (see `.prose table` rules in globals.css)
 */
export function renderMarkdown(md: string): string {
	let html = marked.parse(md, { async: false }) as string;

	html = html.replace(/<img /g, '<img loading="lazy" decoding="async" ');

	html = html.replace(/<table>([\s\S]*?)<\/table>/g, (_m, inner: string) => {
		const heads = [...inner.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((h) => strip(h[1]));
		const body = inner.replace(/<tbody>[\s\S]*<\/tbody>/, (tbody) =>
			tbody.replace(/<tr>([\s\S]*?)<\/tr>/g, (_r, row: string) => {
				let i = -1;
				const cells = row.replace(/<td([^>]*)>/g, (_c, attrs: string) => {
					i += 1;
					return i === 0 ? `<td${attrs}>` : `<td${attrs} data-label="${esc(heads[i] ?? '')}">`;
				});
				return `<tr>${cells}</tr>`;
			})
		);
		return `<div class="table-scroll"><table>${body}</table></div>`;
	});

	return html;
}
