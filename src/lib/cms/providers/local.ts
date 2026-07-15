import {
  posts,
  categories,
  authors,
} from "@/src/data";

import { CMS } from "../types";

export const localCMS: CMS = {
  async getPosts() {
    return posts;
  },

  async getPostBySlug(slug: string) {
    return posts.find(post => post.slug === slug) ?? null;
  },

  async getPostsByCategory(slug: string) {
    return posts.filter(
      post => post.category.slug === slug
    );
  },

  async getCategories() {
    return categories;
  },

  async getCategoryBySlug(slug: string) {
    return categories.find(
      category => category.slug === slug
    ) ?? null;
  },

  async getAuthors() {
    return authors;
  },
};