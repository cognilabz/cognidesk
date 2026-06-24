import { readFile } from "node:fs/promises";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import { z } from "zod";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const workspaceRoot = resolve(root, "../..");
let envLoaded = false;

const roleModelsSchema = z.object({
  response: z.string().min(1),
  compaction: z.string().min(1),
  matcher: z.string().min(1),
  extraction: z.string().min(1),
  citationPostProcessing: z.string().min(1),
  journeyEmbedding: z.string().min(1),
});

const optionalBaseUrlSchema = z.string().url().optional();

const commonProviderFields = {
  baseURL: optionalBaseUrlSchema,
};

const openaiProviderSchema = z.object({
  provider: z.literal("openai"),
  apiKeyEnv: z.string().min(1).default("OPENAI_API_KEY"),
  ...commonProviderFields,
});

const openrouterProviderSchema = z.object({
  provider: z.literal("openrouter"),
  apiKeyEnv: z.string().min(1).default("OPENROUTER_KEY"),
  appName: z.string().min(1).optional(),
  siteUrl: z.string().url().optional(),
});

const anthropicProviderSchema = z.object({
  provider: z.literal("anthropic"),
  apiKeyEnv: z.string().min(1).default("ANTHROPIC_API_KEY"),
  ...commonProviderFields,
});

const googleProviderSchema = z.object({
  provider: z.literal("google"),
  apiKeyEnv: z.string().min(1).default("GOOGLE_GENERATIVE_AI_API_KEY"),
  ...commonProviderFields,
});

const mistralProviderSchema = z.object({
  provider: z.literal("mistral"),
  apiKeyEnv: z.string().min(1).default("MISTRAL_API_KEY"),
  ...commonProviderFields,
});

const cohereProviderSchema = z.object({
  provider: z.literal("cohere"),
  apiKeyEnv: z.string().min(1).default("COHERE_API_KEY"),
  ...commonProviderFields,
});

const groqProviderSchema = z.object({
  provider: z.literal("groq"),
  apiKeyEnv: z.string().min(1).default("GROQ_API_KEY"),
  ...commonProviderFields,
});

const xaiProviderSchema = z.object({
  provider: z.literal("xai"),
  apiKeyEnv: z.string().min(1).default("XAI_API_KEY"),
  ...commonProviderFields,
});

const azureOpenAIProviderSchema = z.object({
  provider: z.literal("azure-openai"),
  apiKeyEnv: z.string().min(1).default("AZURE_OPENAI_API_KEY"),
  resourceName: z.string().min(1).optional(),
  baseURL: optionalBaseUrlSchema,
  apiVersion: z.string().min(1).optional(),
  useDeploymentBasedUrls: z.boolean().optional(),
});

const openAICompatibleProviderSchema = z.object({
  provider: z.literal("openai-compatible"),
  apiKeyEnv: z.string().min(1).default("OPENAI_COMPATIBLE_API_KEY"),
  name: z.string().min(1).default("openai-compatible"),
  baseURL: z.string().url(),
  includeUsage: z.boolean().optional(),
  supportsStructuredOutputs: z.boolean().optional(),
});

const embeddingProviderSchema = z.discriminatedUnion("provider", [
  openaiProviderSchema,
  openrouterProviderSchema,
  googleProviderSchema,
  mistralProviderSchema,
  cohereProviderSchema,
  azureOpenAIProviderSchema,
  openAICompatibleProviderSchema,
]);

const modelProviderSchema = z.discriminatedUnion("provider", [
  openaiProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  openrouterProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  anthropicProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  googleProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  mistralProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  cohereProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  groqProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  xaiProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  azureOpenAIProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
  openAICompatibleProviderSchema.extend({ roles: roleModelsSchema, embedding: embeddingProviderSchema.optional() }),
]).superRefine((models, ctx) => {
  if (isTextOnlyModelProvider(models.provider) && !models.embedding) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["embedding"],
      message: `${models.provider} does not expose embeddings through the AI SDK provider; configure models.embedding.`,
    });
  }
  validateEndpointBackedProvider(models, ctx);
  if (models.embedding) {
    validateEndpointBackedProvider(models.embedding, ctx, ["embedding"]);
  }
});

const openAIVoiceProviderSchema = z.object({
  provider: z.literal("openai"),
  apiKeyEnv: z.string().min(1).default("OPENAI_API_KEY"),
  voice: z.string().min(1).optional(),
  transcriptionLanguage: z.string().min(2).optional(),
});

