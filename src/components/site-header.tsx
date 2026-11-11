"use client";

import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, site } from "@/content/portfolio";
import { openCommandMenu } from "@/lib/command";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setMenuOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 w-full max-w-[720px] items-center justify-between gap-3 px-5 sm:px-6">
        <a
          href="#top"
          className="rounded-sm text-[13px] font-medium tracking-[-0.01em] transition-colors hover:text-accent"
        >
          sourav<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1.5">
          <nav aria-label="Primary" className="mr-2 hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm font-mono text-[11px] lowercase tracking-[0.04em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={openCommandMenu}
            aria-label="Search this site"
            className="flex h-8 items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 text-[11px] text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
          >
            <Search className="size-[13px]" aria-hidden="true" />
            <span className="hidden sm:inline">search</span>
            <kbd className="ml-1 hidden rounded border border-line bg-background px-1 font-mono text-[9.5px] text-muted sm:inline">
              ⌘K
            </kbd>
          </button>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-8 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground md:hidden"
          >
            {menuOpen ? (
              <X className="size-[15px]" aria-hidden="true" />
            ) : (
              <Menu className="size-[15px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="menu-enter absolute inset-x-0 top-full border-b border-line bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto w-full max-w-[720px] px-5 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line/60 py-3 text-[15px] text-foreground/85 last:border-0 hover:text-foreground"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] text-muted">↗</span>
              </a>
            ))}
          </nav>

          <div className="mx-auto flex w-full max-w-[720px] items-center justify-between px-5 pb-4 pt-2">
            <div className="flex items-center gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </a>
            </div>

            <a
              href={site.resume}
              download
              className="rounded-full bg-foreground px-3.5 py-2 text-[12px] font-medium text-background"
            >
              résumé ↓
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
