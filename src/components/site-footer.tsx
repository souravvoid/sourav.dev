import { site } from "@/content/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-24 w-full max-w-[720px] border-t border-line px-5 pb-10 pt-6 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono">
          © {year} {site.name}
        </p>

        <nav aria-label="Footer" className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono transition-colors hover:text-foreground"
          >
            github ↗
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono transition-colors hover:text-foreground"
          >
            linkedin ↗
          </a>
          <a
            href={`mailto:${site.email}`}
            className="label-mono transition-colors hover:text-foreground"
          >
            email
          </a>
        </nav>

        <p className="label-mono">built with next.js & tailwind</p>
      </div>
    </footer>
  );
}
