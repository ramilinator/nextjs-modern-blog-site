import Link from "next/link";
import { Post } from "@/src/types/post";

interface Props {
  post: Post;
}

export default function FeaturedPost({ post }: Props) {
  return (
    <article className="rounded-3xl border p-10">
      <div className="mb-4">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {post.category?.name}
        </span>
      </div>

      <h2 className="text-4xl font-bold">{post.title}</h2>

      <p className="mt-6 text-gray-600">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-8 inline-block font-semibold"
      >
        Read More →
      </Link>
    </article>
  );
}
