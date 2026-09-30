import Link from "next/link";
import { CheckCircle2, X, Sparkles, ArrowRight } from "lucide-react";
import { PricingPlan } from "@/lib/types";

interface PricingCardProps {
  plan: PricingPlan;
  isQuarterly: boolean;
}

export default function PricingCard({ plan, isQuarterly }: PricingCardProps) {
  const currentPrice = isQuarterly && plan.priceQuarterly 
    ? plan.priceQuarterly 
    : plan.priceMonthly;

  return (
    <div
      className={`group relative bg-white rounded-3xl transition-all duration-300 flex flex-col justify-between p-7 sm:p-9 ${
        plan.popular
          ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10 ring-4 ring-blue-50 -translate-y-2"
          : "border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      {/* Popular Floating Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{plan.badge || "Most Popular Choice"}</span>
        </div>
      )}

      <div>
        {/* Top Tier Info */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {plan.name}
          </h3>
          {!plan.popular && plan.badge && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {plan.badge}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
          {plan.tagline}
        </p>

        {/* Pricing Display */}
        <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {currentPrice}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              /{plan.period}
            </span>
          </div>
          {isQuarterly && plan.priceQuarterly && (
            <p className="mt-1 text-xs font-semibold text-emerald-600">
              Billed quarterly (Save ~10%)
            </p>
          )}
          <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-blue-50/80 text-blue-700 text-xs font-semibold">
            {plan.idealFor}
          </div>
        </div>

        {/* Included Features */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            What's Included:
          </div>
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-snug">{feat}</span>
            </div>
          ))}

          {/* Excluded features if any */}
          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <div className="pt-2 space-y-2.5 opacity-60">
              {plan.notIncluded.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400 line-through">
                  <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <Link
          href={`${plan.ctaHref}?plan=${encodeURIComponent(plan.name)}`}
          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer ${
            plan.popular
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20 hover:-translate-y-0.5"
              : "bg-slate-900 text-white hover:bg-blue-600 hover:-translate-y-0.5"
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <p className="mt-2.5 text-center text-[11px] text-slate-400">
          No long-term lock-in · Cancel or pause anytime
        </p>
      </div>
    </div>
  );
}
