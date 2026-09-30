import Link from "next/link";
import { services } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <SectionTitle title="Our Services" subtitle="Everything you need to grow online." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.slug}>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-gray-600 text-sm mt-2 mb-4">{s.shortDesc}</p>
            <Link href={`/services/${s.slug}`} className="text-blue-600 text-sm font-medium">
              Learn more →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}