"use client";

import { motion } from "framer-motion";
import { education } from "@/data";
import { GraduationCap, MapPin } from "lucide-react";

const courseworkContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const courseItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
            04 / Education
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[0.95] tracking-tight text-text-main">
            Academic <span className="text-text-muted font-medium">foundation.</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-20">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid md:grid-cols-2 gap-6 md:gap-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_var(--color-accent)] animate-pulse-dot z-10" />

                {/* Left Column: Date & Location */}
                <div className="pl-12 md:pl-0 md:text-right md:pr-12">
                  <div className="text-xs font-mono uppercase tracking-[0.22em] text-text-muted">
                    {edu.duration}
                  </div>
                  {edu.location && (
                    <div className="mt-2 text-xs text-text-muted/60">
                      {edu.location}
                    </div>
                  )}
                </div>

                {/* Right Column: Content */}
                <div className="pl-12 md:pl-0">
                  <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent/80">
                    {edu.institution}
                  </div>
                  
                  <h3 className="mt-2 font-display text-3xl font-bold text-text-main group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>

                  {edu.performance && edu.performance.length > 0 && (
                    <ul className="mt-4 space-y-3">
                      {edu.performance.map((perf: string, perfIdx: number) => (
                        <li key={perfIdx} className="text-sm text-text-main/80 flex items-start">
                          <span className="text-accent mr-3 mt-1.5 w-1 h-1 rounded-full shrink-0" />
                          <span className="font-medium">{perf}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {edu.coursework.map((course: string, courseIdx: number) => (
                        <span key={courseIdx} className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-[0.14em] bg-white/5 border border-white/5 text-text-muted">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
