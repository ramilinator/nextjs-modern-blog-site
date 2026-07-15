import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Author {
  id: number;
  documentId: string;

  name: string;

  bio: BlocksContent;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}