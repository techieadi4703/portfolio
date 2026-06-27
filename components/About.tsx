"use client";

import { motion } from "framer-motion";
import { personal } from "@/data";
import { Code2, Briefcase, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest mb-8 flex items-center">
          <span className="w-8 h-px bg-accent mr-4"></span>
          About
        </h2>
        
        <div className="text-text-main/90 text-base md:text-lg leading-relaxed mb-10 max-w-3xl font-sans">
          {personal.bio}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-sm max-w-3xl">
          <div className="flex items-center gap-3 p-4 bg-text-muted/5 border border-text-muted/10 rounded-lg">
            <div className="text-accent">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="font-bold text-text-main">2 Internships</div>
              <div className="text-text-muted text-xs">Production Exp.</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-text-muted/5 border border-text-muted/10 rounded-lg">
            <div className="text-accent">
              <Code2 size={20} />
            </div>
            <div>
              <div className="font-bold text-text-main">3+ Years</div>
              <div className="text-text-muted text-xs">Building Apps</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-text-muted/5 border border-text-muted/10 rounded-lg">
            <div className="text-accent">
              <Trophy size={20} />
            </div>
            <div>
              <div className="font-bold text-text-main">600+ DSA</div>
              <div className="text-text-muted text-xs">LeetCode Knight</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
