/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages deployment via @cloudflare/next-on-pages
  // Run: npm run pages:build && wrangler pages deploy
  transpilePackages: ['three'],
  experimental: {
    // For better Three.js tree-shaking
  },
}

export default nextConfig
