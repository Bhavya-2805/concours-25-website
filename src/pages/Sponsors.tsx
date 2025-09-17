import { Star, Handshake, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Partnership Opportunities
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            OUR SPONSORS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join us as a sponsor and be part of the most exciting sports festival in the region.
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center trophy-glow floating-element">
              <Handshake className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 bg-background subtle-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Title Sponsor */}
          <div>
            <h2 className="varsity-font text-3xl text-center text-foreground mb-8">Title Sponsor</h2>
            <div className="flex justify-center">
              <Card className="epic-card w-full max-w-md">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-sports rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4">
                    <Star className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="varsity-font text-2xl text-foreground">Your Brand Here</h3>
                  <p className="text-muted-foreground mt-2">Premium Sponsorship Package</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Co-Title Sponsors */}
          <div>
            <h2 className="varsity-font text-3xl text-center text-foreground mb-8">Co-Title Sponsors</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2].map((i) => (
                <Card key={i} className="epic-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-accent rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4">
                      <Star className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="varsity-font text-xl text-foreground">Sponsor {i}</h3>
                    <p className="text-muted-foreground text-sm">Co-Title Package</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Associate Partners */}
          <div>
            <h2 className="varsity-font text-3xl text-center text-foreground mb-8">Associate Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="epic-card">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-sports rounded-lg mx-auto flex items-center justify-center mb-3">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Partner {i}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Sponsors */}
          <div>
            <h2 className="varsity-font text-3xl text-center text-foreground mb-8">Event Sponsors</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="epic-card">
                  <CardContent className="p-3 text-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded mx-auto flex items-center justify-center mb-2">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-foreground font-medium">Sponsor {i}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Card className="epic-card">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto trophy-glow mb-6">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h2 className="varsity-font text-3xl text-foreground mb-4">
                Partner With Us
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join hands with CONCOURS'25 and reach thousands of young, dynamic audiences while supporting sports excellence.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-accent">
                    Explore Partnership
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    className="btn-accent mt-2"
                    onClick={() => {
                      window.open('https://PLACEHOLDER_GOOGLE_FORM_URL_SPONSOR', '_blank');
                      console.log('Sponsors partnership button clicked');
                    }}
                  >
                    Register as Sponsor
                  </Button>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Partnership Inquiry</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Interested in sponsoring CONCOURS'25? Contact our team for partnership opportunities.
                    </p>
                    <div className="space-y-2">
                      <p><strong>Contact:</strong> Ishan Thakkar (Convener)</p>
                      <p><strong>Phone:</strong> +91 76220 82220</p>
                      <p><strong>Email:</strong> concours@daiict.ac.in</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}