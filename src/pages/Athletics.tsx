import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Trophy, Calendar, Clock, Activity } from 'lucide-react';
import logoImage from '@/assets/images/IMG_0054.PNG';

const athleticsCategories = [
  { 
    name: "Field Sport (Men)", 
    slug: "field-sport-men", 
    icon: "🏋️", 
    category: "Men's", 
    registerLink: "https://forms.gle/s4Z7GfpxnSfbAb9TA", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Men's field sports featuring shot put, discus throw, javelin throw, and long jump. Athletes showcase their strength, technique, and explosive power.",
    format: "Individual Events",
    venue: "Athletics Track, DAIICT",
    teamSize: "Individual",
    date: "Nov 6th-9th, 2025",
    duration: "4 Days"
  },
  { 
    name: "Field Sport (Women)", 
    slug: "field-sport-women", 
    icon: "🏋️‍♀️", 
    category: "Women's", 
    registerLink: "https://forms.gle/Hifu8UrBk7pjbXEC7", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Women's field sports featuring shot put, discus throw, javelin throw, and long jump. Athletes demonstrate their strength, technique, and athletic prowess.",
    format: "Individual Events",
    venue: "Athletics Track, DAIICT",
    teamSize: "Individual",
    date: "Nov 6th-9th, 2025",
    duration: "4 Days"
  },
  { 
    name: "Relay Race (Men)", 
    slug: "relay-race-men", 
    icon: "🏃‍♂️", 
    category: "Men's", 
    registerLink: "https://forms.gle/Tg3gT6hNNkcvs1WS7", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Men's relay races featuring 4x100m and 4x400m events. Teams showcase their speed, coordination, and baton passing skills.",
    format: "Team Events",
    venue: "Athletics Track, DAIICT",
    teamSize: "4v4",
    date: "Nov 6th-9th, 2025",
    duration: "4 Days"
  },
  { 
    name: "Relay Race (Women)", 
    slug: "relay-race-women", 
    icon: "🏃‍♀️", 
    category: "Women's", 
    registerLink: "https://forms.gle/HXunEKYRnBw8imr27", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Women's relay races featuring 4x100m and 4x400m events. Teams demonstrate their speed, teamwork, and precise baton passing.",
    format: "Team Events",
    venue: "Athletics Track, DAIICT",
    teamSize: "4v4",
    date: "Nov 6th-9th, 2025",
    duration: "4 Days"
  },
  { 
    name: "Track Races (Men)", 
    slug: "track-races-men", 
    icon: "🏃", 
    category: "Men's", 
    registerLink: "https://forms.gle/2ZhfnprvjkKGv7Bb9", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Men's track races featuring 100m, 200m, 400m, 800m, 1500m, and 5000m events. Athletes compete in various distance categories.",
    format: "Individual Events",
    venue: "Athletics Track, DAIICT",
    teamSize: "Individual",
    date: "Nov 6th-9th, 2025",
    duration: "4 Days"
  },
  { 
    name: "Track Races (Women)", 
    slug: "track-races-women", 
    icon: "🏃‍♀️", 
    category: "Women's", 
    registerLink: "https://forms.gle/mxZ2XMURGayJMFjW9", 
    rulebookLink: "https://drive.google.com/file/d/1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU/view",
    description: "Women's track races featuring 100m, 200m, 400m, 800m, 1500m, and 5000m events. Athletes compete in various distance categories.",
    format: "Individual Events",
    venue: "Athletics Track, DAIICT",
    teamSize: "Individual",
    date: "Nov 6th-9th, 2025",
    duration: "4 Days"
  }
];

export default function Athletics() {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className="min-h-screen subtle-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero stadium-hero">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <img src={logoImage} alt="Logo" className="w-28 h-28" />
          </div>
          <h1 className="concours-font text-5xl lg:text-6xl text-foreground mb-6">
            Athletics Championship
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Compete in 6 thrilling athletics categories with track and field events. 
            Whether you're a sprinter, distance runner, or field athlete, 
            we have the perfect challenge for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          </div>
        </div>
      </section>

      {/* Athletics Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="timesnewroman-font text-4xl text-foreground mb-4">
              Choose Your Event
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your athletics category and prepare for the ultimate track and field experience. 
              Each event offers unique challenges and exciting rewards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {athleticsCategories.map((category, index) => (
              <Card key={category.slug} className="epic-card overflow-hidden group cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Category Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {category.icon}
                  </div>
                  
                  {/* Category Name */}
                  <h3 className="varsity-font text-2xl text-foreground mb-2 text-center">{category.name}</h3>
                  
                  {/* Category Type */}
                  <p className="text-muted-foreground mb-4 text-center">{category.category}</p>
                  
                  {/* Event Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Trophy className="icon-small mr-2 text-yellow-500" />
                      {category.format}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Users className="icon-small mr-2 text-blue-500" />
                      {category.teamSize}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Calendar className="icon-small mr-2 text-green-500" />
                      {category.date}
                    </div>
                  </div>
                  
                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      REGISTER NOW
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center mb-6 flex-grow">
                    {category.description}
                  </p>
                  
                  {/* Action Button - Aligned at bottom */}
                  <Button className="w-full bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-200" asChild>
                    <Link to={`/athletics/${category.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="icon-container">
              <Activity className="icon-large icon-secondary" />
            </div>
          </div>
          <h2 className="varsity-font text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Run?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't miss your chance to compete in the biggest athletics tournament of the year.
            Register now and secure your spot in sports history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                window.open('https://drive.google.com/file/d/19TtS3E1lB7B_xUExo03L4O6gkpOVJVeg/view?usp=sharing', '_blank');
                console.log('Athletics CTA rule book download button clicked');
              }}
            >
              View RuleBook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
