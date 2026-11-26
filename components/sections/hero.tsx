import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TestRig } from "@/components/test-rig";
import { mailto, profile, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-12 pb-20 sm:pt-16 lg:pt-20 lg:pb-28">
      <div className="flex items-center gap-4">
        <Image
          src="headshot.webp"
          alt={`Portrait of ${profile.name}`}
          width={112}
          height={112}
          priority
          className="h-14 w-14 rounded-full object-cover ring-1 ring-border"
        />
        <p className="leading-snug">
          <span className="type-wide block font-semibold text-foreground">{profile.name}</span>
          <span className="block text-[15px] text-muted-foreground">{profile.role}</span>
        </p>
      </div>

      <h1
        id="hero-title"
        className="type-display mt-10 text-[clamp(2.6rem,10.2vw,8.4rem)] text-foreground sm:mt-12"
      >
        {profile.statement.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div className="lg:col-span-6 xl:col-span-7">
          <p className="max-w-xl text-lg leading-8 text-foreground sm:text-xl sm:leading-9">
            {profile.valueProp}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={mailto} className="btn-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me about a project
            </a>
            <a href={site.resume} download className="btn-secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          </div>

          <p className="mt-9 flex items-center gap-2.5 text-[15px] font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent-fill" aria-hidden="true" />
            {profile.availability}
          </p>
          <p className="mt-2 text-[15px] text-muted-foreground">
            {profile.background}{" "}
            {profile.previously.map((company, i) => (
              <span key={company}>
                <span className="font-semibold text-foreground">{company}</span>
                {i < profile.previously.length - 1 ? " and " : "."}
              </span>
            ))}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-5">
          <TestRig />
        </div>
      </div>
    </section>
  );
}
