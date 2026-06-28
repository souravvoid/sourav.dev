import { Sidebar } from "@/components/Sidebar";
import { Navbar, MobileNavbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { Contact } from "@/components/sections/Contact";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const activeTab = (resolvedSearchParams.tab as string) || "About";

  return (
    <>
      <Sidebar />
      <main className="flex-1 glass-panel rounded-2xl relative flex flex-col overflow-hidden h-max md:h-full pb-20 md:pb-0">
        <Navbar activeTab={activeTab} />
        
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth pb-24 md:pb-10 pt-8 md:pt-24 relative">
          {activeTab === "About" && <About />}
          {activeTab === "Resume" && <Resume />}
          {activeTab === "Projects" && <Projects />}
          {activeTab === "Open Source" && <OpenSource />}
          {activeTab === "Contact" && <Contact />}
        </div>
        
        <MobileNavbar activeTab={activeTab} />
      </main>
    </>
  );
}
