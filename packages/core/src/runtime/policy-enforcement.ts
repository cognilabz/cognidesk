import type { ConversationRecord } from "../storage.js";
import type {
  AnyTool,
  CapabilityUseDecision,
  ChannelContext,
  ConversationChannel,
} from "../types.js";
import { defineChannelContext, evaluateCapabilityUse } from "../types.js";
import type { RuntimeOptions } from "./types.js";

export function evaluateToolPolicyUse(input: {
  options: RuntimeOptions;
  conversation: ConversationRecord;
  tool: AnyTool;
  channel?: ConversationChannel;
}): CapabilityUseDecision | null {
  const channel = resolveToolPolicyChannel(input.channel ?? input.conversation.channel);
  const policy = input.tool.policy;
  const consequential = Boolean(
    input.tool.sideEffect
    || policy?.outbound
    || policy?.externallyVisible
    || policy?.exposesSensitiveData
    || policy?.changesWorkflow,
  );
  if (!channel || !consequential) return null;

  const requiredPolicyIds = policy?.requiredPolicyIds ?? [];
  if (requiredPolicyIds.length === 0) {
    return {
      allowed: false,
      code: "missing-policy",
      message: `Tool '${input.tool.name}' is consequential and must declare required policy ids before it can run in channel '${channel.kind}'.`,
      blockers: [{
        code: "missing-tool-policy",
        message: `Tool '${input.tool.name}' is missing requiredPolicyIds for consequential channel use.`,
        kind: "missing-policy",
      }],
    };
  }

  return evaluateCapabilityUse({
    request: {
      channel: channel.kind,
      channelId: channel.channelId,
      capability: policy?.capability ?? "model.call-tools",
      ...(policy?.providerPackageId ? { providerPackageId: policy.providerPackageId } : {}),
      ...(policy?.actionAudience ? { actionAudience: policy.actionAudience } : {}),
      ...(policy?.outbound !== undefined ? { outbound: policy.outbound } : {}),
      sideEffect: input.tool.sideEffect,
      externallyVisible: policy?.externallyVisible,
      exposesSensitiveData: policy?.exposesSensitiveData,
      changesWorkflow: policy?.changesWorkflow,
      requiredPolicyIds,
    },
    channels: input.options.channels ?? [],
    ...(input.options.capabilityAvailability ? { availability: input.options.capabilityAvailability } : {}),
    ...(input.options.providerPackages ? { providerPackages: input.options.providerPackages } : {}),
  });
}

export function policyBlockForEvent(decision: Exclude<CapabilityUseDecision, { allowed: true }>) {
  return {
    code: decision.code,
    message: decision.message,
    blockers: decision.blockers,
  };
}

function resolveToolPolicyChannel(channel?: ConversationChannel): ChannelContext | undefined {
  return channel ? defineChannelContext(channel) : undefined;
}
