"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  ArrowRight, 
  Zap, 
  Sparkles,
  X
} from "lucide-react";
import { Job } from "@/lib/types";

interface CareerJobListProps {
  jobs: Job[];
}

export default function CareerJobList({ jobs }: { jobs: Job[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedWorkplace, setSelectedWorkplace] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  // Dynamic list of unique departments from the data
  const departments = useMemo(() => {
    const set = new Set(jobs.map((j) => j.department));
    return ["All", ...Array.from(set)];
  }, [jobs]);

  // Dynamic filter logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Department filter
      if (selectedDept !== "All" && job.department !== selectedDept) {
        return false;
      }
      // Workplace filter
      if (selectedWorkplace !== "All" && job.workplaceType !== selectedWorkplace) {
        return false;
      }
      // Type filter
      if (selectedType !== "All" && job.type !== selectedType) {
        return false;
      }
      // Search query filter (title, skills, description, location)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const inTitle = job.title.toLowerCase().includes(query);
        const inDesc = job.description.toLowerCase().includes(query);
        const inLocation = job.location.toLowerCase().includes(query);
        const inStack = job.techStack?.some((t) => t.toLowerCase().includes(query));
        const inReq = job.requirements?.some((r) => r.toLowerCase().includes(query));

        if (!inTitle && !inDesc && !inLocation && !inStack && !inReq) {
          return false;
        }
      }
      return true;
    });
  }, [jobs, selectedDept, selectedWorkplace, selectedType, searchQuery]);

  const hasActiveFilters = 
    selectedDept !== "All" || 
    selectedWorkplace !== "All" || 
    selectedType !== "All" || 
    searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedDept("All");
    setSelectedWorkplace("All");
    setSelectedType("All");
  };

  const getWorkplaceBadgeColor = (type: string) => {
    switch (type) {
      case "Remote":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Hybrid":
        return "bg-sky-50 text-sky-700 border-sky-200/60";
      default:
        return "bg-indigo-50 text-indigo-700 border-indigo-200/60";
    }
  };

  const getWorkplaceDot = (type: string) => {
    switch (type) {
      case "Remote":
        return "bg-emerald-500";
      case "Hybrid":
        return "bg-sky-500";
      default:
        return "bg-indigo-500";
    }
  };

  return (
    <div id="open-positions" className="scroll-mt-24">
      {/* Search & Filter Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by job title, tech stack (e.g. Next.js), or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Workplace Select */}
            <div className="relative min-w-[140px]">
              <select
                value={selectedWorkplace}
                onChange={(e) => setSelectedWorkplace(e.target.value)}
                className="w-full appearance-none pl-3.5 pr-8 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition cursor-pointer"
              >
                <option value="All">All Workplaces</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {/* Employment Type Select */}
            <div className="relative min-w-[140px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none pl-3.5 pr-8 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Department Pills Bar */}
        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Department:
            </span>
            {departments.map((dept) => {
              const count = dept === "All" 
                ? jobs.length 
                : jobs.filter((j) => j.department === dept).length;
              const isActive = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs shadow-blue-500/30"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                  }`}
                >
                  <span>{dept}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-slate-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Clear */}
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:underline transition"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between mb-6 px-1">
        <p className="text-sm font-medium text-slate-600">
          Showing <span className="font-bold text-slate-900">{filteredJobs.length}</span>{" "}
          {filteredJobs.length === 1 ? "position" : "open positions"}
        </p>
        <span className="text-xs text-slate-500 hidden sm:inline-block">
          ⚡ Applications reviewed within 48 hours
        </span>
      </div>

      {/* Jobs Grid / List */}
      {filteredJobs.length > 0 ? (
        <div className="grid gap-5">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left Side: Role Info */}
                <div className="flex-1 space-y-3.5">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      {job.department}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getWorkplaceBadgeColor(job.workplaceType)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${getWorkplaceDot(job.workplaceType)} animate-pulse`} />
                      {job.workplaceType}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {job.type}
                    </span>
                    {job.urgent && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/70">
                        <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                        Urgent Hiring
                      </span>
                    )}
                  </div>

                  {/* Job Title */}
                  <div>
                    <Link
                      href={`/career/${job.id}`}
                      className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors inline-block"
                    >
                      {job.title}
                    </Link>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl line-clamp-2">
                      {job.description}
                    </p>
                  </div>

                  {/* Meta Details Row */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>Apply by {job.deadline}</span>
                    </div>
                  </div>

                  {/* Tech stack chips if present */}
                  {job.techStack && job.techStack.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {job.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70"
                        >
                          {tech}
                        </span>
                      ))}
                      {job.techStack.length > 5 && (
                        <span className="text-[11px] text-slate-400 font-medium pl-1">
                          +{job.techStack.length - 5} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Side: Action Button */}
                <div className="lg:shrink-0 flex items-center lg:flex-col justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <Link
                    href={`/career/${job.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-blue-600 transition-all duration-200 shadow-xs group-hover:shadow-md"
                  >
                    <span>View & Apply</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-400 hidden lg:block text-center">
                    Posted {job.postedDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 md:p-14 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No positions found</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            We couldn't find any openings matching your current filter criteria. Try adjusting your search keywords or resetting filters.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
            <a
              href="mailto:careers@itstartup.com?subject=Open Application / General Inquiry"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Submit Open Application
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