const elevenLabsVoiceProviderSchema = z.object({
  provider: z.literal("elevenlabs"),
  apiKeyEnv: z.string().min(1).default("ELEVENLABS_API_KEY"),
  voiceId: z.string().min(1),
  textToSpeechModelId: z.string().min(1).optional(),
  speechToTextModelId: z.string().min(1).optional(),
  languageCode: z.string().min(2).nullable().optional(),
  outputFormat: z.string().min(1).optional(),
});

const azureSpeechVoiceProviderSchema = z.object({
  provider: z.literal("azure-speech"),
  keyEnv: z.string().min(1).default("AZURE_SPEECH_KEY"),
  regionEnv: z.string().min(1).default("AZURE_SPEECH_REGION"),
  voiceName: z.string().min(1),
  language: z.string().min(2).optional(),
  outputFormat: z.string().min(1).optional(),
});

const awsSpeechVoiceProviderSchema = z.object({
  provider: z.literal("aws-speech"),
  accessKeyIdEnv: z.string().min(1).default("AWS_ACCESS_KEY_ID"),
  secretAccessKeyEnv: z.string().min(1).default("AWS_SECRET_ACCESS_KEY"),
  sessionTokenEnv: z.string().min(1).optional(),
  regionEnv: z.string().min(1).default("AWS_REGION"),
  languageCode: z.string().min(2).default("en-US"),
  voiceId: z.string().min(1),
  engine: z.enum(["standard", "neural", "long-form", "generative"]).optional(),
  outputFormat: z.enum(["json", "mp3", "ogg_vorbis", "pcm", "ogg_opus"]).optional(),
});

const googleSpeechVoiceProviderSchema = z.object({
  provider: z.literal("google-speech"),
  accessTokenEnv: z.string().min(1).default("GOOGLE_CLOUD_ACCESS_TOKEN"),
  languageCode: z.string().min(2).default("en-US"),
  voiceName: z.string().min(1),
  speechToTextModel: z.string().min(1).optional(),
  textToSpeechModel: z.string().min(1).optional(),
  audioEncoding: z.string().min(1).optional(),
});

const deepgramVoiceProviderSchema = z.object({
  provider: z.literal("deepgram"),
  apiKeyEnv: z.string().min(1).default("DEEPGRAM_API_KEY"),
  language: z.string().min(2).optional(),
  speechToTextModel: z.string().min(1).optional(),
  textToSpeechModel: z.string().min(1),
  encoding: z.string().min(1).optional(),
});

const voiceProviderSchema = z.discriminatedUnion("provider", [
  openAIVoiceProviderSchema,
  elevenLabsVoiceProviderSchema,
  azureSpeechVoiceProviderSchema,
  awsSpeechVoiceProviderSchema,
  googleSpeechVoiceProviderSchema,
  deepgramVoiceProviderSchema,
]);

const discordThreadAutoArchiveDurationSchema = z.union([
  z.literal(60),
  z.literal(1440),
  z.literal(4320),
  z.literal(10080),
]);

const discordConfigSchema = z.object({
  enabled: z.boolean().default(false),
  botTokenEnv: z.string().min(1).default("DISCORD_BOT_TOKEN"),
  applicationId: z.string().min(1).optional(),
  guildId: z.string().min(1).optional(),
  supportChannelId: z.string().min(1).optional(),
  webAppUrl: z.string().url().optional(),
  threadAutoArchiveDuration: discordThreadAutoArchiveDurationSchema.default(1440),
  mirrorPollIntervalMs: z.number().int().positive().default(1_000),
}).superRefine((discord, ctx) => {
  if (!discord.enabled) return;
  for (const key of ["applicationId", "guildId", "supportChannelId", "webAppUrl"] as const) {
    if (discord[key]) continue;
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: [key],
      message: `discord.${key} is required when discord.enabled is true.`,
    });
  }
});

