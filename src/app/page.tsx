import Hero from "@/components/home/Hero";
// import Counters from "@/components/home/Counters";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Counters /> */}
      <ServicesPreview />
      <ProjectsPreview />
      <Clients />
      <Testimonials />
      <WhyChooseUs />
      <BlogPreview />
    </>
  );
}