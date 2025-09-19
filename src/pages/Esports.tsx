import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Trophy, Calendar } from 'lucide-react';

const esportsGames = [
  { 
    name: "Free Fire Max (BR)", 
    slug: "freefire-br", 
    icon: "", 
    category: "Battle Royale", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSepxP4Unf9P4ab1ZqDfMmLi4c9u_wg1EWT3hzvPlMkyIoufBw/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Battle Royale action where only the last team standing wins. Survive, loot, and eliminate your way to victory.",
    prizePool: "₹50,000",
    teamSize: "4v4",
    date: "March 15-16, 2024"
  },
  { 
    name: "Free Fire Max (CS)", 
    slug: "freefire-cs", 
    icon: "", 
    category: "Clash Squad", 
    registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScps0evDnbOTW4VyYItimwViwCNaq9RFdm_xxBM_XYNDl7p8Q/viewform?usp=send_form", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Intense 4v4 tactical combat in Clash Squad mode. Strategy and teamwork are key to dominating each round.",
    prizePool: "₹40,000",
    teamSize: "4v4",
    date: "March 17-18, 2024"
  },
  { 
    name: "BGMI", 
    slug: "bgmi", 
    icon: "", 
    category: "Battle Royale", 
    registerLink: "https://forms.gle/L8FaxUqSdA13g8fj8", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "India's favorite Battle Royale. Experience intense combat on the battleground with your squad.",
    prizePool: "₹60,000",
    teamSize: "4v4",
    date: "March 19-20, 2024"
  },
  { 
    name: "CODM", 
    slug: "codm", 
    icon: "", 
    category: "FPS", 
    registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSc1GZD-UnhMaMU0DwbEZsyNRjIrBsI5sVCF8zktemuEL5PbRA/viewform?usp=send_form", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Call of Duty Mobile brings fast-paced FPS action. Dominate the battlefield with your squad.",
    prizePool: "₹45,000",
    teamSize: "5v5",
    date: "March 21-22, 2024"
  },
  { 
    name: "Valorant", 
    slug: "valorant", 
    icon: "", 
    category: "FPS", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScEdNzx8SMqIiEQUF196RCCzI1aVwSViSXVr9c7OFj7H4AXbQ/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Tactical 5v5 shooter where strategy meets precision. Form your team and dominate the battlefield.",
    prizePool: "₹50,000",
    teamSize: "5v5",
    date: "March 23-24, 2024"
  },
  { 
    name: "Clash Royale", 
    slug: "clash-royale", 
    icon: "", 
    category: "Strategy", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScREa1iZxWpdyfSHqs2WWeNQObvuVk4AVzmJV_NVyor6U-RIA/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Real-time multiplayer strategy game. Build your deck and destroy opponent's towers to win.",
    prizePool: "₹30,000",
    teamSize: "1v1",
    date: "March 25-26, 2024"
  },
  { 
    name: "EA FC Mobile", 
    slug: "ea-fc-mobile", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdgS3kSJQsfaLorUKIh3AFY2i2xxXICoNO7GuqGMqkXMEW5vA/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "The ultimate football experience on mobile. Build your dream team and compete for glory.",
    prizePool: "₹35,000",
    teamSize: "1v1",
    date: "March 27-28, 2024"
  },
  { 
    name: "WCC Rivals", 
    slug: "wcc-rivals", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_9j6mBjTi0NDEi984iBYeSU5O2hEcauQqSKzKGNOpG5_JYA/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "World Cricket Championship Rivals. Experience the thrill of cricket on your mobile device.",
    prizePool: "₹25,000",
    teamSize: "1v1",
    date: "March 29-30, 2024"
  },
  { 
    name: "Mini Militia", 
    slug: "mini-militia", 
    icon: "", 
    category: "Action", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScT2NzqXTINqchSQYxQnCAOaZD07t5tacODspQa8PizIcRO2w/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Classic 2D multiplayer combat. Engage in intense battles with up to 6 players in various maps.",
    prizePool: "₹20,000",
    teamSize: "6v6",
    date: "March 31-April 1, 2024"
  },
];

export default function Esports() {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen subtle-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-esports rounded-full flex items-center justify-center trophy-glow">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="varsity-font text-5xl lg:text-6xl text-foreground mb-6">
            E-Sports Championship
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Compete in 8 thrilling e-sports titles with massive prize pools. 
            Whether you're a tactical genius, a mechanical prodigy, or a strategic mastermind, 
            we have the perfect challenge for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          </div>
        </div>
      </section>

      {/* E-Sports Games Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="varsity-font text-4xl text-foreground mb-4">
              Choose Your Battle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your game and prepare for the ultimate e-sports experience. 
              Each tournament offers unique challenges and exciting rewards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {esportsGames.map((game, index) => (
              <Card key={game.slug} className="epic-card overflow-hidden group cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Game Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {game.icon}
                  </div>
                  
                  {/* Game Name */}
                  <h3 className="varsity-font text-2xl text-foreground mb-2 text-center">{game.name}</h3>
                  
                  {/* Category */}
                  <p className="text-muted-foreground mb-4 text-center">{game.category}</p>
                  
                  {/* Game Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                      Prize Pool: {game.prizePool}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      {game.teamSize}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-green-500" />
                      {game.date}
                    </div>
                  </div>
                  
                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      REGISTER NOW
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center mb-6 flex-grow">
                    {game.description}
                  </p>
                  
                  {/* Action Button - Aligned at bottom */}
                  <Button className="w-full bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-200" asChild>
                    <Link to={`/esports/${game.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-esports rounded-full flex items-center justify-center trophy-glow">
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="varsity-font text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't miss your chance to compete in the biggest e-sports tournament of the year.
            Register now and secure your spot in gaming history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-esports"
              onClick={() => {
                window.open('https://PLACEHOLDER_GOOGLE_FORM_URL_REGISTER', '_blank');
                console.log('Esports CTA registration button clicked');
              }}
            >
              Register Now
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                window.open('https://PLACEHOLDER_GOOGLE_FORM_URL_RULEBOOK', '_blank');
                console.log('Esports CTA rule book download button clicked');
              }}
            >
              Download Rules
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
