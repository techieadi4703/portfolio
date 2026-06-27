"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Activity } from "lucide-react";
import { GithubOriginal } from "devicons-react";
import { ProjectData } from "@/types";

const FeaturedProjectCard = ({ project }: { project: ProjectData }) => (
  <div className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-text-muted/5 border border-text-muted/10 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
    {/* Subtle glow effect on hover */}
    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 pointer-events-none" />
    
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-sm font-mono text-accent/80 mt-1">{project.tagline}</p>
          </div>
          <div className="flex gap-3 text-text-muted">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Repository">
                <GithubOriginal size={20} />
              </a>
            )}
            {project.live && (
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
  </div>
);

const CompactProjectCard = ({ project }: { project: ProjectData }) => (
  <div className="group relative flex flex-col h-full p-5 rounded-xl bg-text-muted/5 border border-text-muted/10 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 pointer-events-none" />
    
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-accent/80 mt-1">{project.tagline}</p>
      </div>
      <div className="flex gap-2 text-text-muted">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Repository">
            <GithubOriginal size={18} />
          </a>
        )}
        {project.live && (
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
  </div>
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

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-sm font-mono font-bold text-text-main mb-6">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, idx) => (
              <CompactProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
