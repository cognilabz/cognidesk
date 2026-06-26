import { describe, expect, it } from "vitest";
import { createTestHarness, type HarnessAgentClient } from "../../src/index.js";
import type { ModelAdapter } from "@cognidesk/core";

describe("CognideskTestHarness scenario flow", () => {
  it("can use a model-backed simulated user when no script is provided", async () => {
      const client: HarnessAgentClient = {
        createConversation: async () => ({ id: "conversation_1" }),
        sendMessage: async ({ text }) => ({ text: `Done with ${text}`, events: [] }),
      };
      const simulatedUser: ModelAdapter = {
        provider: "test",
        model: "sim-user",
        generateText: async () => ({ text: "I need to book a flight to Berlin." }),
      };
      const harness = createTestHarness({ client, simulatedUserModel: simulatedUser });

      const result = await harness.runScenario({
        id: "booking",
        agentId: "agent_primary",
        user: {
          identity: "Leisure traveller",
          goal: "Book a Berlin trip",
        },
        maxTurns: 1,
      });

      expect(result.transcript[0]).toEqual({ role: "user", content: "I need to book a flight to Berlin." });
      expect(result.passed).toBe(true);
    });

    it("passes scenario channel context into conversation creation", async () => {
      const createdInputs: unknown[] = [];
      const harness = createTestHarness({
        client: {
          createConversation: async (input) => {
            createdInputs.push(input);
            return { id: "conversation_email" };
          },
          sendMessage: async ({ text }) => ({ text: `Drafted email for ${text}`, events: [] }),
        },
      });

      const result = await harness.runScenario({
        id: "email-tone",
        agentId: "support-agent",
        channel: {
          channelId: "email.gmail",
          kind: "email",
          provider: "gmail",
          externalThreadId: "thread-123",
        },
        user: {
          identity: "Customer using email",
          goal: "Get a formal email reply",
          scriptedTurns: ["Please explain the refund timing."],
        },
      });

      expect(result.passed).toBe(true);
      expect(createdInputs).toEqual([{
        agentId: "support-agent",
        channel: {
          channelId: "email.gmail",
          kind: "email",
          provider: "gmail",
          externalThreadId: "thread-123",
        },
        context: {},
      }]);
    });

    it("can run scripted widget submissions against an open prompt", async () => {
      const sentWidgets: unknown[] = [];
      const harness = createTestHarness({
        client: {
          createConversation: async () => ({ id: "conversation_1" }),
          sendMessage: async () => ({
            text: "Please use the form.",
            activeJourneyId: "book-flight",
            events: [{
              id: "event_1",
              conversationId: "conversation_1",
              offset: 1,
              type: "ui.prompted",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: {
                promptId: "fields:book-flight:collectRoute",
                widgetKind: "form",
                input: { title: "Missing details", fields: [] },
              },
            }],
          }),
          submitWidget: async (input) => {
            sentWidgets.push(input.output);
            return {
              event: {
                id: "event_2",
                conversationId: "conversation_1",
                offset: 2,
                type: "ui.submitted",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: {
                  promptId: input.promptId,
                  widgetKind: input.widgetKind,
                  output: input.output,
                },
              },
              events: [{
                id: "event_2",
                conversationId: "conversation_1",
                offset: 2,
                type: "ui.submitted",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: {
                  promptId: input.promptId,
                  widgetKind: input.widgetKind,
                  output: input.output,
                },
              }, {
                id: "event_3",
                conversationId: "conversation_1",
                offset: 3,
                type: "tool.completed",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: { toolName: "searchFlights", success: true, result: { flights: [{ id: "CL102" }] } },
              }],
            };
          },
        },
      });

      const result = await harness.runScenario({
        id: "widget-route-form",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Submit route details",
          scriptedTurns: [
            "I need to book a flight.",
            {
              type: "widget",
              output: {
                values: {
                  origin: "Vienna",
                  destination: "Berlin",
                  departureDate: "2026-05-27",
                },
              },
            },
          ],
        },
        assertions: [
          { id: "form-submitted", type: "eventEmitted", eventType: "ui.submitted" },
          { id: "search-completed", type: "eventEmitted", eventType: "tool.completed" },
        ],
      });

      expect(sentWidgets).toEqual([{
        values: {
          origin: "Vienna",
          destination: "Berlin",
          departureDate: "2026-05-27",
        },
      }]);
      expect(result.passed).toBe(true);
    });

    it("marks invalid scenarios as errors instead of false-green passes", async () => {
      const harness = createTestHarness({
        client: {
          createConversation: async () => ({ id: "conversation_1" }),
          sendMessage: async () => ({ text: "unreachable", events: [] }),
        },
      });

      const noUser = await harness.runScenario({
        id: "no-user",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "No turns",
        },
      });
      const noJudge = await harness.runScenario({
        id: "no-judge",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Judge me",
          scriptedTurns: ["Hello"],
        },
        criteria: [{ id: "quality", description: "Quality" }],
      });

      expect(noUser).toMatchObject({
        status: "error",
        passed: false,
        error: "Scenario requires scriptedTurns or a simulatedUserModel.",
      });
      expect(noJudge).toMatchObject({
        status: "error",
        passed: false,
        error: "Scenario criteria require a judgeModel.",
      });
    });

    it("redacts transcript and events before assertions, judging, and output", async () => {
      let judgedContent = "";
      const client: HarnessAgentClient = {
        createConversation: async () => ({ id: "conversation_1" }),
        sendMessage: async () => ({
          text: "Assistant saw raw-secret",
          events: [{
            id: "event_1",
            conversationId: "conversation_1",
            offset: 1,
            type: "message.completed",
            createdAt: new Date().toISOString(),
            data: { text: "raw-secret" },
          }],
        }),
      };
      const judge: ModelAdapter = {
        provider: "test",
        model: "judge",
        generateText: async ({ messages }) => {
          judgedContent = messages.map((message) => message.content).join("\n");
          return {
            text: JSON.stringify({ score: 1, passed: true, reasoning: "Redacted." }),
            structured: { score: 1, passed: true, reasoning: "Redacted." },
          };
        },
      };
      const harness = createTestHarness({
        client,
        judgeModel: judge,
        privacy: {
          redactTranscript: ({ transcript }) => transcript.map((turn) => ({
            ...turn,
            content: turn.content.replace("raw-secret", "[secret]"),
          })),
          redactEvents: ({ events }) => events.map((event) => event.type === "message.completed"
            ? { ...event, data: { text: "[secret]" } }
            : event),
        },
      });

      const result = await harness.runScenario({
        id: "privacy",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Protect transcript",
          scriptedTurns: ["raw-secret"],
        },
        assertions: [{ id: "redacted", type: "assistantContains", text: "[secret]" }],
        criteria: [{ id: "privacy", description: "Transcript is redacted." }],
      });

      expect(result.passed).toBe(true);
      expect(result.transcript).toEqual([
        { role: "user", content: "[secret]" },
        { role: "assistant", content: "Assistant saw [secret]" },
      ]);
      expect(result.events[0]?.data).toEqual({ text: "[secret]" });
      expect(judgedContent).toContain("[secret]");
      expect(judgedContent).not.toContain("raw-secret");
    });

    it("stops after a conversation is closed", async () => {
      const sent: string[] = [];
      const harness = createTestHarness({
        client: {
          createConversation: async () => ({ id: "conversation_1" }),
          sendMessage: async ({ text }) => {
            sent.push(text);
            return {
              text: "Closed.",
              events: [{
                id: "event_1",
                conversationId: "conversation_1",
                offset: 1,
                type: "conversation.closed",
                createdAt: new Date().toISOString(),
                data: { reason: "done" },
              }],
            };
          },
        },
      });

      const result = await harness.runScenario({
        id: "closed",
        agentId: "agent_primary",
        user: {
          identity: "Traveller",
          goal: "Stop after closure",
          scriptedTurns: ["First", "Second"],
        },
      });

      expect(sent).toEqual(["First"]);
      expect(result.transcript).toHaveLength(2);
    });
});
