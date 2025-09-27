import { Trophy, Mic, ArrowRight, Star, Users, Clock, Building2, Ticket, Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { soccerPitch } from "@lucide/lab";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
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
              <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon iconNode={soccerPitch} className="icon-large icon-primary" />
              </div>
              <CardTitle className="arail-font text-3xl text-foreground">Sports Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center text-lg">
                Compete in 10+ sports categories and prove your athletic prowess against the best talent from across the nation.
              </p>
              
              {/* Features */}
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Premium Sports Experience</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• Access to all 10+ sports events</li>
                  <li>• Exposure to the best talent from across different colleges</li>
                  <li>• Chance to win exciting prizes</li>
                  <li>• Certificate of participation</li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="icon-small" />
                  <span>1500+ Athletes Expected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="icon-small" />
                  <span>Multi-day Event</span>
                </div>
              </div>

              <Button className="w-full btn-sports group" asChild>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/sports-events');
                    console.log('Register page registration button clicked');
                  }}
                >
                  Register for Sports
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Stand-Up Comedy Registration */}
          <Card className="epic-card overflow-hidden group">
            <CardHeader className="text-center pb-6">
              <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Ticket className="icon-large icon-secondary" />
              </div>
              <CardTitle className="arial-font text-3xl text-foreground">CONCOURS'25 Pass</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center text-lg">
              Get the exclusive pass to Concours 2025 and experience glory, victory, and memories that will last a lifetime.               </p>
              
              {/* Features */}
              <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-secondary">What Is Included</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• 4 day exclusive pass</li>
                  <li>• Stand Up Comedy Night</li>
                  <li>• Electirfying DJ Night</li>
                  <li>• Access to all sports matches</li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="icon-small" />
                  <span>Limited Slots</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="icon-small" />
                  <span>Evening Show</span>
                </div>
              </div>

              <Button className="w-full btn-accent group" asChild>
                <Link to="/comedy-dj-night">
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}