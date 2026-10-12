import { Instagram, Youtube, Mail, ArrowUp, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/images/IMG_0054.PNG";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sportsatdaiict?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    external: true,
  },
  { label: "YouTube", href: "http://www.youtube.com/@sportsda-iict1510", icon: Youtube, external: true },
  { label: "Email", href: "mailto:concoursdaiict@gmail.com", icon: Mail, external: false },
];

const quickLinks = [
  { title: "Register", url: "/register" },
  { title: "Sports Events", url: "/sports-events" },
  { title: "E-Sports", url: "/esports" },
  { title: "Athletics", url: "/athletics" },
  { title: "Sponsors", url: "/sponsors" },
  { title: "CONCOURS'25", url: "/concours-24" },
  { title: "Team Concours", url: "/team-concours" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#070102]">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e01b2e] to-transparent"
        aria-hidden
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-80 bg-[#840c15]/20 blur-[120px]" aria-hidden />

      <div className="relative container max-w-7xl pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="CONCOURS crest" className="w-14 h-14 object-contain" />
              <div>
                <div className="font-display font-black text-3xl text-chrome">CONCOURS</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#c9cbce]/55">
                  Where Glory Lasts Forever
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-[#c9cbce]/60 leading-relaxed max-w-sm">
              The annual inter-college sports festival of Dhirubhai Ambani University — four days of competition, energy and glory.
            </p>
            <h3 className="mt-8 eyebrow">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#c9cbce] hover:text-white hover:border-[#e01b2e] hover:bg-[#e01b2e]/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow">Contact Information</h3>
            <ul className="mt-6 space-y-5">
              <li>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9cbce]/50">Convener:</div>
                <a href="tel:+916355770669" className="mt-1 flex items-center gap-2 text-white hover:text-[#ff6b78] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#e01b2e]" /> Neeti Gunsai - 63557 70669
                </a>
              </li>
              <li>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9cbce]/50">Dy. Convener:</div>
                <a href="tel:+918780132145" className="mt-1 flex items-center gap-2 text-white hover:text-[#ff6b78] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#e01b2e]" /> Kush Patel - 87801 32145
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow">Address</h3>
            <div className="mt-6 flex gap-3 text-sm text-[#c9cbce]/75 leading-relaxed">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#e01b2e]" />
              <div className="space-y-1">
                <p>Dhirubhai Ambani Institute of Information and Communication Technology</p>
                <p>Near Indroda Circle, Gandhinagar - 382007</p>
                <p>Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.url} className="text-sm text-[#c9cbce]/75 hover:text-white hover:translate-x-1 inline-block transition-all">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div
          className="mt-20 font-display font-black text-outline text-center leading-none select-none text-[22vw] lg:text-[15rem]"
          aria-hidden
        >
          CONCOURS
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9cbce]/50">© CONCOURS. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#c9cbce]/60 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#e01b2e] group-hover:bg-[#e01b2e] transition-all">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
