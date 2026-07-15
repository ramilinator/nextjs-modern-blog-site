import { BlocksContent } from "@strapi/blocks-react-renderer";

import type { Author } from "./author";
import type { Category } from "./category";
import type { DynamicContentBlock } from "./content-block";
import type { Media } from "./media";

export interface Post {
  id: number;
  documentId: string;

  title: string;
  slug: string;
  excerpt: string;

  publishedDate: string;
  publishedAt: string;

  createdAt: string;
  updatedAt: string;

  featured: boolean;
  readingTime: number | null;

  seoTitle: string | null;
  seoDescription: string | null;

  content: BlocksContent;

  contentBlocks: DynamicContentBlock[];

  coverImage: Media | null;

  category: Category;

  author: Author;
}