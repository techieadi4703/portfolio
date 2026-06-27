"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data";
import { Mail, FileText, Code } from "lucide-react";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";

const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayText;
};

const HeroBackground = () => (
  <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute w-[500px] h-[500px] rounded-full opacity-[0.12] blur-3xl"
      style={{
        background: "var(--color-accent)",
        bottom: "-120px",
        left: "-80px",
        animation: "blob-float 8s ease-in-out infinite",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl"
      style={{
        background: "var(--color-accent)",
        top: "60px",
        right: "-60px",
        animation: "blob-float-alt 10s ease-in-out infinite",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  </div>
);

export default function Hero() {
  const typedTagline = useTypewriter(personal.tagline, 38);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start lg:justify-center pt-32 lg:pt-0 pb-24 lg:pb-0"
    >
      <HeroBackground />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 md:gap-12 w-full z-10 lg:-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 w-full lg:max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 availability-dot" />
          open to full-time & internships · 2027
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight leading-[0.95] text-text-main mb-6 text-center lg:text-left w-full"
        >
          {personal.name}
        </motion.h1>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start text-text-main/90 font-mono text-base md:text-xl mb-10 min-h-[64px] md:min-h-[72px] w-full text-center lg:text-left leading-relaxed">
          <span className="mr-3 text-accent hidden sm:inline-block sm:mt-[2px]">{">"}</span>
          <span className="text-accent sm:hidden mb-2">{">"}</span>
          <div className="text-center sm:text-left flex-1">
            <span className="inline">{typedTagline}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 md:w-3 h-5 md:h-6 bg-accent inline-block ml-1 align-text-bottom"
            />
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-4 font-mono justify-center lg:justify-start"
        >
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <div className="bg-text-main rounded-full w-[18px] h-[18px] flex items-center justify-center">
              <GithubOriginal size={20} />
            </div>
            <span>github</span>
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <LinkedinOriginal size={18} />
            <span>linkedin</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Me"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <Mail size={18} />
            <span>email</span>
          </a>
          <a
            href={personal.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <Code size={18} />
            <span>leetcode</span>
          </a>
          <a
            href={personal.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <FileText size={18} />
            <span>resume</span>
          </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full p-2 bg-gradient-to-tr from-accent/20 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/20 relative z-10">
              <Image
                src="/profile.jpeg"
                alt={personal.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 28rem"
                priority
              />
            </div>

            {/* Floating Live Badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base/90 border border-text-muted/20 shadow-xl backdrop-blur-md z-20 hidden sm:flex">
               <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
               <span className="text-[10px] font-mono text-text-main/80 uppercase tracking-widest">live</span>
            </div>

            {/* Floating 'Currently Building' Card */}
            <div className="absolute -bottom-4 -right-4 lg:-right-12 flex flex-col gap-1 p-4 rounded-2xl bg-base/80 backdrop-blur-md border border-text-muted/20 shadow-2xl z-20 animate-[blob-float_6s_ease-in-out_infinite] hidden sm:flex">
               <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] animate-pulse" />
                 Currently Building
               </div>
               <div className="text-sm font-bold text-text-main">BuildBazaarX</div>
               <div className="text-[10px] text-text-muted font-mono">Multi-Role Marketplace</div>
            </div>
            
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border border-text-muted/10 scale-[1.15] -z-10" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs text-text-muted/40"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent to-text-muted/30"
        />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
