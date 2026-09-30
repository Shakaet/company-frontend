import type { Metadata } from "next";
import { getServices } from "@/lib/data";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceListFilter from "@/components/services/ServiceListFilter";
import ServiceProcess from "@/components/services/ServiceProcess";

export const metadata: Metadata = {
  title: "Professional Digital Services & Engineering | ITStartup",
  description: "Explore ITStartup's full suite of software development, mobile apps, UI/UX design, cloud devops, and digital growth services.",
  openGraph: {
    title: "Digital Services & Engineering Practices | ITStartup",
    description: "Production-grade web apps, cross-platform mobile apps, design systems, and data-driven marketing.",
  },
};

export default async function ServicesPage() {
  // Dynamically fetched services prepared for backend/API
  const allServices = await getServices();

  return (
    <main className="min-h-screen bg-slate-50/30 pb-20">
      {/* Hero Header */}
      <ServiceHero totalServices={allServices.length} />

      {/* Main Services Filter & Grid Directory */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Capabilities Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Core Practices
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Filter by category or search by your preferred technologies and technical requirements.
            </p>
          </div>

          {/* Interactive dynamic service list with real-time filters */}
          <ServiceListFilter services={allServices} />
        </div>
      </section>

      {/* Agile 4-Step Process Section */}
      <ServiceProcess />
    </main>
  );
}