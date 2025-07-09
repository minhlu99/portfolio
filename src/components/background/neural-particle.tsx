"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export interface NeuralParticleProps {
  index: number;
  particles: Array<{ x: number; y: number }>;
}

export const NeuralParticle = ({ index, particles }: NeuralParticleProps) => {
  const duration = 15 + Math.random() * 10;
  const size = 3 + Math.random() * 3;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  // Update particle position for connections
  useEffect(() => {
    particles[index] = { x, y };
  }, [x, y, index, particles]);

  return (
    <motion.div
      className="absolute rounded-full bg-primary/60 transform-gpu"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        boxShadow: "0 0 10px rgba(var(--primary), 0.6)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1.5, 1, 1.2, 0],
        x: [0, (Math.random() - 0.5) * 300],
        y: [0, (Math.random() - 0.5) * 300],
      }}
      transition={{
        duration,
        delay: Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
