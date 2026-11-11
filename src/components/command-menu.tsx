"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { ArrowUpRight, Check, Copy, Download, Mail, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Github, Linkedin } from "@/components/Icons";
import { site } from "@/content/portfolio";
import { OPEN_COMMAND_MENU_EVENT } from "@/lib/command";
import { cn } from "@/lib/utils";

type Command = {
  id: string;
  group: "go to" | "actions" | "elsewhere";
  label: string;
  hint?: string;
  keywords?: string;
  icon: ComponentType<{ className?: string }>;
  run: () => void;
};

const sectionLinks = [
  { label: "About", href: "#about", keywords: "bio intro who" },
  { label: "Stack", href: "#stack", keywords: "skills technologies tools" },
  { label: "Work", href: "#work", keywords: "projects portfolio code" },
  { label: "Now", href: "#now", keywords: "hackathon current building" },
  { label: "Path", href: "#path", keywords: "experience education timeline" },
  { label: "Contact", href: "#contact", keywords: "email reach hire" },
];

function scrollToSection(href: string) {
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function openExternal(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = site.resume;
  link.download = "Sourav-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const openMenu = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      restoreFocusRef.current = document.activeElement;
    }
    setQuery("");
    setActive(0);
    setOpen(true);
  }, []);

  useEffect(() => {
    const onOpen = () => openMenu();

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) {
          setOpen(false);
        } else {
          openMenu();
        }
      }

      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener(OPEN_COMMAND_MENU_EVENT, onOpen);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(OPEN_COMMAND_MENU_EVENT, onOpen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, openMenu]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    restoreFocusRef.current?.focus();
  }, [open]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }, []);

  const commands = useMemo<Command[]>(() => {
    const navigation: Command[] = sectionLinks.map((item) => ({
      id: `go-${item.href.slice(1)}`,
      group: "go to",
      label: item.label,
      keywords: item.keywords,
      icon: ArrowUpRight,
      run: () => scrollToSection(item.href),
    }));

    const actions: Command[] = [
      {
        id: "copy-email",
        group: "actions",
        label: copied ? "Email copied" : "Copy email address",
        keywords: "mail contact clipboard",
        icon: copied ? Check : Copy,
        run: copyEmail,
      },
      {
        id: "download-resume",
        group: "actions",
        label: "Download résumé",
        hint: "PDF",
        keywords: "cv pdf file",
        icon: Download,
        run: downloadResume,
      },
      {
        id: "toggle-theme",
        group: "actions",
        label: isDark ? "Switch to light theme" : "Switch to dark theme",
        keywords: "dark light color appearance",
        icon: isDark ? Sun : Moon,
        run: () => setTheme(isDark ? "light" : "dark"),
      },
      {
        id: "send-email",
        group: "actions",
        label: "Send an email",
        keywords: "mailto contact",
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
    ];

    const elsewhere: Command[] = [
      {
        id: "github",
        group: "elsewhere",
        label: "GitHub",
        hint: site.githubHandle,
        keywords: "code repositories source",
        icon: Github,
        run: () => openExternal(site.github),
      },
      {
        id: "linkedin",
        group: "elsewhere",
        label: "LinkedIn",
        hint: "connect",
        keywords: "work professional",
        icon: Linkedin,
        run: () => openExternal(site.linkedin),
      },
    ];

    return [...navigation, ...actions, ...elsewhere];
  }, [copied, copyEmail, isDark, setTheme]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return commands;

    return commands.filter((command) =>
      `${command.label} ${command.keywords ?? ""} ${command.hint ?? ""}`
        .toLowerCase()
        .includes(term),
    );
  }, [commands, query]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`command-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const runCommand = useCallback((command: Command) => {
    if (command.id === "copy-email") {
      void copyEmail();
      return;
    }

    command.run();
    setOpen(false);
  }, [copyEmail]);

  const onInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((current) => (filtered.length ? (current + 1) % filtered.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((current) =>
        filtered.length ? (current - 1 + filtered.length) % filtered.length : 0,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const command = filtered[active];
      if (command) runCommand(command);
    }
  };

  const onPanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) return;

    const focusable = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'input, button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fade-enter fixed inset-0 z-[100] flex items-start justify-center bg-black/45 p-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-title"
        onKeyDown={onPanelKeyDown}
        className="dialog-enter w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/20"
      >
        <h2 id="command-title" className="sr-only">
          Command menu
        </h2>

        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKeyDown}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-list"
            aria-autocomplete="list"
            aria-activedescendant={
              filtered.length > 0 ? `command-${active}` : undefined
            }
            placeholder="Jump to a section or run an action…"
            className="h-12 w-full bg-transparent text-[14px] text-foreground outline-none placeholder:text-muted/75"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded border border-line px-1.5 py-0.5 font-mono text-[9.5px] text-muted transition-colors hover:text-foreground"
          >
            esc
          </button>
        </div>

        <div
          id="command-list"
          role="listbox"
          aria-label="Commands"
          className="max-h-[min(56vh,420px)] overflow-y-auto p-2"
        >
          {filtered.length === 0 ? (
            <div className="px-3 py-10 text-center">
              <p className="text-[13.5px] text-foreground/80">
                No results for “{query}”
              </p>
              <p className="label-mono mt-2">try “work”, “resume” or “github”</p>
            </div>
          ) : (
            filtered.map((command, index) => {
              const showGroup = index === 0 || filtered[index - 1].group !== command.group;
              const Icon = command.icon;

              return (
                <Fragment key={command.id}>
                  {showGroup ? (
                    <p className="label-mono px-3 pb-1 pt-3 first:pt-1">{command.group}</p>
                  ) : null}

                  <button
                    type="button"
                    id={`command-${index}`}
                    role="option"
                    aria-selected={active === index}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => runCommand(command)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13.5px] transition-colors",
                      active === index
                        ? "bg-surface-hover text-foreground"
                        : "text-foreground/80",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-4 shrink-0",
                        active === index ? "text-accent" : "text-muted",
                      )}
                    />
                    <span className="flex-1 truncate">{command.label}</span>
                    {command.hint ? (
                      <span className="label-mono hidden shrink-0 sm:block">
                        {command.hint}
                      </span>
                    ) : null}
                    {active === index ? (
                      <span className="font-mono text-[10px] text-muted">↵</span>
                    ) : null}
                  </button>
                </Fragment>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
          <p className="label-mono">↑↓ navigate · ↵ select</p>
          <p className="label-mono">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </p>
        </div>

        <span role="status" aria-live="polite" className="sr-only">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </div>
    </div>
  );
}
