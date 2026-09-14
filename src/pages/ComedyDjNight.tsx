import { Mic, Music, Star, CreditCard, Calendar, Clock, Users, Phone, Mail, Ticket, MessageCircle, Trophy, Gamepad2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyImage } from "@/components/LazyImage";

// Import images properly
import comedyImage1 from "@/assets/images/IMG__18.jpg";
import comedyImage2 from "@/assets/images/DR--1.jpg";

export default function ComedyDjNight() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            CONCOURS Inauguration
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl heading-gold mb-6">
            CONCOURS'26 Pass
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get ready for an unforgettable evening of energetic sports matches, fun activities, music, and entertainment that will keep you active and engaged all night long.
          </p>
        </div>

        {/* Pass Purchase Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Pass Information */}
          <Card className="epic-card">
            <CardHeader>
              <CardTitle className="concours-font text-3xl heading-gold flex items-center">
                <Trophy className="icon-medium mr-3 icon-secondary" />
                Festive Pass
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">₹350</div>
                  <div className="text-muted-foreground">Per Person</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-small text-secondary" />
                  <div>
                    <div className="font-semibold">Event Duration</div>
                    <div className="text-sm text-muted-foreground">6:00 PM - 9:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="icon-small text-secondary" />
                  <div>
                    <div className="font-semibold">Date</div>
                    <div className="text-sm text-muted-foreground">29th October 2026</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="icon-small text-secondary" />
                  <div>
                    <div className="font-semibold">Limited Seats</div>
                    <div className="text-sm text-muted-foreground">Book now to secure your spot</div>
                  </div>
                </div>
              </div>

              
              <Button
                className="w-full btn-accent mt-2"
                onClick={() => {
                  window.open('https://forms.gle/Z5EXGVMejozAY3MX6', '_blank');
                }}
              >
                Buy Passes Now
              </Button>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="epic-card">
            <CardHeader>
              <CardTitle className="concours-font text-3xl heading-gold flex items-center">
                <Zap className="w-8 h-8 mr-3 text-secondary" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>

              <div className="flex items-start space-x-3 mb-6">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">Sports Matches Access</div>
                    <div className="text-sm text-muted-foreground">Complimentary access to sports matches for 4 days of Fest</div>
                  </div>
                </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">Stand-Up Comedy Show</div>
                    <div className="text-sm text-muted-foreground">Professional comedians and student performers</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">DJ Night</div>
                    <div className="text-sm text-muted-foreground">High-energy music and dance floor</div>
                  </div>
                </div>
                
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">Fun Activities & Games</div>
                    <div className="text-sm text-muted-foreground">Pickleball, Dayro, Arcade games, and more exciting activities</div>
                  </div>
                </div>
                
                
                
                
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Throwback */}
        <Card className="epic-card mb-16">
          <CardHeader>
            <CardTitle className="arial-font text-3xl heading-gold text-center">
              Glimpses of CONCOURS'25 Inaugural
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">An Unforgettable Evening</h3>
                <p className="text-muted-foreground mb-4">
                  CONCOURS'25's comedy night was a massive hit with over 1500 students in attendance. 
                  The evening featured amazing stand-up performances, incredible DJ sets, and 
                  non-stop entertainment that had everyone talking for weeks.
                </p>
                <p className="text-muted-foreground">
                  From hilarious one-liners to dance-worthy beats, last year's event set the bar high. 
                  This year, we're bringing even more energy, better performances, and an experience 
                  you won't forget.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="h-52 bg-gradient-accent rounded-lg flex items-center justify-center overflow-hidden">
                  <LazyImage
                    src={comedyImage1}
                    alt="Comedy Night"
                    className="w-full h-full object-cover rounded-lg"
                    priority={true}
                    placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                  />
                </div>
                <div className="h-52 bg-gradient-sports rounded-lg flex items-center justify-center overflow-hidden">
                  <LazyImage
                    src={comedyImage2}
                    alt="Comedy Night"
                    className="w-full h-full object-cover rounded-lg"
                    priority={true}
                    placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="epic-card">
          <CardHeader>
            <CardTitle className="concours-font text-3xl heading-gold text-center">
              Questions About The Event?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="icon-container mx-auto mb-4">
                  <Phone className="icon-large icon-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+91 93163 27271</p>
                <p className="text-sm text-muted-foreground">Bhavya Boda</p>
              </div>
              
              <div className="text-center">
                <div className="icon-container mx-auto mb-4">
                  <MessageCircle className="icon-large icon-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">concoursdaiict@gmail.com</p>
                <p className="text-sm text-muted-foreground">Official CONCOURS Email</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


