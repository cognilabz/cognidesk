import { telemetryAttributes, telemetrySpanNames } from "../telemetry.js";
import { defineChannelContext } from "../types.js";
import type { RuntimeFacadeContext } from "./facade/context.js";
import {
  policyContextForEvent,
  redactConversationContextForPrompt,
  resolveRuntimeApplicationContext,
  resolveTurnPolicyContext,
  summarizeRuntimeChannelPolicy,
  topLevelContextKeys,
} from "./prompt-context.js";
import type {
  ExplainTurnInput,
  ExplainTurnResult,
} from "./types.js";

export function explainRuntimeTurn<TTurn = unknown>(
  context: RuntimeFacadeContext,
  input: ExplainTurnInput<TTurn>,
): Promise<ExplainTurnResult> {
  return context.runtimeOperation("debug_explain_turn", telemetrySpanNames.runtimeHandleUserMessage, {
    [telemetryAttributes.conversationId]: input.conversationId,
  }, async () => {
    const agent = context.options.agent;
    if (!agent) throw new Error("Runtime has no agent configured.");
    const conversation = await context.options.storage.getConversation(input.conversationId);
    if (!conversation) throw new Error(`Conversation '${input.conversationId}' does not exist.`);
    const channel = input.channel
      ? defineChannelContext(input.channel)
      : conversation.channel
        ? defineChannelContext(conversation.channel)
        : undefined;
    const app = input.app ?? context.options.app ?? {};
    const conversationContext = await redactConversationContextForPrompt(context.options, conversation);
    const resolvedContext = await resolveRuntimeApplicationContext({
      options: context.options,
      conversation,
      turn: (input.turn ?? {}) as TTurn,
      ...(channel ? { channel } : {}),
      app,
      text: input.text,
    });
    const policyContext = resolveTurnPolicyContext({
      agent,
      ...(channel ? { channel } : {}),
      ...(context.options.channels ? { runtimeChannels: context.options.channels } : {}),
    });
    return {
      conversationId: conversation.id,
      agentId: agent.id,
      ...(channel ? { channel } : {}),
      ...(agent.persona !== undefined ? { persona: agent.persona } : {}),
      ...(policyContext.agentChannelPolicy !== undefined ? { agentChannelPolicy: policyContext.agentChannelPolicy } : {}),
      ...(policyContext.runtimeChannelPolicy ? {
        channelPolicy: summarizeRuntimeChannelPolicy(policyContext.runtimeChannelPolicy),
      } : {}),
      ...(policyContext.handoffPolicy !== undefined ? { handoffPolicy: policyContext.handoffPolicy } : {}),
      ...(conversationContext !== undefined ? { conversationContext } : {}),
      ...(resolvedContext !== undefined ? { resolvedContext } : {}),
      resolvedContextKeys: topLevelContextKeys(resolvedContext),
      policyEventData: policyContextForEvent(policyContext),
    };
  });
}
