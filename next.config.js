/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.stablediffusionapi.com",
      "pub-8b49af329fae499aa563997f5d4068a4.r2.dev",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
