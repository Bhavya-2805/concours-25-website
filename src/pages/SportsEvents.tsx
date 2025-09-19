import { Trophy, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
const sports = [
  { name: "Basketball (Men)", slug: "basketball-men", icon: "🏀", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7237Cuy01ZgYEd4ywVgR8PmYVss3Dn5ywqaj-cXQOOa1maQ/viewform?usp=header" },
  { name: "Basketball (Women)", slug: "basketball-women", icon: "🏀", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1ebXYhf_e5rlYkxjT1LfiU2XCXKh-MeKhYFFGQBTF06xaGg/viewform?usp=header" },
  { name: "Volleyball (Men)", slug: "volleyball-men", icon: "🏐", category: "Men's", registerLink: "https://docs.google.com/forms/d/1H1kGjGR8gfe0ezV4m0segJo9SxGQ2PFSYeS0Dzenu9k/edit?usp=drivesdk" },
  { name: "Volleyball (Women)", slug: "volleyball-women", icon: "🏐", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7unun1AmmObw_vYIMbtvEAILNW1wJHXAlDjaYPfiFekN8eg/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXyFy_OsjEHiVHQUDSX2gFOCo_YDq0dNcGJX5Tbzm1V_WeCA/viewform?usp=dialog" },
  { name: "Badminton (Men)", slug: "badminton-men", icon: "🏸", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScdMNpfnZ3KV3OdODTRxJfUg128QPl-Wilt-oy49JHbcCw2nw/viewform?usp=header" },
  { name: "Badminton (Women)", slug: "badminton-women", icon: "🏸", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3KGvqQ1kzcyFTGb_NEAYt4CwhVDRWK325rmVN6FoBAV-Oag/viewform?usp=dialog" },
  { name: "Football (Men)", slug: "football-men", icon: "⚽", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMX15T6tpVbcSsupKpao983AnUv1y0p_-HCOJRcHZ4YlRKZQ/viewform?usp=dialog" },
  { name: "Football (Women)", slug: "football-women", icon: "⚽", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeSJVc1NdP2Ok4BkvaeAbBMsaogg0qS6Hki13ERsRqN1NwMkw/viewform?usp=dialog" },
  { name: "Table Tennis (Men)", slug: "table-tennis-men", icon: "🏓", category: "Men's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVgb2FHhNcysgnv6cPQwXOQzTeF_hYHD1141Rc6Dya_qIJgw/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Table Tennis (Women)", slug: "table-tennis-women", icon: "🏓", category: "Women's", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfP5I28i7h-7LoFYl1DMAtsadaeRIQ1pBOLkN3fYWl76PP3jw/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Tennis", slug: "tennis", icon: "🎾", category: "Mixed", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSexNGDoYBFoJhZDu93b9d_LsT26IWJ9CWV79bVRv2NinWraDA/viewform?usp=sharing&ouid=101228523565298084421" },
  { name: "Carrom", slug: "carrom", icon: "🎯", category: "Mixed", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdsI1LNxIEJKKV3wUh-KrjE7T9nQUTEIYclOiWdLQZ897bUYQ/viewform?usp=dialog" },
  { name: "Chess", slug: "chess", icon: "♟️", category: "Mixed", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2RhF0ndssy0gStfyf-a9XEAkoqs_EywDE8zQ_nA0BR4FFbQ/viewform?usp=sharing&ouid=101228523565298084421" },
];

const esportsGames = [
  { name: "Free Fire Max (BR)", slug: "freefire-br", icon: "🔥", category: "Battle Royale", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSepxP4Unf9P4ab1ZqDfMmLi4c9u_wg1EWT3hzvPlMkyIoufBw/viewform", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "Free Fire Max (CS)", slug: "freefire-cs", icon: "🎯", category: "Clash Squad", registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScps0evDnbOTW4VyYItimwViwCNaq9RFdm_xxBM_XYNDl7p8Q/viewform?usp=send_form", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "BGMI", slug: "bgmi", icon: "🎖️", category: "Battle Royale", registerLink: "https://forms.gle/L8FaxUqSdA13g8fj8", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "CODM", slug: "codm", icon: "🎮", category: "FPS", registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSc1GZD-UnhMaMU0DwbEZsyNRjIrBsI5sVCF8zktemuEL5PbRA/viewform?usp=send_form", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "Valorant", slug: "valorant", icon: "🔫", category: "FPS", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScEdNzx8SMqIiEQUF196RCCzI1aVwSViSXVr9c7OFj7H4AXbQ/viewform", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "Clash Royale", slug: "clash-royale", icon: "👑", category: "Strategy", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScREa1iZxWpdyfSHqs2WWeNQObvuVk4AVzmJV_NVyor6U-RIA/viewform", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "EA FC Mobile", slug: "ea-fc-mobile", icon: "⚽", category: "Sports", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdgS3kSJQsfaLorUKIh3AFY2i2xxXICoNO7GuqGMqkXMEW5vA/viewform", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "WCC Rivals", slug: "wcc-rivals", icon: "🏏", category: "Sports", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_9j6mBjTi0NDEi984iBYeSU5O2hEcauQqSKzKGNOpG5_JYA/viewform", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
  { name: "Mini Militia", slug: "mini-militia", icon: "🪖", category: "Action", registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScT2NzqXTINqchSQYxQnCAOaZD07t5tacODspQa8PizIcRO2w/viewform", rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view" },
];

export default function SportsEvents() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen subtle-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
            Competition Categories
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            SPORTS EVENTS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose your battlefield. From court sports to field events, find your sport and register for glory.
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center trophy-glow floating-element">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <Card key={sport.slug} className="epic-card overflow-hidden group cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Sport Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {sport.icon}
                  </div>
                  
                  {/* Sport Name */}
                  <h3 className="varsity-font text-2xl text-foreground mb-2 text-center">{sport.name}</h3>
                  
                  {/* Category */}
                  <p className="text-muted-foreground mb-4 text-center">{sport.category}</p>
                  
                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      REGISTER NOW
                    </Badge>
                  </div>
                  
                  {/* Description placeholder */}
                  <p className="text-sm text-muted-foreground text-center mb-6 flex-grow">
                    Join the ultimate {sport.name.toLowerCase()} competition and showcase your skills.
                  </p>
                  
                  {/* Action Button - Aligned at bottom */}
                  <Button 
                    className="w-full bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      window.open(sport.registerLink, '_blank');
                      console.log(`${sport.name} registration button clicked`);
                    }}
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            {/* E-Sports Card */}
            <Card key="esports" className="epic-card overflow-hidden group cursor-pointer">
              <CardContent className="p-6 h-full flex flex-col">
                {/* E-Sports Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                  🎮
                </div>
                
                {/* E-Sports Name */}
                <h3 className="varsity-font text-2xl text-foreground mb-2 text-center">E-Sports</h3>
                
                {/* Category */}
                <p className="text-muted-foreground mb-4 text-center">Gaming</p>
                
                {/* Register Badge */}
                <div className="text-center mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      REGISTER NOW
                    </Badge>  
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground text-center mb-6 flex-grow">
                  Compete in 8 exciting e-sports titles and prove your gaming skills against the best players.
                </p>
                
                {/* Action Button - Aligned at bottom */}
                <Button className="w-full bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-200" asChild>
                  <Link to="/esports">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-sports rounded-full flex items-center justify-center trophy-glow">
              <Target className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="varsity-font text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Compete?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't miss your chance to be part of the most exciting sports festival of the year.
          </p>
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-sports"
              onClick={() => {
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSd7237Cuy01ZgYEd4ywVgR8PmYVss3Dn5ywqaj-cXQOOa1maQ/viewform', '_blank');
                console.log('SportsEvents registration button clicked');
              }}
            >
              Register Now
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                window.open('https://docs.google.com/document/d/1DraFN-Wemm0jsHYun-Fv320C97HQHN5P/edit', '_blank');
                console.log('SportsEvents rule book download button clicked');
              }}
            >
              Download Rulebook
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}