const defaultEmailConfig = {
  enabled: true,
  provider: "smtp" as const,
  hostEnv: "FLIGHT_EMAIL_SMTP_HOST",
  portEnv: "FLIGHT_EMAIL_SMTP_PORT",
  secureEnv: "FLIGHT_EMAIL_SMTP_SECURE",
  userEnv: "FLIGHT_EMAIL_SMTP_USER",
  passwordEnv: "FLIGHT_EMAIL_SMTP_PASSWORD",
  fromEnv: "FLIGHT_EMAIL_FROM",
  replyToEnv: "FLIGHT_EMAIL_REPLY_TO",
  recipientOverrideEnv: "FLIGHT_EMAIL_RECIPIENT_OVERRIDE",
  loginBaseUrl: "https://auth.cognidesk.local/flight-demo/login",
  loginBaseUrlEnv: "FLIGHT_EMAIL_LOGIN_BASE_URL",
  replyVerification: {
    enabled: true,
    hostEnv: "FLIGHT_EMAIL_IMAP_HOST",
    portEnv: "FLIGHT_EMAIL_IMAP_PORT",
    secureEnv: "FLIGHT_EMAIL_IMAP_SECURE",
    userEnv: "FLIGHT_EMAIL_IMAP_USER",
    passwordEnv: "FLIGHT_EMAIL_IMAP_PASSWORD",
    mailboxEnv: "FLIGHT_EMAIL_IMAP_MAILBOX",
    pollIntervalMsEnv: "FLIGHT_EMAIL_IMAP_POLL_INTERVAL_MS",
    mailbox: "INBOX",
    pollIntervalMs: 15_000,
    lookbackMinutes: 60,
  },
};

const defaultWhatsAppConfig = {
  enabled: false,
  accessTokenEnv: "FLIGHT_WHATSAPP_ACCESS_TOKEN",
  phoneNumberIdEnv: "FLIGHT_WHATSAPP_PHONE_NUMBER_ID",
  appSecretEnv: "FLIGHT_WHATSAPP_APP_SECRET",
  verifyTokenEnv: "FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN",
  recipientOverrideEnv: "FLIGHT_WHATSAPP_RECIPIENT_OVERRIDE",
  confirmationBaseUrl: "https://auth.cognidesk.local/flight-demo/whatsapp",
  confirmationBaseUrlEnv: "FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL",
  graphApiBaseUrl: "https://graph.facebook.com",
  graphApiVersion: "v25.0",
  wabaWebhookSubscribed: false,
};

const emailReplyVerificationConfigSchema = z.object({
  enabled: z.boolean().default(true),
  hostEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_HOST"),
  portEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_PORT"),
  secureEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_SECURE"),
  userEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_USER"),
  passwordEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_PASSWORD"),
  mailboxEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_MAILBOX"),
  pollIntervalMsEnv: z.string().min(1).default("FLIGHT_EMAIL_IMAP_POLL_INTERVAL_MS"),
  mailbox: z.string().min(1).default("INBOX"),
  pollIntervalMs: z.number().int().positive().default(15_000),
  lookbackMinutes: z.number().int().positive().default(60),
}).default(defaultEmailConfig.replyVerification);

const emailConfigSchema = z.object({
  enabled: z.boolean().default(true),
  provider: z.literal("smtp").default("smtp"),
  hostEnv: z.string().min(1).default("FLIGHT_EMAIL_SMTP_HOST"),
  portEnv: z.string().min(1).default("FLIGHT_EMAIL_SMTP_PORT"),
  secureEnv: z.string().min(1).default("FLIGHT_EMAIL_SMTP_SECURE"),
  userEnv: z.string().min(1).default("FLIGHT_EMAIL_SMTP_USER"),
  passwordEnv: z.string().min(1).default("FLIGHT_EMAIL_SMTP_PASSWORD"),
  fromEnv: z.string().min(1).default("FLIGHT_EMAIL_FROM"),
  replyToEnv: z.string().min(1).default("FLIGHT_EMAIL_REPLY_TO"),
  recipientOverrideEnv: z.string().min(1).default("FLIGHT_EMAIL_RECIPIENT_OVERRIDE"),
  loginBaseUrl: z.string().url().default("https://auth.cognidesk.local/flight-demo/login"),
  loginBaseUrlEnv: z.string().min(1).default("FLIGHT_EMAIL_LOGIN_BASE_URL"),
  replyVerification: emailReplyVerificationConfigSchema,
}).default(defaultEmailConfig);

const whatsAppConfigSchema = z.object({
  enabled: z.boolean().default(false),
  accessTokenEnv: z.string().min(1).default("FLIGHT_WHATSAPP_ACCESS_TOKEN"),
  phoneNumberIdEnv: z.string().min(1).default("FLIGHT_WHATSAPP_PHONE_NUMBER_ID"),
  appSecretEnv: z.string().min(1).default("FLIGHT_WHATSAPP_APP_SECRET"),
  verifyTokenEnv: z.string().min(1).default("FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN"),
  recipientOverrideEnv: z.string().min(1).default("FLIGHT_WHATSAPP_RECIPIENT_OVERRIDE"),
  confirmationBaseUrl: z.string().url().default("https://auth.cognidesk.local/flight-demo/whatsapp"),
  confirmationBaseUrlEnv: z.string().min(1).default("FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL"),
  graphApiBaseUrl: z.string().url().default("https://graph.facebook.com"),
  graphApiVersion: z.string().min(1).default("v25.0"),
  wabaWebhookSubscribed: z.boolean().default(false),
}).default(defaultWhatsAppConfig);

