import { useCallback, useEffect, useState } from "react";
import { Trophy, Medal, GraduationCap, Heart, X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

// Import gallery images
import gridImage1 from "@/assets/images/Img-19.jpg";
import gridImage2 from "@/assets/images/DR--16.jpg";
import gridImage3 from "@/assets/images/WhatsApp Image 2025-09-19 at 20.35.31_5fbeae11.jpg";
import gridImage4 from "@/assets/images/AG--6.jpg";
import gridImage5 from "@/assets/images/DR--1.jpg";
import gridImage6 from "@/assets/images/DR--20.jpg";
import gridImage7 from "@/assets/images/DR-1660.jpg";
import gridImage8 from "@/assets/images/IMG__1.jpg";
import gridImage9 from "@/assets/images/IMG__18.jpg";
import gridImage10 from "@/assets/images/IMG__3.jpg";
import gridImage11 from "@/assets/images/IMG__5 (1).jpg";
import gridImage12 from "@/assets/images/IMG__55.jpg";
import gridImage13 from "@/assets/images/IMG_1498.jpg";
import gridImage14 from "@/assets/images/Img-25.jpg";
import gridImage15 from "@/assets/images/JP-16.jpg";
import gridImage16 from "@/assets/images/JP-6.jpg";

// Gallery images array
const galleryImages = [
  gridImage1, gridImage2, gridImage3, gridImage4,
  gridImage5, gridImage6, gridImage7, gridImage8,
  gridImage9, gridImage10, gridImage11, gridImage12,
  gridImage13, gridImage14, gridImage15, gridImage16
];

const stats = [
  { label: "Total Athletes", value: "1800+", icon: Medal },
  { label: "Sports Events", value: "10+", icon: Trophy },
  { label: "Participating Colleges", value: "50+", icon: GraduationCap },
  { label: "Memories Created", value: "∞", icon: Heart },
];

// Varying tile heights give the gallery a masonry rhythm
const tileHeights = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]"];

export default function Concours24() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + galleryImages.length) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Last Year's Glory"
        watermark="2025"
        title={<>CONCOURS<span className="text-signal">'25</span></>}
        description="Relive the incredible moments, amazing performances, and unforgettable memories from CONCOURS'25."
      />

      {/* Stats Section */}
      <section className="pb-8">
        <div className="container max-w-6xl">
          <Reveal className="surface ring-gradient overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.07]">
              {stats.map((stat) => (
                <div key={stat.label} className="group p-6 md:p-8">
                  <stat.icon className="w-6 h-6 text-[#e01b2e] transition-transform duration-300 group-hover:scale-125" />
                  <CountUp value={stat.value} className="mt-5 block font-display font-black text-5xl md:text-6xl text-chrome tabular-nums" />
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c9cbce]/55">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <SectionHeading
            index="01"
            eyebrow="Captured moments from the festival"
            title="Event Gallery"
            action={<span className="chip">{galleryImages.length} Frames</span>}
          />

          <div className="columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4">
            {galleryImages.map((image, i) => (
              <Reveal key={i} delay={(i % 4) * 60} className="mb-3 md:mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative block w-full overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.07] ${tileHeights[i % tileHeights.length]}`}
                  aria-label={`Open memory ${i + 1}`}
                >
                  <div className="img-zoom absolute inset-0">
                    <LazyImage src={image} alt={`Memory ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-white">#{String(i + 1).padStart(2, "0")}</span>
                    <Expand className="w-4 h-4 text-white" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <img
            src={galleryImages[active]}
            alt={`Memory ${active + 1}`}
            className="max-h-[85vh] max-w-full rounded-xl shadow-[0_40px_120px_-20px_rgba(224,27,46,0.5)] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-[#e01b2e] text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#e01b2e] text-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#e01b2e] text-white flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.3em] text-white/70">
            {String(active + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </div>
  );
}
