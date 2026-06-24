import Link from "next/link";
import Image from "next/image";
import { Post } from "@/src/types/post";
import { getStrapiMedia } from "@/src/lib/getStrapiMedia";

interface Props {
  post: Post;
}

export default function FeaturedPost({ post }: Props) {
  const imageUrl = post.coverImage?.url?.startsWith("http")
    ? post.coverImage.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.coverImage.url}`;
  return (
    <article className="rounded-3xl border p-10">
      <div className="relative w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.title}
          width={800}
          height={450}
          unoptimized
          loading="eager"
        />
      </div>

      <div className="flex flex-col flex-1 space-y-4">
        <div className="my-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[color:var(--foreground)]/10">
            {post.category?.name ?? "Uncategorized"}
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
      </div>
    </article>
  );
}
