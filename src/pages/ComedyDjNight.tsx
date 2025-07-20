import { Mic, Music, Star, CreditCard, Calendar, Clock, Users, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ComedyDjNight() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Comedy & DJ Night Special
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            COMEDY & DJ NIGHT
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get ready for an unforgettable evening of laughter, music, and entertainment that will keep you on your feet all night long.
          </p>
        </div>

        {/* Pass Purchase Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Pass Information */}
          <Card className="epic-card">
            <CardHeader>
              <CardTitle className="varsity-font text-3xl text-foreground flex items-center">
                <CreditCard className="w-8 h-8 mr-3 text-secondary" />
                Event Pass
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">₹299</div>
                  <div className="text-muted-foreground">Per Person</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-semibold">Event Duration</div>
                    <div className="text-sm text-muted-foreground">6:00 PM - 11:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-semibold">Date</div>
                    <div className="text-sm text-muted-foreground">To be announced soon</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-semibold">Limited Seats</div>
                    <div className="text-sm text-muted-foreground">Book now to secure your spot</div>
                  </div>
                </div>
              </div>

              <Button className="w-full btn-accent text-lg py-3">
                Buy Pass Now
              </Button>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="epic-card">
            <CardHeader>
              <CardTitle className="varsity-font text-3xl text-foreground flex items-center">
                <Star className="w-8 h-8 mr-3 text-secondary" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                    <div className="font-semibold">Open Mic Session</div>
                    <div className="text-sm text-muted-foreground">Opportunity for students to showcase talent</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">Refreshments</div>
                    <div className="text-sm text-muted-foreground">Complimentary snacks and beverages</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">Entry to All Areas</div>
                    <div className="text-sm text-muted-foreground">Access to VIP seating and photo booth</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Throwback */}
        <Card className="epic-card mb-16">
          <CardHeader>
            <CardTitle className="varsity-font text-3xl text-foreground text-center">
              Last Year's Comedy Night - CONCOURS'24
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">An Unforgettable Evening</h3>
                <p className="text-muted-foreground mb-4">
                  CONCOURS'24's comedy night was a massive hit with over 500 students in attendance. 
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
                <div className="h-32 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <div className="h-32 bg-gradient-sports rounded-lg flex items-center justify-center">
                  <Music className="w-12 h-12 text-white" />
                </div>
                <div className="h-32 bg-gradient-sports rounded-lg flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="h-32 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Star className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="epic-card">
          <CardHeader>
            <CardTitle className="varsity-font text-3xl text-foreground text-center">
              Questions About The Event?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+91 76220 82220</p>
                <p className="text-sm text-muted-foreground">Ishan Thakkar (Convener)</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">concours@daiict.ac.in</p>
                <p className="text-sm text-muted-foreground">Official CONCOURS Email</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}