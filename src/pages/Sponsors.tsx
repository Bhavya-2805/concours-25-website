import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// 👇 Import your logos from src/assets (edit the paths/file names yourself)
import titleLogo from "@/assets/sponsors/Avore.jpeg";
import coTitleLogo from "@/assets/sponsors/Gujarat_Tourism.jpeg";
import educationalLogo from "@/assets/sponsors/Eduget_Global.jpeg";
import eventLogo from "@/assets/sponsors/Matrix360.png";
import mediaLogo from "@/assets/sponsors/Hey_Gandhinagar.jpeg";

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-[#840c15]/25 text-red-200 border-[#840c15]/50 px-4 py-1.5 backdrop-blur-sm shadow-sm">
            Partnership Opportunities
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-white mb-6 tracking-wide">
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
          {/* Title Sponsor (largest) */}
          <div>
            <h2 className="varsity-font text-3xl text-center heading-gold mb-8">Title Sponsor</h2>
            <div className="flex justify-center">
              <Card className="epic-card w-full max-w-md">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-sports rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4 overflow-hidden">
                    <img src={titleLogo} alt="Avore" className="w-full h-full object-contain p-2" />
                  </div>
                  <h3 className="varsity-font text-2xl text-foreground">Avore</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Co-Title Sponsor */}
          <div>
            <h2 className="varsity-font text-3xl text-center heading-gold mb-8">Co-Title Sponsor</h2>
            <div className="flex justify-center">
              <Card className="epic-card w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-accent rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4 overflow-hidden">
                    <img src={coTitleLogo} alt="Gujarat Tourism" className="w-full h-full object-contain p-2" />
                  </div>
                  <h3 className="varsity-font text-xl text-foreground">Gujarat Tourism</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational Sponsor (same size as Co-Title) */}
          <div>
            <h2 className="varsity-font text-3xl text-center heading-gold mb-8">Educational Sponsor</h2>
            <div className="flex justify-center">
              <Card className="epic-card w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-accent rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4 overflow-hidden">
                    <img src={educationalLogo} alt="Eduget Global" className="w-full h-full object-contain p-2" />
                  </div>
                  <h3 className="varsity-font text-xl text-foreground">Eduget Global</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Event Sponsor (same size as Co-Title) */}
          <div>
            <h2 className="varsity-font text-3xl text-center heading-gold mb-8">Event Sponsor</h2>
            <div className="flex justify-center">
              <Card className="epic-card w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-accent rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4 overflow-hidden">
                    <img src={eventLogo} alt="Matrix360" className="w-full h-full object-contain p-2" />
                  </div>
                  <h3 className="varsity-font text-xl text-foreground">Matrix360</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Media Partner (same size as Co-Title) */}
          <div>
            <h2 className="varsity-font text-3xl text-center heading-gold mb-8">Media Partner</h2>
            <div className="flex justify-center">
              <Card className="epic-card w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-accent rounded-lg mx-auto flex items-center justify-center trophy-glow mb-4 overflow-hidden">
                    <img src={mediaLogo} alt="Hey Gandhinagar" className="w-full h-full object-contain p-2" />
                  </div>
                  <h3 className="varsity-font text-xl text-foreground">Hey Gandhinagar</h3>
                </CardContent>
              </Card>
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
              <h2 className="varsity-font text-3xl heading-gold mb-4">
                Partner With Us
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join hands with CONCOURS'26 and reach thousands of young, dynamic audiences while supporting sports excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-accent">
                      Explore Partnership
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Partnership Inquiry</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Interested in sponsoring CONCOURS'26? Contact our team for partnership opportunities.
                      </p>
                      <div className="space-y-2">
                        <p><strong>Contact:</strong> Neeti Gunsai (Convener)</p>
                        <p><strong>Phone:</strong> +91 63557 70669</p>
                        <p><strong>Email:</strong> concours@daiict.ac.in</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}