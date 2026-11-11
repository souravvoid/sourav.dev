import type { CSSProperties } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Section } from "@/components/section";
import { hackathon } from "@/content/portfolio";

export function NowSection() {
  return (
    <Section
      id="now"
      index="04"
      label="now"
      aside={
        <span className="inline-flex items-center gap-1.5 text-accent">
          <span className="status-dot" aria-hidden="true" />
          building
        </span>
      }
    >
      <a
        href={hackathon.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${hackathon.name} — open the repository on GitHub`}
        style={{ "--glow": hackathon.glow } as CSSProperties}
        className="group block rounded-2xl border border-line bg-surface p-2 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground/20"
      >
        <div className="project-art relative h-[142px] overflow-hidden rounded-xl border border-line/70 sm:h-[156px]">
          <div className="art-grid absolute inset-0 opacity-70" aria-hidden="true" />

          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] text-foreground/45">
                <GitBranch className="size-3.5" aria-hidden="true" />
                on branch {hackathon.event.toLowerCase()}
              </span>
              <span className="font-mono text-[10px] text-foreground/35">
                updated {hackathon.updated}
              </span>
            </div>

            <div className="flex items-end justify-between gap-4">
              <p className="font-mono text-[13px] text-foreground/80 sm:text-[14px]">
                <span className="text-[var(--glow)]">$</span> git checkout{" "}
                <span className="font-medium">hackathon</span>
                <span className="animate-pulse text-[var(--glow)]">_</span>
              </p>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="px-2 pb-2 pt-5 sm:px-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9.5px] lowercase tracking-[0.04em] text-accent">
              {hackathon.status}
            </span>
            <span className="label-mono">{hackathon.event}</span>
          </div>

          <h3 className="mt-3 text-[19px] font-medium tracking-[-0.02em]">
            {hackathon.name}
          </h3>
          <p className="mt-2 max-w-[58ch] text-[13px] leading-[1.7] text-muted">
            {hackathon.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {hackathon.tags.map((tag) => (
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
    </Section>
  );
}
