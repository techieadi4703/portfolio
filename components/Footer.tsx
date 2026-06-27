"use client";

import { personal } from "@/data";
import { Mail, Code } from "lucide-react";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-text-muted/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-mono font-bold text-text-main mb-2">
            Let&apos;s build something.
          </h2>
          <p className="text-sm text-text-muted text-center md:text-left max-w-md">
            Currently looking for new opportunities. My inbox is always open whether you have a question or just want to say hi!
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-6 px-6 py-3 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-colors"
          >
            Say Hello
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 mt-8 md:mt-0">
          <div className="flex gap-4">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors p-2"
              aria-label="GitHub"
            >
              <GithubOriginal size={20} />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors p-2"
              aria-label="LinkedIn"
            >
              <LinkedinOriginal size={20} />
            </a>
            <a
              href={personal.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors p-2 flex items-center justify-center font-bold font-mono"
              aria-label="LeetCode"
            >
              <Code size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-muted hover:text-accent transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="text-xs font-mono text-text-muted text-center md:text-right mt-4 md:mt-0">
            <p>Designed & Built by {personal.name}</p>
            <p className="mt-1 opacity-60">LNMIIT CSE 2027</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
