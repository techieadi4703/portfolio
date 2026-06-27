"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest mb-12 flex items-center">
          <span className="w-8 h-px bg-accent mr-4"></span>
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex gap-4 p-6 rounded-lg bg-text-muted/5 border border-text-muted/10 hover:border-accent/30 hover:bg-text-muted/10 transition-all duration-300"
            >
              <div className="text-accent shrink-0 mt-1">
                <Award size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-main mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
