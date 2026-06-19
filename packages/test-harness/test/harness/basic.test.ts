import { describe, expect, it } from "vitest";
import { createTestHarness, type HarnessAgentClient } from "../../src/index.js";
import type { ModelAdapter } from "@cognidesk/core";

describe("CognideskTestHarness basic scripted judging", () => {
  it("runs scripted simulated user turns and judges the transcript", async () => {
      const client: HarnessAgentClient = {
        createConversation: async () => ({ id: "conversation_1" }),
        sendMessage: async ({ text }) => ({
          text: `Assistant handled: ${text}`,
          events: [],
          activeJourneyId: "ticket-status",
        }),
      };
      const judge: ModelAdapter = {
        provider: "test",
        model: "judge",
        generateText: async () => ({
          text: JSON.stringify({ score: 0.9, passed: true, reasoning: "The answer was relevant." }),
          structured: { score: 0.9, passed: true, reasoning: "The answer was relevant." },
        }),
      };

      const harness = createTestHarness({ client, judgeModel: judge });
      const result = await harness.runScenario({
        id: "ticket-status",
        agentId: "flight-service",
        user: {
          identity: "Busy traveller with booking CD-123",
          goal: "Find out ticket status",
          scriptedTurns: ["What is the status of CD-123?"],
        },
        assertions: [
          { id: "mentions-handled", type: "assistantContains", text: "handled" },
          { id: "ticket-journey", type: "journeyActivated", journeyId: "ticket-status" },
          {
            id: "custom-transcript",
            type: "custom",
            evaluate: ({ transcript }) => ({
              passed: transcript.some((turn) => turn.content.includes("CD-123")),
              reasoning: "Transcript includes the booking reference.",
            }),
          },
        ],
        criteria: [{ id: "relevance", description: "Assistant answers the ticket status request." }],
      });

      expect(result.transcript).toHaveLength(2);
      expect(result.assertions).toEqual([
        {
          assertionId: "mentions-handled",
          passed: true,
          reasoning: "Assistant transcript contains 'handled'.",
        },
        {
          assertionId: "ticket-journey",
          passed: true,
          reasoning: "Journey 'ticket-status' was activated.",
        },
        {
          assertionId: "custom-transcript",
          passed: true,
          reasoning: "Transcript includes the booking reference.",
        },
      ]);
      expect(result.score).toBe(0.9);
      expect(result.passed).toBe(true);
      expect(result.status).toBe("passed");
    });
});
