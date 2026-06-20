import { z } from "zod";
import { StudioRoleSchema } from "./auth.js";

export const StudioChannelAudienceSchema = z.enum(["customer-facing", "internal-support", "mixed"]);
export type StudioChannelAudience = z.infer<typeof StudioChannelAudienceSchema>;

export const StudioProviderDirectionSchema = z.enum([
  "receive-only",
  "send-only",
  "inbound-only",
  "outbound-only",
  "bidirectional",
]);
export type StudioProviderDirection = z.infer<typeof StudioProviderDirectionSchema>;

export const StudioProviderTrustLevelSchema = z.enum(["official", "verified", "community", "experimental"]);
export type StudioProviderTrustLevel = z.infer<typeof StudioProviderTrustLevelSchema>;

export const StudioProviderCoverageScopeSchema = z.enum([
  "support-workflow-subset",
  "provider-api-subset",
  "connector-required",
  "local-protocol",
  "full-provider-api",
]);
export type StudioProviderCoverageScope = z.infer<typeof StudioProviderCoverageScopeSchema>;

export const StudioActionAudienceSchema = StudioChannelAudienceSchema;
export type StudioActionAudience = StudioChannelAudience;

export const StudioChannelCapabilitySchema = z.object({
  capability: z.string().min(1),
  label: z.string().optional(),
  description: z.string().optional(),
  extension: z.boolean().default(false),
  audiences: z.array(StudioActionAudienceSchema).default([]),
  requiresCredential: z.boolean().default(false),
  sideEffect: z.boolean().default(false),
  exposesSensitiveData: z.boolean().default(false),
  changesWorkflow: z.boolean().default(false),
  providerObjects: z.array(z.object({
    kind: z.string().min(1),
    label: z.string().optional(),
    description: z.string().optional(),
    schemaName: z.string().optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
  })).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioChannelCapability = z.infer<typeof StudioChannelCapabilitySchema>;

export const StudioProviderPackageSummarySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  packageName: z.string().min(1),
  provider: z.string().min(1),
  category: z.string().min(1),
  trustLevel: StudioProviderTrustLevelSchema,
  directions: z.array(StudioProviderDirectionSchema),
  channelAudiences: z.array(StudioChannelAudienceSchema),
  coverage: z.object({
    scope: StudioProviderCoverageScopeSchema,
    notes: z.array(z.string()).default([]),
    evidence: z.array(z.object({
      label: z.string().min(1),
      url: z.string().url().optional(),
    })).default([]),
  }).default({
    scope: "support-workflow-subset",
    notes: [
      "Coverage is scoped to Cognidesk support workflows unless this manifest explicitly declares full-provider-api coverage.",
    ],
    evidence: [],
  }),
  capabilities: z.array(StudioChannelCapabilitySchema),
  credentialRequirements: z.array(z.object({
    id: z.string().min(1),
    label: z.string().optional(),
    description: z.string().optional(),
    scopes: z.array(z.string()).default([]),
    required: z.boolean().default(true),
    metadata: z.record(z.string(), z.unknown()).optional(),
  })).default([]),
  privacyNotes: z.array(z.string()).default([]),
  limitations: z.array(z.string()).default([]),
  maintainers: z.array(z.object({
    name: z.string().min(1),
    type: z.enum(["official", "partner", "community", "unknown"]).default("unknown"),
    url: z.string().url().optional(),
  })).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioProviderPackageSummary = z.infer<typeof StudioProviderPackageSummarySchema>;

export const StudioCapabilityAvailabilitySchema = z.object({
  providerPackageId: z.string().min(1).optional(),
  capability: z.string().min(1).optional(),
  status: z.enum(["registry-available", "installed", "configured", "enabled", "blocked"]),
  enabledForChannels: z.array(z.string()).default([]),
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
export type StudioCapabilityAvailability = z.infer<typeof StudioCapabilityAvailabilitySchema>;

export const StudioProviderCredentialStatusSchema = z.object({
  providerPackageId: z.string().min(1).optional(),
  requirementId: z.string().min(1),
  state: z.enum([
    "not-required",
    "required",
    "configured",
    "missing",
    "expired",
    "insufficient-scope",
    "permission-blocked",
    "unavailable",
  ]),
  scopes: z.array(z.string()).default([]),
  expiresAt: z.string().optional(),
  message: z.string().optional(),
});
export type StudioProviderCredentialStatus = z.infer<typeof StudioProviderCredentialStatusSchema>;

export const StudioChannelPolicyDetailSchema = z.object({
  id: z.string().min(1),
  owner: z.string().optional(),
  value: z.unknown(),
});
export type StudioChannelPolicyDetail = z.infer<typeof StudioChannelPolicyDetailSchema>;

export const StudioChannelFlowActivationSchema = z.object({
  journeyId: z.string().min(1),
  enabled: z.boolean().default(true),
  reason: z.string().optional(),
  providerPackageIds: z.array(z.string()).default([]),
  policyIds: z.array(z.string()).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioChannelFlowActivation = z.infer<typeof StudioChannelFlowActivationSchema>;

export const StudioChannelOutboundPolicySchema = z.object({
  enabled: z.boolean().default(false),
  providerPackageIds: z.array(z.string()).default([]),
  requiresProviderOutboundSupport: z.boolean().default(true),
  policyIds: z.array(z.string()).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioChannelOutboundPolicy = z.infer<typeof StudioChannelOutboundPolicySchema>;

export const StudioChannelBehaviorPolicySchema = z.object({
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
export type StudioChannelBehaviorPolicy = z.infer<typeof StudioChannelBehaviorPolicySchema>;

export const StudioChannelHandoffPolicySchema = z.object({
  enabled: z.boolean().default(false),
  providerPackageIds: z.array(z.string()).default([]),
  destinations: z.array(z.string()).default([]),
  sdkControlled: z.boolean().optional(),
  policyIds: z.array(z.string()).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioChannelHandoffPolicy = z.infer<typeof StudioChannelHandoffPolicySchema>;

export const StudioChannelConfigurationSchema = z.object({
  id: z.string().min(1).optional(),
  channel: z.string().min(1),
  audience: StudioChannelAudienceSchema.optional(),
  enabled: z.boolean().default(true),
  channelSetIds: z.array(z.string()).default([]),
  providerPackageIds: z.array(z.string()).default([]),
  enabledCapabilities: z.array(z.string()).default([]),
  policyIds: z.array(z.string()).default([]),
  policyDetails: z.array(StudioChannelPolicyDetailSchema).default([]),
  flowActivations: z.array(StudioChannelFlowActivationSchema).default([]),
  behavior: StudioChannelBehaviorPolicySchema.optional(),
  outbound: StudioChannelOutboundPolicySchema.optional(),
  handoff: StudioChannelHandoffPolicySchema.optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioChannelConfiguration = z.infer<typeof StudioChannelConfigurationSchema>;

export const StudioChannelSetConfigurationSchema = z.object({
  id: z.string().min(1),
  label: z.string().optional(),
  enabled: z.boolean().default(true),
  channelIds: z.array(z.string()).default([]),
  channels: z.array(z.string()).default([]),
  conversationContinuity: z.object({
    mode: z.enum(["new-conversation", "link-existing", "sdk-decides"]).default("sdk-decides"),
    crossChannel: z.boolean().default(false),
    policy: z.string().optional(),
  }).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioChannelSetConfiguration = z.infer<typeof StudioChannelSetConfigurationSchema>;

export const StudioProviderReadinessSchema = z.object({
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
  ]),
  checkedAt: z.string().optional(),
  checkSource: z.string().optional(),
  live: z.boolean().optional(),
  sandbox: z.boolean().optional(),
  blockers: StudioCapabilityAvailabilitySchema.shape.blockers.default([]),
  remediationActions: z.array(z.object({
    id: z.string().min(1),
    label: z.string().min(1),
    kind: z.enum(["configure", "authorize", "verify", "read-docs", "contact-provider", "custom"]).default("custom"),
    metadata: z.record(z.string(), z.unknown()).optional(),
  })).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type StudioProviderReadiness = z.infer<typeof StudioProviderReadinessSchema>;

export const StudioConfigurationSurfaceSchema = z.object({
  targetId: z.string().min(1),
  channelSets: z.array(StudioChannelSetConfigurationSchema).default([]),
  channels: z.array(StudioChannelConfigurationSchema).default([]),
  providerPackages: z.array(StudioProviderPackageSummarySchema).default([]),
  capabilityAvailability: z.array(StudioCapabilityAvailabilitySchema).default([]),
  credentialStatuses: z.array(StudioProviderCredentialStatusSchema).default([]),
  providerReadiness: z.array(StudioProviderReadinessSchema).default([]),
  policyIds: z.array(z.string()).default([]),
  capturedAt: z.string(),
});
export type StudioConfigurationSurface = z.infer<typeof StudioConfigurationSurfaceSchema>;

export const StudioConfigurationMutationOperationSchema = z.object({
  op: z.string().min(1),
  channelId: z.string().min(1).optional(),
  channelSetId: z.string().min(1).optional(),
  providerPackageId: z.string().min(1).optional(),
  journeyId: z.string().min(1).optional(),
  policyId: z.string().min(1).optional(),
  value: z.unknown().optional(),
}).passthrough();
export type StudioConfigurationMutationOperation = z.infer<typeof StudioConfigurationMutationOperationSchema>;

export const StudioConfigurationMutationRequestSchema = z.object({
  requestId: z.string().min(1).optional(),
  targetId: z.string().min(1),
  reason: z.string().min(1),
  operations: z.array(StudioConfigurationMutationOperationSchema).min(1),
  actor: z.object({
    id: z.string().min(1).optional(),
    role: StudioRoleSchema.optional(),
  }).passthrough().optional(),
}).passthrough();
export type StudioConfigurationMutationRequest = z.infer<typeof StudioConfigurationMutationRequestSchema>;

export const StudioConfigurationMutationResultSchema = z.object({
  requestId: z.string().min(1),
  targetId: z.string().min(1),
  accepted: z.boolean(),
  applied: z.boolean().default(false),
  status: z.enum(["accepted", "applied", "rejected", "validation-failed", "unsupported"]),
  message: z.string().optional(),
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
      "validation",
    ]).default("unknown"),
  })).default([]),
}).passthrough();
export type StudioConfigurationMutationResult = z.infer<typeof StudioConfigurationMutationResultSchema>;
