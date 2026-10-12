import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({ index, eyebrow, title, description, align = "left", action }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-12 md:mb-16 flex flex-col gap-6 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "flex flex-col items-center" : ""}>
        <div className="flex items-center gap-4">
          {index && <span className="font-mono text-xs text-[#e01b2e] tracking-widest">{index}</span>}
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="mt-5 font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-chrome">{title}</h2>
        {description && (
          <p className={`mt-5 text-base md:text-lg text-[#c9cbce]/75 leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
