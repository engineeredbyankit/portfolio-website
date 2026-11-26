import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ResultsSection } from "@/components/sections/results";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { HobbiesSection } from "@/components/sections/hobbies";
import { ContactSection } from "@/components/sections/contact";
import { profile, site } from "@/lib/content";

export function Portfolio() {
  return (
    <>
      {/* Sits above the viewport until it gets keyboard focus. */}
      <a href="#main" className="btn btn-filled fixed top-3 left-3 z-50 -translate-y-24 focus:translate-y-0">
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-8">
          <Hero />
          <ServicesSection />
          <ResultsSection />
          <ExperienceSection />
          <SkillsSection />
          <HobbiesSection />
          <ContactSection />
        </main>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-8">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>{new URL(site.url).host}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
