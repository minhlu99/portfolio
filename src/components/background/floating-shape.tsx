"use client";

import { motion } from "framer-motion";

export interface FloatingShapeProps {
  shape:
    | "cube"
    | "sphere"
    | "triangle"
    | "hexagon"
    | "dodecahedron"
    | "icosahedron";
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  orbitRadius?: number;
  orbitDuration?: number;
}

export const FloatingShape = ({
  shape,
  size,
  color,
  initialX,
  initialY,
  duration,
  delay,
  orbitRadius = 100,
  orbitDuration = 15,
}: FloatingShapeProps) => {
  const getShapeElement = () => {
    const baseClasses = `absolute rounded-lg opacity-60`;
    const sizeClasses = `w-${size} h-${size}`;

    switch (shape) {
      case "cube":
        return (
          <div
            className={`${baseClasses} ${sizeClasses} ${color} transform-gpu`}
            style={{
              clipPath:
                "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)",
              boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
            }}
          />
        );
      case "sphere":
        return (
          <div
            className={`${baseClasses} rounded-full ${sizeClasses} ${color} transform-gpu`}
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), ${color.replace("bg-", "").replace("/20", "")} 70%)`,
              boxShadow: "0 0 25px rgba(var(--primary), 0.4)",
            }}
          />
        );
      case "triangle":
        return (
          <div
            className={`${baseClasses} ${sizeClasses} ${color} transform-gpu`}
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              filter: "drop-shadow(0 0 15px rgba(var(--primary), 0.3))",
            }}
          />
        );
      case "hexagon":
        return (
          <div
            className={`${baseClasses} ${sizeClasses} ${color} transform-gpu`}
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
            }}
          />
        );
      case "dodecahedron":
        return (
          <div
            className={`${baseClasses} ${sizeClasses} ${color} transform-gpu`}
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              background: `conic-gradient(from 0deg, ${color.replace("bg-", "").replace("/20", "")}, transparent, ${color.replace("bg-", "").replace("/20", "")})`,
              filter: "drop-shadow(0 0 20px rgba(var(--primary), 0.4))",
            }}
          />
        );
      case "icosahedron":
        return (
          <div
            className={`${baseClasses} ${sizeClasses} ${color} transform-gpu`}
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              background: `linear-gradient(135deg, ${color.replace("bg-", "").replace("/20", "")}, transparent 50%, ${color.replace("bg-", "").replace("/20", "")})`,
              boxShadow: "0 0 30px rgba(var(--primary), 0.5)",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute transform-gpu"
      initial={{
        x: initialX,
        y: initialY,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 0.8,
      }}
      animate={{
        // Orbital motion
        x: [
          initialX,
          initialX + Math.cos(0) * orbitRadius,
          initialX + Math.cos(Math.PI / 2) * orbitRadius,
          initialX + Math.cos(Math.PI) * orbitRadius,
          initialX + Math.cos((3 * Math.PI) / 2) * orbitRadius,
          initialX,
        ],
        y: [
          initialY,
          initialY + Math.sin(0) * orbitRadius,
          initialY + Math.sin(Math.PI / 2) * orbitRadius,
          initialY + Math.sin(Math.PI) * orbitRadius,
          initialY + Math.sin((3 * Math.PI) / 2) * orbitRadius,
          initialY,
        ],
        // 3D rotations
        rotateX: [0, 180, 360],
        rotateY: [0, 180, 360],
        rotateZ: [0, 90, 180, 270, 360],
        scale: [0.8, 1.3, 0.9, 1.2, 0.8],
      }}
      transition={{
        x: { duration: orbitDuration, repeat: Infinity, ease: "linear" },
        y: { duration: orbitDuration, repeat: Infinity, ease: "linear" },
        rotateX: { duration, delay, repeat: Infinity, ease: "easeInOut" },
        rotateY: {
          duration: duration * 1.2,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotateZ: {
          duration: duration * 0.8,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: duration * 1.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {getShapeElement()}
    </motion.div>
  );
};
