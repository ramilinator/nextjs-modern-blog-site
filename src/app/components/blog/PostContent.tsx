"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface PostContentProps {
  content: Parameters<typeof BlocksRenderer>[0]["content"];
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <article className="blog-content">
      <BlocksRenderer
        content={content ?? []}
        blocks={{
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return (
                  <h1 className="mt-12 mb-6 text-5xl font-bold">{children}</h1>
                );

              case 2:
                return (
                  <h2 className="mt-10 mb-4 text-4xl font-bold">{children}</h2>
                );

              case 3:
                return (
                  <h3 className="mt-8 mb-4 text-3xl font-semibold">
                    {children}
                  </h3>
                );

              case 4:
                return (
                  <h4 className="mt-6 mb-3 text-2xl font-semibold">
                    {children}
                  </h4>
                );

              default:
                return (
                  <h5 className="mt-4 mb-2 text-xl font-semibold">
                    {children}
                  </h5>
                );
            }
          },

          paragraph: ({ children }) => (
            <p className="mb-6 leading-8 text-lg text-neutral-700 dark:text-neutral-300">
              {children}
            </p>
          ),

          quote: ({ children }) => (
            <blockquote className="my-8 border-l-4 border-blue-500 pl-6 italic">
              {children}
            </blockquote>
          ),

          list: ({ children, format }) =>
            format === "ordered" ? (
              <ol className="mb-6 list-decimal space-y-2 pl-6">{children}</ol>
            ) : (
              <ul className="mb-6 list-disc space-y-2 pl-6">{children}</ul>
            ),
        }}
      />
    </article>
  );
}
