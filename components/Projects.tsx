"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Activity } from "lucide-react";
import { GithubOriginal } from "devicons-react";
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
    <div className="w-full lg:w-[55%] relative aspect-[4/3] rounded-2xl overflow-hidden bg-base border border-text-muted/10 group-hover:border-accent/30 transition-colors duration-500 shadow-2xl">
      {project.image ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-text-muted/5 to-transparent p-4 sm:p-6 flex flex-col">
          <div className="flex items-center gap-1.5 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[10px] font-mono text-text-muted">{project.name.toLowerCase()} · live</span>
          </div>
          
          <div className="flex-1 border border-text-muted/10 rounded-xl bg-base/50 relative overflow-hidden flex items-center justify-center">
            {/* Abstract Background Glow */}
            <div className="absolute w-40 h-40 bg-accent/20 rounded-full blur-[50px] group-hover:bg-accent/30 transition-colors duration-500" />
            
            {/* Mock Visual Content */}
            <div className="w-full h-full p-6 flex flex-col justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10">
               {/* Fake code/data bars */}
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

    {/* Content Container */}
    <div className="w-full lg:w-[45%] flex flex-col justify-center">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-display font-bold text-text-main group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm font-mono text-text-muted mt-2">{project.tagline}</p>
        </div>
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

      <div className="flex gap-4 items-center">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-text-muted/20 hover:border-accent hover:bg-accent/5 text-xs font-mono uppercase tracking-[0.18em] transition-all">
             <GithubOriginal size={14} className="mr-1" />
             GitHub
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a href={project.live} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white font-mono text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] overflow-hidden hover:-translate-y-1 transition-all duration-300">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
             <ExternalLink size={14} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
             <span className="relative z-10 font-bold">Live Site</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
  );
};

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
