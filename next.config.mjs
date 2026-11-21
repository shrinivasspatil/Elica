/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // www host redirects live in middleware so /areas/11 and www/areas/11
      // can 301 directly to the slug in one hop.
      // Old WebSite SearchAction template URL Google still crawls
      {
        source: '/services',
        has: [{ type: 'query', key: 'q' }],
        destination: '/services',
        permanent: true,
      },
      // Legacy numeric service URLs → services hub
      { source: '/services/1', destination: '/services/chimney-general-cleaning', statusCode: 301 },
      { source: '/services/2', destination: '/services/chimney-deep-cleaning', statusCode: 301 },
      { source: '/services/3', destination: '/services/gas-hob-service', statusCode: 301 },
      { source: '/services/4', destination: '/services/built-in-microwave-service', statusCode: 301 },
      { source: '/services/5', destination: '/services', statusCode: 301 },
      { source: '/services/6', destination: '/services', statusCode: 301 },
      { source: '/services/7', destination: '/services/hob-cleaning', statusCode: 301 },
      { source: '/services/8', destination: '/services', statusCode: 301 },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
}

export default nextConfig
