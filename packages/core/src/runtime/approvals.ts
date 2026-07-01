import { randomUUID } from "node:crypto";
import type { CompiledAgent } from "../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import {
  activeRuntimeEventTelemetry,
  addTelemetryContentEvent,
  recordRuntimeEventMetric,
  telemetryAttributes,
  telemetryEventNames,
  telemetrySpanNames,
  withTelemetrySpan,
} from "../telemetry.js";
import type {
  AnyTool,
  ChannelContext,
  ConversationChannel,
  RuntimeApprovalDecision,
  RuntimeEvent,
} from "../types.js";
import { defineChannelContext } from "../types.js";
import { evaluateToolPolicyUse, policyBlockForEvent } from "./policy-enforcement.js";
import { redactTelemetryAttributes } from "./privacy.js";
import { executeToolWithRetry } from "./state-runners/retry.js";
import type {
  PendingSupportAction,
  ResolvePendingSupportActionInput,
  ResolvePendingSupportActionResult,
  RuntimeEventEmitter,
  RuntimeOptions,
} from "./types.js";

type ApprovalContext = {
  conversation: ConversationRecord;
  tool: AnyTool;
  input: unknown;
  channel?: ConversationChannel;
  journeyId?: string;
  stateId?: string;
};

export function evaluateToolApprovalUse(
  options: RuntimeOptions,
  context: ApprovalContext,
): RuntimeApprovalDecision {
  const channel = context.channel ? defineChannelContext(context.channel) : undefined;
  const customDecision = options.approval?.evaluate?.({
    conversation: context.conversation,
    tool: context.tool,
    input: context.input,
    ...(channel ? { channel } : {}),
  });
  if (customDecision) return normalizeApprovalDecision(context.tool, customDecision);

  const approval = context.tool.policy?.approval;
  const requirement = approval?.requirement ?? "policy";
  if (requirement === "required") {
    return normalizeApprovalDecision(context.tool, {
      outcome: "require-approval",
      ...(approval?.reason !== undefined ? { reason: approval.reason } : {}),
      ...(approval?.supportedResolutions !== undefined ? { supportedResolutions: approval.supportedResolutions } : {}),
      ...(approval?.editableFields !== undefined ? { editableFields: approval.editableFields } : {}),
      ...(approval?.expiresAt !== undefined ? { expiresAt: approval.expiresAt } : {}),
      ...(approval?.metadata !== undefined ? { metadata: approval.metadata } : {}),
    });
  }
  return { outcome: "allow" };
}

type ApprovalRequestedEvent = Extract<RuntimeEvent, { type: "approval.requested" }>;
type PolicyBlockEventData = NonNullable<Extract<RuntimeEvent, { type: "tool.completed" }>["data"]["policyBlock"]>;

export async function requestToolApproval(args: {
  emit: RuntimeEventEmitter;
  conversation: ConversationRecord;
  tool: AnyTool;
  input: unknown;
  decision: RuntimeApprovalDecision;
  channel?: ConversationChannel;
  journeyId?: string;
  stateId?: string;
}): Promise<ApprovalRequestedEvent> {
  const policy = args.tool.policy;
  const approvalId = randomUUID();
  const channel = args.channel ? defineChannelContext(args.channel) : undefined;
  return args.emit({
    conversationId: args.conversation.id,
    type: "approval.requested",
    data: {
      approvalId,
      toolName: args.tool.name,
      input: args.input,
      ...(channel ? { channel } : {}),
      ...(policy?.providerPackageId ? { providerPackageId: policy.providerPackageId } : {}),
      ...(policy?.operationAlias ? { operationAlias: policy.operationAlias } : {}),
      ...(policy?.providerOperation ? { providerOperation: policy.providerOperation } : {}),
      ...(policy?.capability ? { capability: policy.capability } : {}),
      ...(policy?.actionAudience ? { actionAudience: policy.actionAudience } : {}),
      ...(args.tool.sideEffect !== undefined ? { sideEffect: args.tool.sideEffect } : {}),
      ...(policy?.outbound !== undefined ? { outbound: policy.outbound } : {}),
      ...(policy?.externallyVisible !== undefined ? { externallyVisible: policy.externallyVisible } : {}),
      ...(policy?.exposesSensitiveData !== undefined ? { exposesSensitiveData: policy.exposesSensitiveData } : {}),
      ...(policy?.changesWorkflow !== undefined ? { changesWorkflow: policy.changesWorkflow } : {}),
      ...(args.decision.reason ? { reason: args.decision.reason } : {}),
      supportedResolutions: args.decision.supportedResolutions ?? ["approve", "deny"],
      ...(args.decision.editableFields?.length ? { editableFields: args.decision.editableFields } : {}),
      ...(args.decision.expiresAt ? { expiresAt: args.decision.expiresAt } : {}),
      ...(args.journeyId ? { journeyId: args.journeyId } : {}),
      ...(args.stateId ? { stateId: args.stateId } : {}),
      ...(args.decision.metadata ? { metadata: args.decision.metadata } : {}),
    },
  }) as Promise<ApprovalRequestedEvent>;
}

