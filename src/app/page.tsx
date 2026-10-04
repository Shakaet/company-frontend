import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingPreview from "@/components/home/PricingPreview";
import { getBanners } from "@/lib/api/banner";
import { getPartners, getTechStack, getStats } from "@/lib/data";

export default async function HomePage() {
  const [banners, partners, techStack, stats] = await Promise.all([
    getBanners(),
    getPartners(),
    getTechStack(),
    getStats(),
  ]);

  return (
    <>
      <Hero
        banners={banners}
        partners={partners}
        techStack={techStack}
        stats={stats}
      />
      {/* <Counters /> */}
      <ServicesPreview />
      <ProjectsPreview />
      <Clients />
      <Testimonials />
      <WhyChooseUs />
      <PricingPreview />
    </>
  );
}