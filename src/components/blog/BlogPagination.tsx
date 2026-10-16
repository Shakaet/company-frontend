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
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 py-12">
      {pages.map((p) => {
        const isActive = p === current;
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {p}
          </button>
        );
      })}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="px-4 h-9 rounded-full text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}