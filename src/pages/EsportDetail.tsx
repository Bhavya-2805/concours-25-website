import { useParams } from "react-router-dom";
import { Calendar, Users, IndianRupee } from "lucide-react";
import { EventDetailLayout } from "@/components/site/EventDetailLayout";
import { EventNotFound } from "@/components/site/EventNotFound";

// E-sports games data
const esportsGames = [
  {
    name: "Free Fire Max (BR)",
    slug: "freefire-br",
    icon: "🔥",
    category: "Battle Royale",
    registerLink: "https://docs.google.com/forms/d/1aDzaXXQ9RX-PZf8BFrz4Jc0nmTZV4S1UkhQrFHPVc5M/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Free Fire Max offers an intense battle royale experience with high-definition graphics and immersive gameplay. Players parachute onto an island, searching for weapons and supplies as they fight to be the last one standing. With both solo and squad modes, improved effects, and smooth play, it delivers dynamic action for mobile gamers.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026",
    format: "Battle Royale",
    platform: "Mobile",

  },
  {
    name: "Free Fire Max (CS)",
    slug: "freefire-cs",
    icon: "🎯",
    category: "Clash Squad",
    registerLink: "https://docs.google.com/forms/d/1UX7fZbXPVuCRDTeHx1Hx0V9PFDSQEZDZ7BwKwA0O08g/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Free Fire Max offers an intense Clash squad experience with high-definition graphics and immersive gameplay. Players compete in a team, select weapons and supplies as they fight to be the last one standing. With squad modes, improved effects, and smooth play, it delivers dynamic action for mobile gamers.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026",
    format: "Clash Squad, Knockouts",
    platform: "Mobile",
  },
  {
    name: "BGMI",
    slug: "bgmi",
    icon: "🎖️",
    category: "Battle Royale",
    registerLink: "https://docs.google.com/forms/d/1ZRGq20PAFK8gZRdaSb7KuBU1gtFKQcVjItxI2pPlqQY/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Battlegrounds Mobile India is a multiplayer battle royale game where up to 100 players compete in large-scale, last-person-standing deathmatches. Players explore extensive maps, scavenge equipment, and strategize to survive shrinking safe zones. The game features squad play and an array of weapons for combat in a dynamic, competitive environment.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026",
    format: "Battle Royale",
    platform: "Mobile",
  },
  {
    name: "Mobile Legends",
    slug: "mobile-legends",
    icon: "⚔️",
    category: "FPS",
    registerLink: "https://docs.google.com/forms/d/1Rud8iazgYea7iPhSIwabfOxDinnVqvIs6AwO1qRdsRI/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Mobile Legends: Bang Bang is a real-time multiplayer MOBA where players compete in 5v5 battles against opposing teams. With diverse heroes, unique abilities, strategic team compositions, and objective-based gameplay, it delivers an engaging competitive experience. Ranked matches, tournaments, and coordinated team play make it ideal for mobile esports competitions.",
    prizePool: "To be announced",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026",
    format: "Best of 3, Knockouts",
    platform: "Mobile",

  },
  {
    name: "Valorant",
    slug: "valorant",
    icon: "🔫",
    category: "FPS",
    registerLink: "https://docs.google.com/forms/d/153airOjIR3QemuXlYVDcq9z4AIQxPrdTaWHeI3I8cM0/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Valorant is a competitive, 5v5 tactical first-person shooter for PC, where players, known as 'agents,' combine precise gunplay with unique character abilities. Each round emphasizes teamwork and strategy, as attackers attempt to plant a device called the 'spike' while defenders try to prevent it. Valorant’s complex mechanics and balanced gameplay attract both casual and professional esports players.",
    prizePool: "To be announced",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026",
    format: "Knockout",
    platform: "Desktop/Laptop",

  },
  {
    name: "Clash Royale",
    slug: "clash-royale",
    icon: "👑",
    category: "Strategy",
    registerLink: "https://docs.google.com/forms/d/1qXK6X0N44FILAwH2Fl49otqfSZa-5IlclVHm-7t8dWI/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Clash Royale is a real-time multiplayer strategy game blending collectible card, tower defence, and battle arena elements. Players collect and upgrade cards featuring familiar 'Clash' characters, spells, and buildings, battling opponents to destroy towers and claim victory. Its competitive ladders, quick matches, and engaging esports tournaments have made Clash Royale a staple in mobile gaming.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026",
    format: "Battle Draft, Knockouts",
    platform: "Mobile",

  },
  {
    name: "EA FC Mobile",
    slug: "ea-fc-mobile",
    icon: "⚽",
    category: "Sports",
    registerLink: "https://docs.google.com/forms/d/1Fn_lfwmsUUcrEB8GqadhBCuMbE_Eu9FKo_TQvVWjKSw/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "EA SPORTS FC 25 is the latest football simulation offering from Electronic Arts, featuring authentic clubs, leagues, and players from around the world. New gameplay modes such as 5v5 Rush, improved tactical control with FC IQ, and both men’s and women’s career options bring deeper strategy and more ways to win, making it a premier esports football title.",
    prizePool: "To be announced",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026",
    format: "Knockout",
    platform: "Mobile",

  },
  {
    name: "Brawl Stars", 
    slug: "brawl-stars",
    icon: "⭐",
    category: "Action",
    registerLink: "https://docs.google.com/forms/d/1eYitqCeXhUl2rCyaK-lQTxqtrpdCr3vtgFPmMkWikLw/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Brawl Stars is a fast-paced multiplayer action game where players battle opponents in short, real-time matches across a variety of game modes. With unique Brawlers, special abilities, customizable skins, and strategic team play, it combines quick reflexes with tactical gameplay. Competitive modes, events, leaderboards, and tournaments make it well-suited for mobile esports competitions.",
    prizePool: "To be announced",
    teamSize: "3v3",
    date: "29th Oct - 1st Nov, 2026",
    format: "Best of 3, Knockouts",
    platform: "Mobile",

  },
  {
    name: "Mini Militia",
    slug: "mini-militia",
    icon: "🪖",
    category: "Action",
    registerLink: "https://docs.google.com/forms/d/1FtN5Vo3oJQA-kILfBAxZmoJ5XKvjjJ7SkezzDlJ282E/edit",
    rulebookLink: "https://drive.google.com/file/d/18urLYJ490Kgw7ezZQR6yPlbRlwy52GZW/view?usp=drivesdk",
    description: "Mini Militia - Doodle Army 2 is a 2D multiplayer shooter known for its fast, chaotic combat and doodle-style graphics. Players can engage locally or online in teams or free-for-all matches, using a wide array of weapons and jetpacks for vertical movement. Accessible yet competitive, it’s perfect for quick, action-packed multiplayer battles.",
    prizePool: "To be announced",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026",
    format: "Knockouts",
    platform: "Mobile",

  }
];