const flightDemoConfigSchema = z.object({
  models: modelProviderSchema,
  voice: voiceProviderSchema.optional(),
  discord: discordConfigSchema.optional(),
  email: emailConfigSchema,
  whatsapp: whatsAppConfigSchema,
  storage: z.object({
    sqlitePath: z.string().min(1),
    knowledgeIndexPath: z.string().min(1),
  }),
});

export type FlightDemoConfig = z.infer<typeof flightDemoConfigSchema>;
export type FlightDemoModelConfig = FlightDemoConfig["models"];
export type FlightDemoEmbeddingConfig = z.infer<typeof embeddingProviderSchema>;
export type FlightDemoModelProvider = FlightDemoModelConfig["provider"];
export type FlightDemoVoiceConfig = NonNullable<FlightDemoConfig["voice"]>;
export type FlightDemoDiscordConfig = NonNullable<FlightDemoConfig["discord"]>;
export type FlightDemoEmailConfig = FlightDemoConfig["email"];
export type FlightDemoWhatsAppConfig = FlightDemoConfig["whatsapp"];
export type EnabledFlightDemoDiscordConfig = FlightDemoDiscordConfig & {
  enabled: true;
  applicationId: string;
  guildId: string;
  supportChannelId: string;
  webAppUrl: string;
};
export type ConfiguredModelApiKeys = {
  language: string;
  embedding?: string;
};
export type ConfiguredVoiceProviderSecrets =
  | { provider: "openai"; apiKey: string }
  | { provider: "elevenlabs"; apiKey: string }
  | { provider: "azure-speech"; speechKey: string; region: string }
  | {
      provider: "aws-speech";
      accessKeyId: string;
      secretAccessKey: string;
      region: string;
      sessionToken?: string;
    }
  | { provider: "google-speech"; accessToken: string }
  | { provider: "deepgram"; apiKey: string };
export type ConfiguredDiscordSecrets = {
  botToken: string;
};
export type ConfiguredEmailDeliveryConfig =
  | {
      provider: "smtp";
      configured: true;
      host: string;
      port: number;
      secure: boolean;
      user: string;
      password: string;
      from: string;
      replyTo?: string;
      recipientOverride?: string;
      loginBaseUrl: string;
    }
  | {
      provider: "smtp";
      configured: false;
      reason: string;
      missingEnv: string[];
      loginBaseUrl: string;
    };
export type ConfiguredEmailReplyVerificationConfig =
  | {
      provider: "imap";
      configured: true;
      enabled: true;
      host: string;
      port: number;
      secure: boolean;
      user: string;
      password: string;
      mailbox: string;
      pollIntervalMs: number;
      lookbackMinutes: number;
    }
  | {
      provider: "imap";
      configured: false;
      enabled: boolean;
      reason: string;
      missingEnv: string[];
      mailbox: string;
      pollIntervalMs: number;
      lookbackMinutes: number;
    };
export type ConfiguredWhatsAppDeliveryConfig =
  | {
      provider: "whatsapp";
      configured: true;
      accessToken: string;
      phoneNumberId: string;
      appSecret: string;
      verifyToken?: string;
      recipientOverride?: string;
      confirmationBaseUrl: string;
      graphApiBaseUrl: string;
      graphApiVersion: string;
      wabaWebhookSubscribed: boolean;
    }
  | {
      provider: "whatsapp";
      configured: false;
      enabled: boolean;
      reason: string;
      missingEnv: string[];
      verifyToken?: string;
      recipientOverride?: string;
      confirmationBaseUrl: string;
      graphApiBaseUrl: string;
      graphApiVersion: string;
      wabaWebhookSubscribed: boolean;
    };

const textOnlyModelProviders = new Set<FlightDemoModelProvider>(["anthropic", "groq", "xai"]);
const embeddingCapableModelProviders = new Set<FlightDemoModelProvider>([
  "openai",
  "openrouter",
  "google",
  "mistral",
  "cohere",
  "azure-openai",
  "openai-compatible",
]);
const localDevStudioServiceToken = "dev-studio-token";

function validateEndpointBackedProvider(
  provider: { provider: string; resourceName?: string | undefined; baseURL?: string | undefined },
  ctx: z.RefinementCtx,
  path: string[] = [],
) {
  if (provider.provider === "azure-openai" && !provider.resourceName && !provider.baseURL) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: [...path, "resourceName"],
      message: "azure-openai requires either resourceName or baseURL.",
    });
  }
}

