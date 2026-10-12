import { useEffect, useRef, useState } from "react";

/** Animates a stat like "2000+" from 0 when it enters the viewport. Non-numeric values render as-is. */
export function CountUp({ value, duration = 1800, className }: { value: string; duration?: number; className?: string }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : 0;
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || !ref.current) return;
    const el = ref.current;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * t);
          setDisplay(`${match[1]}${Math.round(target * (t === 1 ? 1 : eased))}${match[3]}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
