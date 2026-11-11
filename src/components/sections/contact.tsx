import { ArrowUpRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { CopyEmail } from "@/components/copy-email";
import { Section } from "@/components/section";
import { contact, site } from "@/content/portfolio";

export function ContactSection() {
  const showPhone = site.phone.trim().length > 0;

  return (
    <Section id="contact" index="06" label="contact" aside="open to work">
      <h3 className="max-w-[24ch] text-[26px] font-medium leading-[1.2] tracking-[-0.03em] sm:text-[32px]">
        {contact.heading.before}
        <em className="font-serif italic text-accent">{contact.heading.emphasis}</em>
        {contact.heading.after}
      </h3>

      <p className="mt-4 max-w-[54ch] text-[14.5px] leading-[1.75] text-foreground/75">
        {contact.body}
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-4 p-5">
          <div className="min-w-0">
            <p className="label-mono">email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block truncate text-[14.5px] font-medium transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
          <CopyEmail email={site.email} />
        </div>

        <div className="grid border-t border-line sm:grid-cols-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-2 border-b border-line p-4 text-[13px] text-foreground/80 transition-colors hover:bg-surface-hover hover:text-foreground sm:border-b-0 sm:border-r"
          >
            <span className="flex items-center gap-2.5">
              <Github className="size-4 text-muted" aria-hidden="true" />
              GitHub
            </span>
            <span className="flex items-center gap-1.5">
              <span className="label-mono hidden sm:block">{site.githubHandle}</span>
              <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
            </span>
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-2 border-b border-line p-4 text-[13px] text-foreground/80 transition-colors hover:bg-surface-hover hover:text-foreground sm:border-b-0 sm:border-r"
          >
            <span className="flex items-center gap-2.5">
              <Linkedin className="size-4 text-muted" aria-hidden="true" />
              LinkedIn
            </span>
            <span className="flex items-center gap-1.5">
              <span className="label-mono hidden sm:block">connect</span>
              <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
            </span>
          </a>

          <a
            href={site.resume}
            download
            className="group flex items-center justify-between gap-2 p-4 text-[13px] text-foreground/80 transition-colors hover:bg-surface-hover hover:text-foreground"
          >
            <span className="flex items-center gap-2.5">
              <Download className="size-4 text-muted" aria-hidden="true" />
              Résumé
            </span>
            <span className="flex items-center gap-1.5">
              <span className="label-mono hidden sm:block">PDF</span>
              <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
            </span>
          </a>
        </div>

        {showPhone ? (
          <div className="border-t border-line p-5">
            <p className="label-mono">phone</p>
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="mt-1 block text-[14px] transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
          </div>
        ) : null}
      </div>

      <p className="label-mono mt-4">
        {site.location} · IST (UTC+05:30)
      </p>
    </Section>
  );
}
