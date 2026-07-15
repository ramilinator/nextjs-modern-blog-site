import { localCMS } from "./providers/local";
import { strapiCMS } from "./providers/strapi";

const provider =
  process.env.NEXT_PUBLIC_CMS_PROVIDER ?? "strapi";

export const cms =
  provider === "local"
    ? localCMS
    : strapiCMS;

/* -------------------------------------------------------------------------- */
/* Posts                                                                       */
/* -------------------------------------------------------------------------- */

export const getPosts = () => cms.getPosts();

export const getPostBySlug = (slug: string) =>
  cms.getPostBySlug(slug);

export const getPostsByCategory = (slug: string) =>
  cms.getPostsByCategory(slug);

/* -------------------------------------------------------------------------- */
/* Categories                                                                  */
/* -------------------------------------------------------------------------- */

export const getCategories = () =>
  cms.getCategories();

export const getCategoryBySlug = (slug: string) =>
  cms.getCategoryBySlug(slug);

/* -------------------------------------------------------------------------- */
/* Authors                                                                     */
/* -------------------------------------------------------------------------- */

export const getAuthors = () =>
  cms.getAuthors();

/* -------------------------------------------------------------------------- */
/* Pages                                                                       */
/* -------------------------------------------------------------------------- */

export const getPages = () =>
  cms.getPages();

export const getPage = (slug: string) =>
  cms.getPage(slug);