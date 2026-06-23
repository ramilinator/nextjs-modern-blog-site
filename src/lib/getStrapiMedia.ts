export function getStrapiMedia(url?: string | null) {
  if (!url) return "/placeholder.jpg";

  // already absolute URL (Cloudinary, external CDN, etc.)
  if (url.startsWith("http")) {
    return url;
  }

  // relative Strapi upload
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}