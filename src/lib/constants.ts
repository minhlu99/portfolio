// Import environment utility functions
import { getBaseUrl } from "./env";

// Personal Information Constants
export const PERSONAL_INFO = {
  // Basic Info
  name: "Lu Nguyen Minh",
  firstName: "Minh Lu",
  title: "Full Stack Developer",
  location: "Ho Chi Minh City, Vietnam",

  // Contact Information
  email: "lunguyenminh1@gmail.com",
  phone: "0327210767",

  // Social Links
  github: {
    url: "https://github.com/minhlu99",
    username: "minhlu99",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/lữ-nguyên-minh-0258a9151/",
    username: "lữ-nguyên-minh-0258a9151",
  },

  // Professional Summary
  summary:
    "Dynamic fullstack developer with 2 years of experience building APIs and web applications, including RESTful APIs for e-commerce and GraphQL APIs for content management. Expertise in NextJS, NestJS, and databases, seeking innovative projects.",

  // Resume/CV
  resumeFile:
    "https://drive.google.com/file/d/1yokY3EtRfc2GPhYKi7ax6qCRqyIt5mAL/view?usp=drive_link",

  // Experience
  yearsOfExperience: (() => {
    const startDate = new Date(2023, 1); // February 2023 (0-indexed month)
    const currentDate = new Date();
    const diffInMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    const years = Math.floor(diffInMonths / 12);
    return `${years}+`;
  })(),
  projectsCompleted: "3+",
  technologies: "6+",
  commitment: "100%",

  // Education
  education: {
    degree: "Bachelor of International Business",
    university: "University of Economics Ho Chi Minh City",
    period: "2021 - 2023",
    gpa: "3.2",
  },

  // Current Status
  currentCompany: "Techwiz",
  currentPosition: "Fullstack Developer",
  workPeriod: "February 2023 - Present",
  workLocation: "Ho Chi Minh, Viet Nam",
} as const;

// Role Animations for Hero Section
export const ROLES = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "ReactJS Developer",
  "NextJS Developer",
] as const;

// Website Metadata
export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.summary,
  // Use our environment utility to determine the URL
  url: getBaseUrl(),
  siteName: `${PERSONAL_INFO.name} Portfolio`,
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "ReactJS Developer",
    "NextJS Developer",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "NestJS",
    "GraphQL",
    "RESTful APIs",
  ],
};

// Navigation Items
export const NAVIGATION = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
] as const;

// Additional Skills
export const ADDITIONAL_SKILLS = [
  "Node.js",
  "Express.js",
  "Apollo Server",
  "Discord API",
  "Telegram API",
  "JWT Authentication",
  "Responsive Design",
  "Material UI",
  "Agile Methodologies",
  "AWS",
] as const;
