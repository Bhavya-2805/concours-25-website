import { useParams } from "react-router-dom";
import { Calendar, Users, Clock } from "lucide-react";
import { EventDetailLayout } from "@/components/site/EventDetailLayout";
import { EventNotFound } from "@/components/site/EventNotFound";

// Sports data with detailed information
const sports = [
  {
    name: "Basketball (Men)",
    slug: "basketball-men",
    icon: "🏀",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/1wpCrzwYUn5ECsycP5viUUDxbxsqgwmC7jSucfFRkjKk/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Experience the fast-paced action of basketball in our men's tournament. Teams compete in intense matches showcasing athleticism, strategy, and teamwork.",
    format: "Knockout Tournament",
    venue: "Basketball Court, DAIICT",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Jatin Srinivas: 8618385403 \n Abhing: 8866453300"
  },
  {
    name: "Basketball (Women)",
    slug: "basketball-women",
    icon: "🏀",
    category: "Women's",
    registerLink: "https://docs.google.com/forms/d/1nSZmh88rYZZFG9KbUzjVgabU9MTgbTb-RFWV_lUxhvU/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Join the women's basketball tournament featuring competitive matches and skilled players. The tournament emphasizes fair play, sportsmanship, and athletic excellence.",
    format: "Knockout Tournament",
    venue: "Basketball Court, DAIICT",
    teamSize: "5v5",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Jatin Srinivas: 8618385403 \n Abhing: 8866453300"
  },
  {
    name: "Volleyball (Men)",
    slug: "volleyball-men",
    icon: "🏐",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/1ULpKeNioK236WI4Zgvvavz2x74xYwqLM8ZLKSs8Yo1I/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Spike your way to victory in the men's volleyball tournament. Teams showcase their serving, spiking, and defensive skills in exciting matches.",
    format: "Knockout Tournament",
    venue: "Volleyball Court, DAIICT",
    teamSize: "6v6",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Pushan Patel: +91 7041773609 \n Yuvraj Katara: +91 9978032169"

  },
  {
    name: "Volleyball (Women)",
    slug: "volleyball-women",
    icon: "🏐",
    category: "Women's",
    registerLink: "https://docs.google.com/forms/d/1jOEHhWKgzHpzXclPKJeab9UKBctC-sE6XRjLUTNipfg/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "The women's volleyball tournament features intense rallies and strategic gameplay. Teams compete in a series of matches leading to the championship.",
    format: "Knockout Tournament",
    venue: "Volleyball Court, DAIICT",
    teamSize: "6v6",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Pushan Patel: +91 7041773609 \n Yuvraj Katara: +91 9978032169"
  },
  {
    name: "Cricket",
    slug: "cricket",
    icon: "🏏",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/11MTYd_-FgPuB2zo0Jx3j-TEvpMY3nthL2hzaXuu3b8c/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "India's most beloved sport takes center stage in our cricket tournament. Teams compete in T20 format matches featuring explosive batting and strategic bowling.",
    format: "T20 Tournament",
    venue: "Cricket Ground, DAIICT",
    teamSize: "11v11",
    date: "29th Oct - 1st Nov, 2026",
    duration: "7 Days",
    contact: "Pal Jalodara: +91 9638707155 \n Mrigank Chaudhari: +91 9274117599 \n Pariksheet Viradiya: +91 9925536006"
  },
  {
    name: "Badminton (Men)",
    slug: "badminton-men",
    icon: "🏸",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/1Vo2T_3e3utOSN3sS78yWsSeXBn86aQXkpZr1GKNK_Tg/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Fast-paced badminton action in the men's tournament. Each team game will be best of five. Each match will be the best of three games, 21 points each. All matches will be played as per the rules of the Badminton Association of India (BAI).",
    format: "Knockout Tournament",
    venue: "Badminton Court",
    teamSize: "4-7",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Darshit Raval: +91 97994 72840 \n Bhavya Shah: +91 63515 09727 \n Yash: +91 96624 33151"
  },
  {
    name: "Badminton (Women)",
    slug: "badminton-women",
    icon: "🏸",
    category: "Women's",
    registerLink: "https://docs.google.com/forms/d/1YRT6Yd0M8RmPAm1iDj2vK8KzLQt-7Dap040FVe6DL6I/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Women's badminton tournament featuring skilled players competing in exciting matches. Each team game will be best of three. Each match will be the best of three games, 21 points each. All matches will be played as per the rules of the Badminton Association of India (BAI).",
    format: "Knockout Tournament",
    venue: "Badminton Court",
    teamSize: "2-5",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Darshit Raval: +91 97994 72840 \n Bhavya Shah: +91 63515 09727 \n Yash: +91 96624 33151"
  },
  {
    name: "Badminton (Mixed Doubles)",
    slug: "badminton-mixed",
    icon: "🏸",
    category: "Mixed",
    registerLink: "https://docs.google.com/forms/d/1tdJ3x1q4PehnzSGVfN5LzXDszkA8-bUvzFYmjrNhDmM/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Mixed doubles badminton tournament where male and female players team up for exciting matches. Each team game will be best of three. Each match will be the best of three games, 21 points each. All matches will be played as per the rules of the Badminton Association of India (BAI).",
    format: "Knockout Tournament",
    venue: "Badminton Court",
    teamSize: "2-4",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Darshit Raval: +91 97994 72840 \n Bhavya Shah: +91 63515 09727 \n Yash: +91 96624 33151"
  },
  {
    name: "Football (Men)",
    slug: "football-men",
    icon: "⚽",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/1RMz-iZ7m5PUGEBseYJRR7IoEIJRPkl1mSObWm0BBaLk/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "The beautiful game takes center stage in our men's football tournament. Teams compete in exciting matches featuring skillful play and tactical formations.",
    format: "Knockout Tournament",
    venue: "Football Ground, DAIICT",
    teamSize: "11v11",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Vasu Vaghasiya: +91 73837 58690 \n Vatsal Chhatrola: +91 92653 08898 \n Ayush Balat: +91 74350 62351"
  },
  {
    name: "Football (Women)",
    slug: "football-women",
    icon: "⚽",
    category: "Women's",
    registerLink: "https://docs.google.com/forms/d/1C3Q3TDnWc9tShdsh0_LYH027Ju5VNmeiBiKT_PNeH9U/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Women's football tournament showcasing skill, determination, and teamwork. Teams compete in competitive matches that highlight the growing popularity of women's football.",
    format: "Knockout Tournament",
    venue: "Football Ground, DAIICT",
    teamSize: "7v7",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Vasu Vaghasiya: +91 73837 58690 \n Vatsal Chhatrola: +91 92653 08898 \n Ayush Balat: +91 74350 62351"
  },
  {
    name: "Table Tennis (Men)",
    slug: "table-tennis-men",
    icon: "🏓",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/1dh2IfZdvyUNeNK6UkLXCdRQfiWYHBhr-cMNHZnjSvJY/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Fast-paced table tennis action in the men's tournament. Players showcase their reflexes, spin techniques, and tactical skills in intense rallies.",
    format: "Knockout Tournament",
    venue: "Student Activity Center, DAIICT",
    teamSize: "4-5",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Yug Patel: +91 9104632937 \n Vraj Patel: +91 9316148846"
  },
  {
    name: "Table Tennis (Women)",
    slug: "table-tennis-women",
    icon: "🏓",
    category: "Women's",
    registerLink: "https://docs.google.com/forms/d/17pEAEdufSpR31QwwnG5oI4jNy227Xo9BWMkyh4ebE3I/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Women's table tennis tournament featuring skilled players competing in singles matches. The tournament emphasizes technique, strategy, and sportsmanship.",
    format: "Knockout Tournament",
    venue: "Student Activity Centre, DAIICT",
    teamSize: "4-5",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Yug Patel: +91 9104632937 \n Vraj Patel: +91 9316148846"
  },
  {
    name: "Tennis (Men)",
    slug: "tennis-men",
    icon: "🎾",
    category: "Men's",
    registerLink: "https://docs.google.com/forms/d/1zQFenqtLVxpY2xJqgFbEMds8gYfGkdWrr0pERak_i98/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Men's tennis tournament featuring powerful serves, strategic rallies, and athletic displays. The tournament consists of 3 games per matches: 2 singles  and 1 doubles , testing both individual skills and team coordination.",
    format: "Knockout Tournament",
    venue: "TBA",
    teamSize: "3-4",
    date: "29th Oct - 1st Nov, 2026",
    duration: "2 Days",
    contact: "Joy Patel: +91 9316941046 \n Neel Gami: +91 7990322293"
  },
  {
    name: "Tennis (Women)",
    slug: "tennis-women",
    icon: "🎾",
    category: "Women's",
    registerLink: "https://docs.google.com/forms/d/1Yx8rFE2_fAA1XPLj5tSHFzwuKn7-qxu1UN7SXcoz7l4/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Women's tennis tournament showcasing skill, grace, and competitive spirit. The tournament consists of 3 games per matches: 2 singles  and 1 doubles , highlighting both individual technique and team strategy.",
    format: "Knockout Tournament",
    venue: "TBA",
    teamSize: "3-4",
    date: "29th Oct - 1st Nov, 2026",
    duration: "2 Days",
    contact: "Joy Patel: +91 9316941046 \n Neel Gami: +91 7990322293"
  },
  {
    name: "Carrom",
    slug: "carrom",
    icon: "🥏",
    category: "Mixed",
    registerLink: "https://docs.google.com/forms/d/1Vs0Eru3Zq-usbHVZZA0JXIoTG4X6ZBZ3dM_xsMGL4QE/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Strategic carrom tournament where players compete in singles matches. The game requires precision, strategy, and skillful finger techniques to pocket coins and win matches.",
    format: "Singles Tournament",
    venue: "Indoor Hall",
    teamSize: "2v2",
    date: "29th Oct - 1st Nov, 2026",
    duration: "2 Days",
    contact: "Pratham Rabari: +91 9054684566"
  },
  {
    name: "Chess",
    slug: "chess",
    icon: "♟️",
    category: "Mixed",
    registerLink: "https://docs.google.com/forms/d/1bKWWNjh3jjDRGtcKm9bjKRAp8VlQHH1NX9YxvOpXR4A/edit?usp=drive_web&ouid=101228523565298084421",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Strategic chess tournament featuring intense mental battles. Players compete in classical time control matches that test tactical skills, positional understanding, and endgame technique.",
    format: "Classical Tournament",
    venue: "Open Air Theatre, DAIICT",
    teamSize: "1v1",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Kushal Surana: 9377436524 \n Twisha Mistry: 7412957193"
  },
  {
    name: "Athletics",
    slug: "athletics",
    icon: "🏃‍♂️",
    category: "Mixed",
    registerLink: "https://docs.google.com/forms/d/1fNcn6wGCWE7BW110DDqLf9eLt_lFRniFQUMFHBcpIQE/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Track and field athletics featuring various running, jumping, and throwing events. Athletes compete in individual events showcasing speed, strength, and endurance in the ultimate test of athletic ability.",
    format: "Individual Events",
    venue: "Athletics Track",
    teamSize: "Individual",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Ved Gabani: +91 93285 36537 \n Raj: +91 95125 80599"
  },
  {
    name: "Pickleball",
    slug: "pickleball",
    icon: "🏓",
    category: "Mixed",
    registerLink: "https://forms.gle/vQyN6C6u74Gd8wjS8",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Join the Pickleball tournament and show off your skills. Registration Fees: ₹250",
    format: "Knockout Tournament",
    venue: "Pickleball Court",
    teamSize: "Doubles",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days",
    contact: "Priya Shah: +91 84697 90057 \n Varun Bajaj: +91 95748 08771"
  }
];

