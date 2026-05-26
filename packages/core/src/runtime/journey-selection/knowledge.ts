import type { CompiledAgent, CompiledJourney } from "../../definition.js";
import type { TraceEvent } from "../../observability.js";
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
  trace(event: TraceEvent): Promise<void>;
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
  const items: RetrievedKnowledgeItem[] = [];
  for (const source of sources) {
    const query = parseKnowledgeQuery(source, args.message);
    if (query === null) continue;
    const result = await source.retrieve({
      query,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    const limited = result.items
      .slice(0, args.options.knowledgeLimit ?? 5)
      .map((item) => ({ ...item, sourceName: source.name }));
    items.push(...limited);
    await args.trace({
      type: "knowledge.retrieved",
      conversationId: args.conversationId,
      sourceName: source.name,
      itemIds: limited.map((item) => item.id),
    });
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
