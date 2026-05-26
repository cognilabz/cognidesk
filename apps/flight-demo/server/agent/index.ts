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
    ].join("\n"),
  });
  agent.tools.add(
    flightTools.searchFlights,
    flightTools.bookFlight,
    flightTools.getTicketStatus,
    flightTools.getFlightInfo,
  );
  agent.knowledge.add(flightKnowledge);

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
