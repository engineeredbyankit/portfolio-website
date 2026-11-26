"use client";

import { useState } from "react";
import { Check, Copy, Download, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { contact, mailto, profile, site } from "@/lib/content";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = mailto;
    }
  };

  const links = [
    { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: "GitHub", href: profile.github, icon: GithubIcon, external: true },
    { label: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}`, icon: Phone, external: false },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 border-t border-border pt-20 pb-24 sm:pt-24 sm:pb-32 lg:scroll-mt-20"
    >
      <h2 id="contact-title" className="type-heading text-[clamp(2rem,4.6vw,3.4rem)] text-foreground">
        {contact.title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{contact.text}</p>

      <a
        href={mailto}
        className="type-display mt-12 block text-[clamp(1.3rem,5vw,4.1rem)] break-words text-foreground underline decoration-accent decoration-[0.06em] underline-offset-[0.18em] transition-colors hover:text-accent"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button type="button" onClick={copyEmail} className="btn-primary">
          {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
        </button>
        <a href={site.resume} download className="btn-secondary">
          <Download className="h-4 w-4" aria-hidden="true" />
          Download resume
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
        {links.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
