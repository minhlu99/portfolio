"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  GraduationCap,
  Heart,
  MapPin,
  Target,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and what drives
              me as a developer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main About */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Professional Summary
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">What I Love</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Building responsive, accessible web applications
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Optimizing performance and user experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Learning new technologies and best practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Collaborating with teams to deliver quality solutions
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Education & Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/20 pl-4 space-y-2">
                    <h4 className="font-semibold text-foreground">
                      {PERSONAL_INFO.education.degree}
                    </h4>
                    <p className="text-muted-foreground">
                      {PERSONAL_INFO.education.university}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{PERSONAL_INFO.education.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{PERSONAL_INFO.education.gpa} GPA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Personal Info</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">
                        {PERSONAL_INFO.yearsOfExperience} Years
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium">{PERSONAL_INFO.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium">{PERSONAL_INFO.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary">
                    {PERSONAL_INFO.yearsOfExperience}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary">
                    {PERSONAL_INFO.projectsCompleted}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary">
                    {PERSONAL_INFO.technologies}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
