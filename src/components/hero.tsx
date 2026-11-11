import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  FolderGit2,
  GraduationCap,
  Mail,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { LocalTime } from "@/components/local-time";
import { facts, intro, site } from "@/content/portfolio";

const factIcons: Record<(typeof facts)[number]["icon"], LucideIcon> = {
  graduation: GraduationCap,
  folder: FolderGit2,
  terminal: Terminal,
};

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-14 sm:pt-20">
      <div className="hero-enter flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
          <span className="status-dot" aria-hidden="true" />
          <span className="font-mono text-[10.5px] text-muted">
            {site.availability}
          </span>
        </span>
        <span className="px-1 font-mono text-[10.5px] text-muted">
          {site.location} · <LocalTime timeZone={site.timeZone} /> IST
        </span>
      </div>

      <div className="hero-enter mt-8 flex items-center gap-4" data-delay="1">
        <Image
          src="/avatar.png"
          alt="Sourav's avatar"
          width={64}
          height={64}
          priority
          className="size-14 rounded-full object-cover ring-1 ring-line ring-offset-2 ring-offset-background sm:size-16"
        />
        <div>
          <h1
            id="hero-title"
            className="text-[24px] font-medium tracking-[-0.02em] sm:text-[27px]"
          >
            {site.name}
          </h1>
          <p className="mt-0.5 text-[13px] text-muted sm:text-[13.5px]">{site.role}</p>
        </div>
      </div>

      <h2
        className="hero-enter mt-8 max-w-[660px] text-[30px] font-medium leading-[1.18] tracking-[-0.035em] sm:text-[38px]"
        data-delay="2"
      >
        {intro.statement.before}
        <em className="font-serif italic text-accent">{intro.statement.emphasis}</em>
        {intro.statement.after}
      </h2>

      <div className="hero-enter mt-6 max-w-[62ch] space-y-4" data-delay="3">
        {intro.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-[1.75] text-foreground/80 sm:text-[15.5px]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="hero-enter mt-7 flex flex-wrap items-center gap-2" data-delay="4">
        {site.resume ? (
          <a
            href={site.resume}
            download
            className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-[12.5px] font-medium text-background transition-opacity hover:opacity-85"
          >
            <ArrowDown className="size-3.5" aria-hidden="true" />
            Résumé
          </a>
        ) : null}

        <a
          href={`mailto:${site.email}`}
          className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[12.5px] font-medium text-foreground/90 transition-colors hover:bg-surface-hover hover:text-foreground"
        >
          <Mail className="size-3.5" aria-hidden="true" />
          Say hi
        </a>

        <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />

        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
        >
          <Github className="size-[15px]" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
        >
          <Linkedin className="size-[15px]" />
        </a>

        <a
          href="#work"
          className="ml-1 hidden items-center gap-1 font-mono text-[10.5px] text-muted transition-colors hover:text-foreground sm:inline-flex"
        >
          see the work
          <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
      </div>

      <div className="hero-enter mt-10 grid grid-cols-3 gap-2 sm:gap-3" data-delay="4">
        {facts.map((fact) => {
          const Icon = factIcons[fact.icon];

          return (
            <div
              key={fact.label}
              className="rounded-xl border border-line bg-surface p-3.5 sm:p-4"
            >
              <Icon className="size-4 text-accent" aria-hidden="true" />
              <p className="mt-3 text-[19px] font-medium leading-none tracking-[-0.02em] sm:text-[22px]">
                {fact.value}
              </p>
              <p className="mt-1.5 text-[10px] leading-snug text-muted sm:text-[11px]">
                {fact.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
