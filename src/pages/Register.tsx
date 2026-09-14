import { Trophy, Mic, ArrowRight, Star, Users, Clock, Building2, Ticket, Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { soccerPitch } from "@lucide/lab";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-24 bg-gradient-hero subtle-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 silver-badge px-4 py-1.5 backdrop-blur-sm font-semibold tracking-wide">
            Join The Competition
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl heading-metallic-silver mb-6 tracking-wide">
            REGISTER NOW
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose your path to glory. Register for sports competitions or showcase your talent at our events.
          </p>
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sports Registration */}
          <Card className="epic-card overflow-hidden group border-[#918d8c]/25 hover:border-[#840c15]">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#840c15]/30 to-[#330609]/70 border border-[#918d8c]/30 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:border-[#840c15] group-hover:shadow-[0_0_18px_rgba(132,12,21,0.5)] transition-all duration-300">
                <Icon iconNode={soccerPitch} className="w-8 h-8" />
              </div>
              <CardTitle className="arial-font text-3xl text-white">Sports Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-center text-base">
                Compete in 10+ sports categories and prove your athletic prowess against the best talent from across the nation.
              </p>

              {/* Features */}
              <div className="bg-[#840c15]/10 rounded-xl p-5 border border-[#840c15]/25">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-300">Premium Sports Experience</span>
                </div>
                <ul className="text-sm text-gray-300 space-y-1 ml-8">
                  <li>• Access to all 10+ sports events</li>
                  <li>• Exposure to the best talent from across different colleges</li>
                  <li>• Chance to win exciting prizes & championship trophies</li>
                  <li>• Official certificate of participation</li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-[#979694]">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-red-400" />
                  <span>2000+ Athletes Expected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span>Multi-day Event</span>
                </div>
              </div>

              <Button className="w-full btn-sports group" asChild>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/sports-events');
                  }}
                >
                  Register for Sports
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Event Passes Registration */}
          <Card className="epic-card overflow-hidden group border-[#918d8c]/25 hover:border-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#918d8c]/30 to-[#330609]/70 border border-[#918d8c]/30 flex items-center justify-center text-gray-200 group-hover:scale-110 group-hover:border-white group-hover:shadow-[0_0_18px_rgba(151,150,148,0.5)] transition-all duration-300">
                <Ticket className="w-8 h-8" />
              </div>
              <CardTitle className="arial-font text-3xl text-white">CONCOURS Pass</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-center text-base">
                Get the exclusive pass to Concours and experience glory, victory, and memories that will last a lifetime.
              </p>

              {/* Features */}
              <div className="bg-[#918d8c]/10 rounded-xl p-5 border border-[#918d8c]/25">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-gray-300" />
                  <span className="font-semibold text-gray-200">What Is Included</span>
                </div>
                <ul className="text-sm text-gray-300 space-y-1 ml-8">
                  <li>• 4 day exclusive festival pass</li>
                  <li>• Stand Up Comedy Night entry</li>
                  <li>• Electrifying DJ Night entry</li>
                  <li>• Access to all thrilling sports matches</li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-[#979694]">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-300" />
                  <span>Limited Slots</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-300" />
                  <span>Evening Shows</span>
                </div>
              </div>

              <Button className="w-full btn-accent group" asChild>
                <Link to="/register">
                  Early Bird Coming Soon
                  {/* <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" /> */}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}