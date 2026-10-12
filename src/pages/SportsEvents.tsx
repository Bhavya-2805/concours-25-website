import { BookOpen, Icon } from "lucide-react";
import { soccerPitch } from "@lucide/lab";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { EventCard } from "@/components/site/EventCard";
import { CtaBand } from "@/components/site/CtaBand";

const sports = [
  { name: "Basketball (Men)", slug: "basketball-men", icon: "🏀", category: "Men's", registerLink: "https://docs.google.com/forms/d/1wpCrzwYUn5ECsycP5viUUDxbxsqgwmC7jSucfFRkjKk/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Basketball (Women)", slug: "basketball-women", icon: "🏀", category: "Women's", registerLink: "https://docs.google.com/forms/d/1nSZmh88rYZZFG9KbUzjVgabU9MTgbTb-RFWV_lUxhvU/edit" },
  { name: "Volleyball (Men)", slug: "volleyball-men", icon: "🏐", category: "Men's", registerLink: "https://docs.google.com/forms/d/1ULpKeNioK236WI4Zgvvavz2x74xYwqLM8ZLKSs8Yo1I/edit" },
  { name: "Volleyball (Women)", slug: "volleyball-women", icon: "🏐", category: "Women's", registerLink: "https://docs.google.com/forms/d/1jOEHhWKgzHpzXclPKJeab9UKBctC-sE6XRjLUTNipfg/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "Men's", registerLink: "https://docs.google.com/forms/d/11MTYd_-FgPuB2zo0Jx3j-TEvpMY3nthL2hzaXuu3b8c/edit" },
  { name: "Badminton (Men)", slug: "badminton-men", icon: "🏸", category: "Men's", registerLink: "https://docs.google.com/forms/d/1Vo2T_3e3utOSN3sS78yWsSeXBn86aQXkpZr1GKNK_Tg/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Badminton (Women)", slug: "badminton-women", icon: "🏸", category: "Women's", registerLink: "https://docs.google.com/forms/d/1YRT6Yd0M8RmPAm1iDj2vK8KzLQt-7Dap040FVe6DL6I/edit" },
  { name: "Badminton (Mixed Doubles)", slug: "badminton-mixed", icon: "🏸", category: "Mixed", registerLink: "https://docs.google.com/forms/d/1tdJ3x1q4PehnzSGVfN5LzXDszkA8-bUvzFYmjrNhDmM/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Football (Men)", slug: "football-men", icon: "⚽", category: "Men's", registerLink: "https://docs.google.com/forms/d/1RMz-iZ7m5PUGEBseYJRR7IoEIJRPkl1mSObWm0BBaLk/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Football (Women)", slug: "football-women", icon: "⚽", category: "Women's", registerLink: "https://docs.google.com/forms/d/1C3Q3TDnWc9tShdsh0_LYH027Ju5VNmeiBiKT_PNeH9U/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Table Tennis (Men)", slug: "table-tennis-men", icon: "🏓", category: "Men's", registerLink: "https://docs.google.com/forms/d/1dh2IfZdvyUNeNK6UkLXCdRQfiWYHBhr-cMNHZnjSvJY/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Table Tennis (Women)", slug: "table-tennis-women", icon: "🏓", category: "Women's", registerLink: "https://docs.google.com/forms/d/17pEAEdufSpR31QwwnG5oI4jNy227Xo9BWMkyh4ebE3I/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Tennis (Men)", slug: "tennis-men", icon: "🎾", category: "Men's", registerLink: "https://docs.google.com/forms/d/1zQFenqtLVxpY2xJqgFbEMds8gYfGkdWrr0pERak_i98/edit" },
  { name: "Tennis (Women)", slug: "tennis-women", icon: "🎾", category: "Women's", registerLink: "https://docs.google.com/forms/d/1Yx8rFE2_fAA1XPLj5tSHFzwuKn7-qxu1UN7SXcoz7l4/edit" },
  { name: "Carrom", slug: "carrom", icon: "🥏", category: "Mixed", registerLink: "https://docs.google.com/forms/d/1Vs0Eru3Zq-usbHVZZA0JXIoTG4X6ZBZ3dM_xsMGL4QE/edit" },
  { name: "Chess", slug: "chess", icon: "♟️", category: "Mixed", registerLink: "https://docs.google.com/forms/d/1bKWWNjh3jjDRGtcKm9bjKRAp8VlQHH1NX9YxvOpXR4A/edit?usp=drive_web&ouid=101228523565298084421" },
  { name: "Athletics", slug: "athletics", icon: "🏃", category: "Mixed", registerLink: "https://docs.google.com/forms/d/1fNcn6wGCWE7BW110DDqLf9eLt_lFRniFQUMFHBcpIQE/edit" },
  { name: "Pickleball", slug: "pickleball", icon: "🏓", category: "Mixed", registerLink: "https://forms.gle/vQyN6C6u74Gd8wjS8" },
];

const RULEBOOK = 'https://drive.google.com/file/d/1HmhNuUoUBGI7Z8Y1eSKSLbuHQpTjJScr/view?usp=drivesdk';

export default function SportsEvents() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "Men's", "Women's", "Mixed", "Gaming"];

  const filteredSports = selectedFilter === "All"
    ? sports
    : selectedFilter === "Gaming"
      ? []
      : sports.filter(s => s.category === selectedFilter);

  const showEsports = selectedFilter === "All" || selectedFilter === "Gaming";

  const countFor = (filter: string) =>
    filter === "All" ? sports.length + 1 : filter === "Gaming" ? 1 : sports.filter(s => s.category === filter).length;

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Competition Categories"
        watermark="COMPETE"
        title={<>Sports <span className="text-signal">Events</span></>}
        description="Choose your battlefield. From court sports to field events, find your sport and register for glory."
      >
        <div className="flex flex-wrap gap-8">
          {[
            { value: String(sports.length), label: "Sporting Events" },
            { value: "50+", label: "Colleges" },
            { value: "4", label: "Days of Action" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-black text-5xl text-white">{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c9cbce]/55 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Category Filter */}
      <div className="sticky top-[84px] z-30">
        <div className="container max-w-7xl">
          <div className="mx-auto w-fit max-w-full overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0203]/80 backdrop-blur-xl p-1.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-1" role="tablist" aria-label="Filter sports">
              {filterOptions.map((filter) => {
                const active = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFilter(filter)}
                    className={`relative shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-br from-[#f0283b] to-[#840c15] text-white shadow-[0_8px_24px_-8px_rgba(224,27,46,0.9)]"
                        : "text-[#c9cbce]/65 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {filter}
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded-md ${active ? "bg-black/25" : "bg-white/[0.06]"}`}>
                      {countFor(filter)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Sports Grid */}
      <section className="py-14">
        <div className="container max-w-7xl">
          <div key={selectedFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredSports.map((sport, i) => (
              <EventCard
                key={sport.slug}
                index={i + 1}
                delay={(i % 4) * 70}
                to={sport.slug === 'athletics' ? '/athletics' : `/sports/${sport.slug}`}
                icon={sport.icon}
                title={sport.name}
                category={sport.category}
                description={`Join the ultimate ${sport.name.toLowerCase()} competition and showcase your skills.`}
              />
            ))}

            {/* E-Sports Card */}
            {showEsports && (
              <EventCard
                key="esports"
                index={filteredSports.length + 1}
                delay={(filteredSports.length % 4) * 70}
                to="/esports"
                icon="🎮"
                title="E-Sports"
                category="Gaming"
                description="Compete in 8 exciting e-sports titles and prove your gaming skills against the best players."
              />
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaBand
        icon={<Icon iconNode={soccerPitch} className="w-6 h-6" />}
        title="Ready to Compete?"
        description="Don't miss your chance to be part of the most exciting sports festival of the year."
      >
        <button
          type="button"
          className="btn btn-chrome h-14 px-8"
          onClick={() => {
            window.open(RULEBOOK, '_blank');
          }}
        >
          <BookOpen className="w-4 h-4" /> View Rulebook
        </button>
      </CtaBand>
    </div>
  );
}
