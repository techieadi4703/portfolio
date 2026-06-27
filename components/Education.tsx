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
        <h2 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest mb-12 flex items-center">
          <span className="w-8 h-px bg-accent mr-4"></span>
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-text-muted/5 border border-text-muted/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <GraduationCap size={120} className="text-accent" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-text-main mb-2">
                  {edu.degree}
                </h3>
                
                <div className="text-lg text-accent font-medium mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span>{edu.institution}</span>
                  <span className="text-sm font-mono text-text-muted mt-1 sm:mt-0">
                    {edu.duration}
                  </span>
                </div>

                {edu.location && (
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-8">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                )}

                {edu.performance && edu.performance.length > 0 && (
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-text-main mb-4">Academic Performance</h4>
                    <motion.ul
                      variants={courseworkContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {edu.performance.map((perf: string, perfIdx: number) => (
                        <motion.li
                          key={perfIdx}
                          variants={courseItem}
                          className="text-sm text-text-muted font-medium flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                          {perf}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-text-main mb-4">Relevant Coursework</h4>
                    <motion.div
                      variants={courseworkContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {edu.coursework.map((course: string, courseIdx: number) => (
                        <motion.span
                          key={courseIdx}
                          variants={courseItem}
                          className="px-3 py-1.5 bg-base border border-text-muted/20 rounded-md text-sm text-text-muted font-medium hover:border-accent/50 hover:text-text-main transition-colors"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
