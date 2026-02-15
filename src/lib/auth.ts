import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@/db";
import { authSchema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

function createAuth() {
  try {
    const db = getDb();
    
    return betterAuth({
      database: drizzleAdapter(db, {
        provider: "pg",
        schema: authSchema,
      }),
      plugins: [
        nextCookies(),
      ],
      secret: process.env.BETTER_AUTH_SECRET,
      trustedOrigins: [
        process.env.BETTER_AUTH_URL || "http://localhost:3000",
      ],
      basePath: "/api/auth",
    });
  } catch {
    return null;
  }
}

export function getAuth() {
  if (!authInstance) {
    authInstance = createAuth();
  }
  if (!authInstance) {
    throw new Error("Auth not configured - DATABASE_URL is required");
  }
  return authInstance;
}

export const auth = createAuth();

export type Auth = NonNullable<ReturnType<typeof betterAuth>>;