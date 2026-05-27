import { desc } from "drizzle-orm";
import { db, ensureStudioDatabase } from "@/server/db/client";
import {
  credentialGrants,
  operatorSessions,
  studioAuditLog,
  user,
} from "@/server/db/schema";

export type AdminOverview = {
  users: Array<{
    id: string;
    name: string;
    email: string;
    role: string;
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
  const [users, auditEntries, grants, sessions] = await Promise.all([
    db.select().from(user).orderBy(desc(user.updatedAt)).limit(25),
    db.select().from(studioAuditLog).orderBy(desc(studioAuditLog.createdAt)).limit(25),
    db.select().from(credentialGrants).orderBy(desc(credentialGrants.createdAt)).limit(25),
    db.select().from(operatorSessions).orderBy(desc(operatorSessions.updatedAt)).limit(25),
  ]);

  return {
    users: users.map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      role: row.role,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
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
