import { headers } from "next/headers";
import { z } from "zod";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission, userRole } from "@/server/rbac";
import { createOperatorSession, listOperatorSessions } from "@/server/operator-sessions";

export const runtime = "nodejs";

const CreateSessionSchema = z.object({
  title: z.string().optional(),
  targetId: z.string().optional(),
  modelId: z.string().optional(),
});

export async function GET() {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const sessions = await listOperatorSessions(session!.user.id, userRole(session!) === "admin");
    return Response.json({ sessions });
  } catch (error) {
    return authErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "operator:use");
    const body = CreateSessionSchema.parse(await request.json());
    const operatorSession = await createOperatorSession({
      userId: session!.user.id,
      ...(body.targetId ? { targetId: body.targetId } : {}),
      ...(body.title ? { title: body.title } : {}),
      ...(body.modelId ? { modelId: body.modelId } : {}),
    });
    return Response.json({ session: operatorSession });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return authErrorResponse(error);
  }
}
