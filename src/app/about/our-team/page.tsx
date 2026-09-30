import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Team | ITStartup",
  description: "Meet the talented team behind ITStartup's award-winning digital products.",
};

const team = [
  { name: "Rahim Uddin",  role: "Founder & CEO" },
  { name: "Karim Ahmed",  role: "CTO" },
  { name: "Sadia Rahman", role: "Lead Designer" },
];

export default function OurTeamPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <SectionTitle title="Our Team" subtitle="The passionate people who make it happen." />
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
        {team.map((m) => (
          <Card key={m.name} className="text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4" />
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-500">{m.role}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
