"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 font-semibold text-foreground"
          aria-label={`${profile.name}, back to top`}
        >
          <Image
            src="headshot.webp"
            alt=""
            width={64}
            height={64}
            className="hidden h-8 w-8 rounded-full object-cover sm:block"
          />
          <span className="truncate text-[15px] sm:text-base">{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`inline-flex h-10 items-center rounded-full px-4 text-[15px] transition-colors ${
                      isActive
                        ? "bg-honey-soft font-semibold text-on-honey-soft"
                        : "font-medium text-muted-foreground hover:bg-foreground/7 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href={site.resume}
            download
            aria-label="Download resume"
            className="btn btn-filled btn-small w-10 px-0 sm:w-auto sm:px-[1.125rem]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>

      <nav aria-label="Sections" className="border-t border-border lg:hidden">
        <div
          ref={mobileNavRef}
          className="scrollbar-hide mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2.5 sm:px-8"
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                data-id={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`inline-flex h-9 shrink-0 items-center rounded-full border px-4 text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-transparent bg-honey-soft font-semibold text-on-honey-soft"
                    : "border-border font-medium text-muted-foreground hover:text-foreground"
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
