import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make environment variables available in the browser
  env: {
    NEXT_PUBLIC_DEPLOYMENT_ENV: process.env.VERCEL
      ? "vercel"
      : process.env.NODE_ENV === "production"
      ? "github-pages"
      : "development",
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL || "",
  },
  // Default configuration for Vercel
  ...(process.env.VERCEL
    ? {
        // Vercel configuration - set to default settings
        // Remove output: "standalone" since Vercel handles this
        images: {
          // Allow Vercel to optimize images
          unoptimized: false,
        },
        // No basePath or assetPrefix needed for Vercel
        experimental: {
          // Empty to ensure compatibility
          serverComponentsExternalPackages: [],
        },
      }
    : {
        // GitHub Pages configuration
        output: "export",
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
        // GitHub Pages serves from a subdirectory
        basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
        assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
      }),
};

export default nextConfig;
