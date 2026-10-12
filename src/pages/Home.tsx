import { Trophy, ArrowRight, Play, Users, Target, Calendar, GraduationCap, Icon, MapPin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-stadium.jpg";
import logoImage from "@/assets/images/IMG_0054.PNG";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { soccerPitch } from "@lucide/lab";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { Countdown } from "@/components/site/Countdown";
import { Marquee } from "@/components/site/Marquee";
import { SectionHeading } from "@/components/site/SectionHeading";

// Import grid images
import gridImage1 from "@/assets/images/Img-19.jpg";
import gridImage2 from "@/assets/images/DR--16.jpg";
import gridImage3 from "@/assets/images/WhatsApp Image 2025-09-19 at 20.35.31_5fbeae11.jpg";
import gridImage4 from "@/assets/images/AG--6.jpg";

const VIDEO_ID = "dEejqaG3w7g";
const VIDEO_PARAMS =
  "rel=0&modestbranding=1&hd=1&vq=hd1080&fs=1&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=1&disablekb=0&enablejsapi=1";

const tickerItems = [
  "Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Table Tennis",
  "Tennis", "Chess", "Carrom", "Athletics", "Pickleball", "E-Sports",
];

export default function Home() {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { label: "Sports Events", value: "10+", icon: "soccerPitch" },
    { label: "Expected Athletes", value: "2000+", icon: Users },
    { label: "Participating Colleges", value: "50+", icon: GraduationCap },
  ] as const;

  // Grid image click handlers
  const handleGridImageClick = (imageType: string) => {
    switch (imageType) {
      case 'sports-events':
        navigate('/sports-events');
        break;
      case 'athletes':
        navigate('/athletes');
        break;
      case 'trophy-awards':
        navigate('/trophy-awards');
        break;
      case 'schedule':
        navigate('/schedule');
        break;
      default:
        console.log(`Clicked on ${imageType}`);
    }
  };

  const gridTiles = [
    { key: "sports-events", src: gridImage1, alt: "Sports Event 1", label: "Sports Events", icon: Target, className: "row-span-2" },
    { key: "athletes", src: gridImage2, alt: "Athletes", label: "Athletes", icon: Users, className: "" },
    { key: "trophy-awards", src: gridImage3, alt: "Trophy & Awards", label: "Trophies & Honors", icon: Trophy, className: "" },
    { key: "schedule", src: gridImage4, alt: "Schedule & Events", label: "Schedule & Events", icon: Calendar, className: "col-span-2", position: "center 30%" },
  ];

  return (
    <div className="min-h-screen">
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background: stadium photo, desaturated and washed in crimson */}
        <div className="absolute inset-0" aria-hidden>
          <img src={heroImage} alt="" className="w-full h-full object-cover grayscale contrast-125 brightness-[0.55] scale-105" />
          <div className="absolute inset-0 bg-[#840c15] mix-blend-multiply opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(224,27,46,0.35),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0203]/60 via-[#0a0203]/30 to-[#0a0203]" />
          <div className="absolute inset-0 bg-lines opacity-70" />
        </div>

        {/* Diagonal light beams */}
        <div className="absolute -top-1/4 left-[12%] w-24 h-[150%] bg-gradient-to-b from-white/[0.07] to-transparent rotate-[18deg] blur-xl" aria-hidden />
        <div className="absolute -top-1/4 right-[18%] w-40 h-[150%] bg-gradient-to-b from-[#e01b2e]/[0.12] to-transparent -rotate-[16deg] blur-2xl" aria-hidden />

        <div className="relative z-10 flex-1 flex items-center container max-w-7xl pt-36 lg:pt-28 pb-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-6 items-center w-full">
            {/* Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 animate-rise">
                <span className="chip chip-red">
                  <span className="live-dot" /> 29th Oct – 1st Nov, 2026
                </span>
                <span className="chip">
                  <MapPin className="w-3 h-3" /> DA-IICT, Gandhinagar
                </span>
              </div>

              <h1 className="mt-7 font-display font-black leading-[0.8] animate-rise delay-1">
                <span className="block text-chrome text-[23vw] sm:text-[9.5rem] lg:text-[11rem] xl:text-[13rem] drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                  CONCOURS
                </span>
              </h1>

              <h2 className="mt-4 flex items-center justify-center lg:justify-start gap-4 font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white animate-rise delay-2">
                <span className="hidden sm:block h-[3px] w-12 bg-[#e01b2e] shadow-[0_0_14px_#e01b2e]" />
                WHERE GLORY <span className="text-signal">LASTS FOREVER</span>
              </h2>

              <p className="mt-7 text-base md:text-xl text-[#e4e6e8]/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-rise delay-3">
                The ultimate sports festival at Dhirubhai Ambani University.
                Experience the thrill, embrace the competition, and create memories that last forever.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-rise delay-4">
                <button
                  type="button"
                  className="btn btn-primary h-14 px-10 text-base w-full sm:w-auto"
                  onClick={() => navigate('/register')}
                >
                  REGISTER NOW
                  <ArrowRight className="arrow w-5 h-5" />
                </button>
                <a href="#aftermovie" className="btn btn-ghost h-14 px-8 w-full sm:w-auto">
                  <Play className="w-4 h-4 fill-current" /> Watch Aftermovie
                </a>
              </div>
            </div>

            {/* Crest */}
            <div className="order-1 lg:order-2 flex justify-center animate-rise">
              <div className="relative">
                <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-[#e01b2e]/40 blur-[90px]" aria-hidden />
                <svg viewBox="0 0 200 200" className="absolute inset-[-14%] w-[128%] h-[128%] animate-[spin_40s_linear_infinite] opacity-60" aria-hidden>
                  <defs>
                    <path id="crest-ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
                  </defs>
                  <text className="font-mono" fontSize="8.5" letterSpacing="5" fill="#c9cbce">
                    <textPath href="#crest-ring">CONCOURS'26 • WHERE GLORY LASTS FOREVER • DA-IICT •</textPath>
                  </text>
                </svg>
                <img
                  src={logoImage}
                  alt="Concours Crest Logo"
                  className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain animate-glow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Countdown strip */}
        <div className="relative z-10 container max-w-7xl pb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <span className="eyebrow">Kick-off in</span>
            </div>
            <Countdown />
            <a href="#about" className="hidden md:flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#c9cbce]/60 hover:text-white transition-colors">
              Scroll <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================ TICKER ============================ */}
      <div className="relative z-10 -my-2 overflow-hidden">
        <div className="-rotate-[1.5deg] scale-[1.03] bg-gradient-to-r from-[#840c15] via-[#c8121f] to-[#840c15] border-y border-white/10 shadow-[0_20px_60px_-20px_rgba(224,27,46,0.7)]">
          <Marquee items={tickerItems} />
        </div>
      </div>

      {/* ============================ ABOUT ============================ */}
      <section id="about" className="relative py-24 md:py-32 bg-stage scroll-mt-24">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text Content */}
            <div>
              <SectionHeading index="01" eyebrow="About CONCOURS" title={<>The Ultimate<br />Sports Festival</>} />
              <Reveal delay={100}>
                <p className="text-lg md:text-xl text-[#e4e6e8]/80 mb-6 leading-relaxed">
                  CONCOURS is more than just a sports festival – it's where champions are born,
                  legends are made, and glory becomes eternal. Join us for an unforgettable journey
                  of competition, sportsmanship, and pure athletic excellence.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-[#c9cbce]/65 leading-relaxed">
                  From basketball courts to football fields, from chess boards to marathon tracks,
                  CONCOURS brings together the finest athletes from across the nation to compete
                  in the spirit of true sportsmanship.
                </p>
              </Reveal>
            </div>

            {/* Image bento grid */}
            <div className="grid grid-cols-2 auto-rows-[160px] sm:auto-rows-[200px] gap-3 sm:gap-4">
              {gridTiles.map((tile, i) => (
                <Reveal key={tile.key} delay={i * 90} className={tile.className}>
                  <button
                    type="button"
                    onClick={() => handleGridImageClick(tile.key)}
                    className="group relative w-full h-full overflow-hidden rounded-2xl border border-white/10 text-left"
                  >
                    <div className="img-zoom absolute inset-0">
                      <LazyImage
                        src={tile.src}
                        alt={tile.alt}
                        className="w-full h-full object-cover"
                        style={tile.position ? { objectPosition: tile.position } : undefined}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-[#e01b2e]/0 group-hover:bg-[#e01b2e]/20 mix-blend-multiply transition-colors duration-500" />
                    <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                      <div>
                        <tile.icon className="w-5 h-5 text-[#e01b2e] mb-2" />
                        <p className="font-display font-bold text-xl sm:text-2xl text-white">{tile.label}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stats scoreboard */}
          <Reveal className="mt-24 surface ring-gradient overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
              {stats.map((stat) => (
                <div key={stat.label} className="group relative p-8 md:p-10 flex items-center gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#e01b2e]/10 border border-[#e01b2e]/30 flex items-center justify-center text-[#e01b2e] group-hover:bg-[#e01b2e] group-hover:text-white transition-colors duration-300">
                    {stat.icon === "soccerPitch" ? (
                      <Icon iconNode={soccerPitch} className="w-7 h-7" />
                    ) : (
                      <stat.icon className="w-7 h-7" />
                    )}
                  </div>
                  <div>
                    <CountUp value={stat.value} className="block font-display font-black text-6xl md:text-7xl text-chrome tabular-nums" />
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#c9cbce]/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ AFTERMOVIE ============================ */}
      <section id="aftermovie" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0" aria-hidden>
          <img src={heroImage} alt="" className="w-full h-full object-cover grayscale opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0203] via-[#330609]/80 to-[#0a0203]" />
        </div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-outline-red text-[30vw] leading-none opacity-30 select-none pointer-events-none"
          aria-hidden
        >
          REPLAY
        </div>

        <div className="relative container max-w-5xl">
          <SectionHeading
            index="02"
            align="center"
            eyebrow="Relive The Moments"
            title="THE AFTERMOVIE - CONCOURS"
            description="Experience the energy, passion, and unforgettable moments from our incredible festival."
          />

          <Reveal className="relative">
            <div className="absolute -inset-4 bg-[#e01b2e]/25 blur-3xl rounded-[2rem]" aria-hidden />
            <div className="relative aspect-video overflow-hidden rounded-2xl md:rounded-3xl ring-gradient bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,1)]">
              {isVideoPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&${VIDEO_PARAMS}`}
                  title="CONCOURS 2024 Aftermovie"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="group absolute inset-0 w-full h-full"
                  aria-label="Play CONCOURS Aftermovie"
                >
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    alt="CONCOURS Aftermovie Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 group-hover:via-black/10 transition-colors duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute w-28 h-28 rounded-full bg-[#e01b2e]/40 animate-ping" />
                    <span className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#f0283b] to-[#840c15] border border-white/30 flex items-center justify-center shadow-[0_0_60px_rgba(224,27,46,0.9)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-white" />
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 inset-x-0 p-5 md:p-8 flex items-end justify-between text-left">
                    <div>
                      <div className="font-display font-black text-2xl md:text-4xl text-white">CONCOURS Aftermovie</div>
                      <div className="mt-1 hidden sm:block text-sm text-[#c9cbce]/80">Click to watch the highlights from the incredible festival</div>
                    </div>
                    <span className="hidden sm:inline-flex chip">
                      <span className="live-dot" /> HD
                    </span>
                  </div>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
