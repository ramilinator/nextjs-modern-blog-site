import Image from "next/image";
import Link from "next/link";

import { getStrapiMedia } from "@/src/lib/getStrapiMedia";
import { Post } from "@/src/types/post";

const isDevelopment = process.env.NODE_ENV === "development";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, slug, excerpt, category, coverImage } = post;

  const imageUrl = getStrapiMedia(coverImage?.url);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border transition">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={450}
          loading="eager"
          unoptimized={isDevelopment}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full bg-[color:var(--foreground)]/10 px-3 py-1 text-xs font-medium">
            {category?.name ?? "Uncategorized"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold leading-snug">{title}</h2>

        {/* Excerpt */}
        <p className="line-clamp-3 text-sm font-semibold leading-relaxed text-gray-600">
          {excerpt}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="pt-2">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
