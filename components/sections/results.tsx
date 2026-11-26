import { results } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function ResultsSection() {
  return (
    <Section id="results" title={results.title}>
      <dl className="grid gap-x-16 md:grid-cols-2">
        {results.items.map((item) => (
          <div key={item.label} className="flex items-baseline gap-3 py-3.5">
            <dt className="text-muted-foreground">{item.label}</dt>
            <span aria-hidden="true" className="leader" />
            <dd className="type-wide shrink-0 text-right font-semibold text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
