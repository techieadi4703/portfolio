"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/data";
import * as DevIcons from "devicons-react";
import { Terminal, Workflow, Cloud, Settings, Layers, Code, Database, Braces, MessageSquare, Zap } from "lucide-react";

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
    "Redis": DevIcons.RedisOriginal,
    "Git": DevIcons.GitOriginal,
    "GitHub": DevIcons.GithubOriginal,
    "Docker": DevIcons.DockerOriginal,
    "Linux": DevIcons.LinuxOriginal,
    "Vite": DevIcons.VitejsOriginal,
    "Firebase": DevIcons.FirebaseOriginal,
    "AWS (EC2, S3)": DevIcons.AmazonwebservicesOriginalWordmark,
    "GitHub Actions": DevIcons.GithubOriginal,
    "n8n": Workflow,
    "ShadCN UI": Layers,
    "Framer Motion": Zap,
    "REST APIs": Cloud,
    "WebSockets": MessageSquare,
    "Prompt Engineering": Code,
    "Vector Databases": Database,
    "Pinecone": Database,
    "FAISS": Database,
    "LLM APIs": Braces,
    "LangChain": Workflow,
    "NLP": MessageSquare,
    "Data Structures & Algorithms": Braces,
    "System Design": Layers,
    "Microservices": Workflow,
    "Event-Driven Architecture": Zap,
    "API Optimization": Settings,
    "Agile": Workflow,
  };
  
  const IconComponent = mapping[skill] || Terminal;
  
  const darkIcons = ["GitHub", "Next.js", "Express.js", "AWS (EC2, S3)", "GitHub Actions", "Vite"];
  
  if (darkIcons.includes(skill)) {
    return (
      <div className="bg-text-main rounded-md flex items-center justify-center p-[2px]">
        <IconComponent size={14} className="text-base" />
      </div>
    );
  }
  
  return <IconComponent size={16} className="flex-shrink-0 drop-shadow-sm" />;
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
        <div className="space-y-4 mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
            03 / Skills
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[0.95] tracking-tight text-text-main">
            Tools of <span className="text-text-muted font-medium">the trade.</span>
          </h2>
        </div>

        <motion.div
          variants={pillContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {Object.entries(skills).map(([category, items], index, array) => (
            <motion.div 
              key={category} 
              variants={pillItem}
              className={`p-8 rounded-2xl bg-[#0A0A0A] border border-text-muted/10 hover:border-text-muted/40 transition-colors duration-500 group ${
                index === array.length - 1 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6">
                {category}
              </h3>
              <div className={`flex gap-2 ${category === "databases" ? "flex-col" : "flex-wrap"}`}>
                {(items as string[]).map((skill: string) => (
                  <div
                    key={skill}
                    className={`flex items-center gap-2 px-2.5 py-1.5 bg-white/5 border border-white/5 rounded-md text-[10px] font-mono uppercase tracking-widest text-text-muted group-hover:border-white/10 group-hover:text-white/90 transition-all duration-300 ${category === "databases" ? "w-full justify-start" : ""}`}
                  >
                    {getIcon(skill)}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
