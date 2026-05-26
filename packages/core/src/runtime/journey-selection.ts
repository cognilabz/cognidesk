import type { CompiledAgent, CompiledJourney } from "../definition.js";
import {
  selectJourneyCandidates,
  type JourneyCandidate,
} from "../journey-index.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  RuntimeSnapshot,
} from "../types.js";
import { guardAllows } from "./context.js";
import { isAbortLikeError } from "./errors.js";
import {
  clampConfidence,
  normalizeConfidence,
  renderConversationTranscript,
  renderJourneyCandidateForMatcher,
} from "./rendering.js";
import { journeyMatchSchema } from "./schemas.js";
import type {
  ConversationMessage,
  HandleUserMessageInput,
  RankedJourneyCandidate,
  RuntimeEventEmitter,
  RuntimeOptions,
} from "./types.js";
import { evaluateDelegationCompletion } from "./journey-selection/delegation.js";
import { retrieveKnowledge } from "./journey-selection/knowledge.js";
import type {
  EmitGuardDenial,
  GenerateTextWithTrace,
} from "./journey-selection/types.js";

export { evaluateDelegationCompletion } from "./journey-selection/delegation.js";
export { retrieveKnowledge } from "./journey-selection/knowledge.js";

export async function selectJourney<TTurn>(args: {
  options: RuntimeOptions;
  generateTextWithTrace: GenerateTextWithTrace;
  emitGuardDenial: EmitGuardDenial;
  agent: CompiledAgent;
  models: AgentModelSet;
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  history: ConversationMessage[];
  input: HandleUserMessageInput<TTurn>;
  userText: string;
  emit: RuntimeEventEmitter;
}) {
  if (!args.options.journeyIndex) {
    return args.previousSnapshot?.activeJourneyId
      ? args.agent.journeys.find((journey) => journey.id === args.previousSnapshot?.activeJourneyId) ?? null
      : null;
  }

  const candidates = await selectJourneyCandidates({
    agent: args.agent,
    index: args.options.journeyIndex,
    embeddingModel: args.models.journeyEmbedding,
    message: args.userText,
    app: args.input.app ?? args.options.app ?? {},
    conversation: args.conversation,
    turn: args.input.turn ?? {},
    ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
    topK: args.options.topKJourneys ?? 5,
    ...(args.input.signal ? { signal: args.input.signal } : {}),
  });
  await args.emit({
    conversationId: args.conversation.id,
    type: "journey.candidates.retrieved",
    data: { journeyIds: candidates.map((candidate) => candidate.journeyId) },
  });
  const rankedCandidates = await rankJourneyCandidates({
    generateTextWithTrace: args.generateTextWithTrace,
    candidates,
    models: args.models,
    conversation: args.conversation,
    userText: args.userText,
    history: args.history,
    ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
    ...(args.input.signal ? { signal: args.input.signal } : {}),
  });
  await args.emit({
    conversationId: args.conversation.id,
    type: "journey.matched",
    data: {
      candidates: rankedCandidates.map((candidate) => ({
        journeyId: candidate.journeyId,
        confidence: normalizeConfidence(candidate),
        reason: candidate.matchReason ?? candidate.reason,
      })),
    },
  });

  const selected = await selectAllowedJourney({
    emitGuardDenial: args.emitGuardDenial,
    candidates: rankedCandidates,
    conversation: args.conversation,
    turn: args.input.turn ?? {},
    app: args.input.app ?? args.options.app ?? {},
    ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
    emit: args.emit,
  });
  if (selected && selected.id !== args.previousSnapshot?.activeJourneyId) {
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.activated",
      data: {
        journeyId: selected.id,
        ...(args.previousSnapshot?.activeJourneyId ? { previousJourneyId: args.previousSnapshot.activeJourneyId } : {}),
      },
    });
  }
  return selected;
}

