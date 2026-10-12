import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type EventCardProps = {
  index: number;
  to: string;
  title: string;
  category: string;
  /** Emoji or element; falls back to a monogram of the title */
  icon?: ReactNode;
  description?: string;
  meta?: { icon: ReactNode; label: string }[];
  delay?: number;
};

const monogram = (title: string) =>
  title
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function EventCard({ index, to, title, category, icon, description, meta, delay = 0 }: EventCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={to}
        className="group surface surface-hover flex h-full flex-col overflow-hidden p-6 focus-visible:outline-offset-4"
      >
        {/* top row */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#c9cbce]/50 tracking-widest">{String(index).padStart(2, "0")}</span>
          <span className="chip">{category}</span>
        </div>

        {/* icon tile */}
        <div className="relative mt-7 mb-7 flex justify-center">
          <div
            className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-[#e01b2e]/0 blur-2xl transition-all duration-500 group-hover:bg-[#e01b2e]/45"
            aria-hidden
          />
          <div className="relative w-24 h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.01] flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
            {icon ? icon : <span className="font-display font-black text-4xl text-chrome">{monogram(title)}</span>}
          </div>
        </div>

        <h3 className="font-display font-extrabold text-3xl text-white leading-none">{title}</h3>

        <div className="mt-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#ff6b78]">
          <span className="live-dot" />
          Register Now
        </div>

        {meta && meta.length > 0 && (
          <ul className="mt-5 space-y-2">
            {meta.map((m, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-[#c9cbce]/75">
                <span className="text-[#e01b2e] [&_svg]:w-4 [&_svg]:h-4">{m.icon}</span>
                {m.label}
              </li>
            ))}
          </ul>
        )}

        {description && <p className="mt-4 text-sm text-[#c9cbce]/60 leading-relaxed flex-grow">{description}</p>}

        {/* footer bar */}
        <div className="relative mt-6 -mx-6 -mb-6 border-t border-white/[0.07] px-6 py-4 flex items-center justify-between overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#e01b2e] to-[#840c15] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
            aria-hidden
          />
          <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/80 group-hover:text-white">
            View Details
          </span>
          <ArrowUpRight className="relative w-5 h-5 text-[#e01b2e] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </Reveal>
  );
}
