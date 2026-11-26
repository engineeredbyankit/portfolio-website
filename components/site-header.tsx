"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile, site } from "@/lib/content";

export const navItems = [
  { id: "services", label: "Services" },
  { id: "results", label: "Results" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        const current = ids.find((id) => visible.get(id));
        // Near the very bottom, the last short section may never cross the
        // middle band, so treat reaching the end of the page as "contact".
        const atBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        setActive(atBottom ? ids[ids.length - 1] : (current ?? ""));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = navItems.map((item) => item.id);

export function SiteHeader() {
  const active = useActiveSection(ids);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Keep the active link visible in the horizontally scrolling mobile nav.
  useEffect(() => {
    const container = mobileNavRef.current;
    if (!container || !active) return;
    const link = container.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!link) return;
    const target = link.offsetLeft - container.clientWidth / 2 + link.clientWidth / 2;
    container.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="type-wide text-[15px] font-bold tracking-tight text-foreground"
          aria-label={`${profile.name}, back to top`}
        >
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`text-[15px] transition-colors ${
                      isActive
                        ? "font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={site.resume} download className="btn-primary btn-small">
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>

      <nav aria-label="Sections" className="border-t border-border lg:hidden">
        <div
          ref={mobileNavRef}
          className="scrollbar-hide mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 sm:px-8"
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                data-id={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`shrink-0 text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-[6px]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
