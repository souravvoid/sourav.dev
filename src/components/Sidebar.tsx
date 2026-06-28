"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Terminal, ChevronDown, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <aside className="glass-panel w-full md:w-72 lg:w-80 rounded-2xl p-6 flex flex-col md:gap-6 relative overflow-hidden flex-shrink-0 h-max md:h-full md:overflow-y-auto">
      {/* Avatar & Name Header */}
      <div className="flex flex-row md:flex-col items-center md:text-center gap-4 relative w-full pr-14 md:pr-0">
        <div className="w-16 h-16 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-[#2D333B] p-0.5 md:p-1 border border-border flex-shrink-0">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <Image
              src="/avatar.png"
              alt="Sourav"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">Sourav</h1>
          <p className="text-muted-foreground font-mono text-xs md:text-sm mt-1 bg-muted px-2.5 py-0.5 md:px-3 md:py-1 rounded-full inline-flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-primary" />
            Backend Engineer
          </p>
        </div>
        
        {/* Toggle Chevron on Mobile (touch target >= 48px) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-primary active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={isExpanded}
          aria-controls="sidebar-collapsible-content"
          aria-label={isExpanded ? "Collapse profile card" : "Expand profile card"}
        >
          <ChevronDown 
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Collapsible content container */}
      <motion.div
        id="sidebar-collapsible-content"
        initial={false}
        animate={isMobile ? (isExpanded ? "expanded" : "collapsed") : "expanded"}
        variants={{
          expanded: { height: "auto", opacity: 1, marginTop: 24 },
          collapsed: { height: 0, opacity: 0, marginTop: 0 }
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden md:!h-auto md:!opacity-100 md:!mt-6 flex flex-col gap-6"
      >
        <div className="w-full h-px bg-border/50" />

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <ContactItem icon={Mail} title="Email" value="souravsemwal1@gmail.com" href="mailto:souravsemwal1@gmail.com" />
          <ContactItem icon={Phone} title="Phone" value="+91 76682 38542" href="tel:+917668238542" />
          <ContactItem icon={MapPin} title="Location" value="Uttarakhand, India" />
        </div>

        <div className="w-full h-px bg-border/50" />

        {/* Resume Button */}
        <a 
          href="/resume.pdf"
          download
          className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>

        <div className="w-full h-px bg-border/50" />

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <SocialLink href="https://github.com/souravvoid" icon={Github} label="GitHub Profile" />
          <SocialLink href="https://www.linkedin.com/in/sourav-873471302/" icon={Linkedin} label="LinkedIn Profile" />
        </div>
      </motion.div>
    </aside>
  );
}

function ContactItem({ icon: Icon, title, value, href }: { icon: React.ElementType, title: string, value: string, href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-primary flex-shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{title}</span>
        {href ? (
          <a href={href} className="text-sm font-medium hover:text-primary transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            {value}
          </a>
        ) : (
          <span className="text-sm font-medium truncate">{value}</span>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
