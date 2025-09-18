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
      name: "Valorant", 
      slug: "valorant", 
      icon: "🔫", 
      category: "FPS", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_VALORANT", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_VALORANT",
      description: "Tactical 5v5 shooter where strategy meets precision. Form your team and dominate the battlefield.",
      prizePool: "₹50,000",
      teamSize: "5v5",
      date: "March 15-16, 2024",
      format: "Double Elimination",
      platform: "PC",
      rules: [
        "Standard competitive rules apply",
        "Best of 3 maps for all matches",
        "Finals will be Best of 5",
        "No cheating or exploitation allowed",
        "Teams must arrive 30 minutes before scheduled time"
      ]
    },
    { 
      name: "CS:GO 2", 
      slug: "csgo2", 
      icon: "🎯", 
      category: "FPS", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_CSGO2", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_CSGO2",
      description: "The classic tactical shooter reimagined. Experience intense counter-terrorist action.",
      prizePool: "₹40,000",
      teamSize: "5v5",
      date: "March 17-18, 2024",
      format: "Swiss System + Playoffs",
      platform: "PC",
      rules: [
        "MR12 format for all matches",
        "Team selection: knife round",
        "Overtime: MR6 with 4k starting money",
        "Standard tournament map pool",
        "No third-party software allowed"
      ]
    },
    { 
      name: "League of Legends", 
      slug: "lol", 
      icon: "⚔️", 
      category: "MOBA", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_LOL", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_LOL",
      description: "Epic 5v5 MOBA battles. Choose your champion and lead your team to victory on the Rift.",
      prizePool: "₹60,000",
      teamSize: "5v5",
      date: "March 19-20, 2024",
      format: "Group Stage + Single Elimination",
      platform: "PC",
      rules: [
        "Tournament Draft mode",
        "Latest patch version",
        "Best of 3 for all matches",
        "Finals Best of 5",
        "Bans: 3 per team in draft phase"
      ]
    },
    { 
      name: "Dota 2", 
      slug: "dota2", 
      icon: "🛡️", 
      category: "MOBA", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_DOTA2", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_DOTA2",
      description: "The ultimate MOBA experience. Master complex heroes and outplay your opponents.",
      prizePool: "₹70,000",
      teamSize: "5v5",
      date: "March 21-22, 2024",
      format: "Double Elimination",
      platform: "PC",
      rules: [
        "Captains Mode",
        "Latest game patch",
        "Best of 3 for all matches",
        "Grand Final Best of 5",
        "Standard tournament rules apply"
      ]
    },
    { 
      name: "FIFA 24", 
      slug: "fifa24", 
      icon: "⚽", 
      category: "Sports", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_FIFA24", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_FIFA24",
      description: "Showcase your football skills in the latest FIFA edition. Score goals and claim glory.",
      prizePool: "₹30,000",
      teamSize: "1v1",
      date: "March 23, 2024",
      format: "Group Stage + Knockout",
      platform: "PC/Console",
      rules: [
        "6 minute halves",
        "Ultimate Team squads",
        "No custom tactics allowed",
        "Injuries on, offsides on",
        "Standard tournament settings"
      ]
    },
    { 
      name: "NBA 2K24", 
      slug: "nba2k24", 
      icon: "🏀", 
      category: "Sports", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_NBA2K24", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_NBA2K24",
      description: "Dominate the court in NBA 2K24. Dunk, shoot, and defend your way to championship.",
      prizePool: "₹25,000",
      teamSize: "1v1",
      date: "March 24, 2024",
      format: "Single Elimination",
      platform: "PC/Console",
      rules: [
        "5 minute quarters",
        "All-Star difficulty",
        "Current NBA teams only",
        "No custom rosters",
        "Standard tournament rules"
      ]
    },
    { 
      name: "Chess.com", 
      slug: "chess-com", 
      icon: "♟️", 
      category: "Strategy", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_CHESSCOM", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_CHESSCOM",
      description: "Battle of minds in the royal game. Outthink your opponent in this ultimate strategy contest.",
      prizePool: "₹20,000",
      teamSize: "1v1",
      date: "March 25, 2024",
      format: "Swiss System",
      platform: "PC",
      rules: [
        "Rapid time control: 15+10",
        "Standard chess rules apply",
        "No engine assistance allowed",
        "7 rounds total",
        "Tiebreaks: Buchholz system"
      ]
    },
    { 
      name: "Rocket League", 
      slug: "rocket-league", 
      icon: "🚗", 
      category: "Sports", 
      registerLink: "https://PLACEHOLDER_GOOGLE_FORM_URL_ROCKETLEAGUE", 
      rulebookLink: "https://PLACEHOLDER_RULEBOOK_URL_ROCKETLEAGUE",
      description: "High-octane soccer with rocket-powered cars. Score amazing goals and make incredible saves.",
      prizePool: "₹35,000",
      teamSize: "3v3",
      date: "March 26, 2024",
      format: "Group Stage + Double Elimination",
      platform: "PC/Console",
      rules: [
        "5 minute matches",
        "Best of 5 series",
        "Standard arena rotation",
        "No custom maps allowed",
        "Overtime: unlimited time, next goal wins"
      ]
    }
  ];

  // Find the current game
  const currentGame = esportsGames.find(g => g.slug === game);

  if (!currentGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="varsity-font text-4xl text-foreground mb-4">Game Not Found</h1>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">{currentGame.icon}</div>
          <h1 className="varsity-font text-5xl lg:text-6xl text-foreground mb-4">
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
                <CardTitle className="varsity-font text-2xl flex items-center">
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
                    Download Rulebook
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
                      <div className="font-semibold">{currentGame.prizePool} Prize Pool</div>
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

                <div>
                  <h4 className="font-semibold text-primary mb-2">Tournament Rules</h4>
                  <ul className="text-muted-foreground space-y-1">
                    {currentGame.rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prize Distribution Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="varsity-font text-2xl text-foreground">
                  Prize Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <span className="font-semibold">First Place</span>
                    </div>
                    <span className="font-bold text-yellow-500">{Math.floor(parseInt(currentGame.prizePool.replace(/[₹,]/g, '')) * 0.5).toLocaleString('en-IN')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-lg border border-gray-400/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <span className="font-semibold">Second Place</span>
                    </div>
                    <span className="font-bold text-gray-400">{Math.floor(parseInt(currentGame.prizePool.replace(/[₹,]/g, '')) * 0.3).toLocaleString('en-IN')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-600/20 to-orange-700/20 rounded-lg border border-orange-600/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <span className="font-semibold">Third Place</span>
                    </div>
                    <span className="font-bold text-orange-600">{Math.floor(parseInt(currentGame.prizePool.replace(/[₹,]/g, '')) * 0.2).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - spans 1/3 width */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="varsity-font text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Event Coordinator</div>
                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">esports@concours24.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Venue</div>
                    <div className="text-sm text-muted-foreground">Gaming Arena, DA-IICT</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="varsity-font text-xl text-foreground">
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
