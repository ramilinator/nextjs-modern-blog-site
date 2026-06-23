export function getStrapiMedia(url?: string | null) {
  if (!url) return "/placeholder.jpg";

  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  if (url.startsWith("http")) return url;

  return `${baseUrl}${url}`;
}