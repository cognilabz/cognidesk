import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { ensureDemoConversations, listStudioConversations } from "@/server/conversations";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { currentTarget, fetchIntrospection } from "@/server/target";

export const runtime = "nodejs";

export async function GET() {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    const manifest = await currentTarget();
    const introspection = await fetchIntrospection().catch(() => null);
    await ensureDemoConversations(manifest, introspection);
    return Response.json({ conversations: await listStudioConversations(manifest.target.id) });
  } catch (error) {
    return authErrorResponse(error);
  }
}
