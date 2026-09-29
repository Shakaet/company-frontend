import { BlogPost } from "@/lib/types";

export default function PostContent({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-3xl mx-auto">
      <p className="text-xs text-blue-600 font-medium">{post.category}</p>
      <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mt-3">{post.author} · {post.date}</p>
      <div className="prose mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}