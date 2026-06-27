import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/src/lib/getStrapiMedia";

interface Props {
  post: any;
}

export default function PostCard({ post }: Props) {
  const imageUrl = getStrapiMedia(post.coverImage?.url);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border transition">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.title}
          width={800}
          height={450}
          loading="eager"
          unoptimized={process.env.NODE_ENV === "development"}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[color:var(--foreground)]/10">
            {post.category?.name ?? "Uncategorized"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold leading-snug">{post.title}</h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 font-semibold leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer link */}
        <div className="pt-2">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
