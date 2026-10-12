import { Trophy, Users, Target, Play } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CountUp } from "@/components/site/CountUp";

const teams = [
  { name: "Volleyball (Men)", icon: "🏐" },
  { name: "Volleyball (Women)", icon: "🏐" },
  { name: "Cricket", icon: "🏏" },
  { name: "Basketball (Men)", icon: "🏀" },
  { name: "Basketball (Women)", icon: "🏀" },
  { name: "Football (Men)", icon: "⚽" },
  { name: "Football (Women)", icon: "⚽" },
  { name: "Badminton (Men)", icon: "🏸" },
  { name: "Badminton (Women)", icon: "🏸" },
  { name: "Table Tennis (Men)", icon: "🏓" },
  { name: "Table Tennis (Women)", icon: "🏓" },
  { name: "Tennis", icon: "🎾" },
  { name: "Athletics", icon: "🏃" },
];

const legacy = [
  { icon: Trophy, value: "25+", label: "Championships Won" },
  { icon: Users, value: "200+", label: "Active Athletes" },
  { icon: Target, value: "15+", label: "Sports Categories" },
];

export default function TeamDaiict() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Our Champions"
        watermark="DA-IICT"
        title={<>Team <span className="text-signal">DA-IICT</span></>}
        description="Meet the warriors representing Dhirubhai Ambani Institute of Information and Communication Technology."
      />

      <section className="pb-24">
        <div className="container max-w-6xl space-y-16">
          {/* Jersey Section */}
          <Reveal className="relative overflow-hidden rounded-3xl clip-corner">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8121f] via-[#6d0c13] to-[#1a0305]" aria-hidden />
            <div className="absolute inset-0 bg-stripes opacity-60" aria-hidden />
            <div className="relative p-10 md:p-14 text-center">
              <span className="eyebrow text-white/80">Official Team Jersey</span>
              <p className="mt-6 font-display font-black text-6xl md:text-8xl text-white">Coming Soon</p>
              <p className="text-white/75 mt-6 max-w-2xl mx-auto">
                Wearing the colors of excellence, our teams represent the spirit and determination of DA-IICT in every competition.
              </p>
            </div>
          </Reveal>

          {/* Teams Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teams.map((team, index) => (
              <Reveal key={index} delay={(index % 4) * 60}>
                <div className="group surface surface-hover p-5 text-center h-full">
                  <div className="h-32 rounded-xl bg-gradient-to-br from-[#e01b2e]/20 to-transparent border border-white/[0.06] flex items-center justify-center">
                    <div className="text-6xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">{team.icon}</div>
                  </div>
                  <h3 className="mt-4 font-display font-extrabold text-xl text-white">{team.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Legacy Section */}
          <div>
            <SectionHeading
              align="center"
              eyebrow="Years of dedication"
              title="Our Legacy"
              description="Years of dedication, training, and excellence have built the legacy of Team DA-IICT."
            />
            <Reveal className="surface ring-gradient grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
              {legacy.map((l) => (
                <div key={l.label} className="p-8 text-center">
                  <l.icon className="w-7 h-7 text-[#e01b2e] mx-auto" />
                  <CountUp value={l.value} className="mt-4 block font-display font-black text-6xl text-chrome" />
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c9cbce]/55">{l.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Team Showcase Video Section */}
          <div>
            <SectionHeading align="center" eyebrow="Watch our athletes in action" title="Team Showcase" />
            <Reveal className="relative aspect-video rounded-3xl overflow-hidden ring-gradient bg-stage flex items-center justify-center">
              <div className="absolute inset-0 bg-lines" aria-hidden />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f0283b] to-[#840c15] flex items-center justify-center shadow-[0_0_50px_rgba(224,27,46,0.7)]">
                  <Play className="w-9 h-9 text-white ml-1 fill-white" />
                </div>
                <div>
                  <div className="font-display font-black text-4xl text-white">Team Showcase Video</div>
                  <div className="text-[#c9cbce]/60">Watch our athletes in action</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
