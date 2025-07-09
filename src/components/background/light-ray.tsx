"use client";

import { motion } from "framer-motion";

export interface LightRayProps {
  angle: number;
  delay: number;
}

export const LightRay = ({ angle, delay }: LightRayProps) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 origin-left transform-gpu"
      style={{
        width: "100vmax",
        height: "2px",
        background:
          "linear-gradient(to right, rgba(var(--primary), 0.8), transparent)",
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scaleX: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeOut",
      }}
    />
  );
};
