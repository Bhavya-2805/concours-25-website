import { Trophy, Target, Users, ArrowRight, Building2, Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { soccerPitch } from "@lucide/lab";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "@/assets/images/IMG_0054.PNG";
import { useState } from "react";

const sports = [
  { name: "Basketball (Men)", slug: "basketball-men", icon: "🏀", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7237Cuy01ZgYEd4ywVgR8PmYVss3Dn5ywqaj-cXQOOa1maQ/viewform?usp=header" },
  { name: "Basketball (Women)", slug: "basketball-women", icon: "🏀", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1ebXYhf_e5rlYkxjT1LfiU2XCXKh-MeKhYFFGQBTF06xaGg/viewform?usp=header" },
  { name: "Volleyball (Men)", slug: "volleyball-men", icon: "🏐", category: "Men's", registerLink: "https://forms.gle/4PQzMZ34HYjnn6sP6" },
  { name: "Volleyball (Women)", slug: "volleyball-women", icon: "🏐", category: "Women's", registerLink: "https://forms.gle/nHxQFqk8SyqPaKeW6" },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXyFy_OsjEHiVHQUDSX2gFOCo_YDq0dNcGJX5Tbzm1V_WeCA/viewform?usp=dialog" },
  { name: "Badminton (Men)", slug: "badminton-men", icon: "🏸", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScdMNpfnZ3KV3OdODTRxJfUg128QPl-Wilt-oy49JHbcCw2nw/viewform?usp=header" },
  { name: "Badminton (Women)", slug: "badminton-women", icon: "🏸", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3KGvqQ1kzcyFTGb_NEAYt4CwhVDRWK325rmVN6FoBAV-Oag/viewform?usp=dialog" },
  { name: "Badminton (Mixed Doubles)", slug: "badminton-mixed", icon: "🏸", category: "Mixed", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScGnwzUQsSf-NY5cBhHjlCXLfOqIVx0dI9JhxzkZ4rwsvlCHQ/viewform?usp=header" },
  { name: "Football (Men)", slug: "football-men", icon: "⚽", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMX15T6tpVbcSsupKpao983AnUv1y0p_-HCOJRcHZ4YlRKZQ/viewform?usp=dialog" },
  { name: "Football (Women)", slug: "football-women", icon: "⚽", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeSJVc1NdP2Ok4BkvaeAbBMsaogg0qS6Hki13ERsRqN1NwMkw/viewform?usp=dialog" },
  { name: "Table Tennis (Men)", slug: "table-tennis-men", icon: "🏓", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVgb2FHhNcysgnv6cPQwXOQzTeF_hYHD1141Rc6Dya_qIJgw/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Table Tennis (Women)", slug: "table-tennis-women", icon: "🏓", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfP5I28i7h-7LoFYl1DMAtsadaeRIQ1pBOLkN3fYWl76PP3jw/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Tennis (Men)", slug: "tennis-men", icon: "🎾", category: "Men's", registerLink: "https://forms.gle/5LtqB78P7XUe1eL16" },
  { name: "Tennis (Women)", slug: "tennis-women", icon: "🎾", category: "Women's", registerLink: "https://forms.gle/E914aiUbmjpxp1B49" },
  { name: "Carrom", slug: "carrom", icon: "🥏", category: "Mixed", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdsI1LNxIEJKKV3wUh-KrjE7T9nQUTEIYclOiWdLQZ897bUYQ/viewform?usp=dialog" },
  { name: "Chess", slug: "chess", icon: "♟️", category: "Mixed", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2RhF0ndssy0gStfyf-a9XEAkoqs_EywDE8zQ_nA0BR4FFbQ/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Athletics", slug: "athletics", icon: "🏃", category: "Mixed", registerLink: "" },
];

export default function SportsEvents() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "Men's", "Women's", "Mixed", "Gaming"];

  const filteredSports = selectedFilter === "All"
    ? sports
    : selectedFilter === "Gaming"
      ? []
      : sports.filter(s => s.category === selectedFilter);

  const showEsports = selectedFilter === "All" || selectedFilter === "Gaming";

  return (
    <div className="min-h-screen subtle-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Badge className="mb-6 silver-badge px-4 py-1.5 backdrop-blur-sm font-semibold tracking-wide">
            Competition Categories
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl heading-metallic-silver mb-6 tracking-wide">
            SPORTS EVENTS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose your battlefield. From court sports to field events, find your sport and register for glory.
          </p>
          <div className="flex justify-center">
            <img src={logoImage} alt="Logo" className="w-28 h-28 trophy-glow" />
          </div>
        </div>
      </section>

      {/* Category Filter Pills Widget */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                selectedFilter === filter
                  ? "bg-[#840c15] text-white border-[#840c15] shadow-[0_0_15px_rgba(132,12,21,0.6)]"
                  : "bg-[#180306]/70 text-[#979694] border-[#918d8c]/30 hover:text-white hover:border-[#840c15]/60 hover:bg-[#330609]/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Sports Grid */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSports.map((sport) => (
              <Card key={sport.slug} className="epic-card overflow-hidden group cursor-pointer border-[#918d8c]/25 hover:border-[#840c15]">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Sport Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {sport.icon}
                  </div>
                  
                  {/* Sport Name */}
                  <h3 className="varsity-font text-2xl text-white mb-2 text-center">{sport.name}</h3>
                  
                  {/* Category */}
                  <p className="text-[#979694] mb-4 text-center text-sm">{sport.category}</p>
                  
                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-[#840c15]/20 text-red-300 border-[#840c15]/40 px-3 py-1 font-semibold">
                      REGISTER NOW
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center mb-6 flex-grow">
                    Join the ultimate {sport.name.toLowerCase()} competition and showcase your skills.
                  </p>
                  
                  {/* Action Button - Aligned at bottom */}
                  <Button 
                    className="w-full btn-sports text-sm py-3"
                    onClick={() => {
                      if (sport.slug === 'athletics') {
                        navigate('/athletics');
                      } else {
                        navigate(`/sports/${sport.slug}`);
                      }
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            {/* E-Sports Card */}
            {showEsports && (
              <Card key="esports" className="epic-card overflow-hidden group cursor-pointer border-[#918d8c]/25 hover:border-[#840c15]">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* E-Sports Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    🎮
                  </div>
                  
                  {/* E-Sports Name */}
                  <h3 className="varsity-font text-2xl text-white mb-2 text-center">E-Sports</h3>
                  
                  {/* Category */}
                  <p className="text-[#979694] mb-4 text-center text-sm">Gaming</p>
                  
                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-[#840c15]/20 text-red-300 border-[#840c15]/40 px-3 py-1 font-semibold">
                      REGISTER NOW
                    </Badge>  
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center mb-6 flex-grow">
                    Compete in 8 exciting e-sports titles and prove your gaming skills against the best players.
                  </p>
                  
                  {/* Action Button - Aligned at bottom */}
                  <Button className="w-full btn-sports text-sm py-3" asChild>
                    <Link to="/esports">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero border-t border-[#918d8c]/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#840c15]/30 to-[#330609]/70 border border-[#918d8c]/30 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(132,12,21,0.4)]">
              <Icon iconNode={soccerPitch} className="w-8 h-8" />
            </div>
          </div>
          <h2 className="varsity-font text-4xl lg:text-5xl heading-metallic-silver mb-6 tracking-wide">
            Ready to Compete?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            Don't miss your chance to be part of the most exciting sports festival of the year.
          </p>
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button
              className="btn-silver-outline px-10 py-4 text-base"
              onClick={() => {
                window.open('https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing', '_blank');
              }}
            >
              View Rulebook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}