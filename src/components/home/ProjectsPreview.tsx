import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/portfolio/ProjectCard";

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              A preview of high-performance web, mobile, and SaaS platforms built by our engineering squads.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-semibold text-sm shadow-xs hover:shadow-md transition-all self-start md:self-auto shrink-0"
          >
            <span>View All Works ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Bottom CTA Link for mobile */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition-colors"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}