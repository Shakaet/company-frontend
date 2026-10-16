import Link from "next/link";
import { getBlogs } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default async function BlogPreview() {
  const blogs = await getBlogs();
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle title="From Our Blog" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogs.slice(0, 2).map((b) => (
            <div key={b.slug} className="card">
              <span className="text-xs bg-blue-50 text-blue-600 font-medium px-3 py-1 rounded-full">
                {b.category}
              </span>
              <h3 className="font-semibold text-lg mt-3">{b.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{b.excerpt}</p>
              <Link href={`/blog/${b.slug}`} className="text-blue-600 text-sm font-medium mt-4 inline-block hover:translate-x-1 transition">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}