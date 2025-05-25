"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Settings } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Automated Content Tool",
    description:
      "Built interactive React components following Figma specs, ensured 100% design fidelity and introduced lazy-loading to improve time-to-first-paint. Developed project management efficiency using agile methodologies to enhance team collaboration and project efficiency.",
    category: "Web Application",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Material UI",
      "Apollo GraphQL",
      "MongoDB",
      "AWS",
      "Discord API",
      "Telegram API",
    ],
    features: [
      "Interactive React components with 100% design fidelity",
      "Lazy-loading implementation for performance optimization",
      "Agile methodology integration for team collaboration",
    ],
    icon: Code2,
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Lang Co Thu",
    description:
      "Directed project management efforts, using agile methodologies to enhance team collaboration and project efficiency. Implemented structured team building methodologies to ensure thorough team readiness and goal alignment efficiency.",
    category: "Project Management",
    technologies: [
      "RESTful API",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Prisma",
    ],
    features: [
      "Enhanced team collaboration using agile practices",
      "Comprehensive team building methodologies",
      "Structured project efficiency optimization",
    ],
    icon: Settings,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Online Landing Page",
    description:
      "Enhanced landing page performance by incorporating server-side rendering with NextJS for improved SEO. Engineered a responsive landing page using CSS frameworks to ensure adaptive design across all screen sizes.",
    category: "Landing Page",
    technologies: ["NextJS", "SEO", "CSS"],
    features: [
      "Server-side rendering for improved SEO performance",
      "Responsive design across all screen sizes",
      "Optimized loading and user experience",
    ],
    icon: Globe,
    color: "from-orange-500 to-red-600",
  },
];

export function ProjectsSection() {
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
    <section id="projects" className="section-padding bg-secondary/20">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects that demonstrate my skills in full-stack
              development, performance optimization, and modern web
              technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="card h-full relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                    ></div>

                    {/* Project Icon */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
