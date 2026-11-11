import { Section } from "@/components/section";
import { skillGroups } from "@/content/portfolio";

export function SkillsSection() {
  return (
    <Section id="stack" index="02" label="stack" aside="tools I reach for">
      <p className="max-w-[56ch] text-[14.5px] leading-[1.75] text-foreground/75">
        A working toolkit rather than a checklist — chosen for the kind of systems I
        like to build.
      </p>

      <div className="mt-7 border-y border-line">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 border-b border-line py-4 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-6 sm:py-5"
          >
            <h3 className="label-mono sm:pt-1">{group.title}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line bg-surface px-2 py-1 text-[12px] text-foreground/75 transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
