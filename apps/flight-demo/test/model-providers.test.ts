import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import {
  getConfiguredVoiceProviderSecrets,
  parseFlightDemoConfig,
  requireConfiguredModelApiKeys,
  type FlightDemoConfig,
} from "../server/config.js";

const providerMocks = vi.hoisted(() => {
  const languageModel = (provider: string, modelId: string) => ({ provider, modelId });
  const embeddingModel = (provider: string, modelId: string) => ({ provider, modelId });
  return {
    createAnthropic: vi.fn((options: unknown) => ({
      options,
      chat: vi.fn((modelId: string) => languageModel("anthropic.chat", modelId)),
    })),
    createAzure: vi.fn((options: unknown) => ({
      options,
      responses: vi.fn((modelId: string) => languageModel("azure-openai.responses", modelId)),
      embedding: vi.fn((modelId: string) => embeddingModel("azure-openai.embedding", modelId)),
    })),
    createCohere: vi.fn((options: unknown) => ({
      options,
      languageModel: vi.fn((modelId: string) => languageModel("cohere.language", modelId)),
      embedding: vi.fn((modelId: string) => embeddingModel("cohere.embedding", modelId)),
    })),
    createGoogleGenerativeAI: vi.fn((options: unknown) => ({
      options,
      chat: vi.fn((modelId: string) => languageModel("google.chat", modelId)),
      embedding: vi.fn((modelId: string) => embeddingModel("google.embedding", modelId)),
    })),
    createGroq: vi.fn((options: unknown) => ({
      options,
      languageModel: vi.fn((modelId: string) => languageModel("groq.language", modelId)),
    })),
    createMistral: vi.fn((options: unknown) => ({
      options,
      chat: vi.fn((modelId: string) => languageModel("mistral.chat", modelId)),
      embedding: vi.fn((modelId: string) => embeddingModel("mistral.embedding", modelId)),
    })),
    createOpenAI: vi.fn((options: unknown) => ({
      options,
      responses: vi.fn((modelId: string) => languageModel("openai.responses", modelId)),
      embedding: vi.fn((modelId: string) => embeddingModel("openai.embedding", modelId)),
    })),
    createOpenAICompatible: vi.fn((options: unknown) => ({
      options,
      languageModel: vi.fn((modelId: string) => languageModel("openai-compatible.language", modelId)),
      embeddingModel: vi.fn((modelId: string) => embeddingModel("openai-compatible.embedding", modelId)),
    })),
    createXai: vi.fn((options: unknown) => ({
      options,
      chat: vi.fn((modelId: string) => languageModel("xai.chat", modelId)),
    })),
    createOpenRouter: vi.fn((options: unknown) => ({
      options,
      chat: vi.fn((modelId: string) => languageModel("openrouter.chat", modelId)),
      textEmbeddingModel: vi.fn((modelId: string) => embeddingModel("openrouter.embedding", modelId)),
    })),
  };
});

vi.mock("@ai-sdk/anthropic", () => ({ createAnthropic: providerMocks.createAnthropic }));
vi.mock("@ai-sdk/azure", () => ({ createAzure: providerMocks.createAzure }));
vi.mock("@ai-sdk/cohere", () => ({ createCohere: providerMocks.createCohere }));
vi.mock("@ai-sdk/google", () => ({ createGoogleGenerativeAI: providerMocks.createGoogleGenerativeAI }));
vi.mock("@ai-sdk/groq", () => ({ createGroq: providerMocks.createGroq }));
vi.mock("@ai-sdk/mistral", () => ({ createMistral: providerMocks.createMistral }));
vi.mock("@ai-sdk/openai", () => ({ createOpenAI: providerMocks.createOpenAI }));
vi.mock("@ai-sdk/openai-compatible", () => ({ createOpenAICompatible: providerMocks.createOpenAICompatible }));
vi.mock("@ai-sdk/xai", () => ({ createXai: providerMocks.createXai }));
vi.mock("@openrouter/ai-sdk-provider", () => ({ createOpenRouter: providerMocks.createOpenRouter }));

