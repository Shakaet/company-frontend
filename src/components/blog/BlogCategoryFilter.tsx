"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function BlogCategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-8">
      {["All", ...categories].map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}