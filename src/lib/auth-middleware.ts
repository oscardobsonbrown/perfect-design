import { getAuth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getServerSession() {
  const auth = getAuth();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function requireAuth() {
  const session = await getServerSession();
  
  if (!session) {
    redirect("/admin/login");
  }
  
  return session;
}

export async function requireAdmin() {
  const session = await requireAuth();
  return session;
}