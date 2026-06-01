import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { ensureDemoConversations, listStudioConversations } from "@/server/conversations";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { currentTarget, fetchIntrospection } from "@/server/target";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    const [manifest, introspection] = await Promise.all([
      currentTarget(),
      fetchIntrospection().catch(() => null),
    ]);
    const url = new URL(request.url);
    const limit = numberParam(url.searchParams.get("limit"));
    const offset = numberParam(url.searchParams.get("offset"));
    const conversations = await ensureDemoConversations(
      manifest,
      introspection
    ).then(() =>
      listStudioConversations(manifest.target.id, {
        ...(limit !== undefined ? { limit } : {}),
        ...(offset !== undefined ? { offset } : {}),
      })
    );
    return Response.json({
      conversations,
    });
  } catch (error) {
    return authErrorResponse(error);
  }
}

function numberParam(value: string | null) {
  if (value === null) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}
