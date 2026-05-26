import { describe, expect, it } from "vitest";
import { z } from "zod";
import { MockEmbeddingModelV3, MockLanguageModelV3 } from "ai/test";
import { aiSdkModel, instructionPromptProfile } from "../src/index.js";

describe("aiSdkModel", () => {
  it("adapts text generation, structured output, tools, and usage", async () => {
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
    const model = aiSdkModel({
      provider: "test",
      model: "test-language",
      languageModel,
    });

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
  });

  it("adapts embeddings", async () => {
    const model = aiSdkModel({
      provider: "test",
      model: "test-language",
      languageModel: new MockLanguageModelV3(),
      embeddingModel: new MockEmbeddingModelV3({
        provider: "test",
        modelId: "test-embedding",
        doEmbed: async () => ({
          embeddings: [[0.1, 0.2, 0.3]],
          usage: { tokens: 2 },
          warnings: [],
        }),
      }),
      embeddingModelId: "test-embedding",
    });

    const embedding = await model.embed!({ role: "journeyEmbedding", text: "routing text" });

    expect(embedding.model).toBe("test-embedding");
    expect(embedding.dimensions).toBe(3);
    expect(embedding.usage?.inputTokens).toBe(2);
  });
});

describe("instructionPromptProfile", () => {
  it("appends global and role-specific instructions to system messages", async () => {
    const profile = instructionPromptProfile({
      id: "test-profile",
      instruction: "Global",
      roleInstructions: { matcher: "Matcher only" },
    });

    const afterGlobal = await profile.transformMessages?.({
      role: "matcher",
      model: { provider: "test", model: "test" },
      messages: [{ role: "system", content: "Base" }],
    });
    const afterRole = await profile.roleTransforms?.matcher?.({
      role: "matcher",
      model: { provider: "test", model: "test" },
      messages: afterGlobal ?? [],
    });

    expect(afterRole?.[0]?.content).toBe("Base\nGlobal\nMatcher only");
  });
});
