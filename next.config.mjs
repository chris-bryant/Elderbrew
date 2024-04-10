/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: "/Elderbrew",
  assetPrefix: '/',
  images: {
    domains: ['www.elderbrew.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
