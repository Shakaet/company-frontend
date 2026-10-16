import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export default function BlogPagination({
  current,
  total,
  onChange,
}: PaginationProps) {
  if (total <= 1) return null;

  // Build smart visible page numbers
  const getPageNumbers = () => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 py-8 sm:py-12"
      aria-label="Blog pagination"
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="inline-flex items-center gap-1 px-3 sm:px-4 h-9 sm:h-10 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200/90 hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden xs:inline">Prev</span>
      </button>

      <div className="flex items-center gap-1 sm:gap-1.5">
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-7 sm:w-9 text-center text-slate-400 font-bold select-none text-xs sm:text-sm"
              >
                ...
              </span>
            );
          }

          const pageNum = p as number;
          const isActive = pageNum === current;

          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onChange(pageNum)}
              className={`min-w-[36px] sm:min-w-[40px] h-9 sm:h-10 px-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/20"
                  : "bg-white text-slate-700 border border-slate-200/90 hover:border-blue-300 hover:text-blue-600 shadow-xs"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="inline-flex items-center gap-1 px-3 sm:px-4 h-9 sm:h-10 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200/90 hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
      >
        <span className="hidden xs:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}