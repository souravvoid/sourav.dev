"use client";

import { BookOpen, Clock } from "lucide-react";

export function OpenSource() {
  const placeholderBlogPosts = [
    {
      id: 1,
      title: "Linux Networking Deep Dive",
      description: "Exploring low-level networking concepts, socket programming, and network performance optimization on Linux systems.",
      readingTime: 12
    },
    {
      id: 2,
      title: "Backend Engineering Principles",
      description: "Fundamentals of building scalable, maintainable backend systems including API design, database optimization, and microservices architecture.",
      readingTime: 10
    },
    {
      id: 3,
      title: "FastAPI for High-Performance APIs",
      description: "Building asynchronous REST APIs with FastAPI, Pydantic, and asyncio for modern Python backend development.",
      readingTime: 8
    },
    {
      id: 4,
      title: "System Design Fundamentals",
      description: "Core concepts of designing scalable, reliable systems including load balancing, caching, database sharding, and microservices.",
      readingTime: 15
    },
    {
      id: 5,
      title: "Modern C++ Best Practices",
      description: "Advanced C++ techniques, modern C++20/23 features, memory management, and performance optimization for systems programming.",
      readingTime: 12
    },
    {
      id: 6,
      title: "AI Agents and LLM Applications",
      description: "Building intelligent agents with large language models, prompt engineering, retrieval-augmented generation, and tool integration.",
      readingTime: 18
    },
    {
      id: 7,
      title: "Packet Analysis with libpcap",
      description: "Low-level network packet capture and analysis using libpcap, TCP/IP stack internals, and network protocol dissection.",
      readingTime: 14
    },
    {
      id: 8,
      title: "Database Internals and Optimization",
      description: "Understanding database indexing, query optimization, transaction management, and storage engines for relational and NoSQL databases.",
      readingTime: 16
    }
  ];

  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          Engineering Blog
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <section className="mb-12">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Explore my technical blog posts covering systems programming, backend engineering, and emerging technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {placeholderBlogPosts.map((post) => (
            <article key={post.id} className="glass-panel p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 group flex flex-col">
              <div className="flex-auto">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" /> {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mt-auto">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readingTime} min read
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Coming Soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
