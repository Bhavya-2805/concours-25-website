import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TopNavbar } from "./top-navbar";
import { Footer } from "./Footer";

interface TopNavbarLayoutProps {
  children: React.ReactNode;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function TopNavbarLayout({ children }: TopNavbarLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#0a0203]">
      <ScrollToTop />
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
