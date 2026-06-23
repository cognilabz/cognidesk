import type {
  ChannelEventActor,
  ChannelEventActorType,
  ChannelEventDirection,
  ChannelEventEnvelopeInput,
  ChannelEventIdentity,
  ChannelEventIntent,
  ChannelEventSourceEvidence,
  ConversationChannelInput,
  HandleChannelEventInput,
  NormalizedChannelPayloadInput,
} from "@cognidesk/core";
import type {
  ChannelEventRequestBody,
  ChannelEventSubmitInput,
  ChannelHandoffEventInput,
  ChannelHandoffReviewEventInput,
  ChannelMessageEventInput,
  ChannelOutputResolutionEventInput,
  OutboundContactChannelEventInput,
  ProviderObjectChannelEventInput,
  ScheduledChannelEventInput,
  VoiceTurnChannelEventInput,
} from "./channel-event-types.js";

export type {
  ChannelEventActorInput,
  ChannelEventRequestBody,
  ChannelEventShortcutEnvelope,
  ChannelEventSubmitInput,
  ChannelHandoffEventInput,
  ChannelHandoffReviewEventInput,
  ChannelMessageEventInput,
  ChannelOutputResolutionEventInput,
  OutboundContactChannelEventInput,
  ProviderObjectChannelEventInput,
  ScheduledChannelEventInput,
  VoiceTurnChannelEventInput,
} from "./channel-event-types.js";

export function createChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  if (!isRecord(input)) throw new Error("Channel Event input must be an object.");
  const eventRecord = isRecord(input.event) ? input.event : undefined;
  const sourceRecord = eventRecord ?? input;
  if (
    Object.prototype.hasOwnProperty.call(input, "kind")
    || Object.prototype.hasOwnProperty.call(sourceRecord, "kind")
  ) {
    throw new Error("Channel Event uses nature; kind is not supported.");
  }
  const nature = stringValue(input.nature ?? sourceRecord.nature)
    ?? inferNature(sourceRecord, input);
  if (!nature) throw new Error("Channel Event nature is required.");
  const direction = stringValue(sourceRecord.direction ?? input.direction) as ChannelEventDirection | undefined
    ?? inferDirection(nature);
  const channel = (sourceRecord.channel ?? input.channel) as ConversationChannelInput | undefined;
  if (channel === undefined) throw new Error("Channel Event channel is required.");
  const text = firstText(sourceRecord, input);
  const turn = firstDefined(sourceRecord.turn, input.turn) as TTurn | undefined;
  const payload = buildPayload(sourceRecord, input, text, turn);
  const source = buildSource(sourceRecord, input, inferSourceType(nature));
  const identity = buildIdentity(sourceRecord, input);
  const actor = normalizeActor(firstDefined(sourceRecord.actor, input.actor)) ?? inferActor(nature, direction);
  const handling = buildHandling(input, text, turn);
  const event = compact({
    ...passthroughEventFields(eventRecord),
    id: stringValue(sourceRecord.id ?? input.id),
    channel,
    nature,
    direction,
    intent: stringValue(sourceRecord.intent ?? input.intent) ?? inferIntent(nature, direction),
    actor,
    occurredAt: stringValue(sourceRecord.occurredAt ?? input.occurredAt),
    payload,
    identity,
    source,
    metadata: recordValue(sourceRecord.metadata ?? input.metadata),
  }) as ChannelEventEnvelopeInput<TPayload>;

  return compact({
    event,
    conversationId: stringValue(input.conversationId ?? sourceRecord.conversationId),
    agentId: stringValue(input.agentId ?? sourceRecord.agentId),
    conversationContext: input.conversationContext,
    createConversation: input.createConversation,
    binding: input.binding,
    handling,
    app: input.app,
    signal: input.signal,
    onAssistantTextDelta: input.onAssistantTextDelta,
  }) as HandleChannelEventInput<TPayload, TTurn>;
}

export function createChannelEventRequestBody<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
): ChannelEventRequestBody<TPayload, TTurn> {
  const { signal: _signal, onAssistantTextDelta: _onAssistantTextDelta, ...body } =
    createChannelEventInput(input);
  return body;
}

export function createMessageChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ChannelMessageEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  const direction = input.direction ?? "inbound";
  return createChannelEventInput({
    ...input,
    nature: input.nature ?? "message",
    direction,
    intent: input.intent ?? (direction === "outbound" ? "agent-message" : "customer-message"),
    actor: input.actor ?? (direction === "outbound" ? "agent" : "customer"),
  });
}

