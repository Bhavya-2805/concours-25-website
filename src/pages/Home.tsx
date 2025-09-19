import { Trophy, ArrowRight, Play, Users, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-stadium.jpg";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const stats = [
    { label: "Sports Events", value: "15+", icon: Target },
    { label: "Expected Athletes", value: "2000+", icon: Users },
    { label: "Participating Colleges", value: "50+", icon: Calendar },
  ];

  return (
    <div className="min-h-screen">
      {/* Particles Background */}
      <div className="particles fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center stadium-hero grid-pattern"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Trophy Icon - Reduced animation intensity */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-sports rounded-full flex items-center justify-center trophy-glow floating-element">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-sports rounded-full animate-ping opacity-10"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="concours-font text-7xl md:text-9xl lg:text-[10rem] text-foreground mb-4 leading-none">
            CONCOURS'25
          </h1>
          
          {/* Tagline */}
          <h2 className="varsity-font text-2xl md:text-4xl lg:text-5xl text-primary mb-8 tracking-wide">
            WHERE GLORY LASTS FOREVER
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            The ultimate sports festival at Dhirubhai Ambani University. 
            Experience the thrill, embrace the competition, and create memories that last forever.
          </p>
          
          {/* CTA Button - Reduced pulse intensity */}
          <Button 
            className="btn-sports text-xl px-12 py-6"
            onClick={() => navigate('/sports-events')}
          >
            REGISTER NOW

            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
                About CONCOURS'25
              </Badge>
              <h2 className="varsity-font text-4xl lg:text-6xl text-foreground mb-6">
                The Ultimate Sports Festival
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                CONCOURS'25 is more than just a sports festival – it's where champions are born, 
                legends are made, and glory becomes eternal. Join us for an unforgettable journey 
                of competition, sportsmanship, and pure athletic excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From basketball courts to football fields, from chess boards to marathon tracks, 
                CONCOURS'25 brings together the finest athletes from across the nation to compete 
                in the spirit of true sportsmanship.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="epic-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-sports flex items-center justify-center">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="epic-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-32 bg-gradient-accent flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="epic-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-32 bg-gradient-accent flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="epic-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-sports flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="epic-card text-center p-8">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="concours-font text-4xl text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftermovie Section */}
      <section 
        className="py-24 relative stadium-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Relive The Moments
          </Badge>
          <h2 className="varsity-font text-4xl lg:text-6xl text-foreground mb-8">
            THE AFTERMOVIE - CONCOURS'24
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Experience the energy, passion, and unforgettable moments from last year's incredible festival.
          </p>
          
          {/* Video Placeholder */}
          <Card className="epic-card max-w-3xl mx-auto overflow-hidden group cursor-pointer">
            <CardContent className="p-0 relative">
              <div className="aspect-video bg-gradient-hero flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-sports opacity-20"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-bold">Watch Aftermovie</div>
                    <div className="text-white/70">CONCOURS'24 Highlights</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}