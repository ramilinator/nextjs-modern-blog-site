import Link from "next/link";
import { getCategories } from "@/src/lib/strapi";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="max-w-5xl mx-auto py-16">
      <h1 className="text-5xl font-bold mb-10">Categories</h1>

      <div className="flex flex-wrap gap-4">
        {categories.map((category: any) => (
          <Link
            key={category.documentId}
            href={`/categories/${category.slug}`}
            className="rounded-full border px-6 py-3 hover:bg-black hover:text-white"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
