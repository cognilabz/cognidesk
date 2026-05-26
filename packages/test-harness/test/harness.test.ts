import { describe, expect, it } from "vitest";
import { mkdtemp, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { createTestHarness, type HarnessAgentClient } from "../src/index.js";
import { runEvalCli } from "../src/cli.js";
import type { ModelAdapter } from "@cognidesk/core";

describe("CognideskTestHarness", () => {
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

  it("fails scenarios when deterministic assertions fail", async () => {
    const harness = createTestHarness({
      client: {
        createConversation: async () => ({ id: "conversation_1" }),
        sendMessage: async () => ({ text: "No matching content.", events: [] }),
      },
    });

    const result = await harness.runScenario({
      id: "assertion-failure",
      agentId: "flight-service",
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
      agentId: "flight-service",
      user: {
        identity: "Leisure traveller",
        goal: "Book a Berlin trip",
      },
      maxTurns: 1,
    });

    expect(result.transcript[0]).toEqual({ role: "user", content: "I need to book a flight to Berlin." });
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
      agentId: "flight-service",
      user: {
        identity: "Traveller",
        goal: "No turns",
      },
    });
    const noJudge = await harness.runScenario({
      id: "no-judge",
      agentId: "flight-service",
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
      agentId: "flight-service",
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
      agentId: "flight-service",
      user: {
        identity: "Traveller",
        goal: "Stop after closure",
        scriptedTurns: ["First", "Second"],
      },
    });

    expect(sent).toEqual(["First"]);
    expect(result.transcript).toHaveLength(2);
  });

  it("runs scenarios from the eval CLI config and returns non-zero on failures", async () => {
    const directory = await mkdtemp(join(tmpdir(), "cognidesk-eval-"));
    const configFile = join(directory, "eval.config.mjs");
    await writeFile(configFile, `
      export const scenarios = [{
        id: "scripted",
        agentId: "flight-service",
        user: {
          identity: "Traveller",
          goal: "Check ticket",
          scriptedTurns: ["Ticket status?"]
        }
      }];
      export const client = {
        async createConversation() {
          return { id: "conversation_1" };
        },
        async sendMessage({ text }) {
          return { text: "Handled " + text, events: [] };
        }
      };
    `, "utf8");
    let output = "";
    const exitCode = await runEvalCli(["--config", configFile], {
      stdout: { write: (chunk: string) => { output += chunk; return true; } },
      stderr: { write: () => true },
    });

    expect(exitCode).toBe(0);
    expect(JSON.parse(output)).toMatchObject({
      passed: true,
      results: [{
        scenarioId: "scripted",
        transcript: [
          { role: "user", content: "Ticket status?" },
          { role: "assistant", content: "Handled Ticket status?" },
        ],
      }],
    });

    const failingConfigFile = join(directory, "failing.config.mjs");
    await writeFile(failingConfigFile, `
      export const scenarios = [{ id: "failing", agentId: "flight-service", user: { identity: "Traveller", goal: "Fail" } }];
      export const harness = {
        async runScenario() {
          return {
            scenarioId: "failing",
            conversationId: "conversation_1",
            transcript: [],
            events: [],
            assertions: [],
            judgements: [],
            score: 0,
            passed: false
          };
        }
      };
    `, "utf8");

    const failingExitCode = await runEvalCli(["--config", failingConfigFile], {
      stdout: { write: () => true },
      stderr: { write: () => true },
    });

    expect(failingExitCode).toBe(1);
  });

  it("prints help with a zero exit code and isolates CLI scenario crashes", async () => {
    let helpOutput = "";
    const helpExitCode = await runEvalCli(["--help"], {
      stdout: { write: (chunk: string) => { helpOutput += chunk; return true; } },
      stderr: { write: () => true },
    });
    expect(helpExitCode).toBe(0);
    expect(helpOutput).toContain("Usage: cognidesk-eval");

    const directory = await mkdtemp(join(tmpdir(), "cognidesk-eval-"));
    const configFile = join(directory, "crash.config.mjs");
    await writeFile(configFile, `
      export const scenarios = [
        { id: "throws", agentId: "flight-service", user: { identity: "Traveller", goal: "Throw", scriptedTurns: ["Hi"] } },
        { id: "passes", agentId: "flight-service", user: { identity: "Traveller", goal: "Pass", scriptedTurns: ["Hi"] } }
      ];
      export const harness = {
        async runScenario(scenario) {
          if (scenario.id === "throws") throw new Error("boom");
          return {
            scenarioId: scenario.id,
            conversationId: "conversation_2",
            status: "passed",
            transcript: [],
            events: [],
            assertions: [],
            judgements: [],
            score: 1,
            passed: true
          };
        }
      };
    `, "utf8");

    let output = "";
    const exitCode = await runEvalCli(["--config", configFile], {
      stdout: { write: (chunk: string) => { output += chunk; return true; } },
      stderr: { write: () => true },
    });

    expect(exitCode).toBe(1);
    expect(JSON.parse(output)).toMatchObject({
      passed: false,
      results: [
        { scenarioId: "throws", status: "error", passed: false, error: "boom" },
        { scenarioId: "passes", status: "passed", passed: true },
      ],
    });
  });
});
