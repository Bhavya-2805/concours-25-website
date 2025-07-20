import { Trophy, Users, Target, Calendar, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Concours24() {
  const stats = [
    { label: "Total Athletes", value: "1800+", icon: Users },
    { label: "Sports Events", value: "15", icon: Target },
    { label: "Participating Colleges", value: "45", icon: Calendar },
    { label: "Memories Created", value: "∞", icon: Trophy },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Last Year's Glory
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            CONCOURS'24
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Relive the incredible moments, amazing performances, and unforgettable memories from CONCOURS'24.
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center trophy-glow floating-element">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="epic-card text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="concours-font text-4xl text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="varsity-font text-4xl text-foreground mb-4">Event Gallery</h2>
            <p className="text-muted-foreground">Captured moments from the festival</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} className="epic-card overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-sports flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
                    <div className="relative z-10 text-center text-white">
                      <Trophy className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm">Memory {i + 1}</div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm">View Full</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="epic-card">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl text-foreground mb-6 italic">
                "CONCOURS'24 was an incredible experience that brought together amazing talent, 
                fierce competition, and unforgettable memories. It truly showcased the spirit of sportsmanship."
              </blockquote>
              <div className="text-muted-foreground">
                <div className="font-semibold">Arjun Sharma</div>
                <div className="text-sm">Basketball Champion, CONCOURS'24</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}