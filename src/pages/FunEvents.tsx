import { Music, Gamepad2, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const funEvents = [
  { name: "DJ Night", icon: Music, description: "Dance the night away with electrifying beats and amazing performances." },
  { name: "3v3 Basketball", icon: Users, description: "Fast-paced basketball action in a compact format." },
  { name: "Futsal", icon: Star, description: "Indoor football with high energy and quick gameplay." },
  { name: "Gaming Tournament", icon: Gamepad2, description: "Compete in popular esports titles and win exciting prizes." },
  { name: "Entertainment Zone", icon: Star, description: "Fun activities, games, and interactive experiences." },
  { name: "Food Stalls", icon: Star, description: "Delicious food from various cuisines to fuel your energy." },
];

export default function FunEvents() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
            Beyond Sports
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            FUN EVENTS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the festival beyond sports with entertainment, food, and unforgettable moments.
          </p>
        </div>

        {/* Hero Card */}
        <Card className="epic-card mb-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  Special Event
                </Badge>
                <h2 className="varsity-font text-4xl text-foreground mb-4">
                  The Ultimate Festival Experience
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  CONCOURS'25 isn't just about sports. It's a complete festival experience with 
                  entertainment, music, food, and activities that bring everyone together.
                </p>
              </div>
              <div className="bg-gradient-accent flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <Music className="w-24 h-24 mx-auto mb-4" />
                  <div className="varsity-font text-2xl">Live Entertainment</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funEvents.map((event, index) => (
            <Card key={index} className="epic-card group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto trophy-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                  <event.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="varsity-font text-2xl text-foreground">{event.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}