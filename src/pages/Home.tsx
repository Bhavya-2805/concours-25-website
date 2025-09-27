import { Trophy, ArrowRight, Play, Users, Target, Calendar, Building2, GraduationCap, Medal, Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-stadium.jpg";
import logoImage from "@/assets/images/IMG_0054.PNG";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { soccerPitch } from "@lucide/lab";
import { LazyImage } from "@/components/LazyImage";


// Import grid images (you can add your image files to src/assets/images/)
import gridImage1 from "@/assets/images/Img-19.jpg";
import gridImage2 from "@/assets/images/DR--16.jpg";
import gridImage3 from "@/assets/images/WhatsApp Image 2025-09-19 at 20.35.31_5fbeae11.jpg";
import gridImage4 from "@/assets/images/AG--6.jpg";
export default function Home() {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const stats = [
    { label: "Sports Events", value: "10+", icon: "soccerPitch" },
    { label: "Expected Athletes", value: "2000+", icon: Users },
    { label: "Participating Colleges", value: "50+", icon: GraduationCap },
  ];

  // Grid image click handlers
  const handleGridImageClick = (imageType: string) => {
    switch (imageType) {
      case 'sports-events':
        navigate('/sports-events');
        break;
      case 'athletes':
        navigate('/athletes');
        break;
      case 'trophy-awards':
        navigate('/trophy-awards');
        break;
      case 'schedule':
        navigate('/schedule');
        break;
      default:
        console.log(`Clicked on ${imageType}`);
    }
  };

  // Video click handler
  const handleVideoClick = () => {
    setIsVideoPlaying(true);
    // Update the iframe src to include autoplay when user clicks
    const iframe = document.querySelector('iframe[title="CONCOURS 2024 Aftermovie"]') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/dEejqaG3w7g?autoplay=1&rel=0&modestbranding=1&hd=1&vq=hd1080&fs=1&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=1&disablekb=0&enablejsapi=1";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Particles Background */}
      <div className="particles fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center stadium-hero grid-pattern"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Trophy Icon - Reduced animation intensity */}
          <div className="mb-8 flex justify-center">
            <img src={logoImage} alt="Logo" className="w-52 h-52" />
          </div>

          {/* Main Heading */}
          <h1 className="concours-font text-7xl md:text-9xl lg:text-[10rem] text-foreground mb-4 leading-none">
            CONCOURS'25
          </h1>
          
          {/* Tagline */}
          <h2 className="concours-font text-2xl md:text-4xl lg:text-5xl text-primary mb-8 tracking-wide">
            WHERE GLORY LASTS FOREVER
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            The ultimate sports festival at Dhirubhai Ambani University. 
            Experience the thrill, embrace the competition, and create memories that last forever.
          </p>
          
          {/* CTA Button - Reduced pulse intensity */}
          <Button 
            className="btn-sports text-xl px-12 py-6"
            onClick={() => navigate('/register')}
          >
            REGISTER NOW

            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
                About CONCOURS'25
              </Badge>
              <h2 className="concours-font text-3xl lg:text-6xl text-foreground mb-6">
                The Ultimate Sports Festival
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                CONCOURS'25 is more than just a sports festival – it's where champions are born, 
                legends are made, and glory becomes eternal. Join us for an unforgettable journey 
                of competition, sportsmanship, and pure athletic excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From basketball courts to football fields, from chess boards to marathon tracks, 
                CONCOURS'25 brings together the finest athletes from across the nation to compete 
                in the spirit of true sportsmanship.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="epic-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleGridImageClick('sports-events')}>
                  <CardContent className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage1} 
                        alt="Sports Event 1" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="">
                        <Target className="" />
                        <p className="font-semibold"></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="epic-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleGridImageClick('athletes')}>
                  <CardContent className="p-0">
                    <div className="h-40 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage2} 
                        alt="Athletes" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute ">
                        <Users className="w-6 h-6 mb-1" />
                        <p className="font-semibold text-sm"></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="epic-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleGridImageClick('trophy-awards')}>
                  <CardContent className="p-0">
                    <div className="h-40 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage3} 
                        alt="Trophy & Awards" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute  text-white">
                        <Trophy className="w-6 h-6 mb-1" />
                        <p className="font-semibold text-sm"></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="epic-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleGridImageClick('schedule')}>
                  <CardContent className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage4} 
                        alt="Schedule & Events" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: 'center 30%' }}
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute  text-white">
                        <Calendar className="w-8 h-8 mb-2" />
                        <p className="font-semibold"></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="epic-card text-center p-8">
                <CardContent className="space-y-4">
                  <div className="icon-container mx-auto mb-4">
                    {stat.icon === "soccerPitch" ? (
                      <Icon iconNode={soccerPitch} className="icon-large icon-primary" />
                    ) : (
                      <stat.icon className="icon-large icon-primary" />
                    )}
                  </div>
                  <div className="concours-font text-4xl text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftermovie Section */}
      <section 
        className="py-24 relative stadium-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Relive The Moments
          </Badge>
          <h2 className="timesnewroman-font text-4xl lg:text-6xl text-foreground mb-8">
            THE AFTERMOVIE - CONCOURS'24
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Experience the energy, passion, and unforgettable moments from last year's incredible festival.
          </p>
          
          {/* YouTube Video with Thumbnail Preview */}
          <Card className="epic-card max-w-4xl mx-auto overflow-hidden cursor-pointer" onClick={handleVideoClick}>
            <CardContent className="p-0 relative">
              <div className="aspect-video relative overflow-hidden">
                {/* YouTube Thumbnail Background - Hidden when video is playing */}
                <div className={`absolute inset-0 ${isVideoPlaying ? 'hidden' : 'block'}`}>
                  <img 
                    src="https://img.youtube.com/vi/dEejqaG3w7g/hqdefault.jpg" 
                    alt="CONCOURS 2024 Aftermovie Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to maxresdefault if hqdefault fails
                      e.currentTarget.src = "https://img.youtube.com/vi/dEejqaG3w7g/maxresdefault.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                {/* Play Button Overlay - Hidden when video is playing */}
                <div className={`absolute inset-0 flex items-center justify-center ${isVideoPlaying ? 'hidden' : 'flex'}`}>
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                
                {/* Video Title Overlay - Hidden when video is playing */}
                <div className={`absolute bottom-4 left-4 right-4 ${isVideoPlaying ? 'hidden' : 'block'}`}>
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-lg font-bold">CONCOURS 2024 Aftermovie</div>
                    <div className="text-white/80 text-sm">Click to watch the highlights from last year's incredible festival</div>
                  </div>
                </div>
              </div>
              
              {/* YouTube iframe - Hidden initially, shows on click */}
              <div className={`absolute inset-0 ${isVideoPlaying ? 'block' : 'hidden'} z-10`}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dEejqaG3w7g?rel=0&modestbranding=1&hd=1&vq=hd1080&fs=1&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=1&disablekb=0&enablejsapi=1"
                  title="CONCOURS 2024 Aftermovie"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}