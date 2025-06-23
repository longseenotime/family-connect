import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for Vercel deployment
  images: {
    unoptimized: true
  }
  // Removed experimental optimizeCss to fix Vercel build
};

export default nextConfig;
