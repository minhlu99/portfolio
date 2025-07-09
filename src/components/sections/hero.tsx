"use client";

import {
  FloatingShape,
  GridBackground,
  HolographicShimmer,
  LightRay,
  MorphingBlob,
  NeuralParticle,
  Particle,
  type FloatingShapeProps,
} from "@/components/background";
import { PERSONAL_INFO, ROLES } from "@/lib/constants";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [neuralParticles] = useState(() =>
    Array(20)
      .fill(null)
      .map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate enhanced floating shapes data
  const floatingShapes: Omit<FloatingShapeProps, "key">[] = [
    {
      shape: "dodecahedron",
      size: 20,
      color: "bg-primary/20",
      initialX: 100,
      initialY: 200,
      duration: 25,
      delay: 0,
      orbitRadius: 150,
      orbitDuration: 20,
    },
    {
      shape: "icosahedron",
      size: 16,
      color: "bg-blue-500/20",
      initialX: 800,
      initialY: 150,
      duration: 30,
      delay: 2,
      orbitRadius: 120,
      orbitDuration: 18,
    },
    {
      shape: "sphere",
      size: 18,
      color: "bg-purple-500/20",
      initialX: 200,
      initialY: 600,
      duration: 22,
      delay: 4,
      orbitRadius: 100,
      orbitDuration: 15,
    },
    {
      shape: "hexagon",
      size: 14,
      color: "bg-green-500/20",
      initialX: 700,
      initialY: 500,
      duration: 28,
      delay: 1,
      orbitRadius: 130,
      orbitDuration: 22,
    },
    {
      shape: "cube",
      size: 12,
      color: "bg-orange-500/20",
      initialX: 300,
      initialY: 100,
      duration: 32,
      delay: 3,
      orbitRadius: 90,
      orbitDuration: 16,
    },
    {
      shape: "triangle",
      size: 22,
      color: "bg-pink-500/20",
      initialX: 600,
      initialY: 400,
      duration: 20,
      delay: 5,
      orbitRadius: 140,
      orbitDuration: 24,
    },
    {
      shape: "dodecahedron",
      size: 15,
      color: "bg-cyan-500/20",
      initialX: 400,
      initialY: 300,
      duration: 26,
      delay: 7,
      orbitRadius: 110,
      orbitDuration: 19,
    },
    {
      shape: "icosahedron",
      size: 19,
      color: "bg-indigo-500/20",
      initialX: 150,
      initialY: 450,
      duration: 24,
      delay: 6,
      orbitRadius: 160,
      orbitDuration: 21,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ultra-Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Holographic Shimmer Effect */}
        <HolographicShimmer />

        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(var(--primary), 0.2) 0%, transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 90% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 60% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)
            `,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 30%, rgba(var(--primary), 0.2) 0%, transparent 60%),
               radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 90% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 60% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)`,
              `radial-gradient(circle at 80% 20%, rgba(var(--primary), 0.2) 0%, transparent 60%),
               radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 50% 60%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)`,
              `radial-gradient(circle at 20% 30%, rgba(var(--primary), 0.2) 0%, transparent 60%),
               radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 90% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 60% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)`,
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced Grid Background */}
        <GridBackground />

        {/* Morphing Blobs */}
        {mounted &&
          Array.from({ length: 8 }).map((_, index) => (
            <MorphingBlob key={`blob-${index}`} index={index} />
          ))}

        {/* Light Rays */}
        {mounted &&
          Array.from({ length: 12 }).map((_, index) => (
            <LightRay
              key={`ray-${index}`}
              angle={index * 30}
              delay={index * 0.5}
            />
          ))}

        {/* Advanced Floating 3D Shapes */}
        {mounted &&
          floatingShapes.map((shape, index) => (
            <FloatingShape key={`shape-${index}`} {...shape} />
          ))}

        {/* Neural Network Particles */}
        {mounted &&
          Array.from({ length: 20 }).map((_, index) => (
            <NeuralParticle
              key={`neural-${index}`}
              index={index}
              particles={neuralParticles}
            />
          ))}

        {/* Enhanced Floating Particles */}
        {mounted &&
          Array.from({ length: 50 }).map((_, index) => (
            <Particle key={`particle-${index}`} />
          ))}

        {/* Additional Depth Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/8 via-transparent to-blue-500/8"
          animate={{
            opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>{PERSONAL_INFO.location}</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground h-12 flex items-center justify-center"
            >
              {mounted ? (
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text"
                >
                  {ROLES[currentRole]}
                </motion.span>
              ) : (
                <span className="gradient-text">{PERSONAL_INFO.title}</span>
              )}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed text-justify"
          >
            {PERSONAL_INFO.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.button
              onClick={scrollToContact}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.button>

            <motion.a
              href={PERSONAL_INFO.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center justify-center space-x-6 mt-8"
          >
            <motion.a
              href={PERSONAL_INFO.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInLogoIcon className="w-6 h-6" />
            </motion.a>

            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
