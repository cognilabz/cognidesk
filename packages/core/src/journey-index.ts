import { z } from "zod";
import type { CompiledAgent, CompiledJourney } from "./definition.js";
import type { EmbeddingOutput, ModelAdapter } from "./types.js";

export const JOURNEY_INDEX_PROJECTION_VERSION = "cognidesk.journey-index.v1";

export const journeyIndexEmbeddingSchema = z.object({
  model: z.string(),
  dimensions: z.number().int().positive(),
  vector: z.array(z.number()),
});

export const journeyIndexEntrySchema = z.object({
  journeyId: z.string(),
  kind: z.enum(["stateMachine", "delegation"]),
  condition: z.string(),
  examples: z.array(z.string()),
  tags: z.array(z.string()),
  priority: z.number(),
  stickiness: z.enum(["low", "medium", "high"]),
  alwaysInclude: z.boolean(),
  definitionHash: z.string(),
  routingText: z.string(),
  embedding: journeyIndexEmbeddingSchema,
});

export const journeyIndexSchema = z.object({
  agentId: z.string(),
  projectionVersion: z.literal(JOURNEY_INDEX_PROJECTION_VERSION),
  definitionHash: z.string(),
  embeddingProvider: z.string(),
  embeddingModel: z.string(),
  generatedAt: z.string(),
  entries: z.array(journeyIndexEntrySchema),
});

export type JourneyIndexEmbedding = z.infer<typeof journeyIndexEmbeddingSchema>;
export type JourneyIndexEntry = z.infer<typeof journeyIndexEntrySchema>;
export type JourneyIndex = z.infer<typeof journeyIndexSchema>;

export interface BuildJourneyIndexOptions {
  embeddingModel: ModelAdapter;
  generatedAt?: string;
  signal?: AbortSignal;
}

export interface JourneyIndexValidationResult {
  ok: boolean;
  errors: string[];
}

export interface SelectJourneyCandidatesOptions<TApp = unknown, TConversation = unknown, TTurn = unknown> {
  agent: CompiledAgent;
  index: JourneyIndex;
  embeddingModel: ModelAdapter;
  message: string;
  app: TApp;
  conversation: TConversation;
  turn: TTurn;
  activeJourneyId?: string;
  topK?: number;
  allowStaleIndex?: boolean;
  signal?: AbortSignal;
}

export interface JourneyCandidate {
  journeyId: string;
  journey: CompiledJourney;
  score: number;
  similarity: number;
  reason: "always" | "matcher" | "embedding";
  definitionHash: string;
}

export async function buildJourneyIndex(
  agent: CompiledAgent,
  options: BuildJourneyIndexOptions,
): Promise<JourneyIndex> {
  assertEmbeddingModel(options.embeddingModel);

  const entries: JourneyIndexEntry[] = [];
  for (const journey of agent.journeys) {
    const routingText = createJourneyRoutingText(journey);
    const embedding = await options.embeddingModel.embed({
      role: "journeyEmbedding",
      text: routingText,
      ...(options.signal ? { signal: options.signal } : {}),
    });
    entries.push({
      journeyId: journey.id,
      kind: journey.kind,
      condition: journey.condition,
      examples: journey.examples,
      tags: journey.tags,
      priority: journey.priority,
      stickiness: journey.stickiness,
      alwaysInclude: journey.alwaysInclude,
      definitionHash: hashJourneyDefinition(journey),
      routingText,
      embedding: toIndexEmbedding(embedding),
    });
  }

  const index: JourneyIndex = {
    agentId: agent.id,
    projectionVersion: JOURNEY_INDEX_PROJECTION_VERSION,
    definitionHash: hashAgentRoutingDefinition(agent),
    embeddingProvider: options.embeddingModel.provider,
    embeddingModel: options.embeddingModel.model,
    generatedAt: options.generatedAt ?? new Date().toISOString(),
    entries,
  };

  return journeyIndexSchema.parse(index);
}

