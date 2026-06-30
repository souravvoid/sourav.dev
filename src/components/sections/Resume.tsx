"use client";

import { BookOpen, Code, Database, Cpu, Lock, Wrench, Layers } from "lucide-react";

export function Education and Skills() {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          Education and Skills
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Education Timeline */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-primary">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          
          <div className="relative pl-6 border-l border-border/50 space-y-8">
            <TimelineItem 
              title="Graphic Era Hill University (GEHU)"
              date="2024 — 2028"
              subtitle="B.Tech in Computer Science and Engineering"
              description="CGPA: 7.5 / 10.0"
            />
          </div>
        </section>

      </div>

      {/* Tech Stack Overview */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <Layers className="text-primary w-6 h-6" /> Tech Stack Architecture
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory 
            title="Languages" 
            icon={Code} 
            skills={["C++", "Java", "Python", "SQL", "Bash"]} 
          />
          <SkillCategory 
            title="Systems & Low-Level" 
            icon={Cpu} 
            skills={["Linux (Fedora)", "Raw sockets", "libpcap", "POSIX APIs", "TCP/IP internals"]} 
          />
          <SkillCategory 
            title="Backend & Databases" 
            icon={Database} 
            skills={["FastAPI", "REST APIs", "SQLAlchemy", "PostgreSQL", "MySQL", "SQLite"]} 
          />
          <SkillCategory 
            title="Cryptography & Security" 
            icon={Lock} 
            skills={["AES-256-GCM", "ECDH", "End-to-end encryption", "JWT"]} 
          />
          <SkillCategory 
            title="AI / ML" 
            icon={Cpu} 
            skills={["LLMs", "RAG", "Prompt engineering", "AI Agents", "NumPy", "Pandas"]} 
          />
          <SkillCategory 
            title="Tools & Environment" 
            icon={Wrench} 
            skills={["Git", "Docker", "VS Code", "Maven", "GDB", "Valgrind"]} 
          />
        </div>
      </section>
    </article>
  );
}

function TimelineItem({ title, date, subtitle, description }: { title: string, date: string, subtitle: string, description: string }) {
  return (
    <div className="relative">
      <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
      <h4 className="text-lg font-bold text-foreground">{title}</h4>
      <span className="text-primary text-sm font-medium my-1 block">{date}</span>
      <p className="text-foreground font-medium mb-2">{subtitle}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function SkillCategory({ title, icon: Icon, skills }: { title: string, icon: React.ElementType, skills: string[] }) {
  return (
    <div className="glass-panel p-5 rounded-xl border border-border/40">
      <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-3">
        <Icon className="w-5 h-5 text-primary" />
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-md font-mono">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
