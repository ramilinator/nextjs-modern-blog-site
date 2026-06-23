import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get("x-revalidate-secret");

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const slug = body.entry?.slug;

    // Revalidate specific blog page
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    // Revalidate blog listing and related data
    revalidatePath("/blog");

    // Revalidate tagged fetches
    revalidateTag("posts", "fetch");

    return NextResponse.json({
      revalidated: true,
      slug,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}