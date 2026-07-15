import { cms } from "@/src/lib/cms";
import type { Metadata } from "next";
import Container from "@/src/app/components/layout/Container";
import PostRenderer from "@/src/app/components/blog/PostRenderer";
import PostContent from "@/src/app/components/blog/PostContent";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await cms.getPostBySlug(slug);

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

  const post = await cms.getPostBySlug(slug);
  console.log(JSON.stringify(post, null, 2));

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto py-10">
        <h1>Post not found</h1>
      </main>
    );
  }

  return (
    <Container>
      <article className="blog-content max-w-4xl mx-auto py-10">
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="mt-3">{post.author?.name}</p>
        {post.content && <PostContent content={post.content} />}
        {post.contentBlocks?.length ? (
          <PostRenderer blocks={post.contentBlocks} />
        ) : null}
      </article>
    </Container>
  );
}
