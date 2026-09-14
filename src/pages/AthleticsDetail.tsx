import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Trophy, Calendar, MapPin, DollarSign, Phone, Mail, Download, Users, Target, Clock, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AthleticsDetail() {
  const { category } = useParams<{ category: string }>();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  // Athletics categories data
  const athleticsCategories = [
    { 
      name: "Athletics", 
      slug: "athletics", 
      icon: "ðŸ‹ï¸", 
      category: "Boys and Girls", 
      registerLink: "https://forms.gle/8wRd1n446FNFjouw6",
      rulebookLink: "https://drive.google.com/file/d/1RUmiobogVDFbjwz6mB8az-EZEyNKB3Uw/view?usp=sharing",
      description: "Boys and Girls field and track sports featuring 100m, 200m, 400m, 800m, shot put, discus throw, and long jump. Athletes showcase their strength, technique, and explosive power.",
      format: "Individual Events",
      venue: "TBD",
      teamSize: "Individual",
      date: "29th Oct - 1st Nov, 2026",
      duration: "4 Days",
      contact: "Manthan Gajera: +91 83202 29391 \n Jenil Shah: +91 63543 98820"
    },
    { 
      name: "Relay", 
      slug: "relay-race", 
      icon: "ðŸƒâ€â™€ï¸", 
      category: "Boys and Girls", 
      registerLink: "https://forms.gle/MSSZHb5KbFnZF8kbA",
      rulebookLink: "https://drive.google.com/file/d/1RUmiobogVDFbjwz6mB8az-EZEyNKB3Uw/view?usp=sharing",
      description: "Relay races featuring 4x100m events. Teams demonstrate their speed, teamwork, and precise baton passing in exciting relay competitions.",
      format: "Team Events",
      venue: "TBD",
      teamSize: "4v4",
      date: "29th Oct - 1st Nov, 2026",
      duration: "4 Days",
      contact: "Manthan Gajera: +91 83202 29391 \n Jenil Shah: +91 63543 98820"
    }
  ];

  // Find the current category
  const currentCategory = athleticsCategories.find(c => c.slug === category);

  if (!currentCategory) {
    return (
      <div className="min-h-screen subtle-bg bg-gradient-to-br from-[#0a0203] via-[#1a0407] to-[#330609] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="concours-font text-4xl text-foreground mb-4">Athletics Category Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The requested athletics category could not be found.
          </p>
          <Button 
            className="btn-sports"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen subtle-bg bg-gradient-to-br from-[#0a0203] via-[#1a0407] to-[#330609] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">{currentCategory.icon}</div>
          <h1 className="timesnewroman-font text-5xl lg:text-6xl heading-gold mb-4">
            {currentCategory.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            Athletics Event Details & Registration
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - spans 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Registration Card */}
            <Card className="epic-card">
              <CardHeader className="bg-gradient-sports text-white rounded-t-xl">
                <CardTitle className="timesnewroman-font text-2xl flex items-center">
                  <Trophy className="w-6 h-6 mr-3" />
                  Event Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="btn-sports flex-1"
                   onClick={() => {
                    window.open(currentCategory.registerLink, '_blank');
                    console.log(`AthleticsDetail ${currentCategory.slug} registration button clicked`);
                  }}>
                    Register Now
                  </Button>
                
                  <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => {
                      window.open(currentCategory.rulebookLink, '_blank');
                      console.log(`AthleticsDetail ${currentCategory.slug} rule book download button clicked`);
                    }}>
                    <Download className="w-4 h-4 mr-2" />
                    View Rulebook
                  </Button>
              
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{currentCategory.date}</div>
                      <div className="text-sm text-muted-foreground">Event Dates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{currentCategory.teamSize}</div>
                      <div className="text-sm text-muted-foreground">Team Size</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">{currentCategory.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-2xl text-foreground">
                  Event Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Event Description</h4>
                  <p className="text-muted-foreground">{currentCategory.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Event Format</h4>
                  <p className="text-muted-foreground">{currentCategory.format}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Venue</h4>
                  <p className="text-muted-foreground">{currentCategory.venue}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - spans 1/3 width */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-2xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Point Of Contact</div>
                    <div className="text-sm text-muted-foreground whitespace-pre-line">{currentCategory.contact}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-sm text-muted-foreground">concoursdaiict@gmail.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-xl text-foreground">
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <Badge variant="secondary">{currentCategory.category}</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">{currentCategory.format}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Venue:</span>
                  <span className="font-medium">{currentCategory.venue}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Registration:</span>
                  <span className="font-medium text-green-500">Open</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

