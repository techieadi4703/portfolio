"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Activity } from "lucide-react";
import { ProjectData } from "@/types";
import Image from "next/image";

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

const FeaturedProjectCard = ({ project, index }: { project: ProjectData; index: number }) => {
  const isEven = index % 2 === 0;
  return (
  <motion.div
    variants={cardVariants}
    className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center mb-24 last:mb-0`}
  >
    {/* Visual Container */}
    <div className="w-full lg:w-[55%] relative flex flex-col aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-text-muted/10 group-hover:border-accent/30 transition-colors duration-500 shadow-2xl">
      
      {/* macOS Title Bar */}
      <div className="w-full h-10 border-b border-white/5 bg-white/5 flex items-center px-4 relative shrink-0 z-30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[11px] tracking-widest font-mono text-text-muted/60">
            {project.name.toLowerCase()} · live preview
          </span>
        </div>
      </div>

      <div className="relative w-full flex-grow overflow-hidden">
        {project.live && project.live !== "#" && (
          <a href={project.live} target="_blank" rel="noreferrer" className="absolute inset-0 z-20 cursor-pointer" aria-label={`View ${project.name} live`} />
        )}
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-text-muted/5 to-transparent p-6 flex flex-col">
            <div className="flex-1 border border-text-muted/10 rounded-xl bg-base/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute w-40 h-40 bg-accent/20 rounded-full blur-[50px] group-hover:bg-accent/30 transition-colors duration-500" />
              <div className="w-full h-full p-6 flex flex-col justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10">
                 <div className="w-3/4 h-2 rounded-full bg-text-muted/20" />
                 <div className="w-1/2 h-2 rounded-full bg-text-muted/20" />
                 <div className="w-5/6 h-2 rounded-full bg-accent/40" />
                 <div className="w-1/3 h-2 rounded-full bg-text-muted/20" />
                 <div className="flex items-center gap-2 mt-4">
                   <Activity className="w-4 h-4 text-accent" />
                   <span className="text-xs font-mono text-accent">status: optimal</span>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Content Container */}
    <div className="w-full lg:w-[45%] flex flex-col justify-center">
      <div className="text-sm font-mono text-text-muted mb-4 tracking-widest opacity-60">
        / 0{index + 1}
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-2">
          <h3 className="text-4xl lg:text-5xl font-display font-bold text-text-main group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <div className="flex gap-2 relative z-30">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-text-muted/5 border border-text-muted/20 text-text-muted hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300" aria-label="GitHub Repository">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-300 group/link" aria-label="Live Site">
                <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm font-mono text-text-muted">{project.tagline}</p>
      </div>

      <p className="text-base text-text-main/80 leading-relaxed mb-8">
        {project.description}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <ul className="space-y-2 mb-8">
          {project.metrics.map((metric: string, i: number) => (
            <li key={i} className="flex gap-3 text-sm text-text-main/80 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mb-8">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-[0.14em] bg-text-muted/5 border border-text-muted/10 text-text-muted">
            {t}
          </span>
        ))}
      </div>


    </div>
  </motion.div>
  );
};

const CompactProjectCard = ({ project }: { project: ProjectData }) => {
  const primaryLink = (project.live && project.live !== "#") ? project.live : project.github;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-base border border-text-muted/10 hover:border-text-muted/40 transition-colors duration-500 overflow-hidden"
    >
      {primaryLink && (
        <a href={primaryLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-10 cursor-pointer" aria-label={`View ${project.name}`} />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-text-muted/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex justify-between items-start mb-6 relative z-20 pointer-events-none">
        <div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-text-muted group-hover:text-accent transition-colors duration-300 mb-3">
            {project.tagline}
          </p>
          <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        <div className="flex gap-3 text-text-muted pointer-events-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Repository">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Live Demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-text-muted leading-relaxed mb-8 flex-grow relative z-20 pointer-events-none">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto relative z-20 pointer-events-none">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="text-[10px] font-mono uppercase tracking-wider text-text-muted/80">
            {t}{i < project.tech.length - 1 && <span className="ml-2 text-text-muted/30">·</span>}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

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
        <div className="space-y-4 mb-24">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
            02 / Projects
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[0.95] tracking-tight text-text-main">
            Things built <span className="text-text-muted font-medium">with intent.</span>
          </h2>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 mb-16"
        >
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard key={idx} project={project} index={idx} />
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
