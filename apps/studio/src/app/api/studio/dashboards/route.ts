import { headers } from "next/headers";
import { z } from "zod";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { listDashboards, saveDashboardDraft } from "@/server/dashboards";

export const runtime = "nodejs";

const SaveDashboardSchema = z.object({
  dashboardId: z.string().optional(),
  targetId: z.string().optional(),
  title: z.string().min(1),
  slug: z.string().optional(),
  description: z.string().optional(),
  code: z.string().min(1),
  datasets: z.array(z.unknown()).optional(),
  fallback: z.unknown().optional(),
});

export async function GET() {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    return Response.json({ dashboards: await listDashboards() });
  } catch (error) {
    return authErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "dashboards:edit");
    const body = SaveDashboardSchema.parse(await request.json());
    const dashboard = await saveDashboardDraft({
      userId: session!.user.id,
      ...(body.targetId ? { targetId: body.targetId } : {}),
      ...(body.dashboardId ? { dashboardId: body.dashboardId } : {}),
      title: body.title,
      ...(body.slug ? { slug: body.slug } : {}),
      ...(body.description ? { description: body.description } : {}),
      code: body.code,
      ...(body.datasets ? { datasets: body.datasets as never } : {}),
      ...(body.fallback !== undefined ? { fallback: body.fallback } : {}),
    });
    return Response.json({ dashboard });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return authErrorResponse(error);
  }
}
