import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { DynamicContentBlock } from "@/src/types/content-block";
import CodeBlock from "./CodeBlock";

type Block = {
  __component: string;
  [key: string]: any;
};

interface Props {
  blocks: DynamicContentBlock[];
}

export default function PostRenderer({ blocks }: Props) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__component) {
          case "shared.rich-text":
            return (
              <BlocksRenderer
                key={`rich-${block.id}-${index}`}
                content={block.content}
              />
            );

          case "shared.code-block":
            return (
              <CodeBlock
                key={`code-${block.key ?? block.id}-${index}`}
                code={block.code}
                language={block.language}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
