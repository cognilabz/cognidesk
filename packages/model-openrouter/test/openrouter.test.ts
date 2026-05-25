import { describe, expect, it } from "vitest";
import { z } from "zod";
import { openRouterModel } from "../src/index.js";

describe("openRouterModel", () => {
  it("uses OpenRouter chat completions for text generation", async () => {
    const requests: Array<{ url: string; body: unknown; headers: Headers }> = [];
    const model = openRouterModel({
      model: "openai/gpt-4.1-mini",
      apiKey: "test-key",
      appName: "Cognidesk",
      fetch: async (url, init) => {
        requests.push({
          url: String(url),
          body: JSON.parse(String(init?.body)) as unknown,
          headers: new Headers(init?.headers),
        });
        return Response.json({
          id: "gen_1",
          model: "openai/gpt-4.1-mini",
          choices: [{ message: { role: "assistant", content: JSON.stringify({ answer: "ok" }) } }],
          usage: { prompt_tokens: 7, completion_tokens: 2, total_tokens: 9 },
        });
      },
    });

    const result = await model.generateText({
      role: "response",
      messages: [{ role: "user", content: "hello" }],
      responseFormat: z.object({ answer: z.string() }),
    });

    expect(requests[0]?.url).toBe("https://openrouter.ai/api/v1/chat/completions");
    expect(requests[0]?.headers.get("x-title")).toBe("Cognidesk");
    expect(requests[0]?.body).toMatchObject({
      model: "openai/gpt-4.1-mini",
      response_format: { type: "json_schema" },
    });
    expect(result.structured).toEqual({ answer: "ok" });
    expect(result.usage?.outputTokens).toBe(2);
  });

  it("uses OpenRouter embeddings", async () => {
    const model = openRouterModel({
      model: "openai/gpt-4.1-mini",
      embeddingModel: "openai/text-embedding-3-small",
      apiKey: "test-key",
      fetch: async (url, init) => {
        expect(String(url)).toBe("https://openrouter.ai/api/v1/embeddings");
        expect(JSON.parse(String(init?.body))).toMatchObject({
          model: "openai/text-embedding-3-small",
          input: "routing text",
        });
        return Response.json({
          object: "list",
          model: "openai/text-embedding-3-small",
          data: [{ embedding: [0.3, 0.4, 0.5] }],
          usage: { prompt_tokens: 2, total_tokens: 2 },
        });
      },
    });

    const embedding = await model.embed!({ role: "journeyEmbedding", text: "routing text" });
    expect(embedding.model).toBe("openai/text-embedding-3-small");
    expect(embedding.dimensions).toBe(3);
  });
});
