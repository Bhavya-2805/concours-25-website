import { Trophy, Mic, ArrowRight, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Register() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
            Join The Competition
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            REGISTER NOW
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to glory. Register for sports competitions or showcase your talent at our stand-up comedy event.
          </p>
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sports Registration */}
          <Card className="epic-card overflow-hidden group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="varsity-font text-3xl text-foreground">Sports Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center text-lg">
                Compete in 15+ sports categories and prove your athletic prowess against the best talent from across the nation.
              </p>
              
              {/* Features */}
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Premium Sports Experience</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• Access to all 15+ sports events</li>
                  <li>• Professional coaching sessions</li>
                  <li>• Official CONCOURS'25 merchandise</li>
                  <li>• Certificate of participation</li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>2000+ Athletes Expected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Multi-day Event</span>
                </div>
              </div>

              <Button className="w-full btn-sports group">
                Register for Sports
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>

          {/* Stand-Up Comedy Registration */}
          <Card className="epic-card overflow-hidden group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto trophy-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="varsity-font text-3xl text-foreground">Stand-Up Comedy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center text-lg">
                Make the audience laugh and showcase your comedic talent in our exclusive stand-up comedy event.
              </p>
              
              {/* Features */}
              <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-secondary">Comedy Night Special</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• 5-minute performance slot</li>
                  <li>• Professional sound system</li>
                  <li>• Live audience experience</li>
                  <li>• Winner recognition & prizes</li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Limited Slots</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Evening Show</span>
                </div>
              </div>

              <Button className="w-full btn-accent group">
                Register for Comedy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Questions about registration? Need more information?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Rulebook
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}