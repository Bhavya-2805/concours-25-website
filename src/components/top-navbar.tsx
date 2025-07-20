import { useState } from "react";
import { Trophy, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { title: "Home", url: "/" },
  { title: "Register", url: "/register" },
  { title: "Sports Events", url: "/sports-events" },
  { title: "Fun Events", url: "/fun-events" },
  { title: "Team DA-IICT", url: "/team-daiict" },
  { title: "Sponsors", url: "/sponsors" },
  { title: "CONCOURS'24", url: "/concours-24" },
  { title: "Team Concours", url: "/team-concours" },
];

export function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (url: string) => location.pathname === url;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Section - Left aligned */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-sports rounded-full flex items-center justify-center trophy-glow">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-sports rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="hidden sm:block">
              <div className="concours-font text-xl text-foreground group-hover:text-primary transition-colors">
                CONCOURS'25
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Where Glory Lasts Forever
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Moved towards left instead of centered */}
          <div className="hidden lg:flex items-center space-x-1 ml-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.url)
                    ? "bg-primary/20 text-primary shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/20 bg-card/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.url)
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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