export function isTextOnlyModelProvider(provider: FlightDemoModelProvider) {
  return textOnlyModelProviders.has(provider);
}

export function providerSupportsEmbeddings(provider: FlightDemoModelProvider) {
  return embeddingCapableModelProviders.has(provider);
}

export function getConfiguredEmbeddingProvider(models: FlightDemoModelConfig): FlightDemoEmbeddingConfig {
  if (models.embedding) return models.embedding;
  if (providerSupportsEmbeddings(models.provider)) return models as FlightDemoEmbeddingConfig;
  throw new Error(
    `Flight demo provider '${models.provider}' needs models.embedding because its AI SDK provider does not expose embeddings.`,
  );
}

export function parseFlightDemoConfig(value: unknown): FlightDemoConfig {
  return flightDemoConfigSchema.parse(value);
}

export function flightDemoRoot() {
  return root;
}

export function loadFlightDemoEnv() {
  if (envLoaded) return;
  envLoaded = true;
  for (const file of [join(workspaceRoot, ".env"), join(root, ".env")]) {
    try {
      process.loadEnvFile(file);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    }
  }
}

export async function loadFlightDemoConfig(configPath = join(root, "config.json")) {
  loadFlightDemoEnv();
  let raw: string;
  try {
    raw = await readFile(configPath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      throw new Error(
        `Flight demo config not found at ${configPath}. Copy apps/flight-demo/config.example.json to config.json and adjust it.`,
      );
    }
    throw error;
  }
  return parseFlightDemoConfig(JSON.parse(raw));
}

export function resolveFlightDemoPath(path: string) {
  return isAbsolute(path) ? path : resolve(root, path);
}

export function requireConfiguredApiKey(config: FlightDemoConfig) {
  loadFlightDemoEnv();
  const apiKey = process.env[config.models.apiKeyEnv];
  if (!apiKey) {
    throw new Error(
      `Flight demo requires ${config.models.apiKeyEnv} for real ${config.models.provider} model calls.`,
    );
  }
  return apiKey;
}

export function requireConfiguredModelApiKeys(config: FlightDemoConfig): ConfiguredModelApiKeys {
  const language = requireConfiguredApiKey(config);
  const embeddingProvider = getConfiguredEmbeddingProvider(config.models);
  if (embeddingProvider.apiKeyEnv === config.models.apiKeyEnv) {
    return { language };
  }
  const embedding = process.env[embeddingProvider.apiKeyEnv];
  if (!embedding) {
    throw new Error(
      `Flight demo requires ${embeddingProvider.apiKeyEnv} for real ${embeddingProvider.provider} embedding calls.`,
    );
  }
  return { language, embedding };
}

export function getConfiguredVoiceProviderSecrets(config: FlightDemoConfig): ConfiguredVoiceProviderSecrets | undefined {
  loadFlightDemoEnv();
  if (!config.voice) return undefined;
  switch (config.voice.provider) {
    case "openai": {
      const apiKey = process.env[config.voice.apiKeyEnv];
      if (!apiKey) {
        throw new Error(
          `Flight demo voice requires ${config.voice.apiKeyEnv} for OpenAI Realtime calls.`,
        );
      }
      return { provider: "openai", apiKey };
    }
    case "elevenlabs": {
      const apiKey = process.env[config.voice.apiKeyEnv];
      if (!apiKey) {
        throw new Error(
          `Flight demo voice requires ${config.voice.apiKeyEnv} for ElevenLabs speech calls.`,
        );
      }
      return { provider: "elevenlabs", apiKey };
    }
    case "azure-speech": {
      const speechKey = process.env[config.voice.keyEnv];
      const region = process.env[config.voice.regionEnv];
      const missing: string[] = [];
      if (!speechKey) missing.push(config.voice.keyEnv);
      if (!region) missing.push(config.voice.regionEnv);
      if (missing.length > 0) {
        throw new Error(
          `Flight demo voice requires ${missing.join(" and ")} for Azure Speech calls.`,
        );
      }
      if (!speechKey || !region) {
        throw new Error("Flight demo voice requires Azure Speech credentials.");
      }
      return { provider: "azure-speech", speechKey, region };
    }
    case "aws-speech": {
      const accessKeyId = process.env[config.voice.accessKeyIdEnv];
      const secretAccessKey = process.env[config.voice.secretAccessKeyEnv];
      const region = process.env[config.voice.regionEnv];
      const sessionToken = config.voice.sessionTokenEnv ? process.env[config.voice.sessionTokenEnv] : undefined;
      const missing: string[] = [];
      if (!accessKeyId) missing.push(config.voice.accessKeyIdEnv);
      if (!secretAccessKey) missing.push(config.voice.secretAccessKeyEnv);
      if (!region) missing.push(config.voice.regionEnv);
      if (missing.length > 0) {
        throw new Error(
          `Flight demo voice requires ${missing.join(" and ")} for AWS Transcribe/Polly calls.`,
        );
      }
      if (!accessKeyId || !secretAccessKey || !region) {
        throw new Error("Flight demo voice requires AWS speech credentials.");
      }
      return {
        provider: "aws-speech",
        accessKeyId,
        secretAccessKey,
        region,
        ...(sessionToken ? { sessionToken } : {}),
      };
    }
    case "google-speech": {
      const accessToken = process.env[config.voice.accessTokenEnv];
      if (!accessToken) {
        throw new Error(
          `Flight demo voice requires ${config.voice.accessTokenEnv} for Google Cloud Speech calls.`,
        );
      }
      return {
        provider: "google-speech",
        accessToken,
      };
    }
    case "deepgram": {
      const apiKey = process.env[config.voice.apiKeyEnv];
      if (!apiKey) {
        throw new Error(
          `Flight demo voice requires ${config.voice.apiKeyEnv} for Deepgram speech calls.`,
        );
      }
      return { provider: "deepgram", apiKey };
    }
  }
}

