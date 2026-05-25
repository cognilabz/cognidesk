import { describe, expect, it } from "vitest";
import { z } from "zod";
import { openaiModel } from "../src/index.js";

describe("openaiModel", () => {
  it("uses the Responses API for text generation with structured output", async () => {
    const requests: Array<{ url: string; body: unknown }> = [];
    const model = openaiModel({
      model: "gpt-5-mini",
      apiKey: "test-key",
      fetch: async (url, init) => {
        requests.push({ url: String(url), body: JSON.parse(String(init?.body)) as unknown });
        return Response.json({
          id: "resp_1",
          model: "gpt-5-mini",
          output_text: JSON.stringify({ answer: "ok" }),
          usage: {
            input_tokens: 10,
            output_tokens: 3,
            total_tokens: 13,
            input_tokens_details: { cached_tokens: 4 },
          },
        });
      },
    });

    const result = await model.generateText({
      role: "response",
      messages: [{ role: "user", content: "hello" }],
      responseFormat: z.object({ answer: z.string() }),
    });

    expect(requests[0]?.url).toBe("https://api.openai.com/v1/responses");
    expect(requests[0]?.body).toMatchObject({
      model: "gpt-5-mini",
      text: { format: { type: "json_schema" } },
    });
    expect(result.text).toBe('{"answer":"ok"}');
    expect(result.structured).toEqual({ answer: "ok" });
    expect(result.usage?.cachedInputTokens).toBe(4);
  });

  it("uses the embeddings endpoint", async () => {
    const model = openaiModel({
      model: "gpt-5-mini",
      embeddingModel: "text-embedding-3-small",
      apiKey: "test-key",
      fetch: async (url, init) => {
        expect(String(url)).toBe("https://api.openai.com/v1/embeddings");
        expect(JSON.parse(String(init?.body))).toMatchObject({
          model: "text-embedding-3-small",
          input: "routing text",
        });
        return Response.json({
          object: "list",
          model: "text-embedding-3-small",
          data: [{ embedding: [0.1, 0.2] }],
          usage: { prompt_tokens: 2, total_tokens: 2 },
        });
      },
    });

    const embedding = await model.embed!({ role: "journeyEmbedding", text: "routing text" });
    expect(embedding.dimensions).toBe(2);
    expect(embedding.usage?.inputTokens).toBe(2);
  });

  it("sends tool definitions and parses function calls", async () => {
    const requests: Array<{ body: unknown }> = [];
    const model = openaiModel({
      model: "gpt-5-mini",
      apiKey: "test-key",
      fetch: async (_url, init) => {
        requests.push({ body: JSON.parse(String(init?.body)) as unknown });
        return Response.json({
          id: "resp_1",
          model: "gpt-5-mini",
          output: [{
            type: "function_call",
            id: "fc_1",
            call_id: "call_1",
            name: "getTicketStatus",
            arguments: JSON.stringify({ bookingReference: "ABC123" }),
          }],
        });
      },
    });

    const result = await model.generateText({
      role: "response",
      messages: [{ role: "user", content: "status?" }],
      tools: [{
        name: "getTicketStatus",
        description: "Get status.",
        input: z.object({ bookingReference: z.string() }),
      }],
      toolChoice: "auto",
    });

    expect(requests[0]?.body).toMatchObject({
      tools: [{ type: "function", name: "getTicketStatus" }],
      tool_choice: "auto",
    });
    expect(result.toolCalls).toEqual([{
      id: "call_1",
      name: "getTicketStatus",
      input: { bookingReference: "ABC123" },
      providerMetadata: { id: "fc_1", callId: "call_1" },
    }]);
  });
});
