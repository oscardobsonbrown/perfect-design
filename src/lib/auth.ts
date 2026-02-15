import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { authSchema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

function createAuth() {
  if (!db) {
    return null;
  }
  
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
}

export const auth = createAuth();

export function getAuth() {
  if (!auth) {
    throw new Error("Auth not configured - DATABASE_URL is required");
  }
  return auth;
}

export type Auth = NonNullable<ReturnType<typeof createAuth>>;