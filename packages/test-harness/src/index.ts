import { z } from "zod";
import type {
  CognideskRuntime,
  CreateRuntimeConversationInput,
  HandleUserMessageResult,
  ModelAdapter,
  ModelMessage,
  RuntimeEvent,
} from "@cognidesk/core";

export interface HarnessAgentClient {
  createConversation(input: CreateRuntimeConversationInput): Promise<{ id: string }>;
  sendMessage(input: { conversationId: string; text: string; turn?: unknown }): Promise<Pick<HandleUserMessageResult, "text" | "events" | "activeJourneyId">>;
}

export interface SimulatedUserDefinition {
  identity: string;
  goal: string;
  background?: string;
  scriptedTurns?: string[];
  stopWhen?: string;
}

export interface EvaluationCriterion {
  id: string;
  description: string;
  weight?: number;
  threshold?: number;
}

type MaybePromise<T> = T | Promise<T>;

export type ScenarioAssertion =
  | {
      id: string;
      type: "assistantContains";
      text: string;
      caseSensitive?: boolean;
    }
  | {
      id: string;
      type: "journeyActivated";
      journeyId: string;
    }
  | {
      id: string;
      type: "eventEmitted";
      eventType: RuntimeEvent["type"];
    }
  | {
      id: string;
      type: "custom";
      description?: string;
      evaluate: (input: ScenarioAssertionInput) => MaybePromise<boolean | { passed: boolean; reasoning?: string }>;
    };

export interface ScenarioAssertionInput {
  scenario: HarnessScenario;
  conversationId: string;
  transcript: TranscriptTurn[];
  events: RuntimeEvent[];
  activeJourneyIds: string[];
}

export interface AssertionResult {
  assertionId: string;
  passed: boolean;
  reasoning: string;
}

export interface HarnessScenario {
  id: string;
  name?: string;
  description?: string;
  agentId: string;
  context?: unknown;
  user: SimulatedUserDefinition;
  maxTurns?: number;
  assertions?: ScenarioAssertion[];
  criteria?: EvaluationCriterion[];
  judge?: {
    threshold?: number;
    instructions?: string;
  };
}

export interface TestHarnessOptions {
  client: HarnessAgentClient;
  simulatedUserModel?: ModelAdapter;
  judgeModel?: ModelAdapter;
}

export interface TranscriptTurn {
  role: "user" | "assistant";
  content: string;
}

export interface CriterionJudgement {
  criterionId: string;
  score: number;
  passed: boolean;
  reasoning: string;
}

export interface ScenarioResult {
  scenarioId: string;
  conversationId: string;
  transcript: TranscriptTurn[];
  events: RuntimeEvent[];
  assertions: AssertionResult[];
  judgements: CriterionJudgement[];
  score: number;
  passed: boolean;
}

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
    const events: RuntimeEvent[] = [];
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

async function evaluateScenarioAssertions(input: ScenarioAssertionInput): Promise<AssertionResult[]> {
  const assertions = input.scenario.assertions ?? [];
  const results: AssertionResult[] = [];
  for (const assertion of assertions) {
    if (assertion.type === "assistantContains") {
      const haystack = input.transcript
        .filter((turn) => turn.role === "assistant")
        .map((turn) => turn.content)
        .join("\n");
      const passed = assertion.caseSensitive
        ? haystack.includes(assertion.text)
        : haystack.toLowerCase().includes(assertion.text.toLowerCase());
      results.push({
        assertionId: assertion.id,
        passed,
        reasoning: passed
          ? `Assistant transcript contains '${assertion.text}'.`
          : `Assistant transcript did not contain '${assertion.text}'.`,
      });
      continue;
    }

    if (assertion.type === "journeyActivated") {
      const fromResult = input.activeJourneyIds.includes(assertion.journeyId);
      const fromEvents = input.events.some((event) => (
        event.type === "journey.activated" && event.data.journeyId === assertion.journeyId
      ));
      const passed = fromResult || fromEvents;
      results.push({
        assertionId: assertion.id,
        passed,
        reasoning: passed
          ? `Journey '${assertion.journeyId}' was activated.`
          : `Journey '${assertion.journeyId}' was not activated.`,
      });
      continue;
    }

    if (assertion.type === "eventEmitted") {
      const passed = input.events.some((event) => event.type === assertion.eventType);
      results.push({
        assertionId: assertion.id,
        passed,
        reasoning: passed
          ? `Runtime event '${assertion.eventType}' was emitted.`
          : `Runtime event '${assertion.eventType}' was not emitted.`,
      });
      continue;
    }

    const evaluation = await assertion.evaluate(input);
    if (typeof evaluation === "boolean") {
      results.push({
        assertionId: assertion.id,
        passed: evaluation,
        reasoning: evaluation ? "Custom assertion passed." : "Custom assertion failed.",
      });
      continue;
    }
    results.push({
      assertionId: assertion.id,
      passed: evaluation.passed,
      reasoning: evaluation.reasoning ?? (evaluation.passed ? "Custom assertion passed." : "Custom assertion failed."),
    });
  }
  return results;
}

function createSimulatedUserMessages(scenario: HarnessScenario, transcript: TranscriptTurn[]): ModelMessage[] {
  return [
    {
      role: "system",
      content: [
        `You are simulating this user identity: ${scenario.user.identity}.`,
        `Goal: ${scenario.user.goal}`,
        scenario.user.background ? `Background: ${scenario.user.background}` : "",
        "Return only the next user message. Do not describe your reasoning.",
      ].filter(Boolean).join("\n"),
    },
    {
      role: "user",
      content: renderTranscript(transcript),
    },
  ];
}

function createJudgeMessages(args: {
  scenario: HarnessScenario;
  transcript: TranscriptTurn[];
  criterion: EvaluationCriterion;
}): ModelMessage[] {
  return [
    {
      role: "system",
      content: [
        "You are an evaluation judge for a customer support chatbot.",
        args.scenario.judge?.instructions ?? "",
        "Score only the criterion. Return JSON matching the supplied schema.",
      ].filter(Boolean).join("\n"),
    },
    {
      role: "user",
      content: [
        `Scenario: ${args.scenario.name ?? args.scenario.id}`,
        args.scenario.description ? `Description: ${args.scenario.description}` : "",
        `Simulated user: ${args.scenario.user.identity}`,
        `User goal: ${args.scenario.user.goal}`,
        `Criterion ${args.criterion.id}: ${args.criterion.description}`,
        "",
        renderTranscript(args.transcript),
      ].filter(Boolean).join("\n"),
    },
  ];
}

function renderTranscript(transcript: TranscriptTurn[]) {
  if (transcript.length === 0) return "Transcript is empty.";
  return transcript.map((turn) => `${turn.role.toUpperCase()}: ${turn.content}`).join("\n");
}

function weightedScore(criteria: EvaluationCriterion[], judgements: CriterionJudgement[]) {
  if (judgements.length === 0) return 1;
  const criterionById = new Map(criteria.map((criterion) => [criterion.id, criterion]));
  let weighted = 0;
  let totalWeight = 0;
  for (const judgement of judgements) {
    const weight = criterionById.get(judgement.criterionId)?.weight ?? 1;
    weighted += judgement.score * weight;
    totalWeight += weight;
  }
  return totalWeight === 0 ? 0 : weighted / totalWeight;
}
