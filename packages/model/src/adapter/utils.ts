import {
  tool as aiTool,
  type EmbeddingModel,
  type LanguageModel,
  type ModelMessage as AiModelMessage,
  type ProviderMetadata,
  type ToolSet,
} from "ai";
import type {
  ModelMessage,
  ModelToolCall,
  ModelToolDefinition,
  UsageRecord,
} from "@cognidesk/core";
import type { ModelJsonObject } from "./types.js";

export function splitSystemMessages(messages: ModelMessage[]) {
  const system = messages
    .filter((message) => message.role === "system")
    .map((message) => message.content.trim())
    .filter(Boolean)
    .join("\n\n");
  return {
    ...(system ? { system } : {}),
    messages: messages.filter((message) => message.role !== "system"),
  };
}

export function inferModelMetadata(
  model: LanguageModel | EmbeddingModel,
  overrides: { providerId?: string; modelId?: string },
) {
  const provider = typeof model === "object" && model !== null && "provider" in model
    ? String((model as { provider: unknown }).provider)
    : undefined;
  const modelId = typeof model === "object" && model !== null && "modelId" in model
    ? String((model as { modelId: unknown }).modelId)
    : typeof model === "string" ? model : "unknown";
  return {
    providerId: overrides.providerId ?? provider ?? inferProviderIdFromString(modelId),
    modelId: overrides.modelId ?? modelId,
  };
}

export function toAiTools(tools: ModelToolDefinition[]): ToolSet {
  return Object.fromEntries(tools.map((definition) => [
    definition.name,
    aiTool({
      ...(definition.description ? { description: definition.description } : {}),
      inputSchema: definition.input,
    }),
  ])) as ToolSet;
}

export function toAiMessage(message: ModelMessage): AiModelMessage {
  if (message.role === "tool") {
    return {
      role: "tool",
      content: [{
        type: "tool-result",
        toolCallId: message.toolCallId ?? message.name ?? "tool_call",
        toolName: message.name ?? "tool",
        output: {
          type: "json",
          value: parseJsonValue(message.content) as never,
        },
      }],
    };
  }
  if (message.role === "assistant" && message.toolCalls?.length) {
    return {
      role: "assistant",
      content: [
        ...(message.content.trim() ? [{ type: "text" as const, text: message.content }] : []),
        ...message.toolCalls.map((toolCall) => ({
          type: "tool-call" as const,
          toolCallId: toolCall.id,
          toolName: toolCall.name,
          input: toolCall.input,
        })),
      ],
    };
  }
  return {
    role: message.role,
    content: message.content,
  } as AiModelMessage;
}

export function toModelToolCall(toolCall: {
  toolCallId: string;
  toolName: string;
  input: unknown;
  providerMetadata?: ProviderMetadata;
}): ModelToolCall {
  return {
    id: toolCall.toolCallId,
    name: toolCall.toolName,
    input: toolCall.input,
    ...(toolCall.providerMetadata ? { providerMetadata: toolCall.providerMetadata as ModelJsonObject } : {}),
  };
}

export function mapLanguageUsage(usage: {
  inputTokens?: number | undefined;
  outputTokens?: number | undefined;
  totalTokens?: number | undefined;
  inputTokenDetails?: {
    cacheReadTokens?: number | undefined;
  };
  outputTokenDetails?: {
    reasoningTokens?: number | undefined;
  };
}): UsageRecord {
  return usageRecord({
    inputTokens: usage.inputTokens,
    outputTokens: usage.outputTokens,
    cachedInputTokens: usage.inputTokenDetails?.cacheReadTokens,
    reasoningTokens: usage.outputTokenDetails?.reasoningTokens,
    totalTokens: usage.totalTokens,
  });
}

export function usageRecord(values: Partial<Record<NumericUsageKey, number | undefined>>): UsageRecord {
  const usage: UsageRecord = {};
  for (const [key, value] of Object.entries(values) as Array<[NumericUsageKey, number | undefined]>) {
    if (value !== undefined) {
      (usage as Record<NumericUsageKey, number>)[key] = value;
    }
  }
  return usage;
}

type NumericUsageKey = Exclude<keyof UsageRecord, "providerMetadata">;

function inferProviderIdFromString(modelId: string) {
  if (modelId.includes(":")) return modelId.slice(0, modelId.indexOf(":"));
  if (modelId.includes("/")) return modelId.slice(0, modelId.indexOf("/"));
  return "ai-sdk";
}

function parseJsonValue(value: string) {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return value;
  }
}
