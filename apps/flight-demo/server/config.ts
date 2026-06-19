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

const flightDemoConfigSchema = z.object({
  models: modelProviderSchema,
  voice: voiceProviderSchema.optional(),
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

export function getConfiguredVoiceApiKey(config: FlightDemoConfig) {
  const secrets = getConfiguredVoiceProviderSecrets(config);
  if (!secrets) return undefined;
  if ("apiKey" in secrets) {
    return secrets.apiKey;
  }
  throw new Error(`${secrets.provider} does not use a single API key; call getConfiguredVoiceProviderSecrets instead.`);
}
