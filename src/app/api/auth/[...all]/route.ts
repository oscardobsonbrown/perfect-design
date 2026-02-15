import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const auth = getAuth();
    const handler = toNextJsHandler(auth);
    return handler.GET(request);
  } catch (error) {
    console.error("Auth GET error:", error);
    return NextResponse.json({ 
      error: String(error),
      stack: error instanceof Error ? error.stack : undefined 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = getAuth();
    const handler = toNextJsHandler(auth);
    return handler.POST(request);
  } catch (error) {
    console.error("Auth POST error:", error);
    return NextResponse.json({ 
      error: String(error),
      stack: error instanceof Error ? error.stack : undefined 
    }, { status: 500 });
  }
}