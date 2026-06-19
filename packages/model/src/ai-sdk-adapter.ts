import {
  embed,
  generateText,
  Output,
  streamText,
} from "ai";
import type {
  EmbeddingInput,
  EmbeddingOutput,
  ModelAdapter,
  TextGenerationInput,
  TextGenerationOutput,
} from "@cognidesk/core";
import {
  createModelPromptProfile,
} from "./prompt/profiles.js";
import type {
  CognideskEmbeddingModelOptions,
  CognideskModelOptions,
  ModelJsonObject,
} from "./adapter/types.js";
import {
  inferModelMetadata,
  mapLanguageUsage,
  splitSystemMessages,
  toAiMessage,
  toAiTools,
  toModelToolCall,
  usageRecord,
} from "./adapter/utils.js";

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
        ...(result.providerMetadata ? { providerMetadata: result.providerMetadata as ModelJsonObject } : {}),
      };
    },
  };
}
