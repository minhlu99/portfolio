"use client";

import { useThemeDetection } from "@/hooks/use-theme-detection";
import { Monitor, Moon, Sun } from "lucide-react";

/**
 * Demo component showing how to use theme detection throughout your app
 * You can remove this component or use it for debugging theme states
 */
export function ThemeStatus() {
  const {
    theme,
    resolvedTheme,
    isDark,
    isSystem,
    mounted,
    detectSystemPreference,
  } = useThemeDetection();

  if (!mounted) {
    return (
      <div className="p-4 rounded-lg bg-secondary/50 animate-pulse">
        <div className="h-4 bg-secondary rounded w-32"></div>
      </div>
    );
  }

  const systemPreference = detectSystemPreference();

  return (
    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        {isDark ? (
          <Moon className="w-4 h-4" />
        ) : isSystem ? (
          <Monitor className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
        Theme Status
      </h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Current Setting:</span>
          <span className="font-medium capitalize">{theme}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Resolved Theme:</span>
          <span className="font-medium capitalize">{resolvedTheme}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">System Preference:</span>
          <span className="font-medium capitalize">{systemPreference}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Dark Mode Active:</span>
          <span
            className={`font-medium ${
              isDark ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {isDark ? "Yes" : "No"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Using System Theme:</span>
          <span
            className={`font-medium ${
              isSystem ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {isSystem ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
}
