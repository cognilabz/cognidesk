import type { CognideskRuntime, ConversationRecord, RuntimeEvent, UsageRecord } from "@cognidesk/core";
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
  const tokenUsage = aggregateTokenUsage(events);
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
    ...(tokenUsage ? { tokenUsage } : {}),
  });
}

function aggregateTokenUsage(events: RuntimeEvent[]) {
  const usages = events.map((event) => usageFromEvent(event)).filter((usage): usage is UsageRecord => Boolean(usage));
  if (!usages.length) return null;

  let inputTokens = 0;
  let outputTokens = 0;
  let cachedInputTokens = 0;
  let reasoningTokens = 0;
  let totalTokens = 0;
  let hasInputTokens = false;
  let hasOutputTokens = false;
  let hasCachedInputTokens = false;
  let hasReasoningTokens = false;

  for (const usage of usages) {
    if (typeof usage.inputTokens === "number") {
      inputTokens += usage.inputTokens;
      hasInputTokens = true;
    }
    if (typeof usage.outputTokens === "number") {
      outputTokens += usage.outputTokens;
      hasOutputTokens = true;
    }
    if (typeof usage.cachedInputTokens === "number") {
      cachedInputTokens += usage.cachedInputTokens;
      hasCachedInputTokens = true;
    }
    if (typeof usage.reasoningTokens === "number") {
      reasoningTokens += usage.reasoningTokens;
      hasReasoningTokens = true;
    }
    if (typeof usage.totalTokens === "number") {
      totalTokens += usage.totalTokens;
    } else {
      totalTokens += (usage.inputTokens ?? 0) + (usage.outputTokens ?? 0);
    }
  }

  return {
    ...(hasInputTokens ? { inputTokens } : {}),
    ...(hasOutputTokens ? { outputTokens } : {}),
    ...(hasCachedInputTokens ? { cachedInputTokens } : {}),
    ...(hasReasoningTokens ? { reasoningTokens } : {}),
    totalTokens,
  };
}

function usageFromEvent(event: RuntimeEvent) {
  if ((event.type === "message.completed" || event.type === "message.generated") && event.data.usage) {
    return event.data.usage;
  }
  return null;
}