const ESPORTS_CONTACTS = ["Prins Anghan: +91 63517 23595", "Rushit Koladiya: +91 70419 30742"];

export default function EsportDetail() {
  const { game } = useParams<{ game: string }>();

  const currentGame = esportsGames.find(x => x.slug === game);

  if (!currentGame) {
    return <EventNotFound title="Game Not Found" message="The requested e-sports game could not be found." />;
  }

  return (
    <EventDetailLayout
      back={{ to: "/esports", label: "E-Sports Championship" }}
      icon={currentGame.icon}
      name={currentGame.name}
      subtitle="E-Sports Tournament Details & Registration"
      category={currentGame.category}
      registrationTitle="Tournament Registration"
      registerLink={currentGame.registerLink}
      rulebookLink={currentGame.rulebookLink}
      onRegister={() => console.log(`EsportDetail ${currentGame.slug} registration button clicked`)}
      onRulebook={() => console.log(`EsportDetail ${currentGame.slug} rule book download button clicked`)}
      facts={[
        { icon: <Calendar />, label: "Event Dates", value: currentGame.date },
        { icon: <Users />, label: "Team Size", value: currentGame.teamSize },
        { icon: <IndianRupee />, label: "Total Prizes", value: currentGame.prizePool },
      ]}
      infoTitle="Tournament Information"
      info={[
        { label: "Game Description", value: currentGame.description },
        { label: "Tournament Format", value: currentGame.format },
        { label: "Platform", value: currentGame.platform },
      ]}
      contacts={ESPORTS_CONTACTS}
      quickInfo={[
        { label: "Category", value: <span className="chip">{currentGame.category}</span> },
        { label: "Format", value: currentGame.format },
        { label: "Platform", value: currentGame.platform },
      ]}
      registrationOpen={true}
    />
  );
}
