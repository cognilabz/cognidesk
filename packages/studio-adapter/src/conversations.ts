import { runtimeCustomerRelationForContext, type CognideskRuntime, type ConversationRecord } from "@cognidesk/core";
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
  const customerRelation = runtimeCustomerRelationForContext(conversation.context);
  return StudioConversationSummarySchema.parse({
    id: conversation.id,
    agentId: conversation.agentId,
    lifecycle: conversation.lifecycle,
    createdAt: conversation.createdAt,
    updatedAt: conversation.updatedAt,
    ...(customerRelation ? { customerRelation } : {}),
    activeJourneyId: snapshot?.activeJourneyId,
    activeStateIds: snapshot?.activeStateIds ?? [],
    eventCount: events.length,
    traceIds: [...new Set(events.map((event) => event.telemetry?.traceId).filter((traceId): traceId is string => Boolean(traceId)))],
  });
}
