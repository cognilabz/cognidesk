import { readFile } from "node:fs/promises";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const roleModelsSchema = z.object({
  response: z.string().min(1),
  compaction: z.string().min(1),
  matcher: z.string().min(1),
  extraction: z.string().min(1),
  citationPostProcessing: z.string().min(1),
  journeyEmbedding: z.string().min(1),
});

const flightDemoConfigSchema = z.object({
  models: z.object({
    provider: z.literal("openai"),
    apiKeyEnv: z.string().min(1).default("OPENAI_API_KEY"),
    roles: roleModelsSchema,
  }),
  storage: z.object({
    sqlitePath: z.string().min(1),
    knowledgeIndexPath: z.string().min(1),
  }),
});

export type FlightDemoConfig = z.infer<typeof flightDemoConfigSchema>;

export function flightDemoRoot() {
  return root;
}

export async function loadFlightDemoConfig(configPath = join(root, "config.json")) {
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
  const apiKey = process.env[config.models.apiKeyEnv];
  if (!apiKey) {
    throw new Error(`Flight demo requires ${config.models.apiKeyEnv} for real OpenAI model calls.`);
  }
  return apiKey;
}
