import { Calendar, Clock, Users, Phone, MessageCircle, Trophy, Zap, ArrowRight, Check, Mic } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

// Import images properly
import comedyImage1 from "@/assets/images/IMG__18.jpg";
import pranavImage from "@/assets/images/PranavSharma-web.jpg";
import posterImage from "@/assets/images/nishant-tanwar-poster.jpg";

const PASS_FORM = "https://forms.gle/TtprE8SeUCzSBUy96";

const included = [
  { title: "Sports Matches Access", text: "Complimentary access to sports matches for 4 days of Fest" },
  { title: "Stand-Up Comedy Show", text: "Nishant Tanwar (The RiderOP) live on 29th October" },
  { title: "DJ Night", text: "High-energy music and dance floor" },
  { title: "Fun Activities & Games", text: "Pickleball, Dayro, Arcade games, and more exciting activities" },
];

export default function ComedyDjNight() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Access To All 4 Days"
        watermark="ALL ACCESS"
        title={<>Invite <span className="text-signal">Pass</span></>}
        description="The CONCOURS'26 Invite Pass: all 4 days of sports matches, the Nishant Tanwar stand-up night, the DJ night and fun activities — one pass for the whole festival."
      />

      {/* Pass Purchase Section */}
      <section className="pb-20">
        <div className="container max-w-6xl grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8">
          {/* Pass Information */}
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl clip-corner">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8121f] via-[#6d0c13] to-[#1a0305]" aria-hidden />
              <div className="absolute inset-0 bg-stripes opacity-60" aria-hidden />
              <div className="relative p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-white" />
                    <span className="font-display font-black text-3xl text-white">CONCOURS Invite Pass</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white/60">ADMIT ONE</span>
                </div>

                <div className="mt-10">
                  <div className="font-display font-black text-[7rem] md:text-[9rem] leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    ₹350
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/70"> · Per Person</div>
                </div>

                <div className="my-8 border-t-2 border-dashed border-white/25" aria-hidden />

                <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-5">
                  {[
                    { icon: Clock, label: "Comedy Night", value: "6:00 PM - 9:00 PM" },
                    { icon: Calendar, label: "Festival Dates", value: "29th Oct - 1st Nov, 2026" },
                    { icon: Users, label: "Limited Seats", value: "Book now to secure your spot" },
                  ].map((d) => (
                    <div key={d.label}>
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                        <d.icon className="w-3.5 h-3.5" /> {d.label}
                      </div>
                      <div className="mt-1.5 font-semibold text-white">{d.value}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={PASS_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-chrome w-full h-14 mt-10 lg:mt-auto"
                >
                  Get Your Invite Pass <ArrowRight className="arrow w-5 h-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* What's Included */}
          <Reveal delay={120} className="surface p-8 md:p-10 h-full">
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 text-[#e01b2e]" />
              <h2 className="font-display font-black text-4xl text-chrome">What's Included</h2>
            </div>
            <ul className="mt-8 space-y-3">
              {included.map((item, i) => (
                <li
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-[#e01b2e]/40 hover:bg-[#e01b2e]/[0.05] transition-colors"
                >
                  <span className="font-mono text-xs text-[#e01b2e] pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-[#c9cbce]/65">{item.text}</div>
                  </div>
                  <Check className="w-5 h-5 text-[#e01b2e] shrink-0" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Headliner */}
      <section className="pb-20">
        <div className="container max-w-6xl">
          <Reveal className="surface ring-gradient overflow-hidden">
            <div className="grid md:grid-cols-[minmax(0,380px)_1fr] items-center">
              <img
                src={posterImage}
                alt="Nishant Tanwar live — Thursday 29th October, DAIICT Gandhinagar"
                className="w-full h-full object-cover"
              />
              <div className="p-8 md:p-12">
                <span className="chip chip-red">
                  <Mic className="w-3 h-3" /> Stand-Up Headliner
                </span>
                <h2 className="mt-6 font-display font-black text-6xl md:text-7xl text-chrome">Nishant Tanwar</h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-[#e01b2e]">The RiderOP</p>
                <p className="mt-6 text-[#c9cbce]/75 leading-relaxed">
                  Thursday, 29th October at DA-IICT Gandhinagar — a night of stand-up comedy that is included in your
                  CONCOURS Invite Pass, alongside the DJ night and four days of sports action.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Event Throwback */}
      <section className="py-20 bg-stage">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Glimpses of Past Comedy Nights" title="An Unforgettable Evening" />
            <Reveal delay={100}>
              <p className="text-[#e4e6e8]/80 mb-5 text-lg leading-relaxed">
                CONCOURS'25's comedy night was a massive hit with over 1500 students in attendance.
                The evening featured amazing stand-up performances, incredible DJ sets, and
                non-stop entertainment that had everyone talking for weeks.
              </p>
              <p className="text-[#c9cbce]/65 leading-relaxed">
                From hilarious one-liners to dance-worthy beats, last year's event set the bar high.
                This year, we're bringing even more energy, better performances, and an experience
                you won't forget.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { img: pranavImage, name: "Pranav Sharma", year: "CONCOURS'25", position: "center 55%" },
              { img: comedyImage1, name: "Swati Sachdeva", year: "CONCOURS'24", position: "center 25%" },
            ].map((item, i) => (
              <Reveal key={item.name} delay={i * 120} className={i === 1 ? "mt-12" : ""}>
                <div className="group relative h-72 md:h-96 overflow-hidden rounded-2xl border border-white/10">
                  <div className="img-zoom absolute inset-0">
                    <LazyImage
                      src={item.img}
                      alt={`${item.name} performing stand-up at ${item.year}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.position }}
                      priority={true}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-display font-black text-2xl text-white leading-none">{item.name}</div>
                    <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff6b78]">{item.year}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <SectionHeading align="center" eyebrow="Get In Touch" title="Questions About The Event?" />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Phone, title: "Call Us", value: "+91 97232 04898", sub: "Rutva", href: "tel:+919723204898" },
              { icon: Phone, title: "Call Us", value: "+91 98283 90304", sub: "Rishita", href: "tel:+919828390304" },
              { icon: MessageCircle, title: "Email Us", value: "daiictconcours@gmail.com", sub: "Official CONCOURS Email", href: "mailto:daiictconcours@gmail.com" },
            ].map((c, i) => (
              <Reveal key={c.sub} delay={(i % 2) * 100} className={c.title === "Email Us" ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full" : ""}>
                <a href={c.href} className="group surface surface-hover flex items-center gap-5 p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#e01b2e]/10 border border-[#e01b2e]/30 flex items-center justify-center text-[#e01b2e] group-hover:bg-[#e01b2e] group-hover:text-white transition-colors">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9cbce]/55">{c.title}</div>
                    <div className="mt-1 font-semibold text-white break-all">{c.value}</div>
                    <div className="text-sm text-[#c9cbce]/55">{c.sub}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
