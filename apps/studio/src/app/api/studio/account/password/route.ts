import { headers } from "next/headers";
import { z } from "zod";
import { accountErrorResponse, changeAccountPassword } from "@/server/account";
import { getStudioSession } from "@/server/auth";
import { StudioAuthError } from "@/server/rbac";

export const runtime = "nodejs";

const PasswordChangeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
  revokeOtherSessions: z.boolean().optional(),
}).refine((body) => body.newPassword === body.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

export async function POST(request: Request) {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    if (!session) throw new StudioAuthError("Authentication required", 401);
    const body = PasswordChangeSchema.parse(await request.json());
    const account = await changeAccountPassword({ headers: requestHeaders, session }, {
      currentPassword: body.currentPassword,
      newPassword: body.newPassword,
      revokeOtherSessions: body.revokeOtherSessions ?? true,
    });
    return Response.json({ account });
  } catch (error) {
    return accountErrorResponse(error);
  }
}
