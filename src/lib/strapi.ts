import { Post } from "@/src/types/post";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    `${API_URL}/api/posts?populate=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data.data;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(
    `${API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await response.json();
  return data.data[0];
}

export async function getCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAuthurs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/authurs`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCategoryBySlug(
  slug: string
) {
  const response = await fetch(
    `${API_URL}/api/categories?filters[slug][$eq]=${slug}`
  );

  const data = await response.json();

  return data.data?.[0] ?? null;
}

export async function getPostsByCategory(
  slug: string
) {
  const response = await fetch(
    `${API_URL}/api/posts?filters[category][slug][$eq]=${slug}&populate=*`
  );

  const data = await response.json();

  return data.data;
}