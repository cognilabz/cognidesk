import { describe, expect, it } from "vitest";
import { createRuntime, defineChannelPolicy, type RuntimeEvent } from "../../src/index.js";
import { RecordingStorage } from "../runtime/fixtures.js";
import { ticketingOutputConfiguration } from "./helpers.js";

describe("channel output resolution runtime", () => {
  it("resolves Channel Output Intents to executable sends when channel policy allows outbound use", async () => {
      const runtime = createRuntime({
        storage: new RecordingStorage(),
        ...ticketingOutputConfiguration(),
      });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: {
          channelId: "front.ticketing",
          kind: "ticketing",
          provider: "front",
          externalThreadId: "cnv_123",
        },
      });

      const result = await runtime.resolveChannelOutput({
        conversationId: conversation.id,
        intent: {
          id: "out_1",
          kind: "message.reply",
          text: "We found your ticket.",
          providerPackageId: "ticketing.front",
          capability: "send",
          actionAudience: "customer-facing",
          externallyVisible: true,
          requiredPolicyIds: ["front-send-policy"],
        },
      });

      expect(result.resolution).toMatchObject({
        intentId: "out_1",
        outcome: "send",
        status: "resolved",
        capability: "send",
        providerPackageId: "ticketing.front",
        channel: {
          kind: "ticketing",
          provider: "front",
          externalThreadId: "cnv_123",
        },
      });
      expect(result.shouldExecute).toBe(true);
      expect(result.event?.type).toBe("channel.event.received");
      expect(result.event?.data).toMatchObject({
        nature: "output.resolution",
        intent: "output-resolution",
        handlingDisposition: "output-resolution",
        payload: {
          outputIntent: {
            text: "We found your ticket.",
          },
          resolution: {
            outcome: "send",
          },
        },
      });
    });

    it("executes Channel Outputs through the SDK resolver hook when configured", async () => {
      const executed: unknown[] = [];
      const runtime = createRuntime({
        storage: new RecordingStorage(),
        ...ticketingOutputConfiguration(),
        channelOutput: {
          async execute(input) {
            executed.push({
              conversationId: input.conversationId,
              channelKind: input.channel.kind,
              text: input.outputIntent.text,
            });
            return {
              outcome: "send",
              status: "resolved",
              deliveryStatus: "sent",
              externalMessageId: "front_msg_1",
              providerResult: { ok: true },
            };
          },
        },
      });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: {
          channelId: "front.ticketing",
          kind: "ticketing",
          provider: "front",
          externalThreadId: "cnv_123",
        },
      });

      const result = await runtime.resolveChannelOutput({
        conversationId: conversation.id,
        intent: {
          id: "out_2",
          kind: "message.reply",
          text: "We sent this through the provider.",
          providerPackageId: "ticketing.front",
          capability: "send",
          actionAudience: "customer-facing",
          externallyVisible: true,
          requiredPolicyIds: ["front-send-policy"],
        },
      });

      expect(executed).toEqual([{
        conversationId: conversation.id,
        channelKind: "ticketing",
        text: "We sent this through the provider.",
      }]);
      expect(result.execution).toMatchObject({
        externalMessageId: "front_msg_1",
        deliveryStatus: "sent",
        providerResult: { ok: true },
      });
      expect(result.resolution).toMatchObject({
        outcome: "send",
        status: "resolved",
        externalMessageId: "front_msg_1",
        deliveryStatus: "sent",
      });
      expect(result.events.map((event) => event.type)).toEqual([
        "channel.event.received",
        "channel.sent",
        "channel.delivery.updated",
      ]);
    });

    it("fails closed when an executable Channel Output misses SDK-owned policy configuration", async () => {
      const runtime = createRuntime({
        storage: new RecordingStorage(),
        ...ticketingOutputConfiguration({ policies: {} }),
      });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: "ticketing",
      });

      const result = await runtime.resolveChannelOutput({
        conversationId: conversation.id,
        intent: {
          kind: "message.reply",
          text: "Customer-visible update.",
          providerPackageId: "ticketing.front",
          capability: "send",
          actionAudience: "customer-facing",
          externallyVisible: true,
          requiredPolicyIds: ["front-send-policy"],
        },
      });

      expect(result.resolution).toMatchObject({
        outcome: "block",
        status: "blocked",
        reasonCode: "missing-policy",
        blockers: [{
          code: "missing-policy",
          kind: "missing-policy",
        }],
      });
      expect(result.shouldExecute).toBe(false);
      expect(result.event?.type).toBe("channel.event.received");
      if (result.event?.type !== "channel.event.received") {
        throw new Error("Expected Channel Output Resolution audit event.");
      }
      const event = result.event as Extract<RuntimeEvent, { type: "channel.event.received" }>;
      expect(event.data.payload).toMatchObject({
        resolution: {
          outcome: "block",
          reasonCode: "missing-policy",
        },
      });
    });

    it("uses the concrete channel policy instead of another policy with the same channel kind", async () => {
      const config = ticketingOutputConfiguration();
      const runtime = createRuntime({
        storage: new RecordingStorage(),
        providerPackages: config.providerPackages,
        channels: [
          defineChannelPolicy({
            id: "ticketing.default",
            channel: "ticketing",
            providerPackageIds: ["ticketing.front"],
            enabledCapabilities: ["send"],
            outbound: {
              enabled: true,
              providerPackageIds: ["ticketing.front"],
              requiresProviderOutboundSupport: true,
              policyIds: ["front-send-policy"],
            },
            policies: { "front-send-policy": { reviewer: "operator" } },
          }),
          defineChannelPolicy({
            id: "front.ticketing",
            channel: "ticketing",
            providerPackageIds: ["ticketing.front"],
            enabledCapabilities: ["draft"],
            outbound: {
              enabled: true,
              providerPackageIds: ["ticketing.front"],
              requiresProviderOutboundSupport: true,
              policyIds: ["front-send-policy"],
            },
            policies: { "front-send-policy": { reviewer: "operator" } },
          }),
        ],
      });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: {
          channelId: "front.ticketing",
          kind: "ticketing",
          provider: "front",
        },
      });

      const result = await runtime.resolveChannelOutput({
        conversationId: conversation.id,
        intent: {
          kind: "message.reply",
          text: "Customer-visible update.",
          providerPackageId: "ticketing.front",
          capability: "send",
          actionAudience: "customer-facing",
          externallyVisible: true,
          requiredPolicyIds: ["front-send-policy"],
        },
      });

      expect(result.resolution).toMatchObject({
        outcome: "block",
        status: "blocked",
        reasonCode: "capability-not-enabled",
      });
      expect(result.shouldExecute).toBe(false);
    });

    it("lets SDK policy hooks return approval-shaped Channel Output outcomes without built-in business reasons", async () => {
      let defaultOutcome: string | undefined;
      const runtime = createRuntime({
        storage: new RecordingStorage(),
        ...ticketingOutputConfiguration(),
        channelOutput: {
          resolve: (input) => {
            defaultOutcome = input.defaultResolution.outcome;
            return {
              outcome: "approval-required",
              reasonCode: "customer-visible-review",
              reasonLabel: "Customer visible review",
              supportedApprovalResolutions: ["approve", "deny", "edit"],
              metadata: { reviewerQueue: "support-leads" },
            };
          },
        },
      });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: "ticketing",
      });

      const result = await runtime.resolveChannelOutput({
        conversationId: conversation.id,
        intent: {
          kind: "message.reply",
          text: "This should be reviewed first.",
          providerPackageId: "ticketing.front",
          capability: "send",
          actionAudience: "customer-facing",
          externallyVisible: true,
          requiredPolicyIds: ["front-send-policy"],
        },
      });

      expect(defaultOutcome).toBe("send");
      expect(result.resolution).toMatchObject({
        outcome: "approval-required",
        status: "pending",
        reasonCode: "customer-visible-review",
        reasonLabel: "Customer visible review",
        supportedApprovalResolutions: ["approve", "deny", "edit"],
        metadata: { reviewerQueue: "support-leads" },
      });
      expect(result.shouldExecute).toBe(false);
    });
});