async function selectAllowedJourney(args: {
  emitGuardDenial: EmitGuardDenial;
  candidates: RankedJourneyCandidate[];
  conversation: ConversationRecord;
  turn: unknown;
  app: unknown;
  activeJourneyId?: string;
  emit: RuntimeEventEmitter;
}) {
  for (const candidate of args.candidates) {
    const guard = candidate.journey.guard;
    if (!guard) return candidate.journey;
    const result = await guard({
      app: args.app,
      conversation: args.conversation,
      turn: args.turn,
      journeyId: candidate.journey.id,
      ...(args.activeJourneyId ? { activeJourneyId: args.activeJourneyId } : {}),
    });
    if (guardAllows(result)) return candidate.journey;
    await args.emitGuardDenial({
      journey: candidate.journey,
      conversation: args.conversation,
      result,
      emit: args.emit,
    });
  }
  return null;
}

async function rankJourneyCandidates(args: {
  generateTextWithTrace: GenerateTextWithTrace;
  candidates: JourneyCandidate[];
  models: AgentModelSet;
  conversation: ConversationRecord;
  userText: string;
  history: ConversationMessage[];
  activeJourneyId?: string;
  signal?: AbortSignal;
}): Promise<RankedJourneyCandidate[]> {
  if (args.candidates.length === 0) return [];
  try {
    const output = await args.generateTextWithTrace({
      conversationId: args.conversation.id,
      model: args.models.matcher,
      input: {
        role: "matcher",
        promptTask: "journey-matcher",
        promptPayload: {
          latestUserMessage: args.userText,
          activeJourneyId: args.activeJourneyId ?? null,
          conversationTranscript: args.history,
          candidates: args.candidates.map((candidate) => ({
            journeyId: candidate.journeyId,
            reason: candidate.reason,
            score: candidate.score,
            journey: {
              id: candidate.journey.id,
              kind: candidate.journey.kind,
              condition: candidate.journey.condition,
              examples: candidate.journey.examples,
              priority: candidate.journey.priority,
              stickiness: candidate.journey.stickiness,
            },
          })),
        },
        messages: [
          {
            role: "system",
            content: [
              "Rank only the provided candidate journeys for the latest user message.",
              "Return candidates that should be active now, ordered from best to worst.",
              "Return an empty candidates array when the base agent should stay active without a journey.",
              "Prefer keeping the active journey for vague follow-up messages when it still fits.",
            ].join("\n"),
          },
          {
            role: "user",
            content: [
              `Latest user message: ${args.userText}`,
              `Active journey: ${args.activeJourneyId ?? "none"}`,
              "Conversation transcript:",
              renderConversationTranscript(args.history),
              "Candidates:",
              ...args.candidates.map((candidate) => renderJourneyCandidateForMatcher(candidate)),
            ].join("\n\n"),
          },
        ],
        responseFormat: journeyMatchSchema,
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    const structured = journeyMatchSchema.parse(normalizeJourneyMatchOutput(output.structured ?? JSON.parse(output.text)));
    const byId = new Map(args.candidates.map((candidate) => [candidate.journeyId, candidate]));
    const seen = new Set<string>();
    const ranked: RankedJourneyCandidate[] = [];
    for (const item of structured.candidates) {
      const candidate = byId.get(item.journeyId);
      if (!candidate || seen.has(item.journeyId)) continue;
      seen.add(item.journeyId);
      ranked.push({
        ...candidate,
        ...(item.confidence !== undefined ? { matchConfidence: clampConfidence(item.confidence) } : {}),
        ...(item.reason ? { matchReason: item.reason } : {}),
      });
    }
    return ranked;
  } catch (error) {
    if (isAbortLikeError(error) && args.signal?.aborted) throw error;
    return args.candidates;
  }
}

function normalizeJourneyMatchOutput(output: unknown) {
  if (!isRecord(output) || !Array.isArray(output.candidates)) return output;
  return {
    ...output,
    candidates: output.candidates.map((candidate) => {
      if (!isRecord(candidate)) return candidate;
      return {
        ...candidate,
        confidence: typeof candidate.confidence === "number" ? candidate.confidence : 1,
        reason: typeof candidate.reason === "string" ? candidate.reason : "",
      };
    }),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
