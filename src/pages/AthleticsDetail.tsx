import { useParams } from "react-router-dom";
import { Calendar, Users, Clock } from "lucide-react";
import { EventDetailLayout } from "@/components/site/EventDetailLayout";
import { EventNotFound } from "@/components/site/EventNotFound";

// Athletics categories data
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
    duration: "4 Days",
    contact: "Ved Gabani: +91 93285 36537 \n Raj: +91 95125 80599"
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
    duration: "4 Days",
    contact: "Ved Gabani: +91 93285 36537 \n Raj: +91 95125 80599"
  }
];

export default function AthleticsDetail() {
  const { category } = useParams<{ category: string }>();

  const currentCategory = athleticsCategories.find(x => x.slug === category);

  if (!currentCategory) {
    return <EventNotFound title="Athletics Category Not Found" message="The requested athletics category could not be found." />;
  }

  return (
    <EventDetailLayout
      back={{ to: "/athletics", label: "Athletics Championship" }}
      icon={currentCategory.icon}
      name={currentCategory.name}
      subtitle="Athletics Event Details & Registration"
      category={currentCategory.category}
      registrationTitle="Event Registration"
      registerLink={currentCategory.registerLink}
      rulebookLink={currentCategory.rulebookLink}
      onRegister={() => console.log(`AthleticsDetail ${currentCategory.slug} registration button clicked`)}
      onRulebook={() => console.log(`AthleticsDetail ${currentCategory.slug} rule book download button clicked`)}
      facts={[
        { icon: <Calendar />, label: "Event Dates", value: currentCategory.date },
        { icon: <Users />, label: "Team Size", value: currentCategory.teamSize },
        { icon: <Clock />, label: "Duration", value: currentCategory.duration },
      ]}
      infoTitle="Event Information"
      info={[
        { label: "Event Description", value: currentCategory.description },
        { label: "Event Format", value: currentCategory.format },
        { label: "Venue", value: currentCategory.venue },
      ]}
      contacts={currentCategory.contact.split("\n")}
      quickInfo={[
        { label: "Category", value: <span className="chip">{currentCategory.category}</span> },
        { label: "Format", value: currentCategory.format },
        { label: "Venue", value: currentCategory.venue },
      ]}
      registrationOpen={true}
    />
  );
}
