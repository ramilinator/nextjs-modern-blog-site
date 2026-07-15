import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Page {
  id: number;
  documentId: string;

  title: string;
  slug: string;

  seoTitle: string | null;
  seoDescription: string | null;

  content: BlocksContent;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}