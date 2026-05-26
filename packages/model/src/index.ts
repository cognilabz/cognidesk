import {
  embed,
  generateText,
  Output,
  streamText,
  tool as aiTool,
  type EmbeddingModel,
  type LanguageModel,
  type ModelMessage as AiModelMessage,
  type ProviderMetadata,
  type ToolSet,
} from "ai";
import type {
  AgentModelSet,
  EmbeddingInput,
  EmbeddingOutput,
  ModelAdapter,
  ModelMessage,
  ModelPromptProfile,
  ModelToolCall,
  ModelToolDefinition,
  TextGenerationInput,
  TextGenerationOutput,
  UsageRecord,
} from "@cognidesk/core";
import {
  createModelPromptProfile,
  listBuiltInPromptProfiles,
  normalizeLogicalModelSlug,
  type ModelProfileRegistration,
  type PromptOverrideRegistry,
  type PromptProfileOptions,
} from "./prompt-profiles.js";
export {
  promptTemplateFields,
  promptTasks,
  type BundledPromptProfile,
  type PromptProfileMetadata,
  type PromptResearchBasis,
  type PromptTemplateMap,
} from "./prompt-types.js";

export {
  createModelPromptProfile,
  listBuiltInPromptProfiles,
  normalizeLogicalModelSlug,
  type ModelProfileRegistration,
  type PromptOverrideRegistry,
  type PromptProfileOptions,
};

export interface CognideskModelOptions {
  model: LanguageModel;
  providerId?: string;
  modelId?: string;
  logicalModelSlug?: string;
  promptProfile?: ModelPromptProfile;
  modelProfiles?: ModelProfileRegistration[];
  promptOverrides?: PromptOverrideRegistry;
  promptOverrideBaseDir?: string;
  temperature?: number;
  maxOutputTokens?: number;
  headers?: Record<string, string>;
  providerOptions?: unknown;
}

export interface CognideskEmbeddingModelOptions {
  model: EmbeddingModel;
  providerId?: string;
  modelId?: string;
  headers?: Record<string, string>;
  providerOptions?: unknown;
}

export type LanguageModelRole = Exclude<keyof AgentModelSet, "journeyEmbedding">;

export type ModelRoleEntry =
  | LanguageModel
  | (Omit<CognideskModelOptions, "promptProfile" | "modelProfiles" | "promptOverrides" | "promptOverrideBaseDir"> & {
      promptProfile?: ModelPromptProfile;
    });

export type EmbeddingModelRoleEntry =
  | EmbeddingModel
  | CognideskEmbeddingModelOptions;

export type ModelSetDefinition = {
  [Role in LanguageModelRole]: ModelRoleEntry;
} & {
  journeyEmbedding: EmbeddingModelRoleEntry;
};

export interface CreateModelSetOptions {
  modelProfiles?: ModelProfileRegistration[];
  promptOverrides?: PromptOverrideRegistry;
  promptOverrideBaseDir?: string;
}

