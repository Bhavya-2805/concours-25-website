import { Users, Phone, Mail, Heart, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { LazyImage } from "@/components/LazyImage";

// Import team images
import IshanImg from "@/assets/images/team/Ishan.jpg";
import VedImg from "@/assets/images/team/Ved.jpg";
import BhavyaImg from "@/assets/images/team/Bhavya.jpg";
import SiddharthImg from "@/assets/images/team/Siddharth Vala.jpg";
import AaryaImg from "@/assets/images/team/Aarya.jpg";
import AlinImg from "@/assets/images/team/Alin.jpg";
import NeetiImg from "@/assets/images/team/Neeti.jpg";
import RishitaImg from "@/assets/images/team/Rishita.jpg";
import KushImg from "@/assets/images/team/Kushp.jpg";
import RutvaImg from "@/assets/images/team/Rutva.webp";
import DevduttImg from "@/assets/images/team/Devdutt.jpg";
import KhelanImg from "@/assets/images/team/Khelan.jpg";
import JashImg from "@/assets/images/team/jash.jpg";
import DiyenImg from "@/assets/images/team/Diyen1.jpeg";
import DhruvImg from "@/assets/images/team/Dhruv.jpg";
import ManthanImg from "@/assets/images/team/Manthan.jpg";
import KavishImg from "@/assets/images/team/Kavish.jpg";
import Aarya1Img from "@/assets/images/team/Aarya1.jpg";
import MayankImg from "@/assets/images/team/Mayank.jpg";
import DeepImg from "@/assets/images/team/Deep.jpg";
import DevamImg from "@/assets/images/team/devam.jpg";
import RishikaImg from "@/assets/images/team/Rishika Shah.jpeg";
import JayUnadkatImg from "@/assets/images/team/Jay Unadkat.jpg";
import KushalImg from "@/assets/images/team/Kushal.jpeg";
import PriyaPatelImg from "@/assets/images/team/Priya Patel.jpg";
import JayShahImg from "@/assets/images/team/Jay Shah.jpg";
import PriyaShahImg from "@/assets/images/team/Priya Shah.jpg";
import JenilImg from "@/assets/images/team/Jenil Shah.jpeg";
import MahiImg from "@/assets/images/team/Mahi Kansara_.jpg";
import GaurangImg from "@/assets/images/team/Gaurang Rahani.jpg";
import PrinceImg from "@/assets/images/team/Prince.jpg";
import ShivamImg from "@/assets/images/team/Shivam S Ramoliya_.jpg";
import VatsalImg from "@/assets/images/team/Vatsal S Somaliya.jpg";
/*import JyotiImg from "@/assets/images/team/jyoti-iyer.jpg";*/
import KrishImg from "@/assets/images/team/Krish.jpg";

const teamMembers = [
  { name: "Ishan Thakkar", role: "Convener", phone: "76220 82220", image: IshanImg },
  { name: "Ved Mungra", role: "Deputy Convener", phone: "94294 57368", image: VedImg },
  { name: "Bhavya Boda", role: "Core Member", phone: "93163 27271", image: BhavyaImg },
  { name: "Siddharth Vala", role: "Core Member", phone: "92282 06818", image: SiddharthImg },
  { name: "Aarya Javia", role: "Mentor", phone: "94263 58505", image: AaryaImg },
  { name: "Alin Kansagra", role: "Mentor", phone: "93288 55413", image: AlinImg },
  { name: "Neeti Gunsai", role: "Core Member", phone: "63557 70669", image: NeetiImg },
  { name: "Rishita Jodhawat", role: "Core Member", phone: "98283 90304", image: RishitaImg },
  { name: "Kush Patel", role: "Core Member", phone: "87801 32145", image: KushImg },
  { name: "Rutva Mehta", role: "Core Member", phone: "97232 04898", image: RutvaImg },
  { name: "Devdutt Dinesh", role: "Core Member", phone: "70124 38105", image: DevduttImg },
  { name: "Khelan Bhatt", role: "Core Member", phone: "81606 42207", image: KhelanImg },
  { name: "Jash Shah", role: "Core Member", phone: "90330 22192", image: JashImg },
  { name: "Diyen Pambhar", role: "Core Member", phone: "95109 55278", image: DiyenImg },
  { name: "Dhruv Ramani", role: "Core Member", phone: "88497 99027", image: DhruvImg },
  { name: "Manthan Gajera", role: "Core Member", phone: "83202 29391", image: ManthanImg },
  { name: "Kavish Patel", role: "Core Member", phone: "82000 54272", image: KavishImg },
  { name: "Aarya Shah", role: "Core Member", phone: "94265 89465", image: Aarya1Img },
  { name: "Mayank Bagul", role: "Core Member", phone: "87586 77444", image: MayankImg },
  { name: "Deep Pandya", role: "Core Member", phone: "95374 24333", image: DeepImg },
  { name: "Devam Tanna", role: "Core Member", phone: "87581 91256", image: DevamImg },
  { name: "Rishika Shah", role: "Core Member", phone: "94094 33069", image: RishikaImg },
  { name: "Jay Unadkat", role: "Core Member", phone: "79847 04174", image: JayUnadkatImg },
  { name: "Kushal Thakkar", role: "Core Member", phone: "76218 41180", image: KushalImg },
  { name: "Priya Patel", role: "Core Member", phone: "99252 21200", image: PriyaPatelImg },
  { name: "Jay Shah", role: "Core Member", phone: "79903 48872", image: JayShahImg },
  { name: "Priya Shah", role: "Core Member", phone: "84697 90057", image: PriyaShahImg },
  { name: "Jenil Shah", role: "Core Member", phone: "63543 98820", image: JenilImg },
  { name: "Mahi Kansara", role: "Core Member", phone: "82006 79086", image: MahiImg },
  { name: "Gaurang Rahani", role: "Core Member", phone: "94996 05923", image: GaurangImg },
  { name: "Prince Sojitra", role: "Core Member", phone: "87803 77541", image: PrinceImg },
  { name: "Shivam Ramoliya", role: "Core Member", phone: "79844 06542", image: ShivamImg },
  { name: "Vatsal Somaliya", role: "Core Member", phone: "90167 64959", image: VatsalImg },
  { name: "Yuvraj Katara", role: "Core Member", phone: "99780 32169", image: null },
  { name: "Krish Vijay", role: "Core Member", phone: "96642 46301", image: KrishImg },
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
          <Badge className="mb-6 bg-[#840c15]/25 text-red-200 border-[#840c15]/50 px-4 py-1.5 backdrop-blur-sm shadow-sm">
            Meet The Organizers
          </Badge>
          <h1 className="concours-font text-5xl lg:text-7xl text-white mb-6 tracking-wide">
            TEAM CONCOURS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The dedicated team behind CONCOURS, working tirelessly to make this festival unforgettable.
          </p>
        </div>

        {/* Group Photo Placeholder */}
        {/*<Card className="epic-card mb-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-sports flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
              <div className="relative z-10 text-center text-white">
                <Users className="w-24 h-24 mx-auto mb-4" />
                <h2 className="varsity-font text-3xl heading-gold mb-2">Team CONCOURS'26</h2>
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
                    src={member.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='18'%3ENo Photo%3C/text%3E%3C/svg%3E"} 
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
                <CardTitle className="timesnewroman-font text-lg text-white">{member.name}</CardTitle>
                <p className="text-red-400 font-semibold text-sm">{member.role}</p>
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
            <h2 className="varsity-font text-3xl heading-gold mb-4">
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
