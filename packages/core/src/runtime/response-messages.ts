import type { CompiledAgent, CompiledJourney } from "../definition.js";
import { channelKindOf, defineChannelContext, type ConversationChannel } from "../types.js";
import type { ChannelPolicyConfig, JourneySummary, ModelMessage } from "../types.js";
import {
  promptSectionValue,
  resolveTurnPolicyContext,
  summarizeRuntimeChannelPolicy,
} from "./prompt-context.js";
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
  channel?: ConversationChannel;
  runtimeChannels?: ChannelPolicyConfig[];
  conversationContext?: unknown;
  resolvedContext?: unknown;
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
  const channel = args.channel ? defineChannelContext(args.channel) : undefined;
  const channelInstruction = channel ? renderChannelInstruction(channel) : "";
  const policyContext = resolveTurnPolicyContext({
    agent: args.agent,
    ...(channel ? { channel } : {}),
    ...(args.runtimeChannels ? { runtimeChannels: args.runtimeChannels } : {}),
  });
  const channelPolicyContext = policyContext.runtimeChannelPolicy
    ? {
        ...(policyContext.agentChannelPolicy !== undefined ? { agent: policyContext.agentChannelPolicy } : {}),
        runtime: summarizeRuntimeChannelPolicy(policyContext.runtimeChannelPolicy),
      }
    : policyContext.agentChannelPolicy;

  return [
    {
      role: "system",
      content: [
        args.agent.instructions,
        channelInstruction,
        "",
        "Agent persona:",
        promptSectionValue(args.agent.persona, "No configured agent persona."),
        "",
        "Channel policy:",
        promptSectionValue(channelPolicyContext, "No configured channel policy."),
        "",
        "Handoff policy:",
        promptSectionValue(policyContext.handoffPolicy, "No configured handoff policy."),
        "",
        "Conversation context:",
        promptSectionValue(args.conversationContext, "No conversation context."),
        "",
        "Resolved application context:",
        promptSectionValue(args.resolvedContext, "No resolved application context."),
        "",
        "Conversation memory:",
        memoryContext,
        "",
        "Completed journey summaries:",
        journeySummaryContext,
        "",
        journeyContext,
        "",
        "Use retrieved knowledge when relevant. Do not write raw knowledge ids such as K1, K1:document-id, or document ids in the customer-facing prose; the runtime attaches source links after the message.",
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

export function renderChannelInstruction(channelInput: ConversationChannel) {
  const channel = defineChannelContext(channelInput);
  const kind = channelKindOf(channel);
  const base = [
    `Current support channel: ${kind}.`,
    channel.provider ? `Provider: ${channel.provider}.` : "",
    channel.externalThreadId ? "External thread id is present; preserve thread continuity." : "",
    channel.capabilities.threaded ? "Respect the existing thread context." : "",
  ].filter(Boolean);
  const byKind: Record<string, string> = {
    voice: "Use short spoken responses, ask one question at a time when practical, avoid Markdown/widgets/visual controls, and require verbal confirmation for side-effect actions.",
    email: "Use a complete email style with clear structure, greeting/sign-off when appropriate, and draft-first wording unless policy explicitly allows auto-send.",
    chat: "Use concise interactive support language; Markdown and widgets are allowed only when configured.",
    messaging: "Use short friendly messages, respect template and freeform-window limits, and avoid sensitive data unless policy permits it.",
    sms: "Use very short direct text, keep within SMS-sized responses, avoid sensitive data, and use links only when configured.",
    rcs: "Use compact rich-messaging language and respect template/quick-reply constraints.",
    ticketing: "Write internal-support oriented notes, summaries, priorities, tags, and next actions; distinguish customer-visible replies from private notes.",
    workplace: "Use thread-aware B2B support style; distinguish customer-facing workspace messages from internal handoff or agent-assist notes.",
    social: "Use concise public-safe DM style and avoid sensitive data unless configured.",
    form: "Treat this as structured intake; acknowledge submitted fields and ask only for missing required details.",
    helpCenter: "Prefer answer snippets, cited knowledge, and escalation paths when self-service is insufficient.",
    community: "Use public-forum-safe language and avoid private account details.",
    ecommerce: "Use order-aware support language and separate provider-side object updates from customer replies.",
    marketplace: "Use marketplace-message style and respect platform constraints for seller/customer communication.",
    review: "Use concise public review-response style and avoid private customer data.",
    video: "Use live-support language, explain visual/co-browsing steps clearly, and confirm side effects.",
    cobrowsing: "Use live guided-support language, explain screen-sharing or co-browsing steps clearly, and confirm consent before viewing or changing anything.",
  };
  return [...base, byKind[kind ?? ""] ?? ""].filter(Boolean).join(" ");
}
