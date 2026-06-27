"use client";

import { motion } from "framer-motion";
import { experience } from "@/data";
import { ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
            01 / Experience
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[0.95] tracking-tight text-text-main">
            A track record <span className="text-text-muted font-medium">of building.</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-20"
          >
            {experience.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative grid md:grid-cols-2 gap-6 md:gap-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_var(--color-accent)] animate-pulse-dot z-10" />

                {/* Left Column: Date & Location */}
                <div className="pl-12 md:pl-0 md:text-right md:pr-12">
                  <div className="text-xs font-mono uppercase tracking-[0.22em] text-text-muted">
                    {job.duration}
                  </div>
                  <div className="mt-2 text-xs text-text-muted/60">
                    {job.location}
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="pl-12 md:pl-0">
                  <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent/80">
                    {job.link ? (
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5 w-fit">
                        {job.company} <ExternalLink size={12} className="flex-shrink-0" />
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                  </div>
                  
                  <h3 className="mt-2 font-display text-3xl font-bold text-text-main group-hover:text-accent transition-colors duration-300">
                    {job.role}
                  </h3>
                  
                  <ul className="mt-4 space-y-3">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-text-main/80 leading-relaxed flex items-start">
                        <span className="text-accent mr-3 mt-1.5 w-1 h-1 rounded-full shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {job.tech && job.tech.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-[0.14em] bg-white/5 border border-white/5 text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
