import type {
  ChannelEventEnvelopeInput,
  ChannelEventIdentity,
  ChannelEventSourceEvidence,
  ChannelOutputResolverInput,
  ChannelOutputResolverResult,
} from "./channel-events.js";
import { defineChannelEvent } from "./channel-events.js";
import type { ConversationChannelInput } from "./providers.js";
import type {
  ChannelEventBindingInput,
  ChannelEventHandlingInput,
  CreateRuntimeConversationInput,
  HandleChannelEventInput,
  HandleChannelEventResult,
} from "../runtime/types.js";

export type ChannelAdapterVerificationResult =
  | { verified: true; evidence?: Record<string, unknown> }
  | { verified: false; reason?: string; reasonCode?: string; metadata?: Record<string, unknown> };

export interface ChannelEventSourceNormalizeInput<TRaw = unknown> {
  raw: TRaw;
  channel?: ConversationChannelInput;
  source?: ChannelEventSourceEvidence<TRaw>;
  app?: unknown;
}

export interface ChannelEventSourceBindInput {
  event: ChannelEventEnvelopeInput;
  app?: unknown;
}

export interface ChannelEventSourceBinding {
  conversationId?: string;
  agentId?: string;
  conversationContext?: unknown;
  outcome?: "start-new" | "resume-existing" | "link-and-start-new" | "ignore" | "defer" | "handoff-review" | "blocked";
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
  metadata?: Record<string, unknown>;
}

export interface ChannelEventSource<TRaw = unknown> {
  id: string;
  channel?: ConversationChannelInput;
  sourceType?: ChannelEventSourceEvidence<TRaw>["sourceType"];
  verify?(raw: TRaw): ChannelAdapterVerificationResult | Promise<ChannelAdapterVerificationResult>;
  normalize(input: ChannelEventSourceNormalizeInput<TRaw>): ChannelEventEnvelopeInput | Promise<ChannelEventEnvelopeInput>;
  identity?(event: ChannelEventEnvelopeInput, raw: TRaw): ChannelEventIdentity | string | undefined | Promise<ChannelEventIdentity | string | undefined>;
  bind?(input: ChannelEventSourceBindInput): ChannelEventSourceBinding | Promise<ChannelEventSourceBinding>;
}

export interface ChannelProviderAdapter<TRaw = unknown> extends ChannelEventSource<TRaw> {
  provider: string;
  providerPackageId?: string;
  resolveOutput?(input: ChannelOutputResolverInput): Promise<ChannelOutputResolverResult>;
}

export interface ChannelEventSourceHandleInput<TRaw = unknown, TTurn = unknown> {
  raw: TRaw;
  channel?: ConversationChannelInput;
  conversationId?: string;
  agentId?: string;
  conversationContext?: unknown;
  createConversation?: CreateRuntimeConversationInput;
  binding?: ChannelEventBindingInput;
  handling?: ChannelEventHandlingInput<TTurn>;
  app?: unknown;
  signal?: AbortSignal;
  onAssistantTextDelta?(textDelta: string): Promise<void> | void;
}

export interface ChannelEventRuntimeReceiver {
  handleChannelEvent<TPayload = unknown, TTurn = unknown>(
    input: HandleChannelEventInput<TPayload, TTurn>,
  ): Promise<HandleChannelEventResult<TPayload>>;
}

export function defineChannelEventSource<TRaw = unknown>(
  source: ChannelEventSource<TRaw>,
): ChannelEventSource<TRaw> {
  return source;
}

export function defineChannelProviderAdapter<TRaw = unknown>(
  adapter: ChannelProviderAdapter<TRaw>,
): ChannelProviderAdapter<TRaw> {
  return adapter;
}

export async function createChannelEventInputFromSource<TRaw = unknown, TTurn = unknown>(
  source: ChannelEventSource<TRaw>,
  input: ChannelEventSourceHandleInput<TRaw, TTurn>,
): Promise<HandleChannelEventInput<unknown, TTurn>> {
  const verification = await source.verify?.(input.raw);
  if (verification && !verification.verified) {
    throw new Error(verification.reason ?? `Channel Event Source '${source.id}' verification failed.`);
  }

  const channel = input.channel ?? source.channel;
  const normalized = await source.normalize({
    raw: input.raw,
    ...(channel !== undefined ? { channel } : {}),
    ...(input.app !== undefined ? { app: input.app } : {}),
  });
  const identity = await source.identity?.(normalized, input.raw);
  const event = defineChannelEvent({
    ...normalized,
    ...(!normalized.identity && identity ? { identity: normalizeChannelEventIdentity(identity) } : {}),
  });
  const sourceBinding = await source.bind?.({ event, app: input.app });
  const binding = mergeChannelSourceBinding(sourceBinding, input.binding);
  const conversationId = input.conversationId ?? binding?.conversationId;
  const agentId = input.agentId ?? binding?.agentId;
  const conversationContext = input.conversationContext ?? binding?.conversationContext;

  return {
    event,
    ...(conversationId ? { conversationId } : {}),
    ...(agentId ? { agentId } : {}),
    ...(conversationContext !== undefined ? { conversationContext } : {}),
    ...(input.createConversation ? { createConversation: input.createConversation } : {}),
    ...(binding ? { binding } : {}),
    ...(input.handling ? { handling: input.handling } : {}),
    ...(input.app !== undefined ? { app: input.app } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
    ...(input.onAssistantTextDelta ? { onAssistantTextDelta: input.onAssistantTextDelta } : {}),
  };
}

export async function handleChannelEventFromSource<TRaw = unknown, TTurn = unknown>(
  runtime: ChannelEventRuntimeReceiver,
  source: ChannelEventSource<TRaw>,
  input: ChannelEventSourceHandleInput<TRaw, TTurn>,
): Promise<HandleChannelEventResult> {
  return runtime.handleChannelEvent(await createChannelEventInputFromSource(source, input));
}

function normalizeChannelEventIdentity(identity: ChannelEventIdentity | string): ChannelEventIdentity {
  return typeof identity === "string" ? { key: identity, dedupeKey: identity } : identity;
}

function mergeChannelSourceBinding(
  sourceBinding: ChannelEventSourceBinding | undefined,
  override: ChannelEventBindingInput | undefined,
): ChannelEventBindingInput | undefined {
  if (!sourceBinding && !override) return undefined;
  return {
    ...(sourceBinding?.outcome ? { outcome: sourceBinding.outcome } : {}),
    ...(sourceBinding?.conversationId ? { conversationId: sourceBinding.conversationId } : {}),
    ...(sourceBinding?.agentId ? { agentId: sourceBinding.agentId } : {}),
    ...(sourceBinding?.conversationContext !== undefined ? { conversationContext: sourceBinding.conversationContext } : {}),
    ...(sourceBinding?.reason ? { reason: sourceBinding.reason } : {}),
    ...(sourceBinding?.reasonCode ? { reasonCode: sourceBinding.reasonCode } : {}),
    ...(sourceBinding?.reasonLabel ? { reasonLabel: sourceBinding.reasonLabel } : {}),
    ...(sourceBinding?.metadata ? { metadata: sourceBinding.metadata } : {}),
    ...(override ?? {}),
  };
}
