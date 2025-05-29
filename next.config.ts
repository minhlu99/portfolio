import type { NextConfig } from "next";

/**
 * Next.js configuration
 * Handles deployment-specific settings for different environments
 */
const nextConfig: NextConfig = {
  // Make environment variables available in the browser
  env: {
    NEXT_PUBLIC_DEPLOYMENT_ENV: process.env.NEXT_PUBLIC_DEPLOYMENT_ENV,
  },

  // Environment-specific configurations
  ...(process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "vercel"
    ? {
        // Vercel-specific configuration
        images: {
          unoptimized: false, // Allow Vercel's image optimization
        },
        experimental: {
          serverComponentsExternalPackages: [], // Default compatibility setting
        },
      }
    : {
        // GitHub Pages (or other non-Vercel) configuration
        output: "export",
        trailingSlash: true,
        images: {
          unoptimized: true, // No server-side image optimization available
        },

        // Set base path and asset prefix for GitHub Pages subdirectory
        basePath:
          process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "github-pages"
            ? "/portfolio"
            : "",
        assetPrefix:
          process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "github-pages"
            ? "/portfolio"
            : "",
      }),
};

export default nextConfig;
