"use client";

import { NAVIGATION, PERSONAL_INFO } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Code,
  FileText,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navigationWithIcons = [
  { ...NAVIGATION[0], icon: User },
  { ...NAVIGATION[1], icon: Briefcase },
  { ...NAVIGATION[2], icon: Code },
  { ...NAVIGATION[3], icon: FileText },
  { ...NAVIGATION[4], icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">
              {PERSONAL_INFO.firstName}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationWithIcons.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-secondary-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-secondary-foreground" />
                )}
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-secondary-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-secondary-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navigationWithIcons.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 w-full p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200 text-left"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
