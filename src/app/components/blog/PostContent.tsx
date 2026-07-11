"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface PostContentProps {
  content: Parameters<typeof BlocksRenderer>[0]["content"];
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <>
      <BlocksRenderer content={content ?? []} />
    </>
  );
}
