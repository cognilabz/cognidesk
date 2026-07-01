import { headers } from "next/headers";
import { z } from "zod";
import { StudioConfigurationMutationOperationSchema } from "@cognidesk/studio-contracts";
import { getStudioSession } from "@/server/auth";
import { authErrorResponse, requirePermission, userRole } from "@/server/rbac";
import { requestConfigurationChange } from "@/server/target";

export const runtime = "nodejs";

const ConfigurationChangeSchema = z.object({
  reason: z.string().min(1),
  operations: z.array(StudioConfigurationMutationOperationSchema).min(1),
});

export async function POST(request: Request) {
  try {
    const session = await getStudioSession(await headers());
    requirePermission(session, "admin:manage");
    const body = ConfigurationChangeSchema.parse(await request.json());
    const { result, status } = await requestConfigurationChange({
      reason: body.reason,
      operations: body.operations,
      actor: {
        id: session!.user.id,
        role: userRole(session!),
      },
    });
    return Response.json(result, { status });
  } catch (error) {
    if (error instanceof Error && !("status" in error)) {
      return Response.json({ error: error.message }, { status: 502 });
    }
    return authErrorResponse(error);
  }
}
