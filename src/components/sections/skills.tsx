"use client";

import { ADDITIONAL_SKILLS, PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { Code, Database, Globe, Palette, Server, Wrench } from "lucide-react";
import {
  SiCss3,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

// Brand colors for technology icons
const iconColors = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#000000",
  redux: "#764ABC",
  tailwind: "#06B6D4",
  styledComponents: "#DB7093",
  css: "#1572B6",
  nestjs: "#E0234E",
  prisma: "#2D3748",
  mongodb: "#47A248",
  postgresql: "#4169E1",
  redis: "#DC382D",
  graphql: "#E10098",
  git: "#F05032",
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: iconColors.javascript },
      { name: "TypeScript", icon: SiTypescript, color: iconColors.typescript },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend Frameworks/Libraries",
    icon: Globe,
    skills: [
      { name: "ReactJS", icon: SiReact, color: iconColors.react },
      { name: "NextJS", icon: SiNextdotjs, color: iconColors.nextjs },
      { name: "Redux Toolkit/Zustand", icon: SiRedux, color: iconColors.redux },
    ],
  },
  {
    title: "Styling & UI/UX",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: iconColors.tailwind },
      {
        name: "Styled Components",
        icon: SiStyledcomponents,
        color: iconColors.styledComponents,
      },
      { name: "CSS/SCSS", icon: SiCss3, color: iconColors.css },
    ],
  },
  {
    title: "Backend Frameworks/Libraries",
    icon: Server,
    skills: [
      { name: "NestJS", icon: SiNestjs, color: iconColors.nestjs },
      { name: "Prisma", icon: SiPrisma, color: iconColors.prisma },
      { name: "Mongoose", icon: SiMongodb, color: iconColors.mongodb },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: iconColors.postgresql },
      { name: "MongoDB", icon: SiMongodb, color: iconColors.mongodb },
      { name: "Redis", icon: SiRedis, color: iconColors.redis },
    ],
  },
  {
    title: "Tools & Development",
    icon: Wrench,
    skills: [
      { name: "RESTful APIs", icon: Globe },
      { name: "GraphQL APIs", icon: SiGraphql, color: iconColors.graphql },
      { name: "Git", icon: SiGit, color: iconColors.git },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency
              in various technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="card"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-3 gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skillIndex}
                          className="flex flex-col items-center space-y-1 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            inView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.3,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <SkillIcon
                              className="w-4 h-4"
                              style={{
                                color: skill.color,
                              }}
                            />
                          </div>
                          <span className="text-xs font-medium text-foreground text-center leading-tight">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {ADDITIONAL_SKILLS.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {PERSONAL_INFO.yearsOfExperience}
              </div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {PERSONAL_INFO.technologies}
              </div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {PERSONAL_INFO.commitment}
              </div>
              <div className="text-muted-foreground">Commitment to Quality</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
