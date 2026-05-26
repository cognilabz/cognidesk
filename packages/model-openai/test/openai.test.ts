import { describe, expect, it } from "vitest";
import { openaiModel, openaiPromptProfile } from "../src/index.js";

describe("openaiModel", () => {
  it("creates a Cognidesk model adapter with an OpenAI prompt profile", () => {
    const model = openaiModel({
      model: "gpt-5-mini",
      embeddingModel: "text-embedding-3-small",
      apiKey: "test-key",
    });

    expect(model.provider).toBe("openai");
    expect(model.model).toBe("gpt-5-mini");
    expect(model.embed).toBeTypeOf("function");
    expect(model.promptProfile?.id).toBe("openai:gpt-5-mini");
  });

  it("exposes reusable model-specific prompt profiles", async () => {
    const profile = openaiPromptProfile("gpt-5-mini");
    const messages = await profile.roleTransforms?.matcher?.({
      role: "matcher",
      model: { provider: "openai", model: "gpt-5-mini" },
      messages: [{ role: "system", content: "Base" }],
    });

    expect(messages?.[0]?.content).toContain("Return only candidate ids");
  });
});
