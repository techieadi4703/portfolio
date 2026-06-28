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
  bio: `Founding Software Engineer at BuildBazaarX (DPIIT-recognized startup) and third-year CS student at LNMIIT Jaipur. I architect and ship full-stack products end-to-end — from system design to production deployment. LeetCode Knight (Top 3.23%, 600+ problems) and hackathon winner with a bias for building things that actually get used. Previously at OptionX/Ratel Fintech (production fintech systems). Interests: distributed systems, AI-powered products, and making complex engineering feel simple.`,
  location: "Jaipur, Rajasthan, India",
  email: "techie.adi47@gmail.com",
  links: {
    github: "https://github.com/techieadi4703",
    linkedin: "https://www.linkedin.com/in/techieadi4703",
    leetcode: "https://leetcode.com/u/techieadi4703/",
    resume: "https://drive.google.com/file/d/18skqj-RtomULmWlrchoSWJt2qkRl4MCq/view?usp=sharing",
  },
};

export const skills: SkillsData = {
  languages: ["C++", "JavaScript", "TypeScript", "C", "Python", "Go",],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "ShadCN UI", "Framer Motion"],
  backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "FastAPI"],
  databases: ["MongoDB", "Redis", "PostgreSQL", "Supabase"],
  tools: ["Git", "GitHub", "Docker", "Linux", "Vite", "Firebase", "AWS (EC2, S3)", "n8n", "GitHub Actions"],
  ai: ["Prompt Engineering", "Vector Databases", "Pinecone", "FAISS", "LLM APIs", "NLP", "LangChain"],
  concepts: ["Data Structures & Algorithms", "System Design", "Microservices", "Event-Driven Architecture", "API Optimization", "Agile"],
};

