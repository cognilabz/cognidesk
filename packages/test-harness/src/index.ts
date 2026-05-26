import { z } from "zod";
import type { CognideskRuntime } from "@cognidesk/core";
import { evaluateScenarioAssertions } from "./assertions.js";
import { createJudgeMessages, createSimulatedUserMessages } from "./messages.js";
import { weightedScore } from "./scoring.js";
import type {
  CriterionJudgement,
  HarnessAgentClient,
  HarnessScenario,
  ScenarioResult,
  ScriptedUserTurn,
  TestHarnessOptions,
  TranscriptTurn,
} from "./types.js";

export type * from "./types.js";

const judgeSchema = z.object({
  score: z.number().min(0).max(1),
  passed: z.boolean(),
  reasoning: z.string(),
});

export function createTestHarness(options: TestHarnessOptions) {
  return new CognideskTestHarness(options);
}

export function runtimeHarnessClient(runtime: CognideskRuntime): HarnessAgentClient {
  return {
    async createConversation(input) {
      const conversation = await runtime.createConversation(input);
      return { id: conversation.id };
    },
    async sendMessage(input) {
      return await runtime.handleUserMessage(input);
    },
    async submitWidget(input) {
      const before = await runtime.listEvents(input.conversationId);
      const event = await runtime.submitWidget(input);
      const after = await runtime.listEvents(input.conversationId);
      return {
        event,
        events: after.filter((candidate) => candidate.offset > (before.at(-1)?.offset ?? 0)),
      };
    },
  };
}

export class CognideskTestHarness {
  constructor(private readonly options: TestHarnessOptions) {}

  async runScenario(scenario: HarnessScenario): Promise<ScenarioResult> {
    const controller = new AbortController();
    const deadline = createDeadline(scenario.timeoutMs ?? this.options.timeoutMs, controller);
    let conversationId = "";
    const transcript: TranscriptTurn[] = [];
    const events: ScenarioResult["events"] = [];
    const activeJourneyIds: string[] = [];

    try {
      this.validateScenario(scenario);
      const conversation = await withDeadline(this.options.client.createConversation({
        agentId: scenario.agentId,
        context: scenario.context ?? {},
      }), deadline);
      conversationId = conversation.id;
      const scriptedTurns = scenario.user.scriptedTurns ?? [];
      const maxTurns = scenario.maxTurns ?? (scriptedTurns.length > 0 ? scriptedTurns.length : 4);

      for (let turnIndex = 0; turnIndex < maxTurns; turnIndex += 1) {
        throwIfAborted(controller.signal);
        const userAction = await withDeadline(
          this.nextUserAction({ scenario, transcript, events, turnIndex, signal: controller.signal }),
          deadline,
        );
        if (!userAction) break;
        if (typeof userAction === "string" || userAction.type === "message") {
          const userMessage = typeof userAction === "string" ? userAction : userAction.text;
          transcript.push({ role: "user", content: userMessage });
          const response = await withDeadline(this.options.client.sendMessage({
            conversationId: conversation.id,
            text: userMessage,
            turn: {
              simulatedUser: scenario.user.identity,
              turnIndex,
            },
            signal: controller.signal,
          }), deadline);
          transcript.push({ role: "assistant", content: response.text });
          events.push(...response.events);
          if (response.activeJourneyId) activeJourneyIds.push(response.activeJourneyId);
          if (response.events.some((event) => event.type === "conversation.closed")) break;
          if (scenario.user.stopWhen && response.text.toLowerCase().includes(scenario.user.stopWhen.toLowerCase())) {
            break;
          }
          continue;
        }
        if (!this.options.client.submitWidget) throw new Error("Scenario widget turns require client.submitWidget.");
        const prompt = resolveScriptedWidgetPrompt(events, userAction);
        transcript.push({ role: "user", content: `[submitted ${prompt.widgetKind} widget ${prompt.promptId}]` });
        const response = await withDeadline(this.options.client.submitWidget({
          conversationId: conversation.id,
          promptId: prompt.promptId,
          widgetKind: prompt.widgetKind,
          output: userAction.output,
          signal: controller.signal,
        }), deadline);
        events.push(...(response.events ?? [response.event]));
      }

      if (transcript.filter((turn) => turn.role === "user").length === 0) {
        throw new Error("Scenario did not produce any user turns.");
      }

      const redactedTranscript = await withDeadline(this.redactTranscript(scenario, transcript), deadline);
      const redactedEvents = await withDeadline(this.redactEvents(scenario, events), deadline);
      const assertions = await withDeadline(evaluateScenarioAssertions({
        scenario,
        conversationId: conversation.id,
        transcript: redactedTranscript,
        events: redactedEvents,
        activeJourneyIds,
      }), deadline);
      const judgements = await withDeadline(this.judgeScenario(scenario, redactedTranscript, controller.signal), deadline);
      const score = weightedScore(scenario.criteria ?? [], judgements);
      assertScore(score);
      const threshold = scenario.judge?.threshold ?? 0.75;
      const assertionsPassed = assertions.every((assertion) => assertion.passed);
      const judgementsPassed = judgements.length === 0
        ? (scenario.criteria?.length ?? 0) === 0
        : score >= threshold && judgements.every((judgement) => judgement.passed);
      const passed = assertionsPassed && judgementsPassed;
      return {
        scenarioId: scenario.id,
        conversationId: conversation.id,
        status: passed ? "passed" : "failed",
        transcript: redactedTranscript,
        events: redactedEvents,
        assertions,
        judgements,
        score,
        passed,
      };
    } catch (error) {
      const redactedTranscript = await this.redactTranscript(scenario, transcript).catch(() => transcript);
      const redactedEvents = await this.redactEvents(scenario, events).catch(() => events);
      return {
        scenarioId: scenario.id,
        conversationId,
        status: "error",
        transcript: redactedTranscript,
        events: redactedEvents,
        assertions: [],
        judgements: [],
        score: 0,
        passed: false,
        error: error instanceof Error ? error.message : "Scenario failed.",
      };
    }
  }

