import { BlocksContent } from "@strapi/blocks-react-renderer";

/* -------------------------------------------------------------------------- */
/* Rich Text                                                                   */
/* -------------------------------------------------------------------------- */

export interface RichTextBlock {
  id: number;
  __component: "shared.rich-text";

  content: BlocksContent;
}

/* -------------------------------------------------------------------------- */
/* Code Snippet                                                                */
/* -------------------------------------------------------------------------- */

export interface CodeSnippetBlock {
  id: number;
  __component: "shared.code-block";

  key: string;
  title?: string | null;
  filename?: string | null;

  language: string;
  code: string;

  showLineNumbers?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Dynamic Zone                                                                */
/* -------------------------------------------------------------------------- */

export type DynamicContentBlock =
  | RichTextBlock
  | CodeSnippetBlock;