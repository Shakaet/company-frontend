import ProjectGrid from "@/components/portfolio/ProjectGrid";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <SectionTitle title="Our Portfolio" subtitle="Selected projects we're proud of." />
      <ProjectGrid />
    </div>
  );
}