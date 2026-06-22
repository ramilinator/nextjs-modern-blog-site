import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // simple security check
    if (body.secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const slug = body.slug;

    // OPTION 1: revalidate specific page
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    // OPTION 2: revalidate all blog pages (tag-based)
    revalidateTag("posts", "fetch");

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}