  private async nextUserAction(args: {
    scenario: HarnessScenario;
    transcript: TranscriptTurn[];
    events: ScenarioResult["events"];
    turnIndex: number;
    signal?: AbortSignal;
  }): Promise<ScriptedUserTurn | null> {
    const scripted = args.scenario.user.scriptedTurns?.[args.turnIndex];
    if (scripted) return scripted;
    if (!this.options.simulatedUserModel) return null;
    const output = await this.options.simulatedUserModel.generateText({
      role: "response",
      messages: createSimulatedUserMessages(args.scenario, args.transcript),
      ...(args.signal ? { signal: args.signal } : {}),
    });
    return output.text.trim();
  }

  private async judgeScenario(
    scenario: HarnessScenario,
    transcript: TranscriptTurn[],
    signal?: AbortSignal,
  ): Promise<CriterionJudgement[]> {
    const criteria = scenario.criteria ?? [];
    if (criteria.length === 0) return [];
    if (!this.options.judgeModel) {
      throw new Error("Scenario criteria require a judgeModel.");
    }

    const judgements: CriterionJudgement[] = [];
    for (const criterion of criteria) {
      const output = await this.options.judgeModel.generateText({
        role: "matcher",
        messages: createJudgeMessages({ scenario, transcript, criterion }),
        responseFormat: judgeSchema,
        ...(signal ? { signal } : {}),
      });
      const structured = judgeSchema.parse(output.structured ?? JSON.parse(output.text));
      judgements.push({
        criterionId: criterion.id,
        score: structured.score,
        passed: structured.passed && structured.score >= (criterion.threshold ?? 0.75),
        reasoning: structured.reasoning,
      });
    }
    return judgements;
  }

  private validateScenario(scenario: HarnessScenario) {
    const scriptedTurns = scenario.user.scriptedTurns ?? [];
    const maxTurns = scenario.maxTurns ?? (scriptedTurns.length > 0 ? scriptedTurns.length : 4);
    if (maxTurns <= 0) throw new Error("Scenario maxTurns must be greater than zero.");
    if (scriptedTurns.length === 0 && !this.options.simulatedUserModel) {
      throw new Error("Scenario requires scriptedTurns or a simulatedUserModel.");
    }
    if ((scenario.criteria?.length ?? 0) > 0 && !this.options.judgeModel) {
      throw new Error("Scenario criteria require a judgeModel.");
    }
  }

  private async redactTranscript(scenario: HarnessScenario, transcript: TranscriptTurn[]) {
    return await this.options.privacy?.redactTranscript?.({ scenario, transcript }) ?? transcript;
  }

  private async redactEvents(scenario: HarnessScenario, events: ScenarioResult["events"]) {
    return await this.options.privacy?.redactEvents?.({ scenario, events }) ?? events;
  }
}

function resolveScriptedWidgetPrompt(events: ScenarioResult["events"], turn: Extract<ScriptedUserTurn, { type: "widget" }>) {
  if (turn.promptId && turn.widgetKind) return { promptId: turn.promptId, widgetKind: turn.widgetKind };
  const submitted = new Set(events
    .filter((event) => event.type === "ui.submitted")
    .map((event) => event.data.promptId));
  const latestOpenPrompt = [...events]
    .reverse()
    .find((event): event is Extract<ScenarioResult["events"][number], { type: "ui.prompted" }> => (
      event.type === "ui.prompted" && !submitted.has(event.data.promptId)
    ));
  if (!latestOpenPrompt) throw new Error("Scenario widget turn could not find an open prompt.");
  if (turn.promptId && latestOpenPrompt.data.promptId !== turn.promptId) {
    throw new Error(`Scenario expected prompt '${turn.promptId}', but latest open prompt is '${latestOpenPrompt.data.promptId}'.`);
  }
  if (turn.widgetKind && latestOpenPrompt.data.widgetKind !== turn.widgetKind) {
    throw new Error(`Scenario expected widget '${turn.widgetKind}', but latest open prompt uses '${latestOpenPrompt.data.widgetKind}'.`);
  }
  return {
    promptId: latestOpenPrompt.data.promptId,
    widgetKind: latestOpenPrompt.data.widgetKind,
  };
}

function createDeadline(timeoutMs: number | undefined, controller: AbortController) {
  return timeoutMs === undefined
    ? null
    : {
        controller,
        expiresAt: Date.now() + Math.max(0, timeoutMs),
      };
}

async function withDeadline<T>(
  promise: Promise<T>,
  deadline: ReturnType<typeof createDeadline>,
) {
  if (!deadline) return promise;
  const remainingMs = deadline.expiresAt - Date.now();
  if (remainingMs <= 0) {
    deadline.controller.abort();
    throw new Error("Scenario timed out.");
  }
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<never>((_resolve, reject) => {
        timeout = setTimeout(() => {
          deadline.controller.abort();
          reject(new Error("Scenario timed out."));
        }, remainingMs);
      }),
    ]);
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

function throwIfAborted(signal: AbortSignal) {
  if (signal.aborted) throw new Error("Scenario timed out.");
}

function assertScore(score: number) {
  if (!Number.isFinite(score) || score < 0 || score > 1) {
    throw new Error(`Scenario score must be between 0 and 1, received ${score}.`);
  }
}
