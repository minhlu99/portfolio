/**
 * Get the base URL for the current environment
 */
export function getBaseUrl(): string {
  const env = process.env.NEXT_PUBLIC_DEPLOYMENT_ENV;

  if (env === "github-pages") {
    return `https://${process.env.NEXT_PUBLIC_GITHUB_USERNAME}.github.io/portfolio`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
