"use client";

import { Code2 } from "lucide-react";
import { Github } from "@/components/Icons";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

const projectsData = [
  {
    title: "Packet Analyzer",
    techStack: "C++, Linux, Raw Sockets, libpcap",
    date: "Ongoing",
    description: "A low-level network traffic capture and analysis tool on Linux.",
    architecture: "Uses raw sockets and libpcap to capture and parse binary wire data (Ethernet, IPv4, TCP, UDP headers).",
    engineeringDecisions: [
      "Extracted per-flow statistics (packet counts, byte volumes, protocol distribution) for real-time profiling.",
      "Applied TCP/IP stack internals knowledge to handle fragmented/out-of-order packets.",
      "Implemented offline analysis via pcap trace files."
    ],
    github: "https://github.com/souravvoid", // Generic link since specific repo might not be public or named differently
  },
  {
    title: "PeerLink — Secure P2P File Transfer",
    techStack: "Java, JavaFX, TCP/IP, Cryptography",
    date: "2026",
    description: "Serverless peer-to-peer file transfer application communicating directly over TCP.",
    architecture: "Eliminates single-point-of-failure by directly communicating between peers. Employs a zero-trust network model with invite-code handshakes.",
    engineeringDecisions: [
      "Implemented E2E encryption using ECDH for session key agreement and AES-256-GCM against MITM attacks.",
      "Leveraged Java 21 Virtual Threads and a BlockingQueue pipeline to handle concurrent multi-file transfers.",
      "Decoupled encryption from I/O for throughput efficiency."
    ],
    github: "https://github.com/souravvoid",
  },
  {
    title: "OptiPatrol — Crime Hotspot Prediction",
    techStack: "Python, FastAPI, React, SQLite",
    date: "2026",
    description: "Full-stack geospatial crime analysis platform for predicting hotspots and optimizing patrol routes.",
    architecture: "Designed REST API layer with FastAPI. Implemented BFS-based geographic clustering and a greedy patrol allocation algorithm.",
    engineeringDecisions: [
      "Generated optimized patrol routes from historical data over a weighted crime-density graph.",
      "Resolved N+1 query anti-patterns in SQLAlchemy ORM using eager loading strategies.",
      "Significantly reduced per-request database round-trips on aggregated crime record queries."
    ],
    github: "https://github.com/souravvoid/Crime-Hotspot-Prediction-and-Patrol-Optimization-System",
  },
  {
    title: "AI Agent Assistant",
    techStack: "Python, LLM APIs, RAG, Vector Store",
    date: "2026",
    description: "Domain-specific AI assistant using Retrieval-Augmented Generation (RAG).",
    architecture: "Integrates LLM function-calling API to enable autonomous tool invocation within a conversational loop.",
    engineeringDecisions: [
      "Grounded responses in retrieved context to reduce hallucination on specialized document corpora.",
      "Implemented sliding-window memory for context preservation.",
      "Utilized embedding-based semantic retrieval for accurate information fetching."
    ],
    github: "https://github.com/souravvoid",
  }
];

export function Projects() {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          Architecture & Projects
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: typeof projectsData[0] }) {
  return (
    <TerminalWindow title={project.title} date={project.date}>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-[#8B949E] text-sm">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 my-2">
          {project.techStack.split(", ").map(tech => (
            <span key={tech} className="px-2 py-1 bg-[#238636]/20 text-[#3FB950] text-xs rounded font-mono border border-[#238636]/30">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-[#58A6FF] flex items-center gap-2 mb-1">
              <Code2 className="w-4 h-4" /> Architecture
            </h4>
            <p className="text-sm text-[#C9D1D9]">{project.architecture}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#58A6FF] flex items-center gap-2 mb-1">
              <Code2 className="w-4 h-4" /> Engineering Decisions
            </h4>
            <ul className="list-disc list-inside text-sm text-[#C9D1D9] space-y-1">
              {project.engineeringDecisions.map((decision, i) => (
                <li key={i}>{decision}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#30363D] flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View source for ${project.title}`} className="flex items-center gap-2 text-sm text-[#8B949E] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            <Github className="w-4 h-4" /> View Source
          </a>
        </div>
    </TerminalWindow>
  );
}
