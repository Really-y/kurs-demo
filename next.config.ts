import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
