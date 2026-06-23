import { Post } from "@/src/types/post";
import { strapiFetch } from "@/src/lib/strapi-client";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;



export async function getPosts(): Promise<Post[]> {
  return (await strapiFetch<Post[]>("/api/posts?populate=*", {
    tags: ["posts"],
  })) ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await strapiFetch<Post[]>(
    `/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
      tags: ["posts"],
    }
  );

  return data?.[0] ?? null;
}

export async function getCategories() {
  return (
    (await strapiFetch<any[]>("/api/categories", {
      tags: ["categories"],
    })) ?? []
  );
}

export async function getAuthors() {
  return (
    (await strapiFetch<any[]>("/api/authors", {
      tags: ["authors"],
    })) ?? []
  );
}

export async function getCategoryBySlug(slug: string) {
  const data = await strapiFetch<any[]>(
    `/api/categories?filters[slug][$eq]=${slug}`,
    {
      tags: ["categories"],
    }
  );

  return data?.[0] ?? null;
}

export async function getPostsByCategory(slug: string) {
  return (
    (await strapiFetch<any[]>(
      `/api/posts?filters[category][slug][$eq]=${slug}&populate=*`,
      {
        tags: ["posts"],
      }
    )) ?? []
  );
}