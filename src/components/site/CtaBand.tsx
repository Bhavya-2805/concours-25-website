import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type CtaBandProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
};

/** Closing call-to-action panel with a diagonal-striped crimson backdrop. */
export function CtaBand({ eyebrow = "Final Whistle", title, description, icon, children }: CtaBandProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container max-w-6xl">
        <Reveal className="relative overflow-hidden rounded-3xl clip-corner">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9b0f1b] via-[#5a0910] to-[#1a0305]" aria-hidden />
          <div className="absolute inset-0 bg-stripes opacity-70" aria-hidden />
          <div
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#e01b2e]/40 blur-[100px]"
            aria-hidden
          />
          <div className="relative px-6 py-14 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                {icon && (
                  <div className="w-12 h-12 rounded-xl bg-black/30 border border-white/15 flex items-center justify-center text-white">
                    {icon}
                  </div>
                )}
                <span className="eyebrow text-white/80">{eyebrow}</span>
              </div>
              <h2 className="mt-6 font-display font-black text-5xl md:text-7xl text-white">{title}</h2>
              {description && <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed">{description}</p>}
            </div>
            {children && <div className="flex flex-wrap gap-4 shrink-0">{children}</div>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
