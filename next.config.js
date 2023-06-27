/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
