"use client";

import { useState, useMemo } from "react";
import { Search, X, FolderX, Sparkles } from "lucide-react";
import { Project } from "@/lib/types";
import { projects as defaultProjects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import CategoryFilter, { Category } from "./CategoryFilter";

interface ProjectGridProps {
  projects?: Project[];
}

export default function ProjectGrid({ projects = defaultProjects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        (project.categoryLabel && project.categoryLabel.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, activeCategory, searchQuery]);

  const hasActiveFilters = activeCategory !== "all" || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full">
      {/* Category Tabs Filter */}
      <CategoryFilter
        active={activeCategory}
        onChange={setActiveCategory}
        projects={projects}
      />

      {/* Search Bar & Result Summary Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech stack, client, or keyword..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Results summary and reset button */}
        <div className="flex items-center justify-between mt-3 px-2 text-xs text-slate-500">
          <div>
            Showing <span className="font-semibold text-slate-800">{filteredProjects.length}</span> of{" "}
            <span className="font-semibold text-slate-800">{projects.length}</span> case studies
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <FolderX className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            No projects found
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            We couldn't find any case studies matching your criteria. Try adjusting your search keyword or switching category tabs.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}