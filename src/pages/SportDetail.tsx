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
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7237Cuy01ZgYEd4ywVgR8PmYVss3Dn5ywqaj-cXQOOa1maQ/viewform?usp=header",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Experience the fast-paced action of basketball in our men's tournament. Teams compete in intense matches showcasing athleticism, strategy, and teamwork.",
      format: "Knockout Tournament",
      venue: "Basketball Court, DAIICT",
      teamSize: "5v5",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Devdutt Dinesh: +91 7012438105 \n Kavish Patel: +91 8200054272"
    },
    { 
      name: "Basketball (Women)", 
      slug: "basketball-women", 
      icon: "🏀", 
      category: "Women's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1ebXYhf_e5rlYkxjT1LfiU2XCXKh-MeKhYFFGQBTF06xaGg/viewform?usp=header",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Join the women's basketball tournament featuring competitive matches and skilled players. The tournament emphasizes fair play, sportsmanship, and athletic excellence.",
      format: "Knockout Tournament",
      venue: "Basketball Court, DAIICT",
      teamSize: "5v5",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Devdutt Dinesh: +91 7012438105 \n Kavish Patel: +91 8200054272"
    },
    { 
      name: "Volleyball (Men)", 
      slug: "volleyball-men", 
      icon: "🏐", 
      category: "Men's", 
      registerLink: "https://forms.gle/4PQzMZ34HYjnn6sP6",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Spike your way to victory in the men's volleyball tournament. Teams showcase their serving, spiking, and defensive skills in exciting matches.",
      format: "Knockout Tournament",
      venue: "Volleyball Court, DAIICT",
      teamSize: "6v6",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Yuvraj Katara:   9978032169  \n Khelan Bhatt:    8160642207 \n Pandya Deep:   9537424333"

    },
    { 
      name: "Volleyball (Women)", 
      slug: "volleyball-women", 
      icon: "🏐", 
      category: "Women's", 
      registerLink: "https://forms.gle/nHxQFqk8SyqPaKeW6",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "The women's volleyball tournament features intense rallies and strategic gameplay. Teams compete in a series of matches leading to the championship.",
      format: "Knockout Tournament",
      venue: "Volleyball Court, DAIICT",
      teamSize: "6v6",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Yuvraj Katara:   9978032169  \n Khelan Bhatt:    8160642207 \n Pandya Deep:   9537424333"
    },
    { 
      name: "Cricket", 
      slug: "cricket", 
      icon: "🏏", 
      category: "Men's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXyFy_OsjEHiVHQUDSX2gFOCo_YDq0dNcGJX5Tbzm1V_WeCA/viewform?usp=dialog",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "India's most beloved sport takes center stage in our cricket tournament. Teams compete in T20 format matches featuring explosive batting and strategic bowling.",
      format: "T20 Tournament",
      venue: "Cricket Ground, DAIICT",
      teamSize: "11v11",
      date: "Nov 3th-9th, 2025",
      duration: "7 Days",
      contact: "Siddharth Vala: +91 9228206818 \n Kush Patel: +91 8780132145 \n Krish Vijayvergiya : +91 9664246301"
    },
    { 
      name: "Badminton (Men)", 
      slug: "badminton-men", 
      icon: "🏸", 
      category: "Men's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScdMNpfnZ3KV3OdODTRxJfUg128QPl-Wilt-oy49JHbcCw2nw/viewform?usp=header",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Fast-paced badminton action in the men's tournament. Each team game will be best of five. Each match will be the best of three games, 21 points each. All matches will be played as per the rules of the Badminton Association of India (BAI).",
      format: "Knockout Tournament",
      venue: "Badminton Court",
      teamSize: "4-7",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Rishita Jodhawat :98283 90304 \n Dhruv Ramani : 88497 99027 \n Gaurang Rahani : 94996 05923  "
    },
    { 
      name: "Badminton (Women)", 
      slug: "badminton-women", 
      icon: "🏸", 
      category: "Women's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3KGvqQ1kzcyFTGb_NEAYt4CwhVDRWK325rmVN6FoBAV-Oag/viewform?usp=dialog",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Women's badminton tournament featuring skilled players competing in exciting matches. Each team game will be best of three. Each match will be the best of three games, 21 points each. All matches will be played as per the rules of the Badminton Association of India (BAI).",
      format: "Knockout Tournament",
      venue: "Badminton Court",
      teamSize: "2-5",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Rishita Jodhawat :98283 90304 \n Dhruv Ramani : 88497 99027 \n Gaurang Rahani : 94996 05923  "
    },
    { 
      name: "Badminton (Mixed Doubles)", 
      slug: "badminton-mixed", 
      icon: "🏸", 
      category: "Mixed", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScGnwzUQsSf-NY5cBhHjlCXLfOqIVx0dI9JhxzkZ4rwsvlCHQ/viewform?usp=header",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Mixed doubles badminton tournament where male and female players team up for exciting matches. Each team game will be best of three. Each match will be the best of three games, 21 points each. All matches will be played as per the rules of the Badminton Association of India (BAI).",
      format: "Knockout Tournament",
      venue: "Badminton Court",
      teamSize: "2-4",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Rishita Jodhawat :98283 90304 \n Dhruv Ramani : 88497 99027 \n Gaurang Rahani : 94996 05923  "
    },
    { 
      name: "Football (Men)", 
      slug: "football-men", 
      icon: "⚽", 
      category: "Men's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMX15T6tpVbcSsupKpao983AnUv1y0p_-HCOJRcHZ4YlRKZQ/viewform?usp=dialog",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "The beautiful game takes center stage in our men's football tournament. Teams compete in exciting matches featuring skillful play and tactical formations.",
      format: "Knockout Tournament",
      venue: "Football Ground, DAIICT",
      teamSize: "11v11",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Jay Unadkat : +91 79847 04174 \n Diyen Patel   : +91 95109 55278"
    },
    { 
      name: "Football (Women)", 
      slug: "football-women", 
      icon: "⚽", 
      category: "Women's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeSJVc1NdP2Ok4BkvaeAbBMsaogg0qS6Hki13ERsRqN1NwMkw/viewform?usp=dialog",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Women's football tournament showcasing skill, determination, and teamwork. Teams compete in competitive matches that highlight the growing popularity of women's football.",
      format: "Knockout Tournament",
      venue: "Football Ground, DAIICT",
      teamSize: "7v7",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Jay Unadkat : +91 79847 04174 \n Diyen Patel   : +91 95109 55278"
    },
    { 
      name: "Table Tennis (Men)", 
      slug: "table-tennis-men", 
      icon: "🏓", 
      category: "Men's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVgb2FHhNcysgnv6cPQwXOQzTeF_hYHD1141Rc6Dya_qIJgw/viewform?usp=sharing&ouid=101228523565298084421",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Fast-paced table tennis action in the men's tournament. Players showcase their reflexes, spin techniques, and tactical skills in intense rallies.",
      format: "Knockout Tournament",
      venue: "Student Activity Center, DAIICT",
      teamSize: "4-5",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Neeti Gunsai: +91 6355770669 \n Jay Shah: +91 7990348872"
    },
    { 
      name: "Table Tennis (Women)", 
      slug: "table-tennis-women", 
      icon: "🏓", 
      category: "Women's", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfP5I28i7h-7LoFYl1DMAtsadaeRIQ1pBOLkN3fYWl76PP3jw/viewform?usp=sharing&ouid=101228523565298084421",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Women's table tennis tournament featuring skilled players competing in singles matches. The tournament emphasizes technique, strategy, and sportsmanship.",
      format: "Knockout Tournament",
      venue: "Student Activity Centre, DAIICT",
      teamSize: "4-5",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Neeti Gunsai: +91 6355770669 \n Jay Shah: +91 7990348872"
    },
    { 
      name: "Tennis (Men)", 
      slug: "tennis-men", 
      icon: "🎾", 
      category: "Men's", 
      registerLink: "https://forms.gle/5LtqB78P7XUe1eL16",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Men's tennis tournament featuring powerful serves, strategic rallies, and athletic displays. The tournament consists of 3 games per matches: 2 singles  and 1 doubles , testing both individual skills and team coordination.",
      format: "Knockout Tournament",
      venue: "TBA",
      teamSize: "1v1",
      date: "Nov 6th-9th, 2025",
      duration: "2 Days",
      contact: "Rutva Mehta: +91 9723204898 \n Rishika Shah: +91 9409433069"
    },
    { 
      name: "Tennis (Women)", 
      slug: "tennis-women", 
      icon: "🎾", 
      category: "Women's", 
      registerLink: "https://forms.gle/E914aiUbmjpxp1B49",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Women's tennis tournament showcasing skill, grace, and competitive spirit. The tournament consists of 3 games per matches: 2 singles  and 1 doubles , highlighting both individual technique and team strategy.",
      format: "Knockout Tournament",
      venue: "TBA",
      teamSize: "1v1",
      date: "Nov 6th-9th, 2025",
      duration: "2 Days",
      contact: "Rutva Mehta: +91 9723204898 \n Rishika Shah: +91 9409433069"
    },
    { 
      name: "Carrom", 
      slug: "carrom", 
      icon: "🥏", 
      category: "Mixed", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdsI1LNxIEJKKV3wUh-KrjE7T9nQUTEIYclOiWdLQZ897bUYQ/viewform?usp=dialog",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Strategic carrom tournament where players compete in singles matches. The game requires precision, strategy, and skillful finger techniques to pocket coins and win matches.",
      format: "Singles Tournament",
      venue: "Indoor Hall",
      teamSize: "2v2",
      date: "Nov 6th-9th, 2025",
      duration: "2 Days",
      contact: "Jash Shah: 9033022192"
    },
    { 
      name: "Chess", 
      slug: "chess", 
      icon: "♟️", 
      category: "Mixed", 
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2RhF0ndssy0gStfyf-a9XEAkoqs_EywDE8zQ_nA0BR4FFbQ/viewform?usp=sharing&ouid=101228523565298084421",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Strategic chess tournament featuring intense mental battles. Players compete in classical time control matches that test tactical skills, positional understanding, and endgame technique.",
      format: "Classical Tournament",
      venue: "Open Air Theatre, DAIICT",
      teamSize: "1v1",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Aarya Shah : 9426589465 \n Priya Patel  : 9925221200"
    },
    { 
      name: "Athletics", 
      slug: "athletics", 
      icon: "🏃", 
      category: "Mixed", 
      registerLink: "",
      rulebookLink: "https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing",
      description: "Track and field athletics featuring various running, jumping, and throwing events. Athletes compete in individual events showcasing speed, strength, and endurance in the ultimate test of athletic ability.",
      format: "Individual Events",
      venue: "Athletics Track",
      teamSize: "Individual",
      date: "Nov 6th-9th, 2025",
      duration: "4 Days",
      contact: "Athletics Coordinator"
    }
  ];

  // Find the current sport
  const currentSport = sports.find(s => s.slug === sport);

  if (!currentSport) {
    return (
      <div className="min-h-screen subtle-bg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-6">
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
    <div className="min-h-screen subtle-bg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">{currentSport.icon}</div>
          <h1 className="timesnewroman-font text-5xl lg:text-6xl text-foreground mb-4">
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