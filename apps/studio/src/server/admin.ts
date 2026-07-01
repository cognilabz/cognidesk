import { and, desc, eq, gt } from "drizzle-orm";
import type { StudioRole } from "@cognidesk/studio-contracts";
import { auth, type StudioAuthSession } from "@/server/auth";
import { audit } from "@/server/audit";
import { db, ensureStudioDatabase } from "@/server/db/client";
import {
  account,
  credentialGrants,
  operatorSessions,
  session as sessionTable,
  studioAuditLog,
  user,
} from "@/server/db/schema";
import { requirePermission, StudioAuthError } from "@/server/rbac";

export type AdminOverview = {
  users: Array<{
    id: string;
    name: string;
    email: string;
    role: StudioRole;
    emailVerified: boolean;
    banned: boolean;
    banReason: string | null;
    banExpires: string | null;
    hasPassword: boolean;
    activeSessionCount: number;
    createdAt: string;
    updatedAt: string;
  }>;
  auditEntries: Array<{
    id: string;
    userId: string | null;
    targetId: string | null;
    action: string;
    subjectType: string;
    subjectId: string | null;
    createdAt: string;
  }>;
  credentialGrants: Array<{
    id: string;
    targetId: string;
    category: string;
    label: string;
    createdAt: string;
  }>;
  operatorSessions: Array<{
    id: string;
    title: string;
    modelId: string | null;
    status: string;
    updatedAt: string;
  }>;
};

export async function loadAdminOverview(): Promise<AdminOverview> {
  await ensureStudioDatabase();
  const now = new Date();
  const [users, auditEntries, grants, sessions, credentialAccounts, activeSessions] = await Promise.all([
    db.select().from(user).orderBy(desc(user.updatedAt)).limit(200),
    db.select().from(studioAuditLog).orderBy(desc(studioAuditLog.createdAt)).limit(25),
    db.select().from(credentialGrants).orderBy(desc(credentialGrants.createdAt)).limit(25),
    db.select().from(operatorSessions).orderBy(desc(operatorSessions.updatedAt)).limit(25),
    db.select({
      userId: account.userId,
    }).from(account).where(eq(account.providerId, "credential")),
    db.select({
      userId: sessionTable.userId,
    }).from(sessionTable).where(gt(sessionTable.expiresAt, now)),
  ]);
  const usersWithPassword = new Set(credentialAccounts.map((row) => row.userId));
  const activeSessionCounts = countByUserId(activeSessions);

  return {
    users: users.map((row) => serializeAdminUser(row, {
      hasPassword: usersWithPassword.has(row.id),
      activeSessionCount: activeSessionCounts.get(row.id) ?? 0,
    })),
    auditEntries: auditEntries.map((row) => ({
      id: row.id,
      userId: row.userId,
      targetId: row.targetId,
      action: row.action,
      subjectType: row.subjectType,
      subjectId: row.subjectId,
      createdAt: row.createdAt.toISOString(),
    })),
    credentialGrants: grants.map((row) => ({
      id: row.id,
      targetId: row.targetId,
      category: row.category,
      label: row.label,
      createdAt: row.createdAt.toISOString(),
    })),
    operatorSessions: sessions.map((row) => ({
      id: row.id,
      title: row.title,
      modelId: row.modelId,
      status: row.status,
      updatedAt: row.updatedAt.toISOString(),
    })),
  };
}

export type AdminMutationContext = {
  headers: Headers;
  session: StudioAuthSession;
};

export type CreateStudioUserInput = {
  name: string;
  email: string;
  role: StudioRole;
  password: string;
  emailVerified?: boolean;
};

export type UpdateStudioUserInput = {
  userId: string;
  name?: string;
  email?: string;
  role?: StudioRole;
  emailVerified?: boolean;
  banned?: boolean;
  banReason?: string | null;
  banExpires?: string | null;
};

export async function createStudioUser(context: AdminMutationContext, input: CreateStudioUserInput) {
  requirePermission(context.session, "admin:manage");
  await ensureStudioDatabase();
  const email = normalizeEmail(input.email);
  const name = input.name.trim();
  if (!name) throw new Error("Name is required.");
  if (!email) throw new Error("A valid email is required.");
  if (input.password.length < 8) throw new Error("Password must be at least 8 characters.");

  const result = await auth.api.createUser({
    headers: context.headers,
    body: {
      email,
      name,
      password: input.password,
      role: input.role,
      data: {
        emailVerified: input.emailVerified ?? true,
      },
    },
  }) as { user: { id: string } };

  await audit({
    userId: context.session.user.id,
    action: "studio.admin.user.created",
    subjectType: "user",
    subjectId: result.user.id,
    metadata: { email, role: input.role },
  });

  return loadAdminUser(result.user.id);
}

