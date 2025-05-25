"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: PERSONAL_INFO.currentPosition,
    company: PERSONAL_INFO.currentCompany,
    location: PERSONAL_INFO.workLocation,
    period: PERSONAL_INFO.workPeriod,
    type: "Full-time",
    description:
      "Working as a full-stack developer focusing on modern web technologies and delivering high-quality solutions.",
    achievements: [
      "Optimized and built front-end components with NextJS/ReactJS to reduce loading times by 30%, enhancing overall user experience",
      "Developed a responsive web application using modern web technologies, aimed at increasing user engagement via consistent website, mobile, and mobile application interfaces",
      "Enhanced GraphQL API performance by implementing query optimization techniques and added real-time features to the web application to ensure efficient data management and a smooth user experience",
      "Implemented GraphQL API operations with filtering, pagination, and sorting, facilitating the automatic distribution of crawled content to configured platforms such as Discord and Telegram, streamlining content management processes",
      "Conducted thorough testing and debugging to ensure bi-weekly to ensure code quality and adherence to industry standards, resulting in a 25% reduction in bugs during release cycles",
      "Implemented security best practices and mechanisms across all applications, utilizing NodeJS and Express to enhance data protection and ensure compliance with industry standards, reducing vulnerability incidents by 10%",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "GraphQL",
      "Express",
      "TypeScript",
      "Discord API",
      "Telegram API",
    ],
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impact I&apos;ve made in various
              roles.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      className="card"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {exp.period}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                inView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{ delay: achIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-foreground">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                inView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{ delay: techIndex * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Current Status */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center space-x-8 mt-12"
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-secondary border-4 border-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Currently Available
                </h3>
                <p className="text-muted-foreground">
                  Open to new opportunities and exciting projects. Let&apos;s
                  build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
