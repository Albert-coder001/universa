/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  ...(process.env.GITHUB_PAGES === 'true' ? { output: 'export', basePath: '/universa', images: { unoptimized: true } } : {}),
};
export default nextConfig;
