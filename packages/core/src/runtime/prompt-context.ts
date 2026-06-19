import type { CompiledAgent } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import {
  defineChannelContext,
  type ChannelContext,
  type ChannelPolicyConfig,
  type ConversationChannel,
  type ModelToolDefinition,
  type ModelVisiblePromptPayload,
} from "../types.js";
import { resolveRuntimeChannelPolicy } from "./channel-policy.js";
import type { RuntimeOptions, StateMachineTurnResult } from "./types.js";

type UnknownRecord = Record<string, unknown>;

export interface TurnPolicyContext {
  agentChannelPolicy?: unknown;
  runtimeChannelPolicy?: ChannelPolicyConfig;
  handoffPolicy?: unknown;
}

export interface RuntimeContextResolutionInput<TTurn = unknown> {
  options: RuntimeOptions;
  conversation: ConversationRecord;
  turn: TTurn;
  channel?: ChannelContext;
  app: unknown;
  text: string;
}

export async function resolveRuntimeApplicationContext<TTurn>(
  input: RuntimeContextResolutionInput<TTurn>,
): Promise<unknown> {
  const contextOptions = input.options.context;
  if (!contextOptions?.resolve) return undefined;
  let resolved = await contextOptions.resolve({
    conversation: input.conversation,
    turn: input.turn,
    ...(input.channel ? { channel: input.channel } : {}),
    app: input.app,
    text: input.text,
  });
  if (contextOptions.schema && resolved !== undefined) {
    resolved = contextOptions.schema.parse(resolved);
  }
  return redactPromptContext(input.options, input.conversation, resolved);
}

export async function redactConversationContextForPrompt(
  options: RuntimeOptions,
  conversation: ConversationRecord,
): Promise<unknown> {
  return redactPromptContext(options, conversation, conversation.context);
}

export async function redactPromptContext(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  value: unknown,
): Promise<unknown> {
  let redacted = redactContextPaths(value, options.context?.redact ?? []);
  if (options.privacy?.redactConversationContext) {
    redacted = await options.privacy.redactConversationContext({
      conversationId: conversation.id,
      agentId: conversation.agentId,
      context: redacted,
    });
  }
  return redacted;
}

export function resolveTurnPolicyContext(input: {
  agent: CompiledAgent;
  channel?: ConversationChannel;
  runtimeChannels?: ChannelPolicyConfig[];
}): TurnPolicyContext {
  const channel = input.channel ? defineChannelContext(input.channel) : undefined;
  const agentChannelPolicy = channel ? resolveAgentChannelPolicy(input.agent, channel) : undefined;
  const runtimeChannelPolicy = channel ? resolveRuntimeChannelPolicy(input.runtimeChannels ?? [], channel) : undefined;
  const handoffPolicy = input.agent.handoff || runtimeChannelPolicy?.handoff
    ? {
        ...(input.agent.handoff ? { agent: input.agent.handoff } : {}),
        ...(runtimeChannelPolicy?.handoff ? { channel: runtimeChannelPolicy.handoff } : {}),
      }
    : undefined;
  return {
    ...(agentChannelPolicy !== undefined ? { agentChannelPolicy } : {}),
    ...(runtimeChannelPolicy ? { runtimeChannelPolicy } : {}),
    ...(handoffPolicy !== undefined ? { handoffPolicy } : {}),
  };
}

export function buildModelVisiblePromptPayload(input: {
  agent: CompiledAgent;
  messages: unknown[];
  modelTools: ModelToolDefinition[];
  selectedJourneyId: string | null;
  activeStateIds: string[];
  journeyContext: Record<string, unknown>;
  stateMachineTurn: StateMachineTurnResult | null;
  channel?: ChannelContext;
  runtimeChannels?: ChannelPolicyConfig[];
  conversationContext?: unknown;
  resolvedContext?: unknown;
}): ModelVisiblePromptPayload {
  const policyContext = resolveTurnPolicyContext({
    agent: input.agent,
    ...(input.channel ? { channel: input.channel } : {}),
    ...(input.runtimeChannels ? { runtimeChannels: input.runtimeChannels } : {}),
  });
  return {
    messages: input.messages,
    tools: input.modelTools.map((tool) => ({
      name: tool.name,
      ...(tool.description ? { description: tool.description } : {}),
    })),
    selectedJourneyId: input.selectedJourneyId,
    activeStateIds: input.activeStateIds,
    journeyContext: input.journeyContext,
    ...(input.channel ? {
      channel: input.channel,
      channelCapabilities: input.channel.capabilities,
      locale: input.channel.locale ?? null,
      timezone: input.channel.timezone ?? null,
    } : {}),
    persona: input.agent.persona ?? null,
    agentChannelPolicy: policyContext.agentChannelPolicy ?? null,
    channelPolicy: policyContext.runtimeChannelPolicy
      ? summarizeRuntimeChannelPolicy(policyContext.runtimeChannelPolicy)
      : null,
    handoffPolicy: policyContext.handoffPolicy ?? null,
    conversationContext: input.conversationContext ?? null,
    resolvedContext: input.resolvedContext ?? null,
  };
}

