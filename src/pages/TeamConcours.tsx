import { Phone, UserCheck, Crown, Star } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

// Import team images (CONCOURS'26)
import NeetiImg from "@/assets/images/team26/Neeti Gunsai.jpeg";
import KushImg from "@/assets/images/team26/Kush.jpg";
import RutvaImg from "@/assets/images/team26/Rutva-jpg.webp";
import RishitaImg from "@/assets/images/team26/Rishita.jpg";
import IshanImg from "@/assets/images/team26/Ishan.jpg";
import VedMImg from "@/assets/images/team26/VedM.jpg";
import BhavyaBImg from "@/assets/images/team26/BhavyaB.jpg";
import VasuImg from "@/assets/images/team26/Vasu.jpeg";
import VedImg from "@/assets/images/team26/Ved.jpg";
import ParikshitImg from "@/assets/images/team26/Parikshit.jpeg";
import JatinImg from "@/assets/images/team26/Jatin-web.jpg";
import PushanImg from "@/assets/images/team26/Pushan.jpeg";
import NeelImg from "@/assets/images/team26/Neel.jpg";
import AayushImg from "@/assets/images/team26/Aayush.jpg";
import PalImg from "@/assets/images/team26/Pal-web.jpg";
import YuvrajImg from "@/assets/images/team26/Yuvraj.jpeg";
import MrigankImg from "@/assets/images/team26/Mrigank.jpg";
import VatsalImg from "@/assets/images/team26/Vatsal.jpg";
import PrinsImg from "@/assets/images/team26/Prins.jpg";
import RushitImg from "@/assets/images/team26/Rushit.jpg";
import PriyaShahImg from "@/assets/images/team26/priya shah.jpeg";
import RajImg from "@/assets/images/team26/Raj.jpg";
import DirghImg from "@/assets/images/team26/Dirgh.jpg";
import NihariImg from "@/assets/images/team26/Nihari Khunt.jpeg";
import TwishaImg from "@/assets/images/team26/Twisha.jpg";
import KushalImg from "@/assets/images/team26/Kushal.jpeg";
import VrajImg from "@/assets/images/team26/Vraj.jpeg";
import BhavyaShahImg from "@/assets/images/team26/Bhavya.jpeg";
import PrathamImg from "@/assets/images/team26/Pratham.jpeg";
import YashImg from "@/assets/images/team26/yash.png";

type Member = { name: string; role: string; phone?: string; image: string; position?: string };

// Display order matters — members render exactly in this sequence.
const teamMembers: Member[] = [
  { name: "Neeti Gunsai", role: "Convener", phone: "63557 70669", image: NeetiImg },
  { name: "Kush Patel", role: "Deputy Convener", phone: "87801 32145", image: KushImg, position: "55% center" },
  { name: "Rutva Mehta", role: "Core Member", phone: "97232 04898", image: RutvaImg },
  { name: "Rishita Jodhawat", role: "Core Member", phone: "98283 90304", image: RishitaImg },
  { name: "Ishan Thakkar", role: "Mentor", phone: "76220 82220", image: IshanImg },
  { name: "Ved Mungra", role: "Mentor", phone: "94294 57368", image: VedMImg },
  { name: "Bhavya Boda", role: "Mentor", phone: "93163 27271", image: BhavyaBImg },
  { name: "Vasu Vaghasiya", role: "Core Member", phone: "73837 58690", image: VasuImg },
  { name: "Ved Gabani", role: "Core Member", phone: "93285 36537", image: VedImg },
  { name: "Parikshit Viradiya", role: "Core Member", phone: "99255 36006", image: ParikshitImg },
  { name: "Jatin Srinivas", role: "Core Member", phone: "86183 85403", image: JatinImg },
  { name: "Pushan Patel", role: "Core Member", phone: "70417 73609", image: PushanImg },
  { name: "Neel Gami", role: "Core Member", phone: "79903 22293", image: NeelImg },
  { name: "Aayush Balat", role: "Core Member", phone: "74350 62351", image: AayushImg },
  { name: "Pal Jalodara", role: "Core Member", phone: "96387 07155", image: PalImg, position: "center 72%" },
  { name: "Yuvraj Katara", role: "Core Member", phone: "99780 32169", image: YuvrajImg },
  { name: "Mrigank Chaudhari", role: "Core Member", phone: "92741 17599", image: MrigankImg },
  { name: "Vatsal Chhatrola", role: "Core Member", phone: "92653 08898", image: VatsalImg },
  { name: "Prins Anghan", role: "Core Member", phone: "63517 23595", image: PrinsImg },
  { name: "Rushit Koladiya", role: "Core Member", phone: "70419 30742", image: RushitImg },
  { name: "Priya Shah", role: "Core Member", phone: "84697 90057", image: PriyaShahImg },
  { name: "Raj", role: "Core Member", phone: "95125 80599", image: RajImg },
  { name: "Dirgh", role: "Core Member", phone: "63539 03857", image: DirghImg },
  { name: "Nihari Khunt", role: "Core Member", phone: "98751 44009", image: NihariImg },
  { name: "Twisha Mistry", role: "Core Member", phone: "74129 57193", image: TwishaImg },
  { name: "Kushal Surana", role: "Core Member", phone: "93774 36524", image: KushalImg },
  { name: "Vraj Patel", role: "Core Member", phone: "93161 48846", image: VrajImg },
  { name: "Bhavya Shah", role: "Core Member", phone: "63515 09727", image: BhavyaShahImg },
  { name: "Pratham Rabari", role: "Core Member", phone: "90546 84566", image: PrathamImg },
  { name: "Yash Bachwani", role: "Core Member", phone: "96624 33151", image: YashImg },
];

