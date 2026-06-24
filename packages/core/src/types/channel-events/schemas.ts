import { z } from "zod";
import {
  ActionAudienceSchema,
  ChannelCapabilitySchema,
  ChannelContextSchema,
  ConversationChannelKindSchema,
} from "../providers.js";

import {
  channelEventActorTypes,
  channelEventBindingOutcomes,
  channelEventBindingStatuses,
  channelEventDirections,
  channelEventHandlingDispositionKinds,
  channelEventIntakeStatuses,
  channelEventSourceTypes,
  channelOutputDeliveryModes,
  channelOutputProducerTypes,
  channelOutputResolutionOutcomes,
  channelOutputResolutionStatuses,
} from "./constants.js";

export const ChannelEventNatureSchema = z.string().min(1);
export const ChannelEventDirectionSchema = z.enum(channelEventDirections);
export const ChannelEventActorTypeSchema = z.enum(channelEventActorTypes);
export const ChannelEventIntentSchema = z.string().min(1);
export const ChannelEventSourceTypeSchema = z.enum(channelEventSourceTypes);
export const ChannelEventIntakeStatusSchema = z.enum(channelEventIntakeStatuses);
export const ChannelEventBindingStatusSchema = z.enum(channelEventBindingStatuses);
export const ChannelEventBindingOutcomeSchema = z.enum(channelEventBindingOutcomes);
export const ChannelEventHandlingDispositionKindSchema = z.enum(channelEventHandlingDispositionKinds);
export const ChannelOutputIntentKindSchema = z.string().min(1);
export const ChannelOutputProducerTypeSchema = z.enum(channelOutputProducerTypes);
export const ChannelOutputDeliveryModeSchema = z.enum(channelOutputDeliveryModes);
export const ChannelOutputResolutionOutcomeSchema = z.enum(channelOutputResolutionOutcomes);
export const ChannelOutputResolutionStatusSchema = z.enum(channelOutputResolutionStatuses);

export const ChannelEventActorSchema = z.object({
  type: ChannelEventActorTypeSchema,
  id: z.string().min(1).optional(),
  displayName: z.string().min(1).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const NormalizedChannelPayloadSchema = z.object({
  text: z.string().optional(),
  subject: z.string().optional(),
  body: z.string().optional(),
  summary: z.string().optional(),
  attachments: z.array(z.unknown()).optional(),
  providerObject: z.unknown().optional(),
  status: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
}).passthrough();

export const ChannelEventSourceEvidenceSchema = z.object({
  sourceType: ChannelEventSourceTypeSchema.optional(),
  sourceId: z.string().min(1).optional(),
  provider: z.string().min(1).optional(),
  providerPackageId: z.string().min(1).optional(),
  eventId: z.string().min(1).optional(),
  streamId: z.string().min(1).optional(),
  deliveryId: z.string().min(1).optional(),
  receivedAt: z.string().optional(),
  verified: z.boolean().optional(),
  externalObjectIds: z.record(z.string(), z.string()).optional(),
  raw: z.unknown().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ChannelEventIdentitySchema = z.object({
  key: z.string().min(1).optional(),
  dedupeKey: z.string().min(1).optional(),
  streamId: z.string().min(1).optional(),
  sequence: z.union([z.string().min(1), z.number()]).optional(),
  idempotencyKey: z.string().min(1).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ChannelEventEnvelopeInputSchema = z.object({
  id: z.string().min(1).optional(),
  nature: ChannelEventNatureSchema.optional(),
  direction: ChannelEventDirectionSchema.default("inbound"),
  intent: ChannelEventIntentSchema.optional(),
  actor: ChannelEventActorSchema.optional(),
  channel: z.union([ConversationChannelKindSchema, ChannelContextSchema]),
  occurredAt: z.string().optional(),
  payload: z.unknown().optional(),
  identity: ChannelEventIdentitySchema.optional(),
  source: ChannelEventSourceEvidenceSchema.optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
}).passthrough().superRefine((value, ctx) => {
  if (Object.prototype.hasOwnProperty.call(value, "kind")) {
    ctx.addIssue({
      code: "custom",
      message: "Channel Event uses nature; kind is not supported.",
      path: ["kind"],
    });
  }
  if (!value.nature) {
    ctx.addIssue({
      code: "custom",
      message: "Channel Event requires nature.",
      path: ["nature"],
    });
  }
});

export const ChannelOutputIntentProducerSchema = z.object({
  type: ChannelOutputProducerTypeSchema,
  id: z.string().min(1).optional(),
  name: z.string().min(1).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ChannelOutputPolicyReasonSchema = z.object({
  reason: z.string().min(1).optional(),
  reasonCode: z.string().min(1).optional(),
  reasonLabel: z.string().min(1).optional(),
  policyId: z.string().min(1).optional(),
  policyIds: z.array(z.string().min(1)).optional(),
  blockers: z.array(z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    kind: z.string().min(1).optional(),
  })).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ChannelOutputIntentInputSchema = ChannelOutputPolicyReasonSchema.extend({
  id: z.string().min(1).optional(),
  kind: ChannelOutputIntentKindSchema.default("message.reply"),
  producer: ChannelOutputIntentProducerSchema.optional(),
  channel: z.union([ConversationChannelKindSchema, ChannelContextSchema]).optional(),
  deliveryMode: ChannelOutputDeliveryModeSchema.optional(),
  capability: ChannelCapabilitySchema.optional(),
  providerPackageId: z.string().min(1).optional(),
  operationAlias: z.string().min(1).optional(),
  providerOperation: z.string().min(1).optional(),
  actionAudience: ActionAudienceSchema.optional(),
  outbound: z.boolean().optional(),
  sideEffect: z.boolean().optional(),
  externallyVisible: z.boolean().optional(),
  exposesSensitiveData: z.boolean().optional(),
  changesWorkflow: z.boolean().optional(),
  requiredPolicyIds: z.array(z.string().min(1)).optional(),
  text: z.string().optional(),
  subject: z.string().optional(),
  body: z.string().optional(),
  attachments: z.array(z.unknown()).optional(),
  payload: z.unknown().optional(),
  source: ChannelEventSourceEvidenceSchema.optional(),
}).passthrough();

export const ChannelOutputResolutionDecisionInputSchema = ChannelOutputPolicyReasonSchema.extend({
  outcome: ChannelOutputResolutionOutcomeSchema,
  status: ChannelOutputResolutionStatusSchema.optional(),
  deliveryMode: ChannelOutputDeliveryModeSchema.optional(),
  capability: ChannelCapabilitySchema.optional(),
  providerPackageId: z.string().min(1).optional(),
  operationAlias: z.string().min(1).optional(),
  providerOperation: z.string().min(1).optional(),
  actionAudience: ActionAudienceSchema.optional(),
  supportedApprovalResolutions: z.array(z.string().min(1)).optional(),
  editableFields: z.array(z.string().min(1)).optional(),
  expiresAt: z.string().optional(),
  payload: z.unknown().optional(),
}).passthrough();