export const experience: ExperienceData[] = [
  {
    role: "Founding Software Engineer",
    company: "BuildBazaarX",
    link: "https://buildbazaarx.com/",
    location: "Remote",
    duration: "April 2026 – Present",
    bullets: [
      "Led end-to-end development of a scalable multi-role marketplace, owning architecture, frontend, backend, database, and deployment while building core systems like authentication, payments, dashboards, and workflows across 10+ modules.",
      "Managed a team of 3–5 junior developers, driving task execution, code reviews, and delivery timelines while optimizing APIs, application performance, and state management to reduce redundant operations by 40%+.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Supabase", "Razorpay", "Leadership"],
  },
  {
    role: "Software Developer Intern",
    company: "OptionX (Ratel Fintech Pvt. Ltd.)",
    link: "https://optionx.trade/",
    location: "Gurugram, Haryana",
    duration: "May 2025 – July 2025",
    bullets: [
      "Engineered a high-performance React-based instrument search with infinite scrolling, keyboard shortcuts, and contextual trading actions (Buy, Sell, Chart, Watchlist), reducing search-to-action latency by 40% for 1K+ daily users.",
      "Refactored the header UI with structured state management, implementing 4+ dropdowns and 6+ reusable modals (onboarding, alerts, profile), improving navigation efficiency and component maintainability.",
      "Built automated monitoring infrastructure using n8n workflows and a Python FastAPI service to verify price feed integrity at market open, triggering real-time Slack alerts and reducing manual intervention.",
    ],
    tech: ["React", "State Management", "n8n", "Python", "FastAPI", "WebSockets"],
  },
  {
    role: "Open Source Contributor",
    company: "OWASP Foundation",
    link: "https://owasp.org/",
    location: "Remote",
    duration: "Oct 2025 - Present · 9 mos",
    bullets: [
      "Contributed to OWASP Cornucopia, a mechanism in the form of a card game to assist software development teams identify security requirements in Agile, conventional and formal development processes. It is language, platform and technology-agnostic.",
    ],
    tech: ["Open Source", "Security", "Agile", "Agile Security Requirements"],
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
    tagline: "Smart Construction Marketplace",
    description: "BuildBazaarX is a modern construction commerce platform that brings interior design discovery, material purchasing, execution cost estimation, secure payments, and order management into one seamless experience. Built with Supabase, Razorpay, and a scalable React architecture, it streamlines the complete journey from planning to checkout.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Razorpay", "TanStack Query", "ShadCN UI", "Framer Motion", "Zod"],
    metrics: ["Secure online payments", "Smart execution cost estimation", "Real time commerce platform", "End to end shopping experience"],
    live: "https://buildbazaarx.com/",
    github: null, // private repo
    featured: true,
    image: "/buildbazaar.jpeg",
  },
  {
    name: "Tikki Trades",
    tagline: "AI Powered Trading Intelligence Platform",
    description: "Tikki Trades is a modern AI powered trading terminal that combines live market intelligence, portfolio analytics, technical charting, and intelligent trading assistance into one seamless experience. Built with Next.js and multiple LLMs, it helps traders analyze markets, manage portfolios, evaluate trading decisions, and receive AI driven insights through a professional financial dashboard.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Gemini", "Groq", "Inngest", "Finnhub", "TradingView"],
    metrics: ["Real time global market intelligence", "AI powered trading assistant", "Portfolio analytics and tracking", "Intelligent trading journal"],
    live: "https://tikki-trades.vercel.app/",
    github: null,
    featured: true,
    image: "/tikkitrades.jpeg",
  },
  {
    name: "SehatSetu",
    tagline: "AI Powered Healthcare Management Platform",
    description: "A collaborative healthcare platform that connects patients, doctors, and healthcare staff through a unified digital ecosystem. Built with secure authentication, appointment scheduling, AI assisted consultations, real time video calling, digital medical records, prescription management, medical imaging support, and secure online payments to streamline the complete healthcare experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "MySQL", "Clerk", "LiveKit", "Stripe", "OpenAI", "Redux", "Framer Motion"],
    metrics: ["Multi role platform", "AI assisted consultations", "Real time video appointments", "End to end healthcare workflow"],
    live: "https://sehat-setu-eta.vercel.app/",
    github: null,
    featured: true,
    image: "/sehat-setu.jpeg",
  },
  {
    name: "Visual Learner",
    tagline: "AI-Driven Video Lecture Generator",
    description: "Educational platform that converts text prompts into narrated MP4 video lectures using LLMs, TTS, Stable Diffusion image generation, and FFmpeg for video assembly.",
    tech: ["Python", "LLMs", "Stable Diffusion", "TTS", "FFmpeg", "FastAPI"],
    metrics: [],
    live: "https://mini-p-frontend.vercel.app/",
    github: "https://github.com/Aditya-Bajpayee007/miniP-frontend",
    featured: false,
  },
  {
    name: "JobScanner v2.0",
    tagline: "Job Search Automation Tool",
    description: "Automated job discovery and filtering tool targeting remote SDE roles and internships at US-based companies, with intelligent filtering and notification workflows.",
    tech: ["Python", "Node.js", "n8n", "Web Scraping"],
    metrics: [],
    live: null,
    github: "https://github.com/techieadi4703/jobscanner-pro",
    featured: false,
  },
  {
    name: "LeetCode Solve Tracker",
    tagline: "Chrome Extension",
    description: "A Chrome extension (solve-stalker) that tracks and logs LeetCode problem-solving activity, enabling competitive accountability among peers.",
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    metrics: [],
    live: null,
    github: "https://github.com/techieadi4703/LeetCode-solve-stalker",
    featured: false,
  },
];

export const education: EducationData[] = [
  {
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
  },
  {
    degree: "Higher Secondary Education (CBSE)",
    institution: "Sunbeam School Varuna",
    location: "Varanasi, Uttar Pradesh",
    duration: "Apr 2015 – May 2022",
    performance: [
      "Class X: 97.4%",
      "Class XII (PCM): 89.6%"
    ]
  }
];

export const achievements: AchievementData[] = [
  {
    title: "LeetCode Knight",
    detail: "Rating 1957 | 616 problems solved | Top 3.23% globally | 36 rated contests",
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
  // {
  //   title: "Software Development Intern — Infineon Technologies",
  //   detail: "Selected for industry internship at a global semiconductor leader",
  // },
];
