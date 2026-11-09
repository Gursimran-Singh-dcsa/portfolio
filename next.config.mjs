/** Static export: every page is pre-rendered to plain HTML in `out/` for GitHub Pages. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
