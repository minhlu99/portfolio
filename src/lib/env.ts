/**
 * Environment utility functions
 */

export type DeploymentEnvironment =
  | "development"
  | "vercel"
  | "github-pages"
  | "other";

/**
 * Get the current deployment environment
 */
export function getDeploymentEnvironment(): DeploymentEnvironment {
  if (typeof window === "undefined") {
    // Server-side
    return (
      (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV as DeploymentEnvironment) ||
      (process.env.VERCEL
        ? "vercel"
        : process.env.NODE_ENV === "production"
        ? "github-pages"
        : "development")
    );
  }

  // Client-side
  return (
    (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV as DeploymentEnvironment) ||
    "development"
  );
}

/**
 * Check if the app is running in a specific environment
 */
export function isEnvironment(env: DeploymentEnvironment): boolean {
  return getDeploymentEnvironment() === env;
}

/**
 * Get the base URL for the current environment
 */
export function getBaseUrl(): string {
  const env = getDeploymentEnvironment();

  if (env === "vercel") {
    return (
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : "")
    );
  }

  if (env === "github-pages") {
    return "https://your-github-username.github.io/portfolio";
  }

  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

/**
 * Get environment-specific configuration
 */
export function getEnvConfig() {
  const env = getDeploymentEnvironment();

  return {
    environment: env,
    baseUrl: getBaseUrl(),
    isProduction: ["vercel", "github-pages"].includes(env),
    isDevelopment: env === "development",
  };
}
