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

const modelProviderSchema = z.discriminatedUnion("provider", [
  z.object({
    provider: z.literal("openai"),
    apiKeyEnv: z.string().min(1).default("OPENAI_API_KEY"),
    roles: roleModelsSchema,
  }),
  z.object({
    provider: z.literal("openrouter"),
    apiKeyEnv: z.string().min(1).default("OPENROUTER_KEY"),
    appName: z.string().min(1).optional(),
    siteUrl: z.string().url().optional(),
    roles: roleModelsSchema,
  }),
]);

const flightDemoConfigSchema = z.object({
  models: modelProviderSchema,
  voice: z.object({
    provider: z.literal("openai"),
    apiKeyEnv: z.string().min(1).default("OPENAI_API_KEY"),
    voice: z.string().min(1).optional(),
    transcriptionLanguage: z.string().min(2).optional(),
  }).optional(),
  storage: z.object({
    sqlitePath: z.string().min(1),
    knowledgeIndexPath: z.string().min(1),
  }),
});

export type FlightDemoConfig = z.infer<typeof flightDemoConfigSchema>;

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
  return flightDemoConfigSchema.parse(JSON.parse(raw));
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

export function getConfiguredVoiceApiKey(config: FlightDemoConfig) {
  loadFlightDemoEnv();
  if (!config.voice) return undefined;
  const apiKey = process.env[config.voice.apiKeyEnv];
  if (!apiKey) {
    throw new Error(
      `Flight demo voice requires ${config.voice.apiKeyEnv} for OpenAI Realtime calls.`,
    );
  }
  return apiKey;
}
