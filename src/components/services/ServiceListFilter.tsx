"use client";

import { useState, useMemo } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { Service } from "@/lib/types";
import ServiceCard from "./ServiceCard";

export default function ServiceListFilter({ services }: { services: Service[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set<string>();
    services.forEach((s) => {
      if (s.category) set.add(s.category);
    });
    return ["All", ...Array.from(set)];
  }, [services]);

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      // Category filter
      if (selectedCategory !== "All" && s.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const inTitle = s.title.toLowerCase().includes(query);
        const inDesc = s.description.toLowerCase().includes(query);
        const inShort = s.shortDesc.toLowerCase().includes(query);
        const inStack = s.techStack?.some((t) => t.toLowerCase().includes(query));
        const inFeatures = s.features?.some((f) => f.toLowerCase().includes(query));

        if (!inTitle && !inDesc && !inShort && !inStack && !inFeatures) {
          return false;
        }
      }
      return true;
    });
  }, [services, selectedCategory, searchQuery]);

  return (
    <div id="services-list" className="scroll-mt-24">
      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === "All" 
                ? services.length 
                : services.filter((s) => s.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs shadow-blue-500/30"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-slate-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-800 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.slug} 
              service={service} 
              featured={service.badge === "Most Popular"}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No services found</h3>
          <p className="mt-1 text-sm text-slate-500">
            We couldn't find any services matching your search or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
