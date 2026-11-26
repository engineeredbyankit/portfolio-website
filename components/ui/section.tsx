import type { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-border py-20 sm:py-24 lg:scroll-mt-20"
    >
      <div className="mb-12 max-w-3xl">
        <h2 id={`${id}-title`} className="type-heading text-[clamp(2rem,4.6vw,3.4rem)] text-foreground">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
