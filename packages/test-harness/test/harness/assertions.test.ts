import { describe, expect, it } from "vitest";
import { createTestHarness } from "../../src/index.js";

describe("CognideskTestHarness deterministic assertions", () => {
  it("fails scenarios when deterministic assertions fail", async () => {
      const harness = createTestHarness({
        client: {
          createConversation: async () => ({ id: "conversation_1" }),
          sendMessage: async () => ({ text: "No matching content.", events: [] }),
        },
      });

      const result = await harness.runScenario({
        id: "assertion-failure",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Trigger assertion failure",
          scriptedTurns: ["Hello"],
        },
        assertions: [{ id: "missing", type: "assistantContains", text: "confirmed" }],
      });

      expect(result.assertions).toEqual([{
        assertionId: "missing",
        passed: false,
        reasoning: "Assistant transcript did not contain 'confirmed'.",
      }]);
      expect(result.passed).toBe(false);
      expect(result.status).toBe("failed");
    });

    it("checks tool-call and assistant length assertions", async () => {
      const harness = createTestHarness({
        client: {
          createConversation: async () => ({ id: "conversation_1" }),
          sendMessage: async () => ({
            text: "Short answer.",
            events: [{
              id: "event_1",
              conversationId: "conversation_1",
              offset: 1,
              type: "tool.completed",
              createdAt: "2026-06-17T00:00:00.000Z",
              data: { toolName: "ticket.lookup", success: true },
            }],
          }),
        },
      });

      const result = await harness.runScenario({
        id: "tool-and-length",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Check ticket",
          scriptedTurns: ["Check my ticket."],
        },
        assertions: [
          { id: "tool-used", type: "toolCalled", toolName: "ticket.lookup" },
          { id: "tool-not-used", type: "toolNotCalled", toolName: "refund.issue" },
          { id: "max-words", type: "assistantMaxWords", maxWords: 3 },
          { id: "max-characters", type: "assistantMaxCharacters", maxCharacters: 20 },
        ],
      });

      expect(result.assertions).toEqual([
        {
          assertionId: "tool-used",
          passed: true,
          reasoning: "Tool 'ticket.lookup' was called.",
        },
        {
          assertionId: "tool-not-used",
          passed: true,
          reasoning: "Tool 'refund.issue' was not called.",
        },
        {
          assertionId: "max-words",
          passed: true,
          reasoning: "Assistant transcript has 2 word(s), within 3.",
        },
        {
          assertionId: "max-characters",
          passed: true,
          reasoning: "Assistant transcript has 13 character(s), within 20.",
        },
      ]);
      expect(result.passed).toBe(true);
    });

    it("checks policy blocks and partial event payload assertions", async () => {
      const harness = createTestHarness({
        client: {
          createConversation: async () => ({ id: "conversation_1" }),
          sendMessage: async () => ({
            text: "Blocked until approval policy is configured.",
            events: [{
              id: "event_1",
              conversationId: "conversation_1",
              offset: 1,
              type: "tool.completed",
              createdAt: "2026-06-17T00:00:00.000Z",
              data: {
                toolName: "sms.send",
                success: false,
                error: "Capability 'send' is missing required policy configuration.",
                policyBlock: {
                  code: "missing-policy",
                  message: "Capability 'send' is missing required policy configuration.",
                  blockers: [{
                    code: "missing-policy",
                    message: "Missing policy 'approval' for capability 'send'.",
                    kind: "missing-policy",
                  }],
                },
              },
            }, {
              id: "event_2",
              conversationId: "conversation_1",
              offset: 2,
              type: "handoff.completed",
              createdAt: "2026-06-17T00:00:00.000Z",
              data: {
                status: "accepted",
                target: {
                  providerPackageId: "ticketing.servicenow",
                  destination: "priority-support",
                },
              },
            }],
          }),
        },
      });

      const result = await harness.runScenario({
        id: "policy-proof",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Trigger policy checks",
          scriptedTurns: ["Send the SMS and hand me off."],
        },
        assertions: [
          { id: "sms-blocked", type: "policyBlocked", code: "missing-policy", toolName: "sms.send" },
          {
            id: "handoff-target",
            type: "eventPayloadMatches",
            eventType: "handoff.completed",
            expected: {
              status: "accepted",
              target: { providerPackageId: "ticketing.servicenow" },
            },
          },
        ],
      });

      expect(result.assertions).toEqual([
        {
          assertionId: "sms-blocked",
          passed: true,
          reasoning: "Policy block 'missing-policy' was emitted.",
        },
        {
          assertionId: "handoff-target",
          passed: true,
          reasoning: "Runtime event 'handoff.completed' matched the expected payload.",
        },
      ]);
      expect(result.passed).toBe(true);
    });
});
