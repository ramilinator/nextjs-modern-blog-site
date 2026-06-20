import { getPosts } from "@/src/lib/strapi";

import PostCard from "@/src/app/components/blog/PostCard";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-5xl mx-auto py-10">
      <h1 className="text-5xl font-bold mb-10">Blog</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.documentId} post={post} />
        ))}
      </div>
    </main>
  );
}
