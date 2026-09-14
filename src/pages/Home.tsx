import { Trophy, ArrowRight, Play, Users, Target, Calendar, Building2, GraduationCap, Medal, Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-stadium.jpg";
import logoImage from "@/assets/images/IMG_0054.PNG";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { soccerPitch } from "@lucide/lab";
import { LazyImage } from "@/components/LazyImage";

// Import grid images
import gridImage1 from "@/assets/images/Img-19.jpg";
import gridImage2 from "@/assets/images/DR--16.jpg";
import gridImage3 from "@/assets/images/WhatsApp Image 2025-09-19 at 20.35.31_5fbeae11.jpg";
import gridImage4 from "@/assets/images/AG--6.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const particles = useMemo(
    () =>
      [
        { left: "8%", delay: "0s", duration: "18s" },
        { left: "22%", delay: "4s", duration: "21s" },
        { left: "37%", delay: "1.5s", duration: "19s" },
        { left: "51%", delay: "7s", duration: "23s" },
        { left: "66%", delay: "2.8s", duration: "20s" },
        { left: "79%", delay: "5.5s", duration: "22s" },
        { left: "91%", delay: "3.2s", duration: "17s" },
        { left: "14%", delay: "9s", duration: "24s" },
      ] as const,
    []
  );
  
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
    const iframe = document.querySelector('iframe[title="CONCOURS 2024 Aftermovie"]') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/dEejqaG3w7g?autoplay=1&rel=0&modestbranding=1&hd=1&vq=hd1080&fs=1&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=1&disablekb=0&enablejsapi=1";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Particles Background - Red & Silver Sparks */}
      <div className="particles fixed inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 hero-red-tint"></div>
        <div className="absolute inset-0 hero-red-wash"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-16">
          {/* Trophy Crest Shield Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logoImage} 
              alt="Concours Crest Logo" 
              className="w-44 h-44 sm:w-52 sm:h-52 trophy-glow transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Main Heading */}
          <h1 className="concours-font text-7xl md:text-9xl lg:text-[10rem] hero-title-silver mb-3 leading-none tracking-tight">
            CONCOURS
          </h1>
          
          {/* Tagline */}
          <h2 className="concours-font text-2xl md:text-4xl lg:text-5xl heading-metallic-silver mb-8 tracking-wider">
            WHERE GLORY LASTS FOREVER
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            The ultimate sports festival at Dhirubhai Ambani University. 
            Experience the thrill, embrace the competition, and create memories that last forever.
          </p>
          
          {/* CTA Buttons - Sports Crimson & Metallic Silver */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="btn-sports text-xl px-10 py-6 flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto"
              onClick={() => navigate('/register')}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-6 h-6" />
            </Button>
            {/* <Button 
              className="btn-silver-cta text-xl px-10 py-6 flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto"
              onClick={() => navigate('/sports-events')}
            >
              <span>EXPLORE EVENTS</span>
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <Badge className="mb-6 silver-badge px-4 py-1.5 backdrop-blur-sm font-semibold tracking-wide">
                About CONCOURS
              </Badge>
              <h2 className="concours-font text-4xl lg:text-6xl heading-metallic-silver mb-6 tracking-wide">
                The Ultimate Sports Festival
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                CONCOURS is more than just a sports festival – it's where champions are born, 
                legends are made, and glory becomes eternal. Join us for an unforgettable journey 
                of competition, sportsmanship, and pure athletic excellence.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From basketball courts to football fields, from chess boards to marathon tracks, 
                CONCOURS brings together the finest athletes from across the nation to compete 
                in the spirit of true sportsmanship.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="epic-card overflow-hidden group cursor-pointer" onClick={() => handleGridImageClick('sports-events')}>
                  <CardContent className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage1} 
                        alt="Sports Event 1" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-900 to-black animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <Target className="w-6 h-6 text-red-400 mb-1" />
                        <p className="font-semibold text-sm">Sports Events</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="epic-card overflow-hidden group cursor-pointer" onClick={() => handleGridImageClick('athletes')}>
                  <CardContent className="p-0">
                    <div className="h-40 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage2} 
                        alt="Athletes" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-900 to-black animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <Users className="w-6 h-6 text-red-400 mb-1" />
                        <p className="font-semibold text-sm">Athletes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="epic-card overflow-hidden group cursor-pointer" onClick={() => handleGridImageClick('trophy-awards')}>
                  <CardContent className="p-0">
                    <div className="h-40 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage3} 
                        alt="Trophy & Awards" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-900 to-black animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <Trophy className="w-6 h-6 text-[#979694] mb-1" />
                        <p className="font-semibold text-sm">Trophies & Honors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="epic-card overflow-hidden group cursor-pointer" onClick={() => handleGridImageClick('schedule')}>
                  <CardContent className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <LazyImage 
                        src={gridImage4} 
                        alt="Schedule & Events" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: 'center 30%' }}
                        placeholder={<div className="w-full h-full bg-gradient-to-br from-gray-900 to-black animate-pulse"></div>}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <Calendar className="w-6 h-6 text-red-400 mb-1" />
                        <p className="font-semibold text-sm">Schedule & Events</p>
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
              <Card key={index} className="epic-card text-center p-8 group">
                <CardContent className="space-y-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    index === 1
                      ? "bg-gradient-to-br from-[#979694]/30 to-[#330609]/70 border border-[#979694]/50 text-gray-200 group-hover:shadow-[0_0_18px_rgba(151,150,148,0.6)]"
                      : "bg-gradient-to-br from-[#840c15]/30 to-[#330609]/70 border border-[#918d8c]/30 text-red-400 group-hover:border-[#840c15] group-hover:shadow-[0_0_16px_rgba(132,12,21,0.5)]"
                  }`}>
                    {stat.icon === "soccerPitch" ? (
                      <Icon iconNode={soccerPitch} className="w-8 h-8" />
                    ) : (
                      <stat.icon className="w-8 h-8" />
                    )}
                  </div>
                  <div className="concours-font text-5xl heading-metallic-silver tracking-wider">{stat.value}</div>
                  <div className="text-gray-300 font-medium tracking-wide">{stat.label}</div>
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
          backgroundImage: `linear-gradient(rgba(10, 2, 3, 0.88), rgba(51, 6, 9, 0.82)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <Badge className="mb-6 silver-badge px-4 py-1.5 backdrop-blur-sm font-semibold tracking-wide">
            Relive The Moments
          </Badge>
          <h2 className="timesnewroman-font text-4xl lg:text-6xl heading-metallic-silver mb-8 tracking-wide">
            THE AFTERMOVIE - CONCOURS
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the energy, passion, and unforgettable moments from our incredible festival.
          </p>
          
          {/* YouTube Video with Thumbnail Preview */}
          <Card className="epic-card max-w-4xl mx-auto overflow-hidden cursor-pointer border-[#918d8c]/30 hover:border-[#840c15]" onClick={handleVideoClick}>
            <CardContent className="p-0 relative">
              <div className="aspect-video relative overflow-hidden">
                {/* YouTube Thumbnail Background - Hidden when video is playing */}
                <div className={`absolute inset-0 ${isVideoPlaying ? 'hidden' : 'block'}`}>
                  <img 
                    src="https://img.youtube.com/vi/dEejqaG3w7g/hqdefault.jpg" 
                    alt="CONCOURS Aftermovie Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://img.youtube.com/vi/dEejqaG3w7g/maxresdefault.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                {/* Play Button Overlay - Hidden when video is playing */}
                <div className={`absolute inset-0 flex items-center justify-center ${isVideoPlaying ? 'hidden' : 'flex'}`}>
                  <div className="w-24 h-24 bg-gradient-to-br from-[#840c15] to-[#6d0c13] border-2 border-white/40 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(132,12,21,0.85)]">
                    <Play className="w-10 h-10 text-white ml-1 fill-white" />
                  </div>
                </div>
                
                {/* Video Title Overlay - Hidden when video is playing */}
                <div className={`absolute bottom-4 left-4 right-4 ${isVideoPlaying ? 'hidden' : 'block'}`}>
                  <div className="bg-[#0a0203]/85 backdrop-blur-md rounded-lg p-3 border border-[#918d8c]/25 text-left">
                    <div className="text-white text-lg font-bold">CONCOURS Aftermovie</div>
                    <div className="text-gray-300 text-sm">Click to watch the highlights from the incredible festival</div>
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