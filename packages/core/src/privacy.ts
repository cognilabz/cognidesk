import type { RuntimeEventInput } from "./storage.js";
import type {
  ChannelContext,
  ModelMessage,
  RuntimeSnapshot,
  TextGenerationInput,
} from "./types.js";

type MaybePromise<T> = Promise<T> | T;

export const cognideskSessionContextKey = "__cognidesk";

export type RuntimePrivacyTraceContent = "full" | "redacted" | "none";
export type RuntimePrivacyCustomerRelationVisibility = "id" | "none";

export interface RuntimePrivacyMaskRule {
  name?: string;
  pattern: string | RegExp;
  flags?: string;
  replacement?: string;
}

export interface RuntimePrivacySettings {
  /**
   * Set to false to disable SDK-managed masking for this scope. Existing
   * custom privacy hooks still run.
   */
  enabled?: boolean;
  traceContent?: RuntimePrivacyTraceContent;
  /**
   * Controls whether Studio/adapter surfaces may expose a generic relation to
   * the customer identifier already present in conversation context.
   */
  customerRelationVisibility?: RuntimePrivacyCustomerRelationVisibility;
  masks?: RuntimePrivacyMaskRule[];
}

export interface RuntimeCustomerRelation {
  id: string;
}

export interface CognideskSessionContextMetadata {
  privacy?: RuntimePrivacySettings;
}

export interface PrivacyHookContext {
  conversationId: string;
  agentId: string;
  privacy?: RuntimePrivacySettings;
}

export interface PrivacyHooks {
  settings?: RuntimePrivacySettings;
  redactUserMessage?(input: PrivacyHookContext & { text: string }): MaybePromise<string>;
  redactModelMessages?(input: PrivacyHookContext & { messages: ModelMessage[] }): MaybePromise<ModelMessage[]>;
  redactAssistantMessage?(input: PrivacyHookContext & { text: string }): MaybePromise<string>;
  redactConversationContext?(input: PrivacyHookContext & { context: unknown }): MaybePromise<unknown>;
  redactInboundChannelEvent?(input: PrivacyHookContext & { event: RuntimeEventInput<"channel.received">; channel: ChannelContext }): MaybePromise<RuntimeEventInput<"channel.received">>;
  redactOutboundChannelMessage?(input: PrivacyHookContext & { event: RuntimeEventInput<"channel.sent">; channel: ChannelContext }): MaybePromise<RuntimeEventInput<"channel.sent">>;
  redactRuntimeEvent?(input: PrivacyHookContext & { event: RuntimeEventInput }): MaybePromise<RuntimeEventInput>;
  redactRuntimeSnapshot?(input: PrivacyHookContext & { snapshot: RuntimeSnapshot }): MaybePromise<RuntimeSnapshot>;
  redactModelInput?(input: PrivacyHookContext & { input: TextGenerationInput }): MaybePromise<TextGenerationInput>;
  redactTelemetryAttributes?(input: PrivacyHookContext & { name: string; attributes: Record<string, unknown> }): MaybePromise<Record<string, unknown> | null | undefined>;
}

export function withCognideskSessionContext<TContext>(
  context: TContext,
  metadata: CognideskSessionContextMetadata,
): TContext {
  if (!metadata.privacy) return context;
  const base = isRecord(context) ? { ...context } : { value: context };
  const current = cognideskSessionMetadata(base);
  const next: CognideskSessionContextMetadata = { ...current };
  if (metadata.privacy) {
    const privacy = mergeRuntimePrivacySettings(current.privacy, metadata.privacy);
    if (privacy) next.privacy = privacy;
  }
  return {
    ...base,
    [cognideskSessionContextKey]: next,
  } as TContext;
}

export function cognideskSessionMetadata(context: unknown): CognideskSessionContextMetadata {
  const metadata = asRecord(asRecord(context)?.[cognideskSessionContextKey]);
  if (!metadata) return {};
  return {
    ...(isRuntimePrivacySettings(metadata.privacy) ? { privacy: metadata.privacy } : {}),
  };
}

export function runtimePrivacySettingsForContext(
  defaults: RuntimePrivacySettings | undefined,
  context: unknown,
): RuntimePrivacySettings | undefined {
  return mergeRuntimePrivacySettings(defaults, cognideskSessionMetadata(context).privacy);
}

export function runtimeCustomerRelationForContext(context: unknown): RuntimeCustomerRelation | undefined {
  const metadata = cognideskSessionMetadata(context);
  if (!runtimePrivacyAllowsCustomerRelation(metadata.privacy)) return undefined;
  const id = customerIdFromContext(context);
  return id ? { id } : undefined;
}

