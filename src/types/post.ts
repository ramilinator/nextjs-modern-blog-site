import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Image {
  coverImage?: {
  url: string;
} | null;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
}

export interface Post {
  seoTitle: string;
  seoDescription: string;
  coverImage: any;
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: BlocksContent;
  publishedAt: string;

  category?: Category;
  author?: Author;
}

