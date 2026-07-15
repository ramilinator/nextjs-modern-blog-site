import Link from "next/link";
import Container from "@/src/app/components/layout/Container";
import PostCard from "@/src/app/components/blog/PostCard";
import FeaturedPost from "@/src/app/components/blog/FeaturedPost";
import { cms } from "@/src/lib/cms";

export default async function HomePage() {
  const posts = await cms.getPosts();
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1, 7);
  const categories = await cms.getCategories();

  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Next.js 16 + Strapi 5
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight">
              Modern Headless CMS Blog
            </h1>

            <p className="mt-8 text-xl text-gray-600">
              A production-ready blog powered by Next.js 16, Strapi 5,
              PostgreSQL, and Tailwind CSS v4.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/blog"
                className="rounded-xl bg-black px-6 py-3 text-white"
              >
                Read Articles
              </Link>

              <Link href="/about" className="rounded-xl border px-6 py-3">
                About
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-24">
          <Container>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">Featured Article</h2>
            </div>
            <FeaturedPost post={featuredPost} />
          </Container>
        </section>
      )}

      {/* Latest Posts */}
      <section className="py-24">
        <Container>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold">Latest Articles</h2>

            <Link href="/blog" className="font-medium hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.documentId} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-24">
        <Container>
          <h2 className="mb-10 text-4xl font-bold">Categories</h2>

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
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-32">
        <Container>
          <div className="rounded-3xl bg-black p-16 text-white">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold">Stay Updated</h2>

              <p className="mt-6 text-lg text-zinc-300">
                Get the latest tutorials, articles, and development tips
                delivered directly to your inbox.
              </p>

              <div className="mt-10 flex flex-col gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl px-5 py-4 text-white bg-[color:var(--foreground)]/10 outline-none"
                />

                <button className="rounded-xl bg-white px-8 py-4 font-medium text-black transition hover:bg-zinc-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
