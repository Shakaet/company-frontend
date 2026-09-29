"use client";

const categories = ["all", "web", "app", "marketing", "uiux"] as const;
export type Category = typeof categories[number];

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
            active === c ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}