import { Shield, Trophy, Users, Target, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teams = [
  { name: "Volleyball (Men)", icon: "🏐" },
  { name: "Volleyball (Women)", icon: "🏐" },
  { name: "Cricket", icon: "🏏" },
  { name: "Basketball (Men)", icon: "🏀" },
  { name: "Basketball (Women)", icon: "🏀" },
  { name: "Football (Men)", icon: "⚽" },
  { name: "Football (Women)", icon: "⚽" },
  { name: "Badminton (Men)", icon: "🏸" },
  { name: "Badminton (Women)", icon: "🏸" },
  { name: "Table Tennis (Men)", icon: "🏓" },
  { name: "Table Tennis (Women)", icon: "🏓" },
  { name: "Tennis", icon: "🎾" },
  { name: "Athletics", icon: "🏃" },
];

export default function TeamDaiict() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
            Our Champions
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            TEAM DA-IICT
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the warriors representing Dhirubhai Ambani Institute of Information and Communication Technology.
          </p>
        </div>

        {/* Jersey Section */}
        <Card className="epic-card mb-16 overflow-hidden">
          <CardContent className="p-8 text-center">
            <h2 className="timesnewroman-font text-3xl text-foreground mb-6">Official Team Jersey</h2>
            <p className="concours-font text-3xl">Coming Soon</p>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Wearing the colors of excellence, our teams represent the spirit and determination of DA-IICT in every competition.
            </p>
          </CardContent>
        </Card>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teams.map((team, index) => (
            <Card key={index} className="epic-card group">
              <CardHeader className="text-center">
                <CardTitle className="varsity-font text-xl text-foreground mb-4">{team.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-full h-48 bg-gradient-sports rounded-lg flex items-center justify-center trophy-glow">
                  <div className="text-6xl">{team.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legacy Section */}
        <Card className="epic-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="timesnewroman-font text-3xl text-foreground mb-4">Our Legacy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Years of dedication, training, and excellence have built the legacy of Team DA-IICT.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="concours-font text-3xl text-primary">25+</div>
                <div className="text-muted-foreground">Championships Won</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="concours-font text-3xl text-primary">200+</div>
                <div className="text-muted-foreground">Active Athletes</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="concours-font text-3xl text-primary">15+</div>
                <div className="text-muted-foreground">Sports Categories</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Showcase Video Section */}
        <Card className="epic-card mt-16">
          <CardHeader>
            <CardTitle className="timesnewroman-font text-3xl text-foreground text-center">
              Team Showcase
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-sports opacity-20"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold">Team Showcase Video</div>
                  <div className="text-white/70">Watch our athletes in action</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}