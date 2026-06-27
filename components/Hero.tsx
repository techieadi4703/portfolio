"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data";
import { Mail, FileText } from "lucide-react";
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
        background: "#6366F1",
        bottom: "-120px",
        left: "-80px",
        animation: "blob-float 8s ease-in-out infinite",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl"
      style={{
        background: "#8B5CF6",
        top: "60px",
        right: "-60px",
        animation: "blob-float-alt 10s ease-in-out infinite",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: "radial-gradient(circle, #6366F1 1px, transparent 1px)",
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
      className="relative min-h-screen flex flex-col justify-center pt-20 lg:pt-0"
    >
      <HeroBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-accent/30 shadow-[0_0_25px_rgba(99,102,241,0.15)]"
        >
          <Image
            src="/profile.jpeg"
            alt={personal.name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </motion.div>

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
          className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-text-main mb-6"
        >
          {personal.name}
        </motion.h1>

        <div className="flex flex-col sm:flex-row sm:items-center text-text-main/90 font-mono text-lg md:text-xl mb-12 min-h-[32px]">
          <span className="mr-2 text-accent hidden sm:inline">{">"}</span>
          <span className="mr-2 text-accent sm:hidden">{">"}</span>
          <span>{typedTagline}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-6 bg-accent inline-block ml-1 align-middle"
          />
        </div>

        <div className="font-mono text-sm md:text-base text-text-muted mb-6">
          <span className="text-accent">$</span> ./connect --links
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-4 font-mono"
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
            <span>--github</span>
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <LinkedinOriginal size={18} />
            <span>--linkedin</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Me"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <Mail size={18} />
            <span>--email</span>
          </a>
          <a
            href={personal.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="flex items-center gap-2 px-4 py-2 border border-accent/50 text-accent rounded-lg hover:bg-accent/20 hover:-translate-y-1 transition-all duration-300 bg-accent/10 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <FileText size={18} />
            <span>--resume</span>
          </a>
        </motion.div>
      </motion.div>

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
