import {
  PersonalData,
  SkillsData,
  ExperienceData,
  ProjectData,
  EducationData,
  AchievementData,
} from "@/types";

export const personal: PersonalData = {
  name: "Aditya Srivastava",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with React, Node.js | AI Enthusiast",
  bio: `I'm a third-year Computer Science student at The LNM Institute of Information Technology, Jaipur. I enjoy building scalable full-stack applications and backend systems using React, Node.js, Express, and MongoDB. My interests span distributed systems, APIs, microservices, AI-powered applications, and problem-solving through DSA. I have industry experience from internships where I worked on production features, broker API integrations, scalable backend services, and modern frontend interfaces.`,
  location: "Jaipur, Rajasthan, India",
  email: "techie.adi47@gmail.com",
  phone: "+91 7309958494",
  links: {
    github: "https://github.com/techieadi4703",
    linkedin: "https://www.linkedin.com/in/techieadi4703",
    leetcode: "https://leetcode.com/u/techieadi4703/",
    resume: "https://drive.google.com/file/d/18skqj-RtomULmWlrchoSWJt2qkRl4MCq/view?usp=sharing",
  },
};

export const skills: SkillsData = {
  languages: ["C++", "JavaScript", "TypeScript", "Python", "Go", "C"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "ShadCN UI", "Framer Motion"],
  backend: ["Node.js", "Express.js", "Go", "REST APIs", "WebSockets", "FastAPI"],
  databases: ["MongoDB", "PostgreSQL", "Supabase"],
  tools: ["Git", "GitHub", "Docker", "Linux", "Vite", "Firebase", "AWS (EC2, S3)", "n8n", "GitHub Actions"],
  ai: ["Prompt Engineering", "Vector Databases", "Pinecone", "FAISS", "LLM APIs", "LangChain", "NLP"],
  concepts: ["Data Structures & Algorithms", "System Design", "Microservices", "Event-Driven Architecture", "API Optimization", "Agile"],
};

export const experience: ExperienceData[] = [
  {
    role: "Founding Software Engineer",
    company: "BuildBazaarX",
    location: "Remote",
    duration: "April 2026 – Present",
    bullets: [
      "Led end-to-end development of a scalable multi-role marketplace, owning architecture, frontend, backend, database, and deployment while building core systems like authentication, payments, dashboards, and workflows across 10+ modules.",
      "Managed a team of 3–5 junior developers, driving task execution, code reviews, and delivery timelines while optimizing APIs, application performance, and state management to reduce redundant operations by 40%+.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "OptionX (Ratel Fintech Pvt. Ltd.)",
    location: "Gurugram, Haryana",
    duration: "May 2025 – July 2025",
    bullets: [
      "Engineered a high-performance React-based instrument search with infinite scrolling, keyboard shortcuts, and contextual trading actions (Buy, Sell, Chart, Watchlist), reducing search-to-action latency by 40% for 1K+ daily users.",
      "Refactored the header UI with structured state management, implementing 4+ dropdowns and 6+ reusable modals (onboarding, alerts, profile), improving navigation efficiency and component maintainability.",
      "Built automated monitoring infrastructure using n8n workflows and a Python FastAPI service to verify price feed integrity at market open, triggering real-time Slack alerts and reducing manual intervention.",
    ],
  },
  // {
  //   role: "Software Development Intern",
  //   company: "Infineon Technologies",
  //   location: "India",
  //   duration: "Previously",
  //   bullets: [
  //     "Contributed to production-grade engineering projects during an industry internship with Infineon Technologies.",
  //   ],
  // },
];

export const projects: ProjectData[] = [
  {
    name: "BuildBazaarX",
    tagline: "Multi-Role Construction Marketplace",
    description: "A scalable marketplace supporting 4 distinct user roles across 10+ functional modules, with Razorpay live payments, HMAC verification via Supabase Edge Functions, dynamic cost estimation with 60+ inputs, and cross-device cart persistence.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
    metrics: ["100+ active sessions", "sub-300ms payment latency", "40% API optimization", "~30% cart retention lift"],
    live: "#", // Add live URL when ready
    github: null, // private repo
    featured: true,
  },
  {
    name: "Tikki Trades",
    tagline: "AI-Powered Trading Platform",
    description: "Real-time trading platform with data from Finnhub across 5000+ global stocks, live P&L updates under 200ms, Inngest-powered price alerting (1000+ evaluations/day), and an AI trade journal powered by Gemini analyzing entries for bias, risk, and strategy.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Inngest", "Gemini", "Groq", "Finnhub API"],
    metrics: ["99%+ data availability", "5000+ stocks", "<200ms updates", "1000+ alert evaluations/day"],
    live: "#",
    github: null,
    featured: true,
  },
  {
    name: "Visual Learner",
    tagline: "AI-Driven Video Lecture Generator",
    description: "Educational platform that converts text prompts into narrated MP4 video lectures using LLMs, TTS, Stable Diffusion image generation, and FFmpeg for video assembly.",
    tech: ["Python", "LLMs", "Stable Diffusion", "TTS", "FFmpeg", "FastAPI"],
    metrics: [],
    live: null,
    github: null,
    featured: false,
  },
  {
    name: "JobScanner v2.0",
    tagline: "Job Search Automation Tool",
    description: "Automated job discovery and filtering tool targeting remote SDE roles and internships at US-based companies, with intelligent filtering and notification workflows.",
    tech: ["Python", "Node.js", "n8n", "Web Scraping"],
    metrics: [],
    live: null,
    github: null,
    featured: false,
  },
  {
    name: "LeetCode Solve Tracker",
    tagline: "Chrome Extension",
    description: "A Chrome extension (solve-stalker) that tracks and logs LeetCode problem-solving activity, enabling competitive accountability among peers.",
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    metrics: [],
    live: null,
    github: "https://github.com/techieadi4703",
    featured: false,
  },
  {
    name: "VaidyaMitra",
    tagline: "RAG-Powered Medical Diagnosis System",
    description: "A Retrieval-Augmented Generation powered medical diagnosis assistant built for an NLP course. Uses vector search over medical knowledge bases to provide contextual diagnostic insights.",
    tech: ["Python", "RAG", "LangChain", "FAISS", "LLM APIs"],
    metrics: [],
    live: null,
    github: null,
    featured: false,
  },
];

export const education: EducationData = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "The LNM Institute of Information and Technology (LNMIIT)",
  location: "Jaipur, Rajasthan",
  duration: "2023 – Expected 2027",
  coursework: [
    "Data Structures and Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Object Oriented Programming",
    "Software Engineering",
    "Natural Language Processing",
  ],
};

export const achievements: AchievementData[] = [
  {
    title: "LeetCode Knight",
    detail: "Peak rating 1860 | 600+ problems solved | Top 5% globally | 30+ rated contests",
  },
  {
    title: "Codeforces Rated",
    detail: "Rating 1101 | Consistent contest participation",
  },
  {
    title: "Hacktoberfest Super Contributor",
    detail: "13+ merged PRs across 6+ open-source repositories including OWASP projects",
  },
  {
    title: "HackStreet 3.0 Winner",
    detail: "1st place out of 100+ participants | Built end-to-end solution under hackathon constraints",
  },
  {
    title: "Software Development Intern — Infineon Technologies",
    detail: "Selected for industry internship at a global semiconductor leader",
  },
];
