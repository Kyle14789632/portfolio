export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Alex Chen",
  title: "Full-Stack Developer",
  tagline: "Building elegant solutions to complex problems",
  bio: "I'm a passionate full-stack developer with 5+ years of experience crafting performant web applications. I love turning ideas into pixel-perfect, accessible, and blazing-fast digital experiences.",
  email: "alex@example.com",
  location: "San Francisco, CA",
};

export const projects: Project[] = [
  {
    title: "CloudSync Dashboard",
    description:
      "A real-time analytics dashboard with collaborative features, WebSocket integration, and dynamic data visualizations for cloud infrastructure monitoring.",
    image: "/projects/cloudsync.webp",
    tags: ["React", "Node.js", "WebSocket", "D3.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "ShopFlow E-Commerce",
    description:
      "A high-performance e-commerce platform with AI-powered product recommendations, Stripe payments, and a headless CMS for content management.",
    image: "/projects/shopflow.webp",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DevCollab IDE",
    description:
      "A browser-based collaborative code editor with real-time pair programming, integrated terminal, Git workflow, and AI code completion.",
    image: "/projects/devcollab.webp",
    tags: ["React", "Monaco Editor", "Socket.io", "Docker", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "FitTrack Mobile",
    description:
      "A cross-platform fitness tracking app with workout planning, progress analytics, social challenges, and integration with wearable devices.",
    image: "/projects/fittrack.webp",
    tags: ["React Native", "GraphQL", "MongoDB", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "TaskMaster API",
    description:
      "A scalable RESTful API for project management with role-based access, real-time notifications, webhook integrations, and comprehensive documentation.",
    image: "/projects/taskmaster.webp",
    tags: ["Express", "TypeScript", "PostgreSQL", "Redis", "Swagger"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "PixelForge Studio",
    description:
      "An AI-powered image editing web app with layer management, custom filters, batch processing, and cloud storage integration.",
    image: "/projects/pixelforge.webp",
    tags: ["Next.js", "Python", "TensorFlow", "AWS S3", "Canvas API"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 80 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 85 },
      { name: "AWS / GCP", level: 80 },
      { name: "CI/CD", level: 82 },
      { name: "Linux", level: 78 },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:alex@example.com", icon: "mail" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
