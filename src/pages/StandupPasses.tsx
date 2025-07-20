import { Mic, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StandupPasses() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Comedy Night Special
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            STAND-UP PASSES
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get ready for an evening filled with laughter, entertainment, and amazing stand-up performances.
          </p>
        </div>

        {/* Main Card */}
        <Card className="epic-card overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Image Section */}
              <div className="bg-gradient-accent flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 trophy-glow">
                    <Mic className="w-16 h-16" />
                  </div>
                  <h2 className="varsity-font text-3xl mb-4">Comedy Night</h2>
                  <p className="text-lg opacity-90">An evening of pure entertainment</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="varsity-font text-2xl text-foreground mb-2">
                      Passes Available Soon!
                    </h3>
                    <p className="text-muted-foreground">
                      We're working hard to bring you an amazing stand-up comedy experience. 
                      Passes will be available for purchase very soon.
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-semibold text-foreground">Event Duration</div>
                        <div className="text-sm text-muted-foreground">2-3 Hours of Entertainment</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-semibold text-foreground">What to Expect</div>
                        <div className="text-sm text-muted-foreground">Professional comedians & student performers</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mic className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-semibold text-foreground">Open Mic</div>
                        <div className="text-sm text-muted-foreground">Opportunity for students to perform</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button className="w-full btn-accent" disabled>
                      Passes Coming Soon
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                      Get Notified
                    </Button>
                  </div>

                  {/* Info Box */}
                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-secondary">Stay tuned!</strong> Follow our social media channels 
                      or contact the team for updates on pass availability and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have questions about the comedy night or passes?
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong>Contact:</strong> Ishan Thakkar (Convener)</p>
            <p><strong>Phone:</strong> +91 76220 82220</p>
            <p><strong>Email:</strong> concours@daiict.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}