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
  const allCategories = ["All", ...categories];

  return (
    <div className="py-6 sm:py-8">
      {/* Scrollable on small screens, nicely wrapped and centered on sm+ */}
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
        {allCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onChange(cat)}
              className={`shrink-0 sm:shrink px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/20"
                  : "bg-white text-slate-700 border border-slate-200/90 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50/50 shadow-xs"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}