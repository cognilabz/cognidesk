import type { ChannelContext, ConversationChannelInput } from "../providers.js";

import type {
  ChannelEventActorType,
  ChannelEventBindingOutcome,
  ChannelEventBindingStatus,
  ChannelEventDirection,
  ChannelEventHandlingDispositionKind,
  ChannelEventIntakeStatus,
  ChannelEventIntent,
  ChannelEventNature,
  ChannelEventSourceType,
} from "./constants.js";

export interface ChannelEventActor {
  type: ChannelEventActorType;
  id?: string;
  displayName?: string;
  metadata?: Record<string, unknown>;
}

export interface NormalizedChannelPayload {
  text?: string;
  subject?: string;
  body?: string;
  summary?: string;
  attachments?: unknown[];
  providerObject?: unknown;
  status?: string;
  metadata?: Record<string, unknown>;
}

export type NormalizedChannelPayloadInput = NormalizedChannelPayload & Record<string, unknown>;

export interface ChannelEventSourceEvidence<TRawPayload = unknown> {
  sourceType?: ChannelEventSourceType;
  sourceId?: string;
  provider?: string;
  providerPackageId?: string;
  eventId?: string;
  streamId?: string;
  deliveryId?: string;
  receivedAt?: string;
  verified?: boolean;
  externalObjectIds?: Record<string, string>;
  raw?: TRawPayload;
  metadata?: Record<string, unknown>;
}

export interface ChannelEventIdentity {
  key?: string;
  dedupeKey?: string;
  streamId?: string;
  sequence?: string | number;
  idempotencyKey?: string;
  metadata?: Record<string, unknown>;
}

export interface ChannelEventEnvelope<TPayload = NormalizedChannelPayload, TRawPayload = unknown> {
  id?: string;
  nature: ChannelEventNature;
  direction: ChannelEventDirection;
  intent?: ChannelEventIntent;
  actor?: ChannelEventActor;
  channel: ChannelContext;
  occurredAt?: string;
  payload?: TPayload;
  identity?: ChannelEventIdentity;
  source?: ChannelEventSourceEvidence<TRawPayload>;
  metadata?: Record<string, unknown>;
}

export type ChannelEvent<TPayload = NormalizedChannelPayload, TRawPayload = unknown> =
  ChannelEventEnvelope<TPayload, TRawPayload>;
export type ChannelSourceEvidence<TRawPayload = unknown> = ChannelEventSourceEvidence<TRawPayload>;

export interface ChannelEventEnvelopeInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown> {
  id?: string;
  nature: ChannelEventNature;
  direction?: ChannelEventDirection;
  intent?: ChannelEventIntent;
  actor?: ChannelEventActor;
  channel: ConversationChannelInput;
  occurredAt?: string;
  payload?: TPayload;
  identity?: ChannelEventIdentity;
  source?: ChannelEventSourceEvidence<TRawPayload>;
  metadata?: Record<string, unknown>;
}

export interface ChannelEventBindingResult {
  outcome: ChannelEventBindingOutcome;
  status?: ChannelEventBindingStatus;
  channel?: ChannelContext;
  conversationId?: string;
  reason?: string;
}

export interface ChannelEventIntakeResult {
  outcome: ChannelEventIntakeStatus;
  bindingOutcome: ChannelEventBindingOutcome;
  conversationId?: string;
  handling: "started" | "queued" | "not-required";
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
  blockers?: Array<{ code: string; message: string; kind?: string }>;
  metadata?: Record<string, unknown>;
}
