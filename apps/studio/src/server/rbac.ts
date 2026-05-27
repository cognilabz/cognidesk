import {
  roleHasPermission,
  type StudioPermission,
  type StudioRole,
} from "@cognidesk/studio-contracts";
import type { StudioAuthSession } from "@/server/auth";

export class StudioAuthError extends Error {
  constructor(
    message: string,
    readonly status = 401,
  ) {
    super(message);
  }
}

export function userRole(session: StudioAuthSession): StudioRole {
  const role = session.user.role;
  if (role === "viewer" || role === "dashboard_editor" || role === "operator" || role === "admin") return role;
  return "viewer";
}

export function requirePermission(session: StudioAuthSession | null, permission: StudioPermission) {
  if (!session) throw new StudioAuthError("Authentication required", 401);
  if (!roleHasPermission(userRole(session), permission)) {
    throw new StudioAuthError("Permission denied", 403);
  }
}

export function authErrorResponse(error: unknown) {
  if (error instanceof StudioAuthError) {
    return Response.json({ error: error.message }, { status: error.status });
  }
  throw error;
}
