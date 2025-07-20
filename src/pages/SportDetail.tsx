import { useParams } from "react-router-dom";
import { Trophy, Calendar, MapPin, DollarSign, Phone, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SportDetail() {
  const { sport } = useParams<{ sport: string }>();
  
  // Convert slug to display name
  const sportName = sport?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Sport";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="varsity-font text-5xl lg:text-6xl text-foreground mb-4">
            {sportName}
          </h1>
          <p className="text-xl text-muted-foreground">
            Tournament Details & Registration
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - spans 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Registration Card */}
            <Card className="epic-card">
              <CardHeader className="bg-gradient-sports text-white rounded-t-xl">
                <CardTitle className="varsity-font text-2xl flex items-center">
                  <Trophy className="w-6 h-6 mr-3" />
                  Tournament Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="btn-sports flex-1">
                    Register Now
                  </Button>
                  <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Download className="w-4 h-4 mr-2" />
                    Download Rulebook
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Feb 15-17, 2025</div>
                      <div className="text-sm text-muted-foreground">Event Dates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">DA-IICT Campus</div>
                      <div className="text-sm text-muted-foreground">Venue</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">₹50,000 Prize Pool</div>
                      <div className="text-sm text-muted-foreground">Total Prizes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tournament Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="varsity-font text-2xl text-foreground">
                  Tournament Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Tournament Format</h4>
                  <p className="text-muted-foreground">Knockout tournament with group stage qualifiers</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Team Size</h4>
                  <p className="text-muted-foreground">Maximum 12 players per team (including substitutes)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Registration Fee</h4>
                  <p className="text-muted-foreground">₹2,000 per team</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Prizes</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <div>🥇 Winner: ₹25,000 + Trophy</div>
                    <div>🥈 Runner-up: ₹15,000 + Trophy</div>
                    <div>🥉 Third Place: ₹10,000 + Trophy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sport Coordinators Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="varsity-font text-2xl text-foreground">
                  Sport Coordinators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg border border-yellow-400/20">
                    <h4 className="font-semibold mb-2">Coordinator 1</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <span className="text-sm">+91 87654 32109</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        <span className="text-sm">john@concours25.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 p-4 rounded-lg border border-yellow-400/20">
                    <h4 className="font-semibold mb-2">Coordinator 2</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <span className="text-sm">+91 87654 32109</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        <span className="text-sm">jane@concours25.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - spans 1/3 width */}
          <div className="lg:col-span-1">
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="varsity-font text-2xl text-foreground">
                  Action Gallery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 bg-gradient-sports rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Action Photo 1</span>
                </div>
                <div className="h-48 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Action Photo 2</span>
                </div>
                <div className="h-48 bg-gradient-sports rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Action Photo 3</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}