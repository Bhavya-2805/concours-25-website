import { Shield, Trophy, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teams = [
  { name: "Volleyball", category: "Men & Women", icon: "🏐" },
  { name: "Cricket", category: "Men's", icon: "🏏" },
  { name: "Basketball", category: "Men & Women", icon: "🏀" },
  { name: "Football", category: "Men & Women", icon: "⚽" },
  { name: "Badminton", category: "Men & Women", icon: "🏸" },
  { name: "Table Tennis", category: "Men & Women", icon: "🏓" },
  { name: "Tennis", category: "Mixed", icon: "🎾" },
  { name: "Athletics", category: "Track & Field", icon: "🏃" },
];

export default function TeamDaiict() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
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
            <h2 className="varsity-font text-3xl text-foreground mb-6">Official Team Jersey</h2>
            <div className="w-64 h-64 bg-gradient-sports rounded-lg mx-auto flex items-center justify-center trophy-glow">
              <Shield className="w-32 h-32 text-white" />
            </div>
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
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {team.icon}
                </div>
                <CardTitle className="varsity-font text-xl text-foreground">{team.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">{team.category}</p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Team Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legacy Section */}
        <Card className="epic-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="varsity-font text-3xl text-foreground mb-4">Our Legacy</h2>
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
      </div>
    </div>
  );
}