export function cognideskModel(options: CognideskModelOptions): ModelAdapter {
  const metadata = inferModelMetadata(options.model, options);
  const promptProfile = options.promptProfile ?? createModelPromptProfile({
    ...(options.logicalModelSlug ? { logicalModelSlug: options.logicalModelSlug } : {}),
    providerModelId: metadata.modelId,
    ...(options.modelProfiles ? { modelProfiles: options.modelProfiles } : {}),
    ...(options.promptOverrides ? { promptOverrides: options.promptOverrides } : {}),
    ...(options.promptOverrideBaseDir ? { baseDir: options.promptOverrideBaseDir } : {}),
  });
  return {
    provider: metadata.providerId,
    model: metadata.modelId,
    promptProfile,
    async generateText(input: TextGenerationInput): Promise<TextGenerationOutput> {
      if (input.onTextDelta && !input.responseFormat) {
        return streamCognideskText(options, input);
      }
      const prompt = splitSystemMessages(input.messages);
      const result = await generateText({
        model: options.model,
        ...(prompt.system ? { system: prompt.system } : {}),
        messages: prompt.messages.map(toAiMessage),
        allowSystemInMessages: false,
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
  };
}

async function streamCognideskText(
  options: CognideskModelOptions,
  input: TextGenerationInput,
): Promise<TextGenerationOutput> {
  const prompt = splitSystemMessages(input.messages);
  const result = streamText({
    model: options.model,
    ...(prompt.system ? { system: prompt.system } : {}),
    messages: prompt.messages.map(toAiMessage),
    allowSystemInMessages: false,
    ...(input.tools?.length ? { tools: toAiTools(input.tools) } : {}),
    ...(input.toolChoice ? { toolChoice: input.toolChoice } : {}),
    ...(options.temperature !== undefined ? { temperature: options.temperature } : {}),
    ...(options.maxOutputTokens !== undefined ? { maxOutputTokens: options.maxOutputTokens } : {}),
    ...(options.headers ? { headers: options.headers } : {}),
    ...(options.providerOptions ? { providerOptions: options.providerOptions } : {}),
    ...(input.signal ? { abortSignal: input.signal } : {}),
  } as unknown as Parameters<typeof streamText>[0]);

  let text = "";
  for await (const delta of result.textStream) {
    text += delta;
    await input.onTextDelta?.(delta);
  }
  const [toolCalls, usage, providerMetadata, response, finishReason] = await Promise.all([
    result.toolCalls,
    result.totalUsage,
    result.providerMetadata,
    result.response,
    result.finishReason,
  ]);

  return {
    text,
    ...(toolCalls.length > 0 ? { toolCalls: toolCalls.map(toModelToolCall) } : {}),
    usage: mapLanguageUsage(usage),
    providerMetadata: {
      ...(response.id ? { id: response.id } : {}),
      ...(response.modelId ? { model: response.modelId } : {}),
      ...(providerMetadata ? { provider: providerMetadata } : {}),
      ...(finishReason ? { finishReason } : {}),
    },
  };
}

export function cognideskEmbeddingModel(options: CognideskEmbeddingModelOptions): ModelAdapter {
  const metadata = inferModelMetadata(options.model, options);
  return {
    provider: metadata.providerId,
    model: metadata.modelId,
    async generateText(): Promise<TextGenerationOutput> {
      throw new Error(`Embedding model '${metadata.modelId}' cannot generate text.`);
    },
    async embed(input: EmbeddingInput): Promise<EmbeddingOutput> {
      const result = await embed({
        model: options.model,
        value: input.text,
        ...(options.headers ? { headers: options.headers } : {}),
        ...(options.providerOptions ? { providerOptions: options.providerOptions } : {}),
        ...(input.signal ? { abortSignal: input.signal } : {}),
      } as Parameters<typeof embed>[0]);
      return {
        embedding: [...result.embedding],
        model: metadata.modelId,
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

export function createModelSet(definition: ModelSetDefinition, options: CreateModelSetOptions = {}): AgentModelSet {
  return {
    response: createLanguageRole(definition.response, options),
    matcher: createLanguageRole(definition.matcher, options),
    extraction: createLanguageRole(definition.extraction, options),
    citationPostProcessing: createLanguageRole(definition.citationPostProcessing, options),
    compaction: createLanguageRole(definition.compaction, options),
    journeyEmbedding: createEmbeddingRole(definition.journeyEmbedding),
  };
}

function createLanguageRole(entry: ModelRoleEntry, options: CreateModelSetOptions): ModelAdapter {
  const normalized = normalizeLanguageRoleEntry(entry);
  return cognideskModel({
    ...normalized,
    ...(options.modelProfiles ? { modelProfiles: options.modelProfiles } : {}),
    ...(options.promptOverrides ? { promptOverrides: options.promptOverrides } : {}),
    ...(options.promptOverrideBaseDir ? { promptOverrideBaseDir: options.promptOverrideBaseDir } : {}),
  });
}

function createEmbeddingRole(entry: EmbeddingModelRoleEntry): ModelAdapter {
  return cognideskEmbeddingModel(normalizeEmbeddingRoleEntry(entry));
}

function normalizeLanguageRoleEntry(entry: ModelRoleEntry): CognideskModelOptions {
  return isConfiguredRoleEntry(entry) ? entry as CognideskModelOptions : { model: entry };
}

function normalizeEmbeddingRoleEntry(entry: EmbeddingModelRoleEntry): CognideskEmbeddingModelOptions {
  return isConfiguredRoleEntry(entry) ? entry as CognideskEmbeddingModelOptions : { model: entry };
}

function isConfiguredRoleEntry(entry: unknown): entry is { model: unknown } {
  return typeof entry === "object" && entry !== null && "model" in entry;
}

function splitSystemMessages(messages: ModelMessage[]) {
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

function inferModelMetadata(
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

function inferProviderIdFromString(modelId: string) {
  if (modelId.includes(":")) return modelId.slice(0, modelId.indexOf(":"));
  if (modelId.includes("/")) return modelId.slice(0, modelId.indexOf("/"));
  return "ai-sdk";
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
