import { headers } from "next/headers";
import { z } from "zod";
import { adminErrorResponse, setStudioUserPassword } from "@/server/admin";
import { getStudioSession } from "@/server/auth";
import { requirePermission } from "@/server/rbac";

export const runtime = "nodejs";

const PasswordResetSchema = z.object({
  newPassword: z.string().min(8),
});

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    requirePermission(session, "admin:manage");
    const { id } = await context.params;
    const body = PasswordResetSchema.parse(await request.json());
    const updated = await setStudioUserPassword({ headers: requestHeaders, session: session! }, {
      userId: id,
      newPassword: body.newPassword,
    });
    return Response.json({ user: updated });
  } catch (error) {
    return adminErrorResponse(error);
  }
}
