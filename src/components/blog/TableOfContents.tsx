import { ListOrdered } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
        <ListOrdered className="w-4 h-4 text-blue-600 shrink-0" />
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">
          In this article
        </h3>
      </div>
      <nav aria-label="Table of contents">
        <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
          {items.map((item, i) => (
            <li key={item.id} className={item.level === 2 ? "pl-3.5 sm:pl-4 border-l border-slate-100" : ""}>
              <a
                href={`#${item.id}`}
                className="hover:text-blue-600 hover:translate-x-0.5 transition-all flex items-start gap-2 group py-0.5"
              >
                <span className="text-slate-400 group-hover:text-blue-500 font-semibold text-xs shrink-0 mt-0.5">
                  {i + 1}.
                </span>
                <span className="leading-snug break-words line-clamp-2">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}