export async function updateStudioUser(context: AdminMutationContext, input: UpdateStudioUserInput) {
  requirePermission(context.session, "admin:manage");
  await ensureStudioDatabase();
  const data: Record<string, unknown> = {};

  if (input.name !== undefined) {
    const name = input.name.trim();
    if (!name) throw new Error("Name is required.");
    data.name = name;
  }
  if (input.email !== undefined) {
    const email = normalizeEmail(input.email);
    if (!email) throw new Error("A valid email is required.");
    data.email = email;
  }
  if (input.role !== undefined) {
    if (input.userId === context.session.user.id && input.role !== "admin") {
      throw new StudioAuthError("You cannot remove your own admin role.", 400);
    }
    data.role = input.role;
  }
  if (input.emailVerified !== undefined) data.emailVerified = input.emailVerified;
  if (input.banned !== undefined) {
    if (input.userId === context.session.user.id && input.banned) {
      throw new StudioAuthError("You cannot disable your own account.", 400);
    }
    data.banned = input.banned;
    data.banReason = input.banned ? input.banReason?.trim() || "Disabled by Studio admin" : null;
    data.banExpires = input.banned && input.banExpires ? new Date(input.banExpires) : null;
  }

  if (!Object.keys(data).length) throw new Error("No user settings were changed.");

  await auth.api.adminUpdateUser({
    headers: context.headers,
    body: {
      userId: input.userId,
      data,
    },
  });

  await audit({
    userId: context.session.user.id,
    action: "studio.admin.user.updated",
    subjectType: "user",
    subjectId: input.userId,
    metadata: { changed: Object.keys(data) },
  });

  return loadAdminUser(input.userId);
}

export async function setStudioUserPassword(context: AdminMutationContext, input: { userId: string; newPassword: string }) {
  requirePermission(context.session, "admin:manage");
  await ensureStudioDatabase();
  if (input.newPassword.length < 8) throw new Error("Password must be at least 8 characters.");

  await auth.api.setUserPassword({
    headers: context.headers,
    body: {
      userId: input.userId,
      newPassword: input.newPassword,
    },
  });
  if (input.userId !== context.session.user.id) {
    await auth.api.revokeUserSessions({
      headers: context.headers,
      body: {
        userId: input.userId,
      },
    });
  }

  await audit({
    userId: context.session.user.id,
    action: "studio.admin.user.password_reset",
    subjectType: "user",
    subjectId: input.userId,
    metadata: { revokedSessions: input.userId !== context.session.user.id },
  });

  return loadAdminUser(input.userId);
}

export async function revokeStudioUserSessions(context: AdminMutationContext, userId: string) {
  requirePermission(context.session, "admin:manage");
  await ensureStudioDatabase();
  if (userId === context.session.user.id) {
    throw new StudioAuthError("You cannot revoke your own active admin session from here.", 400);
  }

  await auth.api.revokeUserSessions({
    headers: context.headers,
    body: { userId },
  });

  await audit({
    userId: context.session.user.id,
    action: "studio.admin.user.sessions_revoked",
    subjectType: "user",
    subjectId: userId,
  });

  return loadAdminUser(userId);
}

export function adminErrorResponse(error: unknown) {
  if (error instanceof StudioAuthError) {
    return Response.json({ error: error.message }, { status: error.status });
  }
  const status = errorStatus(error) ?? 400;
  return Response.json({ error: errorMessage(error) }, { status });
}

async function loadAdminUser(userId: string): Promise<AdminOverview["users"][number]> {
  const [row] = await db.select().from(user).where(eq(user.id, userId)).limit(1);
  if (!row) throw new Error("User not found.");
  const now = new Date();
  const [credentialRows, activeSessions] = await Promise.all([
    db.select({ id: account.id }).from(account).where(and(eq(account.userId, userId), eq(account.providerId, "credential"))).limit(1),
    db.select({ id: sessionTable.id }).from(sessionTable).where(and(eq(sessionTable.userId, userId), gt(sessionTable.expiresAt, now))),
  ]);
  return serializeAdminUser(row, {
    hasPassword: credentialRows.length > 0,
    activeSessionCount: activeSessions.length,
  });
}

function serializeAdminUser(
  row: typeof user.$inferSelect,
  details: { hasPassword: boolean; activeSessionCount: number },
): AdminOverview["users"][number] {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    emailVerified: row.emailVerified,
    banned: row.banned,
    banReason: row.banReason,
    banExpires: row.banExpires?.toISOString() ?? null,
    hasPassword: details.hasPassword,
    activeSessionCount: details.activeSessionCount,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

function countByUserId(rows: Array<{ userId: string }>) {
  const counts = new Map<string, number>();
  for (const row of rows) {
    counts.set(row.userId, (counts.get(row.userId) ?? 0) + 1);
  }
  return counts;
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
