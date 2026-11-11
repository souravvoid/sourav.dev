/**
 * Single source of truth for portfolio content.
 *
 * Edit this file to update the site. Anything marked TODO needs your input.
 * Contact details are intentionally placeholders — add your own before deploying.
 */

export const site = {
  name: "Sourav",
  /** TODO: add your full name if you want it shown. */
  fullName: "Sourav",
  role: "Backend & Systems Engineer",
  location: "Uttarakhand, India",
  timeZone: "Asia/Kolkata",
  availability: "Open to backend & systems roles",
  /** TODO: replace with your real email address. */
  email: "your-email@example.com",
  /** TODO: optional. Leave empty to keep it off the website. */
  phone: "",
  github: "https://github.com/souravvoid",
  linkedin: "https://www.linkedin.com/in/sourav-873471302/",
  githubHandle: "@souravvoid",
  resume: "/resume.pdf",
  url: "https://sourav-portfolio.vercel.app",
  description:
    "Sourav is a backend and systems engineer from Uttarakhand, India. He builds APIs, networking tools and data systems in Python, C++ and Java.",
} as const;

export const nav = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "path", href: "#path" },
  { label: "contact", href: "#contact" },
] as const;

export const intro = {
  statement: {
    before: "I build the parts of software that have to stay ",
    emphasis: "fast, correct and quiet",
    after: " under load.",
  },
  paragraphs: [
    "I'm Sourav, a computer science student and backend engineer from Uttarakhand, India. I work across APIs, databases, sockets and the protocols in between.",
    "I've built a C++ deep packet inspection engine, an end-to-end encrypted peer-to-peer file transfer app, and geospatial APIs in Python. I like understanding systems under the hood — then shipping them.",
  ],
} as const;

export const facts = [
  { value: "2028", label: "B.Tech CSE, expected", icon: "graduation" },
  { value: "04", label: "featured projects", icon: "folder" },
  { value: "C++", label: "low-level systems", icon: "terminal" },
] as const;

export const focus = [
  {
    title: "Backend systems",
    description: "APIs, data models and services with Python, FastAPI and SQL.",
    icon: "server",
  },
  {
    title: "Low-level networking",
    description: "Packet capture, protocol parsing and TCP/IP internals in C++ and Linux.",
    icon: "network",
  },
  {
    title: "Peer-to-peer",
    description: "Direct file transfer with end-to-end encryption and concurrent I/O.",
    icon: "share",
  },
  {
    title: "AI & retrieval",
    description: "Grounded assistants with LLMs, retrieval and tool calling.",
    icon: "brain",
  },
] as const;

export const skillGroups = [
  {
    title: "languages",
    skills: ["C++", "Java", "Python", "SQL", "Bash"],
  },
  {
    title: "systems",
    skills: ["Linux (Fedora)", "raw sockets", "libpcap", "POSIX APIs", "TCP/IP internals"],
  },
  {
    title: "backend & data",
    skills: ["FastAPI", "REST APIs", "SQLAlchemy", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "security",
    skills: ["AES-256-GCM", "ECDH", "end-to-end encryption", "JWT"],
  },
  {
    title: "ai / ml",
    skills: ["LLMs", "RAG", "prompt engineering", "AI agents", "NumPy", "Pandas"],
  },
  {
    title: "tooling",
    skills: ["Git", "Docker", "VS Code", "Maven", "GDB", "Valgrind"],
  },
] as const;

export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  href: string;
  year: string;
  glow: string;
  icon: "network" | "share" | "map" | "search";
};

