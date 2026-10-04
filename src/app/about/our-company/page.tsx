import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import { getCompany } from "@/lib/data";
import { Star, Target, Eye, Gem, Handshake, Sparkles, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Company | ITStartup",
  description: "Learn about ITStartup — our story, mission, vision and values.",
};

/** Map API icon names to Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Star,
  Target,
  Eye,
  Gem,
  Handshake,
  Sparkles,
};

export default async function OurCompanyPage() {
  const company = await getCompany();

  // Fallbacks if API is down — page still renders
  const stats = company?.stats ?? [
    { value: "2017", label: "Founded" },
    { value: "120+", label: "Happy Clients" },
    { value: "250+", label: "Projects Delivered" },
    { value: "35+", label: "Team Members" },
  ];

  const story =
    company?.story && company.story.length > 0
      ? company.story
      : [
        "ITStartup was born out of a simple frustration — great ideas were failing because of poor execution.",
        "Today, we are proud to have delivered over 250 projects with a 99.9% uptime SLA.",
      ];

  const values =
    company?.values && company.values.length > 0
      ? company.values
      : [
        { icon: "Target", title: "Mission", desc: "To empower businesses with cutting-edge digital products." },
        { icon: "Eye", title: "Vision", desc: "To be the most trusted tech partner globally." },
        { icon: "Gem", title: "Quality", desc: "We never compromise on code quality or design excellence." },
        { icon: "Handshake", title: "Integrity", desc: "Transparent communication and honest relationships." },
      ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          About Us
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          We Build{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Digital Products
          </span>{" "}
          That Matter
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Founded in 2017, ITStartup has helped over 120 businesses launch digital products.
          We combine design, engineering and strategy under one roof.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={`${s.label}-${idx}`}>
              <p className="text-4xl font-extrabold text-blue-600">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle title="Our Story" subtitle="How it all started" />
          <div className="mt-8 space-y-5 text-gray-600 leading-relaxed text-lg">
            {story.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <SectionTitle title="Our Values" subtitle="What we stand for every single day" />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, idx) => {
              const IconComponent = iconMap[v.icon] || Star;
              return (
                <div
                  key={`${v.title}-${idx}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-600">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}