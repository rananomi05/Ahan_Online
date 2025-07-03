/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the i18n block
  experimental: {
    serverActions: true, // or other features you use
  },
};

module.exports = nextConfig;
