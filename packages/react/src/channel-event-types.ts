import type {
  ChannelEventActor,
  ChannelEventActorType,
  ChannelEventDirection,
  ChannelEventEnvelopeInput,
  ChannelEventIdentity,
  ChannelEventIntent,
  ChannelEventKind,
  ChannelEventNature,
  ChannelEventSourceEvidence,
  ConversationChannelInput,
  HandleChannelEventInput,
  NormalizedChannelPayloadInput,
} from "@cognidesk/core";

export type ChannelEventActorInput = ChannelEventActor | ChannelEventActorType;

export interface ChannelEventShortcutEnvelope<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown>
  extends Omit<Partial<ChannelEventEnvelopeInput<TPayload, TRawPayload>>, "actor"> {
  actor?: ChannelEventActorInput;
  conversationId?: string;
  agentId?: string;
  text?: string;
  message?: string;
  subject?: string;
  body?: string;
  summary?: string;
  attachments?: unknown[];
  providerObject?: unknown;
  status?: string;
  turn?: unknown;
  raw?: TRawPayload;
  identity?: ChannelEventIdentity;
  identityKey?: string;
  dedupeKey?: string;
  idempotencyKey?: string;
  identityStreamId?: string;
  sequence?: string | number;
  identityMetadata?: Record<string, unknown>;
}

export interface ChannelEventSubmitInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends Omit<HandleChannelEventInput<TPayload, TTurn>, "event"> {
  event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
  channel?: ConversationChannelInput;
  id?: string;
  kind?: ChannelEventKind;
  nature?: ChannelEventNature;
  direction?: ChannelEventDirection;
  intent?: ChannelEventIntent;
  actor?: ChannelEventActorInput;
  occurredAt?: string;
  payload?: TPayload;
  source?: ChannelEventSourceEvidence<TRawPayload>;
  metadata?: Record<string, unknown>;
  text?: string;
  message?: string;
  subject?: string;
  body?: string;
  summary?: string;
  attachments?: unknown[];
  providerObject?: unknown;
  status?: string;
  turn?: TTurn;
  sourceType?: ChannelEventSourceEvidence<TRawPayload>["sourceType"];
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
  identity?: ChannelEventIdentity;
  identityKey?: string;
  dedupeKey?: string;
  idempotencyKey?: string;
  identityStreamId?: string;
  sequence?: string | number;
  identityMetadata?: Record<string, unknown>;
}

export interface ChannelMessageEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
  text: string;
  direction?: Extract<ChannelEventDirection, "inbound" | "outbound">;
}

export interface ProviderObjectChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
}

export interface VoiceTurnChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  text?: string;
  transcript?: string;
  channel?: ConversationChannelInput;
}

export interface OutboundContactChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
}

export interface ScheduledChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
}

export interface ChannelOutputResolutionEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
}

export interface ChannelHandoffReviewEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
}

export interface ChannelHandoffEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>
  extends ChannelEventSubmitInput<TPayload, TRawPayload, TTurn> {
  channel: ConversationChannelInput;
  fromChannel?: ConversationChannelInput;
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
}

export type ChannelEventRequestBody<TPayload = NormalizedChannelPayloadInput, TTurn = unknown> =
  Omit<HandleChannelEventInput<TPayload, TTurn>, "signal" | "onAssistantTextDelta">;
