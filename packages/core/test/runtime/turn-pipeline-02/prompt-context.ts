import {
  createAgent,
  createModels,
  createRuntime,
  expect,
  it,
  RecordingStorage,
} from "./helpers.js";
import type { TextGenerationInput } from "./helpers.js";

export function registerPromptContextTests() {
  it("injects configured persona, channel policy, and resolved SDK context into the response prompt", async () => {
    const captured: { input?: TextGenerationInput } = {};
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
      persona: {
        brand: "FlightCo",
        voice: "calm",
      },
      channels: {
        email: {
          includeGreeting: true,
          tone: "formal_helpful",
        },
        "email-support": {
          maxWords: 5,
        },
      },
      handoff: {
        owner: "sdk-user",
        targets: ["servicenow"],
      },
    }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async (input) => {
            captured.input = input;
            return { text: "This response should be trimmed after five words." };
          },
        },
      }),
      context: {
        resolve: ({ channel }) => ({
          customer: {
            name: "Mina",
            email: "secret@example.com",
          },
          locale: channel?.locale,
        }),
        redact: ["customer.email"],
      },
      channels: [{
        id: "email-support",
        channel: "email",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: ["email.gmail"],
        enabledCapabilities: ["receive", "send", "draft", "handoff"],
        flowActivations: [],
        behavior: {
          tone: "formal_helpful",
          maxWords: 5,
          allowMarkdown: false,
          draftFirst: true,
        },
        handoff: {
          enabled: true,
          providerPackageIds: ["ticketing.servicenow"],
          destinations: ["servicenow"],
          sdkControlled: true,
          policyIds: ["handoff"],
        },
        policies: {
          handoff: { queues: ["tier-1"] },
          consent: { types: ["privacy", "recording"] },
        },
      }],
    });
    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {
        customer: {
          id: "cus_123",
          email: "stored@example.com",
        },
      },
      channel: {
        channelId: "email-support",
        kind: "email",
        provider: "gmail",
        locale: "en-US",
        timezone: "America/New_York",
        externalThreadId: "thread_123",
      },
    });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you help by email?",
    });
    const events = await runtime.listEvents(conversation.id);
    const payload = captured.input?.promptPayload as Record<string, any>;
    const systemPrompt = captured.input?.messages[0]?.content ?? "";

    expect(result.text).toBe("This response should be trimmed");
    expect(payload.channel.kind).toBe("email");
    expect(payload.channelCapabilities.threaded).toBe(true);
    expect(payload.locale).toBe("en-US");
    expect(payload.timezone).toBe("America/New_York");
    expect(payload.persona.brand).toBe("FlightCo");
    expect(payload.agentChannelPolicy).toMatchObject({
      includeGreeting: true,
      tone: "formal_helpful",
      maxWords: 5,
    });
    expect(payload.channelPolicy).toMatchObject({
      id: "email-support",
      behavior: {
        tone: "formal_helpful",
        maxWords: 5,
        allowMarkdown: false,
        draftFirst: true,
      },
      handoff: {
        enabled: true,
        destinations: ["servicenow"],
      },
    });
    expect(payload.handoffPolicy).toMatchObject({
      agent: {
        owner: "sdk-user",
      },
      channel: {
        enabled: true,
      },
    });
    expect(payload.resolvedContext.customer.name).toBe("Mina");
    expect(payload.resolvedContext.customer.email).toBeUndefined();
    expect(payload.conversationContext.customer.id).toBe("cus_123");
    expect(payload.conversationContext.customer.email).toBeUndefined();
    expect(JSON.stringify(payload)).not.toContain("secret@example.com");
    expect(systemPrompt).toContain("Agent persona:");
    expect(systemPrompt).toContain("Channel policy:");
    expect(systemPrompt).toContain("Resolved application context:");
    expect(systemPrompt).toContain("formal_helpful");
    expect(events.map((event) => event.type)).toEqual(expect.arrayContaining([
      "context.resolved",
      "policy.evaluated",
      "message.generated",
    ]));
    expect(events.find((event) => event.type === "message.generated")).toMatchObject({
      data: {
        textLength: result.text.length,
        policyApplied: {
          maxWords: 5,
          truncated: true,
        },
      },
    });

    const explanation = await runtime.debug.explainTurn({
      conversationId: conversation.id,
      text: "Explain this turn.",
    });
    expect(explanation.resolvedContextKeys).toEqual(["customer", "locale"]);
    expect(explanation.channelPolicy).toMatchObject({ id: "email-support" });
  });

  it("does not expose an unrelated same-kind concrete runtime channel policy", async () => {
    const captured: { input?: TextGenerationInput } = {};
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async (input) => {
            captured.input = input;
            return { text: "This response should remain untrimmed." };
          },
        },
      }),
      channels: [{
        id: "email-support",
        channel: "email",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: ["email.gmail"],
        enabledCapabilities: ["receive", "send", "handoff"],
        flowActivations: [],
        behavior: {
          tone: "support",
          maxWords: 1,
        },
        handoff: {
          enabled: true,
          providerPackageIds: ["ticketing.servicenow"],
          destinations: ["support"],
          sdkControlled: true,
          policyIds: ["handoff"],
        },
        policies: {},
      }],
    });
    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
      channel: { channelId: "email-billing", kind: "email" },
    });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you help by email?",
    });
    const payload = captured.input?.promptPayload as Record<string, any>;

    expect(result.text).toBe("This response should remain untrimmed.");
    expect(payload.channelPolicy).toBeNull();
    expect(payload.handoffPolicy).toBeNull();
  });
}
