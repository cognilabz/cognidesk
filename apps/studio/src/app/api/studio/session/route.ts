import { headers } from "next/headers";
import { getStudioSession } from "@/server/auth";
import { userRole } from "@/server/rbac";

export const runtime = "nodejs";

export async function GET() {
  const session = await getStudioSession(await headers());
  return Response.json({
    session: session
      ? {
          user: {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            role: userRole(session),
          },
        }
      : null,
  });
}