describe("flight demo model provider config", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("preserves the existing OpenAI config defaults and dispatches to responses plus embeddings", async () => {
    const { createConfiguredModelSet } = await import("../server/flight-agent.js");
    const config = parseFlightDemoConfig(configWithModels({
      provider: "openai",
      roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
    }));

    const models = createConfiguredModelSet(config, "test-openai-key");

    expect(config.models).toMatchObject({
      provider: "openai",
      apiKeyEnv: "OPENAI_API_KEY",
    });
    expect(models.response).toMatchObject({ provider: "openai.responses", model: "gpt-5.4-mini" });
    expect(models.journeyEmbedding).toMatchObject({ provider: "openai.embedding", model: "text-embedding-3-small" });
    expect(providerMocks.createOpenAI).toHaveBeenCalledWith({ apiKey: "test-openai-key" });
  });

  it("preserves OpenRouter options and dispatches to chat plus text embeddings", async () => {
    const { createConfiguredModelSet } = await import("../server/flight-agent.js");
    const config = parseFlightDemoConfig(configWithModels({
      provider: "openrouter",
      appName: "Cognidesk Flight Demo",
      siteUrl: "https://example.test",
      roles: roles("openai/gpt-5.4-mini", "openai/text-embedding-3-small"),
    }));

    const models = createConfiguredModelSet(config, "test-openrouter-key");

    expect(models.response).toMatchObject({ provider: "openrouter.chat", model: "openai/gpt-5.4-mini" });
    expect(models.journeyEmbedding).toMatchObject({
      provider: "openrouter.embedding",
      model: "openai/text-embedding-3-small",
    });
    expect(providerMocks.createOpenRouter).toHaveBeenCalledWith({
      apiKey: "test-openrouter-key",
      appName: "Cognidesk Flight Demo",
      appUrl: "https://example.test",
    });
  });

  it.each([
    ["google", "google.chat", "google.embedding", "gemini-2.5-flash", "gemini-embedding-001"],
    ["mistral", "mistral.chat", "mistral.embedding", "mistral-medium-latest", "codestral-embed"],
    ["cohere", "cohere.language", "cohere.embedding", "command-a-03-2025", "embed-v4.0"],
    ["azure-openai", "azure-openai.responses", "azure-openai.embedding", "gpt-5-mini", "text-embedding-3-small"],
    [
      "openai-compatible",
      "openai-compatible.language",
      "openai-compatible.embedding",
      "compatible-chat-model",
      "compatible-embedding-model",
    ],
  ])("parses and dispatches %s as a text and embedding provider", async (
    provider,
    expectedTextProvider,
    expectedEmbeddingProvider,
    textModel,
    embeddingModel,
  ) => {
    const { createConfiguredModelSet } = await import("../server/flight-agent.js");
    const config = parseFlightDemoConfig(configWithModels({
      provider,
      ...(provider === "azure-openai" ? { resourceName: "test-resource" } : {}),
      ...(provider === "openai-compatible" ? { baseURL: "https://compatible.example/v1", name: "local-compatible" } : {}),
      roles: roles(textModel, embeddingModel),
    }));

    const models = createConfiguredModelSet(config, "test-language-key");

    expect(models.response).toMatchObject({ provider: expectedTextProvider, model: textModel });
    expect(models.journeyEmbedding).toMatchObject({ provider: expectedEmbeddingProvider, model: embeddingModel });
  });

  it.each([
    ["anthropic", "anthropic.chat", "claude-sonnet-4-5"],
    ["groq", "groq.language", "llama-3.3-70b-versatile"],
    ["xai", "xai.chat", "grok-4"],
  ])("supports %s text with a separate embedding provider", async (provider, expectedTextProvider, textModel) => {
    const { createConfiguredModelSet } = await import("../server/flight-agent.js");
    const config = parseFlightDemoConfig(configWithModels({
      provider,
      roles: roles(textModel, "text-embedding-3-small"),
      embedding: {
        provider: "openai",
        apiKeyEnv: "OPENAI_EMBEDDING_KEY",
      },
    }));

    const models = createConfiguredModelSet(config, {
      language: "test-language-key",
      embedding: "test-embedding-key",
    });

    expect(models.response).toMatchObject({ provider: expectedTextProvider, model: textModel });
    expect(models.journeyEmbedding).toMatchObject({
      provider: "openai.embedding",
      model: "text-embedding-3-small",
    });
    expect(providerMocks.createOpenAI).toHaveBeenCalledWith({ apiKey: "test-embedding-key" });
  });

  it("rejects text-only providers without a separate embedding provider", () => {
    expect(() => parseFlightDemoConfig(configWithModels({
      provider: "anthropic",
      roles: roles("claude-sonnet-4-5", "text-embedding-3-small"),
    }))).toThrow(z.ZodError);
  });

  it("requires endpoint settings for endpoint-backed providers", () => {
    expect(() => parseFlightDemoConfig(configWithModels({
      provider: "azure-openai",
      roles: roles("gpt-5-mini", "text-embedding-3-small"),
    }))).toThrow(z.ZodError);

    expect(() => parseFlightDemoConfig(configWithModels({
      provider: "openai-compatible",
      roles: roles("chat-model", "embedding-model"),
    }))).toThrow(z.ZodError);
  });

  it("reads separate language and embedding credentials without live provider calls", () => {
    process.env.TEST_TEXT_PROVIDER_KEY = "text-key";
    process.env.TEST_EMBEDDING_PROVIDER_KEY = "embedding-key";
    const config = parseFlightDemoConfig(configWithModels({
      provider: "anthropic",
      apiKeyEnv: "TEST_TEXT_PROVIDER_KEY",
      roles: roles("claude-sonnet-4-5", "text-embedding-3-small"),
      embedding: {
        provider: "openai",
        apiKeyEnv: "TEST_EMBEDDING_PROVIDER_KEY",
      },
    }));

    expect(requireConfiguredModelApiKeys(config)).toEqual({
      language: "text-key",
      embedding: "embedding-key",
    });
  });

  it("reads ElevenLabs voice credentials without live provider calls", () => {
    process.env.TEST_ELEVENLABS_KEY = "elevenlabs-key";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      voice: {
        provider: "elevenlabs",
        apiKeyEnv: "TEST_ELEVENLABS_KEY",
        voiceId: "elevenlabs-voice-id",
        textToSpeechModelId: "eleven_multilingual_v2",
        speechToTextModelId: "scribe_v1",
        languageCode: "en",
      },
    });

    expect(config.voice).toMatchObject({
      provider: "elevenlabs",
      voiceId: "elevenlabs-voice-id",
    });
    expect(getConfiguredVoiceProviderSecrets(config)).toEqual({
      provider: "elevenlabs",
      apiKey: "elevenlabs-key",
    });
  });

  it("reads Azure Speech voice credentials without live provider calls", () => {
    process.env.TEST_AZURE_SPEECH_KEY = "azure-key";
    process.env.TEST_AZURE_SPEECH_REGION = "westeurope";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      voice: {
        provider: "azure-speech",
        keyEnv: "TEST_AZURE_SPEECH_KEY",
        regionEnv: "TEST_AZURE_SPEECH_REGION",
        voiceName: "en-US-AvaMultilingualNeural",
        language: "en-US",
      },
    });

    expect(config.voice).toMatchObject({
      provider: "azure-speech",
      voiceName: "en-US-AvaMultilingualNeural",
    });
    expect(getConfiguredVoiceProviderSecrets(config)).toEqual({
      provider: "azure-speech",
      speechKey: "azure-key",
      region: "westeurope",
    });
  });

  it("reads AWS Speech voice credentials without live provider calls", () => {
    process.env.TEST_AWS_ACCESS_KEY_ID = "aws-access-key";
    process.env.TEST_AWS_SECRET_ACCESS_KEY = "aws-secret-key";
    process.env.TEST_AWS_REGION = "eu-central-1";
    process.env.TEST_AWS_SESSION_TOKEN = "aws-session-token";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      voice: {
        provider: "aws-speech",
        accessKeyIdEnv: "TEST_AWS_ACCESS_KEY_ID",
        secretAccessKeyEnv: "TEST_AWS_SECRET_ACCESS_KEY",
        sessionTokenEnv: "TEST_AWS_SESSION_TOKEN",
        regionEnv: "TEST_AWS_REGION",
        languageCode: "en-US",
        voiceId: "Joanna",
        engine: "neural",
      },
    });

    expect(config.voice).toMatchObject({
      provider: "aws-speech",
      voiceId: "Joanna",
    });
    expect(getConfiguredVoiceProviderSecrets(config)).toEqual({
      provider: "aws-speech",
      accessKeyId: "aws-access-key",
      secretAccessKey: "aws-secret-key",
      sessionToken: "aws-session-token",
      region: "eu-central-1",
    });
  });

  it("reads Google Cloud Speech voice credentials without live provider calls", () => {
    process.env.TEST_GOOGLE_CLOUD_ACCESS_TOKEN = "google-token";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      voice: {
        provider: "google-speech",
        accessTokenEnv: "TEST_GOOGLE_CLOUD_ACCESS_TOKEN",
        languageCode: "en-US",
        voiceName: "en-US-Chirp3-HD-Achernar",
        speechToTextModel: "latest_short",
      },
    });

    expect(config.voice).toMatchObject({
      provider: "google-speech",
      voiceName: "en-US-Chirp3-HD-Achernar",
    });
    expect(getConfiguredVoiceProviderSecrets(config)).toEqual({
      provider: "google-speech",
      accessToken: "google-token",
    });
  });

  it("reads Deepgram voice credentials without live provider calls", () => {
    process.env.TEST_DEEPGRAM_API_KEY = "deepgram-key";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      voice: {
        provider: "deepgram",
        apiKeyEnv: "TEST_DEEPGRAM_API_KEY",
        language: "en-US",
        speechToTextModel: "nova-3",
        textToSpeechModel: "aura-2-thalia-en",
      },
    });

    expect(config.voice).toMatchObject({
      provider: "deepgram",
      textToSpeechModel: "aura-2-thalia-en",
    });
    expect(getConfiguredVoiceProviderSecrets(config)).toEqual({
      provider: "deepgram",
      apiKey: "deepgram-key",
    });
  });
});

function configWithModels(models: Record<string, unknown>) {
  return {
    models,
    storage: {
      sqlitePath: ":memory:",
      knowledgeIndexPath: ".data/test-knowledge-index.json",
    },
  };
}

function roles(textModel: string, embeddingModel: string): FlightDemoConfig["models"]["roles"] {
  return {
    response: textModel,
    compaction: textModel,
    matcher: textModel,
    extraction: textModel,
    citationPostProcessing: textModel,
    journeyEmbedding: embeddingModel,
  };
}
