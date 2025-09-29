import { Users, Phone, Mail, Heart, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { LazyImage } from "@/components/LazyImage";

const teamMembers = [
  { name: "Ishan Thakkar", role: "Convener", phone: "76220 82220", image: "/src/assets/images/team/Ishan.jpg" },
  { name: "Ved Mungra", role: "Deputy Convener", phone: "94294 57368", image: "/src/assets/images/team/Ved.jpg" },
  { name: "Bhavya Boda", role: "Core Member", phone: "93163 27271", image: "/src/assets/images/team/Bhavya.jpg" },
  { name: "Siddharth Vala", role: "Core Member", phone: "92282 06818", image: "/src/assets/images/team/Siddharth Vala.jpg" },
  { name: "Aarya Javia", role: "Mentor", phone: "94263 58505", image: "/src/assets/images/team/Aarya.jpg" },
  { name: "Alin Kansagra", role: "Mentor", phone: "93288 55413", image: "/src/assets/images/team/Alin.jpg" },
  { name: "Neeti Gunsai", role: "Core Member", phone: "63557 70669", image: "/src/assets/images/team/Neeti.jpg" },
  { name: "Rishita Jodhawat", role: "Core Member", phone: "98283 90304", image: "/src/assets/images/team/Rishita.jpg" },
  { name: "Kush Patel", role: "Core Member", phone: "87801 32145", image: "/src/assets/images/team/Kush.jpg" },
  { name: "Rutva Mehta", role: "Core Member", phone: "97232 04898", image: "/src/assets/images/team/Rutva.webp" },
  { name: "Devdutt Dinesh", role: "Core Member", phone: "70124 38105", image: "/src/assets/images/team/Devdutt.jpg" },
  { name: "Khelan Bhatt", role: "Core Member", phone: "81606 42207", image: "/src/assets/images/team/Khelan.jpg" },
  { name: "Jash Shah", role: "Core Member", phone: "90330 22192", image: "/src/assets/images/team/Jash.jpg" },
  { name: "Diyen Pambhar", role: "Core Member", phone: "95109 55278", image: "/src/assets/images/team/Diyen.jpg" },
  { name: "Dhruv Ramani", role: "Core Member", phone: "88497 99027", image: "/src/assets/images/team/Dhruv.jpg" },
  { name: "Manthan Gajera", role: "Core Member", phone: "83202 29391", image: "/src/assets/images/team/Manthan.jpg" },
  { name: "Kavish Patel", role: "Core Member", phone: "82000 54272", image: "/src/assets/images/team/Kavish.jpg" },
  { name: "Aarya Shah", role: "Core Member", phone: "94265 89465", image: "/src/assets/images/team/Aarya1.jpg" },
  { name: "Mayank Bagul", role: "Core Member", phone: "87586 77444", image: "/src/assets/images/team/Mayank.jpg" },
  { name: "Deep Pandya", role: "Core Member", phone: "95374 24333", image: "/src/assets/images/team/Deep.jpg" },
  { name: "Devam Tanna", role: "Core Member", phone: "87581 91256", image: "/src/assets/images/team/devam.jpg" },
  { name: "Rishika Shah", role: "Core Member", phone: "94094 33069", image: "/src/assets/images/team/Rishika Shah.jpeg" },
  { name: "Jay Unadkat", role: "Core Member", phone: "79847 04174", image: "/src/assets/images/team/Jay Unadkat.jpg" },
  { name: "Kushal Thakkar", role: "Core Member", phone: "76218 41180", image: "/src/assets/images/team/Kushal.jpeg" },
  { name: "Priya Patel", role: "Core Member", phone: "99252 21200", image: "/src/assets/images/team/Priya Patel.jpg" },
  { name: "Jay Shah", role: "Core Member", phone: "79903 48872", image: "/src/assets/images/team/Jay Shah.jpg" },
  { name: "Priya Shah", role: "Core Member", phone: "84697 90057", image: "/src/assets/images/team/Priya Shah.jpg" },
  { name: "Jenil Shah", role: "Core Member", phone: "63543 98820", image: "/src/assets/images/team/Jenil Shah.jpeg" },
  { name: "Mahi Kansara", role: "Core Member", phone: "82006 79086", image: "/src/assets/images/team/Mahi Kansara_.jpg" },
  { name: "Gaurang Rahani", role: "Core Member", phone: "94996 05923", image: "/src/assets/images/team/Gaurang Rahani.jpg" },
  { name: "Prince Sojitra", role: "Core Member", phone: "87803 77541", image: "/src/assets/images/team/Prince.jpg" },
  { name: "Shivam Ramoliya", role: "Core Member", phone: "79844 06542", image: "/src/assets/images/team/Shivam S Ramoliya_.jpg" },
  { name: "Vatsal Somaliya", role: "Core Member", phone: "90167 64959", image: "/src/assets/images/team/Vatsal S Somaliya.jpg" },
  { name: "Yuvraj Katara", role: "Core Member", phone: "99780 32169", image: "/src/assets/images/team/jyoti-iyer.jpg" },
  { name: "Krish Vijay", role: "Core Member", phone: "96642 46301", image: "/src/assets/images/team/Krish.jpg" },
];

export default function TeamConcours() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-hero subtle-bg">
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
        {/*<Card className="epic-card mb-16 overflow-hidden">
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
        </Card>*/}

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="epic-card group overflow-hidden">
              <CardHeader className="text-center p-4">
                <div className="w-56 h-56 mx-auto mb-3 relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                  <LazyImage 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full ${member.name === "Kush Patel" ? "object-top" : "object-cover"}`}
                    priority={index < 6} // Load first 6 images with priority
                    fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='18'%3E%3C/missing%3E%3C/text%3E%3C/svg%3E"
                    placeholder={<UserCheck className="w-12 h-12 text-gray-400" />}
                    onError={(e) => {
                      console.warn(`Failed to load image for ${member.name}:`, e);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-sports opacity-10 rounded-lg"></div>
                </div>
                <CardTitle className="timesnewroman-font text-lg text-foreground">{member.name}</CardTitle>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="icon-small" />
                  <span>+91 {member.phone}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Thank You Section */}
        <Card className="epic-card mt-16">
          <CardContent className="p-8 text-center">
            <div className="icon-container mx-auto mb-6">
              <UserCheck className="icon-large icon-secondary" />
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