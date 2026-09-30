import Link from "next/link";
import { jobs } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function CareerPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <SectionTitle title="Join Our Team" subtitle="We're always looking for great people." />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {jobs.map((j) => (
          <Card key={j.id}>
            <h3 className="font-semibold text-lg">{j.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{j.type} · {j.location}</p>
            <p className="text-gray-600 text-sm mt-3">{j.description}</p>
            <Link href={`/career/${j.id}`} className="text-blue-600 text-sm font-medium mt-4 inline-block">
              View details →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}