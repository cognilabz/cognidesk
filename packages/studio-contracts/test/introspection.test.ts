import { describe, expect, it } from "vitest";
import { StudioConversationSummarySchema } from "../src/index.js";

const baseSummary = {
  id: "conversation-1",
  agentId: "test-agent",
  lifecycle: "active" as const,
  createdAt: "2026-06-26T08:00:00.000Z",
  updatedAt: "2026-06-26T08:05:00.000Z",
  activeStateIds: [],
  traceIds: [],
};

describe("StudioConversationSummarySchema tokenUsage", () => {
  it("accepts a conversation summary without tokenUsage", () => {
    const result = StudioConversationSummarySchema.parse(baseSummary);
    expect(result.tokenUsage).toBeUndefined();
  });

  it("accepts a conversation summary with all tokenUsage fields", () => {
    const result = StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: {
        inputTokens: 20,
        outputTokens: 8,
        cachedInputTokens: 3,
        reasoningTokens: 2,
        totalTokens: 28,
      },
    });
    expect(result.tokenUsage).toEqual({
      inputTokens: 20,
      outputTokens: 8,
      cachedInputTokens: 3,
      reasoningTokens: 2,
      totalTokens: 28,
    });
  });

  it("accepts a conversation summary with only totalTokens", () => {
    const result = StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { totalTokens: 100 },
    });
    expect(result.tokenUsage?.totalTokens).toBe(100);
    expect(result.tokenUsage?.inputTokens).toBeUndefined();
  });

  it("accepts partial tokenUsage with only input and output tokens", () => {
    const result = StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { inputTokens: 10, outputTokens: 5 },
    });
    expect(result.tokenUsage?.inputTokens).toBe(10);
    expect(result.tokenUsage?.outputTokens).toBe(5);
    expect(result.tokenUsage?.totalTokens).toBeUndefined();
    expect(result.tokenUsage?.cachedInputTokens).toBeUndefined();
  });

  it("rejects negative inputTokens", () => {
    expect(() => StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { inputTokens: -1 },
    })).toThrow();
  });

  it("rejects negative outputTokens", () => {
    expect(() => StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { outputTokens: -5 },
    })).toThrow();
  });

  it("rejects negative totalTokens", () => {
    expect(() => StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { totalTokens: -100 },
    })).toThrow();
  });

  it("rejects non-integer token counts", () => {
    expect(() => StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { inputTokens: 10.5 },
    })).toThrow();
  });

  it("rejects string token values", () => {
    expect(() => StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: { totalTokens: "123" },
    })).toThrow();
  });

  it("accepts zero token counts", () => {
    const result = StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: {
        inputTokens: 0,
        outputTokens: 0,
        cachedInputTokens: 0,
        reasoningTokens: 0,
        totalTokens: 0,
      },
    });
    expect(result.tokenUsage?.totalTokens).toBe(0);
    expect(result.tokenUsage?.inputTokens).toBe(0);
  });

  it("accepts an empty tokenUsage object", () => {
    const result = StudioConversationSummarySchema.parse({
      ...baseSummary,
      tokenUsage: {},
    });
    expect(result.tokenUsage).toEqual({});
  });

  it("preserves all lifecycle values in the schema", () => {
    for (const lifecycle of ["active", "handoff", "closed"] as const) {
      const result = StudioConversationSummarySchema.parse({ ...baseSummary, lifecycle });
      expect(result.lifecycle).toBe(lifecycle);
    }
  });
});