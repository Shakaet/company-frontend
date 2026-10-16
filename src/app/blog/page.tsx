"use client";
import { useEffect, useMemo, useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogCard from "@/components/blog/BlogCard";
import BlogPagination from "@/components/blog/BlogPagination";
import Newsletter from "@/components/blog/Newsletter";
import { getBlogs } from "@/lib/data";
import type { BlogPost } from "@/lib/types";
import { FileQuestion, RotateCcw } from "lucide-react";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .finally(() => setLoading(false));
  }, []);

  // Derive categories from posts
  const categories = useMemo(() => {
    const set = new Set(blogs.map((p) => p.category).filter(Boolean));
    return Array.from(set);
  }, [blogs]);

  // Filter
  const filtered = useMemo(() => {
    return blogs.filter((p) => {
      const matchesCat = activeCategory === "All" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, query, blogs]);

  // Split featured + rest
  const [featured, ...rest] = filtered;
  const totalPages = Math.max(1, Math.ceil(rest.length / POSTS_PER_PAGE));
  const paginated = rest.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-slate-50/40">
      <BlogHero
        onSearch={(q) => {
          setQuery(q);
          setPage(1);
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-4 sm:py-8">
        <BlogCategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={(c) => {
            setActiveCategory(c);
            setPage(1);
          }}
        />

        {/* Loading Skeletons */}
        {loading && (
          <div className="space-y-12 sm:space-y-16 py-4">
            {/* Featured Post Skeleton */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 animate-pulse">
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 aspect-[16/10] bg-slate-200 rounded-2xl" />
                <div className="md:col-span-5 space-y-4">
                  <div className="w-24 h-5 bg-slate-200 rounded-full" />
                  <div className="w-full h-8 bg-slate-200 rounded-lg" />
                  <div className="w-4/5 h-8 bg-slate-200 rounded-lg" />
                  <div className="space-y-2 pt-2">
                    <div className="w-full h-4 bg-slate-200 rounded" />
                    <div className="w-3/4 h-4 bg-slate-200 rounded" />
                  </div>
                  <div className="w-36 h-10 bg-slate-200 rounded-xl pt-4" />
                </div>
              </div>
            </div>

            {/* Cards Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-4 animate-pulse"
                >
                  <div className="aspect-[16/10] bg-slate-200 rounded-2xl" />
                  <div className="w-20 h-4 bg-slate-200 rounded-full" />
                  <div className="w-full h-6 bg-slate-200 rounded-lg" />
                  <div className="w-4/5 h-4 bg-slate-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loaded Content */}
        {!loading && featured && (
          <div className="mb-10 sm:mb-14 md:mb-16">
            <FeaturedPost post={featured} />
          </div>
        )}

        {!loading && paginated.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Latest Articles
              </h2>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                Showing {paginated.length} of {rest.length} articles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {paginated.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>

            {totalPages > 1 && (
              <BlogPagination
                current={page}
                total={totalPages}
                onChange={(p) => {
                  setPage(p);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
              />
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 sm:py-24 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <FileQuestion className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              No articles found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              {query
                ? `No articles matched your search "${query}". Try different keywords.`
                : "There are currently no articles in this category."}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setQuery("");
                setPage(1);
              }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition shadow-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* <Newsletter /> */}
    </main>
  );
}