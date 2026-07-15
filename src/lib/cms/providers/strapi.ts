import qs from "qs";

import { CMS } from "../types";

import type { Page } from "@/src/types/page";

import { Post } from "@/src/types/post";
import { strapiFetch } from "@/src/lib/strapi-client";

/* -------------------------------------------------------------------------- */
/* Shared Populate                                                             */
/* -------------------------------------------------------------------------- */

const postPopulate = {
coverImage: true,
category: true,
author: true,
contentBlocks: {
  populate: "*",
},
};

/* -------------------------------------------------------------------------- */
/* Shared Query Builders                                                       */
/* -------------------------------------------------------------------------- */

const postsQuery = qs.stringify({
populate: postPopulate,
});

const pagesQuery = qs.stringify({
  populate: "*",
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

function buildPageBySlugQuery(slug: string) {
  return qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: "*",
  });
}

/* -------------------------------------------------------------------------- */
/* CMS                                                                         */
/* -------------------------------------------------------------------------- */

export const strapiCMS: CMS = {
  async getPosts(): Promise<Post[]> {
    return (
      (await strapiFetch<Post[]>(`/api/posts?${postsQuery}`, {
        tags: ["posts"],
      })) ?? []
    );
  },

  async getPostsByCategory(slug: string): Promise<Post[]> {
  return (
    (await strapiFetch<Post[]>(
      `/api/posts?${buildPostsByCategoryQuery(slug)}`,
      {
        tags: ["posts"],
      }
    )) ?? []
  );
  },

  async getPostBySlug(slug: string): Promise<Post | null> {
    const data = await strapiFetch<Post[]>(
      `/api/posts?${buildPostBySlugQuery(slug)}`,
      {
        tags: ["posts"],
      }
    );

    return data?.[0] ?? null;
  },

  async getCategories() {
    return (
      (await strapiFetch<any[]>("/api/categories", {
        tags: ["categories"],
      })) ?? []
    );
  },

  async getCategoryBySlug(slug: string) {
    const data = await strapiFetch<any[]>(
      `/api/categories?filters[slug][$eq]=${slug}`,
      {
        tags: ["categories"],
      }
    );

    return data?.[0] ?? null;
  },

  async getAuthors() {
  return (
    (await strapiFetch<any[]>("/api/authors", {
      tags: ["authors"],
    })) ?? []
  );
  },

async getPages(): Promise<Page[]> {
  return (
    (await strapiFetch<Page[]>(
      `/api/pages?${pagesQuery}`,
      {
        tags: ["pages"],
      }
    )) ?? []
  );
},

async getPage(slug: string): Promise<Page | null> {
  const data = await strapiFetch<Page[]>(
    `/api/pages?${buildPageBySlugQuery(slug)}`,
    {
      tags: ["pages"],
    }
  );

  return data?.[0] ?? null;
},

};
