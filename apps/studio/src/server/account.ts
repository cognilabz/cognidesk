import { and, eq, ne } from "drizzle-orm";
import { audit } from "@/server/audit";
import { auth, type StudioAuthSession } from "@/server/auth";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { session as sessionTable, user } from "@/server/db/schema";
import { StudioAuthError } from "@/server/rbac";

export type AccountSettings = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type AccountMutationContext = {
  headers: Headers;
  session: StudioAuthSession;
};

export async function loadAccountSettings(session: StudioAuthSession): Promise<AccountSettings> {
  await ensureStudioDatabase();
  const [row] = await db.select().from(user).where(eq(user.id, session.user.id)).limit(1);
  if (!row) throw new StudioAuthError("Account not found.", 404);
  return serializeAccountSettings(row);
}

export async function updateAccountProfile(
  context: AccountMutationContext,
  input: { name: string; email: string },
) {
  await ensureStudioDatabase();
  const current = await loadAccountSettings(context.session);
  const name = input.name.trim();
  const email = normalizeEmail(input.email);
  if (!name) throw new Error("Name is required.");
  if (!email) throw new Error("A valid email is required.");

  const data: Partial<typeof user.$inferInsert> = {};
  const changed: string[] = [];
  if (name !== current.name) {
    data.name = name;
    changed.push("name");
  }
  if (email !== current.email) {
    const [existing] = await db.select({ id: user.id })
      .from(user)
      .where(and(eq(user.email, email), ne(user.id, context.session.user.id)))
      .limit(1);
    if (existing) throw new Error("Email is already in use.");
    data.email = email;
    data.emailVerified = false;
    changed.push("email");
  }
  if (changed.length === 0) return current;

  await db.update(user).set(data).where(eq(user.id, context.session.user.id));
  await audit({
    userId: context.session.user.id,
    action: "studio.account.profile.updated",
    subjectType: "user",
    subjectId: context.session.user.id,
    metadata: { changed },
  });
  return loadAccountSettings(context.session);
}

export async function changeAccountPassword(
  context: AccountMutationContext,
  input: { currentPassword: string; newPassword: string; revokeOtherSessions?: boolean },
) {
  if (input.newPassword.length < 8) throw new Error("Password must be at least 8 characters.");

  await auth.api.changePassword({
    headers: context.headers,
    body: {
      currentPassword: input.currentPassword,
      newPassword: input.newPassword,
      revokeOtherSessions: false,
    },
  });
  if (input.revokeOtherSessions ?? true) {
    await db.delete(sessionTable).where(and(
      eq(sessionTable.userId, context.session.user.id),
      ne(sessionTable.id, context.session.session.id),
    ));
  }
  await audit({
    userId: context.session.user.id,
    action: "studio.account.password_changed",
    subjectType: "user",
    subjectId: context.session.user.id,
    metadata: { revokedOtherSessions: input.revokeOtherSessions ?? true },
  });
  return loadAccountSettings(context.session);
}

export function accountErrorResponse(error: unknown) {
  if (error instanceof StudioAuthError) {
    return Response.json({ error: error.message }, { status: error.status });
  }
  const status = errorStatus(error) ?? 400;
  return Response.json({ error: errorMessage(error) }, { status });
}

function serializeAccountSettings(row: typeof user.$inferSelect): AccountSettings {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    emailVerified: row.emailVerified,
    role: row.role,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

function normalizeEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  return normalized.includes("@") ? normalized : "";
}

function errorStatus(error: unknown) {
  const record = error && typeof error === "object" ? error as Record<string, unknown> : null;
  const status = record?.status ?? record?.statusCode;
  return typeof status === "number" ? status : undefined;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Request failed.";
}
