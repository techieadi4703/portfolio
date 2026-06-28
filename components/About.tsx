"use client";

import { motion } from "framer-motion";
import { personal } from "@/data";
import { Code2, Briefcase, Trophy } from "lucide-react";
import GitHubStats from "@/components/GitHubStats";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
            00 / About
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[0.95] tracking-tight text-text-main">
            Who I am <span className="text-text-muted font-medium">& what I build.</span>
          </h2>
        </div>
        
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

        {/* Live GitHub stats widget */}
        <GitHubStats />

      </motion.div>
    </section>
  );
}
