import { randomUUID } from "node:crypto";
import { desc, eq } from "drizzle-orm";
import type { StudioAgentIntrospection, StudioConversationSummary, StudioTargetManifest } from "@cognidesk/studio-contracts";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { studioConversations } from "@/server/db/schema";

export type StudioConversationRow = StudioConversationSummary & {
  customerLabel: string;
  summary: string;
  satisfaction: "positive" | "neutral" | "negative";
};

export async function ensureDemoConversations(
  manifest: StudioTargetManifest,
  introspection: StudioAgentIntrospection | null = null,
) {
  await ensureStudioDatabase();
  const [existing] = await db.select({ id: studioConversations.id })
    .from(studioConversations)
    .where(eq(studioConversations.targetId, manifest.target.id))
    .limit(1);
  if (existing) return;

  const journeys = introspection?.journeys ?? [];
  const journeyIds = journeys.map((journey) => journey.id);
  const agentId = introspection?.agent.id ?? manifest.target.id;
  const now = Date.now();
  const demoRows = [
    {
      customerLabel: "Mina Bauer",
      lifecycle: "closed" as const,
      summary: "Resolved a same-day rebooking after a delayed Vienna to Berlin segment.",
      journeyId: pickJourney(journeyIds, "book", 0),
      stateIds: ["select_flight", "confirm_booking"],
      traceIds: ["trace-rebook-20260527"],
      eventCount: 42,
      satisfaction: "positive" as const,
      createdHoursAgo: 31,
      updatedHoursAgo: 29,
    },
    {
      customerLabel: "Jonas Weber",
      lifecycle: "handoff" as const,
      summary: "Escalated baggage compensation after the assistant gathered documents and claim details.",
      journeyId: pickJourney(journeyIds, "baggage", 1),
      stateIds: ["collect_documents"],
      traceIds: ["trace-baggage-20260527"],
      eventCount: 58,
      satisfaction: "neutral" as const,
      createdHoursAgo: 20,
      updatedHoursAgo: 18,
    },
    {
      customerLabel: "Sara Novak",
      lifecycle: "closed" as const,
      summary: "Explained ticket status, fare conditions, and refund timing.",
      journeyId: pickJourney(journeyIds, "ticket", 2),
      stateIds: ["lookup_ticket", "explain_status"],
      traceIds: ["trace-ticket-20260527"],
      eventCount: 27,
      satisfaction: "positive" as const,
      createdHoursAgo: 12,
      updatedHoursAgo: 11,
    },
    {
      customerLabel: "Theo Klein",
      lifecycle: "active" as const,
      summary: "Currently comparing disruption options for a missed connection.",
      journeyId: pickJourney(journeyIds, "disruption", 3),
      stateIds: ["find_alternatives"],
      traceIds: ["trace-disruption-20260527"],
      eventCount: 19,
      satisfaction: "neutral" as const,
      createdHoursAgo: 4,
      updatedHoursAgo: 1,
    },
    {
      customerLabel: "Eva Schneider",
      lifecycle: "closed" as const,
      summary: "Completed check-in guidance and seat selection troubleshooting.",
      journeyId: pickJourney(journeyIds, "check", 4),
      stateIds: ["verify_booking", "resolve_checkin"],
      traceIds: ["trace-checkin-20260527"],
      eventCount: 35,
      satisfaction: "positive" as const,
      createdHoursAgo: 6,
      updatedHoursAgo: 5,
    },
    {
      customerLabel: "Noah Berger",
      lifecycle: "closed" as const,
      summary: "Could not complete a voluntary change because payment authorization failed twice.",
      journeyId: pickJourney(journeyIds, "book", 0),
      stateIds: ["payment_failed"],
      traceIds: ["trace-payment-20260527"],
      eventCount: 33,
      satisfaction: "negative" as const,
      createdHoursAgo: 48,
      updatedHoursAgo: 47,
    },
  ];

  await db.insert(studioConversations).values(demoRows.map((row) => ({
    id: randomUUID(),
    targetId: manifest.target.id,
    agentId,
    customerLabel: row.customerLabel,
    lifecycle: row.lifecycle,
    summary: row.summary,
    activeJourneyId: row.journeyId,
    activeStateIdsJson: JSON.stringify(row.stateIds),
    traceIdsJson: JSON.stringify(row.traceIds),
    eventCount: row.eventCount,
    satisfaction: row.satisfaction,
    createdAt: new Date(now - row.createdHoursAgo * 60 * 60 * 1000),
    updatedAt: new Date(now - row.updatedHoursAgo * 60 * 60 * 1000),
  })));
}

export async function listStudioConversations(targetId: string) {
  await ensureStudioDatabase();
  const rows = await db.select().from(studioConversations)
    .where(eq(studioConversations.targetId, targetId))
    .orderBy(desc(studioConversations.updatedAt))
    .limit(50);
  return rows.map((row): StudioConversationRow => ({
    id: row.id,
    agentId: row.agentId,
    lifecycle: row.lifecycle,
    customerLabel: row.customerLabel,
    summary: row.summary,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    ...(row.activeJourneyId ? { activeJourneyId: row.activeJourneyId } : {}),
    activeStateIds: parseStringArray(row.activeStateIdsJson),
    traceIds: parseStringArray(row.traceIdsJson),
    eventCount: row.eventCount,
    satisfaction: row.satisfaction,
  }));
}

function pickJourney(journeyIds: string[], hint: string, fallbackIndex: number) {
  return journeyIds.find((id) => id.toLowerCase().includes(hint))
    ?? journeyIds[fallbackIndex % Math.max(1, journeyIds.length)]
    ?? null;
}

function parseStringArray(value: string) {
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}
