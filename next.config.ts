import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  // The deploy workflow passes the base path from the GitHub Pages settings:
  // "/portfolio-website" on github.io, empty once a custom domain is set.
  basePath: process.env.PAGES_BASE_PATH || undefined,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
