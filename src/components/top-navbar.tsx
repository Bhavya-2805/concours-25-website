import { useState } from "react";
import { Trophy, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/images/IMG_0054.PNG";

const navigationItems = [
  { title: "Home", url: "/" },
  { title: "Register", url: "/register" },
  { title: "Sports Events", url: "/sports-events" },
  /*{ title: "Fun Events", url: "/fun-events" },*/
  /*{ title: "Team DA-IICT", url:"" "/team-daiict" },*/
  { title: "Sponsors", url: "" /*"/sponsors"*/ },
  { title: "CONCOURS'25", url: "/concours-24" },
  { title: "Team Concours", url: "/register" },
];

export function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (url: string) => location.pathname === url;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0203]/90 backdrop-blur-md border-b border-[#918d8c]/25 shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Section - Left aligned */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src={logoImage}
                alt="Logo"
                className="w-10 h-10 object-contain filter drop-shadow-[0_0_8px_rgba(132,12,21,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(151,150,148,0.8)] transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <div className="concours-font text-xl tracking-widest group-hover:heading-metallic-silver transition-colors" style={{background: 'linear-gradient(135deg, #c8cacc 0%, #f0f2f4 40%, #a0a2a4 70%, #707274 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', filter: 'drop-shadow(0 0 8px rgba(140,142,144,0.5))'}}>
                CONCOURS
              </div>
              <div className="text-xs text-[#8c8e90] -mt-1 font-medium tracking-wide">
                Where Glory Lasts Forever
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Clean metallic & crimson highlight */}
          <div className="hidden lg:flex items-center space-x-1.5 ml-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  isActive(item.url)
                    ? "bg-gradient-to-r from-[#840c15] to-[#6d0c13] text-white border-[#840c15]/60 shadow-[0_0_18px_rgba(132,12,21,0.6)]"
                    : "border-transparent text-[#979694] hover:text-white hover:bg-[#330609]/70 hover:border-[#918d8c]/25"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-[#979694] hover:text-white hover:bg-[#330609]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#918d8c]/20 bg-[#0e0204]/98 backdrop-blur-lg shadow-2xl">
            <div className="px-3 pt-2 pb-4 space-y-1.5">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    isActive(item.url)
                      ? "bg-gradient-to-r from-[#840c15] to-[#6d0c13] text-white border-[#840c15]/60 shadow-[0_0_16px_rgba(132,12,21,0.5)]"
                      : "border-transparent text-[#979694] hover:text-white hover:bg-[#330609]/70 hover:border-[#918d8c]/25"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
