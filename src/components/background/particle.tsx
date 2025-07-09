"use client";

import { motion } from "framer-motion";

export const Particle = () => {
  const duration = 8 + Math.random() * 12;
  const delay = Math.random() * 5;
  const size = 2 + Math.random() * 4;
  const initialX = Math.random() * window.innerWidth;
  const initialY = Math.random() * window.innerHeight;

  return (
    <motion.div
      className="absolute rounded-full bg-primary/30 transform-gpu"
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
        boxShadow: "0 0 8px rgba(var(--primary), 0.4)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        x: [0, (Math.random() - 0.5) * 200],
        y: [0, -100 - Math.random() * 200],
        rotateZ: [0, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};
