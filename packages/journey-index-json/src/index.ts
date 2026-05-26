import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import {
  buildJourneyIndex,
  journeyIndexSchema,
  validateJourneyIndex,
  type BuildJourneyIndexOptions,
  type CompiledAgent,
  type JourneyIndex,
  type ModelAdapter,
} from "@cognidesk/core";

export interface EnsureJourneyIndexOptions extends BuildJourneyIndexOptions {
  file: string;
  agent: CompiledAgent;
  mode?: "development" | "production";
}

export async function saveJourneyIndex(file: string, index: JourneyIndex) {
  await mkdir(dirname(file), { recursive: true });
  const temporaryFile = `${file}.${process.pid}.${Date.now()}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporaryFile, `${JSON.stringify(journeyIndexSchema.parse(index), null, 2)}\n`, {
      encoding: "utf8",
      flag: "wx",
    });
    await rename(temporaryFile, file);
  } catch (error) {
    await unlink(temporaryFile).catch(() => undefined);
    throw error;
  }
}

export async function loadJourneyIndex(file: string): Promise<JourneyIndex> {
  const raw = await readFile(file, "utf8");
  return journeyIndexSchema.parse(JSON.parse(raw));
}

export async function loadFreshJourneyIndex(
  file: string,
  agent: CompiledAgent,
  options: { embeddingModel?: ModelAdapter } = {},
) {
  const index = await loadJourneyIndex(file);
  const validation = validateJourneyIndex(agent, index, options);
  if (!validation.ok) {
    throw new Error(`Journey index '${file}' is stale or invalid: ${validation.errors.join("; ")}`);
  }
  return index;
}

export async function ensureJourneyIndex(options: EnsureJourneyIndexOptions) {
  const mode = options.mode ?? "production";
  try {
    return await loadFreshJourneyIndex(options.file, options.agent, {
      ...(options.embeddingModel ? { embeddingModel: options.embeddingModel } : {}),
    });
  } catch (error) {
    if (mode === "production" || !isRegenerableIndexFailure(error)) throw error;
    const regenerated = await buildJourneyIndex(options.agent, {
      embeddingModel: options.embeddingModel,
      ...(options.generatedAt ? { generatedAt: options.generatedAt } : {}),
      ...(options.signal ? { signal: options.signal } : {}),
    });
    await saveJourneyIndex(options.file, regenerated);
    return regenerated;
  }
}

function isRegenerableIndexFailure(error: unknown) {
  if (error instanceof SyntaxError) return true;
  if (error instanceof Error) {
    if (error.message.includes("stale or invalid")) return true;
    const code = (error as NodeJS.ErrnoException).code;
    return code === "ENOENT";
  }
  return false;
}
