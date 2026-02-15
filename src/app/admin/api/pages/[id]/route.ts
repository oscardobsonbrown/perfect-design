import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { pages } from "@/db/schema";
import { getAuth } from "@/lib/auth";
import { eq } from "drizzle-orm";

async function getSession(req: NextRequest) {
  const auth = getAuth();
  return auth.api.getSession({
    headers: req.headers,
  });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const db = getDb();
  const { id } = await params;
  const [page] = await db.select().from(pages).where(eq(pages.id, id)).limit(1);

  if (!page) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }

  return NextResponse.json({ page });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession(req);
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();
  const { id } = await params;

  try {
    const body = await req.json();
    const { slug, title, content, publishedAt } = body;

    const [updatedPage] = await db
      .update(pages)
      .set({
        ...(slug && { slug }),
        ...(title && { title }),
        ...(content !== undefined && { content }),
        ...(publishedAt !== undefined && { publishedAt: publishedAt ? new Date(publishedAt) : null }),
        updatedAt: new Date(),
      })
      .where(eq(pages.id, id))
      .returning();

    if (!updatedPage) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ page: updatedPage });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update page" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession(req);
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();
  const { id } = await params;

  const [deletedPage] = await db
    .delete(pages)
    .where(eq(pages.id, id))
    .returning();

  if (!deletedPage) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}