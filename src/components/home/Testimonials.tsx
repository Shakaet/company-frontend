import Image from "next/image";
import Link from "next/link";
import { Star, Sparkles, TrendingUp, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 left-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Founders & Product Leaders
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Real results from fast-growing startups and enterprises who rely on our engineering squads to build and scale their products.
            </p>
          </div>

          {/* Social Proof Badge */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-2.5 self-start md:self-auto shadow-2xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs font-bold text-slate-800 border-l border-slate-200 pl-3">
              4.9 / 5.0 Rating <span className="text-slate-400 font-normal">(60+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Decorative Quote Icon Watermark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars & Project Category Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {t.projectTag && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      {t.projectTag}
                    </span>
                  )}
                </div>

                {/* Review Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                  "{t.message}"
                </p>
              </div>

              {/* Bottom Author Row & Metric Badge */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {/* Avatar */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {t.role} · <span className="text-slate-700">{t.company}</span>
                    </p>
                  </div>
                </div>

                {/* Highlight Metric Pill */}
                {t.highlightMetric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold self-start sm:self-auto shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{t.highlightMetric.value}</span>
                    <span className="font-medium text-slate-500 hidden sm:inline">
                      {t.highlightMetric.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 text-sm font-semibold shadow-2xs hover:shadow-sm transition-all"
          >
            <span>Explore Full Case Studies & Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}