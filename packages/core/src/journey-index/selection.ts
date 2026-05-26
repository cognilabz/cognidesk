import type { CompiledJourney } from "../definition.js";
import { assertEmbeddingModel } from "./embeddings.js";
import {
  type JourneyCandidate,
  type SelectJourneyCandidatesOptions,
} from "./schema.js";
import { validateJourneyIndex } from "./validation.js";

export async function selectJourneyCandidates<TApp, TConversation, TTurn>(
  options: SelectJourneyCandidatesOptions<TApp, TConversation, TTurn>,
): Promise<JourneyCandidate[]> {
  const topK = options.topK ?? 5;
  if (topK < 1) throw new Error("topK must be at least 1.");
  assertEmbeddingModel(options.embeddingModel);

  const validation = validateJourneyIndex(options.agent, options.index, { embeddingModel: options.embeddingModel });
  const compatibilityErrors = validation.errors.filter((error) => error.startsWith("Index embedding "));
  if (compatibilityErrors.length > 0) {
    throw new Error(`Journey index embedding model is incompatible: ${compatibilityErrors.join("; ")}`);
  }
  if (!validation.ok && !options.allowStaleIndex) {
    throw new Error(`Journey index is stale or invalid: ${validation.errors.join("; ")}`);
  }

  const journeyById = new Map(options.agent.journeys.map((journey) => [journey.id, journey]));
  const queryEmbedding = await options.embeddingModel.embed({
    role: "journeyEmbedding",
    text: options.message,
    ...(options.signal ? { signal: options.signal } : {}),
  });
  const dimensionMismatch = options.index.entries.find((entry) => (
    entry.embedding.dimensions !== queryEmbedding.dimensions
    || entry.embedding.vector.length !== queryEmbedding.embedding.length
  ));
  if (dimensionMismatch) {
    throw new Error(
      `Journey index embedding dimensions do not match runtime model for journey '${dimensionMismatch.journeyId}'.`,
    );
  }

  const candidates: JourneyCandidate[] = [];
  for (const entry of options.index.entries) {
    const journey = journeyById.get(entry.journeyId);
    if (!journey) continue;
    if (journey.includeWhen && !journey.includeWhen({
      app: options.app,
      conversation: options.conversation,
      turn: options.turn,
      ...(options.activeJourneyId ? { activeJourneyId: options.activeJourneyId } : {}),
    })) continue;
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
