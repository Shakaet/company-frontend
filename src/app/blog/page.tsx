"use client";
import { useMemo, useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogCard from "@/components/blog/BlogCard";
import BlogPagination from "@/components/blog/BlogPagination";
import Newsletter from "@/components/blog/Newsletter";
import { blogs } from "@/lib/data";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Derive categories from posts
  const categories = useMemo(() => {
    const set = new Set(blogs.map((p) => p.category));
    return Array.from(set);
  }, []);

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
  }, [activeCategory, query]);

  // Split featured + rest
  const [featured, ...rest] = filtered;
  const totalPages = Math.max(1, Math.ceil(rest.length / POSTS_PER_PAGE));
  const paginated = rest.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-slate-50/40">
      <BlogHero onSearch={setQuery} />

      <div className="container mx-auto px-4 max-w-6xl">
        <BlogCategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={(c) => {
            setActiveCategory(c);
            setPage(1);
          }}
        />

        {featured && (
          <div className="mb-16">
            <FeaturedPost post={featured} />
          </div>
        )}

        {paginated.length > 0 && (
          <>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>

            {totalPages > 1 && (
              <BlogPagination
                current={page}
                total={totalPages}
                onChange={setPage}
              />
            )}
          </>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No articles found.</p>
          </div>
        )}
      </div>

      <Newsletter />
    </main>
  );
}