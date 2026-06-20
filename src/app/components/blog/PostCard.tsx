import Link from "next/link";
import { Post } from "@/src/types/post";
import Image from "next/image";
import { getStrapiMedia } from "@/src/lib/getStrapiMedia";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const imageUrl = getStrapiMedia(post.coverImage.url);
  return (
    <article className="rounded-xl border p-6 hover:shadow-lg transition">
      <div className="mb-4">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {post.category?.name}
        </span>
      </div>

      {post.coverImage?.url && (
        <Image
          src={imageUrl}
          alt={post.title}
          width={1200}
          height={700}
          unoptimized
        />
      )}

      <h2 className="text-3xl font-bold">{post.title}</h2>

      <p className="mt-4 text-gray-600">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-block font-medium"
      >
        Read More →
      </Link>
    </article>
  );
}
