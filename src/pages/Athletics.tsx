import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Trophy, Calendar, Clock, Activity } from 'lucide-react';
import logoImage from '@/assets/images/IMG_0054.PNG';

const athleticsCategories = [
  {
    name: "Athletics",
    slug: "athletics",
    icon: "🏃‍♂️",
    category: "Boys and Girls",
    registerLink: "https://docs.google.com/forms/d/1fNcn6wGCWE7BW110DDqLf9eLt_lFRniFQUMFHBcpIQE/edit",
    rulebookLink: "https://drive.google.com/file/d/1w492Zb9WLZPjQQm3zeq1hXnyB_BzFg4z/view?usp=drivesdk",
    description: "Boys and Girls field and track sports featuring 100m, 200m, 400m, 800m, shot put, discus throw, and long jump. Athletes showcase their strength, technique, and explosive power.",
    format: "Individual Events",
    venue: "TBD",
    teamSize: "Individual",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days"
  },
  {
    name: "Relay",
    slug: "relay-race",
    icon: "🏃‍♂️",
    category: "Boys and Girls",
    registerLink: "https://docs.google.com/forms/d/1ctZdCmhBvKfBk8TbF1NwS7Y-o58PXqtLoR8rIuOdPPc/edit",
    rulebookLink: "https://drive.google.com/file/d/1w492Zb9WLZPjQQm3zeq1hXnyB_BzFg4z/view?usp=drivesdk",
    description: "Relay races featuring 4x100m events. Teams demonstrate their speed, teamwork, and precise baton passing in exciting relay competitions.",
    format: "Team Events",
    venue: "TBD",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026",
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
          <h1 className="concours-font text-5xl lg:text-6xl heading-gold mb-6">
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
            <h2 className="timesnewroman-font text-4xl heading-gold mb-4">
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
                      <Users className="icon-small mr-2 text-secondary" />
                      {category.teamSize}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Calendar className="icon-small mr-2 text-green-500" />
                      {category.date}
                    </div>
                  </div>

                  {/* Register Badge */}
                  <div className="text-center mb-4">
                    <Badge className="bg-[#840c15]/20 text-red-300 border-[#840c15]/40 px-3 py-1 font-semibold">
                      REGISTER NOW
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center mb-6 flex-grow">
                    {category.description}
                  </p>

                  {/* Action Button - Aligned at bottom */}
                  <Button className="w-full btn-sports text-sm py-2.5" asChild>
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
          <h2 className="varsity-font text-4xl lg:text-5xl heading-gold mb-6">
            Ready to Run?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't miss your chance to compete in the biggest athletics tournament of the year.
            Register now and secure your spot in sports history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Button
              variant="outline"
              className="border-[#840c15] text-red-200 bg-[#840c15]/10 hover:bg-[#840c15] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(132,12,21,0.4)]"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1w492Zb9WLZPjQQm3zeq1hXnyB_BzFg4z/view?usp=drivesdk', '_blank');
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

