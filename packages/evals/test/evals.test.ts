import { describe, expect, it } from "vitest";
import {
  assistantOmitsTermsAssertion,
  channelScenario,
  emailStructureAssertion,
  emailSupportScenario,
  evalSuite,
  runEvalSuite,
  summarizeEvalResults,
  voiceSupportScenario,
  type HarnessAgentClient,
} from "../src/index.js";

describe("@cognidesk/evals", () => {
  it("runs channel scenarios through the shared harness with channel context", async () => {
    const created: unknown[] = [];
    const client: HarnessAgentClient = {
      createConversation: async (input) => {
        created.push(input);
        return { id: "conversation_1" };
      },
      sendMessage: async ({ text }) => ({
        text: `Formal reply: ${text}`,
        activeJourneyId: "email-support",
        events: [{
          id: "event_1",
          conversationId: "conversation_1",
          offset: 1,
          type: "journey.activated",
          createdAt: "2026-06-17T00:00:00.000Z",
          data: { journeyId: "email-support", stateIds: ["draft"] },
        }],
      }),
    };

    const scenario = emailSupportScenario({
      id: "email-refund",
      agentId: "support-agent",
      user: {
        identity: "Customer writing by email",
        goal: "Get refund timing",
        scriptedTurns: ["When will my refund arrive?"],
      },
      expectations: {
        activeJourneyIds: ["email-support"],
        minAssistantTurns: 1,
      },
    });
    const result = await runEvalSuite(evalSuite({
      id: "omnichannel-support",
      scenarios: [scenario],
    }), { client });

    expect(result.passed).toBe(true);
    expect(result.summary).toEqual({ total: 1, passed: 1, failed: 0, errored: 0, averageScore: 1 });
    expect(created).toEqual([{
      agentId: "support-agent",
      channel: {
        channelId: "email",
        kind: "email",
        capabilities: {
          async: true,
          richText: true,
          threaded: true,
          attachments: true,
        },
      },
      context: {},
    }]);
  });

  it("adds deterministic channel expectation assertions", async () => {
    const scenario = channelScenario({
      id: "voice-handoff",
      agentId: "support-agent",
      channel: { channelId: "voice.twilio", kind: "voice", provider: "twilio" },
      user: {
        identity: "Caller",
        goal: "Reach a person",
        scriptedTurns: ["I need a person."],
      },
      expectations: {
        handoffRequested: true,
        handoffCompleted: true,
        handoffTarget: { providerPackageId: "contact-center.genesys-cloud" },
        policyBlocks: [{ code: "missing-policy", toolName: "refund.issue" }],
        eventPayloads: [{
          eventType: "policy.evaluated",
          expected: { channelPolicyId: "voice-support" },
        }],
        toolCalls: ["ticket.lookup"],
        forbiddenToolCalls: ["refund.issue"],
        assistantMustNotMention: ["button"],
        assistantMustNotExpose: ["4111 1111 1111 1111"],
        maxAssistantWords: 24,
        maxAssistantCharacters: 160,
        emailStructure: {
          greeting: true,
          signoff: true,
        },
      },
    });

    expect(scenario.assertions?.map((assertion) => assertion.id)).toEqual([
      "voice-handoff:handoff-requested",
      "voice-handoff:handoff-completed",
      "voice-handoff:handoff-target",
      "voice-handoff:policy-block:missing-policy:refund.issue",
      "voice-handoff:event-payload:policy.evaluated",
      "voice-handoff:assistant-omits-channel-forbidden-terms",
      "voice-handoff:assistant-omits-sensitive-values",
      "voice-handoff:tool-called:ticket.lookup",
      "voice-handoff:tool-not-called:refund.issue",
      "voice-handoff:assistant-max-words",
      "voice-handoff:assistant-max-characters",
      "voice-handoff:email-structure",
    ]);
  });

  it("provides voice defaults that forbid UI language", async () => {
    const scenario = voiceSupportScenario({
      id: "voice-policy",
      agentId: "support-agent",
      user: {
        identity: "Caller",
        goal: "Ask a policy question",
        scriptedTurns: ["Can I bring sports equipment?"],
      },
    });

    const omitAssertion = scenario.assertions?.find((assertion) => assertion.id === "voice-policy:assistant-omits-channel-forbidden-terms");
    expect(omitAssertion).toBeDefined();
    expect(scenario.channel).toMatchObject({ channelId: "voice", kind: "voice" });
  });

  it("summarizes mixed results", () => {
    expect(summarizeEvalResults([
      {
        scenarioId: "passed",
        conversationId: "c1",
        status: "passed",
        transcript: [],
        events: [],
        assertions: [],
        judgements: [],
        score: 0.8,
        passed: true,
      },
      {
        scenarioId: "failed",
        conversationId: "c2",
        status: "failed",
        transcript: [],
        events: [],
        assertions: [],
        judgements: [],
        score: 0.2,
        passed: false,
      },
      {
        scenarioId: "error",
        conversationId: "",
        status: "error",
        transcript: [],
        events: [],
        assertions: [],
        judgements: [],
        score: 0,
        passed: false,
      },
    ])).toEqual({
      total: 3,
      passed: 1,
      failed: 1,
      errored: 1,
      averageScore: 1 / 3,
    });
  });

  it("checks omitted terms with exact literal matching", async () => {
    const assertion = assistantOmitsTermsAssertion("no-ui", ["button"]);
    expect(assertion.type).toBe("custom");
    if (assertion.type !== "custom") throw new Error("Expected a custom assertion.");
    const result = await assertion.evaluate({
      scenario: {
        id: "voice",
        agentId: "support-agent",
        user: {
          identity: "Caller",
          goal: "Support",
          scriptedTurns: ["Hello"],
        },
      },
      conversationId: "conversation_1",
      transcript: [{ role: "assistant", content: "Please click the button." }],
      events: [],
      activeJourneyIds: [],
    });

    expect(result).toEqual({
      passed: false,
      reasoning: "Assistant mentioned forbidden channel terms: button.",
    });
  });

  it("checks configured email structure deterministically", async () => {
    const assertion = emailStructureAssertion("email-shape", {
      subject: true,
      greeting: true,
      signoff: true,
    });
    if (assertion.type !== "custom") throw new Error("Expected a custom assertion.");

    expect(await assertion.evaluate({
      scenario: {
        id: "email",
        agentId: "support-agent",
        user: {
          identity: "Customer",
          goal: "Support",
          scriptedTurns: ["Hello"],
        },
      },
      conversationId: "conversation_1",
      transcript: [{
        role: "assistant",
        content: "Subject: Refund timing\n\nHello Mina,\n\nWe can help.\n\nBest,\nSupport",
      }],
      events: [],
      activeJourneyIds: [],
    })).toEqual({
      passed: true,
      reasoning: "Assistant matched configured email structure.",
    });
  });
});