export const projects: Project[] = [
  {
    title: "DPI Engine",
    kicker: "Deep packet inspection, in C++",
    description:
      "Reads PCAP captures, extracts TLS SNI and HTTP Host headers, classifies traffic by application and applies blocking rules.",
    tags: ["C++", "libpcap", "Linux", "networking"],
    href: "https://github.com/souravvoid/DPI-Engine---Deep-Packet-Inspection-System",
    year: "2026",
    glow: "#34d399",
    icon: "network",
  },
  {
    title: "PeerLink",
    kicker: "Serverless P2P file transfer",
    description:
      "Direct device-to-device transfer over a LAN. Invite-code pairing, Java 21 virtual threads and end-to-end encryption — no cloud in the middle.",
    tags: ["Java 21", "JavaFX", "TCP/IP", "cryptography"],
    href: "https://github.com/souravvoid/filedrop",
    year: "2026",
    glow: "#a78bfa",
    icon: "share",
  },
  {
    title: "OptiPatrol",
    kicker: "Crime hotspot prediction",
    description:
      "Geospatial platform that clusters historical crime data and generates patrol routes over a weighted density graph. FastAPI, SQLAlchemy and React.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "React"],
    href: "https://github.com/souravvoid/Crime-Hotspot-Prediction-and-Patrol-Optimization-System",
    year: "2026",
    glow: "#60a5fa",
    icon: "map",
  },
  {
    title: "Khoji",
    kicker: "Offline-first AI workspace",
    description:
      "Drop in PDFs, DOCX, PPTX or images to get semantic search, flashcards and grounded chat — entirely on your machine, with no internet required.",
    tags: ["TypeScript", "local AI", "RAG", "search"],
    href: "https://github.com/souravvoid/khoji",
    year: "2026",
    glow: "#f59e0b",
    icon: "search",
  },
];

export const hackathon = {
  name: "GitKitty",
  event: "BharatCode",
  status: "in progress",
  description:
    "A Git and GitHub learning kit: cheat sheets, real-world scenarios, and Kitty — a pixel-cat Chrome extension that tours repositories and tutors you through Git.",
  tags: ["Chrome extension", "Git", "learning"],
  href: "https://github.com/souravvoid/GitKitty",
  updated: "Nov 2026",
  glow: "#fb7185",
} as const;

export const timeline = [
  {
    title: "Independent projects",
    org: "Backend, networking & AI",
    period: "2025 — present",
    description:
      "Designing and shipping projects end to end, from wire-level packet parsing in C++ to product-facing APIs and local-first AI tooling.",
    icon: "terminal",
  },
  {
    title: "B.Tech, Computer Science & Engineering",
    org: "Graphic Era Hill University",
    period: "2024 — 2028",
    description:
      "Coursework across data structures, operating systems, DBMS, computer networks and system design.",
    icon: "graduation",
  },
  {
    title: "Self-directed systems study",
    org: "Linux · networking · cryptography",
    period: "2024 — present",
    description:
      "Learning by building: sockets, packet parsing, encryption and the fundamentals behind distributed systems.",
    icon: "book",
  },
] as const;

export const highlights = [
  {
    text: "Built a C++ DPI engine that classifies traffic from PCAP captures and enforces blocking rules.",
    source: "DPI Engine",
    href: "https://github.com/souravvoid/DPI-Engine---Deep-Packet-Inspection-System",
  },
  {
    text: "Shipped a zero-cloud P2P file transfer app with invite-code pairing and E2E encryption.",
    source: "PeerLink",
    href: "https://github.com/souravvoid/filedrop",
  },
  {
    text: "Designed geospatial APIs and patrol routing over a weighted crime-density graph.",
    source: "OptiPatrol",
    href: "https://github.com/souravvoid/Crime-Hotspot-Prediction-and-Patrol-Optimization-System",
  },
  {
    text: "Exploring local-first AI with offline semantic search and document chat.",
    source: "Khoji",
    href: "https://github.com/souravvoid/khoji",
  },
] as const;

export const contact = {
  heading: {
    before: "Let's build something ",
    emphasis: "reliable",
    after: ".",
  },
  body:
    "I'm open to backend and systems engineering roles, internships and interesting collaborations. Email is the fastest way to reach me.",
} as const;
