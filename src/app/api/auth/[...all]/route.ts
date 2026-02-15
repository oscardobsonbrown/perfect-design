import { auth, getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

const handlers = auth ? toNextJsHandler(auth) : null;

export async function GET(request: NextRequest) {
  if (!handlers) {
    const authInstance = getAuth();
    const dynamicHandlers = toNextJsHandler(authInstance);
    return dynamicHandlers.GET(request);
  }
  return handlers.GET(request);
}

export async function POST(request: NextRequest) {
  if (!handlers) {
    const authInstance = getAuth();
    const dynamicHandlers = toNextJsHandler(authInstance);
    return dynamicHandlers.POST(request);
  }
  return handlers.POST(request);
}