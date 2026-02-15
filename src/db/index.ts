import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

function createDatabase() {
  if (!connectionString) {
    return null;
  }
  const sql = neon(connectionString);
  return drizzle(sql, { schema });
}

export const db = createDatabase() as NeonHttpDatabase<typeof schema>;

export function getDb() {
  if (!db) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  return db;
}

export type Database = typeof db;