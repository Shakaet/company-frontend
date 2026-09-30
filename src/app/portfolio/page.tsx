import type { Metadata } from "next";
import { getProjects } from "@/lib/data";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectGrid from "@/components/portfolio/ProjectGrid";

export const metadata: Metadata = {
  title: "Case Studies & Work Portfolio | ITStartup",
  description:
    "Explore our portfolio of high-performance web applications, iOS & Android mobile apps, cloud platforms, and UI/UX design systems delivered for global clients.",
  openGraph: {
    title: "Case Studies & Work Portfolio | ITStartup",
    description:
      "See how ITStartup helps fast-moving startups and industry leaders engineer scalable digital products.",
  },
};

export default async function PortfolioPage() {
  // Dynamic fetching prepared for future backend/CMS integration
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-slate-50/40 pb-20">
      {/* Hero Section with Live Stats */}
      <PortfolioHero totalProjects={projects.length} />

      {/* Main Filterable Projects Directory */}
      <section id="projects-section" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Work & Outcomes
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every project is an obsession with code quality, lightning speed, intuitive aesthetics, and business impact.
            </p>
          </div>

          {/* Interactive Dynamic Grid with Tabs, Keyword Search & Metric Badges */}
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}