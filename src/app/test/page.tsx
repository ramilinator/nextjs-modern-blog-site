import CodeBlock from "@/src/app/components/blog/CodeBlock";

export default async function TestPage() {
  return (
    <CodeBlock
      language="typescript"
      filename="page.tsx"
      code={`export default function Home() {
  return <h1>Hello World</h1>;
}`}
    />
  );
}
