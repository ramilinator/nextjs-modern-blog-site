import qs from "qs";

import { Post } from "@/src/types/post";
import { strapiFetch } from "@/src/lib/strapi-client";

/* -------------------------------------------------------------------------- */
/* Shared Populate                                                             */
/* -------------------------------------------------------------------------- */

const postPopulate = {
  coverImage: true,
  category: true,
  author: true,
};

/* -------------------------------------------------------------------------- */
/* Shared Query Builders                                                       */
/* -------------------------------------------------------------------------- */

const postsQuery = qs.stringify({
  populate: postPopulate,
});

function buildPostBySlugQuery(slug: string) {
  return qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: postPopulate,
  });
}

function buildPostsByCategoryQuery(slug: string) {
  return qs.stringify({
    filters: {
      category: {
        slug: {
          $eq: slug,
        },
      },
    },
    populate: postPopulate,
  });
}

/* -------------------------------------------------------------------------- */
/* Posts                                                                       */
/* -------------------------------------------------------------------------- */

export async function getPosts(): Promise<Post[]> {
  return (
    (await strapiFetch<Post[]>(`/api/posts?${postsQuery}`, {
      tags: ["posts"],
    })) ?? []
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await strapiFetch<Post[]>(
    `/api/posts?${buildPostBySlugQuery(slug)}`,
    {
      tags: ["posts"],
    }
  );

  return data?.[0] ?? null;
}

export async function getPostsByCategory(slug: string) {
  return (
    (await strapiFetch<any[]>(
      `/api/posts?${buildPostsByCategoryQuery(slug)}`,
      {
        tags: ["posts"],
      }
    )) ?? []
  );
}

/* -------------------------------------------------------------------------- */
/* Categories                                                                  */
/* -------------------------------------------------------------------------- */

export async function getCategories() {
  return (
    (await strapiFetch<any[]>("/api/categories", {
      tags: ["categories"],
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

/* -------------------------------------------------------------------------- */
/* Authors                                                                     */
/* -------------------------------------------------------------------------- */

export async function getAuthors() {
  return (
    (await strapiFetch<any[]>("/api/authors", {
      tags: ["authors"],
    })) ?? []
  );
}