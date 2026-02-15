import { getDb } from "@/db";
import { pages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const db = getDb();
    const allPages = await db.select().from(pages);

    return allPages.map((page) => ({
      slug: page.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    const db = getDb();
    const page = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);

    if (!page[0]) {
      return { title: "Page Not Found" };
    }

    return {
      title: page[0].title,
    };
  } catch {
    return { title: "Page Not Found" };
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    const db = getDb();
    const page = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);

    if (!page[0]) {
      notFound();
    }

    return (
      <main className="min-h-screen p-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{page[0].title}</h1>
          {page[0].content && (
            <div className="prose max-w-none">
              <p>{page[0].content}</p>
            </div>
          )}
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}