import type { ChannelContext, ChannelPolicyConfig } from "../types.js";

export function resolveRuntimeChannelPolicy(
  policies: ChannelPolicyConfig[],
  channel: ChannelContext,
): ChannelPolicyConfig | undefined {
  const exactPolicy = policies.find((policy) =>
    policy.id === channel.channelId
    && policy.channel === channel.kind
  );
  if (exactPolicy) return exactPolicy.enabled !== false ? exactPolicy : undefined;

  const genericPolicy = policies.find((policy) =>
    policy.id === channel.kind
    && policy.channel === channel.kind
  );
  return genericPolicy?.enabled !== false ? genericPolicy : undefined;
}

export function channelPolicyIdsForKind(
  policies: ChannelPolicyConfig[],
  channel: ChannelContext,
): string[] {
  return policies
    .filter((policy) => policy.channel === channel.kind)
    .map((policy) => policy.id);
}
