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
      className="scroll-mt-32 pt-6 pb-16 sm:pt-10 sm:pb-24 lg:scroll-mt-20"
    >
      <div className="rounded-panel bg-contact p-7 text-on-contact sm:p-12 lg:p-16">
        <h2 id="contact-title" className="type-headline text-[clamp(2rem,4.2vw,2.875rem)]">
          {contact.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-contact-muted">{contact.text}</p>

        <a
          href={mailto}
          className="type-display mt-10 block text-[clamp(1.35rem,5.6vw,4.25rem)] [overflow-wrap:anywhere] text-contact-email decoration-[0.06em] underline-offset-[0.16em] hover:underline"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button type="button" onClick={copyEmail} className="btn btn-contact">
            {copied ? (
              <Check className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Copy className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
            <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
          </button>
          <a href={site.resume} download className="btn btn-contact-outlined">
            <Download className="h-[18px] w-[18px]" aria-hidden="true" />
            Download resume
          </a>
        </div>

        <ul className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-on-contact underline-offset-4 hover:underline"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
