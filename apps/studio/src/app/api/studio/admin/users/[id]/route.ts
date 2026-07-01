import { headers } from "next/headers";
import { StudioRoleSchema } from "@cognidesk/studio-contracts";
import { z } from "zod";
import { adminErrorResponse, updateStudioUser } from "@/server/admin";
import { getStudioSession } from "@/server/auth";
import { requirePermission } from "@/server/rbac";

export const runtime = "nodejs";

const UpdateUserSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  role: StudioRoleSchema.optional(),
  emailVerified: z.boolean().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().nullable().optional(),
  banExpires: z.string().datetime().nullable().optional(),
});

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    requirePermission(session, "admin:manage");
    const { id } = await context.params;
    const body = UpdateUserSchema.parse(await request.json());
    const updated = await updateStudioUser({ headers: requestHeaders, session: session! }, {
      userId: id,
      ...(body.name !== undefined ? { name: body.name } : {}),
      ...(body.email !== undefined ? { email: body.email } : {}),
      ...(body.role !== undefined ? { role: body.role } : {}),
      ...(body.emailVerified !== undefined ? { emailVerified: body.emailVerified } : {}),
      ...(body.banned !== undefined ? { banned: body.banned } : {}),
      ...(body.banReason !== undefined ? { banReason: body.banReason } : {}),
      ...(body.banExpires !== undefined ? { banExpires: body.banExpires } : {}),
    });
    return Response.json({ user: updated });
  } catch (error) {
    return adminErrorResponse(error);
  }
}
