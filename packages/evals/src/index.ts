import type { ConversationChannelInput, RuntimeEvent } from "@cognidesk/core";
import {
  createTestHarness,
  runtimeHarnessClient,
  type CognideskTestHarness,
  type HarnessScenario,
  type ScenarioAssertion,
  type ScenarioResult,
  type TestHarnessOptions,
} from "@cognidesk/test-harness";

export type * from "@cognidesk/test-harness";
export { createTestHarness, runtimeHarnessClient };

export interface EvalSuite {
  id: string;
  name?: string;
  description?: string;
  scenarios: HarnessScenario[];
}

export interface ChannelScenarioExpectations {
  eventTypes?: RuntimeEvent["type"][];
  activeJourneyIds?: string[];
  handoffRequested?: boolean;
  handoffCompleted?: boolean;
  handoffTarget?: Record<string, unknown>;
  policyBlocks?: Array<{ code?: string; toolName?: string }>;
  eventPayloads?: Array<{ eventType: RuntimeEvent["type"]; expected: Record<string, unknown> }>;
  toolCalls?: string[];
  forbiddenToolCalls?: string[];
  assistantMustNotMention?: string[];
  assistantMustNotExpose?: string[];
  minAssistantTurns?: number;
  maxAssistantWords?: number;
  maxAssistantCharacters?: number;
  emailStructure?: {
    subject?: boolean;
    greeting?: boolean;
    signoff?: boolean;
  };
}

export interface ChannelScenarioInput extends Omit<HarnessScenario, "channel" | "assertions"> {
  channel: ConversationChannelInput;
  assertions?: ScenarioAssertion[];
  expectations?: ChannelScenarioExpectations;
}

export interface EvalSuiteResult {
  suiteId: string;
  passed: boolean;
  results: ScenarioResult[];
  summary: EvalSuiteSummary;
}

export interface EvalSuiteSummary {
  total: number;
  passed: number;
  failed: number;
  errored: number;
  averageScore: number;
}

export type EvalSuiteRunner = Pick<CognideskTestHarness, "runScenario">;

export type RunEvalSuiteOptions =
  | { harness: EvalSuiteRunner }
  | ({ harness?: undefined } & TestHarnessOptions);

export function evalSuite(input: EvalSuite): EvalSuite {
  if (!input.id.trim()) throw new Error("Eval suite id is required.");
  if (input.scenarios.length === 0) throw new Error(`Eval suite '${input.id}' must include at least one scenario.`);
  return {
    ...input,
    scenarios: input.scenarios.map((scenario) => ({ ...scenario })),
  };
}

export function channelScenario(input: ChannelScenarioInput): HarnessScenario {
  const { expectations, assertions, channel, ...scenario } = input;
  return {
    ...scenario,
    channel,
    assertions: [
      ...(assertions ?? []),
      ...channelExpectationAssertions(input.id, expectations),
    ],
  };
}

export async function runEvalSuite(suite: EvalSuite, options: RunEvalSuiteOptions): Promise<EvalSuiteResult> {
  const normalizedSuite = evalSuite(suite);
  const harness = "harness" in options && options.harness
    ? options.harness
    : createTestHarness(options);
  const results: ScenarioResult[] = [];
  for (const scenario of normalizedSuite.scenarios) {
    results.push(await harness.runScenario(scenario));
  }
  const summary = summarizeEvalResults(results);
  return {
    suiteId: normalizedSuite.id,
    passed: summary.failed === 0 && summary.errored === 0,
    results,
    summary,
  };
}

export function summarizeEvalResults(results: ScenarioResult[]): EvalSuiteSummary {
  const total = results.length;
  const passed = results.filter((result) => result.passed).length;
  const errored = results.filter((result) => result.status === "error").length;
  const failed = total - passed - errored;
  const averageScore = total === 0
    ? 0
    : results.reduce((sum, result) => sum + result.score, 0) / total;
  return { total, passed, failed, errored, averageScore };
}

