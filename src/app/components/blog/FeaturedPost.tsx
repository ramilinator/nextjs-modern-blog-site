import Link from "next/link";
import Image from "next/image";
import { Post } from "@/src/types/post";
import { getStrapiMedia } from "@/src/lib/getStrapiMedia";

interface Props {
  post: Post;
}

export default function FeaturedPost({ post }: Props) {
  const imageUrl = getStrapiMedia(post.coverImage?.url);
  return (
    <article className="group max-w-[802px] flex flex-col overflow-hidden rounded-2xl border transition">
      {/* Image */}
      <div className="relative w-full overflow-hidden">
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
      <div className="flex flex-col flex-1 p-10 space-y-4">
        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[color:var(--foreground)]/10">
            {post.category?.name ?? "Uncategorized"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold">{post.title}</h2>

        {/* Excerpt */}
        <p className="mt-6 text-gray-600 font-semibold">{post.excerpt}</p>

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
