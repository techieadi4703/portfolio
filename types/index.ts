export interface PersonalData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    resume: string;
  };
}

export interface SkillsData {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  ai: string[];
  concepts: string[];
}

export interface ExperienceData {
  role: string;
  company: string;
  location: string;
  duration: string;
  link?: string;
  bullets: string[];
}

export interface ProjectData {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
  live: string | null;
  github: string | null;
  featured: boolean;
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  coursework: string[];
}

export interface AchievementData {
  title: string;
  detail: string;
}
