"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Activity } from "lucide-react";
import { GithubOriginal } from "devicons-react";
import { ProjectData } from "@/types";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const FeaturedProjectCard = ({ project }: { project: ProjectData }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ boxShadow: "0 0 36px -6px rgba(99,102,241,0.28)" }}
    transition={{ boxShadow: { duration: 0.3 } }}
    className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-text-muted/5 border border-text-muted/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-sm font-mono text-accent/80 mt-1">{project.tagline}</p>
          </div>
          <div className="flex gap-3 text-text-muted">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Repository">
                <div className="bg-text-main rounded-full w-[20px] h-[20px] flex items-center justify-center">
                  <GithubOriginal size={22} />
                </div>
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-text-main/80 leading-relaxed mb-6 mt-4">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.metrics.map((metric: string, i: number) => (
              <span key={i} className="flex items-center gap-1.5 text-xs font-mono bg-accent/10 text-accent px-2.5 py-1 rounded-md">
                <Activity size={12} />
                {metric}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="text-xs font-mono text-text-muted">
            {t}{i < project.tech.length - 1 && <span className="ml-2 text-text-muted/30">|</span>}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const CompactProjectCard = ({ project }: { project: ProjectData }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ boxShadow: "0 0 24px -6px rgba(99,102,241,0.22)" }}
    transition={{ boxShadow: { duration: 0.3 } }}
    className="group relative flex flex-col h-full p-5 rounded-xl bg-text-muted/5 border border-text-muted/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-accent/80 mt-1">{project.tagline}</p>
      </div>
      <div className="flex gap-2 text-text-muted">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Repository">
            <div className="bg-text-main rounded-full w-[18px] h-[18px] flex items-center justify-center">
              <GithubOriginal size={20} />
            </div>
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Live Demo">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>

    <p className="text-sm text-text-main/80 leading-relaxed mb-6 flex-grow">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((t: string, i: number) => (
        <span key={i} className="text-xs font-mono text-text-muted">
          {t}{i < project.tech.length - 1 && <span className="ml-2 text-text-muted/30">·</span>}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest mb-12 flex items-center">
          <span className="w-8 h-px bg-accent mr-4"></span>
          Projects
        </h2>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 mb-16"
        >
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard key={idx} project={project} />
          ))}
        </motion.div>

        <div>
          <h3 className="text-sm font-mono font-bold text-text-main mb-6">
            Other Noteworthy Projects
          </h3>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {otherProjects.map((project, idx) => (
              <CompactProjectCard key={idx} project={project} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
