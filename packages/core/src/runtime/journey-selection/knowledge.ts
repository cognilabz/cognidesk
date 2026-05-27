import type { CompiledAgent, CompiledJourney } from "../../definition.js";
import { runtimeLogger } from "../../logging.js";
import {
  addTelemetryContentEvent,
  telemetryAttributes,
  telemetryEventNames,
  telemetrySpanNames,
  withTelemetrySpan,
} from "../../telemetry.js";
import { resolveActiveStates } from "../journey-state.js";
import { parseKnowledgeQuery, uniqueKnowledgeSources } from "../tools.js";
import type {
  RetrievedKnowledgeItem,
  RuntimeEventEmitter,
  RuntimeOptions,
  StateMachineTurnResult,
} from "../types.js";

export async function retrieveKnowledge(args: {
  options: RuntimeOptions;
  agent: CompiledAgent;
  journey: CompiledJourney | null;
  stateMachineTurn: StateMachineTurnResult | null;
  conversationId: string;
  message: string;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}) {
  const activeStates = resolveActiveStates(args.journey, args.stateMachineTurn);
  const sources = uniqueKnowledgeSources([
    ...args.agent.knowledge,
    ...(args.journey?.knowledge ?? []),
    ...activeStates.flatMap((state) => state.knowledge),
  ]);
  const logger = runtimeLogger(args.options, { conversationId: args.conversationId });
  logger.debug({
    sourceNames: sources.map((source) => source.name),
    limit: args.options.knowledgeLimit ?? 5,
  }, "Starting knowledge retrieval");
  const items: RetrievedKnowledgeItem[] = [];
  for (const source of sources) {
    const query = parseKnowledgeQuery(source, args.message);
    if (query === null) {
      logger.trace({ sourceName: source.name }, "Knowledge source skipped");
      continue;
    }
    logger.debug({ sourceName: source.name }, "Retrieving from knowledge source");
    const result = await withTelemetrySpan(args.options, {
      name: telemetrySpanNames.knowledgeRetrieve,
      attributes: {
        [telemetryAttributes.conversationId]: args.conversationId,
        [telemetryAttributes.knowledgeSourceName]: source.name,
        ...(args.journey ? { [telemetryAttributes.journeyId]: args.journey.id } : {}),
      },
      metric: {
        kind: "knowledge",
        attributes: {
          [telemetryAttributes.knowledgeSourceName]: source.name,
          ...(args.journey ? { [telemetryAttributes.journeyId]: args.journey.id } : {}),
        },
      },
    }, () => source.retrieve({
        query,
        ...(args.signal ? { signal: args.signal } : {}),
      }));
    addTelemetryContentEvent(args.options, telemetryEventNames.knowledgeItems, {
      "cognidesk.knowledge.source.name": source.name,
      "cognidesk.knowledge.query": query,
      "cognidesk.knowledge.items": result.items,
    });
    const limited = result.items
      .slice(0, args.options.knowledgeLimit ?? 5)
      .map((item) => ({ ...item, sourceName: source.name }));
    items.push(...limited);
    logger.debug({
      sourceName: source.name,
      retrievedCount: result.items.length,
      returnedCount: limited.length,
      itemIds: limited.map((item) => item.id),
    }, "Knowledge source returned items");
    await args.emit({
      conversationId: args.conversationId,
      type: "knowledge.retrieved",
      data: {
        sourceName: source.name,
        itemIds: limited.map((item) => item.id),
      },
    });
  }
  return items;
}
