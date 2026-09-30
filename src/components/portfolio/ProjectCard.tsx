import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          {/* Category & Year Floating Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
              {project.categoryLabel || project.category.toUpperCase()}
            </span>
            {project.year && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/70 backdrop-blur-md text-white shadow-sm">
                {project.year}
              </span>
            )}
          </div>

          {/* Metrics Floating Pill */}
          {project.metrics && (
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 shadow-md">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-extrabold text-emerald-600">{project.metrics.value}</span>
              <span className="text-[11px] font-medium text-slate-600 hidden sm:inline">{project.metrics.label}</span>
            </div>
          )}
        </div>

        {/* Card Content Details */}
        <div className="p-6 sm:p-7">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1.5">
            {project.client}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/80 px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">
          Client Success Story
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
        >
          <span>Build Similar</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}