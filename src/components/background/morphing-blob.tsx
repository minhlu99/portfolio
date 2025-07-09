"use client";

import { motion } from "framer-motion";

export interface MorphingBlobProps {
  index: number;
}

export const MorphingBlob = ({ index }: MorphingBlobProps) => {
  const colors = [
    "from-primary/30 to-blue-500/30",
    "from-purple-500/30 to-pink-500/30",
    "from-green-500/30 to-cyan-500/30",
    "from-orange-500/30 to-red-500/30",
  ];

  const size = 200 + Math.random() * 300;
  const initialX = Math.random() * window.innerWidth;
  const initialY = Math.random() * window.innerHeight;
  const duration = 20 + Math.random() * 15;

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[index % colors.length]} blur-3xl transform-gpu`}
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.8, 0],
        scale: [0, 1.5, 0.8, 1.2, 0],
        x: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
        y: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
        borderRadius: [
          "50%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "50%",
        ],
      }}
      transition={{
        duration,
        delay: Math.random() * 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
