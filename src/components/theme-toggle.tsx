"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex size-8 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[15px]" aria-hidden="true" />
        ) : (
          <Moon className="size-[15px]" aria-hidden="true" />
        )
      ) : (
        <Sun className="size-[15px] opacity-0" aria-hidden="true" />
      )}
    </button>
  );
}
