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
  resumeFile: "/LuNguyenMinh-CV.pdf",

  // Experience
  yearsOfExperience: "2+",
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
  url: "https://your-portfolio-url.com", // Update this with your actual domain
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
