import {
  buildJourneyIndex,
  createAgent,
  type AgentModelSet,
  type VoiceModelSet,
} from "@cognidesk/core";
import {
  flightDemoExternalApisEnabled,
  flightDemoExternalIntegrationJourneysEnabled,
  loadFlightDemoConfig,
  requireConfiguredModelApiKeys,
  resolveFlightDemoPath,
  type ConfiguredModelApiKeys,
  type FlightDemoExternalIntegrationJourneyFlags,
  type FlightDemoConfig,
} from "../config.js";
import {
  assertCompatibleKnowledgeIndex,
  buildFlightKnowledgeIndex,
  loadFlightKnowledgeDocuments,
  loadFlightKnowledgeIndex,
  type FlightKnowledgeIndex,
} from "../knowledge-index.js";
import { addBaggageServiceJourney } from "./journeys/baggage-service.js";
import { addBookFlightJourney } from "./journeys/book-flight.js";
import { addHandoffJourney } from "./journeys/handoff.js";
import { addSecureEmailLoginJourney } from "./journeys/secure-email-login.js";
import { addTicketStatusJourney } from "./journeys/ticket-status.js";
import { addWhatsAppCustomerMessageJourney } from "./journeys/whatsapp-customer-message.js";
import { createFlightKnowledgeSource } from "./knowledge/source.js";
import { createAiSdkModelSet } from "./models/ai-sdk-model-set.js";
import { createLocalDemoModelSet } from "./models/local-demo-model-set.js";
import { flightTools, type FlightTools } from "./tools/flight-tools.js";

export interface CreateFlightDemoRuntimePartsOptions {
  config?: FlightDemoConfig;
  externalIntegrationJourneysEnabled?: FlightDemoExternalIntegrationJourneyOption;
  models?: AgentModelSet;
  knowledgeIndex?: FlightKnowledgeIndex;
  tools?: FlightTools;
}

export type FlightDemoExternalIntegrationJourneyOption =
  | boolean
  | Partial<FlightDemoExternalIntegrationJourneyFlags>;

