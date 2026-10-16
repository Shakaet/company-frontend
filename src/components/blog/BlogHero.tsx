"use client";
import { Search, Sparkles } from "lucide-react";
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

  return (
    <section className="bg-gradient-to-b from-slate-50/80 via-white to-white pt-16 pb-10 border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span className="font-bold text-slate-900">NeutrinoByte Blog</span>
          <span className="text-slate-400">·</span>
          <span>Engineering Insights</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Insights for{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Fast-Moving Teams
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Guides on software development, engineering pods, AI and product
          delivery from the NeutrinoByte team.
        </p>

        {/* Search */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-13 pr-5 py-4 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}