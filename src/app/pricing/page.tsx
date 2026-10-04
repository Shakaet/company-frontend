// src/app/pricing/page.tsx
import PricingHero from "@/components/pricing/PricingHero";
import PricingSection from "@/components/pricing/PricingSection";
import GuaranteesSection from "@/components/pricing/GuaranteesSection";
import { getPricingPlans, getGuarantees } from "@/lib/data";

export default async function PricingPage() {
  const [plans, guarantees] = await Promise.all([
    getPricingPlans(),
    getGuarantees(),
  ]);

  return (
    <main>
      <PricingHero />
      <PricingSection plans={plans} />
      <GuaranteesSection guarantees={guarantees} />
    </main>
  );
}