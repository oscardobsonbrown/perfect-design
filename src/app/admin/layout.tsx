import { requireAuth } from "@/lib/auth-middleware";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return (
    <div className="min-h-screen">
      <nav className="border-b p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="font-semibold">Admin</h1>
          <form action="/api/auth/sign-out" method="POST">
            <button type="submit" className="text-sm text-muted-foreground hover:text-foreground">
              Sign Out
            </button>
          </form>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
}