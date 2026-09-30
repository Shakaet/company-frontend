import type { Metadata } from "next";
import { getPricingPlans } from "@/lib/data";
import PricingHero from "@/components/pricing/PricingHero";
import PricingSection from "@/components/pricing/PricingSection";

export const metadata: Metadata = {
  title: "Pricing Plans & Engagement Models | ITStartup",
  description: "Transparent, flexible pricing for dedicated engineering teams and agile software sprints. No hidden fees.",
  openGraph: {
    title: "ITStartup Pricing & Plans",
    description: "Deploy senior engineering pods with predictable monthly sprint pricing.",
  },
};

export default async function PricingPage() {
  const plans = await getPricingPlans();

  return (
    <main className="min-h-screen bg-slate-50/30 pb-20">
      {/* Hero Header */}
      <PricingHero />

      {/* Main Pricing Cards & Billing Toggle */}
      <div className="container mx-auto px-4 max-w-6xl">
        <PricingSection plans={plans} />
      </div>
    </main>
  );
}
