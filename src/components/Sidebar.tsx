import Image from "next/image";
import { Mail, Phone, MapPin, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export function Sidebar() {
  return (
    <aside className="glass-panel w-full md:w-72 lg:w-80 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden flex-shrink-0 h-max md:h-full md:overflow-y-auto">
      {/* Avatar & Name */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-[#2D333B] p-1 border border-border">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <Image
              src="/avatar.png"
              alt="Sourav"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sourav</h1>
          <p className="text-muted-foreground font-mono text-sm mt-1 bg-muted px-3 py-1 rounded-full inline-flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            Backend Engineer
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-border/50" />

      {/* Contact Info */}
      <div className="flex flex-col gap-4">
        <ContactItem icon={Mail} title="Email" value="souravsemwal1@gmail.com" href="mailto:souravsemwal1@gmail.com" />
        <ContactItem icon={Phone} title="Phone" value="+91 76682 38542" href="tel:+917668238542" />
        <ContactItem icon={MapPin} title="Location" value="Uttarakhand, India" />
      </div>

      <div className="w-full h-px bg-border/50" />

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-auto">
        <SocialLink href="https://github.com/souravvoid" icon={Github} label="GitHub Profile" />
        <SocialLink href="https://www.linkedin.com/in/sourav-873471302/" icon={Linkedin} label="LinkedIn Profile" />
      </div>
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
          <a href={href} className="text-sm font-medium hover:text-primary transition-colors truncate">
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
      className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
