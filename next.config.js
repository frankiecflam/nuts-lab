/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// Configured for permission loading external images from firebase storage
module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
