import { experienceIntro, experiences } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" intro={experienceIntro}>
      <ol className="space-y-4">
        {experiences.map((exp) => {
          const isBreak = exp.kind === "break";
          return (
            <li
              key={`${exp.org}-${exp.period}`}
              className={`rounded-card p-6 sm:p-8 ${isBreak ? "border border-dashed border-outline/60" : "bg-surface"}`}
            >
              <article className="md:grid md:grid-cols-[12rem_1fr] md:gap-8">
                <p className="text-sm font-medium text-muted-foreground md:pt-1.5">{exp.period}</p>
                <div className="mt-2 md:mt-0">
                  <h3 className={`type-title text-[1.375rem] ${isBreak ? "text-muted-foreground" : "text-foreground"}`}>
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-[15px] text-muted-foreground">
                    <span className={isBreak ? "" : "font-semibold text-foreground"}>{exp.org}</span>
                    {exp.detail && <>, {exp.detail}</>}
                  </p>

                  <ul className="mt-5 max-w-3xl space-y-3">
                    {exp.highlights.map((item) => (
                      <li key={item.text} className="flex gap-3 leading-7 text-muted-foreground">
                        <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                        <span>
                          {item.label && <span className="font-semibold text-foreground">{item.label}: </span>}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <ul aria-label="Tools used" className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((tool) => (
                        <li key={tool} className="chip border-transparent bg-surface-high">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
