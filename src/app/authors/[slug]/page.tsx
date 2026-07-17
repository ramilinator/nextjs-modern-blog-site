import Link from "next/link";
import { cms } from "@/src/lib/cms";

export default async function AuthorsPage() {
  const Authors = await cms.getAuthors();

  return (
    <main className="max-w-5xl mx-auto py-16">
      <h1 className="text-5xl font-bold mb-10">Authors</h1>

      <div className="flex flex-wrap gap-4">
        {Authors.map((authors: any) => (
          <Link
            key={authors.documentId}
            href={`/Authors/${authors.slug}`}
            className="rounded-full border border-border px-6 py-3 hover:bg-black hover:text-white"
          >
            {authors.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
