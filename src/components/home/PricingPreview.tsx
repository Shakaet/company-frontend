import Link from "next/link";
import { getLatestPricingPlans } from "@/lib/data";
import PricingSection from "@/components/pricing/PricingSection";
import { ArrowRight, Sparkles } from "lucide-react";

export default async function PricingPreview() {
  const latestPlans = await getLatestPricingPlans(3);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Plans</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Predictable Pricing, Zero Overhead
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              Scale your development capacity with dedicated engineering pods. Complete code ownership with no lock-in.
            </p>
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group transition shrink-0"
          >
            <span>Compare All Plans & Features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <PricingSection plans={latestPlans} />
      </div>
    </section>
  );
}