export function getConfiguredDiscordIntegration(config: FlightDemoConfig): {
  config: EnabledFlightDemoDiscordConfig;
  secrets: ConfiguredDiscordSecrets;
} | undefined {
  loadFlightDemoEnv();
  if (!config.discord?.enabled) return undefined;
  if (
    !config.discord.applicationId
    || !config.discord.guildId
    || !config.discord.supportChannelId
    || !config.discord.webAppUrl
  ) {
    throw new Error("Flight demo Discord integration is enabled but required Discord configuration is missing.");
  }
  const botToken = process.env[config.discord.botTokenEnv];
  if (!botToken) {
    throw new Error(
      `Flight demo Discord integration requires ${config.discord.botTokenEnv} for Discord Gateway access.`,
    );
  }
  return {
    config: config.discord as EnabledFlightDemoDiscordConfig,
    secrets: { botToken },
  };
}

export function getConfiguredEmailDeliveryConfig(config: FlightDemoConfig): ConfiguredEmailDeliveryConfig {
  loadFlightDemoEnv();
  const email = config.email;
  const loginBaseUrl = readTrimmedEnv(email.loginBaseUrlEnv) ?? email.loginBaseUrl;
  if (!email.enabled) {
    return {
      provider: "smtp",
      configured: false,
      reason: "Flight demo secure-email SMTP delivery is disabled in config.json.",
      missingEnv: [],
      loginBaseUrl,
    };
  }

  const host = readTrimmedEnv(email.hostEnv);
  const user = readTrimmedEnv(email.userEnv);
  const password = readTrimmedEnv(email.passwordEnv);
  const missingEnv: string[] = [];
  if (!host) missingEnv.push(email.hostEnv);
  if (!user) missingEnv.push(email.userEnv);
  if (!password) missingEnv.push(email.passwordEnv);
  if (missingEnv.length > 0 || !host || !user || !password) {
    return {
      provider: "smtp",
      configured: false,
      reason: `Flight demo secure-email SMTP delivery requires ${missingEnv.join(", ")}.`,
      missingEnv,
      loginBaseUrl,
    };
  }

  const port = numberEnv(email.portEnv, 587);
  const secure = booleanEnv(email.secureEnv, port === 465);
  const from = readTrimmedEnv(email.fromEnv) ?? user;
  const replyTo = readTrimmedEnv(email.replyToEnv);
  const recipientOverride = readTrimmedEnv(email.recipientOverrideEnv);
  return {
    provider: "smtp",
    configured: true,
    host,
    port,
    secure,
    user,
    password,
    from,
    ...(replyTo ? { replyTo } : {}),
    ...(recipientOverride ? { recipientOverride } : {}),
    loginBaseUrl,
  };
}

