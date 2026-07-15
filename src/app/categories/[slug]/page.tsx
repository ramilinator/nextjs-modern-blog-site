import { notFound } from "next/navigation";
import PostCard from "@/src/app/components/blog/PostCard";
import { cms } from "@/src/lib/cms";

export async function generateStaticParams() {
  const categories = await cms.getCategories();

  return categories.map((category: any) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = await cms.getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await cms.getPostsByCategory(slug);

  return (
    <main className="max-w-5xl mx-auto py-16">
      <h1 className="mb-10 text-5xl font-bold">{category.name}</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <PostCard key={post.documentId} post={post} />
        ))}
      </div>
    </main>
  );
}
