import { describe, expect, it } from "vitest";
import { z } from "zod";
import { MockEmbeddingModelV3, MockLanguageModelV3 } from "ai/test";
import {
  cognideskEmbeddingModel,
  cognideskModel,
  createModelPromptProfile,
  createModelSet,
  normalizeLogicalModelSlug,
} from "../src/index.js";

describe("cognideskModel", () => {
  it("adapts text generation, tools, metadata, and usage", async () => {
    const languageModel = new MockLanguageModelV3({
      provider: "test",
      modelId: "test-language",
      doGenerate: {
        content: [
          { type: "text", text: JSON.stringify({ answer: "ok" }) },
          {
            type: "tool-call",
            toolCallId: "call_1",
            toolName: "lookup",
            input: JSON.stringify({ id: "ABC123" }),
          },
        ],
        finishReason: { unified: "stop", raw: "stop" },
        usage: {
          inputTokens: {
            total: 10,
            noCache: 6,
            cacheRead: 4,
            cacheWrite: undefined,
          },
          outputTokens: {
            total: 3,
            text: 2,
            reasoning: 1,
          },
        },
        warnings: [],
      },
    });
    const model = cognideskModel({ model: languageModel });

    const result = await model.generateText({
      role: "response",
      messages: [{ role: "user", content: "hello" }],
      tools: [{
        name: "lookup",
        description: "Lookup a booking.",
        input: z.object({ id: z.string() }),
      }],
    });

    expect(result.text).toBe('{"answer":"ok"}');
    expect(result.toolCalls).toEqual([{
      id: "call_1",
      name: "lookup",
      input: { id: "ABC123" },
    }]);
    expect(result.usage?.cachedInputTokens).toBe(4);
    expect(languageModel.doGenerateCalls[0]?.tools?.[0]).toMatchObject({
      name: "lookup",
      type: "function",
    });
    expect(model.provider).toBe("test");
    expect(model.model).toBe("test-language");
  });

  it("preserves assistant text when forwarding assistant tool-call messages", async () => {
    const languageModel = new MockLanguageModelV3({
      provider: "test",
      modelId: "test-language",
      doGenerate: {
        content: [{ type: "text", text: "ok" }],
        finishReason: { unified: "stop", raw: "stop" },
        usage: {
          inputTokens: {
            total: 1,
            noCache: 1,
            cacheRead: undefined,
            cacheWrite: undefined,
          },
          outputTokens: {
            total: 1,
            text: 1,
            reasoning: undefined,
          },
        },
        warnings: [],
      },
    });
    const model = cognideskModel({ model: languageModel });

    await model.generateText({
      role: "response",
      messages: [{
        role: "assistant",
        content: "I will look that up before answering.",
        toolCalls: [{ id: "call_1", name: "lookup", input: { id: "ABC123" } }],
      }, {
        role: "tool",
        name: "lookup",
        toolCallId: "call_1",
        content: JSON.stringify({ status: "confirmed" }),
      }],
    });

    expect(JSON.stringify(languageModel.doGenerateCalls[0])).toContain("I will look that up before answering.");
  });


  it("adapts embeddings", async () => {
    const model = cognideskEmbeddingModel({
      model: new MockEmbeddingModelV3({
        provider: "test",
        modelId: "test-embedding",
        doEmbed: async () => ({
          embeddings: [[0.1, 0.2, 0.3]],
          usage: { tokens: 2 },
          warnings: [],
        }),
      }),
    });

    const embedding = await model.embed!({ role: "journeyEmbedding", text: "routing text" });

    expect(embedding.model).toBe("test-embedding");
    expect(embedding.dimensions).toBe(3);
    expect(embedding.usage?.inputTokens).toBe(2);
  });
});

