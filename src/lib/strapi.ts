import { Post } from "@/src/types/post";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch posts:", res.status);
      return [];
    }

    const data = await res.json();
    return data.data || [];

  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.data?.[0] ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
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

export async function getCategoryBySlug(slug: string) {
  try {
    const response = await fetch(
      `${API_URL}/api/categories?filters[slug][$eq]=${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) return null;

    const data = await response.json();

    return data.data?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function getPostsByCategory(slug: string) {
  try {
    const response = await fetch(
      `${API_URL}/api/posts?filters[category][slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) return [];

    const data = await response.json();

    return data.data || [];
  } catch {
    return [];
  }
}