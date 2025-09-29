import { useEffect } from "react";
import { Trophy, Users, Target, Calendar, Quote, Medal, Building2, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoImage from "@/assets/images/IMG_0054.PNG";
import { LazyImage } from "@/components/LazyImage";
import { soccerPitch } from "@lucide/lab";

// Import gallery images
import gridImage1 from "@/assets/images/Img-19.jpg";
import gridImage2 from "@/assets/images/DR--16.jpg";
import gridImage3 from "@/assets/images/WhatsApp Image 2025-09-19 at 20.35.31_5fbeae11.jpg";
import gridImage4 from "@/assets/images/AG--6.jpg";
import gridImage5 from "@/assets/images/DR--1.jpg";
import gridImage6 from "@/assets/images/DR--20.jpg";
import gridImage7 from "@/assets/images/DR-1660.jpg";
import gridImage8 from "@/assets/images/IMG__1.jpg";
import gridImage9 from "@/assets/images/IMG__18.jpg";
import gridImage10 from "@/assets/images/IMG__3.jpg";
import gridImage11 from "@/assets/images/IMG__5 (1).jpg";
import gridImage12 from "@/assets/images/IMG__55.jpg";
import gridImage13 from "@/assets/images/IMG_1498.jpg";
import gridImage14 from "@/assets/images/Img-25.jpg";
import gridImage15 from "@/assets/images/JP-16.jpg";
import gridImage16 from "@/assets/images/JP-6.jpg";

export default function Concours24() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery images array
  const galleryImages = [
    gridImage1, gridImage2, gridImage3, gridImage4,
    gridImage5, gridImage6, gridImage7, gridImage8,
    gridImage9, gridImage10, gridImage11, gridImage12,
    gridImage13, gridImage14, gridImage15, gridImage16
  ];

  const stats = [
    { label: "Total Athletes", value: "1800+", icon: Medal },
    { label: "Sports Events", value: "10+", icon: Trophy },
    { label: "Participating Colleges", value: "50+", icon: GraduationCap },
    { label: "Memories Created", value: "∞", icon: Heart },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Last Year's Glory
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            CONCOURS'24
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Relive the incredible moments, amazing performances, and unforgettable memories from CONCOURS'24.
          </p>
          <div className="flex justify-center">
            <img src={logoImage} alt="Logo" className="w-28 h-28" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background subtle-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="epic-card text-center">
                <CardContent className="p-6">
                  <div className="icon-container mx-auto mb-4">
                    <stat.icon className="icon-large icon-primary" />
                  </div>
                  <div className="concours-font text-4xl text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="varsity-font text-4xl text-foreground mb-4">Event Gallery</h2>
            <p className="text-muted-foreground">Captured moments from the festival</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <Card key={i} className="epic-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <LazyImage 
                      src={image} 
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full object-cover"
                      placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}