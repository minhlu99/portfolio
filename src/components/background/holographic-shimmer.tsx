"use client";

import { motion } from "framer-motion";

export const HolographicShimmer = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none transform-gpu"
      style={{
        background: `
          linear-gradient(45deg, 
            transparent 30%, 
            rgba(var(--primary), 0.1) 40%, 
            rgba(59, 130, 246, 0.1) 50%, 
            rgba(168, 85, 247, 0.1) 60%, 
            transparent 70%
          )`,
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
