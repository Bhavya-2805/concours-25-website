import { Users, Trophy, Calendar, BookOpen, Activity } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { SectionHeading } from '@/components/site/SectionHeading';
import { EventCard } from '@/components/site/EventCard';
import { CtaBand } from '@/components/site/CtaBand';

const athleticsCategories = [
  {
    name: "Athletics",
    slug: "athletics",
    icon: "🏃‍♂️",
    category: "Boys and Girls",
    registerLink: "https://docs.google.com/forms/d/1fNcn6wGCWE7BW110DDqLf9eLt_lFRniFQUMFHBcpIQE/edit",
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
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
    rulebookLink: "https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk",
    description: "Relay races featuring 4x100m events. Teams demonstrate their speed, teamwork, and precise baton passing in exciting relay competitions.",
    format: "Team Events",
    venue: "TBD",
    teamSize: "4v4",
    date: "29th Oct - 1st Nov, 2026",
    duration: "4 Days"
  }
];

export default function Athletics() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Track & Field"
        watermark="SPRINT"
        title={<>Athletics <span className="text-signal">Championship</span></>}
        description="Compete in 6 thrilling athletics categories with track and field events. Whether you're a sprinter, distance runner, or field athlete, we have the perfect challenge for you."
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <SectionHeading
            index="01"
            eyebrow="Categories"
            title="Choose Your Event"
            description="Select your athletics category and prepare for the ultimate track and field experience. Each event offers unique challenges and exciting rewards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {athleticsCategories.map((item, i) => (
              <EventCard
                key={item.slug}
                index={i + 1}
                delay={(i % 4) * 70}
                to={`/athletics/${item.slug}`}
                icon={item.icon || undefined}
                title={item.name}
                category={item.category}
                meta={[
                  { icon: <Trophy />, label: item.format },
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
        icon={<Activity className="w-6 h-6" />}
        title="Ready to Run?"
        description="Don't miss your chance to compete in the biggest athletics tournament of the year. Register now and secure your spot in sports history."
      >
        <button
          type="button"
          className="btn btn-chrome h-14 px-8"
          onClick={() => {
            window.open('https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk', '_blank');
            console.log('Athletics CTA rule book download button clicked');
          }}
        >
          <BookOpen className="w-4 h-4" /> View RuleBook
        </button>
      </CtaBand>
    </div>
  );
}
