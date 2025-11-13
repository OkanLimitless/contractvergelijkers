/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  transpilePackages: ['@cv/ui', '@cv/views']
}
module.exports = nextConfig
