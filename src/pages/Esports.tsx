import { Users, Trophy, Calendar, BookOpen, Gamepad2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { SectionHeading } from '@/components/site/SectionHeading';
import { EventCard } from '@/components/site/EventCard';
import { CtaBand } from '@/components/site/CtaBand';

const esportsGames = [
  {
    name: "Free Fire Max (BR)",
    slug: "freefire-br",
    icon: "",
    category: "Battle Royale",
    registerLink: "https://docs.google.com/forms/d/1aDzaXXQ9RX-PZf8BFrz4Jc0nmTZV4S1UkhQrFHPVc5M/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Battle Royale action where only the last team standing wins. Survive, loot, and eliminate your way to victory.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "Free Fire Max (CS)",
    slug: "freefire-cs",
    icon: "",
    category: "Clash Squad",
    registerLink: "https://docs.google.com/forms/d/1UX7fZbXPVuCRDTeHx1Hx0V9PFDSQEZDZ7BwKwA0O08g/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Intense 4v4 tactical combat in Clash Squad mode. Strategy and teamwork are key to dominating each round.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "BGMI",
    slug: "bgmi",
    icon: "",
    category: "Battle Royale",
    registerLink: "https://docs.google.com/forms/d/1ZRGq20PAFK8gZRdaSb7KuBU1gtFKQcVjItxI2pPlqQY/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "India's favorite Battle Royale. Experience intense combat on the battleground with your squad.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "Mobile Legends",
    slug: "mobile-legends",
    icon: "",
    category: "FPS",
    registerLink: "https://docs.google.com/forms/d/1Rud8iazgYea7iPhSIwabfOxDinnVqvIs6AwO1qRdsRI/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Mobile Legends brings intense 5v5 MOBA action. Team up with your squad and conquer the battlefield.",
    prizePool: "To be announced",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "Valorant",
    slug: "valorant",
    icon: "",
    category: "FPS",
    registerLink: "https://docs.google.com/forms/d/153airOjIR3QemuXlYVDcq9z4AIQxPrdTaWHeI3I8cM0/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Tactical 5v5 shooter where strategy meets precision. Form your team and dominate the battlefield.",
    prizePool: "To be announced",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "Clash Royale",
    slug: "clash-royale",
    icon: "",
    category: "Strategy",
    registerLink: "https://docs.google.com/forms/d/1qXK6X0N44FILAwH2Fl49otqfSZa-5IlclVHm-7t8dWI/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Real-time multiplayer strategy game. Build your deck and destroy opponent's towers to win.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "EA FC Mobile",
    slug: "ea-fc-mobile",
    icon: "",
    category: "Sports",
    registerLink: "https://docs.google.com/forms/d/1Fn_lfwmsUUcrEB8GqadhBCuMbE_Eu9FKo_TQvVWjKSw/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "The ultimate football experience on mobile. Build your dream team and compete for glory.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "Brawl Stars",
    slug: "brawl-stars",
    icon: "",
    category: "Action",
    registerLink: "https://docs.google.com/forms/d/1eYitqCeXhUl2rCyaK-lQTxqtrpdCr3vtgFPmMkWikLw/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Brawl Stars brings fast-paced multiplayer action. Battle with your team and outplay your opponents.",
    prizePool: "To be announced",
    teamSize: "3v3",
    date: "29th Oct - 1st Nov, 2026"
  },
  {
    name: "Mini Militia",
    slug: "mini-militia",
    icon: "",
    category: "Action",
    registerLink: "https://docs.google.com/forms/d/1FtN5Vo3oJQA-kILfBAxZmoJ5XKvjjJ7SkezzDlJ282E/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Classic 2D multiplayer combat. Engage in intense battles with up to 6 players in various maps.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026"
  },
];

export default function Esports() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Game On"
        watermark="GG WP"
        title={<>E-Sports <span className="text-signal">Championship</span></>}
        description="Compete in 8 thrilling e-sports titles with massive prize pools. Whether you're a tactical genius, a mechanical prodigy, or a strategic mastermind, we have the perfect challenge for you."
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <SectionHeading
            index="01"
            eyebrow="Tournaments"
            title="Choose Your Battle"
            description="Select your game and prepare for the ultimate e-sports experience. Each tournament offers unique challenges and exciting rewards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {esportsGames.map((item, i) => (
              <EventCard
                key={item.slug}
                index={i + 1}
                delay={(i % 4) * 70}
                to={`/esports/${item.slug}`}
                icon={item.icon || undefined}
                title={item.name}
                category={item.category}
                meta={[
                  { icon: <Trophy />, label: `Prize Pool: ${item.prizePool}` },
                  { icon: <Users />, label: item.teamSize },
                  { icon: <Calendar />, label: item.date },
                ]}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        icon={<Gamepad2 className="w-6 h-6" />}
        title="Ready to Dominate?"
        description="Don't miss your chance to compete in the biggest e-sports tournament of the year. Register now and secure your spot in gaming history."
      >
        <button
          type="button"
          className="btn btn-chrome h-14 px-8"
          onClick={() => {
            window.open('https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk?usp=sharing', '_blank');
            console.log('Esports CTA rule book download button clicked');
          }}
        >
          <BookOpen className="w-4 h-4" /> View RuleBook
        </button>
      </CtaBand>
    </div>
  );
}
