import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export interface ThemeDetection {
  /** The current theme setting (light, dark, or system) */
  theme: string | undefined;
  /** The actual resolved theme being applied (light or dark) */
  resolvedTheme: string | undefined;
  /** The system's preferred theme */
  systemTheme: string | undefined;
  /** Whether the component has mounted (prevents hydration issues) */
  mounted: boolean;
  /** Whether dark mode is currently active */
  isDark: boolean;
  /** Whether light mode is currently active */
  isLight: boolean;
  /** Whether system theme is selected */
  isSystem: boolean;
  /** Function to set the theme */
  setTheme: (theme: string) => void;
  /** Function to toggle between light and dark */
  toggleTheme: () => void;
  /** Function to cycle through all theme options */
  cycleTheme: () => void;
  /** Function to detect user's system preference */
  detectSystemPreference: () => string;
}

/**
 * Custom hook for comprehensive theme detection and management
 * Handles hydration, system preferences, and provides utility functions
 */
export function useThemeDetection(): ThemeDetection {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect system preference using media query
  const detectSystemPreference = (): string => {
    if (typeof window === "undefined") return "light";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Get the actual applied theme
  const currentTheme = mounted
    ? resolvedTheme || systemTheme || "light"
    : "light";

  // Utility functions
  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const cycleTheme = () => {
    if (!mounted) return;

    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return {
    theme,
    resolvedTheme,
    systemTheme,
    mounted,
    isDark: mounted && currentTheme === "dark",
    isLight: mounted && currentTheme === "light",
    isSystem: mounted && theme === "system",
    setTheme,
    toggleTheme,
    cycleTheme,
    detectSystemPreference,
  };
}
