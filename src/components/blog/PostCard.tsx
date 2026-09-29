import Link from "next/link";
import { BlogPost } from "@/lib/types";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="border rounded-xl p-6 hover:shadow-md transition">
      <p className="text-xs text-blue-600 font-medium">{post.category}</p>
      <h3 className="font-semibold text-lg mt-2">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
      <p className="text-xs text-gray-400 mt-4">{post.author} · {post.date}</p>
    </article>
  );
}