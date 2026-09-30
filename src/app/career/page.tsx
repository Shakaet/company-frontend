import type { Metadata } from "next";
import { getJobs } from "@/lib/data";
import CareerHero from "@/components/career/CareerHero";
import CareerJobList from "@/components/career/CareerJobList";
import PerksSection from "@/components/career/PerksSection";
import HiringProcessSection from "@/components/career/HiringProcessSection";
import TalentPoolCard from "@/components/career/TalentPoolCard";

export const metadata: Metadata = {
  title: "Careers & Open Positions | ITStartup",
  description: "Join ITStartup's high-impact engineering, design, and growth team. Explore current open positions and build the future of software.",
  openGraph: {
    title: "Careers & Open Positions | ITStartup",
    description: "Explore rewarding career opportunities in engineering, design, and product at ITStartup.",
  },
};

export default async function CareerPage() {
  // Dynamic fetching prepared for future backend/API integration
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-slate-50/30">
      {/* Hero Section */}
      <CareerHero totalJobs={jobs.length} />

      {/* Main Jobs Directory Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Your Next Role
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Filter by department, workplace type, or search for your favorite tech stack.
            </p>
          </div>

          {/* Interactive Dynamic Job List with Filters & Search */}
          <CareerJobList jobs={jobs} />
        </div>
      </section>

      {/* Why Join Us / Perks Section */}
      <PerksSection />

      {/* 4-Step Hiring Process Section */}
      <HiringProcessSection />

      {/* Spontaneous / Talent Pool Banner */}
      <TalentPoolCard />
    </main>
  );
}