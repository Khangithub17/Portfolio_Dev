const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  // Remove target: 'server' as it's causing issues with client components
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Add experimental features for better client-side handling
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  // Configure webpack to handle client-side modules
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}