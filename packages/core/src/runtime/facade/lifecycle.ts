import {
  applyBuiltInLifecycleTool as applyBuiltInLifecycleToolWithStorage,
  applyConversationClosure as applyConversationClosureWithStorage,
  applyConversationResume as applyConversationResumeWithStorage,
  applyHandoffRequest as applyHandoffRequestWithStorage,
  createLifecycleInterruptionResult as createLifecycleInterruptionResultWithStorage,
  requireActiveConversation,
  requireConversationRecord as requireConversationRecordWithStorage,
} from "../lifecycle.js";
import type {
  HandleUserMessageResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RuntimeEventEmitter,
  RuntimeOptions,
} from "../types.js";
import type { ConversationRecord } from "../../storage.js";
import type { RuntimeEvent } from "../../types.js";

export function requireRuntimeConversation(
  options: RuntimeOptions,
  conversationId: string,
) {
  return requireActiveConversation(options.storage, conversationId);
}

export function requireRuntimeConversationRecord(
  options: RuntimeOptions,
  conversationId: string,
) {
  return requireConversationRecordWithStorage(options.storage, conversationId);
}

export function createRuntimeLifecycleInterruptionResult(
  options: RuntimeOptions,
  args: {
    conversationId: string;
    events: RuntimeEvent[];
  },
): Promise<HandleUserMessageResult | null> {
  return createLifecycleInterruptionResultWithStorage({
    storage: options.storage,
    ...args,
  });
}

export function applyRuntimeConversationClosure(
  options: RuntimeOptions,
  args: {
    conversationId: string;
    reason?: string;
    emit: RuntimeEventEmitter;
  },
): Promise<{ conversation: ConversationRecord }> {
  return applyConversationClosureWithStorage({
    storage: options.storage,
    ...args,
  });
}

export function applyRuntimeHandoffRequest(
  options: RuntimeOptions,
  args: RequestHandoffInput & {
    emit: RuntimeEventEmitter;
  },
) {
  return applyHandoffRequestWithStorage({
    storage: options.storage,
    ...(options.channels ? { channels: options.channels } : {}),
    ...args,
  });
}

export function applyRuntimeConversationResume(
  options: RuntimeOptions,
  args: ResumeConversationInput & {
    emit: RuntimeEventEmitter;
  },
) {
  return applyConversationResumeWithStorage({
    storage: options.storage,
    ...args,
  });
}

export function applyRuntimeBuiltInLifecycleTool(
  options: RuntimeOptions,
  args: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: RuntimeEventEmitter;
  },
) {
  return applyBuiltInLifecycleToolWithStorage({
    storage: options.storage,
    ...(options.channels ? { channels: options.channels } : {}),
    ...args,
  });
}
