import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { verification } from "@/lib/content";

/**
 * The hero's one moving piece: the three checks every task goes through,
 * lighting up once in order. Pure CSS, so it also works without JavaScript,
 * and it shows the final state straight away when reduced motion is on.
 */
export function TestRig() {
  return (
    <figure className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-7">
      <figcaption className="type-wide text-[15px] font-semibold text-foreground">
        {verification.title}
      </figcaption>
      <p className="mt-1 font-mono text-[13px] text-muted-foreground">
        <span aria-hidden="true">$ </span>
        {verification.command}
      </p>

      <ol className="mt-6 space-y-4">
        {verification.steps.map((step, index) => {
          const passes = step.result === "pass";
          const style = {
            "--i": index,
            "--lamp": passes ? "var(--pass)" : "var(--fail)",
          } as CSSProperties;
          return (
            <li key={step.label} className="rig-row flex items-center gap-4" style={style}>
              <span className="rig-lamp" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-snug text-foreground">{step.label}</span>
                <span className="block text-sm text-muted-foreground">{step.note}</span>
              </span>
              <span
                className={`rig-result shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${
                  passes ? "bg-pass/12 text-pass" : "bg-fail/12 text-fail"
                }`}
              >
                {passes ? "Passes" : "Fails"}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="rig-verdict mt-6 flex items-center gap-2 border-t border-border pt-5 font-semibold text-foreground">
        <Check className="h-5 w-5 text-accent" aria-hidden="true" />
        {verification.verdict}
      </p>
    </figure>
  );
}
