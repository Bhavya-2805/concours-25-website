import { Handshake, ArrowRight, Phone, Mail, User, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

// 👇 Import your logos from src/assets (edit the paths/file names yourself)
import titleLogo from "@/assets/sponsors/Avore.jpeg";
import coTitleLogo from "@/assets/sponsors/Gujarat_Tourism.jpeg";
import educationalLogo from "@/assets/sponsors/Eduget_Global.jpeg";
import eventLogo from "@/assets/sponsors/Matrix360.png";
import mediaLogo from "@/assets/sponsors/Hey_Gandhinagar.jpeg";
import silentlyLogo from "@/assets/sponsors/silently.jpeg";
import studyInLogo from "@/assets/sponsors/StudyIn.jpg";
import nempanthLogo from "@/assets/sponsors/Nempanth.png";

// `dark` puts logos that ship on a black background onto a matching tile
const partners = [
  { tier: "Co-Title Sponsor", name: "Gujarat Tourism", logo: coTitleLogo },
  { tier: "Educational Sponsor", name: "Eduget Global", logo: educationalLogo },
  { tier: "Educational Sponsor", name: "StudyIn", logo: studyInLogo },
  { tier: "Event Sponsor", name: "Matrix360", logo: eventLogo },
  { tier: "Event Sponsor", name: "Silently", logo: silentlyLogo, dark: true },
  { tier: "Media Partner", name: "Hey Gandhinagar", logo: mediaLogo },
  { tier: "Creative Partner", name: "Nempanth", logo: nempanthLogo },
];

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Partnership Opportunities"
        watermark="PARTNERS"
        title={<>Our <span className="text-signal">Sponsors</span></>}
        description="Join us as a sponsor and be part of the most exciting sports festival in the region."
      />

      {/* Sponsor Tiers */}
      <section className="pb-8">
        <div className="container max-w-6xl space-y-6 lg:space-y-8">
          {/* Title Sponsor (largest) */}
          <Reveal>
            <div className="group relative surface ring-gradient overflow-hidden">
              <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-[#e01b2e]/30 blur-[110px]" aria-hidden />
              <div className="absolute inset-0 bg-stripes opacity-40" aria-hidden />
              <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-10 p-8 md:p-14">
                <div>
                  <span className="chip chip-red">★ Title Sponsor</span>
                  <h2 className="mt-6 font-display font-black text-7xl md:text-9xl text-chrome">Avore</h2>
                  <a
                    href="https://www.instagram.com/avore.ev?dlrf=amtidHJydnoxcGM3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost mt-8 h-11 px-6 text-xs"
                  >
                    <Instagram className="w-4 h-4" /> @avore.ev
                  </a>
                </div>
                <div className="relative mx-auto">
                  <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" aria-hidden />
                  <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-3xl bg-black ring-1 ring-white/15 p-6 shadow-[0_30px_80px_-20px_rgba(224,27,46,0.6)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                    <img src={titleLogo} alt="Avore" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Other tiers */}
          <div className="flex flex-wrap justify-center gap-5">
            {partners.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 4) * 80}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              >
                <div className="group surface surface-hover h-full p-6 flex flex-col">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#e01b2e]">{p.tier}</div>
                  <div className={`mt-5 aspect-square rounded-2xl p-5 flex items-center justify-center overflow-hidden ${p.dark ? "bg-black ring-1 ring-white/10" : "bg-white"}`}>
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-5 font-display font-extrabold text-2xl text-white">{p.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <CtaBand
        eyebrow="Collaborate"
        icon={<Handshake className="w-6 h-6" />}
        title="Partner With Us"
        description="Join hands with CONCOURS'26 and reach thousands of young, dynamic audiences while supporting sports excellence."
      >
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="btn btn-chrome h-14 px-8">
              Explore Partnership
              <ArrowRight className="arrow w-5 h-5" />
            </button>
          </DialogTrigger>
          <DialogContent className="border-white/10 bg-[#0e0305] rounded-2xl">
            <DialogHeader>
              <span className="eyebrow">Sponsorship</span>
              <DialogTitle className="font-display font-black text-4xl text-chrome pt-2">Partnership Inquiry</DialogTitle>
            </DialogHeader>
            <div className="space-y-5">
              <p className="text-[#c9cbce]/70">
                Interested in sponsoring CONCOURS'26? Contact our team for partnership opportunities.
              </p>
              <div className="space-y-2">
                {[
                  { icon: User, label: "Contact", value: "Neeti Gunsai (Convener)" },
                  { icon: Phone, label: "Phone", value: "+91 63557 70669", href: "tel:+916355770669" },
                  { icon: Mail, label: "Email", value: "concours@daiict.ac.in", href: "mailto:concours@daiict.ac.in" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                    <row.icon className="w-4 h-4 text-[#e01b2e]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9cbce]/50 w-16">{row.label}</span>
                    {row.href ? (
                      <a href={row.href} className="text-white hover:text-[#ff6b78] transition-colors">{row.value}</a>
                    ) : (
                      <span className="text-white">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CtaBand>
    </div>
  );
}