export default function SportDetail() {
  const { sport } = useParams<{ sport: string }>();

  const currentSport = sports.find(x => x.slug === sport);

  if (!currentSport) {
    return <EventNotFound title="Sport Not Found" message="The requested sport could not be found." />;
  }

  return (
    <EventDetailLayout
      back={{ to: "/sports-events", label: "All Sports Events" }}
      icon={currentSport.icon}
      name={currentSport.name}
      subtitle="Sports Tournament Details & Registration"
      category={currentSport.category}
      registrationTitle="Tournament Registration"
      registerLink={currentSport.registerLink}
      rulebookLink={currentSport.rulebookLink}
      onRegister={() => console.log(`SportDetail ${currentSport.slug} registration button clicked`)}
      onRulebook={() => console.log(`SportDetail ${currentSport.slug} rule book download button clicked`)}
      facts={[
        { icon: <Calendar />, label: "Event Dates", value: currentSport.date },
        { icon: <Users />, label: "Team Size", value: currentSport.teamSize },
        { icon: <Clock />, label: "Duration", value: currentSport.duration },
      ]}
      infoTitle="Tournament Information"
      info={[
        { label: "Sport Description", value: currentSport.description },
        { label: "Tournament Format", value: currentSport.format },
        { label: "Venue", value: currentSport.venue },
      ]}
      contacts={currentSport.contact.split("\n")}
      quickInfo={[
        { label: "Category", value: <span className="chip">{currentSport.category}</span> },
        { label: "Format", value: currentSport.format },
        { label: "Venue", value: currentSport.venue },
      ]}
      registrationOpen={Boolean(currentSport.registerLink)}
    />
  );
}