export function mergeRuntimePrivacySettings(
  defaults: RuntimePrivacySettings | undefined,
  overrides: RuntimePrivacySettings | undefined,
): RuntimePrivacySettings | undefined {
  if (!defaults && !overrides) return undefined;
  const merged: RuntimePrivacySettings = {};
  const source = { ...defaults, ...overrides };
  if (source.enabled !== undefined) merged.enabled = source.enabled;
  if (source.traceContent !== undefined) merged.traceContent = source.traceContent;
  if (source.customerRelationVisibility !== undefined) {
    merged.customerRelationVisibility = source.customerRelationVisibility;
  }
  const masks = [
    ...(defaults?.masks ?? []),
    ...(overrides?.masks ?? []),
  ];
  if (masks.length > 0) merged.masks = masks;
  return merged;
}

export function effectiveRuntimePrivacyTraceContent(settings: RuntimePrivacySettings | undefined): RuntimePrivacyTraceContent {
  if (!settings || settings.enabled === false) return "full";
  if (settings?.traceContent) return settings.traceContent;
  return settings.masks?.length ? "redacted" : "full";
}

export function runtimePrivacyAllowsCustomerRelation(settings: RuntimePrivacySettings | undefined) {
  if (settings?.enabled === false) return true;
  if (settings?.customerRelationVisibility) return settings.customerRelationVisibility !== "none";
  return effectiveRuntimePrivacyTraceContent(settings) !== "none";
}

export function applyRuntimePrivacyToText(value: string, settings: RuntimePrivacySettings | undefined) {
  if (!shouldApplyRuntimePrivacy(settings)) return value;
  return maskRulesForSettings(settings).reduce((text, rule) => {
    const pattern = compileMaskRule(rule);
    return pattern ? text.replace(pattern, rule.replacement ?? "[redacted]") : text;
  }, value);
}

export function applyRuntimePrivacyToValue<TValue>(value: TValue, settings: RuntimePrivacySettings | undefined): TValue {
  if (!settings || !shouldApplyRuntimePrivacy(settings)) return value;
  return applyRuntimePrivacyToValueInternal(value, settings, new WeakSet<object>(), 0) as TValue;
}

export function applyRuntimePrivacyToEvent<TEvent extends RuntimeEventInput>(
  event: TEvent,
  settings: RuntimePrivacySettings | undefined,
): TEvent {
  const traceContent = effectiveRuntimePrivacyTraceContent(settings);
  if (!shouldApplyRuntimePrivacy(settings) && traceContent === "full") return event;
  const maskedData = applyRuntimePrivacyToValue(event.data, settings);
  const redacted = {
    ...event,
    data: traceContent === "none"
      ? applyRuntimePrivacyTraceContentToEventData(event.type, maskedData)
      : maskedData,
  } as RuntimeEventInput;
  return redacted as TEvent;
}

export function applyRuntimePrivacyToTelemetryAttributes(
  attributes: Record<string, unknown>,
  settings: RuntimePrivacySettings | undefined,
): Record<string, unknown> | null {
  const masked = applyRuntimePrivacyToValue(attributes, settings);
  if (effectiveRuntimePrivacyTraceContent(settings) !== "none") return masked;

  const next: Record<string, unknown> = {};
  const runtimeEventType = typeof masked["cognidesk.runtime.event.type"] === "string"
    ? masked["cognidesk.runtime.event.type"]
    : undefined;
  for (const [key, value] of Object.entries(masked)) {
    if (key === "cognidesk.runtime.event.data" && runtimeEventType) {
      next[key] = applyRuntimePrivacyTraceContentToEventData(runtimeEventType, value);
      continue;
    }
    if (isTraceContentTelemetryAttribute(key)) continue;
    next[key] = value;
  }
  return Object.keys(next).length ? next : null;
}

export function applyRuntimePrivacyToSnapshot(
  snapshot: RuntimeSnapshot,
  settings: RuntimePrivacySettings | undefined,
): RuntimeSnapshot {
  return applyRuntimePrivacyToValue(snapshot, settings);
}

function applyRuntimePrivacyToValueInternal(
  value: unknown,
  settings: RuntimePrivacySettings,
  seen: WeakSet<object>,
  depth: number,
): unknown {
  if (typeof value === "string") return applyRuntimePrivacyToText(value, settings);
  if (value === null || typeof value !== "object") return value;
  if (depth > 24) return value;
  if (seen.has(value)) return value;
  seen.add(value);
  if (Array.isArray(value)) {
    return value.map((item) => applyRuntimePrivacyToValueInternal(item, settings, seen, depth + 1));
  }
  const record = value as Record<string, unknown>;
  const next: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(record)) {
    if (key === cognideskSessionContextKey) {
      const metadata = redactSessionMetadata(item);
      if (metadata !== undefined) next[key] = metadata;
      continue;
    }
    next[key] = applyRuntimePrivacyToValueInternal(item, settings, seen, depth + 1);
  }
  return next;
}

