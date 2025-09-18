import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Trophy, Calendar } from 'lucide-react';

const esportsGames = [
  { 
    name: "Valorant", 
    slug: "valorant", 
    icon: "", 
    category: "FPS", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_VALORANT", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_VALORANT",
    description: "Tactical 5v5 shooter where strategy meets precision. Form your team and dominate the battlefield.",
    prizePool: "₹50,000",
    teamSize: "5v5",
    date: "March 15-16, 2024"
  },
  { 
    name: "CS:GO 2", 
    slug: "csgo2", 
    icon: "", 
    category: "FPS", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_CSGO2", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_CSGO2",
    description: "The classic tactical shooter reimagined. Experience intense counter-terrorist action.",
    prizePool: "₹40,000",
    teamSize: "5v5",
    date: "March 17-18, 2024"
  },
  { 
    name: "League of Legends", 
    slug: "lol", 
    icon: "", 
    category: "MOBA", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_LOL", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_LOL",
    description: "Epic 5v5 MOBA battles. Choose your champion and lead your team to victory on the Rift.",
    prizePool: "₹60,000",
    teamSize: "5v5",
    date: "March 19-20, 2024"
  },
  { 
    name: "Dota 2", 
    slug: "dota2", 
    icon: "", 
    category: "MOBA", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_DOTA2", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_DOTA2",
    description: "The ultimate MOBA experience. Master complex heroes and outplay your opponents.",
    prizePool: "₹70,000",
    teamSize: "5v5",
    date: "March 21-22, 2024"
  },
  { 
    name: "FIFA 24", 
    slug: "fifa24", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_FIFA24", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_FIFA24",
    description: "Showcase your football skills in the latest FIFA edition. Score goals and claim glory.",
    prizePool: "₹30,000",
    teamSize: "1v1",
    date: "March 23, 2024"
  },
  { 
    name: "NBA 2K24", 
    slug: "nba2k24", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_NBA2K24", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_NBA2K24",
    description: "Dominate the court in NBA 2K24. Dunk, shoot, and defend your way to championship.",
    prizePool: "₹25,000",
    teamSize: "1v1",
    date: "March 24, 2024"
  },
  { 
    name: "Chess.com", 
    slug: "chess-com", 
    icon: "", 
    category: "Strategy", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_CHESSCOM", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_CHESSCOM",
    description: "Battle of minds in the royal game. Outthink your opponent in this ultimate strategy contest.",
    prizePool: "₹20,000",
    teamSize: "1v1",
    date: "March 25, 2024"
  },
  { 
    name: "Rocket League", 
    slug: "rocket-league", 
    icon: "", 
    category: "Sports", 
    registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_ROCKETLEAGUE", 
    rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_ROCKETLEAGUE",
    description: "High-octane soccer with rocket-powered cars. Score amazing goals and make incredible saves.",
    prizePool: "₹35,000",
    teamSize: "3v3",
    date: "March 26, 2024"
  }
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
            <Button 
              className="btn-esports"
              onClick={() => {
                window.open('https://PLACEHOLDER_GOOGLE_FORM_URL_REGISTER', '_blank');
                console.log('Esports registration button clicked');
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
                console.log('Esports rule book download button clicked');
              }}
            >
              Download Rules
            </Button>
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
