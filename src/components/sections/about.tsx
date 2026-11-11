import { Brain, Network, Server, Share2, type LucideIcon } from "lucide-react";
import { Section } from "@/components/section";
import { focus } from "@/content/portfolio";

const focusIcons: Record<(typeof focus)[number]["icon"], LucideIcon> = {
  server: Server,
  network: Network,
  share: Share2,
  brain: Brain,
};

export function AboutSection() {
  return (
    <Section id="about" index="01" label="about">
      <div className="max-w-[62ch] space-y-4">
        <p className="text-[15px] leading-[1.75] text-foreground/80 sm:text-[15.5px]">
          Most of what I enjoy sits below the product layer: how a request moves through
          a socket, how data is shaped before it reaches a database, and how a system
          behaves when something fails.
        </p>
        <p className="text-[15px] leading-[1.75] text-foreground/80 sm:text-[15.5px]">
          I care about clean boundaries, measurable behaviour and code another engineer
          can reason about. The best compliment a backend can get is that nobody has to
          think about it.
        </p>
      </div>

      <div className="mt-9 grid gap-2 sm:grid-cols-2 sm:gap-3">
        {focus.map((item) => {
          const Icon = focusIcons[item.icon];

          return (
            <div
              key={item.title}
              className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-foreground/15"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                <h3 className="text-[13.5px] font-medium">{item.title}</h3>
              </div>
              <p className="mt-2.5 text-[12.5px] leading-[1.65] text-muted">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