export function getConfiguredEmailReplyVerificationConfig(
  config: FlightDemoConfig,
): ConfiguredEmailReplyVerificationConfig {
  loadFlightDemoEnv();
  const email = config.email;
  const reply = email.replyVerification;
  const mailbox = readTrimmedEnv(reply.mailboxEnv) ?? reply.mailbox;
  const pollIntervalMs = numberEnv(reply.pollIntervalMsEnv, reply.pollIntervalMs);
  if (!reply.enabled) {
    return {
      provider: "imap",
      configured: false,
      enabled: false,
      reason: "Flight demo email reply verification is disabled in config.json.",
      missingEnv: [],
      mailbox,
      pollIntervalMs,
      lookbackMinutes: reply.lookbackMinutes,
    };
  }

  const host = readTrimmedEnv(reply.hostEnv);
  const user = readTrimmedEnv(reply.userEnv) ?? readTrimmedEnv(email.userEnv);
  const password = readTrimmedEnv(reply.passwordEnv) ?? readTrimmedEnv(email.passwordEnv);
  const missingEnv: string[] = [];
  if (!host) missingEnv.push(reply.hostEnv);
  if (!user) missingEnv.push(`${reply.userEnv} or ${email.userEnv}`);
  if (!password) missingEnv.push(`${reply.passwordEnv} or ${email.passwordEnv}`);
  if (missingEnv.length > 0 || !host || !user || !password) {
    return {
      provider: "imap",
      configured: false,
      enabled: true,
      reason: `Flight demo email reply verification requires ${missingEnv.join(", ")}.`,
      missingEnv,
      mailbox,
      pollIntervalMs,
      lookbackMinutes: reply.lookbackMinutes,
    };
  }

  const port = numberEnv(reply.portEnv, 993);
  const secure = booleanEnv(reply.secureEnv, port === 993);
  return {
    provider: "imap",
    configured: true,
    enabled: true,
    host,
    port,
    secure,
    user,
    password,
    mailbox,
    pollIntervalMs,
    lookbackMinutes: reply.lookbackMinutes,
  };
}

export function getConfiguredWhatsAppDeliveryConfig(config: FlightDemoConfig): ConfiguredWhatsAppDeliveryConfig {
  loadFlightDemoEnv();
  const whatsapp = config.whatsapp;
  const confirmationBaseUrl = readTrimmedEnv(whatsapp.confirmationBaseUrlEnv) ?? whatsapp.confirmationBaseUrl;
  const verifyToken = readTrimmedEnv(whatsapp.verifyTokenEnv);
  const recipientOverride = readTrimmedEnv(whatsapp.recipientOverrideEnv);
  const base = {
    provider: "whatsapp" as const,
    confirmationBaseUrl,
    graphApiBaseUrl: whatsapp.graphApiBaseUrl,
    graphApiVersion: whatsapp.graphApiVersion,
    wabaWebhookSubscribed: whatsapp.wabaWebhookSubscribed,
    ...(verifyToken ? { verifyToken } : {}),
    ...(recipientOverride ? { recipientOverride } : {}),
  };
  if (!whatsapp.enabled) {
    return {
      ...base,
      configured: false,
      enabled: false,
      reason: "Flight demo WhatsApp delivery is disabled in config.json.",
      missingEnv: [],
    };
  }

  const accessToken = readTrimmedEnv(whatsapp.accessTokenEnv);
  const phoneNumberId = readTrimmedEnv(whatsapp.phoneNumberIdEnv);
  const appSecret = readTrimmedEnv(whatsapp.appSecretEnv);
  const missingEnv: string[] = [];
  if (!accessToken) missingEnv.push(whatsapp.accessTokenEnv);
  if (!phoneNumberId) missingEnv.push(whatsapp.phoneNumberIdEnv);
  if (!appSecret) missingEnv.push(whatsapp.appSecretEnv);
  if (missingEnv.length > 0 || !accessToken || !phoneNumberId || !appSecret) {
    return {
      ...base,
      configured: false,
      enabled: true,
      reason: `Flight demo WhatsApp delivery requires ${missingEnv.join(", ")}.`,
      missingEnv,
    };
  }

  return {
    ...base,
    configured: true,
    accessToken,
    phoneNumberId,
    appSecret,
  };
}

export function getConfiguredVoiceApiKey(config: FlightDemoConfig) {
  const secrets = getConfiguredVoiceProviderSecrets(config);
  if (!secrets) return undefined;
  if ("apiKey" in secrets) {
    return secrets.apiKey;
  }
  throw new Error(`${secrets.provider} does not use a single API key; call getConfiguredVoiceProviderSecrets instead.`);
}