export function summarizeRuntimeChannelPolicy(policy: ChannelPolicyConfig) {
  return {
    id: policy.id,
    channel: policy.channel,
    enabled: policy.enabled,
    ...(policy.audience ? { audience: policy.audience } : {}),
    channelSetIds: policy.channelSetIds,
    providerPackageIds: policy.providerPackageIds,
    enabledCapabilities: policy.enabledCapabilities,
    flowActivations: policy.flowActivations,
    ...(policy.behavior ? { behavior: policy.behavior } : {}),
    ...(policy.outbound ? { outbound: policy.outbound } : {}),
    ...(policy.handoff ? { handoff: policy.handoff } : {}),
    policies: policy.policies,
    ...(policy.metadata ? { metadata: policy.metadata } : {}),
  };
}

export function promptSectionValue(value: unknown, empty: string): string {
  if (value === undefined || value === null) return empty;
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export function topLevelContextKeys(value: unknown): string[] {
  return isPlainRecord(value) ? Object.keys(value).sort() : [];
}

export function policyContextForEvent(policyContext: TurnPolicyContext) {
  return {
    ...(policyContext.runtimeChannelPolicy ? {
      channelPolicyId: policyContext.runtimeChannelPolicy.id,
      configuredPolicyIds: Object.keys(policyContext.runtimeChannelPolicy.policies).sort(),
      enabledCapabilities: policyContext.runtimeChannelPolicy.enabledCapabilities,
      outboundEnabled: policyContext.runtimeChannelPolicy.outbound?.enabled ?? false,
      handoffEnabled: policyContext.runtimeChannelPolicy.handoff?.enabled ?? false,
      responseConstraints: responseConstraints(policyContext.runtimeChannelPolicy),
    } : {}),
    agentChannelPolicyKeys: topLevelContextKeys(policyContext.agentChannelPolicy),
    hasAgentHandoffPolicy: Boolean(
      isPlainRecord(policyContext.handoffPolicy) && "agent" in policyContext.handoffPolicy,
    ),
  };
}

export function applyConfiguredResponseLimits(text: string, policy?: ChannelPolicyConfig) {
  const constraints = policy ? responseConstraints(policy) : {};
  let next = text;
  let truncated = false;
  if (typeof constraints.maxCharacters === "number" && next.length > constraints.maxCharacters) {
    next = next.slice(0, constraints.maxCharacters).trimEnd();
    truncated = true;
  }
  if (typeof constraints.maxWords === "number") {
    const words = next.split(/\s+/).filter(Boolean);
    if (words.length > constraints.maxWords) {
      next = words.slice(0, constraints.maxWords).join(" ");
      truncated = true;
    }
  }
  return { text: next, truncated, constraints };
}

function responseConstraints(policy: ChannelPolicyConfig) {
  const fromBehavior = policy.behavior ?? {};
  const fromPolicies = isPlainRecord(policy.policies.response)
    ? policy.policies.response
    : isPlainRecord(policy.policies.responseBehavior)
      ? policy.policies.responseBehavior
      : {};
  return {
    ...numberField(fromPolicies, "maxWords"),
    ...numberField(fromBehavior, "maxWords"),
    ...numberField(fromPolicies, "maxCharacters"),
    ...numberField(fromBehavior, "maxCharacters"),
  };
}

function numberField(value: UnknownRecord, field: string) {
  const candidate = value[field];
  return typeof candidate === "number" && Number.isFinite(candidate) && candidate > 0
    ? { [field]: Math.floor(candidate) }
    : {};
}

function resolveAgentChannelPolicy(agent: CompiledAgent, channel: ChannelContext): unknown {
  if (!agent.channels) return undefined;
  const keys = [
    channel.kind,
    channel.channelId,
    channel.provider,
    channel.provider ? `${channel.kind}.${channel.provider}` : undefined,
    channel.provider ? `${channel.kind}:${channel.provider}` : undefined,
  ].filter((key): key is string => Boolean(key));
  const merged: UnknownRecord = {};
  let hasPolicy = false;
  for (const key of keys) {
    const policy = agent.channels[key];
    if (policy === undefined) continue;
    hasPolicy = true;
    Object.assign(merged, policy);
  }
  return hasPolicy ? merged : undefined;
}

function redactContextPaths(value: unknown, paths: string[]): unknown {
  if (value === undefined || value === null || paths.length === 0) return value;
  const copy = clonePromptValue(value);
  for (const path of paths) {
    const segments = path.split(".").map((segment) => segment.trim()).filter(Boolean);
    if (segments.length > 0) deletePath(copy, segments);
  }
  return copy;
}

function deletePath(value: unknown, segments: string[]) {
  if (segments.length === 0) return;
  const [head, ...tail] = segments;
  if (!head) return;
  if (Array.isArray(value)) {
    const index = Number(head);
    if (!Number.isInteger(index) || index < 0 || index >= value.length) return;
    if (tail.length === 0) {
      value.splice(index, 1);
    } else {
      deletePath(value[index], tail);
    }
    return;
  }
  if (!isPlainRecord(value) || !(head in value)) return;
  if (tail.length === 0) {
    delete value[head];
    return;
  }
  deletePath(value[head], tail);
}

function clonePromptValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clonePromptValue);
  if (!isPlainRecord(value)) return value;
  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, clonePromptValue(entry)]),
  );
}

function isPlainRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
