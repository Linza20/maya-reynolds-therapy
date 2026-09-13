/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Static export: `npm run build` emits a plain `out/` folder that any static
     host will serve. No Node server, no image optimisation service. */
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};
export default nextConfig;
