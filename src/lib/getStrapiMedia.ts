export function getStrapiMedia(url?: string) {
  if (!url) return "";

  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}