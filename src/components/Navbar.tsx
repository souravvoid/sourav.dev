"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronUp } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop overlay when open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav 
        className={cn(
          "glass-panel fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl md:hidden border-b-0 border-x-0 rounded-b-none shadow-[0_-4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[420px] p-6 pb-8" : "max-h-[76px] p-4 pb-6"
        )}
      >
        {isOpen ? (
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center border-b border-border/40 pb-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigation</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-foreground hover:text-primary active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item} className="w-full">
                  <Link
                    href={`/?tab=${encodeURIComponent(item)}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium px-4 py-3.5 rounded-xl transition-all block w-full text-left active:scale-[0.98] border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      activeTab === item 
                        ? "bg-primary text-primary-foreground shadow-md font-semibold scale-[1.02] border-primary/20" 
                        : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">
                {activeTab}
              </span>
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 bg-primary text-primary-foreground rounded-xl active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open menu"
            >
              <span>Menu</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
