import type { Metadata } from "next";
import { getServices } from "@/lib/data";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceListFilter from "@/components/services/ServiceListFilter";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceConsultationForm from "@/components/services/ServiceConsultationForm";
import { ShieldCheck, Sparkles, Clock, Lock } from "lucide-react";

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

  const guarantees = [
    { icon: Lock, title: "100% IP & Code Ownership", desc: "You own all repository rights, assets, and design files upon project completion." },
    { icon: ShieldCheck, title: "Enterprise Grade Security", desc: "Adherence to OWASP standards, data encryption at rest and in transit." },
    { icon: Clock, title: "On-Time Sprint Guarantee", desc: "Rigorous milestone delivery with weekly updates and live staging previews." },
  ];

  return (
    <main className="min-h-screen bg-slate-50/30">
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

      {/* Guarantees Strip */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {guarantees.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {g.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ServiceConsultationForm />
        </div>
      </section>
    </main>
  );
}