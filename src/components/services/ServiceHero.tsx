import Link from "next/link";
import { Sparkles, ArrowDown, Layers, ShieldCheck, Zap, Globe } from "lucide-react";

export default function ServiceHero({ totalServices }: { totalServices: number }) {
  const highlights = [
    { icon: Layers, label: "Projects Delivered", value: "250+" },
    { icon: ShieldCheck, label: "Uptime SLA", value: "99.9%" },
    { icon: Globe, label: "Global Reach", value: "18+ Countries" },
    { icon: Zap, label: "Code Ownership", value: "100% Yours" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-48 right-12 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Full-Lifecycle Engineering · {totalServices} Core Practices</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Digital Solutions Engineered for{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            Velocity & Scale
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine cutting-edge technology, human-centric design, and data-driven marketing to build software products that customers love and businesses grow on.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services-list"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm sm:text-base hover:bg-blue-700 shadow-md hover:shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Book a Tech Consultation</span>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-blue-200 transition-all text-left flex items-center gap-3.5"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
