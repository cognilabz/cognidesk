import {
  embed,
  generateText,
  Output,
  tool as aiTool,
  type EmbeddingModel,
  type LanguageModel,
  type ModelMessage as AiModelMessage,
  type ProviderMetadata,
  type ToolSet,
} from "ai";
import type {
  EmbeddingInput,
  EmbeddingOutput,
  ModelAdapter,
  ModelMessage,
  ModelPromptProfile,
  ModelToolCall,
  ModelToolDefinition,
  PromptProfileRole,
  TextGenerationInput,
  TextGenerationOutput,
  UsageRecord,
} from "@cognidesk/core";

export type RoleInstructionMap = Partial<Record<PromptProfileRole, string>>;

export interface AiSdkModelAdapterOptions {
  provider: string;
  model: string;
  languageModel: LanguageModel;
  embeddingModel?: EmbeddingModel;
  embeddingModelId?: string;
  promptProfile?: ModelPromptProfile;
  temperature?: number;
  maxOutputTokens?: number;
  headers?: Record<string, string>;
  providerOptions?: unknown;
}

export function aiSdkModel(options: AiSdkModelAdapterOptions): ModelAdapter {
  return {
    provider: options.provider,
    model: options.model,
    ...(options.promptProfile ? { promptProfile: options.promptProfile } : {}),
    async generateText(input: TextGenerationInput): Promise<TextGenerationOutput> {
      const result = await generateText({
        model: options.languageModel,
        messages: input.messages.map(toAiMessage),
        ...(input.responseFormat ? { output: Output.object({ schema: input.responseFormat, name: "cognidesk_response" }) } : {}),
        ...(input.tools?.length ? { tools: toAiTools(input.tools) } : {}),
        ...(input.toolChoice ? { toolChoice: input.toolChoice } : {}),
        ...(options.temperature !== undefined ? { temperature: options.temperature } : {}),
        ...(options.maxOutputTokens !== undefined ? { maxOutputTokens: options.maxOutputTokens } : {}),
        ...(options.headers ? { headers: options.headers } : {}),
        ...(options.providerOptions ? { providerOptions: options.providerOptions } : {}),
        ...(input.signal ? { abortSignal: input.signal } : {}),
      } as unknown as Parameters<typeof generateText>[0]);
      const structured = input.responseFormat ? result.output : undefined;
      const text = result.text || (structured !== undefined ? JSON.stringify(structured) : "");
      return {
        text,
        ...(structured !== undefined ? { structured } : {}),
        ...(result.toolCalls.length > 0 ? { toolCalls: result.toolCalls.map(toModelToolCall) } : {}),
        usage: mapLanguageUsage(result.totalUsage),
        providerMetadata: {
          ...(result.response?.id ? { id: result.response.id } : {}),
          ...(result.response?.modelId ? { model: result.response.modelId } : {}),
          ...(result.providerMetadata ? { provider: result.providerMetadata } : {}),
          ...(result.finishReason ? { finishReason: result.finishReason } : {}),
        },
      };
    },
    async embed(input: EmbeddingInput): Promise<EmbeddingOutput> {
      if (!options.embeddingModel) {
        throw new Error(`${options.provider} model '${options.model}' does not have an embedding model configured.`);
      }
      const result = await embed({
        model: options.embeddingModel,
        value: input.text,
        ...(options.headers ? { headers: options.headers } : {}),
        ...(options.providerOptions ? { providerOptions: options.providerOptions } : {}),
        ...(input.signal ? { abortSignal: input.signal } : {}),
      } as Parameters<typeof embed>[0]);
      return {
        embedding: [...result.embedding],
        model: options.embeddingModelId ?? options.model,
        dimensions: result.embedding.length,
        usage: usageRecord({
          inputTokens: result.usage.tokens,
          totalTokens: result.usage.tokens,
        }),
        ...(result.providerMetadata ? { providerMetadata: result.providerMetadata as Record<string, unknown> } : {}),
      };
    },
  };
}

export function instructionPromptProfile(options: {
  id: string;
  description?: string;
  roleInstructions?: RoleInstructionMap;
  instruction?: string;
}): ModelPromptProfile {
  const roleTransforms = Object.fromEntries(Object.entries(options.roleInstructions ?? {}).map(([role, instruction]) => [
    role,
    ({ messages }: { messages: ModelMessage[] }) => appendSystemInstruction(messages, instruction ?? ""),
  ])) as ModelPromptProfile["roleTransforms"];
  return {
    id: options.id,
    ...(options.description ? { description: options.description } : {}),
    transformMessages: ({ messages }) => (
      options.instruction ? appendSystemInstruction(messages, options.instruction) : messages
    ),
    ...(roleTransforms && Object.keys(roleTransforms).length > 0 ? { roleTransforms } : {}),
  };
}

export function appendSystemInstruction(messages: ModelMessage[], instruction: string): ModelMessage[] {
  if (!instruction.trim()) return messages;
  const [first, ...rest] = messages;
  if (first?.role === "system") {
    return [
      {
        ...first,
        content: [first.content, instruction].filter(Boolean).join("\n"),
      },
      ...rest,
    ];
  }
  return [{ role: "system", content: instruction }, ...messages];
}

function toAiTools(tools: ModelToolDefinition[]): ToolSet {
  return Object.fromEntries(tools.map((definition) => [
    definition.name,
    aiTool({
      ...(definition.description ? { description: definition.description } : {}),
      inputSchema: definition.input,
    }),
  ])) as ToolSet;
}

function toAiMessage(message: ModelMessage): AiModelMessage {
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
      content: message.toolCalls.map((toolCall) => ({
        type: "tool-call",
        toolCallId: toolCall.id,
        toolName: toolCall.name,
        input: toolCall.input,
      })),
    };
  }
  return {
    role: message.role,
    content: message.content,
  } as AiModelMessage;
}

function toModelToolCall(toolCall: {
  toolCallId: string;
  toolName: string;
  input: unknown;
  providerMetadata?: ProviderMetadata;
}): ModelToolCall {
  return {
    id: toolCall.toolCallId,
    name: toolCall.toolName,
    input: toolCall.input,
    ...(toolCall.providerMetadata ? { providerMetadata: toolCall.providerMetadata as Record<string, unknown> } : {}),
  };
}

function mapLanguageUsage(usage: {
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

type NumericUsageKey = Exclude<keyof UsageRecord, "providerMetadata">;

function usageRecord(values: Partial<Record<NumericUsageKey, number | undefined>>): UsageRecord {
  const usage: UsageRecord = {};
  for (const [key, value] of Object.entries(values) as Array<[NumericUsageKey, number | undefined]>) {
    if (value !== undefined) {
      (usage as Record<NumericUsageKey, number>)[key] = value;
    }
  }
  return usage;
}

function parseJsonValue(value: string) {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return value;
  }
}
