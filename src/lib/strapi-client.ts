const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

type FetchOptions = {
  tags?: string[];
  revalidate?: number;
};

export async function strapiFetch<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T | null> {
  try {
    const res = await fetch(`${STRAPI_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      next: {
        tags: options.tags ?? [],
        revalidate: options.revalidate ?? 60,
      },
    });

    if (!res.ok) {
      console.error("Strapi fetch failed:", res.status, path);
      return null;
    }

    const json = await res.json();

    return json.data ?? null;
  } catch (err) {
    console.error(err);
    return null;
  }
}