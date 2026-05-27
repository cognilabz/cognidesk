import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { getDashboardCode } from "@/server/dashboards";

export const runtime = "nodejs";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    const { id } = await context.params;
    const dashboard = await getDashboardCode(id);
    if (!dashboard) return Response.json({ error: "Dashboard not found" }, { status: 404 });
    return Response.json(dashboard);
  } catch (error) {
    return authErrorResponse(error);
  }
}
