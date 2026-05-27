import { randomUUID } from "node:crypto";
import { db } from "@/server/db/client";
import { studioAuditLog } from "@/server/db/schema";

export async function audit(input: {
  userId?: string | null;
  targetId?: string | null;
  action: string;
  subjectType: string;
  subjectId?: string | null;
  metadata?: unknown;
}) {
  await db.insert(studioAuditLog).values({
    id: randomUUID(),
    userId: input.userId ?? null,
    targetId: input.targetId ?? null,
    action: input.action,
    subjectType: input.subjectType,
    subjectId: input.subjectId ?? null,
    metadataJson: JSON.stringify(input.metadata ?? {}),
    createdAt: new Date(),
  });
}