export function createProviderObjectChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ProviderObjectChannelEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  return createChannelEventInput({
    ...input,
    nature: input.nature ?? "provider.object.updated",
    direction: input.direction ?? "internal",
    intent: input.intent ?? "provider-update",
    actor: input.actor ?? "provider",
    sourceType: input.sourceType ?? input.source?.sourceType ?? "provider-adapter",
  });
}

export function createVoiceTurnChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: VoiceTurnChannelEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  const text = input.text ?? input.transcript;
  return createChannelEventInput({
    ...input,
    channel: input.channel ?? "voice",
    ...(text !== undefined ? { text } : {}),
    nature: input.nature ?? "voice.turn.finalized",
    direction: input.direction ?? "inbound",
    intent: input.intent ?? "customer-voice-turn",
    actor: input.actor ?? "customer",
    sourceType: input.sourceType ?? input.source?.sourceType ?? "provider-adapter",
  });
}

export function createOutboundContactChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: OutboundContactChannelEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  return createChannelEventInput({
    ...input,
    nature: input.nature ?? "outbound.contact.requested",
    direction: input.direction ?? "outbound",
    intent: input.intent ?? "outbound-contact",
    actor: input.actor ?? "application",
  });
}

export function createScheduledChannelEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ScheduledChannelEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  return createChannelEventInput({
    ...input,
    nature: input.nature ?? "schedule.due",
    direction: input.direction ?? "internal",
    intent: input.intent ?? "scheduled-support-action",
    actor: input.actor ?? "scheduler",
    sourceType: input.sourceType ?? input.source?.sourceType ?? "schedule-adapter",
  });
}

export function createChannelOutputResolutionEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ChannelOutputResolutionEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  return createChannelEventInput({
    ...input,
    nature: input.nature ?? "output.resolution",
    direction: input.direction ?? "outbound",
    intent: input.intent ?? "output-resolution",
    actor: input.actor ?? "application",
    handling: {
      ...input.handling,
      disposition: input.handling?.disposition ?? "output-resolution",
    },
  });
}

export function createChannelHandoffEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ChannelHandoffEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  const payload = buildPayload(input as unknown as Record<string, unknown>, input, undefined, input.turn);
  return createChannelEventInput({
    ...input,
    payload: {
      ...(isRecord(payload) ? payload : {}),
      ...(input.fromChannel ? { fromChannel: input.fromChannel } : {}),
      toChannel: input.channel,
      ...(input.reason ? { reason: input.reason } : {}),
      ...(input.reasonCode ? { reasonCode: input.reasonCode } : {}),
      ...(input.reasonLabel ? { reasonLabel: input.reasonLabel } : {}),
    } as TPayload,
    nature: input.nature ?? "channel.handoff.requested",
    direction: input.direction ?? "internal",
    intent: input.intent ?? "channel-handoff",
    actor: input.actor ?? "application",
    handling: {
      ...input.handling,
      disposition: input.handling?.disposition ?? "handoff-review",
    },
  });
}

export function createChannelHandoffReviewEventInput<TPayload = NormalizedChannelPayloadInput, TRawPayload = unknown, TTurn = unknown>(
  input: ChannelHandoffReviewEventInput<TPayload, TRawPayload, TTurn>,
): HandleChannelEventInput<TPayload, TTurn> {
  return createChannelEventInput({
    ...input,
    nature: input.nature ?? "custom",
    direction: input.direction ?? "internal",
    intent: input.intent ?? "handoff-review",
    actor: input.actor ?? "operator",
    handling: {
      ...input.handling,
      disposition: input.handling?.disposition ?? "handoff-review",
    },
  });
}

function buildHandling<TPayload, TRawPayload, TTurn>(
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
  _text: string | undefined,
  turn: TTurn | undefined,
): HandleChannelEventInput<TPayload, TTurn>["handling"] {
  if (!input.handling && turn === undefined) return undefined;
  return compact({
    ...(input.handling ?? {}),
    text: input.handling?.text ?? undefined,
    turn: input.handling?.turn ?? turn,
  }) as HandleChannelEventInput<TPayload, TTurn>["handling"];
}

