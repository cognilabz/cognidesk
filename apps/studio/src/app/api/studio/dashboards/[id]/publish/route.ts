import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { publishDashboard } from "@/server/dashboards";

export const runtime = "nodejs";

export async function POST(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "dashboards:publish");
    const { id } = await context.params;
    const dashboard = await publishDashboard({ dashboardId: id, userId: session!.user.id });
    if (!dashboard) return Response.json({ error: "Dashboard not found" }, { status: 404 });
    return Response.json({ dashboard });
  } catch (error) {
    return authErrorResponse(error);
  }
}
