import type {
  Post,
  Category,
  Author,
} from "../../types";

export interface CMS {
  getPosts(): Promise<Post[]>;

  getPostBySlug(slug: string): Promise<Post | null>;

  getPostsByCategory(slug: string): Promise<Post[]>;

  getCategories(): Promise<Category[]>;

  getCategoryBySlug(slug: string): Promise<Category | null>;

  getAuthors(): Promise<Author[]>;
}