export async function listPendingSupportActions(
  options: RuntimeOptions,
  conversationId: string,
): Promise<PendingSupportAction[]> {
  const events = await options.storage.listEvents({ conversationId });
  return pendingActionsFromEvents(events);
}

export async function resolvePendingSupportAction(
  deps: {
    options: RuntimeOptions;
    requireAgent: () => CompiledAgent;
    requireConversation: (conversationId: string) => Promise<ConversationRecord>;
    emit: RuntimeEventEmitter;
    applyBuiltInLifecycleTool(input: {
      toolName: string;
      input: unknown;
      conversationId: string;
      emit: RuntimeEventEmitter;
    }): Promise<boolean>;
  },
  input: ResolvePendingSupportActionInput,
): Promise<ResolvePendingSupportActionResult> {
  const conversation = await deps.requireConversation(input.conversationId);
  const pending = await listPendingSupportActions(deps.options, input.conversationId);
  const action = pending.find((candidate) => candidate.approvalId === input.approvalId);
  if (!action) {
    throw new Error(`Pending support action '${input.approvalId}' is not available.`);
  }
  if (!action.supportedResolutions.includes(input.resolution)) {
    throw new Error(`Approval resolution '${input.resolution}' is not allowed for pending support action '${input.approvalId}'.`);
  }

  const events: RuntimeEvent[] = [];
  const emit = async <TEvent extends RuntimeEventInput>(event: TEvent) => {
    const stored = await deps.emit(event);
    events.push(stored);
    return stored;
  };

  if (!isExecutionResolution(input.resolution)) {
    const resolution = await appendApprovalResolution(deps.options, emit, events, action, input, false);
    return { action, resolution, events, executed: false };
  }

  const tool = findToolByName(deps.requireAgent(), action.toolName);
  if (!tool) {
    const resolution = await appendApprovalResolution(deps.options, emit, events, action, {
      ...input,
      reason: input.reason ?? `Tool '${action.toolName}' is no longer available.`,
    }, false, `Tool '${action.toolName}' is no longer available.`);
    return { action, resolution, events, executed: false };
  }

  const approvedInput = input.resolution === "edit"
    ? validateEditedInput(action, input.editedInput)
    : action.input;
  const parsedInput = tool.input.safeParse(approvedInput);
  if (!parsedInput.success) {
    const resolution = await appendApprovalResolution(deps.options, emit, events, action, input, false, parsedInput.error.message);
    return { action, resolution, events, executed: false };
  }

  const policyChannel = action.channel ?? conversation.channel;
  const policyDecision = evaluateToolPolicyUse({
    options: deps.options,
    conversation,
    tool,
    ...(policyChannel ? { channel: policyChannel } : {}),
  });
  if (policyDecision && !policyDecision.allowed) {
    const policyBlock = policyBlockForEvent(policyDecision);
    const resolution = await appendApprovalResolution(
      deps.options,
      emit,
      events,
      action,
      { ...input, reason: input.reason ?? policyDecision.message },
      false,
      policyDecision.message,
      undefined,
      policyBlock,
    );
    return { action, resolution, events, executed: false };
  }

  const resolution = await appendApprovalResolution(deps.options, emit, events, action, input, true);

  await emit({
    conversationId: conversation.id,
    type: "tool.started",
    data: {
      toolName: tool.name,
      ...(action.journeyId ? { journeyId: action.journeyId } : {}),
      ...(action.stateId ? { stateId: action.stateId } : {}),
    },
  });

  try {
    const idempotencyKey = tool.idempotencyKey?.({
      input: parsedInput.data,
      conversationId: conversation.id,
    });
    const parsedOutput = await withTelemetrySpan(deps.options, {
      name: telemetrySpanNames.toolExecute,
      attributes: {
        [telemetryAttributes.conversationId]: conversation.id,
        [telemetryAttributes.toolName]: tool.name,
        ...(action.journeyId ? { [telemetryAttributes.journeyId]: action.journeyId } : {}),
        ...(action.stateId ? { [telemetryAttributes.stateId]: action.stateId } : {}),
      },
      metric: {
        kind: "tool",
        attributes: {
          [telemetryAttributes.toolName]: tool.name,
          ...(action.journeyId ? { [telemetryAttributes.journeyId]: action.journeyId } : {}),
          ...(action.stateId ? { [telemetryAttributes.stateId]: action.stateId } : {}),
        },
      },
    }, async () => {
      const inputTelemetry = await redactTelemetryAttributes(deps.options, conversation.id, telemetryEventNames.toolInput, {
        "cognidesk.tool.name": tool.name,
        "cognidesk.tool.input": parsedInput.data,
      });
      if (inputTelemetry) addTelemetryContentEvent(deps.options, telemetryEventNames.toolInput, inputTelemetry);
      const output = await executeToolWithRetry({
        options: deps.options,
        tool,
        input: parsedInput.data,
        conversationId: conversation.id,
        journeyContext: {},
        emit,
        ...(idempotencyKey ? { idempotencyKey } : {}),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const parsed = tool.output.parse(output);
      const outputTelemetry = await redactTelemetryAttributes(deps.options, conversation.id, telemetryEventNames.toolOutput, {
        "cognidesk.tool.name": tool.name,
        "cognidesk.tool.output": parsed,
      });
      if (outputTelemetry) addTelemetryContentEvent(deps.options, telemetryEventNames.toolOutput, outputTelemetry);
      return parsed;
    });
    await emit({
      conversationId: conversation.id,
      type: "tool.completed",
      data: {
        toolName: tool.name,
        success: true,
        ...(action.journeyId ? { journeyId: action.journeyId } : {}),
        ...(action.stateId ? { stateId: action.stateId } : {}),
        result: parsedOutput,
        approval: { approvalId: action.approvalId, status: "resolved" },
      },
    });
    await deps.applyBuiltInLifecycleTool({
      toolName: tool.name,
      input: parsedInput.data,
      conversationId: conversation.id,
      emit,
    });
    return { action, resolution, events, executed: true, result: parsedOutput };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Approved support action execution failed.";
    await emit({
      conversationId: conversation.id,
      type: "tool.completed",
      data: {
        toolName: tool.name,
        success: false,
        ...(action.journeyId ? { journeyId: action.journeyId } : {}),
        ...(action.stateId ? { stateId: action.stateId } : {}),
        error: message,
        approval: { approvalId: action.approvalId, status: "resolved" },
      },
    });
    return { action, resolution, events, executed: true };
  }
}

function normalizeApprovalDecision(tool: AnyTool, decision: RuntimeApprovalDecision): RuntimeApprovalDecision {
  if (decision.outcome !== "require-approval") return decision;
  const supportedResolutions = decision.supportedResolutions
    ?? tool.policy?.approval?.supportedResolutions
    ?? ["approve", "deny"];
  const reason = decision.reason ?? tool.policy?.approval?.reason;
  const editableFields = decision.editableFields ?? tool.policy?.approval?.editableFields;
  const expiresAt = decision.expiresAt ?? tool.policy?.approval?.expiresAt;
  return {
    outcome: "require-approval",
    supportedResolutions,
    ...(reason !== undefined ? { reason } : {}),
    ...(editableFields !== undefined ? { editableFields } : {}),
    ...(expiresAt !== undefined ? { expiresAt } : {}),
    ...(decision.metadata !== undefined ? { metadata: decision.metadata } : {}),
  };
}

function pendingActionsFromEvents(events: RuntimeEvent[]): PendingSupportAction[] {
  const resolved = new Set(
    events
      .filter((event) => event.type === "approval.resolved")
      .map((event) => event.data.approvalId),
  );
  return events
    .filter((event) => event.type === "approval.requested")
    .filter((event) => !resolved.has(event.data.approvalId))
    .filter((event) => !event.data.expiresAt || Date.parse(event.data.expiresAt) > Date.now())
    .map((event) => ({
      approvalId: event.data.approvalId,
      conversationId: event.conversationId,
      requestedEventId: event.id,
      requestedAt: event.createdAt,
      toolName: event.data.toolName,
      input: event.data.input,
      ...(event.data.channel ? { channel: event.data.channel } : {}),
      ...(event.data.providerPackageId ? { providerPackageId: event.data.providerPackageId } : {}),
      ...(event.data.operationAlias ? { operationAlias: event.data.operationAlias } : {}),
      ...(event.data.providerOperation ? { providerOperation: event.data.providerOperation } : {}),
      ...(event.data.capability ? { capability: event.data.capability } : {}),
      ...(event.data.actionAudience ? { actionAudience: event.data.actionAudience } : {}),
      ...(event.data.sideEffect !== undefined ? { sideEffect: event.data.sideEffect } : {}),
      ...(event.data.outbound !== undefined ? { outbound: event.data.outbound } : {}),
      ...(event.data.externallyVisible !== undefined ? { externallyVisible: event.data.externallyVisible } : {}),
      ...(event.data.exposesSensitiveData !== undefined ? { exposesSensitiveData: event.data.exposesSensitiveData } : {}),
      ...(event.data.changesWorkflow !== undefined ? { changesWorkflow: event.data.changesWorkflow } : {}),
      ...(event.data.reason ? { reason: event.data.reason } : {}),
      supportedResolutions: event.data.supportedResolutions,
      ...(event.data.editableFields ? { editableFields: event.data.editableFields } : {}),
      ...(event.data.expiresAt ? { expiresAt: event.data.expiresAt } : {}),
      ...(event.data.journeyId ? { journeyId: event.data.journeyId } : {}),
      ...(event.data.stateId ? { stateId: event.data.stateId } : {}),
      ...(event.data.metadata ? { metadata: event.data.metadata } : {}),
    }));
}

function isExecutionResolution(resolution: string) {
  return resolution === "approve" || resolution === "edit";
}

async function appendApprovalResolution(
  options: RuntimeOptions,
  emit: RuntimeEventEmitter,
  events: RuntimeEvent[],
  action: PendingSupportAction,
  input: ResolvePendingSupportActionInput,
  executed: boolean,
  error?: string,
  result?: unknown,
  policyBlock?: PolicyBlockEventData,
) {
  const event = {
    conversationId: action.conversationId,
    type: "approval.resolved",
    data: {
      approvalId: action.approvalId,
      resolution: input.resolution,
      toolName: action.toolName,
      ...(input.resolvedBy ? { resolvedBy: input.resolvedBy } : {}),
      ...(input.reason ? { reason: input.reason } : {}),
      ...(input.editedInput !== undefined ? { editedInput: input.editedInput } : {}),
      executed,
      ...(result !== undefined ? { result } : {}),
      ...(error ? { error } : {}),
      ...(policyBlock ? { policyBlock } : {}),
      ...(input.metadata ? { metadata: input.metadata } : {}),
    },
  } satisfies RuntimeEventInput<"approval.resolved">;

  if (options.storage.appendEventIfApprovalPending) {
    const telemetry = activeRuntimeEventTelemetry(options);
    const stored = await options.storage.appendEventIfApprovalPending({
      ...event,
      ...(telemetry ? { telemetry } : {}),
    });
    if (!stored) throw pendingSupportActionUnavailableError(action.approvalId);
    await recordStoredRuntimeEvent(options, stored);
    events.push(stored);
    return stored;
  }

  return emit(event);
}

function validateEditedInput(action: PendingSupportAction, editedInput: unknown) {
  if (!action.supportedResolutions.includes("edit")) {
    throw new Error(`Pending support action '${action.approvalId}' does not allow editing.`);
  }
  if (editedInput === undefined) {
    throw new Error("Edited approval resolution requires editedInput.");
  }
  const editableFields = action.editableFields ?? [];
  if (editableFields.length === 0) return editedInput;
  if (!isRecord(action.input) || !isRecord(editedInput)) {
    throw new Error("Editable approval fields can only be checked on object inputs.");
  }
  const changed = changedTopLevelFields(action.input, editedInput);
  const blocked = changed.filter((field) => !editableFields.includes(field));
  if (blocked.length > 0) {
    throw new Error(`Edited approval input changed non-editable fields: ${blocked.join(", ")}.`);
  }
  return editedInput;
}

function changedTopLevelFields(original: Record<string, unknown>, edited: Record<string, unknown>) {
  const keys = new Set([...Object.keys(original), ...Object.keys(edited)]);
  return [...keys].filter((key) => JSON.stringify(original[key]) !== JSON.stringify(edited[key]));
}

function findToolByName(agent: CompiledAgent, toolName: string) {
  const tools: AnyTool[] = [
    ...agent.tools,
    ...agent.journeys.flatMap((journey) => [
      ...journey.tools,
      ...(journey.delegation?.tools ?? []),
      ...journey.states.flatMap((state) => [
        ...state.tools,
        ...state.toolRuns.map((toolRun) => toolRun.tool),
      ]),
    ]),
  ];
  return tools.find((tool) => tool.name === toolName);
}

function pendingSupportActionUnavailableError(approvalId: string) {
  return new Error(`Pending support action '${approvalId}' is not available.`);
}

async function recordStoredRuntimeEvent(options: RuntimeOptions, event: RuntimeEvent) {
  recordRuntimeEventMetric(options, {
    "cognidesk.runtime.event.type": event.type,
  });
  const telemetry = await redactTelemetryAttributes(options, event.conversationId, telemetryEventNames.runtimeEvent, {
    "cognidesk.runtime.event.type": event.type,
    "cognidesk.runtime.event.offset": event.offset,
    "cognidesk.runtime.event.data": event.data,
  });
  if (telemetry) addTelemetryContentEvent(options, telemetryEventNames.runtimeEvent, telemetry);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function resolveApprovalChannel(channel?: ChannelContext | string): ChannelContext | undefined {
  return channel ? defineChannelContext(channel) : undefined;
}

function removeUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as T;
}
