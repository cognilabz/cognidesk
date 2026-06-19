import { z } from "zod";
import {
  ActionAudienceSchema,
  CapabilityAvailabilityStatusSchema,
  ChannelAudienceSchema,
  ChannelCapabilitySchema,
  ConversationChannelKindSchema,
  ProviderCredentialStateSchema,
} from "./base.js";
import {
  ProviderManifestSchema,
  type ProviderManifest,
  type ProviderManifestInput,
} from "./manifest.js";

export const CapabilityAvailabilitySchema = z.object({
  providerPackageId: z.string().min(1).optional(),
  capability: ChannelCapabilitySchema.optional(),
  status: CapabilityAvailabilityStatusSchema,
  enabledForChannels: z.array(ConversationChannelKindSchema).default([]),
  enabledForAgents: z.array(z.string()).default([]),
  enabledForJourneys: z.array(z.string()).default([]),
  enabledForTools: z.array(z.string()).default([]),
  blockers: z.array(z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    kind: z.enum([
      "missing-policy",
      "missing-configuration",
      "missing-credentials",
      "provider-unsupported",
      "permission-blocked",
      "unknown",
    ]).default("unknown"),
  })).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type CapabilityAvailability = z.infer<typeof CapabilityAvailabilitySchema>;
export type CapabilityAvailabilityInput = z.input<typeof CapabilityAvailabilitySchema>;

export const ProviderCredentialStatusSchema = z.object({
  providerPackageId: z.string().min(1).optional(),
  requirementId: z.string().min(1),
  state: ProviderCredentialStateSchema,
  scopes: z.array(z.string()).default([]),
  expiresAt: z.string().optional(),
  message: z.string().optional(),
});
export type ProviderCredentialStatus = z.infer<typeof ProviderCredentialStatusSchema>;
export type ProviderCredentialStatusInput = z.input<typeof ProviderCredentialStatusSchema>;

