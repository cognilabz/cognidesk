import { z } from "zod";
import type {
  EmbeddingInput,
  EmbeddingOutput,
  ModelAdapter,
  ModelMessage,
  ModelToolCall,
  ModelToolDefinition,
  TextGenerationInput,
  TextGenerationOutput,
  UsageRecord,
} from "@cognidesk/core";

export interface OpenAIModelOptions {
  model: string;
  embeddingModel?: string;
  apiKey?: string;
  baseUrl?: string;
  organization?: string;
  project?: string;
  defaultHeaders?: Record<string, string>;
  temperature?: number;
  maxOutputTokens?: number;
  strictStructuredOutputs?: boolean;
  fetch?: FetchLike;
}

type FetchLike = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

export function openaiModel(options: OpenAIModelOptions): ModelAdapter {
  const fetcher = options.fetch ?? fetch;
  const baseUrl = (options.baseUrl ?? "https://api.openai.com/v1").replace(/\/$/, "");
  const apiKey = options.apiKey ?? process.env.OPENAI_API_KEY;

  return {
    provider: "openai",
    model: options.model,
    async generateText(input: TextGenerationInput): Promise<TextGenerationOutput> {
      const body = {
        model: options.model,
        input: input.messages.flatMap(toOpenAIMessage),
        ...(options.temperature !== undefined ? { temperature: options.temperature } : {}),
        ...(options.maxOutputTokens !== undefined ? { max_output_tokens: options.maxOutputTokens } : {}),
        ...(input.responseFormat ? { text: { format: toResponsesTextFormat(input.responseFormat, options) } } : {}),
        ...(input.tools?.length ? { tools: input.tools.map((tool) => toOpenAITool(tool, options)) } : {}),
        ...(input.toolChoice ? { tool_choice: input.toolChoice } : {}),
      };
      const response = await postJson<OpenAIResponse>({
        fetcher,
        url: `${baseUrl}/responses`,
        apiKey,
        headers: createHeaders(options),
        body,
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const text = extractResponseText(response);
      return {
        text,
        ...(input.responseFormat ? { structured: parseStructuredOutput(input.responseFormat, text) } : {}),
        ...(extractToolCalls(response).length > 0 ? { toolCalls: extractToolCalls(response) } : {}),
        ...(response.usage ? { usage: mapOpenAIUsage(response.usage) } : {}),
        providerMetadata: { id: response.id, model: response.model },
      };
    },
    async embed(input: EmbeddingInput): Promise<EmbeddingOutput> {
      const embeddingModel = options.embeddingModel ?? options.model;
      const response = await postJson<OpenAIEmbeddingResponse>({
        fetcher,
        url: `${baseUrl}/embeddings`,
        apiKey,
        headers: createHeaders(options),
        body: {
          model: embeddingModel,
          input: input.text,
        },
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const embedding = response.data[0]?.embedding;
      if (!embedding) throw new Error("OpenAI embedding response did not include an embedding.");
      return {
        embedding,
        model: response.model ?? embeddingModel,
        dimensions: embedding.length,
        ...(response.usage ? { usage: mapEmbeddingUsage(response.usage) } : {}),
        providerMetadata: { object: response.object },
      };
    },
  };
}

interface OpenAIResponse {
  id?: string;
  model?: string;
  output_text?: string;
  output?: Array<{
    type?: string;
    id?: string;
    call_id?: string;
    name?: string;
    arguments?: string;
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
    total_tokens?: number;
    input_tokens_details?: { cached_tokens?: number };
    output_tokens_details?: { reasoning_tokens?: number };
  };
}

interface OpenAIEmbeddingResponse {
  object?: string;
  model?: string;
  data: Array<{ embedding: number[]; index?: number; object?: string }>;
  usage?: { prompt_tokens?: number; total_tokens?: number };
}

function toOpenAIMessage(message: ModelMessage): unknown[] {
  if (message.role === "tool") {
    return [{
      type: "function_call_output",
      call_id: message.toolCallId ?? message.name ?? "tool_call",
      output: message.content,
    }];
  }
  if (message.role === "assistant" && message.toolCalls?.length) {
    return message.toolCalls.map((toolCall) => ({
      type: "function_call",
      call_id: toolCall.id,
      name: toolCall.name,
      arguments: JSON.stringify(toolCall.input),
    }));
  }
  return [{
    role: message.role,
    content: message.content,
    ...(message.name ? { name: message.name } : {}),
  }];
}

function toResponsesTextFormat(schema: z.ZodType, options: OpenAIModelOptions) {
  return {
    type: "json_schema",
    name: "cognidesk_response",
    schema: z.toJSONSchema(schema),
    strict: options.strictStructuredOutputs ?? true,
  };
}

function extractResponseText(response: OpenAIResponse) {
  if (response.output_text) return response.output_text;
  const textParts = response.output
    ?.flatMap((item) => item.content ?? [])
    .filter((content) => content.type === "output_text" || content.text)
    .map((content) => content.text ?? "") ?? [];
  return textParts.join("");
}

function extractToolCalls(response: OpenAIResponse): ModelToolCall[] {
  return response.output
    ?.filter((item) => item.type === "function_call" && item.name && item.arguments)
    .map((item) => ({
      id: item.call_id ?? item.id ?? `${item.name}_call`,
      name: item.name ?? "",
      input: parseJsonObject(item.arguments ?? "{}"),
      providerMetadata: {
        ...(item.id ? { id: item.id } : {}),
        ...(item.call_id ? { callId: item.call_id } : {}),
      },
    })) ?? [];
}

function toOpenAITool(tool: ModelToolDefinition, options: OpenAIModelOptions) {
  return {
    type: "function",
    name: tool.name,
    ...(tool.description ? { description: tool.description } : {}),
    parameters: z.toJSONSchema(tool.input),
    strict: options.strictStructuredOutputs ?? true,
  };
}

function parseStructuredOutput(schema: z.ZodType, text: string) {
  const parsedJson = JSON.parse(text) as unknown;
  return schema.parse(parsedJson);
}

function parseJsonObject(text: string) {
  return JSON.parse(text) as unknown;
}

function createHeaders(options: OpenAIModelOptions): Record<string, string> {
  const headers: Record<string, string> = { ...(options.defaultHeaders ?? {}) };
  if (options.organization) headers["openai-organization"] = options.organization;
  if (options.project) headers["openai-project"] = options.project;
  return headers;
}

function mapOpenAIUsage(usage: NonNullable<OpenAIResponse["usage"]>): UsageRecord {
  return usageRecord({
    inputTokens: usage.input_tokens,
    outputTokens: usage.output_tokens,
    cachedInputTokens: usage.input_tokens_details?.cached_tokens,
    reasoningTokens: usage.output_tokens_details?.reasoning_tokens,
    totalTokens: usage.total_tokens,
  });
}

function mapEmbeddingUsage(usage: NonNullable<OpenAIEmbeddingResponse["usage"]>): UsageRecord {
  return usageRecord({
    inputTokens: usage.prompt_tokens,
    totalTokens: usage.total_tokens,
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

async function postJson<T>(args: {
  fetcher: FetchLike;
  url: string;
  apiKey: string | undefined;
  headers: Record<string, string>;
  body: unknown;
  signal?: AbortSignal;
}): Promise<T> {
  if (!args.apiKey) throw new Error("OpenAI API key is required.");
  const response = await args.fetcher(args.url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${args.apiKey}`,
      "content-type": "application/json",
      ...args.headers,
    },
    body: JSON.stringify(args.body),
    ...(args.signal ? { signal: args.signal } : {}),
  });
  if (!response.ok) {
    throw new Error(`OpenAI API error ${response.status}: ${await response.text()}`);
  }
  return await response.json() as T;
}
