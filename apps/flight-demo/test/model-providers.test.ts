import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import {
  flightDemoCorsEnabled,
  flightDemoExternalApisEnabled,
  flightDemoExternalIntegrationJourneysEnabled,
  flightDemoStudioServiceToken,
  getConfiguredEmailDeliveryConfig,
  getConfiguredEmailReplyVerificationConfig,
  getConfiguredWhatsAppDeliveryConfig,
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
    const { createConfiguredModelSet } = await import("../server/agent/index.js");
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
    const { createConfiguredModelSet } = await import("../server/agent/index.js");
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
    const { createConfiguredModelSet } = await import("../server/agent/index.js");
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
    const { createConfiguredModelSet } = await import("../server/agent/index.js");
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

  it("requires an explicit Studio target token outside local development", () => {
    expect(flightDemoStudioServiceToken({ NODE_ENV: "development" })).toBe("dev-studio-token");
    expect(flightDemoStudioServiceToken({
      NODE_ENV: "production",
      COGNIDESK_STUDIO_TARGET_TOKEN: "target-secret",
    })).toBe("target-secret");
    expect(() => flightDemoStudioServiceToken({ NODE_ENV: "production" })).toThrow("COGNIDESK_STUDIO_TARGET_TOKEN is required");
    expect(() => flightDemoStudioServiceToken({
      NODE_ENV: "development",
      COGNIDESK_FLIGHT_DEMO_HOSTED: "true",
    })).toThrow("COGNIDESK_STUDIO_TARGET_TOKEN is required");
    expect(() => flightDemoStudioServiceToken({
      NODE_ENV: "production",
      COGNIDESK_STUDIO_TARGET_TOKEN: "dev-studio-token",
    })).toThrow("must not use dev-studio-token");
  });

  it("defaults CORS to local-only unless explicitly configured", () => {
    expect(flightDemoCorsEnabled({ NODE_ENV: "development" })).toBe(true);
    expect(flightDemoCorsEnabled({ NODE_ENV: "production" })).toBe(false);
    expect(flightDemoCorsEnabled({
      NODE_ENV: "development",
      COGNIDESK_FLIGHT_DEMO_HOSTED: "true",
    })).toBe(false);
    expect(flightDemoCorsEnabled({
      NODE_ENV: "production",
      COGNIDESK_CORS: "true",
    })).toBe(true);
    expect(flightDemoCorsEnabled({
      NODE_ENV: "development",
      COGNIDESK_CORS: "false",
    })).toBe(false);
    expect(() => flightDemoCorsEnabled({
      NODE_ENV: "development",
      COGNIDESK_CORS: "sometimes",
    })).toThrow("COGNIDESK_CORS must be a boolean-like value");
  });

  it("keeps external APIs disabled unless explicitly opted in", () => {
    expect(flightDemoExternalApisEnabled({})).toBe(false);
    expect(flightDemoExternalApisEnabled({ FLIGHT_DEMO_EXTERNAL_APIS: "true" })).toBe(true);
    expect(flightDemoExternalApisEnabled({ FLIGHT_DEMO_EXTERNAL_APIS: "1" })).toBe(true);
    expect(flightDemoExternalApisEnabled({ FLIGHT_DEMO_EXTERNAL_APIS: "false" })).toBe(false);
    expect(flightDemoExternalApisEnabled({ COGNIDESK_FLIGHT_DEMO_EXTERNAL_APIS: "yes" })).toBe(true);
    expect(() => flightDemoExternalApisEnabled({
      FLIGHT_DEMO_EXTERNAL_APIS: "sometimes",
    })).toThrow("FLIGHT_DEMO_EXTERNAL_APIS must be a boolean-like value");
  });

  it("allows external integration journeys to be toggled independently", () => {
    expect(flightDemoExternalIntegrationJourneysEnabled({})).toEqual({
      secureEmail: false,
      discordHandoff: false,
      whatsapp: false,
    });
    expect(flightDemoExternalIntegrationJourneysEnabled({
      FLIGHT_DEMO_EXTERNAL_APIS: "true",
      FLIGHT_DEMO_WHATSAPP_JOURNEY: "false",
    })).toEqual({
      secureEmail: true,
      discordHandoff: true,
      whatsapp: false,
    });
    expect(flightDemoExternalIntegrationJourneysEnabled({
      FLIGHT_DEMO_SECURE_EMAIL_JOURNEY: "true",
      FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY: "false",
      FLIGHT_DEMO_WHATSAPP_JOURNEY: "true",
    })).toEqual({
      secureEmail: true,
      discordHandoff: false,
      whatsapp: true,
    });
    expect(() => flightDemoExternalIntegrationJourneysEnabled({
      FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY: "maybe",
    })).toThrow("FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY must be a boolean-like value");
  });

  it("builds runtime parts with local models and local knowledge when external APIs are not enabled", async () => {
    process.env.FLIGHT_DEMO_EXTERNAL_APIS = "false";
    delete process.env.COGNIDESK_FLIGHT_DEMO_EXTERNAL_APIS;
    delete process.env.OPENAI_API_KEY;
    const { createFlightDemoRuntimeParts } = await import("../server/agent/index.js");
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      storage: {
        sqlitePath: ":memory:",
        knowledgeIndexPath: ".data/missing-local-demo-index.json",
      },
    });

    const parts = await createFlightDemoRuntimeParts({ config });

    expect(parts.models.response).toMatchObject({
      provider: "flight-demo-local",
      model: "deterministic-support-demo",
    });
    expect(parts.knowledgeIndex).toMatchObject({
      embeddingProvider: "flight-demo-local",
      embeddingModel: "keyword-embedding",
    });
    expect(parts.knowledgeIndex.entries.length).toBeGreaterThan(0);
    expect(parts.journeyIndex.entries.length).toBeGreaterThan(0);
    const journeyIds = parts.agent.journeys.map((journey) => journey.id);
    expect(journeyIds).not.toContain("secure-email-login");
    expect(journeyIds).not.toContain("whatsapp-customer-message");
    expect(journeyIds).not.toContain("human-handoff");
  });

  it.each([
    {
      name: "secure email",
      flags: { secureEmail: true, discordHandoff: false, whatsapp: false },
      expectedJourneyId: "secure-email-login",
    },
    {
      name: "WhatsApp",
      flags: { secureEmail: false, discordHandoff: false, whatsapp: true },
      expectedJourneyId: "whatsapp-customer-message",
    },
    {
      name: "Discord handoff",
      flags: { secureEmail: false, discordHandoff: true, whatsapp: false },
      expectedJourneyId: "human-handoff",
    },
  ])("can register only the $name journey while using local models", async ({ flags, expectedJourneyId }) => {
    process.env.FLIGHT_DEMO_EXTERNAL_APIS = "false";
    delete process.env.COGNIDESK_FLIGHT_DEMO_EXTERNAL_APIS;
    delete process.env.OPENAI_API_KEY;
    const { createFlightDemoRuntimeParts } = await import("../server/agent/index.js");
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      storage: {
        sqlitePath: ":memory:",
        knowledgeIndexPath: ".data/missing-local-demo-index.json",
      },
    });

    const parts = await createFlightDemoRuntimeParts({
      config,
      externalIntegrationJourneysEnabled: flags,
    });
    const journeyIds = parts.agent.journeys.map((journey) => journey.id);

    expect(parts.models.response.provider).toBe("flight-demo-local");
    expect(journeyIds).toContain(expectedJourneyId);
    for (const journeyId of ["secure-email-login", "whatsapp-customer-message", "human-handoff"]) {
      if (journeyId !== expectedJourneyId) expect(journeyIds).not.toContain(journeyId);
    }
  });

  it("reports secure-email SMTP as not configured until SMTP env secrets exist", () => {
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      email: {
        provider: "smtp",
        hostEnv: "TEST_FLIGHT_EMAIL_SMTP_HOST",
        userEnv: "TEST_FLIGHT_EMAIL_SMTP_USER",
        passwordEnv: "TEST_FLIGHT_EMAIL_SMTP_PASSWORD",
      },
    });

    expect(getConfiguredEmailDeliveryConfig(config)).toMatchObject({
      provider: "smtp",
      configured: false,
      missingEnv: [
        "TEST_FLIGHT_EMAIL_SMTP_HOST",
        "TEST_FLIGHT_EMAIL_SMTP_USER",
        "TEST_FLIGHT_EMAIL_SMTP_PASSWORD",
      ],
    });
  });

  it("reads secure-email SMTP delivery settings without sending mail", () => {
    process.env.TEST_FLIGHT_EMAIL_SMTP_HOST = "smtp.example.test";
    process.env.TEST_FLIGHT_EMAIL_SMTP_PORT = "465";
    process.env.TEST_FLIGHT_EMAIL_SMTP_SECURE = "true";
    process.env.TEST_FLIGHT_EMAIL_SMTP_USER = "sender@example.test";
    process.env.TEST_FLIGHT_EMAIL_SMTP_PASSWORD = "smtp-password";
    process.env.TEST_FLIGHT_EMAIL_FROM = "support@example.test";
    process.env.TEST_FLIGHT_EMAIL_REPLY_TO = "help@example.test";
    process.env.TEST_FLIGHT_EMAIL_RECIPIENT_OVERRIDE = "demo@example.test";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      email: {
        provider: "smtp",
        hostEnv: "TEST_FLIGHT_EMAIL_SMTP_HOST",
        portEnv: "TEST_FLIGHT_EMAIL_SMTP_PORT",
        secureEnv: "TEST_FLIGHT_EMAIL_SMTP_SECURE",
        userEnv: "TEST_FLIGHT_EMAIL_SMTP_USER",
        passwordEnv: "TEST_FLIGHT_EMAIL_SMTP_PASSWORD",
        fromEnv: "TEST_FLIGHT_EMAIL_FROM",
        replyToEnv: "TEST_FLIGHT_EMAIL_REPLY_TO",
        recipientOverrideEnv: "TEST_FLIGHT_EMAIL_RECIPIENT_OVERRIDE",
        loginBaseUrl: "https://auth.example.test/flight/login",
      },
    });

    expect(getConfiguredEmailDeliveryConfig(config)).toMatchObject({
      provider: "smtp",
      configured: true,
      host: "smtp.example.test",
      port: 465,
      secure: true,
      user: "sender@example.test",
      password: "smtp-password",
      from: "support@example.test",
      replyTo: "help@example.test",
      recipientOverride: "demo@example.test",
      loginBaseUrl: "https://auth.example.test/flight/login",
    });
  });

  it("reads secure-email reply verification from IMAP env and reuses SMTP mailbox credentials", () => {
    process.env.TEST_FLIGHT_EMAIL_SMTP_USER = "sender@example.test";
    process.env.TEST_FLIGHT_EMAIL_SMTP_PASSWORD = "smtp-app-password";
    process.env.TEST_FLIGHT_EMAIL_IMAP_HOST = "imap.example.test";
    process.env.TEST_FLIGHT_EMAIL_IMAP_PORT = "993";
    process.env.TEST_FLIGHT_EMAIL_IMAP_SECURE = "true";
    process.env.TEST_FLIGHT_EMAIL_IMAP_MAILBOX = "Archive";
    process.env.TEST_FLIGHT_EMAIL_IMAP_POLL_INTERVAL_MS = "5000";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      email: {
        provider: "smtp",
        userEnv: "TEST_FLIGHT_EMAIL_SMTP_USER",
        passwordEnv: "TEST_FLIGHT_EMAIL_SMTP_PASSWORD",
        replyVerification: {
          hostEnv: "TEST_FLIGHT_EMAIL_IMAP_HOST",
          portEnv: "TEST_FLIGHT_EMAIL_IMAP_PORT",
          secureEnv: "TEST_FLIGHT_EMAIL_IMAP_SECURE",
          userEnv: "TEST_FLIGHT_EMAIL_IMAP_USER",
          passwordEnv: "TEST_FLIGHT_EMAIL_IMAP_PASSWORD",
          mailboxEnv: "TEST_FLIGHT_EMAIL_IMAP_MAILBOX",
          pollIntervalMsEnv: "TEST_FLIGHT_EMAIL_IMAP_POLL_INTERVAL_MS",
          mailbox: "INBOX",
          pollIntervalMs: 15_000,
          lookbackMinutes: 30,
        },
      },
    });

    expect(getConfiguredEmailReplyVerificationConfig(config)).toMatchObject({
      provider: "imap",
      configured: true,
      enabled: true,
      host: "imap.example.test",
      port: 993,
      secure: true,
      user: "sender@example.test",
      password: "smtp-app-password",
      mailbox: "Archive",
      pollIntervalMs: 5000,
      lookbackMinutes: 30,
    });
  });

  it("reports secure-email reply verification as not configured without an IMAP host or mailbox credentials", () => {
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      email: {
        provider: "smtp",
        userEnv: "TEST_FLIGHT_EMAIL_SMTP_USER",
        passwordEnv: "TEST_FLIGHT_EMAIL_SMTP_PASSWORD",
        replyVerification: {
          hostEnv: "TEST_FLIGHT_EMAIL_IMAP_HOST",
          userEnv: "TEST_FLIGHT_EMAIL_IMAP_USER",
          passwordEnv: "TEST_FLIGHT_EMAIL_IMAP_PASSWORD",
        },
      },
    });

    expect(getConfiguredEmailReplyVerificationConfig(config)).toMatchObject({
      provider: "imap",
      configured: false,
      enabled: true,
      missingEnv: [
        "TEST_FLIGHT_EMAIL_IMAP_HOST",
        "TEST_FLIGHT_EMAIL_IMAP_USER or TEST_FLIGHT_EMAIL_SMTP_USER",
        "TEST_FLIGHT_EMAIL_IMAP_PASSWORD or TEST_FLIGHT_EMAIL_SMTP_PASSWORD",
      ],
    });
  });

  it("reports WhatsApp delivery as disabled by default", () => {
    const config = parseFlightDemoConfig(configWithModels({
      provider: "openai",
      roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
    }));

    expect(getConfiguredWhatsAppDeliveryConfig(config)).toMatchObject({
      provider: "whatsapp",
      configured: false,
      enabled: false,
      missingEnv: [],
      confirmationBaseUrl: "https://auth.cognidesk.local/flight-demo/whatsapp",
    });
  });

  it("reports enabled WhatsApp send-only delivery as blocked until Cloud API send env exists", () => {
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      whatsapp: {
        enabled: true,
        accessTokenEnv: "TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN",
        phoneNumberIdEnv: "TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID",
        appSecretEnv: "TEST_FLIGHT_WHATSAPP_APP_SECRET",
      },
    });

    expect(getConfiguredWhatsAppDeliveryConfig(config)).toMatchObject({
      provider: "whatsapp",
      configured: false,
      enabled: true,
      missingEnv: [
        "TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN",
        "TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID",
      ],
    });
  });

  it("allows WhatsApp send-only delivery without webhook app secret", () => {
    process.env.TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN = "whatsapp-token";
    process.env.TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID = "phone-number-id";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      whatsapp: {
        enabled: true,
        accessTokenEnv: "TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN",
        phoneNumberIdEnv: "TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID",
        appSecretEnv: "TEST_FLIGHT_WHATSAPP_APP_SECRET",
      },
    });

    expect(getConfiguredWhatsAppDeliveryConfig(config)).toMatchObject({
      provider: "whatsapp",
      transport: "cloud-api",
      providerPackageId: "messaging.whatsapp",
      configured: true,
      accessToken: "whatsapp-token",
      phoneNumberId: "phone-number-id",
    });
    expect(getConfiguredWhatsAppDeliveryConfig(config)).not.toHaveProperty("appSecret");
  });

  it("configures WhatsApp Web linked-device delivery without Meta Business credentials", () => {
    process.env.TEST_FLIGHT_WHATSAPP_PROVIDER = "web";
    process.env.TEST_FLIGHT_WHATSAPP_WEB_AUTH_STATE_DIR = "/tmp/cognidesk-wa";
    process.env.TEST_FLIGHT_WHATSAPP_WEB_PAIRING_PHONE = "+15550123";
    process.env.TEST_FLIGHT_WHATSAPP_WEB_CONNECT_TIMEOUT_MS = "12000";
    process.env.TEST_FLIGHT_WHATSAPP_WEB_SEND_TIMEOUT_MS = "8000";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      whatsapp: {
        enabled: true,
        provider: "cloud-api",
        providerEnv: "TEST_FLIGHT_WHATSAPP_PROVIDER",
        accessTokenEnv: "TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN",
        phoneNumberIdEnv: "TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID",
        webAuthStateDirEnv: "TEST_FLIGHT_WHATSAPP_WEB_AUTH_STATE_DIR",
        webPairingPhoneEnv: "TEST_FLIGHT_WHATSAPP_WEB_PAIRING_PHONE",
        webConnectTimeoutMsEnv: "TEST_FLIGHT_WHATSAPP_WEB_CONNECT_TIMEOUT_MS",
        webSendTimeoutMsEnv: "TEST_FLIGHT_WHATSAPP_WEB_SEND_TIMEOUT_MS",
      },
    });

    expect(getConfiguredWhatsAppDeliveryConfig(config)).toMatchObject({
      provider: "whatsapp",
      transport: "web",
      providerPackageId: "messaging.whatsapp-web",
      configured: true,
      authStateDir: "/tmp/cognidesk-wa",
      pairingPhoneNumber: "+15550123",
      connectTimeoutMs: 12000,
      sendTimeoutMs: 8000,
    });
    expect(getConfiguredWhatsAppDeliveryConfig(config)).not.toHaveProperty("accessToken");
    expect(getConfiguredWhatsAppDeliveryConfig(config)).not.toHaveProperty("recipientOverride");
  });

  it("reads WhatsApp delivery settings without sending provider messages", () => {
    process.env.TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN = "whatsapp-token";
    process.env.TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID = "phone-number-id";
    process.env.TEST_FLIGHT_WHATSAPP_APP_SECRET = "app-secret";
    process.env.TEST_FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN = "verify-token";
    process.env.TEST_FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL = "https://auth.example.test/whatsapp";
    const config = parseFlightDemoConfig({
      ...configWithModels({
        provider: "openai",
        roles: roles("gpt-5.4-mini", "text-embedding-3-small"),
      }),
      whatsapp: {
        enabled: true,
        accessTokenEnv: "TEST_FLIGHT_WHATSAPP_ACCESS_TOKEN",
        phoneNumberIdEnv: "TEST_FLIGHT_WHATSAPP_PHONE_NUMBER_ID",
        appSecretEnv: "TEST_FLIGHT_WHATSAPP_APP_SECRET",
        verifyTokenEnv: "TEST_FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN",
        confirmationBaseUrl: "https://auth.example.test/default-whatsapp",
        confirmationBaseUrlEnv: "TEST_FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL",
        graphApiBaseUrl: "https://graph.facebook.example.test",
        graphApiVersion: "v25.0",
        wabaWebhookSubscribed: true,
      },
    });

    expect(getConfiguredWhatsAppDeliveryConfig(config)).toMatchObject({
      provider: "whatsapp",
      transport: "cloud-api",
      providerPackageId: "messaging.whatsapp",
      configured: true,
      accessToken: "whatsapp-token",
      phoneNumberId: "phone-number-id",
      appSecret: "app-secret",
      verifyToken: "verify-token",
      confirmationBaseUrl: "https://auth.example.test/whatsapp",
      graphApiBaseUrl: "https://graph.facebook.example.test",
      graphApiVersion: "v25.0",
      wabaWebhookSubscribed: true,
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
