import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TestRig } from "@/components/test-rig";
import { mailto, profile, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-4 pb-6 sm:pt-8 lg:pt-10">
      <div className="rounded-panel bg-surface p-6 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <Image
                src="headshot.webp"
                alt={`Portrait of ${profile.name}`}
                width={112}
                height={112}
                priority
                className="h-14 w-14 shrink-0 rounded-full object-cover"
              />
              <p className="min-w-0 leading-snug">
                <span className="block text-lg font-semibold text-foreground">{profile.name}</span>
                <span className="block text-[15px] text-muted-foreground">{profile.role}</span>
              </p>
            </div>

            <h1
              id="hero-title"
              className="type-display mt-8 text-[clamp(2.75rem,10.5vw,4.5rem)] text-foreground lg:text-[clamp(4rem,6.4vw,5.5rem)]"
            >
              {profile.statement.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground sm:text-[1.1875rem]">{profile.valueProp}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={mailto} className="btn btn-filled">
                <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                Email me about a project
              </a>
              <a href={site.resume} download className="btn btn-outlined">
                <Download className="h-[18px] w-[18px]" aria-hidden="true" />
                Download resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <p className="chip">
                <span className="h-2 w-2 shrink-0 rounded-full bg-pass" aria-hidden="true" />
                {profile.availability}
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="icon-btn"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="icon-btn"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>

            <p className="mt-5 text-[15px] text-muted-foreground">
              {profile.background}{" "}
              {profile.previously.map((company, i) => (
                <span key={company}>
                  <span className="font-semibold text-foreground">{company}</span>
                  {i < profile.previously.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
          </div>

          <div className="lg:col-span-5">
            <TestRig />
          </div>
        </div>
      </div>
    </section>
  );
}
