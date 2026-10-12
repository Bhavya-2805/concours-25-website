import { Fragment } from "react";

/** Infinite horizontal ticker — content is duplicated so the loop is seamless. */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const track = (hidden?: boolean) => (
    <div className="marquee-track" aria-hidden={hidden}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <span className="font-display text-3xl md:text-5xl text-white/90 whitespace-nowrap">{item}</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7 shrink-0 text-[#e01b2e]" fill="currentColor" aria-hidden>
            <path d="M12 0l3 9h9l-7.5 5.5L19 24l-7-5.5L5 24l2.5-9.5L0 9h9z" />
          </svg>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={`marquee py-5 ${className}`}>
      {track()}
      {track(true)}
    </div>
  );
}
