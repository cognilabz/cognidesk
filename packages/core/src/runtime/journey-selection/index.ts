import type { CompiledAgent, CompiledJourney } from "../../definition.js";
import { runtimeLogger } from "../../logging.js";
import {
  selectJourneyCandidates,
  type JourneyCandidate,
} from "../../journey-index.js";
import type { ConversationRecord } from "../../storage.js";
import type {
  AgentModelSet,
  ChannelContext,
  ChannelPolicyConfig,
  RuntimeSnapshot,
} from "../../types.js";
import { waitForAbort } from "../cancellation.js";
import { guardAllows } from "../context.js";
import { isAbortLikeError } from "../errors.js";
import {
  clampConfidence,
  normalizeConfidence,
  renderConversationTranscript,
  renderJourneyCandidateForMatcher,
} from "../rendering.js";
import { journeyMatchSchema } from "../schemas.js";
import type {
  ConversationMessage,
  HandleUserMessageInput,
  RankedJourneyCandidate,
  RuntimeEventEmitter,
  RuntimeOptions,
} from "../types.js";
import { evaluateDelegationCompletion } from "./delegation.js";
import { retrieveKnowledge } from "./knowledge.js";
import type {
  EmitGuardDenial,
  GenerateTextWithTrace,
} from "./types.js";

export { evaluateDelegationCompletion } from "./delegation.js";
export { retrieveKnowledge } from "./knowledge.js";

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
  channel?: ChannelContext;
  emit: RuntimeEventEmitter;
}) {
  const logger = runtimeLogger(args.options, { conversationId: args.conversation.id });
  if (!args.options.journeyIndex) {
    const selected = args.previousSnapshot?.activeJourneyId
      ? args.agent.journeys.find((journey) => journey.id === args.previousSnapshot?.activeJourneyId) ?? null
      : null;
    logger.debug({
      selectedJourneyId: selected?.id ?? null,
      reason: "journey_index_unavailable",
    }, "Selected journey without journey index");
    return selected;
  }

  logger.debug({
    topK: args.options.topKJourneys ?? 5,
    activeJourneyId: args.previousSnapshot?.activeJourneyId,
  }, "Retrieving journey candidates");
  const candidates = await waitForAbort(selectJourneyCandidates({
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
  }), args.input.signal);
  await args.emit({
    conversationId: args.conversation.id,
    type: "journey.candidates.retrieved",
    data: { journeyIds: candidates.map((candidate) => candidate.journeyId) },
  });
  logger.debug({
    candidateJourneyIds: candidates.map((candidate) => candidate.journeyId),
  }, "Journey candidates retrieved");
  const rankedCandidates = await rankJourneyCandidates({
    options: args.options,
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
  logger.debug({
    rankedJourneyIds: rankedCandidates.map((candidate) => candidate.journeyId),
  }, "Journey candidates ranked");
  const policyCandidates = await filterCandidatesByChannelPolicy({
    candidates: rankedCandidates,
    channels: args.options.channels ?? [],
    conversation: args.conversation,
    emit: args.emit,
    logger,
    ...(args.channel ? { channel: args.channel } : {}),
  });

  const selected = await selectAllowedJourney({
    emitGuardDenial: args.emitGuardDenial,
    candidates: policyCandidates,
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
  logger.info({
    selectedJourneyId: selected?.id ?? null,
  }, "Allowed journey selected");
  return selected;
}

async function filterCandidatesByChannelPolicy(args: {
  candidates: RankedJourneyCandidate[];
  channel?: ChannelContext;
  channels: ChannelPolicyConfig[];
  conversation: ConversationRecord;
  emit: RuntimeEventEmitter;
  logger: ReturnType<typeof runtimeLogger>;
}) {
  if (!args.channel || args.channels.length === 0 || args.candidates.length === 0) return args.candidates;
  const policies = args.channels.filter((policy) => {
    const channelMatches = policy.channel === args.channel?.kind || policy.id === args.channel?.channelId;
    return channelMatches && policy.enabled !== false;
  });
  if (policies.length === 0) return args.candidates;

  const allowed: RankedJourneyCandidate[] = [];
  for (const candidate of args.candidates) {
    const activation = policies
      .flatMap((policy) => policy.flowActivations.map((flow) => ({ policy, flow })))
      .find(({ flow }) => flow.journeyId === candidate.journeyId);
    if (!activation || activation.flow.enabled) {
      allowed.push(candidate);
      continue;
    }
    args.logger.info({
      journeyId: candidate.journeyId,
      channelId: args.channel.channelId,
      channelKind: args.channel.kind,
      policyId: activation.policy.id,
      reason: activation.flow.reason,
    }, "Journey candidate disabled by channel policy");
    await args.emit({
      conversationId: args.conversation.id,
      type: "custom.channel.flow.disabled",
      data: {
        journeyId: candidate.journeyId,
        channel: args.channel,
        channelPolicyId: activation.policy.id,
        reason: activation.flow.reason ?? "flow-disabled-for-channel",
      },
    });
  }
  return allowed;
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
  options: RuntimeOptions;
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
    runtimeLogger(args.options, { conversationId: args.conversation.id }).error({
      error: error instanceof Error ? error.message : "Journey candidate ranking failed.",
    }, "Falling back to unranked journey candidates");
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
