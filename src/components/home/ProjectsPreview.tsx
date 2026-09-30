import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle title="Recent Projects" subtitle="A glimpse of our latest work." />
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <div key={p.id} className="card overflow-hidden !p-0 group">
              <div className="relative h-52">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.client}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-outline">View all projects</Link>
        </div>
      </div>
    </section>
  );
}