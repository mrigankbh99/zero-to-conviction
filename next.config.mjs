/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@/components"],
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
