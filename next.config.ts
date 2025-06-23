import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for Vercel deployment
  images: {
    unoptimized: true
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  }
};

export default nextConfig;
