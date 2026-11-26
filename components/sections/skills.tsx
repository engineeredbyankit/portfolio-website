import { education, recognition, skills } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills and background">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-card bg-surface p-6 sm:p-8">
            <h3 className="type-title text-lg text-foreground">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
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
