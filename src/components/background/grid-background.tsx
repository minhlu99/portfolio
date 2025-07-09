"use client";

import { motion } from "framer-motion";

export const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40"
            />
            <circle
              cx="30"
              cy="30"
              r="1"
              fill="currentColor"
              className="text-primary/60"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor="rgb(var(--primary))"
              stopOpacity="0.1"
            />
            <stop
              offset="50%"
              stopColor="rgb(var(--primary))"
              stopOpacity="0.4"
            />
            <stop
              offset="100%"
              stopColor="rgb(var(--primary))"
              stopOpacity="0.1"
            />
          </linearGradient>
          <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="rgb(var(--primary))"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="rgb(var(--primary))"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridGradient)" />
        <motion.circle
          cx="50%"
          cy="50%"
          r="20%"
          fill="url(#pulseGradient)"
          initial={{ r: "0%" }}
          animate={{ r: ["0%", "50%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