export async function selectJourneyCandidates<TApp, TConversation, TTurn>(
  options: SelectJourneyCandidatesOptions<TApp, TConversation, TTurn>,
): Promise<JourneyCandidate[]> {
  const topK = options.topK ?? 5;
  if (topK < 1) throw new Error("topK must be at least 1.");
  assertEmbeddingModel(options.embeddingModel);

  const validation = validateJourneyIndex(options.agent, options.index);
  if (!validation.ok && !options.allowStaleIndex) {
    throw new Error(`Journey index is stale or invalid: ${validation.errors.join("; ")}`);
  }

  const journeyById = new Map(options.agent.journeys.map((journey) => [journey.id, journey]));
  const queryEmbedding = await options.embeddingModel.embed({
    role: "journeyEmbedding",
    text: options.message,
    ...(options.signal ? { signal: options.signal } : {}),
  });

  const candidates: JourneyCandidate[] = [];
  for (const entry of options.index.entries) {
    const journey = journeyById.get(entry.journeyId);
    if (!journey) continue;
    const similarity = cosineSimilarity(queryEmbedding.embedding, entry.embedding.vector);
    const score = similarity + priorityBoost(journey) + stickinessBoost(journey, options.activeJourneyId);
    candidates.push({
      journeyId: journey.id,
      journey,
      score,
      similarity,
      reason: "embedding",
      definitionHash: entry.definitionHash,
    });
  }

  const forced = new Map<string, JourneyCandidate>();
  for (const candidate of candidates) {
    const reason = await forcedReason(candidate.journey, options);
    if (reason) forced.set(candidate.journeyId, { ...candidate, reason });
  }

  const ranked = candidates
    .filter((candidate) => !forced.has(candidate.journeyId))
    .sort(compareCandidates)
    .slice(0, topK);

  const included = new Map<string, JourneyCandidate>();
  for (const candidate of [...forced.values(), ...ranked]) included.set(candidate.journeyId, candidate);
  if (options.activeJourneyId && !included.has(options.activeJourneyId)) {
    const activeCandidate = candidates.find((candidate) => candidate.journeyId === options.activeJourneyId);
    if (activeCandidate) included.set(activeCandidate.journeyId, activeCandidate);
  }

  return [...included.values()].sort(compareCandidates);
}

export function validateJourneyIndex(agent: CompiledAgent, index: JourneyIndex): JourneyIndexValidationResult {
  const parsed = journeyIndexSchema.safeParse(index);
  const errors: string[] = [];
  if (!parsed.success) {
    errors.push(parsed.error.message);
    return { ok: false, errors };
  }

  if (index.agentId !== agent.id) errors.push(`Index agent '${index.agentId}' does not match '${agent.id}'.`);
  if (index.definitionHash !== hashAgentRoutingDefinition(agent)) {
    errors.push("Agent routing definition hash does not match the generated index.");
  }

  const entryById = new Map(index.entries.map((entry) => [entry.journeyId, entry]));
  for (const journey of agent.journeys) {
    const entry = entryById.get(journey.id);
    if (!entry) {
      errors.push(`Journey '${journey.id}' is missing from the index.`);
      continue;
    }
    const expectedHash = hashJourneyDefinition(journey);
    if (entry.definitionHash !== expectedHash) {
      errors.push(`Journey '${journey.id}' hash changed; regenerate the journey index.`);
    }
  }

  return { ok: errors.length === 0, errors };
}

export function createJourneyRoutingText(journey: CompiledJourney) {
  const stateSummaries = journey.states
    .map((state) => [
      `state:${state.id}`,
      state.summary ? `summary:${state.summary}` : "",
      state.instructions ? `instructions:${state.instructions}` : "",
      state.collected.length > 0 ? `collect:${state.collected.map((field) => field.path).join(", ")}` : "",
    ].filter(Boolean).join(" "))
    .filter(Boolean);

  return [
    `journey:${journey.id}`,
    `kind:${journey.kind}`,
    `condition:${journey.condition}`,
    journey.tags.length > 0 ? `tags:${journey.tags.join(", ")}` : "",
    journey.examples.length > 0 ? `examples:${journey.examples.join(" | ")}` : "",
    ...stateSummaries,
  ].filter(Boolean).join("\n");
}

export function hashAgentRoutingDefinition(agent: CompiledAgent) {
  return stableHash({
    projectionVersion: JOURNEY_INDEX_PROJECTION_VERSION,
    agentId: agent.id,
    journeys: agent.journeys.map(journeyRoutingProjection),
  });
}

