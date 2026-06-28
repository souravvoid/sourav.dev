import React from "react";
import { cn } from "@/lib/utils";

export function TerminalWindow({ title, date, children, className }: { title: string, date?: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("terminal-panel flex flex-col relative group", className)}>
      <div className="terminal-header flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="ml-2 text-xs text-[#8B949E] font-medium">{title.toLowerCase().replace(/\s+/g, '-')}.sh</span>
        </div>
        {date && <span className="text-xs text-[#8B949E]">{date}</span>}
      </div>
      
      <div className="p-6 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
