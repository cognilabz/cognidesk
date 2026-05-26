import type { CompiledAgent, CompiledJourney } from "../definition.js";
import type { TraceEvent } from "../observability.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  AnyTool,
  ModelAdapter,
  ModelMessage,
  ModelToolDefinition,
  RuntimeEvent,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import { createCitationSegments as createCitationSegmentsWithDeps } from "./citations.js";
import {
  compactConversation as compactConversationWithDeps,
  compactIfNeeded as compactIfNeededWithDeps,
} from "./compaction.js";
import {
  generateResponseWithTools as generateResponseWithToolsWithDeps,
  generateTextWithTrace as generateTextWithTraceWithDeps,
} from "./model-runner.js";
import {
  redactAssistantMessage as redactAssistantMessageWithOptions,
  redactModelMessages as redactModelMessagesWithOptions,
  redactUserMessage as redactUserMessageWithOptions,
} from "./privacy.js";
import type {
  CompactConversationInput,
  CompactConversationResult,
  RetrievedKnowledgeItem,
  RuntimeEventEmitter,
  RuntimeOptions,
  StateMachineTurnResult,
} from "./types.js";

export async function traceRuntimeEvent(options: RuntimeOptions, event: TraceEvent) {
  try {
    await options.observability?.onTraceEvent?.(event);
  } catch {
    // Observability hooks must not affect conversation execution.
  }
}

export function requireRuntimeAgent(options: RuntimeOptions) {
  if (!options.agent) throw new Error("Runtime requires an agent to handle messages.");
  return options.agent;
}

export function requireRuntimeModels(options: RuntimeOptions) {
  if (!options.models) throw new Error("Runtime requires models to handle messages.");
  return options.models;
}

export function generateRuntimeTextWithTrace(
  options: RuntimeOptions,
  trace: (event: TraceEvent) => Promise<void>,
  input: {
    conversationId: string;
    model: ModelAdapter;
    input: TextGenerationInput;
  },
): Promise<TextGenerationOutput> {
  return generateTextWithTraceWithDeps({
    ...input,
    options,
    trace,
  });
}

export function generateRuntimeResponseWithTools(
  options: RuntimeOptions,
  trace: (event: TraceEvent) => Promise<void>,
  requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>,
  applyBuiltInLifecycleTool: (input: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: RuntimeEventEmitter;
  }) => Promise<boolean>,
  args: {
    conversation: ConversationRecord;
    model: ModelAdapter;
    messages: ModelMessage[];
    tools: AnyTool[];
    modelTools: ModelToolDefinition[];
    selectedJourney: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
): Promise<TextGenerationOutput> {
  return generateResponseWithToolsWithDeps({
    ...args,
    options,
    trace,
    requireConversationRecord,
    applyBuiltInLifecycleTool,
  });
}

export async function compactRuntimeConversation<TSummary = unknown>(
  deps: {
    options: RuntimeOptions;
    requireModels: () => AgentModelSet;
    requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>;
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>;
    emit: RuntimeEventEmitter;
  },
  input: CompactConversationInput,
): Promise<CompactConversationResult<TSummary>> {
  const models = deps.requireModels();
  const conversation = await deps.requireConversationRecord(input.conversationId);
  return compactConversationWithDeps<TSummary>({
    options: deps.options,
    models,
    conversation,
    input,
    generateTextWithTrace: deps.generateTextWithTrace,
    emit: deps.emit,
  });
}

export async function compactRuntimeIfNeeded(
  deps: {
    options: RuntimeOptions;
    requireModels: () => AgentModelSet;
    requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>;
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>;
    emit: RuntimeEventEmitter;
  },
  input: {
    conversationId: string;
    schemaVersion?: string;
    signal?: AbortSignal;
  },
) {
  const models = deps.requireModels();
  return deps.requireConversationRecord(input.conversationId).then((conversation) => compactIfNeededWithDeps({
    options: deps.options,
    models,
    conversation,
    input,
    generateTextWithTrace: deps.generateTextWithTrace,
    emit: deps.emit,
  }));
}

export function createRuntimeCitationSegments(
  deps: {
    options: RuntimeOptions;
    requireModels: () => AgentModelSet;
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>;
    emit: RuntimeEventEmitter;
  },
  args: {
    agent: CompiledAgent;
    conversation: ConversationRecord;
    text: string;
    knowledge: RetrievedKnowledgeItem[];
    signal?: AbortSignal;
  },
) {
  const models = deps.requireModels();
  return createCitationSegmentsWithDeps({
    ...args,
    options: deps.options,
    models,
    generateTextWithTrace: deps.generateTextWithTrace,
    emit: deps.emit,
  });
}

export function redactRuntimeUserMessage(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  text: string,
) {
  return redactUserMessageWithOptions(options, conversation, text);
}

export function redactRuntimeModelMessages(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  messages: ModelMessage[],
) {
  return redactModelMessagesWithOptions(options, conversation, messages);
}

export function redactRuntimeAssistantMessage(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  text: string,
) {
  return redactAssistantMessageWithOptions(options, conversation, text);
}
