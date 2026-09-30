import Link from "next/link";
import { services } from "@/lib/data";
import ServiceCard from "@/components/services/ServiceCard";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesPreview() {
  // Show top 3 or 4 services on homepage
  const previewServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What We Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              End-to-End Digital Solutions
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              We design, build, and scale world-class software products for fast-moving startups and industry leaders.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group transition shrink-0"
          >
            <span>View All Practices & Pricing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewServices.map((s) => (
            <ServiceCard 
              key={s.slug} 
              service={s} 
              featured={s.badge === "Most Popular"} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}