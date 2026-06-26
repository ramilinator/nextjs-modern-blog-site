// app/[slug]/page.tsx

import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription,
  };
}

async function getPage(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 60 },
    },
  );

  const data = await res.json();

  return data?.data?.[0] ?? null;
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">{page.title}</h1>

      <div>
        <BlocksRenderer content={page.content} />
      </div>
    </main>
  );
}
