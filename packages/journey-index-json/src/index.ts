import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import {
  buildJourneyIndex,
  journeyIndexSchema,
  validateJourneyIndex,
  type BuildJourneyIndexOptions,
  type CompiledAgent,
  type JourneyIndex,
} from "@cognidesk/core";

export interface EnsureJourneyIndexOptions extends BuildJourneyIndexOptions {
  file: string;
  agent: CompiledAgent;
  mode?: "development" | "production";
}

export async function saveJourneyIndex(file: string, index: JourneyIndex) {
  await mkdir(dirname(file), { recursive: true });
  const temporaryFile = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(temporaryFile, `${JSON.stringify(journeyIndexSchema.parse(index), null, 2)}\n`, "utf8");
  await rename(temporaryFile, file);
}

export async function loadJourneyIndex(file: string): Promise<JourneyIndex> {
  const raw = await readFile(file, "utf8");
  return journeyIndexSchema.parse(JSON.parse(raw));
}

export async function loadFreshJourneyIndex(file: string, agent: CompiledAgent) {
  const index = await loadJourneyIndex(file);
  const validation = validateJourneyIndex(agent, index);
  if (!validation.ok) {
    throw new Error(`Journey index '${file}' is stale or invalid: ${validation.errors.join("; ")}`);
  }
  return index;
}

export async function ensureJourneyIndex(options: EnsureJourneyIndexOptions) {
  const mode = options.mode ?? "production";
  try {
    return await loadFreshJourneyIndex(options.file, options.agent);
  } catch (error) {
    if (mode === "production") throw error;
    const regenerated = await buildJourneyIndex(options.agent, {
      embeddingModel: options.embeddingModel,
      ...(options.generatedAt ? { generatedAt: options.generatedAt } : {}),
      ...(options.signal ? { signal: options.signal } : {}),
    });
    await saveJourneyIndex(options.file, regenerated);
    return regenerated;
  }
}