function buildPayload<TPayload, TRawPayload, TTurn>(
  sourceRecord: Record<string, unknown>,
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
  text: string | undefined,
  turn: TTurn | undefined,
) {
  const seed = firstDefined(sourceRecord.payload, input.payload);
  const fields = compact({
    text,
    subject: stringValue(sourceRecord.subject ?? input.subject),
    body: stringValue(sourceRecord.body ?? input.body),
    summary: stringValue(sourceRecord.summary ?? input.summary),
    attachments: firstDefined(sourceRecord.attachments, input.attachments),
    providerObject: firstDefined(sourceRecord.providerObject, input.providerObject),
    status: stringValue(sourceRecord.status ?? input.status),
    turn,
  });
  if (seed === undefined) return Object.keys(fields).length > 0 ? fields : undefined;
  if (typeof seed === "string") return Object.keys(fields).length > 0 ? { ...fields, text: fields.text ?? seed } : { text: seed };
  if (!isRecord(seed)) return Object.keys(fields).length > 0 ? { value: seed, ...fields } : seed;
  return { ...fields, ...seed };
}

function buildSource<TPayload, TRawPayload, TTurn>(
  sourceRecord: Record<string, unknown>,
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
  defaultSourceType: ChannelEventSourceEvidence<TRawPayload>["sourceType"] | undefined,
) {
  const seed = recordValue(sourceRecord.source ?? input.source) ?? {};
  const hasEvidence = hasSourceEvidence(sourceRecord, input, seed);
  const source = compact({
    ...seed,
    sourceType: stringValue(sourceRecord.sourceType ?? input.sourceType) ?? seed.sourceType ?? (hasEvidence ? defaultSourceType : undefined),
    sourceId: stringValue(sourceRecord.sourceId ?? input.sourceId) ?? seed.sourceId,
    provider: stringValue(sourceRecord.provider ?? input.provider) ?? seed.provider,
    providerPackageId: stringValue(sourceRecord.providerPackageId ?? input.providerPackageId) ?? seed.providerPackageId,
    eventId: stringValue(sourceRecord.eventId ?? input.eventId) ?? seed.eventId,
    streamId: stringValue(sourceRecord.streamId ?? input.streamId) ?? seed.streamId,
    deliveryId: stringValue(sourceRecord.deliveryId ?? input.deliveryId) ?? seed.deliveryId,
    receivedAt: stringValue(sourceRecord.receivedAt ?? input.receivedAt) ?? seed.receivedAt,
    verified: booleanValue(sourceRecord.verified ?? input.verified) ?? seed.verified,
    externalObjectIds: recordValue(sourceRecord.externalObjectIds ?? input.externalObjectIds) ?? seed.externalObjectIds,
    raw: firstDefined(sourceRecord.raw, input.raw, seed.raw),
  });
  return Object.keys(source).length > 0 ? source : undefined;
}

function buildIdentity<TPayload, TRawPayload, TTurn>(
  sourceRecord: Record<string, unknown>,
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
): ChannelEventIdentity | undefined {
  const seed = (recordValue(sourceRecord.identity ?? input.identity) ?? {}) as Partial<ChannelEventIdentity>;
  const identity = compact({
    ...seed,
    key: stringValue(sourceRecord.identityKey ?? input.identityKey) ?? seed.key,
    dedupeKey: stringValue(sourceRecord.dedupeKey ?? input.dedupeKey) ?? seed.dedupeKey,
    streamId: stringValue(sourceRecord.identityStreamId ?? input.identityStreamId) ?? seed.streamId,
    sequence: sequenceValue(sourceRecord.sequence ?? input.sequence) ?? seed.sequence,
    idempotencyKey: stringValue(sourceRecord.idempotencyKey ?? input.idempotencyKey) ?? seed.idempotencyKey,
    metadata: recordValue(sourceRecord.identityMetadata ?? input.identityMetadata) ?? seed.metadata,
  });
  return Object.keys(identity).length > 0 ? identity as ChannelEventIdentity : undefined;
}

function passthroughEventFields(eventRecord: Record<string, unknown> | undefined) {
  if (!eventRecord) return {};
  const output = { ...eventRecord };
  for (const key of [
    "conversationId",
    "agentId",
    "text",
    "message",
    "subject",
    "body",
    "summary",
    "attachments",
    "providerObject",
    "status",
    "turn",
    "raw",
    "sourceType",
    "sourceId",
    "provider",
    "providerPackageId",
    "eventId",
    "streamId",
    "deliveryId",
    "receivedAt",
    "verified",
    "externalObjectIds",
    "identity",
    "identityKey",
    "dedupeKey",
    "idempotencyKey",
    "identityStreamId",
    "sequence",
    "identityMetadata",
    "kind",
  ]) {
    delete output[key];
  }
  return output;
}

