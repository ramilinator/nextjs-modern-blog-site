import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Block = {
  __component: string;
  [key: string]: any;
};

interface Props {
  blocks: Block[];
}

export default function PostRenderer({ blocks }: Props) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block) => {
        switch (block.__component) {
          case "shared.rich-text":
            return <BlocksRenderer key={block.id} content={block.content} />;

          case "shared.code-block":
            return (
              <pre
                key={block.id}
                className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100"
              >
                <code>{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
