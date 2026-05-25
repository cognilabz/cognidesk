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
      criteria: [{ id: "relevance", description: "Assistant answers the ticket status request." }],
    });

    expect(result.transcript).toHaveLength(2);
    expect(result.score).toBe(0.9);
    expect(result.passed).toBe(true);
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
});
