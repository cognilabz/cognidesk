import {
  buildJourneyIndex,
  createAgent,
  type AgentModelSet,
} from "@cognidesk/core";
import {
  loadFlightDemoConfig,
  requireConfiguredApiKey,
  resolveFlightDemoPath,
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
import { createOpenAIModelSet } from "./models/openai-model-set.js";
import { createOpenRouterModelSet } from "./models/openrouter-model-set.js";
import { flightTools } from "./tools/flight-tools.js";

export interface CreateFlightDemoRuntimePartsOptions {
  config?: FlightDemoConfig;
  models?: AgentModelSet;
  knowledgeIndex?: FlightKnowledgeIndex;
}

export async function createFlightDemoRuntimeParts(options: CreateFlightDemoRuntimePartsOptions = {}) {
  const config = options.config ?? await loadFlightDemoConfig();
  const models = options.models ?? createConfiguredModelSet(config, requireConfiguredApiKey(config));
  const knowledgeIndex = options.knowledgeIndex
    ?? await loadFlightKnowledgeIndex(resolveFlightDemoPath(config.storage.knowledgeIndexPath));
  assertCompatibleKnowledgeIndex(knowledgeIndex, models.journeyEmbedding);

  const flightKnowledge = createFlightKnowledgeSource({
    index: knowledgeIndex,
    embeddingModel: models.journeyEmbedding,
  });
  const agent = createAgent("flight-service", {
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
  return { agent: compiledAgent, models, journeyIndex };
}

export function createConfiguredModelSet(config: FlightDemoConfig, apiKey: string): AgentModelSet {
  if (config.models.provider === "openrouter") {
    return createOpenRouterModelSet(config.models, apiKey);
  }
  return createOpenAIModelSet(config.models, apiKey);
}

export { createOpenAIModelSet } from "./models/openai-model-set.js";
export { createOpenRouterModelSet } from "./models/openrouter-model-set.js";
export { flightTools } from "./tools/flight-tools.js";
