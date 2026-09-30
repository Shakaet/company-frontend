import { blogs } from "@/lib/data";
import PostCard from "@/components/blog/PostCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BlogPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <SectionTitle title="Blog" subtitle="Insights from our team." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b) => <PostCard key={b.slug} post={b} />)}
      </div>
    </div>
  );
}