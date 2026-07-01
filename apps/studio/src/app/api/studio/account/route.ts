import { headers } from "next/headers";
import { z } from "zod";
import { accountErrorResponse, loadAccountSettings, updateAccountProfile } from "@/server/account";
import { getStudioSession } from "@/server/auth";
import { StudioAuthError } from "@/server/rbac";

export const runtime = "nodejs";

const AccountProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function GET() {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    if (!session) throw new StudioAuthError("Authentication required", 401);
    return Response.json({ account: await loadAccountSettings(session) });
  } catch (error) {
    return accountErrorResponse(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    if (!session) throw new StudioAuthError("Authentication required", 401);
    const body = AccountProfileSchema.parse(await request.json());
    const account = await updateAccountProfile({ headers: requestHeaders, session }, body);
    return Response.json({ account });
  } catch (error) {
    return accountErrorResponse(error);
  }
}
