import Container from "@/src/app/components/layout/Container";
import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { getPage } from "@/src/lib/cms";

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
      <Container>
        <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
        <div>
          <BlocksRenderer content={page.content} />
        </div>
      </Container>
    </main>
  );
}
