import { education, recognition, skills } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills and background">
      <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="type-wide text-[15px] font-semibold text-foreground">{group.category}</h3>
            <p className="mt-2 leading-8 text-muted-foreground">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-x-14 gap-y-8 border-t border-border pt-10 md:grid-cols-3">
        <div>
          <h3 className="type-wide text-[15px] font-semibold text-foreground">{education.degree}</h3>
          <p className="mt-1 text-muted-foreground">
            {education.school}, {education.period}
          </p>
        </div>
        {recognition.map((item) => (
          <div key={item.title}>
            <h3 className="type-wide text-[15px] font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
