/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-cdn-domain.com'],
  },
  // Enable static export for Vercel
  output: 'standalone',
}

module.exports = nextConfig