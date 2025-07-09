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
    "https://drive.google.com/file/d/1l_6_uCjA9cQSp4EmFBVYtWhUDFLiiUzz/view?usp=sharing",

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
    // Core Developer Roles
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "ReactJS Developer",
    "NextJS Developer",
    "TypeScript Developer",
    "Node.js Developer",

    // Programming Languages
    "TypeScript",
    "JavaScript",

    // Frontend Technologies
    "ReactJS",
    "NextJS",
    "React Hook Form",
    "Zustand",
    "TanStack Query",
    "Zod",

    // Backend Technologies
    "Node.js",
    "Express.js",
    "NestJS",
    "Apollo Server",
    "class-validator",
    "class-transformer",

    // API & Authentication
    "RESTful APIs",
    "GraphQL",
    "JWT",
    "Passport",
    "Swagger",

    // Databases & ORMs
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Mongoose",

    // Performance & Caching
    "Redis",
    "Rate Limiting",

    // Testing
    "Jest",
    "Vitest",

    // Styling & UI
    "Tailwind CSS",
    "Styled Components",
    "Framer Motion",
    "Responsive Design",
    "HTML5",
    "CSS3",
    "SASS",

    // Developer Tools
    "Git",
    "ESLint",
    "Prettier",
    "Husky",

    // General
    "Portfolio",
    "Ho Chi Minh City",
    "Vietnam",
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

// Additional Skills - Complementary technologies and methodologies
export const ADDITIONAL_SKILLS = [
  // State Management & Data Fetching
  "Zustand",
  "TanStack Query",
  "React Hook Form",

  // Validation & Type Safety
  "Zod",
  "class-validator",
  "class-transformer",

  // Authentication & Security
  "Passport",
  "JWT Authentication",

  // API Documentation & Testing
  "Swagger",
  "Postman",

  // Performance & Caching
  "Redis",
  "Rate Limiting",

  // Animation & UI Enhancement
  "Framer Motion",
  "Styled Components",

  // Code Quality & Development
  "ESLint",
  "Prettier",
  "Husky",
  "Git Workflows",

  // Testing Frameworks
  "Jest",
  "Vitest",
  "React Testing Library",

  // Architecture & Methodologies
  "Clean Architecture",
  "SOLID Principles",
  "Agile Methodologies",
  "CI/CD",

  // Cloud & Deployment
  "Vercel",
  "AWS",
  "Docker",
] as const;
