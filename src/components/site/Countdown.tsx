import { useEffect, useState } from "react";

// Opening day of CONCOURS'26 (IST)
const FEST_START = new Date("2026-10-29T00:00:00+05:30").getTime();

const pad = (n: number) => String(n).padStart(2, "0");

function getRemaining() {
  const diff = Math.max(FEST_START - Date.now(), 0);
  return {
    done: diff === 0,
    units: [
      { label: "Days", value: Math.floor(diff / 86_400_000) },
      { label: "Hours", value: Math.floor((diff / 3_600_000) % 24) },
      { label: "Mins", value: Math.floor((diff / 60_000) % 60) },
      { label: "Secs", value: Math.floor((diff / 1000) % 60) },
    ],
  };
}

export function Countdown() {
  const [state, setState] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setState(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (state.done) {
    return (
      <div className="chip chip-red text-xs">
        <span className="live-dot" /> The games are on
      </div>
    );
  }

  return (
    <div className="flex items-stretch gap-2 sm:gap-3" role="timer" aria-label="Countdown to CONCOURS'26">
      {state.units.map((unit, i) => (
        <div key={unit.label} className="flex items-stretch gap-2 sm:gap-3">
          <div className="surface min-w-[64px] sm:min-w-[84px] px-3 py-3 text-center rounded-xl">
            <div className="font-display text-4xl sm:text-5xl text-white tabular-nums">{pad(unit.value)}</div>
            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#c9cbce]/60">{unit.label}</div>
          </div>
          {i < state.units.length - 1 && (
            <div className="hidden sm:flex items-center font-display text-3xl text-[#e01b2e]/70">:</div>
          )}
        </div>
      ))}
    </div>
  );
}
