"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Top Nav */}
      <div className="lg:hidden fixed top-0 w-full bg-base/80 backdrop-blur-md z-40 border-b border-text-muted/10 flex items-center justify-between px-6 py-4">
        <div className="font-mono font-bold text-accent">AS.</div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-text-main"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-base z-30 flex flex-col p-6 space-y-6 border-b border-text-muted/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-mono uppercase tracking-widest",
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-text-muted hover:text-text-main"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Desktop Left Rail */}
      <nav className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col justify-center pl-12 pr-6 z-40">
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center py-2 transition-all duration-300",
                activeSection === item.href.substring(1)
                  ? "text-text-main"
                  : "text-text-muted hover:text-text-main"
              )}
            >
              <span
                className={cn(
                  "mr-4 h-px transition-all duration-300 bg-text-muted group-hover:w-12 group-hover:bg-text-main",
                  activeSection === item.href.substring(1)
                    ? "w-12 bg-text-main"
                    : "w-6"
                )}
              ></span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
