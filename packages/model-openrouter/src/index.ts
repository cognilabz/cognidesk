import { z } from "zod";
import type {
  EmbeddingInput,
  EmbeddingOutput,
  ModelAdapter,
  ModelMessage,
  TextGenerationInput,
  TextGenerationOutput,
  UsageRecord,
} from "@cognidesk/core";

export interface OpenRouterModelOptions {
  model: string;
  embeddingModel?: string;
  apiKey?: string;
  baseUrl?: string;
  defaultHeaders?: Record<string, string>;
  siteUrl?: string;
  appName?: string;
  temperature?: number;
  maxTokens?: number;
  strictStructuredOutputs?: boolean;
  fetch?: FetchLike;
}

type FetchLike = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

export function openRouterModel(options: OpenRouterModelOptions): ModelAdapter {
  const fetcher = options.fetch ?? fetch;
  const baseUrl = (options.baseUrl ?? "https://openrouter.ai/api/v1").replace(/\/$/, "");
  const apiKey = options.apiKey ?? process.env.OPENROUTER_KEY ?? process.env.OPENROUTER_API_KEY;

  return {
    provider: "openrouter",
    model: options.model,
    async generateText(input: TextGenerationInput): Promise<TextGenerationOutput> {
      const response = await postJson<OpenRouterChatResponse>({
        fetcher,
        url: `${baseUrl}/chat/completions`,
        apiKey,
        headers: createHeaders(options),
        body: {
          model: options.model,
          messages: input.messages.map(toChatMessage),
          ...(options.temperature !== undefined ? { temperature: options.temperature } : {}),
          ...(options.maxTokens !== undefined ? { max_tokens: options.maxTokens } : {}),
          ...(input.responseFormat ? { response_format: toChatResponseFormat(input.responseFormat, options) } : {}),
        },
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const text = response.choices[0]?.message?.content ?? "";
      return {
        text,
        ...(input.responseFormat ? { structured: parseStructuredOutput(input.responseFormat, text) } : {}),
        ...(response.usage ? { usage: mapUsage(response.usage) } : {}),
        providerMetadata: { id: response.id, model: response.model },
      };
    },
    async embed(input: EmbeddingInput): Promise<EmbeddingOutput> {
      const embeddingModel = options.embeddingModel ?? options.model;
      const response = await postJson<OpenRouterEmbeddingResponse>({
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
      if (!embedding) throw new Error("OpenRouter embedding response did not include an embedding.");
      return {
        embedding,
        model: response.model ?? embeddingModel,
        dimensions: embedding.length,
        ...(response.usage ? { usage: mapEmbeddingUsage(response.usage) } : {}),
        providerMetadata: { id: response.id, object: response.object },
      };
    },
  };
}

interface OpenRouterChatResponse {
  id?: string;
  model?: string;
  choices: Array<{
    message?: { role?: string; content?: string };
    finish_reason?: string;
  }>;
  usage?: {
    prompt_tokens?: number;
    completion_tokens?: number;
    total_tokens?: number;
  };
}

interface OpenRouterEmbeddingResponse {
  id?: string | null;
  object?: string;
  model?: string;
  data: Array<{ embedding: number[]; index?: number; object?: string }>;
  usage?: { prompt_tokens?: number; total_tokens?: number } | null;
}

function toChatMessage(message: ModelMessage) {
  return {
    role: message.role === "tool" ? "user" : message.role,
    content: message.content,
    ...(message.name ? { name: message.name } : {}),
  };
}

function toChatResponseFormat(schema: z.ZodType, options: OpenRouterModelOptions) {
  return {
    type: "json_schema",
    json_schema: {
      name: "cognidesk_response",
      strict: options.strictStructuredOutputs ?? true,
      schema: z.toJSONSchema(schema),
    },
  };
}

function parseStructuredOutput(schema: z.ZodType, text: string) {
  const parsedJson = JSON.parse(text) as unknown;
  return schema.parse(parsedJson);
}

function createHeaders(options: OpenRouterModelOptions): Record<string, string> {
  const headers: Record<string, string> = { ...(options.defaultHeaders ?? {}) };
  if (options.siteUrl) headers["http-referer"] = options.siteUrl;
  if (options.appName) headers["x-title"] = options.appName;
  return headers;
}

function mapUsage(usage: NonNullable<OpenRouterChatResponse["usage"]>): UsageRecord {
  return usageRecord({
    inputTokens: usage.prompt_tokens,
    outputTokens: usage.completion_tokens,
    totalTokens: usage.total_tokens,
  });
}

function mapEmbeddingUsage(usage: NonNullable<OpenRouterEmbeddingResponse["usage"]>): UsageRecord {
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
  if (!args.apiKey) throw new Error("OpenRouter API key is required.");
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
    throw new Error(`OpenRouter API error ${response.status}: ${await response.text()}`);
  }
  return await response.json() as T;
}
