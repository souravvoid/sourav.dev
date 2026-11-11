import { BackToTop } from "@/components/back-to-top";
import { CommandMenu } from "@/components/command-menu";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { NowSection } from "@/components/sections/now";
import { PathSection } from "@/components/sections/path";
import { SkillsSection } from "@/components/sections/skills";
import { WorkSection } from "@/components/sections/work";

export default function Home() {
  return (
    <div className="page-glow min-h-dvh">
      <SiteHeader />

      <main id="main" className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <Hero />

        <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <NowSection />
          <PathSection />
          <ContactSection />
        </div>
      </main>

      <SiteFooter />
      <CommandMenu />
      <BackToTop />
    </div>
  );
}
