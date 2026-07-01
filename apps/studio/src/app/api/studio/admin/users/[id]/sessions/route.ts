import { headers } from "next/headers";
import { adminErrorResponse, revokeStudioUserSessions } from "@/server/admin";
import { getStudioSession } from "@/server/auth";
import { requirePermission } from "@/server/rbac";

export const runtime = "nodejs";

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    requirePermission(session, "admin:manage");
    const { id } = await context.params;
    const updated = await revokeStudioUserSessions({ headers: requestHeaders, session: session! }, id);
    return Response.json({ user: updated });
  } catch (error) {
    return adminErrorResponse(error);
  }
}
