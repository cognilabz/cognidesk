import {
  buildJourneyIndex,
  createAgent,
  type AgentModelSet,
  type VoiceModelSet,
} from "@cognidesk/core";
import {
  loadFlightDemoConfig,
  requireConfiguredModelApiKeys,
  resolveFlightDemoPath,
  type ConfiguredModelApiKeys,
  type FlightDemoConfig,
} from "../config.js";
import {
  assertCompatibleKnowledgeIndex,
  loadFlightKnowledgeIndex,
  type FlightKnowledgeIndex,
} from "../knowledge-index.js";
import { addBaggageServiceJourney } from "./journeys/baggage-service.js";
import { addBookFlightJourney } from "./journeys/book-flight.js";
import { addHandoffJourney } from "./journeys/handoff.js";
import { addTicketStatusJourney } from "./journeys/ticket-status.js";
import { createFlightKnowledgeSource } from "./knowledge/source.js";
import { createAiSdkModelSet } from "./models/ai-sdk-model-set.js";
import { flightTools } from "./tools/flight-tools.js";

export interface CreateFlightDemoRuntimePartsOptions {
  config?: FlightDemoConfig;
  models?: AgentModelSet;
  knowledgeIndex?: FlightKnowledgeIndex;
}

export async function createFlightDemoRuntimeParts(options: CreateFlightDemoRuntimePartsOptions = {}) {
  const config = options.config ?? await loadFlightDemoConfig();
  const models = options.models ?? createConfiguredModelSet(config, requireConfiguredModelApiKeys(config));
  const knowledgeIndex = options.knowledgeIndex
    ?? await loadFlightKnowledgeIndex(resolveFlightDemoPath(config.storage.knowledgeIndexPath));
  assertCompatibleKnowledgeIndex(knowledgeIndex, models.journeyEmbedding);

  const flightKnowledge = createFlightKnowledgeSource({
    index: knowledgeIndex,
    embeddingModel: models.journeyEmbedding,
  });
  const voiceModelSet = createFlightDemoVoiceModelSet(config);
  const agent = createAgent("flight-service", {
    logLevel: "debug",
    instructions: [
      "You are a concise customer support agent for a mocked flight service.",
      "Help with booking tickets, ticket status, flight information, check-in, baggage, and handoff.",
      "Do not claim that real bookings were made; this demo uses mocked data.",
      "Supported actions are limited to searching mocked flights, creating a mocked booking after explicit confirmation, checking mocked ticket status, checking mocked flight details, answering policy questions, and requesting human handoff.",
      "When a previous assistant message or completed journey says a mocked booking is already confirmed, acknowledge that result on casual follow-ups; do not ask the customer to confirm the same booking again.",
      "Do not offer to add, order, buy, or check eligibility for extra baggage, seats, meals, refunds, payments, or real airline account changes. For those unsupported actions, explain the limitation and offer policy information or human handoff.",
      "Do not ask for a booking reference for baggage add-ons or fare-rule eligibility; ask for a booking reference only when the customer explicitly wants ticket status or check-in status.",
      "Never show raw Knowledge IDs, source ids, or internal retrieval labels in customer-facing text.",
    ].join("\n"),
  });
  agent.voice({
    instructions: [
      "Use concise spoken responses with no Markdown or visual formatting.",
      "Ask for one missing booking or travel detail at a time.",
      "Do not use Widgets in voice; collect and confirm required fields conversationally.",
      "Confirm before side-effect tools such as mocked booking creation.",
      "If an answer is long or detail-heavy, offer to continue in chat after the call.",
      "# Preambles",
      "Use short, dynamic preambles only while work is genuinely still happening, such as checking mocked policy, ticket, or flight information.",
      "Do not use a fixed preamble phrase. Vary the wording and skip preambles for simple acknowledgements or quick answers.",
      "A preamble must not claim a final result, booking, eligibility decision, queue state, or handoff completion.",
      "# Language",
      "Support English and German in voice.",
      "Prefer German or English over Mandarin/Chinese for short or ambiguous utterances.",
      "If the user says 'Hallo', treat it as German unless they clearly continue in another language.",
      "Reply in the language the user is using, and code-switch only when the user does.",
      "When speaking German, use Austrian standard German with a natural Viennese coloring: warm, relaxed, and local to Vienna.",
      "Prefer Austrian/Viennese phrasing such as 'Grüß Sie', 'passt', 'schau ich nach', and 'einen Moment bitte' where it fits naturally.",
      "Avoid sounding like a German learner or an English speaker reading German. Keep pronunciation and rhythm native-sounding for Austria.",
      "Do not exaggerate dialect, use caricature slang, or make comprehension harder; keep support-critical details clear.",
    ].join("\n"),
    modelSet: voiceModelSet,
    recording: {
      enabled: false,
    },
    metadata: {
      capabilityParity: true,
    },
  });
  agent.tools.add(
    flightTools.searchFlights,
    flightTools.suggestFlightOptions,
    flightTools.getTicketStatus,
    flightTools.getFlightInfo,
  );
  agent.knowledge.add(flightKnowledge);

  addBaggageServiceJourney(agent, flightKnowledge);
  addBookFlightJourney(agent, flightTools);
  addTicketStatusJourney(agent, flightTools);
  addHandoffJourney(agent, flightKnowledge);

  const compiledAgent = agent.compile();
  const journeyIndex = await buildJourneyIndex(compiledAgent, { embeddingModel: models.journeyEmbedding });
  return { agent: compiledAgent, models, journeyIndex, knowledgeIndex };
}

function createFlightDemoVoiceModelSet(config: FlightDemoConfig): VoiceModelSet {
  if (!config.voice) {
    return {
      provider: "openai",
      model: "gpt-realtime-2",
    };
  }
  switch (config.voice.provider) {
    case "openai":
      return {
        provider: "openai",
        model: "gpt-realtime-2",
        ...(config.voice.voice ? { voice: config.voice.voice } : {}),
      };
    case "elevenlabs":
      return {
        provider: "elevenlabs",
        model: config.voice.textToSpeechModelId ?? "elevenlabs-speech",
        voice: config.voice.voiceId,
      };
    case "azure-speech":
      return {
        provider: "azure-speech",
        model: "azure-speech-stt-tts",
        voice: config.voice.voiceName,
      };
    case "aws-speech":
      return {
        provider: "aws-speech",
        model: "aws-transcribe-polly",
        voice: config.voice.voiceId,
      };
    case "google-speech":
      return {
        provider: "google-speech",
        model: config.voice.textToSpeechModel ?? "google-speech-tts",
        voice: config.voice.voiceName,
      };
    case "deepgram":
      return {
        provider: "deepgram",
        model: config.voice.textToSpeechModel,
        voice: config.voice.textToSpeechModel,
      };
  }
}

export function createConfiguredModelSet(
  config: FlightDemoConfig,
  apiKeys: ConfiguredModelApiKeys | string,
): AgentModelSet {
  return createAiSdkModelSet(config.models, apiKeys);
}

export { createAiSdkModelSet } from "./models/ai-sdk-model-set.js";
export { createOpenAIModelSet } from "./models/openai-model-set.js";
export { createOpenRouterModelSet } from "./models/openrouter-model-set.js";
export { flightTools } from "./tools/flight-tools.js";
