import { randomUUID } from "node:crypto";
import { and, asc, desc, eq } from "drizzle-orm";
import { audit } from "@/server/audit";
import { db } from "@/server/db/client";
import { operatorArtifacts, operatorMessages, operatorSessions } from "@/server/db/schema";
import { currentTarget } from "@/server/target";

export async function listOperatorSessions(userId: string, includeAll = false) {
  return await db.select().from(operatorSessions)
    .where(includeAll ? undefined : eq(operatorSessions.userId, userId))
    .orderBy(desc(operatorSessions.updatedAt))
    .limit(50);
}

export async function getOperatorSessionDetail(input: {
  sessionId: string;
  userId: string;
  includeAll?: boolean;
}) {
  const [session] = await db.select().from(operatorSessions)
    .where(input.includeAll
      ? eq(operatorSessions.id, input.sessionId)
      : and(eq(operatorSessions.id, input.sessionId), eq(operatorSessions.userId, input.userId)))
    .limit(1);
  if (!session) return null;
  const [messages, artifacts] = await Promise.all([
    db.select().from(operatorMessages).where(eq(operatorMessages.sessionId, input.sessionId)).orderBy(asc(operatorMessages.createdAt)),
    db.select().from(operatorArtifacts).where(eq(operatorArtifacts.sessionId, input.sessionId)).orderBy(desc(operatorArtifacts.updatedAt)),
  ]);
  return {
    session,
    messages: messages.map((message) => ({
      id: message.id,
      role: message.role,
      content: JSON.parse(message.contentJson) as unknown,
      createdAt: message.createdAt.toISOString(),
    })),
    artifacts: artifacts.map((artifact) => ({
      id: artifact.id,
      type: artifact.type,
      title: artifact.title,
      artifact: JSON.parse(artifact.artifactJson) as unknown,
      artifactKey: artifact.artifactKey,
      createdAt: artifact.createdAt.toISOString(),
      updatedAt: artifact.updatedAt.toISOString(),
    })),
  };
}

export async function createOperatorSession(input: {
  userId: string;
  targetId?: string;
  title?: string;
  modelId?: string;
}) {
  const target = await currentTarget();
  const now = new Date();
  const session = {
    id: randomUUID(),
    targetId: input.targetId ?? target.target.id,
    userId: input.userId,
    title: input.title?.trim() || "New Studio Operator session",
    modelId: input.modelId ?? null,
    status: "active" as const,
    runtimeSessionId: null,
    createdAt: now,
    updatedAt: now,
  };
  await db.insert(operatorSessions).values(session);
  await audit({
    userId: input.userId,
    targetId: session.targetId,
    action: "operator.session.created",
    subjectType: "operator_session",
    subjectId: session.id,
    metadata: { modelId: input.modelId },
  });
  return session;
}

export async function renameOperatorSession(input: {
  sessionId: string;
  userId: string;
  title: string;
  includeAll?: boolean;
}) {
  const [session] = await db.select().from(operatorSessions)
    .where(input.includeAll
      ? eq(operatorSessions.id, input.sessionId)
      : and(eq(operatorSessions.id, input.sessionId), eq(operatorSessions.userId, input.userId)))
    .limit(1);
  if (!session) return null;

  const now = new Date();
  const title = input.title.trim().slice(0, 120);
  await db.update(operatorSessions)
    .set({ title, updatedAt: now })
    .where(eq(operatorSessions.id, input.sessionId));
  await audit({
    userId: input.userId,
    targetId: session.targetId,
    action: "operator.session.renamed",
    subjectType: "operator_session",
    subjectId: session.id,
    metadata: { title },
  });
  return { ...session, title, updatedAt: now };
}

export async function deleteOperatorSession(input: {
  sessionId: string;
  userId: string;
  includeAll?: boolean;
}) {
  const [session] = await db.select().from(operatorSessions)
    .where(input.includeAll
      ? eq(operatorSessions.id, input.sessionId)
      : and(eq(operatorSessions.id, input.sessionId), eq(operatorSessions.userId, input.userId)))
    .limit(1);
  if (!session) return false;

  await audit({
    userId: input.userId,
    targetId: session.targetId,
    action: "operator.session.deleted",
    subjectType: "operator_session",
    subjectId: session.id,
    metadata: { title: session.title },
  });
  await db.delete(operatorSessions).where(eq(operatorSessions.id, input.sessionId));
  return true;
}

export async function appendOperatorMessage(input: {
  sessionId: string;
  role: "user" | "assistant" | "system" | "tool";
  content: unknown;
}) {
  const now = new Date();
  await db.insert(operatorMessages).values({
    id: randomUUID(),
    sessionId: input.sessionId,
    role: input.role,
    contentJson: JSON.stringify(input.content),
    createdAt: now,
  });
  await db.update(operatorSessions).set({ updatedAt: now }).where(eq(operatorSessions.id, input.sessionId));
}

export async function upsertOperatorArtifact(input: {
  sessionId: string;
  type: string;
  title: string;
  artifact: unknown;
  artifactKey?: string | null;
}) {
  const now = new Date();
  const row = {
    id: randomUUID(),
    sessionId: input.sessionId,
    type: input.type,
    title: input.title,
    artifactJson: JSON.stringify(input.artifact),
    artifactKey: input.artifactKey ?? null,
    createdAt: now,
    updatedAt: now,
  };
  await db.insert(operatorArtifacts).values(row);
  await db.update(operatorSessions).set({ updatedAt: now }).where(eq(operatorSessions.id, input.sessionId));
  return row;
}
