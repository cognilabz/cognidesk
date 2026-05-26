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
  };
}

export class CognideskTestHarness {
  constructor(private readonly options: TestHarnessOptions) {}

  async runScenario(scenario: HarnessScenario): Promise<ScenarioResult> {
    const conversation = await this.options.client.createConversation({
      agentId: scenario.agentId,
      context: scenario.context ?? {},
    });
    const maxTurns = scenario.maxTurns ?? scenario.user.scriptedTurns?.length ?? 4;
    const transcript: TranscriptTurn[] = [];
    const events: ScenarioResult["events"] = [];
    const activeJourneyIds: string[] = [];

    for (let turnIndex = 0; turnIndex < maxTurns; turnIndex += 1) {
      const userMessage = await this.nextUserMessage({ scenario, transcript, turnIndex });
      if (!userMessage) break;
      transcript.push({ role: "user", content: userMessage });
      const response = await this.options.client.sendMessage({
        conversationId: conversation.id,
        text: userMessage,
        turn: {
          simulatedUser: scenario.user.identity,
          turnIndex,
        },
      });
      transcript.push({ role: "assistant", content: response.text });
      events.push(...response.events);
      if (response.activeJourneyId) activeJourneyIds.push(response.activeJourneyId);
      if (scenario.user.stopWhen && response.text.toLowerCase().includes(scenario.user.stopWhen.toLowerCase())) {
        break;
      }
    }

    const assertions = await evaluateScenarioAssertions({
      scenario,
      conversationId: conversation.id,
      transcript,
      events,
      activeJourneyIds,
    });
    const judgements = await this.judgeScenario(scenario, transcript);
    const score = weightedScore(scenario.criteria ?? [], judgements);
    const threshold = scenario.judge?.threshold ?? 0.75;
    const assertionsPassed = assertions.every((assertion) => assertion.passed);
    const judgementsPassed = judgements.length === 0
      ? true
      : score >= threshold && judgements.every((judgement) => judgement.passed);
    return {
      scenarioId: scenario.id,
      conversationId: conversation.id,
      transcript,
      events,
      assertions,
      judgements,
      score,
      passed: assertionsPassed && judgementsPassed,
    };
  }

  private async nextUserMessage(args: {
    scenario: HarnessScenario;
    transcript: TranscriptTurn[];
    turnIndex: number;
  }) {
    const scripted = args.scenario.user.scriptedTurns?.[args.turnIndex];
    if (scripted) return scripted;
    if (!this.options.simulatedUserModel) return null;
    const output = await this.options.simulatedUserModel.generateText({
      role: "response",
      messages: createSimulatedUserMessages(args.scenario, args.transcript),
    });
    return output.text.trim();
  }

  private async judgeScenario(
    scenario: HarnessScenario,
    transcript: TranscriptTurn[],
  ): Promise<CriterionJudgement[]> {
    const criteria = scenario.criteria ?? [];
    if (criteria.length === 0 || !this.options.judgeModel) return [];

    const judgements: CriterionJudgement[] = [];
    for (const criterion of criteria) {
      const output = await this.options.judgeModel.generateText({
        role: "matcher",
        messages: createJudgeMessages({ scenario, transcript, criterion }),
        responseFormat: judgeSchema,
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
}
