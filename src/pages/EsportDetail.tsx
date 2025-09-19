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
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSepxP4Unf9P4ab1ZqDfMmLi4c9u_wg1EWT3hzvPlMkyIoufBw/viewform", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "Battle Royale action where only the last team standing wins. Survive, loot, and eliminate your way to victory.",
      prizePool: "₹50,000",
      teamSize: "4v4",
      date: "March 15-16, 2024",
      format: "Battle Royale",
      platform: "Mobile",
      rules: [
        "Standard BR rules apply",
        "50 players per match",
        "Best of 3 matches per round",
        "No cheating or exploitation allowed",
        "Teams must arrive 30 minutes before scheduled time"
      ]
    },
    { 
      name: "Free Fire Max (CS)", 
      slug: "freefire-cs", 
      icon: "🎯", 
      category: "Clash Squad", 
      registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScps0evDnbOTW4VyYItimwViwCNaq9RFdm_xxBM_XYNDl7p8Q/viewform?usp=send_form", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "Intense 4v4 tactical combat in Clash Squad mode. Strategy and teamwork are key to dominating each round.",
      prizePool: "₹40,000",
      teamSize: "4v4",
      date: "March 17-18, 2024",
      format: "Clash Squad",
      platform: "Mobile",
      rules: [
        "Best of 7 rounds per match",
        "Economy system applies",
        "Standard weapon loadouts",
        "No third-party software allowed",
        "Teams must arrive 15 minutes before scheduled time"
      ]
    },
    { 
      name: "BGMI", 
      slug: "bgmi", 
      icon: "🎖️", 
      category: "Battle Royale", 
      registerLink: "https://forms.gle/L8FaxUqSdA13g8fj8", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "India's favorite Battle Royale. Experience intense combat on the battleground with your squad.",
      prizePool: "₹60,000",
      teamSize: "4v4",
      date: "March 19-20, 2024",
      format: "Battle Royale",
      platform: "Mobile",
      rules: [
        "TPP mode for all matches",
        "100 players per match",
        "Best of 3 matches per round",
        "Standard tournament rules apply",
        "No cheating or exploitation allowed"
      ]
    },
    { 
      name: "CODM", 
      slug: "codm", 
      icon: "🎮", 
      category: "FPS", 
      registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSc1GZD-UnhMaMU0DwbEZsyNRjIrBsI5sVCF8zktemuEL5PbRA/viewform?usp=send_form", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "Call of Duty Mobile brings fast-paced FPS action. Dominate the battlefield with your squad.",
      prizePool: "₹45,000",
      teamSize: "5v5",
      date: "March 21-22, 2024",
      format: "Multiplayer",
      platform: "Mobile",
      rules: [
        "Best of 5 maps per match",
        "Search & Destroy mode for finals",
        "Standard weapon restrictions",
        "No third-party software allowed",
        "Teams must arrive 20 minutes before scheduled time"
      ]
    },
    { 
      name: "Valorant", 
      slug: "valorant", 
      icon: "🔫", 
      category: "FPS", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScEdNzx8SMqIiEQUF196RCCzI1aVwSViSXVr9c7OFj7H4AXbQ/viewform", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "Tactical 5v5 shooter where strategy meets precision. Form your team and dominate the battlefield.",
      prizePool: "₹50,000",
      teamSize: "5v5",
      date: "March 23-24, 2024",
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
      name: "Clash Royale", 
      slug: "clash-royale", 
      icon: "👑", 
      category: "Strategy", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScREa1iZxWpdyfSHqs2WWeNQObvuVk4AVzmJV_NVyor6U-RIA/viewform", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "Real-time multiplayer strategy game. Build your deck and destroy opponent's towers to win.",
      prizePool: "₹30,000",
      teamSize: "1v1",
      date: "March 25-26, 2024",
      format: "Single Elimination",
      platform: "Mobile",
      rules: [
        "Best of 3 games per match",
        "Tournament deck rules apply",
        "No third-party software allowed",
        "Standard card restrictions",
        "Players must arrive 15 minutes before scheduled time"
      ]
    },
    { 
      name: "EA FC Mobile", 
      slug: "ea-fc-mobile", 
      icon: "⚽", 
      category: "Sports", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdgS3kSJQsfaLorUKIh3AFY2i2xxXICoNO7GuqGMqkXMEW5vA/viewform", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "The ultimate football experience on mobile. Build your dream team and compete for glory.",
      prizePool: "₹35,000",
      teamSize: "1v1",
      date: "March 27-28, 2024",
      format: "Group Stage + Knockout",
      platform: "Mobile",
      rules: [
        "6 minute halves",
        "Ultimate Team squads only",
        "No custom tactics allowed",
        "Injuries on, offsides on",
        "Standard tournament settings"
      ]
    },
    { 
      name: "WCC Rivals", 
      slug: "wcc-rivals", 
      icon: "🏏", 
      category: "Sports", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_9j6mBjTi0NDEi984iBYeSU5O2hEcauQqSKzKGNOpG5_JYA/viewform", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "World Cricket Championship Rivals. Experience the thrill of cricket on your mobile device.",
      prizePool: "₹25,000",
      teamSize: "1v1",
      date: "March 29-30, 2024",
      format: "Single Elimination",
      platform: "Mobile",
      rules: [
        "5 overs per match",
        "T20 format",
        "Standard tournament rules",
        "No custom teams allowed",
        "Players must arrive 15 minutes before scheduled time"
      ]
    },
    { 
      name: "Mini Militia", 
      slug: "mini-militia", 
      icon: "🪖", 
      category: "Action", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScT2NzqXTINqchSQYxQnCAOaZD07t5tacODspQa8PizIcRO2w/viewform", 
      rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
      description: "Classic 2D multiplayer combat. Engage in intense battles with up to 6 players in various maps.",
      prizePool: "₹20,000",
      teamSize: "6v6",
      date: "March 31-April 1, 2024",
      format: "Free For All",
      platform: "Mobile",
      rules: [
        "10 minute matches",
        "Deathmatch mode",
        "Standard weapon loadouts",
        "No cheating or exploitation allowed",
        "Players must arrive 10 minutes before scheduled time"
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
                <CardTitle className="varsity-font text-2xl text-foreground">
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
                    <div className="font-semibold">Email Support</div>
                    <div className="text-sm text-muted-foreground">esports@concours25.com</div>
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
