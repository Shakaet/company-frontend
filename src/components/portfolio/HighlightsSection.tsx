// src/components/portfolio/HighlightsSection.tsx
import { TrendingUp } from "lucide-react";
import type { Highlight } from "@/lib/types";

interface HighlightsSectionProps {
  highlights: Highlight[];
}

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Numbers that speak for themselves
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          A snapshot of the work we've shipped and the impact we've delivered.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {highlights.map((h) => (
          <div
            key={h.id}
            className="group h-full flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">
              {h.value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              {h.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}