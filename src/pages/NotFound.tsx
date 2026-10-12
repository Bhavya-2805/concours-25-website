import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import logoImage from "@/assets/images/IMG_0054.PNG";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stage px-6 pt-28 pb-16">
      <div className="absolute inset-0 bg-lines" aria-hidden />
      <img src={logoImage} alt="" aria-hidden className="absolute w-[36rem] opacity-[0.04] animate-float" />
      <div className="relative text-center">
        <div className="eyebrow justify-center">Out of bounds</div>
        <h1 className="mt-4 font-display font-black text-[11rem] md:text-[16rem] leading-none text-chrome">404</h1>
        <p className="text-xl text-[#c9cbce]/70 mb-10">Oops! Page not found</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
