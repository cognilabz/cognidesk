import type { ModelRole, RuntimeEvent, UsageRecord } from "./types.js";

export type TraceEvent =
  | {
      type: "runtime.event";
      conversationId: string;
      event: RuntimeEvent;
    }
  | {
      type: "model.started";
      conversationId: string;
      role: ModelRole;
      provider: string;
      model: string;
    }
  | {
      type: "model.completed";
      conversationId: string;
      role: ModelRole;
      provider: string;
      model: string;
      usage?: UsageRecord;
    }
  | {
      type: "model.failed";
      conversationId: string;
      role: ModelRole;
      provider: string;
      model: string;
      error: string;
    }
  | {
      type: "tool.started";
      conversationId: string;
      toolName: string;
      journeyId?: string;
      stateId?: string;
    }
  | {
      type: "tool.completed";
      conversationId: string;
      toolName: string;
      success: boolean;
      journeyId?: string;
      stateId?: string;
      error?: string;
    }
  | {
      type: "knowledge.retrieved";
      conversationId: string;
      sourceName: string;
      itemIds: string[];
    };

export interface ObservabilityHooks {
  onTraceEvent?(event: TraceEvent): Promise<void> | void;
}
