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
      <a
        href="#main"
        className="btn-primary sr-only z-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
          <Hero />
          <ServicesSection />
          <ResultsSection />
          <ExperienceSection />
          <SkillsSection />
          <HobbiesSection />
          <ContactSection />
        </main>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:px-8">
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
