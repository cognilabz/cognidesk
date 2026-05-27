import type { UsageRecord } from "./model.js";
import type { RuntimeEventTelemetry } from "../telemetry.js";

export interface RuntimeEventBase<TType extends string, TData> {
  id: string;
  conversationId: string;
  offset: number;
  type: TType;
  createdAt: string;
  telemetry?: RuntimeEventTelemetry;
  data: TData;
}

export type ConversationLifecycle = "active" | "handoff" | "closed";

export interface MessageSegment {
  id: string;
  text: string;
  references?: SupportReference[];
}

export type SupportReference =
  | { type: "knowledge"; id: string; sourceName?: string; title?: string; metadata?: unknown }
  | { type: "toolResult"; id: string };

export type RuntimeEvent =
  | RuntimeEventBase<"message.started", { role: "assistant" | "user" }>
  | RuntimeEventBase<"message.delta", { textDelta: string }>
  | RuntimeEventBase<"message.completed", { text: string; segments?: MessageSegment[]; usage?: UsageRecord; intermediate?: boolean; visibleToModel?: boolean }>
  | RuntimeEventBase<"message.aborted", { reason: string; partialText?: string }>
  | RuntimeEventBase<"journey.candidates.retrieved", { journeyIds: string[] }>
  | RuntimeEventBase<"journey.matched", { candidates: Array<{ journeyId: string; confidence: number; reason?: string }> }>
  | RuntimeEventBase<"journey.activated", { journeyId: string; previousJourneyId?: string }>
  | RuntimeEventBase<"journey.completed", { journeyId: string; stateId?: string; reason?: string }>
  | RuntimeEventBase<"journey.guard.denied", { journeyId: string; stateId?: string; code: string; message?: string; metadata?: Record<string, unknown> }>
  | RuntimeEventBase<"journey.event.emitted", {
      name: string;
      payload: unknown;
      routing: "none" | "activeJourneyOnly" | "full" | "targeted";
      target?: { journeyId?: string; stateId?: string };
    }>
  | RuntimeEventBase<"journey.state.entered", { journeyId: string; stateId: string }>
  | RuntimeEventBase<"journey.extraction.proposed", { journeyId: string; stateId: string; fields: string[] }>
  | RuntimeEventBase<"journey.extraction.accepted", { journeyId: string; stateId: string; fields: string[] }>
  | RuntimeEventBase<"action.started", { actionName: string; journeyId?: string; stateId?: string }>
  | RuntimeEventBase<"action.completed", { actionName: string; success: boolean; journeyId?: string; stateId?: string; error?: string }>
  | RuntimeEventBase<"tool.started", { toolName: string; journeyId?: string; stateId?: string }>
  | RuntimeEventBase<"tool.completed", { toolName: string; success: boolean; journeyId?: string; stateId?: string; result?: unknown; error?: string }>
  | RuntimeEventBase<"knowledge.retrieved", { sourceName: string; itemIds: string[] }>
  | RuntimeEventBase<"ui.prompted", { promptId: string; widgetKind: string; input: unknown }>
  | RuntimeEventBase<"ui.submitted", { promptId: string; widgetKind: string; output: unknown }>
  | RuntimeEventBase<"conversation.compaction.started", { fromOffset: number; toOffset: number }>
  | RuntimeEventBase<"conversation.compaction.completed", { fromOffset: number; toOffset: number; schemaVersion: string }>
  | RuntimeEventBase<"handoff.requested", { reason: string; summary?: string; payload?: unknown }>
  | RuntimeEventBase<"handoff.resumed", { reason?: string; payload?: unknown }>
  | RuntimeEventBase<"conversation.closed", { reason?: string }>
  | RuntimeEventBase<"error", { code: string; message: string; details?: unknown }>
  | RuntimeEventBase<`custom.${string}`, unknown>;
