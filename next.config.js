/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
