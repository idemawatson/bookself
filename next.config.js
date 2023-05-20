const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/shelf',
      },
    ]
  },
  images: {
    domains: ['books.google.com'],
  },
})

module.exports = nextConfig
