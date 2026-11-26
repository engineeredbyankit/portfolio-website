import { results } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function ResultsSection() {
  return (
    <Section id="results" title={results.title}>
      <div className="rounded-card bg-surface px-6 py-2 sm:px-8">
        <dl className="grid lg:grid-cols-2 lg:gap-x-12">
          {results.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-0.5 border-t border-border py-4 first:border-t-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 lg:[&:nth-child(2)]:border-t-0"
            >
              <dt className="text-muted-foreground">{item.label}</dt>
              <dd className="font-semibold text-foreground sm:shrink-0 sm:text-right">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
