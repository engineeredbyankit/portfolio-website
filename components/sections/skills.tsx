import { education, recognition, skills } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills and background">
      <div className="rounded-card bg-surface px-6 py-2 sm:px-8">
        {skills.map((group) => (
          <div
            key={group.category}
            className="border-t border-border py-5 first:border-t-0 md:grid md:grid-cols-[13rem_1fr] md:items-start md:gap-8"
          >
            <h3 className="type-title text-lg text-foreground md:pt-1">{group.category}</h3>
            <ul aria-label={group.category} className="mt-3 flex flex-wrap gap-2 md:mt-0">
              {group.items.map((item) => (
                <li key={item} className="chip border-transparent bg-surface-high">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-card border border-border p-6 sm:p-7">
          <h3 className="type-title text-lg text-foreground">{education.degree}</h3>
          <p className="mt-1.5 text-muted-foreground">
            {education.school}, {education.period}
          </p>
        </div>
        {recognition.map((item) => (
          <div key={item.title} className="rounded-card border border-border p-6 sm:p-7">
            <h3 className="type-title text-lg text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
