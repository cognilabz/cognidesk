import { NextResponse, type NextRequest } from "next/server";
import { auth, createFirstBootAdmin, hasStudioUsers } from "@/server/auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const input = await setupInput(request);
  const adminInput = {
    email: input.email.trim().toLowerCase(),
    password: input.password,
    name: input.name.trim(),
  };
  if (!adminInput.email || !adminInput.password || !adminInput.name) {
    return setupResponse(request, { ok: false, status: 400, message: "Name, email, and password are required." });
  }
  if (adminInput.password !== input.confirmPassword) {
    return setupResponse(request, { ok: false, status: 400, message: "Passwords do not match." });
  }

  const result = await createFirstBootAdmin(adminInput);
  if (!result.ok) return setupResponse(request, result);

  const signInResponse = await auth.handler(new Request(new URL("/api/auth/sign-in/email", request.url), {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: adminInput.email, password: adminInput.password }),
  }));
  if (!signInResponse.ok) {
    return setupResponse(request, { ok: false, status: 500, message: "Admin was created, but automatic sign-in failed." });
  }

  const response = wantsHtml(request)
    ? NextResponse.redirect(new URL("/", request.url), 303)
    : NextResponse.json({ ok: true }, { status: 201 });
  copySetCookieHeaders(signInResponse, response);
  return response;
}

export async function GET() {
  return NextResponse.json({ firstBoot: !(await hasStudioUsers()) });
}

async function setupInput(request: NextRequest) {
  if (request.headers.get("content-type")?.includes("application/json")) {
    const body = await request.json() as Partial<Record<"email" | "password" | "confirmPassword" | "name", unknown>>;
    return {
      email: trimmedString(body.email),
      password: rawString(body.password),
      confirmPassword: rawString(body.confirmPassword),
      name: trimmedString(body.name),
    };
  }

  const form = await request.formData();
  return {
    email: trimmedString(form.get("email")),
    password: rawString(form.get("password")),
    confirmPassword: rawString(form.get("confirmPassword")),
    name: trimmedString(form.get("name")),
  };
}

function setupResponse(
  request: NextRequest,
  result: { ok: false; status: number; message: string },
) {
  if (wantsHtml(request)) {
    const url = new URL("/login", request.url);
    url.searchParams.set("error", result.message);
    return NextResponse.redirect(url, 303);
  }
  return NextResponse.json({ error: result.message }, { status: result.status });
}

function wantsHtml(request: NextRequest) {
  return !request.headers.get("content-type")?.includes("application/json");
}

function copySetCookieHeaders(source: Response, target: NextResponse) {
  source.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") target.headers.append("set-cookie", value);
  });
}

function trimmedString(value: FormDataEntryValue | unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function rawString(value: FormDataEntryValue | unknown) {
  return typeof value === "string" ? value : "";
}
