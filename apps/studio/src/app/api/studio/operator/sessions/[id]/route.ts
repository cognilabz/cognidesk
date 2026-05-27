import { headers } from "next/headers";
import { z } from "zod";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission, userRole } from "@/server/rbac";
import { appendOperatorMessage, getOperatorSessionDetail } from "@/server/operator-sessions";

export const runtime = "nodejs";

const AppendMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system", "tool"]),
  content: z.unknown(),
});

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const { id } = await context.params;
    const detail = await getOperatorSessionDetail({
      sessionId: id,
      userId: session!.user.id,
      includeAll: userRole(session!) === "admin",
    });
    if (!detail) return Response.json({ error: "Operator session not found" }, { status: 404 });
    return Response.json(detail);
  } catch (error) {
    return authErrorResponse(error);
  }
}

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const { id } = await context.params;
    const body = AppendMessageSchema.parse(await request.json());
    await appendOperatorMessage({
      sessionId: id,
      role: body.role,
      content: body.content,
    });
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return authErrorResponse(error);
  }
}
