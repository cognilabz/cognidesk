import { headers } from "next/headers";
import { z } from "zod";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission, userRole } from "@/server/rbac";
import {
  appendOperatorMessage,
  deleteOperatorSession,
  getOperatorSessionDetail,
  renameOperatorSession,
} from "@/server/operator-sessions";

export const runtime = "nodejs";

const AppendMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system", "tool"]),
  content: z.unknown(),
});

const RenameSessionSchema = z.object({
  title: z.string().trim().min(1).max(120),
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

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const { id } = await context.params;
    const body = RenameSessionSchema.parse(await request.json());
    const renamed = await renameOperatorSession({
      sessionId: id,
      userId: session!.user.id,
      title: body.title,
      includeAll: userRole(session!) === "admin",
    });
    if (!renamed) return Response.json({ error: "Operator session not found" }, { status: 404 });
    return Response.json({ session: renamed });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return authErrorResponse(error);
  }
}

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const { id } = await context.params;
    const body = AppendMessageSchema.parse(await request.json());
    const appended = await appendOperatorMessage({
      sessionId: id,
      userId: session!.user.id,
      includeAll: userRole(session!) === "admin",
      role: body.role,
      content: body.content,
    });
    if (!appended) return Response.json({ error: "Operator session not found" }, { status: 404 });
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return authErrorResponse(error);
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const { id } = await context.params;
    const deleted = await deleteOperatorSession({
      sessionId: id,
      userId: session!.user.id,
      includeAll: userRole(session!) === "admin",
    });
    if (!deleted) return Response.json({ error: "Operator session not found" }, { status: 404 });
    return Response.json({ ok: true });
  } catch (error) {
    return authErrorResponse(error);
  }
}
