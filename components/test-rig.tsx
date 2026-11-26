import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { verification } from "@/lib/content";

/**
 * The hero's one moving piece: the three checks every task goes through,
 * lighting up once in order. It always uses the dark espresso palette (the
 * "dark" class scopes the colour tokens), so it reads like a terminal in
 * both themes. Pure CSS, so it works without JavaScript, and it shows the
 * final state straight away when reduced motion is on.
 */
export function TestRig() {
  return (
    <figure className="dark rounded-card bg-background p-6 text-foreground sm:p-7">
      <figcaption className="text-lg font-semibold">{verification.title}</figcaption>
      <p className="mt-3 inline-flex rounded-lg bg-surface-high px-3 py-1.5 font-mono text-[13px] leading-5 text-muted-foreground">
        <span aria-hidden="true">$&nbsp;</span>
        {verification.command}
      </p>

      <ol className="mt-4">
        {verification.steps.map((step, index) => {
          const passes = step.result === "pass";
          const style = {
            "--i": index,
            "--lamp": passes ? "var(--pass)" : "var(--fail)",
          } as CSSProperties;
          return (
            <li
              key={step.label}
              className="rig-row flex items-center gap-4 border-t border-border py-3.5 first:border-t-0"
              style={style}
            >
              <span className="rig-lamp" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-snug">{step.label}</span>
                <span className="block text-sm text-muted-foreground">{step.note}</span>
              </span>
              <span
                className={`rig-result shrink-0 rounded-full px-3 py-1 text-[13px] font-semibold ${
                  passes ? "bg-pass-soft text-pass" : "bg-fail-soft text-fail"
                }`}
              >
                {passes ? "Passes" : "Fails"}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="rig-verdict mt-3 flex items-center gap-2.5 rounded-2xl bg-honey-soft px-4 py-3.5 text-[15px] font-semibold text-on-honey-soft">
        <Check className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
        {verification.verdict}
      </p>
    </figure>
  );
}
