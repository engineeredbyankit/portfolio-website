import { Check } from "lucide-react";
import { services } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function ServicesSection() {
  return (
    <Section id="services" title={services.title} intro={services.intro}>
      <ul className="grid gap-4 md:grid-cols-2">
        {services.items.map((service) => (
          <li key={service.title} className="rounded-card bg-surface p-6 sm:p-8">
            <h3 className="type-title text-[1.375rem] text-foreground">{service.title}</h3>
            <p className="mt-2.5 leading-7 text-muted-foreground">{service.summary}</p>
            <p className="mt-6 text-sm font-semibold text-foreground">You get</p>
            <ul className="mt-3 space-y-2.5">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-6 text-foreground">
                  <Check className="mt-[3px] h-[18px] w-[18px] shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
