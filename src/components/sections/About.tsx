"use client";
import { Terminal } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function About() {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          About Me
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <section className="text-muted-foreground leading-relaxed space-y-4">
        <p>
          I am a Backend / Full Stack Software Engineer currently pursuing my B.Tech in Computer Science and Engineering at Graphic Era Hill University. I specialize in building robust, scalable systems and performant APIs.
        </p>
        <p>
          My technical foundation is rooted in low-level networking, distributed systems, and clean architectural patterns. Whether I&apos;m capturing raw packets in C++ or optimizing database queries in Python, I am driven by a passion for understanding how systems work under the hood. I am currently looking to join an early-stage startup where I can take immense ownership and ship high-impact products.
        </p>
      </section>

      {/* Terminal - Now Building */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Terminal className="text-primary" /> What I&apos;m Doing
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="Backend Systems Architecture"
            description="Designing scalable microservices, REST APIs, and serverless architectures using Python, FastAPI, and robust SQL databases."
          />
          <ServiceCard 
            title="Low-Level Networking & C++"
            description="Building high-performance tools interacting directly with OS internals, raw sockets, and the TCP/IP stack."
          />
          <ServiceCard 
            title="Distributed Systems & P2P"
            description="Developing serverless, decentralized applications with end-to-end encryption and concurrent I/O pipelines."
          />
          <ServiceCard 
            title="AI & RAG Integration"
            description="Integrating LLMs and vector stores to build domain-specific, autonomous agents capable of tool calling."
          />
        </div>
      </section>
    </article>
  );
}

function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
    <TerminalWindow title={title}>
      <h4 className="font-medium text-white mb-2">{title}</h4>
      <p className="text-sm text-[#8B949E] leading-relaxed">{description}</p>
    </TerminalWindow>
  );
}
