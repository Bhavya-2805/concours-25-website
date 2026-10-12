import { Music, Gamepad2, Users, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import funImage from "@/assets/images/DR--1.jpg";

const funEvents = [
  { name: "DJ Night", icon: Music, description: "Dance the night away with electrifying beats and amazing performances." },
  { name: "3v3 Basketball", icon: Users, description: "Fast-paced basketball action in a compact format." },
  { name: "Futsal", icon: Star, description: "Indoor football with high energy and quick gameplay." },
  { name: "Gaming Tournament", icon: Gamepad2, description: "Compete in popular esports titles and win exciting prizes." },
  { name: "Entertainment Zone", icon: Star, description: "Fun activities, games, and interactive experiences." },
  { name: "Food Stalls", icon: Star, description: "Delicious food from various cuisines to fuel your energy." },
];

export default function FunEvents() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Beyond Sports"
        watermark="VIBES"
        title={<>Fun <span className="text-signal">Events</span></>}
        description="Experience the festival beyond sports with entertainment, food, and unforgettable moments."
      />

      <section className="pb-24">
        <div className="container max-w-6xl">
          {/* Hero Card */}
          <Reveal className="surface ring-gradient overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="chip chip-red w-fit">Special Event</span>
                <h2 className="mt-6 font-display font-black text-5xl text-chrome">The Ultimate Festival Experience</h2>
                <p className="mt-5 text-[#c9cbce]/70 text-lg leading-relaxed">
                  CONCOURS'26 isn't just about sports. It's a complete festival experience with
                  entertainment, music, food, and activities that bring everyone together.
                </p>
              </div>
              <div className="relative min-h-[280px]">
                <img src={funImage} alt="Logo" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#120507] via-transparent to-transparent hidden lg:block" />
              </div>
            </div>
          </Reveal>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {funEvents.map((event, index) => (
              <Reveal key={index} delay={(index % 3) * 80}>
                <div className="group surface surface-hover h-full p-7">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0283b] to-[#840c15] flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(224,27,46,0.8)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <event.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-mono text-xs text-[#c9cbce]/40">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 font-display font-black text-3xl text-white">{event.name}</h3>
                  <p className="mt-3 text-[#c9cbce]/65">{event.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
