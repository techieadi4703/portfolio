"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data";
import { Mail, FileText } from "lucide-react";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";

const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

export default function Hero() {
  const typedTagline = useTypewriter(personal.tagline, 40);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 lg:pt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-text-main mb-6">
          {personal.name}
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center text-accent font-mono text-lg md:text-xl mb-12 min-h-[32px]">
          <span className="mr-2 text-text-muted hidden sm:inline">{">"}</span>
          <span className="mr-2 text-text-muted sm:hidden">{">"}</span>
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

        <div className="flex flex-wrap gap-4 font-mono">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-2 border border-text-muted/30 rounded hover:border-accent hover:text-accent hover:-translate-y-1 transition-all bg-base"
          >
            <GithubOriginal size={18} />
            <span>--github</span>
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-2 border border-text-muted/30 rounded hover:border-accent hover:text-accent hover:-translate-y-1 transition-all bg-base"
          >
            <LinkedinOriginal size={18} />
            <span>--linkedin</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Me"
            className="flex items-center gap-2 px-4 py-2 border border-text-muted/30 rounded hover:border-accent hover:text-accent hover:-translate-y-1 transition-all bg-base"
          >
            <Mail size={18} />
            <span>--email</span>
          </a>
          <a
            href={personal.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="flex items-center gap-2 px-4 py-2 border border-accent/50 text-accent rounded hover:bg-accent/10 hover:-translate-y-1 transition-all bg-base"
          >
            <FileText size={18} />
            <span>--resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