export const ChannelFlowActivationSchema = z.object({
  journeyId: z.string().min(1),
  enabled: z.boolean().default(true),
  reason: z.string().optional(),
  providerPackageIds: z.array(z.string().min(1)).default([]),
  policyIds: z.array(z.string().min(1)).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelFlowActivation = z.infer<typeof ChannelFlowActivationSchema>;
export type ChannelFlowActivationInput = z.input<typeof ChannelFlowActivationSchema>;

export const ChannelOutboundPolicySchema = z.object({
  enabled: z.boolean().default(false),
  providerPackageIds: z.array(z.string().min(1)).default([]),
  requiresProviderOutboundSupport: z.boolean().default(true),
  policyIds: z.array(z.string().min(1)).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelOutboundPolicy = z.infer<typeof ChannelOutboundPolicySchema>;
export type ChannelOutboundPolicyInput = z.input<typeof ChannelOutboundPolicySchema>;

export const ChannelBehaviorPolicySchema = z.object({
  tone: z.string().min(1).optional(),
  maxWords: z.number().int().positive().optional(),
  maxCharacters: z.number().int().positive().optional(),
  allowMarkdown: z.boolean().optional(),
  allowWidgets: z.boolean().optional(),
  draftFirst: z.boolean().optional(),
  approval: z.unknown().optional(),
  sensitiveData: z.unknown().optional(),
  media: z.unknown().optional(),
  handoff: z.unknown().optional(),
}).passthrough();
export type ChannelBehaviorPolicy = z.infer<typeof ChannelBehaviorPolicySchema>;
export type ChannelBehaviorPolicyInput = z.input<typeof ChannelBehaviorPolicySchema>;

export const ChannelHandoffPolicySchema = z.object({
  enabled: z.boolean().default(false),
  providerPackageIds: z.array(z.string().min(1)).default([]),
  destinations: z.array(z.string().min(1)).default([]),
  sdkControlled: z.boolean().optional(),
  policyIds: z.array(z.string().min(1)).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelHandoffPolicy = z.infer<typeof ChannelHandoffPolicySchema>;
export type ChannelHandoffPolicyInput = z.input<typeof ChannelHandoffPolicySchema>;

export const ChannelSetConfigSchema = z.object({
  id: z.string().min(1),
  label: z.string().optional(),
  enabled: z.boolean().default(true),
  channelIds: z.array(z.string().min(1)).default([]),
  channels: z.array(ConversationChannelKindSchema).default([]),
  conversationContinuity: z.object({
    mode: z.enum(["new-conversation", "link-existing", "sdk-decides"]).default("sdk-decides"),
    crossChannel: z.boolean().default(false),
    policy: z.string().optional(),
  }).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelSetConfig = z.infer<typeof ChannelSetConfigSchema>;
export type ChannelSetConfigInput = z.input<typeof ChannelSetConfigSchema>;

export const ProviderReadinessSchema = z.object({
  providerPackageId: z.string().min(1),
  status: z.enum([
    "unknown",
    "not-configured",
    "configured",
    "ready",
    "blocked",
    "live-verified",
    "sandbox-verified",
    "scoped-verified",
    "full-api-verified",
  ]).default("unknown"),
  checkedAt: z.string().optional(),
  checkSource: z.string().optional(),
  live: z.boolean().optional(),
  sandbox: z.boolean().optional(),
  blockers: CapabilityAvailabilitySchema.shape.blockers.default([]),
  remediationActions: z.array(z.object({
    id: z.string().min(1),
    label: z.string().min(1),
    kind: z.enum(["configure", "authorize", "verify", "read-docs", "contact-provider", "custom"]).default("custom"),
    metadata: z.record(z.string(), z.unknown()).optional(),
  })).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ProviderReadiness = z.infer<typeof ProviderReadinessSchema>;
export type ProviderReadinessInput = z.input<typeof ProviderReadinessSchema>;

export const ChannelPolicyConfigSchema = z.object({
  id: z.string().min(1),
  channel: ConversationChannelKindSchema,
  enabled: z.boolean().default(true),
  audience: ChannelAudienceSchema.optional(),
  channelSetIds: z.array(z.string().min(1)).default([]),
  providerPackageIds: z.array(z.string().min(1)).default([]),
  enabledCapabilities: z.array(ChannelCapabilitySchema).default([]),
  flowActivations: z.array(ChannelFlowActivationSchema).default([]),
  behavior: ChannelBehaviorPolicySchema.optional(),
  outbound: ChannelOutboundPolicySchema.optional(),
  handoff: ChannelHandoffPolicySchema.optional(),
  policies: z.record(z.string(), z.unknown()).default({}),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelPolicyConfig = z.infer<typeof ChannelPolicyConfigSchema>;
export type ChannelPolicyConfigInput = z.input<typeof ChannelPolicyConfigSchema>;

export const CapabilityUseRequestSchema = z.object({
  channel: ConversationChannelKindSchema,
  channelId: z.string().min(1).optional(),
  capability: ChannelCapabilitySchema,
  providerPackageId: z.string().min(1).optional(),
  actionAudience: ActionAudienceSchema.optional(),
  outbound: z.boolean().optional(),
  sideEffect: z.boolean().optional(),
  externallyVisible: z.boolean().optional(),
  exposesSensitiveData: z.boolean().optional(),
  changesWorkflow: z.boolean().optional(),
  requiredPolicyIds: z.array(z.string().min(1)).default([]),
});
export type CapabilityUseRequest = z.infer<typeof CapabilityUseRequestSchema>;
export type CapabilityUseRequestInput = z.input<typeof CapabilityUseRequestSchema>;

export type CapabilityUseDecision =
  | { allowed: true; policy: ChannelPolicyConfig }
  | {
      allowed: false;
      code:
        | "missing-channel-configuration"
        | "capability-not-enabled"
        | "capability-blocked"
        | "outbound-disabled"
        | "provider-direction-not-supported"
        | "missing-policy";
      message: string;
      blockers: Array<{ code: string; message: string; kind?: string }>;
    };

export function defineChannelPolicy(config: z.input<typeof ChannelPolicyConfigSchema>): ChannelPolicyConfig {
  return ChannelPolicyConfigSchema.parse(config);
}

export function defineCapabilityAvailability(input: CapabilityAvailabilityInput): CapabilityAvailability {
  return CapabilityAvailabilitySchema.parse(input);
}

export function evaluateCapabilityUse(input: {
  request: CapabilityUseRequestInput;
  channels: ChannelPolicyConfigInput[];
  availability?: CapabilityAvailabilityInput[];
  providerPackages?: ProviderManifestInput[];
}): CapabilityUseDecision {
  const request = CapabilityUseRequestSchema.parse(input.request);
  const channels = input.channels.map((channel) => ChannelPolicyConfigSchema.parse(channel));
  const availability = (input.availability ?? []).map((candidate) => CapabilityAvailabilitySchema.parse(candidate));
  const providerPackages = (input.providerPackages ?? []).map((candidate) => ProviderManifestSchema.parse(candidate));
  const policy = resolveCapabilityPolicy(channels, request);
  if (!policy) {
    const channelReference = request.channelId ? `${request.channel}/${request.channelId}` : request.channel;
    return blocked("missing-channel-configuration", `Channel '${channelReference}' is not configured.`, [{
      code: "missing-channel-configuration",
      message: `Channel '${channelReference}' is not configured.`,
      kind: "missing-configuration",
    }]);
  }
  if (!policy.enabledCapabilities.includes(request.capability)) {
    return blocked("capability-not-enabled", `Capability '${request.capability}' is not enabled for channel '${request.channel}'.`, [{
      code: "capability-not-enabled",
      message: `Capability '${request.capability}' is not enabled for channel '${request.channel}'.`,
      kind: "missing-configuration",
    }]);
  }

  const blockedAvailability = availability.find((candidate) =>
    candidate.status === "blocked"
    && (!candidate.capability || candidate.capability === request.capability)
    && (!candidate.providerPackageId || candidate.providerPackageId === request.providerPackageId)
  );
  if (blockedAvailability) {
    return blocked("capability-blocked", `Capability '${request.capability}' is blocked.`, blockedAvailability.blockers);
  }

  if (request.outbound) {
    if (policy.outbound?.enabled !== true) {
      return blocked("outbound-disabled", `Outbound use is not enabled for channel '${request.channel}'.`, [{
        code: "outbound-disabled",
        message: `Outbound use is not enabled for channel '${request.channel}'.`,
        kind: "missing-configuration",
      }]);
    }
    if (
      request.providerPackageId
      && policy.outbound.providerPackageIds.length > 0
      && !policy.outbound.providerPackageIds.includes(request.providerPackageId)
    ) {
      return blocked("provider-direction-not-supported", `Provider package '${request.providerPackageId}' is not enabled for outbound channel '${request.channel}'.`, [{
        code: "provider-outbound-not-enabled",
        message: `Provider package '${request.providerPackageId}' is not enabled for outbound channel '${request.channel}'.`,
        kind: "provider-unsupported",
      }]);
    }
    const manifest = request.providerPackageId
      ? providerPackages.find((candidate) => candidate.id === request.providerPackageId)
      : undefined;
    if (
      manifest
      && policy.outbound.requiresProviderOutboundSupport !== false
      && !providerSupportsOutbound(manifest)
    ) {
      return blocked("provider-direction-not-supported", `Provider package '${manifest.id}' does not support outbound use.`, [{
        code: "provider-direction-not-supported",
        message: `Provider package '${manifest.id}' does not declare outbound support.`,
        kind: "provider-unsupported",
      }]);
    }
  }

  const consequential = Boolean(
    request.sideEffect
    || request.externallyVisible
    || request.exposesSensitiveData
    || request.changesWorkflow,
  );
  const missingPolicies = consequential
    ? request.requiredPolicyIds.filter((policyId) => !(policyId in policy.policies))
    : [];
  if (missingPolicies.length > 0) {
    return blocked("missing-policy", `Capability '${request.capability}' is missing required policy configuration.`, missingPolicies.map((policyId) => ({
      code: "missing-policy",
      message: `Missing policy '${policyId}' for capability '${request.capability}'.`,
      kind: "missing-policy",
    })));
  }

  return { allowed: true, policy };
}

function resolveCapabilityPolicy(
  channels: ChannelPolicyConfig[],
  request: CapabilityUseRequest,
): ChannelPolicyConfig | undefined {
  if (request.channelId) {
    const exactPolicy = channels.find((candidate) =>
      candidate.id === request.channelId
      && candidate.channel === request.channel
    );
    if (exactPolicy) return exactPolicy.enabled !== false ? exactPolicy : undefined;
  }
  return channels.find((candidate) =>
    candidate.enabled !== false
    && candidate.channel === request.channel
  );
}

function blocked(
  code: Exclude<CapabilityUseDecision, { allowed: true }>["code"],
  message: string,
  blockers: Array<{ code: string; message: string; kind?: string }>,
): CapabilityUseDecision {
  return { allowed: false, code, message, blockers };
}

function providerSupportsOutbound(manifest: ProviderManifest) {
  return manifest.directions.some((direction) =>
    direction === "bidirectional"
    || direction === "send-only"
    || direction === "outbound-only"
  );
}
