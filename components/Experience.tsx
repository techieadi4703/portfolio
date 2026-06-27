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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-6 lg:pl-8 border-l border-text-muted/20 hover:border-accent transition-colors duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-1.5 shadow-[0_0_15px_var(--color-accent)] animate-[pulse_2s_ease-in-out_infinite]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-text-main">
                  {job.role}
                </h3>
                <span className="text-xs font-mono text-text-muted mt-1 sm:mt-0 whitespace-nowrap">
                  {job.duration}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-accent font-medium mb-4">
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1.5 w-fit">
                    {job.company} <ExternalLink size={14} className="flex-shrink-0" />
                  </a>
                ) : (
                  <span>{job.company}</span>
                )}
                <span className="text-text-muted text-sm font-normal sm:border-l sm:border-text-muted/30 sm:pl-2">— {job.location}</span>
              </div>

              <ul className="space-y-3">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm text-text-main/80 flex items-start">
                    <span className="text-accent mr-2 mt-1">▹</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
