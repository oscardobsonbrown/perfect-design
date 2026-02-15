import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { pages } from "@/db/schema";
import { getAuth } from "@/lib/auth";

async function getSession(req: NextRequest) {
  const auth = getAuth();
  return auth.api.getSession({
    headers: req.headers,
  });
}

export async function GET() {
  const db = getDb();
  const allPages = await db.select().from(pages);
  return NextResponse.json({ pages: allPages });
}

export async function POST(req: NextRequest) {
  const session = await getSession(req);
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = getDb();
    const body = await req.json();
    const { slug, title, content, publishedAt } = body;

    if (!slug || !title) {
      return NextResponse.json(
        { error: "slug and title are required" },
        { status: 400 }
      );
    }

    const [newPage] = await db.insert(pages).values({
      id: crypto.randomUUID(),
      slug,
      title,
      content,
      publishedAt: publishedAt ? new Date(publishedAt) : null,
    }).returning();

    return NextResponse.json({ page: newPage }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}