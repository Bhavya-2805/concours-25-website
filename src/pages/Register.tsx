import { ArrowRight, Users, Clock, Ticket, Icon, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { soccerPitch } from "@lucide/lab";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import type { ReactNode } from "react";

type PassCardProps = {
  tone: "red" | "silver";
  code: string;
  icon: ReactNode;
  title: string;
  description: string;
  featuresTitle: string;
  features: string[];
  meta: { icon: ReactNode; label: string }[];
  action: ReactNode;
  delay?: number;
};

function PassCard({ tone, code, icon, title, description, featuresTitle, features, meta, action, delay }: PassCardProps) {
  const red = tone === "red";
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full surface surface-hover overflow-hidden flex flex-col">
        {/* Glow */}
        <div
          className={`absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] transition-opacity duration-500 opacity-40 group-hover:opacity-80 ${
            red ? "bg-[#e01b2e]" : "bg-[#c9cbce]/40"
          }`}
          aria-hidden
        />

        {/* Ticket header */}
        <div className="relative p-7 md:p-9">
          <div className="flex items-start justify-between">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                red
                  ? "bg-gradient-to-br from-[#f0283b] to-[#840c15] text-white shadow-[0_10px_30px_-8px_rgba(224,27,46,0.8)]"
                  : "bg-gradient-to-b from-white to-[#a9acaf] text-[#0a0203] shadow-[0_10px_30px_-8px_rgba(201,203,206,0.6)]"
              }`}
            >
              {icon}
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9cbce]/45">{code}</span>
          </div>
          <h2 className={`mt-8 font-display font-black text-5xl md:text-6xl ${red ? "text-white" : "text-chrome"}`}>{title}</h2>
          <p className="mt-4 text-[#c9cbce]/75 leading-relaxed">{description}</p>
        </div>

        {/* Perforation */}
        <div className="relative flex items-center" aria-hidden>
          <span className="absolute -left-4 w-8 h-8 rounded-full bg-[#0a0203] border border-white/[0.07]" />
          <span className="flex-1 mx-6 border-t-2 border-dashed border-white/10" />
          <span className="absolute -right-4 w-8 h-8 rounded-full bg-[#0a0203] border border-white/[0.07]" />
        </div>

        {/* Features */}
        <div className="relative p-7 md:p-9 flex-1 flex flex-col">
          <div className={`eyebrow ${red ? "" : "before:!bg-[#c9cbce] before:!shadow-none"}`}>{featuresTitle}</div>
          <ul className="mt-5 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[#e4e6e8]/85">
                <span
                  className={`mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center ${
                    red ? "bg-[#e01b2e]/15 text-[#ff6b78]" : "bg-white/10 text-white"
                  }`}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {meta.map((m) => (
              <span key={m.label} className="chip normal-case tracking-normal font-sans text-xs">
                {m.icon}
                {m.label}
              </span>
            ))}
          </div>

          <div className="pt-8 mt-auto">{action}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Join The Competition"
        watermark="ENTER"
        title={<>Register <span className="text-signal">Now</span></>}
        description="Choose your path to glory. Register for sports competitions or showcase your talent at our events."
      />

      <section className="relative pb-24 -mt-6">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Sports Registration */}
          <PassCard
            tone="red"
            code="PASS · 01 / ATHLETE"
            icon={<Icon iconNode={soccerPitch} className="w-8 h-8" />}
            title="Sports Registration"
            description="Compete in 10+ sports categories and prove your athletic prowess against the best talent from across the nation."
            featuresTitle="Premium Sports Experience"
            features={[
              "Access to all 10+ sports events",
              "Exposure to the best talent from across different colleges",
              "Chance to win exciting prizes & championship trophies",
              "Official certificate of participation",
            ]}
            meta={[
              { icon: <Users className="w-3.5 h-3.5 text-[#e01b2e]" />, label: "2000+ Athletes Expected" },
              { icon: <Clock className="w-3.5 h-3.5 text-[#e01b2e]" />, label: "Multi-day Event" },
            ]}
            action={
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/sports-events');
                }}
                className="btn btn-primary w-full h-14"
              >
                Register for Sports
                <ArrowRight className="arrow w-5 h-5" />
              </Link>
            }
          />

          {/* Event Passes Registration */}
          <PassCard
            tone="silver"
            code="PASS · 02 / SPECTATOR"
            delay={120}
            icon={<Ticket className="w-8 h-8" />}
            title="CONCOURS Pass"
            description="Get the exclusive pass to Concours and experience glory, victory, and memories that will last a lifetime."
            featuresTitle="What Is Included"
            features={[
              "4 day exclusive festival pass",
              "Stand Up Comedy Night entry",
              "Electrifying DJ Night entry",
              "Access to all thrilling sports matches",
            ]}
            meta={[
              { icon: <Users className="w-3.5 h-3.5" />, label: "Limited Slots" },
              { icon: <Clock className="w-3.5 h-3.5" />, label: "Evening Shows" },
            ]}
            action={
              <Link to="/register" className="btn btn-chrome w-full h-14">
                Early Bird Coming Soon
              </Link>
            }
          />
        </div>
      </section>
    </div>
  );
}
