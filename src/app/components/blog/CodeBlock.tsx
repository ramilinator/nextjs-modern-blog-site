import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export default async function CodeBlock({
  code,
  language,
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
  });

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-neutral-700">
      {filename && (
        <div className="flex items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4 py-2">
          <span className="text-sm text-neutral-300">{filename}</span>
        </div>
      )}

      <div
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