export function hashJourneyDefinition(journey: CompiledJourney) {
  return stableHash({
    projectionVersion: JOURNEY_INDEX_PROJECTION_VERSION,
    journey: journeyRoutingProjection(journey),
  });
}

function assertEmbeddingModel(model: ModelAdapter): asserts model is ModelAdapter & { embed: NonNullable<ModelAdapter["embed"]> } {
  if (!model.embed) {
    throw new Error(`Model '${model.provider}:${model.model}' does not implement embeddings.`);
  }
}

function toIndexEmbedding(output: EmbeddingOutput): JourneyIndexEmbedding {
  return {
    model: output.model,
    dimensions: output.dimensions,
    vector: output.embedding,
  };
}

function journeyRoutingProjection(journey: CompiledJourney) {
  return {
    id: journey.id,
    kind: journey.kind,
    condition: journey.condition,
    examples: journey.examples,
    tags: journey.tags,
    priority: journey.priority,
    stickiness: journey.stickiness,
    alwaysInclude: journey.alwaysInclude,
    hasAlwaysPredicate: typeof journey.always === "function",
    hasMatcherPredicate: typeof journey.matcher === "function",
    initialStateId: journey.initialStateId,
    states: journey.states.map((state) => ({
      id: state.id,
      parentId: state.parentId,
      type: state.type,
      instructions: state.instructions,
      summary: state.summary,
      collected: state.collected,
      transitions: state.transitions,
      actions: state.actions,
      requiresVisit: state.requiresVisit,
    })),
  };
}

async function forcedReason<TApp, TConversation, TTurn>(
  journey: CompiledJourney,
  options: SelectJourneyCandidatesOptions<TApp, TConversation, TTurn>,
): Promise<JourneyCandidate["reason"] | null> {
  if (journey.alwaysInclude) return "always";
  const predicateArgs = {
    app: options.app,
    conversation: options.conversation,
    turn: options.turn,
    ...(options.activeJourneyId ? { activeJourneyId: options.activeJourneyId } : {}),
  };
  if (journey.always && await journey.always(predicateArgs)) return "always";
  if (journey.matcher && await journey.matcher(predicateArgs)) return "matcher";
  return null;
}

function compareCandidates(left: JourneyCandidate, right: JourneyCandidate) {
  const reasonRank = reasonPriority(right.reason) - reasonPriority(left.reason);
  if (reasonRank !== 0) return reasonRank;
  return right.score - left.score;
}

function reasonPriority(reason: JourneyCandidate["reason"]) {
  if (reason === "always") return 2;
  if (reason === "matcher") return 1;
  return 0;
}

function priorityBoost(journey: CompiledJourney) {
  return journey.priority / 1000;
}

function stickinessBoost(journey: CompiledJourney, activeJourneyId: string | undefined) {
  if (journey.id !== activeJourneyId) return 0;
  if (journey.stickiness === "high") return 0.05;
  if (journey.stickiness === "medium") return 0.025;
  return 0.01;
}

function cosineSimilarity(left: number[], right: number[]) {
  if (left.length !== right.length) {
    throw new Error(`Embedding dimension mismatch: ${left.length} !== ${right.length}.`);
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

function stableHash(value: unknown) {
  const json = stableStringify(value);
  let hash = 0xcbf29ce484222325n;
  const prime = 0x100000001b3n;
  const mask = 0xffffffffffffffffn;
  for (let index = 0; index < json.length; index += 1) {
    hash ^= BigInt(json.charCodeAt(index));
    hash = (hash * prime) & mask;
  }
  return `fnv1a64:${hash.toString(16).padStart(16, "0")}`;
}

function stableStringify(value: unknown): string {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return JSON.stringify(value);
  if (typeof value === "bigint") return JSON.stringify(value.toString());
  if (typeof value === "undefined" || typeof value === "function" || typeof value === "symbol") return "null";
  if (Array.isArray(value)) return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record)
      .filter((key) => typeof record[key] !== "undefined" && typeof record[key] !== "function")
      .sort();
    return `{${keys.map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`).join(",")}}`;
  }
  return "null";
}
