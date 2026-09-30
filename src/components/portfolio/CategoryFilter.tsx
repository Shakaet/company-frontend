"use client";

import { Project } from "@/lib/types";

export type Category = "all" | "web" | "app" | "uiux" | "marketing";

interface CategoryFilterProps {
  active: Category;
  onChange: (c: Category) => void;
  projects: Project[];
}

export default function CategoryFilter({
  active,
  onChange,
  projects,
}: CategoryFilterProps) {
  const tabs: { key: Category; label: string }[] = [
    { key: "all", label: "All Works" },
    { key: "web", label: "Web Platforms" },
    { key: "app", label: "Mobile Apps" },
    { key: "uiux", label: "UI/UX Design" },
    { key: "marketing", label: "Growth & SEO" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        const count = tab.key === "all"
          ? projects.length
          : projects.filter((p) => p.category === tab.key).length;

        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 -translate-y-0.5"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}