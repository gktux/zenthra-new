/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // Disable persistent filesystem cache on dev to prevent
    // "Cannot find module vendor-chunks/next.js" errors on Windows
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
