import { services } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function ServicesSection() {
  return (
    <Section id="services" title={services.title} intro={services.intro}>
      <ul className="grid border-t border-border md:grid-cols-2">
        {services.items.map((service) => (
          <li
            key={service.title}
            className="border-b border-border py-9 md:odd:pr-10 md:even:border-l md:even:pl-10 lg:odd:pr-14 lg:even:pl-14"
          >
            <h3 className="type-heading text-[1.65rem] text-foreground">{service.title}</h3>
            <p className="mt-3 max-w-[34rem] leading-7 text-muted-foreground">{service.summary}</p>
            <p className="mt-6 text-[15px] font-semibold text-foreground">You get</p>
            <ul className="mt-3 space-y-2.5">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-6 text-foreground">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fill" />
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