function firstText<TPayload, TRawPayload, TTurn>(
  sourceRecord: Record<string, unknown>,
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
) {
  const explicit = stringValue(sourceRecord.text ?? sourceRecord.message ?? input.text ?? input.message);
  if (explicit) return explicit;
  const payload = firstDefined(sourceRecord.payload, input.payload);
  if (typeof payload === "string") return payload.trim() || undefined;
  if (isRecord(payload)) return stringValue(payload.text ?? payload.message);
  return undefined;
}

function inferNature<TPayload, TRawPayload, TTurn>(
  sourceRecord: Record<string, unknown>,
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
) {
  if (firstText(sourceRecord, input)) return "message";
  if (
    sourceRecord.providerObject !== undefined
    || input.providerObject !== undefined
    || sourceRecord.status !== undefined
    || input.status !== undefined
  ) return "provider.object.updated";
  return undefined;
}

function inferDirection(nature: string): ChannelEventDirection {
  if (nature === "provider.object.updated" || nature === "schedule.due" || nature === "custom") return "internal";
  if (nature === "outbound.contact.requested" || nature === "output.resolution") return "outbound";
  return "inbound";
}

function inferIntent(nature: string, direction: ChannelEventDirection | undefined): ChannelEventIntent | undefined {
  if (nature === "message") return direction === "outbound" ? "agent-message" : "customer-message";
  if (nature === "voice.turn.finalized") return "customer-voice-turn";
  if (nature === "provider.object.updated") return "provider-update";
  if (nature === "operator.resume") return "operator-resume";
  if (nature === "outbound.contact.requested") return "outbound-contact";
  if (nature === "channel.handoff.requested") return "channel-handoff";
  if (nature === "schedule.due") return "scheduled-support-action";
  if (nature === "output.resolution") return "output-resolution";
  if (nature === "delivery.updated") return "delivery-update";
  return undefined;
}

function inferActor(nature: string, direction: ChannelEventDirection | undefined): ChannelEventActor | undefined {
  if (nature === "message") return { type: direction === "outbound" ? "agent" : "customer" };
  if (nature === "voice.turn.finalized") return { type: "customer" };
  if (nature === "provider.object.updated" || nature === "delivery.updated") return { type: "provider" };
  if (nature === "schedule.due") return { type: "scheduler" };
  if (nature === "channel.handoff.requested") return { type: "application" };
  if (nature === "outbound.contact.requested" || nature === "output.resolution") return { type: "application" };
  if (nature === "operator.resume") return { type: "operator" };
  return undefined;
}

function inferSourceType<TRawPayload>(
  nature: string,
): ChannelEventSourceEvidence<TRawPayload>["sourceType"] | undefined {
  if (nature === "schedule.due") return "schedule-adapter";
  if (
    nature === "message"
    || nature === "voice.session.started"
    || nature === "voice.turn.finalized"
    || nature === "provider.object.updated"
    || nature === "delivery.updated"
  ) return "provider-adapter";
  return undefined;
}

function hasSourceEvidence<TPayload, TRawPayload, TTurn>(
  sourceRecord: Record<string, unknown>,
  input: ChannelEventSubmitInput<TPayload, TRawPayload, TTurn>,
  seed: Record<string, unknown>,
) {
  return Object.keys(seed).length > 0
    || sourceRecord.provider !== undefined
    || input.provider !== undefined
    || sourceRecord.providerPackageId !== undefined
    || input.providerPackageId !== undefined
    || sourceRecord.eventId !== undefined
    || input.eventId !== undefined
    || sourceRecord.streamId !== undefined
    || input.streamId !== undefined
    || sourceRecord.deliveryId !== undefined
    || input.deliveryId !== undefined
    || sourceRecord.raw !== undefined
    || input.raw !== undefined;
}

function normalizeActor(value: unknown): ChannelEventActor | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "string") return { type: value as ChannelEventActorType };
  if (isRecord(value)) return value as unknown as ChannelEventActor;
  return undefined;
}

function compact<T extends Record<string, unknown>>(record: T): Partial<T> {
  const output: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(record)) {
    if (value !== undefined) output[key] = value;
  }
  return output as Partial<T>;
}

function firstDefined<T>(...values: T[]): T | undefined {
  for (const value of values) {
    if (value !== undefined) return value;
  }
  return undefined;
}

function stringValue(value: unknown) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function booleanValue(value: unknown) {
  return typeof value === "boolean" ? value : undefined;
}

function sequenceValue(value: unknown) {
  return typeof value === "string" || typeof value === "number" ? value : undefined;
}

function recordValue(value: unknown): Record<string, unknown> | undefined {
  return isRecord(value) ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
