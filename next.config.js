/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'],
  },
  compress: true,
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
