import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission } from "@/server/rbac";
import { fetchTargetConversations } from "@/server/target";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "studio:view");
    const url = new URL(request.url);
    const limit = numberParam(url.searchParams.get("limit"));
    const offset = numberParam(url.searchParams.get("offset"));
    const conversations = await fetchTargetConversations({
      ...(limit !== undefined ? { limit } : {}),
      ...(offset !== undefined ? { offset } : {}),
    });
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
