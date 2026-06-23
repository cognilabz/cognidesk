import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  createAgent,
  createRuntime,
  defineCapabilityAvailability,
  defineChannelPolicy,
  defineProviderPackage,
  journeyEvent,
  tool,
} from "../../src/index.js";
import type { CapabilityAvailability, ChannelPolicyConfig, TextGenerationInput } from "../../src/index.js";
import { RecordingStorage, createModels, deferred } from "./fixtures.js";

describe("runtime approvals and scheduling", () => {
  it("stores model-requested side effects as pending support actions and executes them after approval", async () => {
    const { runtime, executed } = createApprovalScenario();
    const { conversation, pendingAction } = await requestSendReplyApproval(runtime);
    expect(executed).toEqual([]);
    expect(pendingAction).toMatchObject({
      toolName: "sendReply",
      operationAlias: "replyToConversation",
      providerOperation: "createConversationReply",
      outbound: true,
      externallyVisible: true,
      supportedResolutions: ["approve", "deny", "edit"],
      editableFields: ["body"],
    });
    const requestedEvents = (await runtime.listEvents(conversation.id))
      .filter((event) => event.type === "approval.requested");
    expect(requestedEvents[0]).toMatchObject({
      data: {
        outbound: true,
        externallyVisible: true,
      },
    });

    const resolved = await runtime.resolvePendingSupportAction({
      conversationId: conversation.id,
      approvalId: pendingAction.approvalId,
      resolution: "edit",
      editedInput: { conversationId: "front_conv_1", body: "Edited body" },
      resolvedBy: "operator_1",
    });

    expect(resolved.executed).toBe(true);
    expect(resolved.result).toEqual({ sent: true });
    expect(executed).toEqual([{ conversationId: "front_conv_1", body: "Edited body" }]);
    await expect(runtime.listPendingSupportActions(conversation.id)).resolves.toEqual([]);
    const events = await runtime.listEvents(conversation.id);
    expect(events.map((event) => event.type)).toEqual(expect.arrayContaining([
      "approval.requested",
      "approval.resolved",
      "tool.completed",
    ]));
  });

  it("executes approved support actions at most once while concurrent resolvers race", async () => {
    const enteredExecute = deferred<void>();
    const releaseExecute = deferred<void>();
    let entered = false;
    const { runtime, executed } = createApprovalScenario({
      beforeExecute: () => {
        if (!entered) {
          entered = true;
          enteredExecute.resolve(undefined);
        }
        return releaseExecute.promise;
      },
    });
    const { conversation, pendingAction } = await requestSendReplyApproval(runtime);

    const first = runtime.resolvePendingSupportAction({
      conversationId: conversation.id,
      approvalId: pendingAction.approvalId,
      resolution: "approve",
      resolvedBy: "operator_1",
    });
    await enteredExecute.promise;

    await expect(runtime.resolvePendingSupportAction({
      conversationId: conversation.id,
      approvalId: pendingAction.approvalId,
      resolution: "approve",
      resolvedBy: "operator_2",
    })).rejects.toThrow(`Pending support action '${pendingAction.approvalId}' is not available.`);

    releaseExecute.resolve(undefined);
    await expect(first).resolves.toMatchObject({ executed: true, result: { sent: true } });
    expect(executed).toEqual([{ conversationId: "front_conv_1", body: "Initial body" }]);

    const events = await runtime.listEvents(conversation.id);
    expect(events.filter((event) => event.type === "approval.resolved")).toHaveLength(1);
    expect(events.filter((event) => event.type === "tool.started")).toHaveLength(1);
    expect(events.filter((event) => event.type === "tool.completed" && event.data.success)).toHaveLength(1);
  });

  it("fails closed when capability availability blocks a stale pending approval", async () => {
    const { runtime, executed, capabilityAvailability } = createApprovalScenario();
    const { conversation, pendingAction } = await requestSendReplyApproval(runtime);
    capabilityAvailability.push(defineCapabilityAvailability({
      providerPackageId: "ticketing.front",
      capability: "send",
      status: "blocked",
      blockers: [{
        code: "missing-credentials",
        message: "Front credentials are not configured.",
        kind: "missing-credentials",
      }],
    }));

    const resolved = await runtime.resolvePendingSupportAction({
      conversationId: conversation.id,
      approvalId: pendingAction.approvalId,
      resolution: "approve",
      resolvedBy: "operator_1",
    });

    expect(resolved.executed).toBe(false);
    expect(resolved.events.map((event) => event.type)).toEqual(["approval.resolved"]);
    expect(resolved.resolution).toMatchObject({
      type: "approval.resolved",
      data: {
        executed: false,
        reason: "Capability 'send' is blocked.",
        error: "Capability 'send' is blocked.",
        policyBlock: {
          code: "capability-blocked",
          blockers: [{
            code: "missing-credentials",
            message: "Front credentials are not configured.",
            kind: "missing-credentials",
          }],
        },
      },
    });
    expect(executed).toEqual([]);
    const events = await runtime.listEvents(conversation.id);
    expect(events.some((event) => event.type === "tool.started")).toBe(false);
    await expect(runtime.listPendingSupportActions(conversation.id)).resolves.toEqual([]);
  });

  it("fails closed when channel policy blocks a stale pending approval", async () => {
    const { runtime, executed, channels } = createApprovalScenario();
    const { conversation, pendingAction } = await requestSendReplyApproval(runtime);
    channels[0] = defineChannelPolicy({
      id: "ticketing",
      channel: "ticketing",
      audience: "customer-facing",
      providerPackageIds: ["ticketing.front"],
      enabledCapabilities: ["draft"],
      outbound: {
        enabled: true,
        providerPackageIds: ["ticketing.front"],
        requiresProviderOutboundSupport: true,
        policyIds: ["front-send-policy"],
      },
      policies: { "front-send-policy": { reviewer: "operator" } },
    });

    const resolved = await runtime.resolvePendingSupportAction({
      conversationId: conversation.id,
      approvalId: pendingAction.approvalId,
      resolution: "approve",
      resolvedBy: "operator_1",
    });

    expect(resolved.executed).toBe(false);
    expect(resolved.events.map((event) => event.type)).toEqual(["approval.resolved"]);
    expect(resolved.resolution).toMatchObject({
      type: "approval.resolved",
      data: {
        executed: false,
        reason: "Capability 'send' is not enabled for channel 'ticketing'.",
        error: "Capability 'send' is not enabled for channel 'ticketing'.",
        policyBlock: { code: "capability-not-enabled" },
      },
    });
    expect(executed).toEqual([]);
    const events = await runtime.listEvents(conversation.id);
    expect(events.some((event) => event.type === "tool.started")).toBe(false);
  });

  it("emits schedule due events before routing scheduled journey events", async () => {
    const followUpDue = journeyEvent("followUpDue", {
      payload: z.object({ ticketId: z.string() }),
      routing: "none",
    });
    const agent = createAgent("support", { instructions: "Help customers." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.emitScheduledEvent({
      conversationId: conversation.id,
      scheduleId: "follow-up-1",
      event: followUpDue,
      payload: { ticketId: "T-1" },
      scheduledFor: "2026-06-18T10:00:00.000Z",
      dueAt: "2026-06-18T10:00:01.000Z",
      intent: {
        operationAlias: "front.replyToConversation",
        providerPackageId: "ticketing.front",
        capability: "send",
      },
    });

    expect(result.scheduleEvent).toMatchObject({
      type: "schedule.due",
      data: {
        scheduleId: "follow-up-1",
        eventName: "followUpDue",
        intent: {
          operationAlias: "front.replyToConversation",
          providerPackageId: "ticketing.front",
          capability: "send",
        },
      },
    });
    expect(result.channelEvent).toMatchObject({
      nature: "schedule.due",
      direction: "internal",
      intent: "scheduled-support-action",
      actor: { type: "scheduler" },
      channel: {
        kind: "schedule",
        provider: "cognidesk",
        externalThreadId: "follow-up-1",
      },
    });
    expect(result.intake).toMatchObject({
      outcome: "accepted",
      bindingOutcome: "resume-existing",
      conversationId: conversation.id,
      handling: "not-required",
    });
    expect(result.event).toMatchObject({
      type: "journey.event.emitted",
      data: {
        name: "followUpDue",
        payload: { ticketId: "T-1" },
        routing: "none",
      },
    });
    expect(result.events.map((event) => event.type)).toEqual([
      "channel.event.received",
      "schedule.due",
      "journey.event.emitted",
    ]);
  });
});

function createApprovalScenario(options: {
  storage?: RecordingStorage;
  beforeExecute?: () => Promise<void> | void;
} = {}) {
  const executed: unknown[] = [];
  const sendReply = tool("sendReply", {
    description: "Send a reviewed provider reply.",
    input: z.object({ conversationId: z.string(), body: z.string() }),
    output: z.object({ sent: z.boolean() }),
    sideEffect: true,
    policy: {
      providerPackageId: "ticketing.front",
      operationAlias: "replyToConversation",
      providerOperation: "createConversationReply",
      capability: "send",
      actionAudience: "customer-facing",
      outbound: true,
      externallyVisible: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
      requiredPolicyIds: ["front-send-policy"],
      approval: {
        requirement: "required",
        supportedResolutions: ["approve", "deny", "edit"],
        editableFields: ["body"],
        reason: "Customer-visible reply requires review.",
      },
    },
    execute: async ({ input }) => {
      await options.beforeExecute?.();
      executed.push(input);
      return { sent: true };
    },
  });
  const response = {
    provider: "test",
    model: "response",
    generateText: async (input: TextGenerationInput) => {
      if (!input.messages.some((message) => message.role === "tool")) {
        return {
          text: "",
          toolCalls: [{
            id: "call_1",
            name: "sendReply",
            input: { conversationId: "front_conv_1", body: "Initial body" },
          }],
        };
      }
      return { text: "The reply is pending review." };
    },
  };
  const agentBuilder = createAgent("support", { instructions: "Help customers." });
  agentBuilder.tools.add(sendReply);
  const agent = agentBuilder.compile();
  const channels: ChannelPolicyConfig[] = [defineChannelPolicy({
    id: "ticketing",
    channel: "ticketing",
    audience: "customer-facing",
    providerPackageIds: ["ticketing.front"],
    enabledCapabilities: ["send"],
    outbound: {
      enabled: true,
      providerPackageIds: ["ticketing.front"],
      requiresProviderOutboundSupport: true,
      policyIds: ["front-send-policy"],
    },
    policies: { "front-send-policy": { reviewer: "operator" } },
  })];
  const capabilityAvailability: CapabilityAvailability[] = [];
  const runtime = createRuntime({
    storage: options.storage ?? new RecordingStorage(),
    agent,
    models: createModels({ response }),
    providerPackages: [defineProviderPackage({
      id: "ticketing.front",
      name: "Front",
      packageName: "@cognidesk/integration-ticketing-front",
      provider: "front",
      category: "ticketing",
      trustLevel: "verified",
      directions: ["bidirectional"],
      channelAudiences: ["customer-facing", "internal-support", "mixed"],
      capabilities: [{
        capability: "send",
        audiences: ["customer-facing"],
        providerObjects: [{ kind: "frontMessage" }],
        sideEffect: true,
        exposesSensitiveData: true,
        changesWorkflow: true,
      }],
    })],
    channels,
    capabilityAvailability,
  });
  return { runtime, executed, agent, channels, capabilityAvailability };
}

async function requestSendReplyApproval(runtime: ReturnType<typeof createRuntime>) {
  const conversation = await runtime.createConversation({ agentId: "support", context: {}, channel: "ticketing" });
  await runtime.handleUserMessage({
    conversationId: conversation.id,
    text: "Send the reply.",
    channel: "ticketing",
  });
  const pending = await runtime.listPendingSupportActions(conversation.id);
  expect(pending).toHaveLength(1);
  return { conversation, pendingAction: pending[0]! };
}
