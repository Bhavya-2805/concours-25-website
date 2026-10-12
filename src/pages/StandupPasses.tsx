import { Mic, Clock, Star, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export default function StandupPasses() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Comedy Night Special"
        watermark="LAUGH"
        title={<>Stand-Up <span className="text-signal">Passes</span></>}
        description="Get ready for an evening filled with laughter, entertainment, and amazing stand-up performances."
      />

      <section className="pb-24">
        <div className="container max-w-5xl">
          {/* Main Card */}
          <Reveal className="surface ring-gradient overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative overflow-hidden flex items-center justify-center p-12 min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8121f] via-[#6d0c13] to-[#1a0305]" aria-hidden />
                <div className="absolute inset-0 bg-stripes opacity-60" aria-hidden />
                <div className="relative text-center text-white">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                    <div className="relative w-32 h-32 bg-black/30 border border-white/20 rounded-full flex items-center justify-center">
                      <Mic className="w-14 h-14" />
                    </div>
                  </div>
                  <h2 className="font-display font-black text-5xl">Comedy Night</h2>
                  <p className="mt-2 text-lg text-white/80">An evening of pure entertainment</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 space-y-7">
                <div>
                  <h3 className="font-display font-black text-4xl text-chrome">Passes Available Soon!</h3>
                  <p className="mt-3 text-[#c9cbce]/70">
                    We're working hard to bring you an amazing stand-up comedy experience.
                    Passes will be available for purchase very soon.
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-4">
                  {[
                    { icon: Clock, title: "Event Duration", text: "2-3 Hours of Entertainment" },
                    { icon: Star, title: "What to Expect", text: "Professional comedians & student performers" },
                    { icon: Mic, title: "Open Mic", text: "Opportunity for students to perform" },
                  ].map((d) => (
                    <div key={d.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#e01b2e]/10 border border-[#e01b2e]/25 flex items-center justify-center">
                        <d.icon className="w-4 h-4 text-[#e01b2e]" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{d.title}</div>
                        <div className="text-sm text-[#c9cbce]/60">{d.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <button type="button" className="btn btn-chrome w-full" disabled>
                    Passes Coming Soon
                    <ArrowRight className="arrow w-5 h-5" />
                  </button>
                  <button type="button" className="btn btn-ghost w-full">
                    Get Notified
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                    onClick={() => {
                      window.open('https://PLACEHOLDER_GOOGLE_FORM_URL', '_blank');
                      console.log('StandupPasses registration button clicked');
                    }}
                  >
                    Register for Comedy Night
                  </button>
                </div>

                {/* Info Box */}
                <div className="rounded-xl p-4 border border-white/10 bg-white/[0.03]">
                  <p className="text-sm text-[#c9cbce]/70">
                    <strong className="text-white">Stay tuned!</strong> Follow our social media channels
                    or contact the team for updates on pass availability and pricing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Information */}
          <Reveal className="text-center mt-14">
            <p className="text-[#c9cbce]/70 mb-4">Have questions about the comedy night or passes?</p>
            <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-[#c9cbce]/70">
              <p><strong className="text-white">Contact:</strong> Ishan Thakkar (Convener)</p>
              <p><strong className="text-white">Phone:</strong> +91 76220 82220</p>
              <p><strong className="text-white">Email:</strong> concours@daiict.ac.in</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
