"use client";

import { ExternalLink, Globe } from "lucide-react";

const engineeringResources = [
  {
    id: 1,
    name: "Google Engineering",
    description: "Google's engineering blog covering distributed systems, AI/ML, infrastructure, and cutting-edge research from one of the world's leading tech companies.",
    url: "https://blog.google/technology/engineering/",
    topics: ["Distributed Systems", "AI/ML", "Infrastructure", "Search", "Cloud"]
  },
  {
    id: 2,
    name: "Meta Engineering",
    description: "Meta's engineering team shares insights on building scalable systems, AI research, and the technology behind social networking at scale.",
    url: "https://engineering.fb.com/",
    topics: ["AI/ML", "Scale", "Mobile", "Infrastructure", "Open Source"]
  },
  {
    id: 3,
    name: "Netflix Tech Blog",
    description: "Netflix engineering discusses streaming infrastructure, microservices, data engineering, and recommendations systems at global scale.",
    url: "https://netflixtechblog.com/",
    topics: ["Streaming", "Microservices", "Data Engineering", "AWS", "Recommendations"]
  },
  {
    id: 4,
    name: "Uber Engineering",
    description: "Uber's technical blog covers real-time systems, geospatial data, marketplace engineering, and large-scale distributed systems.",
    url: "https://www.uber.com/blog/engineering/",
    topics: ["Real-time Systems", "Geospatial", "Marketplace", "Distributed Systems"]
  },
  {
    id: 5,
    name: "Cloudflare Blog",
    description: "Cloudflare's engineering blog focuses on networking, security, performance, and building a faster, more secure internet.",
    url: "https://blog.cloudflare.com/",
    topics: ["Networking", "Security", "Performance", "Edge Computing", "DNS"]
  },
  {
    id: 6,
    name: "Stripe Engineering",
    description: "Stripe's engineering team shares insights on payment infrastructure, APIs, reliability, and building financial systems at scale.",
    url: "https://stripe.com/blog/engineering",
    topics: ["Payments", "APIs", "Reliability", "Financial Systems", "Security"]
  },
  {
    id: 7,
    name: "Shopify Engineering",
    description: "Shopify's engineering blog covers e-commerce infrastructure, Ruby on Rails, scaling, and developer experience.",
    url: "https://shopify.engineering/",
    topics: ["E-commerce", "Ruby on Rails", "Scaling", "Developer Experience"]
  },
  {
    id: 8,
    name: "GitHub Engineering",
    description: "GitHub's engineering team discusses building the world's largest developer platform, Git internals, and collaboration tools.",
    url: "https://github.blog/engineering/",
    topics: ["Git", "Collaboration", "Developer Tools", "Scale", "Open Source"]
  },
  {
    id: 9,
    name: "OpenAI",
    description: "OpenAI's research and engineering blog covers large language models, AI safety, reinforcement learning, and cutting-edge AI research.",
    url: "https://openai.com/blog",
    topics: ["LLMs", "AI Safety", "Research", "Machine Learning", "GPT"]
  },
  {
    id: 10,
    name: "Kubernetes Blog",
    description: "Official Kubernetes blog covering container orchestration, cloud-native architecture, and the CNCF ecosystem.",
    url: "https://kubernetes.io/blog/",
    topics: ["Containers", "Orchestration", "Cloud Native", "DevOps", "CNCF"]
  },
  {
    id: 11,
    name: "CNCF Blog",
    description: "Cloud Native Computing Foundation blog covering cloud-native technologies, projects, and the open-source ecosystem.",
    url: "https://www.cncf.io/blog/",
    topics: ["Cloud Native", "Open Source", "Infrastructure", "CNCF Projects"]
  },
  {
    id: 12,
    name: "Linux Foundation",
    description: "Linux Foundation blog covers open-source development, Linux kernel, and enterprise open-source initiatives.",
    url: "https://www.linuxfoundation.org/blog",
    topics: ["Linux", "Open Source", "Enterprise", "Kernel", "Licensing"]
  },
  {
    id: 13,
    name: "Mozilla Hacks",
    description: "Mozilla's engineering blog focuses on web standards, browser development, Rust, and building a better internet.",
    url: "https://hacks.mozilla.org/",
    topics: ["Web Standards", "Firefox", "Rust", "JavaScript", "Privacy"]
  },
  {
    id: 14,
    name: "PostgreSQL Blog",
    description: "Official PostgreSQL blog covering database features, performance optimization, and the PostgreSQL community.",
    url: "https://www.postgresql.org/blog/",
    topics: ["Databases", "SQL", "Performance", "ACID", "Extensions"]
  },
  {
    id: 15,
    name: "Redis Blog",
    description: "Redis engineering blog covers in-memory data structures, caching, real-time applications, and database performance.",
    url: "https://redis.com/blog/",
    topics: ["In-memory", "Caching", "Real-time", "Data Structures", "Performance"]
  },
  {
    id: 16,
    name: "Apache Software Foundation",
    description: "Apache's blog covers open-source projects including Hadoop, Spark, Kafka, and the broader Apache ecosystem.",
    url: "https://blogs.apache.org/",
    topics: ["Big Data", "Hadoop", "Spark", "Kafka", "Open Source"]
  },
  {
    id: 17,
    name: "Python Software Foundation",
    description: "Official Python blog covering language developments, ecosystem updates, and the Python community.",
    url: "https://www.python.org/blog/",
    topics: ["Python", "Language Features", "Ecosystem", "Community", "Packaging"]
  },
  {
    id: 18,
    name: "Rust Blog",
    description: "Official Rust blog covers language updates, ecosystem developments, and the Rust programming community.",
    url: "https://blog.rust-lang.org/",
    topics: ["Rust", "Systems Programming", "Memory Safety", "Concurrency", "Cargo"]
  },
  {
    id: 19,
    name: "LinkedIn Engineering",
    description: "LinkedIn's engineering blog discusses building the world's professional network, data infrastructure, and developer productivity.",
    url: "https://engineering.linkedin.com/blog",
    topics: ["Professional Network", "Data Infrastructure", "Scala", "Developer Productivity"]
  },
  {
    id: 20,
    name: "Dropbox Tech Blog",
    description: "Dropbox engineering shares insights on storage systems, sync infrastructure, and building reliable cloud services.",
    url: "https://dropbox.tech/",
    topics: ["Storage", "Sync", "Cloud", "Infrastructure", "Reliability"]
  }
];

export function OpenSource() {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          Engineering Resources
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <section className="mb-12">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Curated collection of official engineering blogs from leading technology companies and open-source projects. Learn how industry teams solve real-world problems at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </article>
  );
}

function ResourceCard({ resource }: { resource: typeof engineeringResources[0] }) {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 group flex flex-col">
      <div className="flex-auto">
        <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
          <Globe className="w-4 h-4 text-muted-foreground" /> {resource.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {resource.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.topics.map((topic) => (
            <span key={topic} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
      >
        <ExternalLink className="w-4 h-4" /> Read Latest Articles
      </a>
    </div>
  );
}