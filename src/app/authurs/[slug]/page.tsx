import Link from "next/link";
import { getAuthurs } from "@/src/lib/strapi";

export default async function AuthursPage() {
  const Authurs = await getAuthurs();

  return (
    <main className="max-w-5xl mx-auto py-16">
      <h1 className="text-5xl font-bold mb-10">Authurs</h1>

      <div className="flex flex-wrap gap-4">
        {Authurs.map((authurs: any) => (
          <Link
            key={authurs.documentId}
            href={`/Authurs/${authurs.slug}`}
            className="rounded-full border px-6 py-3 hover:bg-black hover:text-white"
          >
            {authurs.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
