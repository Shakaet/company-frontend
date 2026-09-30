import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const team = [
  { name: "Rahim Uddin", role: "Founder & CEO" },
  { name: "Karim Ahmed", role: "CTO" },
  { name: "Sadia Rahman", role: "Lead Designer" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <SectionTitle title="About Our Company" subtitle="We are a team of passionate builders." />
      <p className="max-w-3xl mx-auto text-gray-600 text-center">
        Founded in 2017, ITStartup has helped over 120 businesses launch digital products.
        We combine design, engineering and strategy under one roof.
      </p>

      <div className="mt-20">
        <SectionTitle title="Our Team" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((m) => (
            <Card key={m.name} className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4" />
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.role}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-3xl mx-auto">
        <SectionTitle title="Founder's Message" />
        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700">
          "We started with a simple belief — great software should feel effortless.
          Every project we take on is a promise to deliver quality and value."
        </blockquote>
      </div>
    </div>
  );
}