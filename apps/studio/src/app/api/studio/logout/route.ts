import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/server/auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const signOutResponse = await auth.handler(new Request(new URL("/api/auth/sign-out", request.url), {
    method: "POST",
    headers: request.headers,
  }));

  const response = NextResponse.json(
    { ok: signOutResponse.ok },
    { status: signOutResponse.ok ? 200 : signOutResponse.status },
  );
  copySetCookieHeaders(signOutResponse, response);
  return response;
}

function copySetCookieHeaders(source: Response, target: NextResponse) {
  source.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") target.headers.append("set-cookie", value);
  });
}
