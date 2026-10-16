"use client";
import { Search, Sparkles, X } from "lucide-react";
import { useState } from "react";

interface BlogHeroProps {
  onSearch?: (q: string) => void;
}

export default function BlogHero({ onSearch }: BlogHeroProps) {
  const [query, setQuery] = useState("");

  const handleChange = (v: string) => {
    setQuery(v);
    onSearch?.(v);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/20 to-white pt-10 pb-8 sm:pt-14 sm:pb-12 md:pt-20 md:pb-16 border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[750px] h-[300px] bg-blue-400/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-4 sm:right-12 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-400/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-xs backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="font-bold text-slate-900">NeutrinoByte Blog</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-600 truncate">Engineering Insights</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] break-words">
          Insights for{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            Fast-Moving Teams
          </span>
        </h1>

        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Guides on modern software development, engineering pods, AI architecture,
          and product delivery from the NeutrinoByte team.
        </p>

        {/* Search */}
        <div className="mt-6 sm:mt-8 max-w-xl mx-auto px-1 sm:px-0">
          <div className="relative">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-4 sm:left-4.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search articles by title or keyword..."
              className="w-full pl-11 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 md:py-4 rounded-2xl bg-white border border-slate-200/90 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-xs transition-all"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}