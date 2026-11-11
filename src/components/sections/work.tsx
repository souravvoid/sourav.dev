import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects, site } from "@/content/portfolio";

export function WorkSection() {
  return (
    <Section
      id="work"
      index="03"
      label="work"
      aside={
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          all repositories ↗
        </a>
      }
    >
      <p className="max-w-[56ch] text-[14.5px] leading-[1.75] text-foreground/75">
        A few things I&apos;ve built end to end. Each one started with a problem I wanted
        to understand properly.
      </p>

      <div className="mt-7 grid gap-2 sm:grid-cols-2 sm:gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
