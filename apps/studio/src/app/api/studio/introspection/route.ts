import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { fetchIntrospection } from "@/server/target";

export const runtime = "nodejs";

export async function GET() {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    return Response.json(await fetchIntrospection());
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 502 });
    }
    return authErrorResponse(error);
  }
}
