import { describe, expect, it } from "vitest";
import { mkdtemp, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { runEvalCli } from "../../src/cli.js";

describe("Cognidesk eval CLI", () => {
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
