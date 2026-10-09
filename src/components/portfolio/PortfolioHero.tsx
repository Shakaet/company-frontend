import Link from "next/link";
import { Sparkles, ArrowDown, Layers, Globe, Award, TrendingUp } from "lucide-react";

interface PortfolioHeroProps {
  totalProjects: number;
}

export default function PortfolioHero({ totalProjects }: PortfolioHeroProps) {
  const highlights = [
    { icon: Layers, value: "50+", label: "Products Shipped" },
    { icon: Globe, value: "6+ Countries", label: "Global Reach" },
    { icon: Award, value: "99.4%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "10x", label: "Average Growth / ROI" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6 shadow-xs backdrop-blur-xs">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span>Delivered Engineering & Design · {totalProjects}+ Case Studies</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Crafting Digital Products That{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            Scale & Deliver Impact
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From modern websites and mobile applications to AI-powered solutions and scalable software, we build digital products designed to solve real-world problems and drive business growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects-section"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm sm:text-base hover:bg-blue-700 shadow-md hover:shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Browse Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Discuss Your Project</span>
          </Link>
        </div>

        {/* Metric Highlights */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 text-left flex items-center gap-3.5"
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
