import type { ReactNode } from "react";
import logoImage from "@/assets/images/IMG_0054.PNG";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  /** Giant outlined word drawn behind the title */
  watermark?: string;
  description?: ReactNode;
  children?: ReactNode;
  showCrest?: boolean;
};

/** Standard top-of-page hero used by every inner page. */
export function PageHero({ eyebrow, title, watermark, description, children, showCrest = true }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stage pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 bg-lines pointer-events-none" aria-hidden />
      {watermark && (
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[18%] font-display font-black text-outline whitespace-nowrap pointer-events-none select-none text-[28vw] md:text-[18vw] opacity-40"
          aria-hidden
        >
          {watermark}
        </div>
      )}
      {showCrest && (
        <img
          src={logoImage}
          alt=""
          aria-hidden
          className="hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2 w-72 opacity-[0.07] animate-float pointer-events-none"
        />
      )}
      {/* red slash */}
      <div
        className="absolute -left-20 bottom-10 h-[3px] w-[45%] bg-gradient-to-r from-transparent via-[#e01b2e] to-transparent -rotate-[4deg] opacity-70"
        aria-hidden
      />

      <div className="relative container max-w-6xl">
        <div className="eyebrow animate-rise">{eyebrow}</div>
        <h1 className="mt-6 font-display font-black text-chrome text-[15vw] sm:text-7xl md:text-8xl lg:text-[8.5rem] animate-rise delay-1">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-base md:text-lg text-[#c9cbce]/80 leading-relaxed animate-rise delay-2">
            {description}
          </p>
        )}
        {children && <div className="mt-9 animate-rise delay-3">{children}</div>}
      </div>
    </section>
  );
}
