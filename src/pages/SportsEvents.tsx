import { Trophy, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const sports = [
  { name: "Basketball (Men)", slug: "basketball-men", icon: "🏀", category: "Men's" },
  { name: "Basketball (Women)", slug: "basketball-women", icon: "🏀", category: "Women's" },
  { name: "Volleyball (Men)", slug: "volleyball-men", icon: "🏐", category: "Men's" },
  { name: "Volleyball (Women)", slug: "volleyball-women", icon: "🏐", category: "Women's" },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "Men's" },
  { name: "Badminton (Men)", slug: "badminton-men", icon: "🏸", category: "Men's" },
  { name: "Badminton (Women)", slug: "badminton-women", icon: "🏸", category: "Women's" },
  { name: "Football (Men)", slug: "football-men", icon: "⚽", category: "Men's" },
  { name: "Football (Women)", slug: "football-women", icon: "⚽", category: "Women's" },
  { name: "Table Tennis (Men)", slug: "table-tennis-men", icon: "🏓", category: "Men's" },
  { name: "Table Tennis (Women)", slug: "table-tennis-women", icon: "🏓", category: "Women's" },
  { name: "Tennis", slug: "tennis", icon: "🎾", category: "Mixed" },
  { name: "Carrom", slug: "carrom", icon: "🎯", category: "Mixed" },
  { name: "Chess", slug: "chess", icon: "♟️", category: "Mixed" },
];

export default function SportsEvents() {
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
                  <Button className="w-full bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-200" asChild>
                    <Link to={`/sports-events/${sport.slug}`}>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-sports">
              Register Now
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Rules
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}