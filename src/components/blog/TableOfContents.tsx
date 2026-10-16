interface TOCItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
      <h3 className="text-sm font-bold text-slate-900 mb-4">
        In this article
      </h3>
      <nav>
        <ol className="space-y-2.5 text-sm text-slate-600">
          {items.map((item, i) => (
            <li key={item.id} className={item.level === 2 ? "pl-4" : ""}>
              <a
                href={`#${item.id}`}
                className="hover:text-blue-600 transition-colors flex items-start gap-2"
              >
                <span className="text-slate-400 font-medium shrink-0">
                  {i + 1}.
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}