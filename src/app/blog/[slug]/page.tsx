import { getPostBySlug } from "@/src/lib/strapi";
import type { Metadata } from "next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Container from "@/src/app/components/layout/Container";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto py-10">
        <h1>Post not found</h1>
      </main>
    );
  }

  return (
    <Container>
      <main className="max-w-4xl mx-auto py-10">
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="mt-3">{post.author?.name}</p>
        <article className="blog-content">
          <BlocksRenderer content={post.content} />
        </article>
      </main>
    </Container>
  );
}
