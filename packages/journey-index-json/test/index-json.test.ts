import { mkdtemp, mkdir, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { afterEach, describe, expect, it } from "vitest";
import { z } from "zod";
import { createAgent, type ModelAdapter } from "@cognidesk/core";
import {
  ensureJourneyIndex,
  loadFreshJourneyIndex,
  loadJourneyIndex,
  saveJourneyIndex,
} from "../src/index.js";

const cleanup: string[] = [];

afterEach(async () => {
  await Promise.all(cleanup.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

describe("journey index JSON adapter", () => {
  it("saves and loads a fresh journey index", async () => {
    const directory = await tempDirectory();
    const file = join(directory, "journey-index.json");
    const agent = createIndexedAgent("ticket status").compile();
    const index = await ensureJourneyIndex({
      file,
      agent,
      embeddingModel,
      mode: "development",
      generatedAt: "2026-05-25T00:00:00.000Z",
    });

    expect(await loadJourneyIndex(file)).toEqual(index);
    expect(await loadFreshJourneyIndex(file, agent, { embeddingModel })).toEqual(index);
    expect(await readFile(file, "utf8")).toContain("\"projectionVersion\"");
  });

  it("fails stale indexes in production and regenerates them in development", async () => {
    const directory = await tempDirectory();
    const file = join(directory, "journey-index.json");
    const original = createIndexedAgent("ticket status").compile();
    const changed = createIndexedAgent("flight status").compile();
    const index = await ensureJourneyIndex({ file, agent: original, embeddingModel, mode: "development" });
    await saveJourneyIndex(file, index);

    await expect(ensureJourneyIndex({ file, agent: changed, embeddingModel, mode: "production" }))
      .rejects
      .toThrow("stale or invalid");

    const regenerated = await ensureJourneyIndex({ file, agent: changed, embeddingModel, mode: "development" });
    expect(regenerated.definitionHash).not.toBe(index.definitionHash);
  });

  it("treats embedding model changes as stale index compatibility failures", async () => {
    const directory = await tempDirectory();
    const file = join(directory, "journey-index.json");
    const agent = createIndexedAgent("ticket status").compile();
    await ensureJourneyIndex({ file, agent, embeddingModel, mode: "development" });
    const otherEmbeddingModel = {
      ...embeddingModel,
      model: "other-embedding",
    };

    await expect(ensureJourneyIndex({ file, agent, embeddingModel: otherEmbeddingModel, mode: "production" }))
      .rejects
      .toThrow("Index embedding model");

    const regenerated = await ensureJourneyIndex({ file, agent, embeddingModel: otherEmbeddingModel, mode: "development" });
    expect(regenerated.embeddingModel).toBe("other-embedding");
  });

  it("does not mask non-regenerable filesystem failures in development", async () => {
    const directory = await tempDirectory();
    const file = join(directory, "not-a-file");
    await mkdir(file);
    const agent = createIndexedAgent("ticket status").compile();

    await expect(ensureJourneyIndex({ file, agent, embeddingModel, mode: "development" }))
      .rejects
      .toMatchObject({ code: "EISDIR" });
  });
});

const embeddingModel: ModelAdapter = {
  provider: "test",
  model: "embedding",
  generateText: async () => ({ text: "" }),
  embed: async ({ text }) => ({
    embedding: [text.toLowerCase().includes("ticket") ? 1 : 0],
    model: "embedding",
    dimensions: 1,
  }),
};

function createIndexedAgent(condition: string) {
  const agent = createAgent("agent_primary", { instructions: "Help with flights." });
  const journey = agent.stateMachineJourney("journey_primary", {
    condition,
    context: z.object({ bookingReference: z.string().optional() }),
  });
  const identify = journey.state("identify").collect("bookingReference");
  journey.initial(identify);
  return agent;
}

async function tempDirectory() {
  const directory = await mkdtemp(join(tmpdir(), "cognidesk-index-"));
  cleanup.push(directory);
  return directory;
}
