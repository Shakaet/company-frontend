import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  getServices, 
  getServiceBySlug, 
  getRelatedServices 
} from "@/lib/data";
import ServiceConsultationForm from "@/components/services/ServiceConsultationForm";
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  DollarSign, 
  ShieldCheck, 
  Code, 
  Layers, 
  Zap, 
  Mail, 
  ArrowRight 
} from "lucide-react";

export async function generateStaticParams() {
  const allServices = await getServices();
  const params: { slug: string }[] = [];
  
  allServices.forEach((s) => {
    params.push({ slug: s.slug });
    if (s.aliases) {
      s.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title}`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title}`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = await getRelatedServices(service.slug);

  return (
    <main className="min-h-screen bg-slate-50/40 pb-24">
      {/* Top Header & Breadcrumbs Banner */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50/30 border-b border-slate-200/70 pt-8 pb-12 sm:pt-10 sm:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Services</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-400">{service.category || "Practice"}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">
                {service.title}
              </span>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hero Content Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                {service.category && (
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                    {service.category}
                  </span>
                )}
                {service.badge && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    {service.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              {service.heroHeadline && (
                <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-600">
                  {service.heroHeadline}
                </p>
              )}

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.description}
              </p>

              {/* Quick Metrics Bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Pricing Model</span>
                  <span className="font-bold text-slate-800">Fixed or Sprint</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Starting From</span>
                  <span className="font-bold text-emerald-600">{service.pricingStartingAt || "$2,000"}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Delivery Time</span>
                  <span className="font-bold text-slate-800">4 - 8 Weeks</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Post-Launch</span>
                  <span className="font-bold text-slate-800">30-Day Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content Layout */}
      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Core Capabilities */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-blue-600" />
                <span>Key Capabilities & Features</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>What You Receive (Deliverables)</span>
                </h2>
                <ul className="space-y-3.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Choose Our Company for this Service */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span>The Our Company Advantage</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {service.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all"
                    >
                      <h3 className="font-bold text-slate-900 text-base mb-1.5">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {service.techStack && service.techStack.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span>Technologies & Tooling</span>
                </h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Embedded Quote / Consultation Form */}
            <ServiceConsultationForm 
              serviceTitle={service.title} 
              serviceSlug={service.slug} 
            />
          </div>

          {/* Right Column: Sticky Overview Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Quick Practice Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 pb-4 border-b border-slate-100">
                Practice Overview
              </h3>

              <div className="divide-y divide-slate-100 text-sm">
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Practice Area</span>
                  <span className="font-semibold text-slate-800">{service.category || "Development"}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Starting Rate</span>
                  <span className="font-bold text-emerald-600">{service.pricingStartingAt || "$2,000"}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Contract Model</span>
                  <span className="font-semibold text-slate-800">Fixed or Sprints</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Code Rights</span>
                  <span className="font-semibold text-slate-800">100% Client IP</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Warranty Support</span>
                  <span className="font-semibold text-slate-800">30 Days Included</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
                >
                  <span>Request Project Estimate</span>
                </a>
              </div>
            </div>

            {/* Tech Architect Direct Contact */}
            <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/60 rounded-3xl border border-blue-100 p-6 shadow-xs">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  CTO
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Technical Architecture Inquiry
                  </h4>
                  <p className="text-xs text-slate-500">
                    Speak directly with a lead engineer
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Have specific database, cloud, or API integration requirements? Let's discuss directly:
              </p>
              <a
                href={`mailto:support@neutrinobyte.com?subject=Technical Architecture Inquiry for ${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@neutrinobyte.com</span>
              </a>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Complementary Practices
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((rs) => (
                    <Link
                      key={rs.slug}
                      href={`/services/${rs.slug}`}
                      className="group block p-3.5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-blue-600">
                          {rs.category}
                        </span>
                        {rs.pricingStartingAt && (
                          <span className="text-[11px] font-bold text-slate-500">
                            From {rs.pricingStartingAt}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors mt-1">
                        {rs.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {rs.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}