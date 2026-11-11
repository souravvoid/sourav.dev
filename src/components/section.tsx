import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  label,
  aside,
  children,
  className,
}: {
  id: string;
  index: string;
  label: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("reveal scroll-mt-20", className)}
    >
      <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
        <h2 id={headingId} className="label-mono">
          <span className="text-foreground/75">{label}</span>
          <span className="text-muted/60"> / {index}</span>
        </h2>
        {aside ? <div className="label-mono text-right">{aside}</div> : null}
      </div>

      <div className="mt-8 sm:mt-9">{children}</div>
    </section>
  );
}
