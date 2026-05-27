import { headers } from "next/headers";
import { StudioDashboardDataQuerySchema } from "@cognidesk/studio-contracts";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { queryDashboardData } from "@/server/target";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    const query = StudioDashboardDataQuerySchema.parse(await request.json());
    const dataset = await queryDashboardData(query);
    return Response.json({ dataset });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return authErrorResponse(error);
  }
}
