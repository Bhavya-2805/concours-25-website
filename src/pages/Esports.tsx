import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Trophy, Calendar, Gamepad2 } from 'lucide-react';
import logoImage from '@/assets/images/IMG_0054.PNG';

const esportsGames = [
  { 
    name: "Free Fire Max (BR)", 
    slug: "freefire-br", 
    icon: "", 
    category: "Battle Royale", 
    registerLink: "https://docs.google.com/forms/d/1aDzaXXQ9RX-PZf8BFrz4Jc0nmTZV4S1UkhQrFHPVc5M/edit?usp=drive_web&ouid=101228523565298084421", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Battle Royale action where only the last team standing wins. Survive, loot, and eliminate your way to victory.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "Free Fire Max (CS)", 
    slug: "freefire-cs", 
    icon: "", 
    category: "Clash Squad", 
    registerLink: "https://docs.google.com/forms/d/1UX7fZbXPVuCRDTeHx1Hx0V9PFDSQEZDZ7BwKwA0O08g/edit", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Intense 4v4 tactical combat in Clash Squad mode. Strategy and teamwork are key to dominating each round.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "BGMI", 
    slug: "bgmi", 
    icon: "", 
    category: "Battle Royale", 
    registerLink: "https://docs.google.com/forms/d/1ZRGq20PAFK8gZRdaSb7KuBU1gtFKQcVjItxI2pPlqQY/edit", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "India's favorite Battle Royale. Experience intense combat on the battleground with your squad.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "CODM", 
    slug: "codm", 
    icon: "", 
    category: "FPS", 
    registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSc1GZD-UnhMaMU0DwbEZsyNRjIrBsI5sVCF8zktemuEL5PbRA/viewform?usp=send_form", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Call of Duty Mobile brings fast-paced FPS action. Dominate the battlefield with your squad.",
    prizePool: "To be announced",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "Valorant", 
    slug: "valorant", 
    icon: "", 
    category: "FPS", 
    registerLink: "https://docs.google.com/forms/d/153airOjIR3QemuXlYVDcq9z4AIQxPrdTaWHeI3I8cM0/edit", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Tactical 5v5 shooter where strategy meets precision. Form your team and dominate the battlefield.",
    prizePool: "To be announced",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "Clash Royale", 
    slug: "clash-royale", 
    icon: "", 
    category: "Strategy", 
    registerLink: "https://docs.google.com/forms/d/1qXK6X0N44FILAwH2Fl49otqfSZa-5IlclVHm-7t8dWI/edit", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Real-time multiplayer strategy game. Build your deck and destroy opponent's towers to win.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "EA FC Mobile", 
    slug: "ea-fc-mobile", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://docs.google.com/forms/d/1Fn_lfwmsUUcrEB8GqadhBCuMbE_Eu9FKo_TQvVWjKSw/edit", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "The ultimate football experience on mobile. Build your dream team and compete for glory.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "WCC Rivals", 
    slug: "wcc-rivals", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_9j6mBjTi0NDEi984iBYeSU5O2hEcauQqSKzKGNOpG5_JYA/viewform", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "World Cricket Championship Rivals. Experience the thrill of cricket on your mobile device.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026"
  },
  { 
    name: "Mini Militia", 
    slug: "mini-militia", 
    icon: "", 
    category: "Action", 
    registerLink: "https://docs.google.com/forms/d/1FtN5Vo3oJQA-kILfBAxZmoJ5XKvjjJ7SkezzDlJ282E/edit", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Classic 2D multiplayer combat. Engage in intense battles with up to 6 players in various maps.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
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
            <img src={logoImage} alt="Logo" className="w-28 h-28" />
          </div>
          <h1 className="concours-font text-5xl lg:text-6xl heading-gold mb-6">
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
            <h2 className="timesnewroman-font text-4xl heading-gold mb-4">
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
                      <Trophy className="icon-small mr-2 text-yellow-500" />
                      Prize Pool: {game.prizePool}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Users className="icon-small mr-2 text-secondary" />
                      {game.teamSize}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Calendar className="icon-small mr-2 text-green-500" />
                      {game.date}
                    </div>
                  </div>
                  
                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-[#840c15]/20 text-red-300 border-[#840c15]/40 px-3 py-1 font-semibold">
                      REGISTER NOW
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center mb-6 flex-grow">
                    {game.description}
                  </p>
                  
                  {/* Action Button - Aligned at bottom */}
                  <Button className="w-full btn-sports text-sm py-2.5" asChild>
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
            <div className="icon-container">
              <Gamepad2 className="icon-large icon-accent" />
            </div>
          </div>
          <h2 className="varsity-font text-4xl lg:text-5xl heading-gold mb-6">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't miss your chance to compete in the biggest e-sports tournament of the year.
            Register now and secure your spot in gaming history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Button
              variant="outline"
              className="border-[#840c15] text-red-200 bg-[#840c15]/10 hover:bg-[#840c15] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(132,12,21,0.4)]"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view?usp=sharing', '_blank');
                console.log('Esports CTA rule book download button clicked');
              }}
            >
              View RuleBook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

