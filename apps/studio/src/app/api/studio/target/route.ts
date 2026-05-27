import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { ensureDefaultTarget, targetHealth } from "@/server/target";

export const runtime = "nodejs";

export async function GET() {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    const manifest = await ensureDefaultTarget(session?.user.id);
    const health = await targetHealth();
    return Response.json({ manifest, health });
  } catch (error) {
    return authErrorResponse(error);
  }
}
