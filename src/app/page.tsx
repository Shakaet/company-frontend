import Hero from "@/components/home/Hero";
// import VideoSection from "@/components/home/VideoSection";
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
      {/* <VideoSection />              ← was a comment, now renders */}
      <ServicesPreview />
      <ProjectsPreview />
      <Clients />
      <Testimonials />
      <WhyChooseUs />
      <PricingPreview />
    </>
  );
}