export async function createFlightDemoRuntimeParts(options: CreateFlightDemoRuntimePartsOptions = {}) {
  const config = options.config ?? await loadFlightDemoConfig();
  const externalApisEnabled = flightDemoExternalApisEnabled();
  const externalIntegrationJourneyDefaults = typeof options.externalIntegrationJourneysEnabled === "boolean"
    ? booleanToExternalIntegrationJourneyFlags(options.externalIntegrationJourneysEnabled)
    : flightDemoExternalIntegrationJourneysEnabled();
  const externalIntegrationJourneysEnabled = resolveExternalIntegrationJourneyFlags(
    options.externalIntegrationJourneysEnabled,
    externalIntegrationJourneyDefaults,
  );
  const anyExternalIntegrationJourneyEnabled = hasAnyExternalIntegrationJourney(externalIntegrationJourneysEnabled);
  const models = options.models ?? (externalApisEnabled
    ? createConfiguredModelSet(config, requireConfiguredModelApiKeys(config))
    : createLocalDemoModelSet({ externalIntegrationJourneysEnabled }));
  const tools = options.tools ?? flightTools;
  const knowledgeIndex = options.knowledgeIndex
    ?? await loadRuntimeFlightKnowledgeIndex({ config, models, externalApisEnabled });
  assertCompatibleKnowledgeIndex(knowledgeIndex, models.journeyEmbedding);

  const flightKnowledge = createFlightKnowledgeSource({
    index: knowledgeIndex,
    embeddingModel: models.journeyEmbedding,
  });
  const voiceModelSet = createFlightDemoVoiceModelSet(config);
  const agent = createAgent("flight-service", {
    logLevel: "debug",
    behavior: {
      chatStart: {
        type: "message",
        text: createChatStartText(externalIntegrationJourneysEnabled),
        visibleToModel: true,
      },
    },
    instructions: [
      "You are a concise customer support agent for Cogni Air, a mocked airline support demo.",
      `Help with realistic airline support intents: ${createIntentList(externalIntegrationJourneysEnabled)}.`,
      "Do not claim that real bookings were made; this demo uses mocked data.",
      `Supported actions are limited to ${createSupportedActionList(externalIntegrationJourneysEnabled)}.`,
      externalIntegrationJourneysEnabled.discordHandoff
        ? "For disrupted travel such as major delays, cancellations, missed connections, accessibility needs, medical exceptions, or stranded passengers, give the useful policy or status answer you can provide and offer a human handoff when the request needs live airline authority."
        : "For disrupted travel such as major delays, cancellations, missed connections, accessibility needs, medical exceptions, or stranded passengers, give the useful policy or status answer you can provide; if live airline authority is needed, explain that human handoff is disabled in this local mode.",
      externalIntegrationJourneysEnabled.secureEmail
        ? "For account-protected requests such as passenger-name changes, invoices, receipts, boarding-pass delivery, refund details, profile access, or date changes on an existing booking, switch from chat to a secure email-login continuation; never ask for passwords, one-time codes, passport numbers, or payment card details in chat."
        : "For account-protected requests such as passenger-name changes, invoices, receipts, boarding-pass delivery, refund details, profile access, or date changes on an existing booking, do not collect credentials or private account data in chat; explain that secure email login is disabled unless FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=true or FLIGHT_DEMO_EXTERNAL_APIS=true.",
      ...(externalIntegrationJourneysEnabled.secureEmail
        ? ["For secure email-login continuations, never repeat a full account email address in customer-facing assistant text; say 'the account email' or mask it as the first two local-part characters, three dots, and the domain."]
        : []),
      ...(anyExternalIntegrationJourneyEnabled
        ? [`Only these external integration Journeys are enabled: ${createEnabledExternalJourneyList(externalIntegrationJourneysEnabled)}. Do not offer disabled external Journeys.`]
        : ["External integration Journeys are disabled in this local mode; do not offer secure email, WhatsApp delivery, or Discord human handoff. Mention the matching per-Journey env flag only when the customer asks for one of those live integrations."]),
      "When a previous assistant message or completed journey says a mocked booking is already confirmed, acknowledge that result on casual follow-ups; do not ask the customer to confirm the same booking again.",
      createUnsupportedActionInstruction(externalIntegrationJourneysEnabled),
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
      ...(anyExternalIntegrationJourneyEnabled
        ? []
        : ["External secure email, WhatsApp, and human handoff Journeys are disabled in local mode; explain this briefly if requested."]),
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
    tools.searchFlights,
    tools.suggestFlightOptions,
    tools.getTicketStatus,
    tools.getFlightInfo,
    ...(externalIntegrationJourneysEnabled.whatsapp ? [tools.sendWhatsAppCustomerMessage] : []),
  );
  agent.knowledge.add(flightKnowledge);

  addBaggageServiceJourney(agent, flightKnowledge);
  addBookFlightJourney(agent, tools);
  addTicketStatusJourney(agent, tools);
  if (externalIntegrationJourneysEnabled.secureEmail) addSecureEmailLoginJourney(agent);
  if (externalIntegrationJourneysEnabled.whatsapp) addWhatsAppCustomerMessageJourney(agent, tools);
  if (externalIntegrationJourneysEnabled.discordHandoff) addHandoffJourney(agent, flightKnowledge);

  const compiledAgent = agent.compile();
  const journeyIndex = await buildJourneyIndex(compiledAgent, { embeddingModel: models.journeyEmbedding });
  return { agent: compiledAgent, models, journeyIndex, knowledgeIndex };
}

function resolveExternalIntegrationJourneyFlags(
  option: FlightDemoExternalIntegrationJourneyOption | undefined,
  fallback: FlightDemoExternalIntegrationJourneyFlags,
): FlightDemoExternalIntegrationJourneyFlags {
  if (option === undefined) return fallback;
  if (typeof option === "boolean") {
    return booleanToExternalIntegrationJourneyFlags(option);
  }
  return {
    secureEmail: option.secureEmail ?? fallback.secureEmail,
    discordHandoff: option.discordHandoff ?? fallback.discordHandoff,
    whatsapp: option.whatsapp ?? fallback.whatsapp,
  };
}

function booleanToExternalIntegrationJourneyFlags(value: boolean): FlightDemoExternalIntegrationJourneyFlags {
  return {
    secureEmail: value,
    discordHandoff: value,
    whatsapp: value,
  };
}

function hasAnyExternalIntegrationJourney(flags: FlightDemoExternalIntegrationJourneyFlags) {
  return flags.secureEmail || flags.discordHandoff || flags.whatsapp;
}

function createChatStartText(flags: FlightDemoExternalIntegrationJourneyFlags) {
  const topics = ["booking", "ticket status", "check-in", "baggage"];
  if (flags.secureEmail) topics.push("secure account help");
  if (flags.whatsapp) topics.push("WhatsApp updates");
  if (flags.discordHandoff) topics.push("a human agent");
  if (topics.length === 4) topics.push("policy questions");
  return `Hi! How can I help with your trip today — ${formatList(topics)}?`;
}

function createIntentList(flags: FlightDemoExternalIntegrationJourneyFlags) {
  return formatList([
    "new flight shopping",
    "itinerary and ticket status",
    "check-in",
    "boarding and gate timing",
    "delays",
    "cancellations",
    "missed connections",
    "baggage",
    ...(flags.secureEmail ? ["secure account requests"] : []),
    ...(flags.whatsapp ? ["WhatsApp updates"] : []),
    ...(flags.discordHandoff ? ["human handoff"] : []),
    ...(!hasAnyExternalIntegrationJourney(flags) ? ["policy questions"] : []),
  ]);
}

function createSupportedActionList(flags: FlightDemoExternalIntegrationJourneyFlags) {
  return formatList([
    "searching mocked flights",
    "creating a mocked booking after explicit confirmation",
    "checking mocked ticket status",
    "checking mocked flight details",
    "answering policy questions",
    ...(flags.whatsapp ? ["sending approved WhatsApp demo messages"] : []),
    ...(flags.discordHandoff ? ["requesting human handoff"] : []),
  ]);
}

function createEnabledExternalJourneyList(flags: FlightDemoExternalIntegrationJourneyFlags) {
  return formatList([
    ...(flags.secureEmail ? ["secure email login"] : []),
    ...(flags.whatsapp ? ["WhatsApp delivery"] : []),
    ...(flags.discordHandoff ? ["Discord human handoff"] : []),
  ]);
}

function createUnsupportedActionInstruction(flags: FlightDemoExternalIntegrationJourneyFlags) {
  const options = [
    "policy information",
    ...(flags.secureEmail ? ["secure email continuation"] : []),
    ...(flags.discordHandoff ? ["human handoff"] : []),
  ];
  return `Do not offer to add, order, buy, or check eligibility for extra baggage, seats, meals, refunds, payments, or real airline account changes. For those unsupported actions, explain the limitation and offer ${formatList(options)} as appropriate.`;
}

function formatList(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

async function loadRuntimeFlightKnowledgeIndex(options: {
  config: FlightDemoConfig;
  models: AgentModelSet;
  externalApisEnabled: boolean;
}) {
  const indexPath = resolveFlightDemoPath(options.config.storage.knowledgeIndexPath);
  try {
    const index = await loadFlightKnowledgeIndex(indexPath);
    assertCompatibleKnowledgeIndex(index, options.models.journeyEmbedding);
    return index;
  } catch (error) {
    if (options.externalApisEnabled) throw error;
    const documents = await loadFlightKnowledgeDocuments(resolveFlightDemoPath("knowledge/documents.json"));
    return buildFlightKnowledgeIndex({
      documents,
      embeddingModel: options.models.journeyEmbedding,
    });
  }
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
export { createFlightTools, flightTools } from "./tools/flight-tools.js";
export type { FlightTools, FlightWhatsAppCustomerMessageSender } from "./tools/flight-tools.js";
