import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = ["About", "Resume", "Projects", "Open Source", "Contact"];

export function Navbar({ activeTab }: { activeTab: string }) {
  return (
    <nav className="glass-panel ml-auto w-max rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 px-8 py-5 hidden md:block z-50 border-t-0 border-r-0">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              href={`/?tab=${encodeURIComponent(item)}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                activeTab === item ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item}
              {activeTab === item && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full animate-in zoom-in duration-300" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Mobile navbar (bottom fixed)
export function MobileNavbar({ activeTab }: { activeTab: string }) {
  return (
    <nav className="glass-panel fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl md:hidden p-4 border-b-0 border-x-0 rounded-b-none shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <ul className="flex justify-between items-center px-2 overflow-x-auto gap-4 scrollbar-hide">
        {navItems.map((item) => (
          <li key={item} className="flex-shrink-0">
            <Link
              href={`/?tab=${encodeURIComponent(item)}`}
              className={cn(
                "text-xs font-medium px-3 py-2 rounded-xl transition-colors whitespace-nowrap block",
                activeTab === item ? "bg-primary/20 text-primary" : "text-muted-foreground"
              )}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
