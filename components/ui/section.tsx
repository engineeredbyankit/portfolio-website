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
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-32 py-14 sm:py-20 lg:scroll-mt-20">
      <div className="mb-8 max-w-3xl sm:mb-10">
        <h2 id={`${id}-title`} className="type-headline text-[clamp(2rem,4.2vw,2.875rem)] text-foreground">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