function redactSessionMetadata(value: unknown) {
  const metadata = asRecord(value);
  if (!metadata) return value;
  const rest = { ...metadata };
  delete rest.customerRelation;
  return Object.keys(rest).length ? rest : undefined;
}

function applyRuntimePrivacyTraceContentToEventData(eventType: string, data: unknown): unknown {
  const record = asRecord(data);
  if (!record) return data;

  switch (eventType) {
    case "message.started":
    case "message.generated":
    case "journey.candidates.retrieved":
    case "journey.matched":
    case "journey.activated":
    case "journey.completed":
    case "journey.guard.denied":
    case "journey.state.entered":
    case "journey.extraction.proposed":
    case "journey.extraction.accepted":
    case "action.started":
    case "action.completed":
    case "knowledge.retrieved":
    case "context.resolved":
    case "policy.evaluated":
    case "conversation.compaction.started":
    case "conversation.compaction.completed":
    case "conversation.closed":
    case "voice.segment.started":
    case "voice.segment.ended":
    case "voice.connection.failed":
    case "voice.interrupted":
    case "voice.recording.started":
    case "voice.recording.completed":
    case "voice.transcript.committed":
      return record;
    case "message.completed":
      return omitRecordKeys(record, ["text", "segments"]);
    case "message.delta":
      return {};
    case "message.aborted":
      return omitRecordKeys(record, ["partialText"]);
    case "channel.received":
    case "channel.sent":
      return omitRecordKeys(record, ["text", "payload"]);
    case "channel.event.received":
    case "channel.delivery.updated":
      return omitRecordKeys(record, ["payload"]);
    case "journey.event.emitted":
      return omitRecordKeys(record, ["payload"]);
    case "tool.started":
      return record;
    case "tool.completed":
      return omitRecordKeys(record, ["result"]);
    case "approval.requested":
      return omitRecordKeys(record, ["input", "metadata"]);
    case "approval.resolved":
      return omitRecordKeys(record, ["editedInput", "result", "metadata"]);
    case "ui.prompted":
      return omitRecordKeys(record, ["input"]);
    case "ui.submitted":
      return omitRecordKeys(record, ["output"]);
    case "handoff.requested":
    case "handoff.completed":
    case "handoff.resumed":
    case "schedule.due":
      return omitRecordKeys(record, ["payload", "summary"]);
    case "error":
      return omitRecordKeys(record, ["details"]);
    case "eval.completed":
      return omitRecordKeys(record, ["details"]);
    default:
      return eventType.startsWith("custom.")
        ? { contentHidden: true }
        : omitTraceContentKeys(record);
  }
}

function isTraceContentTelemetryAttribute(key: string) {
  return key === "cognidesk.user.message.text"
    || key === "cognidesk.model.messages"
    || key === "cognidesk.model.prompt_payload"
    || key === "cognidesk.model.text"
    || key === "cognidesk.model.structured"
    || key === "cognidesk.model.tool_calls"
    || key === "cognidesk.tool.input"
    || key === "cognidesk.tool.output";
}

function omitTraceContentKeys(record: Record<string, unknown>) {
  return omitRecordKeys(record, [
    "text",
    "textDelta",
    "partialText",
    "segments",
    "messages",
    "promptPayload",
    "input",
    "output",
    "payload",
    "result",
    "details",
  ]);
}

function omitRecordKeys(record: Record<string, unknown>, keys: string[]) {
  const omitted = new Set(keys);
  const next: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(record)) {
    if (!omitted.has(key)) next[key] = value;
  }
  return next;
}

function shouldApplyRuntimePrivacy(settings: RuntimePrivacySettings | undefined) {
  if (!settings || settings.enabled === false) return false;
  return Boolean(settings.masks?.length);
}

function maskRulesForSettings(settings: RuntimePrivacySettings | undefined) {
  return settings?.masks ?? [];
}

function compileMaskRule(rule: RuntimePrivacyMaskRule): RegExp | null {
  if (rule.pattern instanceof RegExp) return rule.pattern;
  try {
    return new RegExp(rule.pattern, rule.flags);
  } catch {
    return null;
  }
}

function isRuntimePrivacySettings(value: unknown): value is RuntimePrivacySettings {
  return isRecord(value);
}

function customerIdFromContext(context: unknown): string | undefined {
  const record = asRecord(context);
  if (!record) return undefined;
  const direct = normalizedCustomerId(record.customerId);
  if (direct) return direct;
  return normalizedCustomerId(asRecord(record.customer)?.id);
}

function normalizedCustomerId(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return isRecord(value) ? value : null;
}
