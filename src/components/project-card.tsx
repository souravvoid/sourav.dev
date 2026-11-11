import type { CSSProperties } from "react";
import { ArrowUpRight, Map, Network, Search, Share2, type LucideIcon } from "lucide-react";
import type { Project } from "@/content/portfolio";

const projectIcons: Record<Project["icon"], LucideIcon> = {
  network: Network,
  share: Share2,
  map: Map,
  search: Search,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.icon];

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — open the repository on GitHub`}
      style={{ "--glow": project.glow } as CSSProperties}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-2 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground/20"
    >
      <div className="project-art relative h-[132px] overflow-hidden rounded-xl border border-line/70 sm:h-[148px]">
        <div className="art-grid absolute inset-0 opacity-70" aria-hidden="true" />

        <div className="absolute inset-0 flex flex-col justify-between p-3.5">
          <div className="flex items-start justify-between gap-4">
            <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-background/45 text-[var(--glow)] backdrop-blur-sm">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] text-foreground/35">
              {String(index + 1).padStart(2, "0")} / {project.year}
            </span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-foreground/45">
              {project.kicker}
            </p>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1.5 pt-4">
        <h3 className="text-[15.5px] font-medium tracking-[-0.01em]">{project.title}</h3>
        <p className="mt-2 flex-1 text-[12.5px] leading-[1.65] text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-line px-1.5 py-0.5 font-mono text-[9.5px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
