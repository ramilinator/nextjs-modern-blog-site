import Image from "next/image";
import { getStrapiMedia } from "@/src/lib/getStrapiMedia";

interface Props {
  post: any;
}

export default function PostCard({ post }: Props) {
  const imageUrl = getStrapiMedia(post.coverImage?.url);

  return (
    <article className="rounded-xl border p-6 hover:shadow-lg transition">
      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
        {post.category?.name ?? "Uncategorized"}
      </span>

      <Image src={imageUrl} alt={post.title} width={800} height={450} />

      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="mt-4 text-gray-600">{post.excerpt}</p>
    </article>
  );
}
