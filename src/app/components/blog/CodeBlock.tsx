import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string | null;
}

export default async function CodeBlock({
  code,
  language,
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "catppuccin-mocha",
  });

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d1117] shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-md text-zinc-300 uppercase tracking-widest">
            {language}
          </span>

          {filename && (
            <span className="text-sm text-zinc-400">{filename}</span>
          )}
        </div>

        <CopyButton code={code} />
      </div>

      <div
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
