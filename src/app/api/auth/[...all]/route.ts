import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const auth = getAuth();
  const handlers = toNextJsHandler(auth);
  return handlers.GET(request);
}

export async function POST(request: NextRequest) {
  const auth = getAuth();
  const handlers = toNextJsHandler(auth);
  return handlers.POST(request);
}