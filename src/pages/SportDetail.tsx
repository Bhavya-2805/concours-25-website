import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Trophy, Calendar, MapPin, DollarSign, Phone, Mail, Download, Users, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SportDetail() {
  const { sport } = useParams<{ sport: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Sports data with detailed information
  const sports = [
    {
      name: "Basketball (Men)",
      slug: "basketball-men",
      icon: "🏀", 
      category: "Men's",
      registerLink: "https://docs.google.com/forms/d/1wpCrzwYUn5ECsycP5viUUDxbxsqgwmC7jSucfFRkjKk/edit?usp=drive_web&ouid=101228523565298084421",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
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
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Track and field athletics featuring various running, jumping, and throwing events. Athletes compete in individual events showcasing speed, strength, and endurance in the ultimate test of athletic ability.",
      format: "Individual Events",
      venue: "Athletics Track",
      teamSize: "Individual",
      date: "29th Oct - 1st Nov, 2026",
      duration: "4 Days",
      contact: "Ved Gabani: +91 93285 36537 \n Raj: +91 95125 80599"
    }
  ];

  // Find the current sport
  const currentSport = sports.find(s => s.slug === sport);

  if (!currentSport) {
    return (
      <div className="min-h-screen subtle-bg bg-gradient-to-br from-[#0a0203] via-[#1a0407] to-[#330609] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="concours-font text-4xl text-foreground mb-4">Sport Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The requested sport could not be found.
          </p>
          <Button
            className="btn-sports"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen subtle-bg bg-gradient-to-br from-[#0a0203] via-[#1a0407] to-[#330609] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">{currentSport.icon}</div>
          <h1 className="timesnewroman-font text-5xl lg:text-6xl heading-gold mb-4">
            {currentSport.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            Sports Tournament Details & Registration
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - spans 2/3 width */}
          <div className="lg:col-span-2 space-y-8">

            {/* Registration Card */}
            <Card className="epic-card">
              <CardHeader className="bg-gradient-sports text-white rounded-t-xl">
                <CardTitle className="timesnewroman-font text-2xl flex items-center">
                  <Trophy className="w-6 h-6 mr-3" />
                  Tournament Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {currentSport.registerLink ? (
                    <Button className="btn-sports flex-1"
                      onClick={() => {
                        window.open(currentSport.registerLink, '_blank');
                        console.log(`SportDetail ${currentSport.slug} registration button clicked`);
                      }}>
                      Register Now
                    </Button>
                  ) : (
                    <Button className="btn-sports flex-1" disabled>
                      Registration Coming Soon
                    </Button>
                  )}

                  <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => {
                      window.open(currentSport.rulebookLink, '_blank');
                      console.log(`SportDetail ${currentSport.slug} rule book download button clicked`);
                    }}>
                    <Download className="w-4 h-4 mr-2" />
                    View Rulebook
                  </Button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{currentSport.date}</div>
                      <div className="text-sm text-muted-foreground">Event Dates</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{currentSport.teamSize}</div>
                      <div className="text-sm text-muted-foreground">Team Size</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">{currentSport.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tournament Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-2xl text-foreground">
                  Tournament Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Sport Description</h4>
                  <p className="text-muted-foreground">{currentSport.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Tournament Format</h4>
                  <p className="text-muted-foreground">{currentSport.format}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Venue</h4>
                  <p className="text-muted-foreground">{currentSport.venue}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - spans 1/3 width */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-2xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Point Of Contact</div>
                    <div className="text-sm text-muted-foreground whitespace-pre-line">{currentSport.contact}</div>

                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-sm text-muted-foreground">concoursdaiict@gmail.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="epic-card">
              <CardHeader>
                <CardTitle className="timesnewroman-font text-xl text-foreground">
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <Badge variant="secondary">{currentSport.category}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">{currentSport.format}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Venue:</span>
                  <span className="font-medium">{currentSport.venue}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Registration:</span>
                  <span className="font-medium text-green-500">
                    {currentSport.registerLink ? "Open" : "Coming Soon"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
