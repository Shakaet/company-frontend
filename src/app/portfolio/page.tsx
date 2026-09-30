import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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

      {/* Bottom Start a Project Call To Action Banner */}
      <section className="container mx-auto px-4 max-w-6xl mt-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-14 text-white shadow-2xl border border-slate-800">
          <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Let's Build Together</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Have an ambitious vision for your next digital product?
            </h3>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need to build a complex SaaS from scratch, launch an intuitive mobile app, or modernise your cloud infrastructure, our engineering squad is ready to execute.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free technical scoping & architecture audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA protected discussion</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 font-semibold text-sm sm:text-base backdrop-blur-xs transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}