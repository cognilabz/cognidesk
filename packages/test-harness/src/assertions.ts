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