export function flightDemoStudioServiceToken(env: NodeJS.ProcessEnv = process.env) {
  const configured = env.COGNIDESK_STUDIO_TARGET_TOKEN?.trim();
  if (configured) {
    if (!allowsLocalFlightDemoDefaults(env) && configured === localDevStudioServiceToken) {
      throw new Error("COGNIDESK_STUDIO_TARGET_TOKEN must not use dev-studio-token outside local development.");
    }
    return configured;
  }
  if (!allowsLocalFlightDemoDefaults(env)) {
    throw new Error("COGNIDESK_STUDIO_TARGET_TOKEN is required for the Flight Demo Studio adapter outside local development.");
  }
  return localDevStudioServiceToken;
}

export function flightDemoCorsEnabled(env: NodeJS.ProcessEnv = process.env) {
  const configured = env.COGNIDESK_CORS?.trim().toLowerCase();
  if (configured) {
    if (["1", "true", "yes", "on"].includes(configured)) return true;
    if (["0", "false", "no", "off"].includes(configured)) return false;
    throw new Error("COGNIDESK_CORS must be a boolean-like value.");
  }
  return allowsLocalFlightDemoDefaults(env);
}

export function flightDemoExternalApisEnabled(env: NodeJS.ProcessEnv = process.env) {
  const configured = (
    env.FLIGHT_DEMO_EXTERNAL_APIS
    ?? env.COGNIDESK_FLIGHT_DEMO_EXTERNAL_APIS
  )?.trim().toLowerCase();
  if (!configured) return false;
  if (["1", "true", "yes", "on"].includes(configured)) return true;
  if (["0", "false", "no", "off"].includes(configured)) return false;
  throw new Error("FLIGHT_DEMO_EXTERNAL_APIS must be a boolean-like value.");
}

export interface FlightDemoExternalIntegrationJourneyFlags {
  secureEmail: boolean;
  discordHandoff: boolean;
  whatsapp: boolean;
}

export function flightDemoExternalIntegrationJourneysEnabled(
  env: NodeJS.ProcessEnv = process.env,
): FlightDemoExternalIntegrationJourneyFlags {
  const globalDefault = flightDemoExternalApisEnabled(env);
  return {
    secureEmail: readBooleanOverride(env, [
      "FLIGHT_DEMO_SECURE_EMAIL_JOURNEY",
      "FLIGHT_DEMO_SECURE_EMAIL_ENABLED",
      "COGNIDESK_FLIGHT_DEMO_SECURE_EMAIL_JOURNEY",
    ], globalDefault, "FLIGHT_DEMO_SECURE_EMAIL_JOURNEY"),
    discordHandoff: readBooleanOverride(env, [
      "FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY",
      "FLIGHT_DEMO_DISCORD_HANDOFF_ENABLED",
      "COGNIDESK_FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY",
    ], globalDefault, "FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY"),
    whatsapp: readBooleanOverride(env, [
      "FLIGHT_DEMO_WHATSAPP_JOURNEY",
      "FLIGHT_DEMO_WHATSAPP_ENABLED",
      "COGNIDESK_FLIGHT_DEMO_WHATSAPP_JOURNEY",
    ], globalDefault, "FLIGHT_DEMO_WHATSAPP_JOURNEY"),
  };
}

function allowsLocalFlightDemoDefaults(env: NodeJS.ProcessEnv) {
  return (
    env.NODE_ENV !== "production"
    && !truthyFlag(env.STUDIO_HOSTED)
    && !truthyFlag(env.COGNIDESK_STUDIO_HOSTED)
    && !truthyFlag(env.COGNIDESK_FLIGHT_DEMO_HOSTED)
  );
}

function truthyFlag(value: string | undefined) {
  return ["1", "true", "yes", "on"].includes(value?.trim().toLowerCase() ?? "");
}

function readBooleanOverride(
  env: NodeJS.ProcessEnv,
  names: string[],
  defaultValue: boolean,
  errorName: string,
) {
  const configured = names
    .map((name) => env[name]?.trim().toLowerCase())
    .find((value) => value);
  if (!configured) return defaultValue;
  if (["1", "true", "yes", "on"].includes(configured)) return true;
  if (["0", "false", "no", "off"].includes(configured)) return false;
  throw new Error(`${errorName} must be a boolean-like value.`);
}

function readTrimmedEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function numberEnv(name: string, defaultValue: number) {
  const value = readTrimmedEnv(name);
  if (!value) return defaultValue;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${name} must be a positive integer.`);
  }
  return parsed;
}

function booleanEnv(name: string, defaultValue: boolean) {
  const value = readTrimmedEnv(name);
  if (!value) return defaultValue;
  const normalized = value.toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  throw new Error(`${name} must be a boolean-like value.`);
}
