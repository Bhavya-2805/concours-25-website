import { Users, Phone, Mail, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  { name: "Ishan Thakkar", role: "Convener", phone: "76220 82220" },
  { name: "Priya Patel", role: "Deputy Convener", phone: "98765 43210" },
  { name: "Arjun Kumar", role: "Sports Coordinator", phone: "87654 32109" },
  { name: "Sneha Sharma", role: "Event Manager", phone: "76543 21098" },
  { name: "Rohit Gupta", role: "Marketing Head", phone: "65432 10987" },
  { name: "Kavya Reddy", role: "Technical Lead", phone: "54321 09876" },
  { name: "Vikram Singh", role: "Finance Manager", phone: "43210 98765" },
  { name: "Ananya Joshi", role: "Logistics Head", phone: "32109 87654" },
  { name: "Aditya Mehta", role: "Media Coordinator", phone: "21098 76543" },
  { name: "Riya Shah", role: "Volunteer Coordinator", phone: "10987 65432" },
  { name: "Karan Agarwal", role: "Hospitality Manager", phone: "09876 54321" },
  { name: "Nisha Kapoor", role: "Security Head", phone: "98765 43210" },
];

export default function TeamConcours() {
  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
            Meet The Organizers
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-foreground mb-6">
            TEAM CONCOURS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The dedicated team behind CONCOURS'25, working tirelessly to make this festival unforgettable.
          </p>
        </div>

        {/* Group Photo Placeholder */}
        <Card className="epic-card mb-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-sports flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
              <div className="relative z-10 text-center text-white">
                <Users className="w-24 h-24 mx-auto mb-4" />
                <h2 className="varsity-font text-3xl mb-2">Team CONCOURS'25</h2>
                <p className="text-lg opacity-90">United by passion, driven by excellence</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="epic-card group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-sports rounded-full flex items-center justify-center mx-auto trophy-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="varsity-font text-xl text-foreground">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 {member.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>concours@daiict.ac.in</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Thank You Section */}
        <Card className="epic-card mt-16">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto trophy-glow mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="varsity-font text-3xl text-foreground mb-4">
              Thank You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              To all our volunteers, supporters, and participants who make CONCOURS possible every year. 
              Your dedication and enthusiasm are what make this festival truly special.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}