import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNavbarLayout } from "./components/top-navbar-layout";
import { preloadCriticalImages, preloadTeamImages } from "./utils/imageOptimization";
import { useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SportsEvents from "./pages/SportsEvents";
import FunEvents from "./pages/FunEvents";
import TeamDaiict from "./pages/TeamDaiict";
import Sponsors from "./pages/Sponsors";
import Concours24 from "./pages/Concours24";
import TeamConcours from "./pages/TeamConcours";
import StandupPasses from "./pages/StandupPasses";
import ComedyDjNight from "./pages/ComedyDjNight";
import SportDetail from "./pages/SportDetail";
import Athletics from "./pages/Athletics";
import AthleticsDetail from "./pages/AthleticsDetail";
import Esports from "./pages/Esports";
import EsportDetail from "./pages/EsportDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Preload critical images when the app starts
    preloadCriticalImages();
    
    // Preload team images after a short delay to not block initial load
    setTimeout(() => {
      preloadTeamImages();
    }, 2000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TopNavbarLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sports-events" element={<SportsEvents />} />
              <Route path="/sports/:sport" element={<SportDetail />} />
              <Route path="/athletics" element={<Athletics />} />
              <Route path="/athletics/:category" element={<AthleticsDetail />} />
              <Route path="/esports" element={<Esports />} />
              <Route path="/esports/:game" element={<EsportDetail />} />
              <Route path="/fun-events" element={<FunEvents />} />
              <Route path="/team-daiict" element={<TeamDaiict />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/concours-24" element={<Concours24 />} />
              <Route path="/team-concours" element={<TeamConcours />} />
              <Route path="/standup-passes" element={<StandupPasses />} />
              <Route path="/comedy-dj-night" element={<ComedyDjNight />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TopNavbarLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