function MemberCard({ member, index, featured = false }: { member: Member; index: number; featured?: boolean }) {
  const isLead = member.role === "Convener" || member.role === "Deputy Convener";
  return (
    <Reveal delay={(index % 4) * 70} className="h-full">
      <div className="group relative h-full surface surface-hover overflow-hidden">
        <div className="relative overflow-hidden aspect-[4/5]">
          <div className="img-zoom absolute inset-0">
            <LazyImage
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0"
              style={{ objectPosition: member.position ?? "center 25%" }}
              priority={index < 6}
              placeholder={<UserCheck className="w-12 h-12 text-white/20" />}
              onError={(e) => {
                console.warn(`Failed to load image for ${member.name}:`, e);
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0203] via-[#0a0203]/20 to-transparent" />
          <div className="absolute inset-0 bg-[#e01b2e]/0 group-hover:bg-[#e01b2e]/15 mix-blend-multiply transition-colors duration-500" />

          <div className="absolute top-4 left-4">
            <span className={`chip ${member.role === "Core Member" ? "" : "chip-red"} backdrop-blur-md bg-black/40`}>
              {isLead ? <Crown className="w-3 h-3" /> : member.role === "Mentor" ? <Star className="w-3 h-3" /> : null}
              {member.role}
            </span>
          </div>

          <div className="absolute bottom-0 inset-x-0 p-5">
            <h3 className={`font-display font-black text-white leading-none ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>
              {member.name}
            </h3>
            {member.phone && (
              <a
                href={`tel:+91${member.phone.replace(/\s/g, "")}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-mono text-[#c9cbce]/80 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e01b2e]" />
                +91 {member.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function TeamConcours() {
  // Convener + Deputy lead the page; everyone else follows in list order.
  const leads = teamMembers.slice(0, 2);
  const rest = teamMembers.slice(2);

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Meet The Organizers"
        watermark="SQUAD"
        title={<>Team <span className="text-signal">Concours</span></>}
        description="The dedicated team behind CONCOURS, working tirelessly to make this festival unforgettable."
      />

      <section className="pb-20">
        <div className="container max-w-6xl space-y-20">
          <div>
            <SectionHeading index="01" eyebrow="Leadership" title="Captains" />
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-8 max-w-4xl">
              {leads.map((member, i) => (
                <MemberCard key={member.name} member={member} index={i} featured />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading index="02" eyebrow="The Engine Room" title="The Squad" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {rest.map((member, i) => (
                <MemberCard key={member.name} member={member} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <CtaBand
        eyebrow="With Gratitude"
        icon={<UserCheck className="w-6 h-6" />}
        title="Thank You"
        description="To all our volunteers, supporters, and participants who make CONCOURS possible every year. Your dedication and enthusiasm are what make this festival truly special."
      />
    </div>
  );
}
