import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@/db";
import { authSchema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

function createAuth() {
  const db = getDb();
  
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: authSchema,
    }),
    emailAndPassword: {
      enabled: true,
    },
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

export function getAuth() {
  if (!authInstance) {
    authInstance = createAuth();
  }
  return authInstance;
}

export type Auth = ReturnType<typeof betterAuth>;