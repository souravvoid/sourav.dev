import {
  BookOpen,
  GraduationCap,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/section";
import { highlights, timeline } from "@/content/portfolio";

const timelineIcons: Record<(typeof timeline)[number]["icon"], LucideIcon> = {
  terminal: Terminal,
  graduation: GraduationCap,
  book: BookOpen,
};

export function PathSection() {
  return (
    <Section id="path" index="05" label="path" aside="experience & education">
      <div>
        {timeline.map((item, index) => {
          const Icon = timelineIcons[item.icon];
          const isLast = index === timeline.length - 1;

          return (
            <div key={item.title} className="relative flex gap-4 pb-8 last:pb-0">
              {!isLast ? (
                <span
                  className="absolute bottom-0 left-5 top-10 w-px bg-line"
                  aria-hidden="true"
                />
              ) : null}

              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-muted">
                <Icon className="size-4" aria-hidden="true" />
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[14.5px] font-medium tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <span className="label-mono">{item.period}</span>
                </div>
                <p className="mt-0.5 text-[12.5px] text-muted">{item.org}</p>
                <p className="mt-2 max-w-[58ch] text-[13px] leading-[1.7] text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <h3 className="label-mono">selected highlights</h3>

        <ul className="mt-3 border-t border-line">
          {highlights.map((highlight) => (
            <li key={highlight.text}>
              <a
                href={highlight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 border-b border-line py-3.5"
              >
                <span className="text-[13.5px] leading-[1.65] text-foreground/80 transition-colors group-hover:text-foreground group-hover:underline group-hover:decoration-line group-hover:underline-offset-4">
                  {highlight.text}
                </span>
                <span className="label-mono hidden shrink-0 sm:block">
                  {highlight.source}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
