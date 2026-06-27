"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/data";
import * as DevIcons from "devicons-react";
import { Terminal } from "lucide-react";

const getIcon = (skill: string) => {
  const mapping: Record<string, React.ElementType> = {
    "C++": DevIcons.CplusplusOriginal,
    "JavaScript": DevIcons.JavascriptOriginal,
    "TypeScript": DevIcons.TypescriptOriginal,
    "Python": DevIcons.PythonOriginal,
    "Go": DevIcons.GoOriginal,
    "C": DevIcons.COriginal,
    "React.js": DevIcons.ReactOriginal,
    "Next.js": DevIcons.NextjsOriginal,
    "Tailwind CSS": DevIcons.TailwindcssOriginal,
    "HTML": DevIcons.Html5Original,
    "CSS": DevIcons.Css3Original,
    "Node.js": DevIcons.NodejsOriginal,
    "Express.js": DevIcons.ExpressOriginal,
    "FastAPI": DevIcons.FastapiOriginal,
    "MongoDB": DevIcons.MongodbOriginal,
    "PostgreSQL": DevIcons.PostgresqlOriginal,
    "Supabase": DevIcons.SupabaseOriginal,
    "Git": DevIcons.GitOriginal,
    "GitHub": DevIcons.GithubOriginal,
    "Docker": DevIcons.DockerOriginal,
    "Linux": DevIcons.LinuxOriginal,
    "Vite": DevIcons.VitejsOriginal,
    "Firebase": DevIcons.FirebaseOriginal,
    "AWS (EC2, S3)": DevIcons.AmazonwebservicesOriginalWordmark,
  };
  return mapping[skill] || Terminal;
};

const pillContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.05 },
  },
};

const pillItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.88 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest mb-12 flex items-center">
          <span className="w-8 h-px bg-accent mr-4"></span>
          Skills
        </h2>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent pl-1">
                {category}
              </h3>
              <motion.div
                variants={pillContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex overflow-x-auto pb-4 no-scrollbar gap-3 -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap lg:overflow-visible"
              >
                {(items as string[]).map((skill: string) => {
                  const Icon = getIcon(skill);
                  return (
                    <motion.div
                      key={skill}
                      variants={pillItem}
                      className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-text-muted/5 border border-text-muted/20 rounded-full text-sm font-medium text-text-main transition-colors hover:border-accent/50 hover:bg-accent/5 hover:text-accent group"
                    >
                      <Icon size={16} className="flex-shrink-0 drop-shadow-[0_0_2px_rgba(255,255,255,0.4)] group-hover:drop-shadow-none" />
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
