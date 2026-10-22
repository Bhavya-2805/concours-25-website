import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Instagram, Youtube, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/images/IMG_0054.PNG";

const navigationItems = [
  { title: "Home", url: "/" },
  { title: "Register", url: "/register" },
  { title: "Sports Events", url: "/sports-events" },
  /*{ title: "Fun Events", url: "/fun-events" },*/
  /*{ title: "Team DA-IICT", url:"" "/team-daiict" },*/
  { title: "Sponsors", url: "/sponsors" },
  { title: "CONCOURS'25", url: "/concours-24" },
  { title: "Team Concours", url: "/team-concours" },
];

export function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const activeTitle = navigationItems.find((item) => item.url === location.pathname)?.title;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3">
        <div
          className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${scrolled || isMobileMenuOpen
              ? "bg-[#0a0203]/75 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]"
              : "bg-transparent border border-transparent"
            }`}
        >
          <div className="flex items-center justify-between h-16 pl-3 pr-2 sm:pl-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="CONCOURS home">
              <img
                src={logoImage}
                alt="Logo"
                className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 drop-shadow-[0_0_12px_rgba(224,27,46,0.55)]"
              />
              <div className="leading-none">
                <div className="font-display font-black text-2xl text-chrome tracking-wide">
                  CONCOURS<span className="text-signal">'26</span>
                </div>
                <div className="hidden sm:block mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#c9cbce]/55">
                  Where Glory Lasts Forever
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => {
                const active = item.title === activeTitle;
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${active ? "text-white" : "text-[#c9cbce]/65 hover:text-white"
                      }`}
                  >
                    {item.title}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-[2px] bg-[#e01b2e] shadow-[0_0_10px_#e01b2e] origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Link to="/register" className="hidden sm:inline-flex btn btn-primary h-10 px-5 text-xs">
                Register <ArrowRight className="arrow w-4 h-4" />
              </Link>
              <button
                type="button"
                className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center text-white bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#0a0203]/97 backdrop-blur-2xl transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="absolute inset-0 bg-stage opacity-80" aria-hidden />
        <div className="relative h-full flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto">
          <ul className="space-y-1">
            {navigationItems.map((item, i) => {
              const active = item.title === activeTitle;
              return (
                <li
                  key={item.title}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${80 + i * 50}ms` : "0ms",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "none" : "translateY(16px)",
                  }}
                >
                  <Link
                    to={item.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-2.5 border-b border-white/[0.06]"
                  >
                    <span className="font-mono text-xs text-[#e01b2e]">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={`font-display font-black text-5xl ${active ? "text-chrome" : "text-white/70 group-hover:text-white"
                        } transition-colors`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex items-center justify-between">
            <Link to="/register" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Register Now <ArrowRight className="arrow w-4 h-4" />
            </Link>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/sportsatdaiict?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/80"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://www.youtube.com/@sportsda-iict1510"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/80"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:daiictconcours@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/80"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