describe("prompt profiles", () => {
  it("normalizes provider-specific model ids to logical prompt slugs", () => {
    expect(normalizeLogicalModelSlug("openai/gpt-5.5")).toBe("gpt-5.5");
    expect(normalizeLogicalModelSlug("gpt-5.5")).toBe("gpt-5.5");
    expect(normalizeLogicalModelSlug("anthropic/claude-sonnet-4.6")).toBe("claude-sonnet-4.6");
    expect(normalizeLogicalModelSlug("unknown/provider-model")).toBeNull();
  });

  it("uses optimized prompts for known logical slugs and default prompts for unknown models", () => {
    expect(createModelPromptProfile({ providerModelId: "openai/gpt-5.5" }).id).toBe("gpt-5.5");
    expect(createModelPromptProfile({ providerModelId: "gpt-5.5" }).id).toBe("gpt-5.5");
    expect(normalizeLogicalModelSlug("openai/gpt-5.5-2026-05-01")).toBe("gpt-5.5");
    const defaultProfile = createModelPromptProfile({ providerModelId: "unknown-model" });
    expect(defaultProfile.id).toBe("default");
    expect(defaultProfile.logicalModelSlug).toBeUndefined();
  });

  it("rejects prompt templates that reference unsupported runtime fields", () => {
    expect(() => createModelPromptProfile({
      providerModelId: "gpt-5.5",
      promptOverrides: {
        "gpt-5.5": {
          response: { template: "Respond using {{ applicationSecret }}." },
        },
      },
    })).toThrow("references unsupported field(s): applicationSecret");
  });

  it("keeps reserved prompt render fields from being overridden by payload", async () => {
    const profile = createModelPromptProfile({
      providerModelId: "gpt-5.5",
      promptOverrides: {
        "gpt-5.5": {
          response: { template: "{{ model.model }} {{ structuredOutput.name }}" },
        },
      },
    });
    const instruction = await profile.renderInstruction({
      role: "response",
      promptTask: "response",
      model: { provider: "openai", model: "gpt-5.5", logicalModelSlug: "gpt-5.5" },
      payload: {
        model: { model: "payload-model" },
        structuredOutput: { name: "payload-output" },
        selectedJourneyId: null,
        activeStateIds: [],
        journeyContext: {},
        tools: [],
      },
      structuredOutput: { required: false, name: "runtime-output" },
    });

    expect(instruction).toBe("gpt-5.5 runtime-output");
  });

  it("renders a task-specific Nunjucks prompt with structured output metadata", async () => {
    const profile = createModelPromptProfile({ providerModelId: "openai/gpt-5.5" });
    const instruction = await profile.renderInstruction({
      role: "matcher",
      promptTask: "journey-matcher",
      model: { provider: "openai", model: "gpt-5.5", logicalModelSlug: profile.logicalModelSlug! },
      payload: {
        latestUserMessage: "I need to check a ticket",
        activeJourneyId: null,
        conversationTranscript: [{ role: "user", content: "I need to check a ticket" }],
        candidates: [{ id: "ticket-status", condition: "Customer wants ticket status" }],
      },
      structuredOutput: {
        required: true,
        name: "journey-matcher",
        schema: { type: "object", properties: { selectedJourneyId: { type: "string" } } },
      },
    });

    expect(instruction).toContain("Journey matcher");
    expect(instruction).toContain("ticket-status");
    expect(instruction).toContain("selectedJourneyId");
  });

  it("validates and applies prompt overrides at model-set creation", async () => {
    const languageModel = new MockLanguageModelV3({ provider: "openai.responses", modelId: "gpt-5.5" });
    const embeddingModel = new MockEmbeddingModelV3({ provider: "openai.embedding", modelId: "text-embedding-3-small" });
    const models = createModelSet({
      response: languageModel,
      matcher: languageModel,
      extraction: languageModel,
      citationPostProcessing: languageModel,
      compaction: languageModel,
      journeyEmbedding: embeddingModel,
    }, {
      promptOverrides: {
        "gpt-5.5": {
          response: { template: "Respond for {{ selectedJourneyId }} with {{ structuredOutput.name }}." },
        },
      },
    });

    expect(models.response.promptProfile?.id).toBe("gpt-5.5");
    const instruction = await models.response.promptProfile?.renderInstruction({
      role: "response",
      promptTask: "response",
      model: { provider: "openai.responses", model: "gpt-5.5", logicalModelSlug: "gpt-5.5" },
      payload: {
        selectedJourneyId: "ticket-status",
        activeStateIds: [],
        journeyContext: {},
        tools: [],
      },
      structuredOutput: { required: false, name: "response" },
    });

    expect(instruction).toBe("Respond for ticket-status with response.");
  });
});
