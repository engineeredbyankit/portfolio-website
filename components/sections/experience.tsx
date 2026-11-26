import { experienceIntro, experiences } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" intro={experienceIntro}>
      <ol className="border-t border-border">
        {experiences.map((exp) => {
          const isBreak = exp.kind === "break";
          return (
            <li
              key={`${exp.org}-${exp.period}`}
              className="grid gap-3 border-b border-border py-10 md:grid-cols-[13rem_1fr] md:gap-10"
            >
              <p className="text-[15px] font-medium text-muted-foreground md:pt-1.5">{exp.period}</p>
              <article>
                <h3 className={`type-heading text-[1.5rem] ${isBreak ? "text-muted-foreground" : "text-foreground"}`}>
                  {exp.role}
                </h3>
                <p className="mt-1.5 text-[15px] text-muted-foreground">
                  <span className={isBreak ? "" : "font-semibold text-foreground"}>{exp.org}</span>
                  {exp.detail && <>, {exp.detail}</>}
                </p>

                <ul className="mt-5 max-w-3xl space-y-3">
                  {exp.highlights.map((item) => (
                    <li key={item.text} className="flex gap-3 leading-7 text-muted-foreground">
                      <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      <span>
                        {item.label && <span className="font-semibold text-foreground">{item.label}: </span>}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {exp.tech && (
                  <p className="mt-5 text-[15px] text-muted-foreground">
                    <span className="font-semibold text-foreground">Tools: </span>
                    {exp.tech.join(", ")}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
