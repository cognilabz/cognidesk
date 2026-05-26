import { describe, expect, it } from "vitest";
import { openRouterModel, openRouterPromptProfile } from "../src/index.js";

describe("openRouterModel", () => {
  it("creates a Cognidesk model adapter with an OpenRouter prompt profile", () => {
    const model = openRouterModel({
      model: "openai/gpt-4.1-mini",
      embeddingModel: "openai/text-embedding-3-small",
      apiKey: "test-key",
      appName: "Cognidesk",
    });

    expect(model.provider).toBe("openrouter");
    expect(model.model).toBe("openai/gpt-4.1-mini");
    expect(model.embed).toBeTypeOf("function");
    expect(model.promptProfile?.id).toBe("openrouter:openai/gpt-4.1-mini");
  });

  it("exposes reusable model-specific prompt profiles", async () => {
    const profile = openRouterPromptProfile("openai/gpt-4.1-mini");
    const messages = await profile.roleTransforms?.extraction?.({
      role: "extraction",
      model: { provider: "openrouter", model: "openai/gpt-4.1-mini" },
      messages: [{ role: "system", content: "Base" }],
    });

    expect(messages?.[0]?.content).toContain("Extract only explicit");
  });
});
