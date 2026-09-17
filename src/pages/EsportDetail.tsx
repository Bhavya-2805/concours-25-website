import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Trophy, Calendar, MapPin, DollarSign, Phone, Mail, Download, Users, Monitor, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EsportDetail() {
  const { game } = useParams<{ game: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // E-sports games data
  const esportsGames = [
    {
      name: "Free Fire Max (BR)",
      slug: "freefire-br",
      icon: "🔥",
      category: "Battle Royale",
      registerLink: "https://docs.google.com/forms/d/1aDzaXXQ9RX-PZf8BFrz4Jc0nmTZV4S1UkhQrFHPVc5M/edit?usp=drive_web&ouid=101228523565298084421",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Free Fire Max offers an intense battle royale experience with high-definition graphics and immersive gameplay. Players parachute onto an island, searching for weapons and supplies as they fight to be the last one standing. With both solo and squad modes, improved effects, and smooth play, it delivers dynamic action for mobile gamers.",
      prizePool: "To be announced",
      teamSize: "4v4",
      date: "29th Oct - 1st Nov, 2026",
      format: "Battle Royale",
      platform: "Mobile",

    },
    {
      name: "Free Fire Max (CS)",
      slug: "freefire-cs",
      icon: "🎯",
      category: "Clash Squad",
      registerLink: "https://docs.google.com/forms/d/1UX7fZbXPVuCRDTeHx1Hx0V9PFDSQEZDZ7BwKwA0O08g/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Free Fire Max offers an intense Clash squad experience with high-definition graphics and immersive gameplay. Players compete in a team, select weapons and supplies as they fight to be the last one standing. With squad modes, improved effects, and smooth play, it delivers dynamic action for mobile gamers.",
      prizePool: "To be announced",
      teamSize: "4v4",
      date: "29th Oct - 1st Nov, 2026",
      format: "Clash Squad, Knockouts",
      platform: "Mobile",
    },
    {
      name: "BGMI",
      slug: "bgmi",
      icon: "🎖️",
      category: "Battle Royale",
      registerLink: "https://docs.google.com/forms/d/1ZRGq20PAFK8gZRdaSb7KuBU1gtFKQcVjItxI2pPlqQY/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Battlegrounds Mobile India is a multiplayer battle royale game where up to 100 players compete in large-scale, last-person-standing deathmatches. Players explore extensive maps, scavenge equipment, and strategize to survive shrinking safe zones. The game features squad play and an array of weapons for combat in a dynamic, competitive environment.",
      prizePool: "To be announced",
      teamSize: "4v4",
      date: "29th Oct - 1st Nov, 2026",
      format: "Battle Royale",
      platform: "Mobile",
    },
    {
      name: "Mobile Legends",
      slug: "mobile-legends",
      icon: "⚔️",
      category: "FPS",
      registerLink: "https://docs.google.com/forms/d/1Rud8iazgYea7iPhSIwabfOxDinnVqvIs6AwO1qRdsRI/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Mobile Legends: Bang Bang is a real-time multiplayer MOBA where players compete in 5v5 battles against opposing teams. With diverse heroes, unique abilities, strategic team compositions, and objective-based gameplay, it delivers an engaging competitive experience. Ranked matches, tournaments, and coordinated team play make it ideal for mobile esports competitions.",
      prizePool: "To be announced",
      teamSize: "5v5",
      date: "29th Oct - 1st Nov, 2026",
      format: "Best of 3, Knockouts",
      platform: "Mobile",

    },
    {
      name: "Valorant",
      slug: "valorant",
      icon: "🔫",
      category: "FPS",
      registerLink: "https://docs.google.com/forms/d/153airOjIR3QemuXlYVDcq9z4AIQxPrdTaWHeI3I8cM0/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Valorant is a competitive, 5v5 tactical first-person shooter for PC, where players, known as 'agents,' combine precise gunplay with unique character abilities. Each round emphasizes teamwork and strategy, as attackers attempt to plant a device called the 'spike' while defenders try to prevent it. Valorantâ€™s complex mechanics and balanced gameplay attract both casual and professional esports players.",
      prizePool: "To be announced",
      teamSize: "5v5",
      date: "29th Oct - 1st Nov, 2026",
      format: "Knockout",
      platform: "Desktop/Laptop",

    },
    {
      name: "Clash Royale",
      slug: "clash-royale",
      icon: "👑",
      category: "Strategy",
      registerLink: "https://docs.google.com/forms/d/1qXK6X0N44FILAwH2Fl49otqfSZa-5IlclVHm-7t8dWI/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Clash Royale is a real-time multiplayer strategy game blending collectible card, tower defence, and battle arena elements. Players collect and upgrade cards featuring familiar 'Clash' characters, spells, and buildings, battling opponents to destroy towers and claim victory. Its competitive ladders, quick matches, and engaging esports tournaments have made Clash Royale a staple in mobile gaming.",
      prizePool: "To be announced",
      teamSize: "1v1",
      date: "29th Oct - 1st Nov, 2026",
      format: "Battle Draft, Knockouts",
      platform: "Mobile",

    },
    {
      name: "EA FC Mobile",
      slug: "ea-fc-mobile",
      icon: "⚽",
      category: "Sports",
      registerLink: "https://docs.google.com/forms/d/1Fn_lfwmsUUcrEB8GqadhBCuMbE_Eu9FKo_TQvVWjKSw/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "EA SPORTS FC 25 is the latest football simulation offering from Electronic Arts, featuring authentic clubs, leagues, and players from around the world. New gameplay modes such as 5v5 Rush, improved tactical control with FC IQ, and both menâ€™s and womenâ€™s career options bring deeper strategy and more ways to win, making it a premier esports football title.",
      prizePool: "To be announced",
      teamSize: "1v1",
      date: "29th Oct - 1st Nov, 2026",
      format: "Knockout",
      platform: "Mobile",

    },
    {
      name: "Brawl Stars", 
      slug: "brawl-stars",
      icon: "⭐",
      category: "Action",
      registerLink: "https://docs.google.com/forms/d/1eYitqCeXhUl2rCyaK-lQTxqtrpdCr3vtgFPmMkWikLw/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Brawl Stars is a fast-paced multiplayer action game where players battle opponents in short, real-time matches across a variety of game modes. With unique Brawlers, special abilities, customizable skins, and strategic team play, it combines quick reflexes with tactical gameplay. Competitive modes, events, leaderboards, and tournaments make it well-suited for mobile esports competitions.",
      prizePool: "To be announced",
      teamSize: "3v3",
      date: "29th Oct - 1st Nov, 2026",
      format: "Best of 3, Knockouts",
      platform: "Mobile",

    },
    {
      name: "Mini Militia",
      slug: "mini-militia",
      icon: "🪖",
      category: "Action",
      registerLink: "https://docs.google.com/forms/d/1FtN5Vo3oJQA-kILfBAxZmoJ5XKvjjJ7SkezzDlJ282E/edit",
      rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
      description: "Mini Militia - Doodle Army 2 is a 2D multiplayer shooter known for its fast, chaotic combat and doodle-style graphics. Players can engage locally or online in teams or free-for-all matches, using a wide array of weapons and jetpacks for vertical movement. Accessible yet competitive, itâ€™s perfect for quick, action-packed multiplayer battles.",
      prizePool: "To be announced",
      teamSize: "4v4",
      date: "29th Oct - 1st Nov, 2026",
      format: "Knockouts",
      platform: "Mobile",

    }
  ];

  // Find the current game
  const currentGame = esportsGames.find(g => g.slug === game);

  if (!currentGame) {
    return (
      <div className="min-h-screen subtle-bg bg-gradient-to-br from-[#0a0203] via-[#1a0407] to-[#330609] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="concours-font text-4xl text-foreground mb-4">Game Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The requested e-sports game could not be found.
          </p>
          <Button
            className="btn-esports"
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
        <div className="text-center mb-12 ">
          <div className="text-8xl mb-6">{currentGame.icon}</div>
          <h1 className="timesnewroman-font text-5xl lg:text-6xl heading-gold mb-4">
            {currentGame.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            E-Sports Tournament Details & Registration
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - spans 2/3 width */}
          <div className="lg:col-span-2 space-y-8">

            {/* Registration Card */}
            <Card className="epic-card">
              <CardHeader className="bg-gradient-esports text-white rounded-t-xl">
                <CardTitle className="timesnewroman-font text-2xl flex items-center">
                  <Trophy className="w-6 h-6 mr-3" />
                  Tournament Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="btn-esports flex-1"
                    onClick={() => {
                      window.open(currentGame.registerLink, '_blank');
                      console.log(`EsportDetail ${currentGame.slug} registration button clicked`);
                    }}>
                    Register Now
                  </Button>

                  <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => {
                      window.open(currentGame.rulebookLink, '_blank');
                      console.log(`EsportDetail ${currentGame.slug} rule book download button clicked`);
                    }}>
                    <Download className="w-4 h-4 mr-2" />
                    View Rulebook
                  </Button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{currentGame.date}</div>
                      <div className="text-sm text-muted-foreground">Event Dates</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{currentGame.teamSize}</div>
                      <div className="text-sm text-muted-foreground">Team Size</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">{currentGame.prizePool} </div>
                      <div className="text-sm text-muted-foreground">Total Prizes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tournament Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-2xl text-foreground">
                  Tournament Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Game Description</h4>
                  <p className="text-muted-foreground">{currentGame.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Tournament Format</h4>
                  <p className="text-muted-foreground">{currentGame.format}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Platform</h4>
                  <p className="text-muted-foreground">{currentGame.platform}</p>
                </div>


              </CardContent>
            </Card>

            {/* Prize Distribution Card */}

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
                    <div className="text-sm text-muted-foreground">Prins Anghan: +91 63517 23595</div>
                    <div className="text-sm text-muted-foreground">Rushit Koladiya: +91 70419 30742</div>
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
                  <Badge variant="secondary">{currentGame.category}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">{currentGame.format}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Platform:</span>
                  <span className="font-medium">{currentGame.platform}</span>
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

