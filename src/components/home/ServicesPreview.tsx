import Link from "next/link";
import { services } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionTitle title="Our Services" subtitle="End-to-end solutions for your business." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group block">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                ★
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.shortDesc}</p>
              <span className="text-blue-600 text-sm font-medium mt-4 inline-block group-hover:translate-x-1 transition">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}