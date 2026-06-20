import PostCard from "@/src/app/components/blog/PostCard";
import {
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/src/lib/strapi";

export async function generateStaticParams() {
  const categories = await getCategories();

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

  const category = await getCategoryBySlug(slug);

  const posts = await getPostsByCategory(slug);

  return (
    <main className="max-w-5xl mx-auto py-16">
      <h1 className="mb-10 text-5xl font-bold">{category.name}</h1>

      <div className="space-y-8">
        {posts.map((post: any) => (
          <PostCard key={post.documentId} post={post} />
        ))}
      </div>
    </main>
  );
}
