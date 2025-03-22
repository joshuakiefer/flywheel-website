/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = nextConfig 