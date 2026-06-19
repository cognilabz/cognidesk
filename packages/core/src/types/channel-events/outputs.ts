import type { ActionAudience, ChannelCapability, ChannelContext, ConversationChannelInput } from "../providers.js";

import type {
  ChannelOutputDeliveryMode,
  ChannelOutputIntentKind,
  ChannelOutputProducerType,
  ChannelOutputResolutionOutcome,
  ChannelOutputResolutionStatus,
} from "./constants.js";
import type { ChannelEventSourceEvidence, NormalizedChannelPayload, NormalizedChannelPayloadInput } from "./events.js";

export interface ChannelOutputIntentProducer {
  type: ChannelOutputProducerType;
  id?: string;
  name?: string;
  metadata?: Record<string, unknown>;
}

export interface ChannelOutputPolicyReason {
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
  policyId?: string;
  policyIds?: string[];
  blockers?: Array<{ code: string; message: string; kind?: string }>;
  metadata?: Record<string, unknown>;
}

export interface ChannelOutputIntent<TPayload = NormalizedChannelPayload, TRawPayload = unknown>
  extends ChannelOutputPolicyReason {
  id?: string;
  kind: ChannelOutputIntentKind;
  producer?: ChannelOutputIntentProducer;
  channel?: ChannelContext;
  deliveryMode?: ChannelOutputDeliveryMode;
  capability?: ChannelCapability;
  providerPackageId?: string;
  operationAlias?: string;
  providerOperation?: string;
  actionAudience?: ActionAudience;
  outbound?: boolean;
  sideEffect?: boolean;
  externallyVisible?: boolean;
  exposesSensitiveData?: boolean;
  changesWorkflow?: boolean;
  requiredPolicyIds?: string[];
  text?: string;
  subject?: string;
  body?: string;
  attachments?: unknown[];
  payload?: TPayload;
  source?: ChannelEventSourceEvidence<TRawPayload>;
}

export interface ChannelOutputIntentInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown>
  extends Omit<ChannelOutputIntent<TPayload, TRawPayload>, "kind" | "channel"> {
  kind?: ChannelOutputIntentKind;
  channel?: ConversationChannelInput;
}

export interface ChannelOutputResolutionDecision<TPayload = unknown> extends ChannelOutputPolicyReason {
  outcome: ChannelOutputResolutionOutcome;
  status?: ChannelOutputResolutionStatus;
  deliveryMode?: ChannelOutputDeliveryMode;
  capability?: ChannelCapability;
  providerPackageId?: string;
  operationAlias?: string;
  providerOperation?: string;
  actionAudience?: ActionAudience;
  supportedApprovalResolutions?: string[];
  editableFields?: string[];
  expiresAt?: string;
  payload?: TPayload;
}

export interface ChannelOutputResolution<TPayload = unknown> extends ChannelOutputResolutionDecision<TPayload> {
  id: string;
  intentId?: string;
  status: ChannelOutputResolutionStatus;
  channel?: ChannelContext;
  resolvedAt: string;
  externalMessageId?: string;
  deliveryStatus?: string;
  providerResult?: unknown;
}

export interface ChannelOutputResolutionPayload<TPayload = unknown> {
  outputIntent: ChannelOutputIntent<TPayload>;
  resolution: ChannelOutputResolution;
}

export interface ChannelOutputResolverInput<TPayload = unknown> {
  conversationId: string;
  channel: ChannelContext;
  outputIntent: ChannelOutputIntent<TPayload>;
  app: unknown;
  signal?: AbortSignal;
}

export interface ChannelOutputResolverResult<TPayload = unknown> extends ChannelOutputResolutionDecision<TPayload> {
  externalMessageId?: string;
  deliveryStatus?: string;
  providerResult?: unknown;
}
