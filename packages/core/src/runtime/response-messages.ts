import type { CompiledAgent, CompiledJourney } from "../definition.js";
import type { JourneySummary, ModelMessage } from "../types.js";
import { renderJourneyRuntimeContext } from "./rendering.js";
import type { ConversationMessage, RetrievedKnowledgeItem, StateMachineTurnResult, VisibleCustomEventContext } from "./types.js";

export function createResponseMessages(args: {
  agent: CompiledAgent;
  journey: CompiledJourney | null;
  stateMachineTurn: StateMachineTurnResult | null;
  userText: string;
  history: ConversationMessage[];
  knowledge: RetrievedKnowledgeItem[];
  visibleCustomEvents: VisibleCustomEventContext[];
  compactionSummary?: unknown;
  journeySummaries: JourneySummary[];
}): ModelMessage[] {
  const journeyContext = args.journey
    ? renderJourneyRuntimeContext(args.journey, args.stateMachineTurn)
    : "No active journey.";
  const knowledgeContext = args.knowledge.length > 0
    ? args.knowledge.map((item, index) => {
        const title = item.title ? ` (${item.title})` : "";
        return `[K${index + 1}:${item.id}${title}]\n${item.content}`;
      }).join("\n\n")
    : "No retrieved knowledge.";
  const customEventContext = args.visibleCustomEvents.length > 0
    ? args.visibleCustomEvents
        .map((event) => `[${event.offset}:${event.type}]\n${JSON.stringify(event.data)}`)
        .join("\n\n")
    : "No visible custom events.";
  const memoryContext = args.compactionSummary !== undefined
    ? JSON.stringify(args.compactionSummary)
    : "No compacted conversation memory.";
  const journeySummaryContext = args.journeySummaries.length > 0
    ? args.journeySummaries
        .map((summary) => [
          `journey:${summary.journeyId}`,
          `kind:${summary.kind}`,
          summary.stateId ? `state:${summary.stateId}` : "",
          summary.reason ? `reason:${summary.reason}` : "",
          `summary:${summary.summary}`,
        ].filter(Boolean).join(" "))
        .join("\n")
    : "No completed journey summaries.";
  const history = args.history.length > 0
    ? args.history
    : [{ role: "user" as const, content: args.userText }];

  return [
    {
      role: "system",
      content: [
        args.agent.instructions,
        "",
        "Conversation memory:",
        memoryContext,
        "",
        "Completed journey summaries:",
        journeySummaryContext,
        "",
        journeyContext,
        "",
        "Use retrieved knowledge when relevant. If knowledge is used, make the supporting text cite the source id in prose.",
        "",
        knowledgeContext,
        "",
        "Visible custom events:",
        customEventContext,
      ].join("\n"),
    },
    ...history.map((message): ModelMessage => ({
      role: message.role,
      content: message.content,
    })),
  ];
}
