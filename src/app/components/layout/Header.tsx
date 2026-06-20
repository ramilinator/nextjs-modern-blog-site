import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "@/src/app/components/themeToggle";

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            MyBlog
          </Link>

          <div className="flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/categories">Categories</Link>
          </div>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
