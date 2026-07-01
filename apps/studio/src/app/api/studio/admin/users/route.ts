import { headers } from "next/headers";
import { StudioRoleSchema } from "@cognidesk/studio-contracts";
import { z } from "zod";
import { adminErrorResponse, createStudioUser, loadAdminOverview } from "@/server/admin";
import { getStudioSession } from "@/server/auth";
import { requirePermission } from "@/server/rbac";

export const runtime = "nodejs";

const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  role: StudioRoleSchema.default("viewer"),
  emailVerified: z.boolean().optional(),
});

export async function GET() {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    requirePermission(session, "admin:manage");
    return Response.json({ overview: await loadAdminOverview() });
  } catch (error) {
    return adminErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const requestHeaders = await headers();
    const session = await getStudioSession(requestHeaders);
    requirePermission(session, "admin:manage");
    const body = CreateUserSchema.parse(await request.json());
    const created = await createStudioUser({ headers: requestHeaders, session: session! }, {
      name: body.name,
      email: body.email,
      password: body.password,
      role: body.role,
      ...(body.emailVerified !== undefined ? { emailVerified: body.emailVerified } : {}),
    });
    return Response.json({ user: created }, { status: 201 });
  } catch (error) {
    return adminErrorResponse(error);
  }
}
