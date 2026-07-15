import { Post } from "../../types/post";
import { Category } from "../../types/post";
import { Author } from "../../types/post";

export interface CMS {
  getPosts(): Promise<Post[]>;

  getPostBySlug(slug: string): Promise<Post | null>;

  getPostsByCategory(slug: string): Promise<Post[]>;

  getCategories(): Promise<Category[]>;

  getCategoryBySlug(slug: string): Promise<Category | null>;

  getAuthors(): Promise<Author[]>;
}