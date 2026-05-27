import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { z } from "zod";
import type { KnowledgeItem, ModelAdapter } from "@cognidesk/core";

export const flightKnowledgeDocumentSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  url: z.string().min(1).optional(),
  content: z.string(),
});

export const flightKnowledgeDocumentsSchema = z.array(flightKnowledgeDocumentSchema);

const knowledgeIndexEntrySchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  metadata: z.object({
    documentId: z.string(),
    category: z.string(),
    url: z.string().min(1).optional(),
  }),
  embedding: z.array(z.number()),
});

const knowledgeIndexSchema = z.object({
  projectionVersion: z.literal("flight-demo.knowledge-index.v1"),
  embeddingProvider: z.string(),
  embeddingModel: z.string(),
  generatedAt: z.string(),
  entries: z.array(knowledgeIndexEntrySchema),
});

export type FlightKnowledgeDocument = z.infer<typeof flightKnowledgeDocumentSchema>;
export type FlightKnowledgeIndex = z.infer<typeof knowledgeIndexSchema>;
export type FlightKnowledgeMetadata = FlightKnowledgeIndex["entries"][number]["metadata"];

export async function loadFlightKnowledgeDocuments(file: string) {
  const raw = await readFile(file, "utf8");
  return flightKnowledgeDocumentsSchema.parse(JSON.parse(raw));
}

export async function buildFlightKnowledgeIndex(options: {
  documents: FlightKnowledgeDocument[];
  embeddingModel: ModelAdapter;
  generatedAt?: string;
  signal?: AbortSignal;
}): Promise<FlightKnowledgeIndex> {
  assertEmbeddingModel(options.embeddingModel);
  const entries: FlightKnowledgeIndex["entries"] = [];
  for (const document of options.documents) {
    const embedding = await options.embeddingModel.embed({
      role: "journeyEmbedding",
      text: renderKnowledgeDocumentForEmbedding(document),
      ...(options.signal ? { signal: options.signal } : {}),
    });
    entries.push({
      id: document.id,
      title: document.title,
      content: document.content,
      metadata: {
        documentId: document.id,
        category: document.category,
        ...(document.url ? { url: document.url } : {}),
      },
      embedding: embedding.embedding,
    });
  }
  return knowledgeIndexSchema.parse({
    projectionVersion: "flight-demo.knowledge-index.v1",
    embeddingProvider: options.embeddingModel.provider,
    embeddingModel: options.embeddingModel.model,
    generatedAt: options.generatedAt ?? new Date().toISOString(),
    entries,
  });
}

export async function saveFlightKnowledgeIndex(file: string, index: FlightKnowledgeIndex) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(knowledgeIndexSchema.parse(index), null, 2)}\n`, "utf8");
}

export async function loadFlightKnowledgeIndex(file: string) {
  const raw = await readFile(file, "utf8");
  return knowledgeIndexSchema.parse(JSON.parse(raw));
}

export function assertCompatibleKnowledgeIndex(index: FlightKnowledgeIndex, embeddingModel: ModelAdapter) {
  if (index.embeddingProvider !== embeddingModel.provider || index.embeddingModel !== embeddingModel.model) {
    throw new Error(
      `Flight demo Knowledge Index was generated with ${index.embeddingProvider}:${index.embeddingModel}, `
        + `but runtime uses ${embeddingModel.provider}:${embeddingModel.model}. Re-run pnpm ingest:knowledge.`,
    );
  }
}

export async function searchFlightKnowledgeIndex(options: {
  index: FlightKnowledgeIndex;
  embeddingModel: ModelAdapter;
  query: string;
  limit?: number;
  minScore?: number;
  signal?: AbortSignal;
}): Promise<Array<KnowledgeItem<FlightKnowledgeMetadata>>> {
  assertEmbeddingModel(options.embeddingModel);
  assertCompatibleKnowledgeIndex(options.index, options.embeddingModel);
  const queryEmbedding = await options.embeddingModel.embed({
    role: "journeyEmbedding",
    text: options.query,
    ...(options.signal ? { signal: options.signal } : {}),
  });
  const limit = options.limit ?? 3;
  const minScore = options.minScore ?? 0.2;
  return options.index.entries
    .map((entry) => ({
      entry,
      score: cosineSimilarity(queryEmbedding.embedding, entry.embedding),
    }))
    .filter(({ score }) => score >= minScore)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ entry, score }) => ({
      id: entry.id,
      title: entry.title,
      content: entry.content,
      score,
      metadata: entry.metadata,
    }));
}

function renderKnowledgeDocumentForEmbedding(document: FlightKnowledgeDocument) {
  return [
    `title:${document.title}`,
    `category:${document.category}`,
    document.content,
  ].join("\n");
}

function assertEmbeddingModel(model: ModelAdapter): asserts model is ModelAdapter & Required<Pick<ModelAdapter, "embed">> {
  if (!model.embed) throw new Error(`Model '${model.provider}:${model.model}' does not implement embeddings.`);
}

function cosineSimilarity(left: number[], right: number[]) {
  if (left.length !== right.length) {
    throw new Error("Flight demo Knowledge Index embedding dimensions do not match query embedding dimensions.");
  }
  let dot = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;
  for (let index = 0; index < left.length; index += 1) {
    const leftValue = left[index] ?? 0;
    const rightValue = right[index] ?? 0;
    dot += leftValue * rightValue;
    leftMagnitude += leftValue * leftValue;
    rightMagnitude += rightValue * rightValue;
  }
  if (leftMagnitude === 0 || rightMagnitude === 0) return 0;
  return dot / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}
