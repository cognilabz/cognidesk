import type { AssertionResult, ScenarioAssertionInput } from "./types.js";

export async function evaluateScenarioAssertions(input: ScenarioAssertionInput): Promise<AssertionResult[]> {
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

    if (assertion.type === "eventPayloadMatches") {
      const matchingEvent = input.events.find((event) =>
        event.type === assertion.eventType
        && partialObjectMatches(event.data, assertion.expected)
      );
      results.push({
        assertionId: assertion.id,
        passed: Boolean(matchingEvent),
        reasoning: matchingEvent
          ? `Runtime event '${assertion.eventType}' matched the expected payload.`
          : `Runtime event '${assertion.eventType}' did not match the expected payload.`,
      });
      continue;
    }

    if (assertion.type === "policyBlocked") {
      const policyBlock = findPolicyBlock(input, assertion);
      results.push({
        assertionId: assertion.id,
        passed: Boolean(policyBlock),
        reasoning: policyBlock
          ? `Policy block '${policyBlock.code}' was emitted.`
          : "No matching policy block was emitted.",
      });
      continue;
    }

    if (assertion.type === "toolCalled" || assertion.type === "toolNotCalled") {
      const called = input.events.some((event) =>
        (event.type === "tool.started" || event.type === "tool.completed")
        && event.data.toolName === assertion.toolName
      );
      const passed = assertion.type === "toolCalled" ? called : !called;
      results.push({
        assertionId: assertion.id,
        passed,
        reasoning: assertion.type === "toolCalled"
          ? passed
            ? `Tool '${assertion.toolName}' was called.`
            : `Tool '${assertion.toolName}' was not called.`
          : passed
            ? `Tool '${assertion.toolName}' was not called.`
            : `Tool '${assertion.toolName}' was called.`,
      });
      continue;
    }

    if (assertion.type === "assistantMaxWords") {
      const words = assistantTranscript(input).split(/\s+/).filter(Boolean);
      const passed = words.length <= assertion.maxWords;
      results.push({
        assertionId: assertion.id,
        passed,
        reasoning: passed
          ? `Assistant transcript has ${words.length} word(s), within ${assertion.maxWords}.`
          : `Assistant transcript has ${words.length} word(s), above ${assertion.maxWords}.`,
      });
      continue;
    }

    if (assertion.type === "assistantMaxCharacters") {
      const text = assistantTranscript(input);
      const passed = text.length <= assertion.maxCharacters;
      results.push({
        assertionId: assertion.id,
        passed,
        reasoning: passed
          ? `Assistant transcript has ${text.length} character(s), within ${assertion.maxCharacters}.`
          : `Assistant transcript has ${text.length} character(s), above ${assertion.maxCharacters}.`,
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

function findPolicyBlock(
  input: ScenarioAssertionInput,
  assertion: { code?: string; toolName?: string },
) {
  for (const event of input.events) {
    if (event.type !== "tool.completed") continue;
    if (!event.data.policyBlock) continue;
    if (assertion.toolName && event.data.toolName !== assertion.toolName) continue;
    if (assertion.code && event.data.policyBlock.code !== assertion.code) continue;
    return event.data.policyBlock;
  }
  return null;
}

function partialObjectMatches(actual: unknown, expected: Record<string, unknown>): boolean {
  if (!actual || typeof actual !== "object" || Array.isArray(actual)) return false;
  const record = actual as Record<string, unknown>;
  return Object.entries(expected).every(([key, expectedValue]) =>
    valueMatches(record[key], expectedValue)
  );
}

function valueMatches(actual: unknown, expected: unknown): boolean {
  if (expected && typeof expected === "object" && !Array.isArray(expected)) {
    if (!actual || typeof actual !== "object" || Array.isArray(actual)) return false;
    return partialObjectMatches(actual, expected as Record<string, unknown>);
  }
  if (Array.isArray(expected)) {
    return Array.isArray(actual)
      && expected.every((item, index) => valueMatches(actual[index], item));
  }
  return Object.is(actual, expected);
}

function assistantTranscript(input: ScenarioAssertionInput) {
  return input.transcript
    .filter((turn) => turn.role === "assistant")
    .map((turn) => turn.content)
    .join("\n");
}