export function channelExpectationAssertions(
  scenarioId: string,
  expectations: ChannelScenarioExpectations = {},
): ScenarioAssertion[] {
  const assertions: ScenarioAssertion[] = [];
  for (const eventType of expectations.eventTypes ?? []) {
    assertions.push({
      id: `${scenarioId}:event:${eventType}`,
      type: "eventEmitted",
      eventType,
    });
  }
  for (const journeyId of expectations.activeJourneyIds ?? []) {
    assertions.push({
      id: `${scenarioId}:journey:${journeyId}`,
      type: "journeyActivated",
      journeyId,
    });
  }
  if (expectations.handoffRequested) {
    assertions.push({
      id: `${scenarioId}:handoff-requested`,
      type: "eventEmitted",
      eventType: "handoff.requested",
    });
  }
  if (expectations.handoffCompleted) {
    assertions.push({
      id: `${scenarioId}:handoff-completed`,
      type: "eventEmitted",
      eventType: "handoff.completed",
    });
  }
  if (expectations.handoffTarget) {
    assertions.push({
      id: `${scenarioId}:handoff-target`,
      type: "eventPayloadMatches",
      eventType: "handoff.completed",
      expected: { target: expectations.handoffTarget },
    });
  }
  for (const policyBlock of expectations.policyBlocks ?? []) {
    assertions.push({
      id: `${scenarioId}:policy-block:${policyBlock.code ?? "any"}:${policyBlock.toolName ?? "any-tool"}`,
      type: "policyBlocked",
      ...(policyBlock.code ? { code: policyBlock.code } : {}),
      ...(policyBlock.toolName ? { toolName: policyBlock.toolName } : {}),
    });
  }
  for (const eventPayload of expectations.eventPayloads ?? []) {
    assertions.push({
      id: `${scenarioId}:event-payload:${eventPayload.eventType}`,
      type: "eventPayloadMatches",
      eventType: eventPayload.eventType,
      expected: eventPayload.expected,
    });
  }
  if (expectations.assistantMustNotMention?.length) {
    assertions.push(assistantOmitsTermsAssertion(
      `${scenarioId}:assistant-omits-channel-forbidden-terms`,
      expectations.assistantMustNotMention,
    ));
  }
  if (expectations.assistantMustNotExpose?.length) {
    assertions.push(assistantOmitsTermsAssertionWithDescription(
      `${scenarioId}:assistant-omits-sensitive-values`,
      expectations.assistantMustNotExpose,
      "Assistant response must not expose configured sensitive literal values.",
    ));
  }
  for (const toolName of expectations.toolCalls ?? []) {
    assertions.push({
      id: `${scenarioId}:tool-called:${toolName}`,
      type: "toolCalled",
      toolName,
    });
  }
  for (const toolName of expectations.forbiddenToolCalls ?? []) {
    assertions.push({
      id: `${scenarioId}:tool-not-called:${toolName}`,
      type: "toolNotCalled",
      toolName,
    });
  }
  if (expectations.maxAssistantWords !== undefined) {
    assertions.push({
      id: `${scenarioId}:assistant-max-words`,
      type: "assistantMaxWords",
      maxWords: expectations.maxAssistantWords,
    });
  }
  if (expectations.maxAssistantCharacters !== undefined) {
    assertions.push({
      id: `${scenarioId}:assistant-max-characters`,
      type: "assistantMaxCharacters",
      maxCharacters: expectations.maxAssistantCharacters,
    });
  }
  if (expectations.emailStructure) {
    assertions.push(emailStructureAssertion(`${scenarioId}:email-structure`, expectations.emailStructure));
  }
  if (expectations.minAssistantTurns !== undefined) {
    assertions.push({
      id: `${scenarioId}:assistant-turn-count`,
      type: "custom",
      description: `Assistant should respond at least ${expectations.minAssistantTurns} time(s).`,
      evaluate: ({ transcript }) => {
        const count = transcript.filter((turn) => turn.role === "assistant").length;
        return {
          passed: count >= expectations.minAssistantTurns!,
          reasoning: `Assistant responded ${count} time(s).`,
        };
      },
    });
  }
  return assertions;
}

export function assistantOmitsTermsAssertion(id: string, forbiddenTerms: string[]): ScenarioAssertion {
  return assistantOmitsTermsAssertionWithDescription(
    id,
    forbiddenTerms,
    "Assistant response must not include channel-forbidden literal terms.",
  );
}

function assistantOmitsTermsAssertionWithDescription(
  id: string,
  forbiddenTerms: string[],
  description: string,
): ScenarioAssertion {
  const normalizedTerms = forbiddenTerms.map((term) => term.trim()).filter(Boolean);
  if (normalizedTerms.length === 0) throw new Error("assistantOmitsTermsAssertion requires at least one forbidden term.");
  return {
    id,
    type: "custom",
    description,
    evaluate: ({ transcript }) => {
      const assistantText = transcript
        .filter((turn) => turn.role === "assistant")
        .map((turn) => turn.content)
        .join("\n")
        .toLowerCase();
      const matches = normalizedTerms.filter((term) => assistantText.includes(term.toLowerCase()));
      return {
        passed: matches.length === 0,
        reasoning: matches.length === 0
          ? "Assistant omitted all forbidden channel terms."
          : `Assistant mentioned forbidden channel terms: ${matches.join(", ")}.`,
      };
    },
  };
}

export function emailStructureAssertion(
  id: string,
  expected: NonNullable<ChannelScenarioExpectations["emailStructure"]>,
): ScenarioAssertion {
  return {
    id,
    type: "custom",
    description: "Assistant response should match configured email structure requirements.",
    evaluate: ({ transcript }) => {
      const assistantText = transcript
        .filter((turn) => turn.role === "assistant")
        .map((turn) => turn.content)
        .join("\n")
        .trim();
      const lines = assistantText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const failures: string[] = [];
      if (expected.subject && !lines.some((line) => /^subject:/i.test(line))) failures.push("subject");
      if (expected.greeting && !lines.some((line) => /^(hi|hello|dear)\b/i.test(line))) failures.push("greeting");
      if (expected.signoff && !lines.some((line) => /^(best|regards|sincerely|thank you|thanks)[,!\s]?/i.test(line))) failures.push("signoff");
      return {
        passed: failures.length === 0,
        reasoning: failures.length === 0
          ? "Assistant matched configured email structure."
          : `Assistant missed email structure element(s): ${failures.join(", ")}.`,
      };
    },
  };
}

export function voiceSupportScenario(input: Omit<ChannelScenarioInput, "channel"> & {
  channel?: ConversationChannelInput;
}): HarnessScenario {
  return channelScenario({
    ...input,
    channel: input.channel ?? {
      channelId: "voice",
      kind: "voice",
      capabilities: {
        realtime: true,
        voice: true,
        audioInput: true,
        audioOutput: true,
        markdown: false,
        widgets: false,
        supportsHumanTransfer: true,
      },
    },
    expectations: {
      assistantMustNotMention: ["button", "widget", "form", "markdown", "click"],
      ...(input.expectations ?? {}),
    },
  });
}

export function emailSupportScenario(input: Omit<ChannelScenarioInput, "channel"> & {
  channel?: ConversationChannelInput;
}): HarnessScenario {
  return channelScenario({
    ...input,
    channel: input.channel ?? {
      channelId: "email",
      kind: "email",
      capabilities: {
        async: true,
        richText: true,
        threaded: true,
        attachments: true,
      },
    },
  });
}
