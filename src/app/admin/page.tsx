import { getDb } from "@/db";
import { pages } from "@/db/schema";
import { requireAuth } from "@/lib/auth-middleware";

export default async function AdminPage() {
  const session = await requireAuth();
  const db = getDb();
  
  const allPages = await db.select().from(pages);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Welcome, {session.user.name}</p>
      </div>
      
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-4">Pages ({allPages.length})</h3>
        {allPages.length === 0 ? (
          <p className="text-muted-foreground text-sm">No pages yet. Use the API to create pages.</p>
        ) : (
          <ul className="space-y-2">
            {allPages.map((page) => (
              <li key={page.id} className="flex justify-between items-center p-2 bg-muted rounded">
                <span>{page.title}</span>
                <span className="text-sm text-muted-foreground">/{page.slug}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}