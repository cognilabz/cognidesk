import type { CognideskRuntime, ConversationRecord } from "@cognidesk/core";
import {
  StudioConversationSummarySchema,
  type StudioConversationSummary,
} from "@cognidesk/studio-contracts";
import type { StudioAdapterRuntime } from "./types.js";

export async function summarizeConversation(
  conversation: ConversationRecord,
  runtime: StudioAdapterRuntime | CognideskRuntime,
): Promise<StudioConversationSummary> {
  const events = await runtime.listEvents(conversation.id, 0);
  const snapshot = runtime.getSnapshot ? await runtime.getSnapshot(conversation.id) : null;
  return StudioConversationSummarySchema.parse({
    id: conversation.id,
    agentId: conversation.agentId,
    lifecycle: conversation.lifecycle,
    createdAt: conversation.createdAt,
    updatedAt: conversation.updatedAt,
    activeJourneyId: snapshot?.activeJourneyId,
    activeStateIds: snapshot?.activeStateIds ?? [],
    eventCount: events.length,
    traceIds: [...new Set(events.map((event) => event.telemetry?.traceId).filter((traceId): traceId is string => Boolean(traceId)))],
  });
}
