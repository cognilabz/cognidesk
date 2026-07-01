import { describe, expect, it } from "vitest";
import {
  cognideskSessionContextKey,
  createAgent,
  createRuntime,
  defineChannelEvent,
  defineChannelEventSource,
  defineChannelPolicy,
  handleChannelEventFromSource,
} from "../../src/index.js";
import { RecordingStorage, createModels } from "../runtime/fixtures.js";

describe("channel event intake runtime", () => {
  it("handles text-bearing customer Channel Events as model turns", async () => {
      const agent = createAgent("agent_primary", {
        instructions: "Help customers with flights.",
      }).compile();
      const storage = new RecordingStorage();
      const runtime = createRuntime({
        storage,
        agent,
        models: createModels(),
      });
      const conversation = await runtime.createConversation({
        agentId: agent.id,
        context: {},
      });

      const result = await runtime.handleChannelEvent({
        conversationId: conversation.id,
        event: {
          nature: "message",
          direction: "inbound",
          intent: "customer-message",
          actor: { type: "customer", id: "customer_1" },
          channel: {
            channelId: "chat.web",
            kind: "chat",
            provider: "web",
            externalThreadId: "thread_1",
          },
          payload: {
            text: "Can you check my ticket?",
          },
          source: {
            sourceType: "application",
            eventId: "evt_1",
            streamId: "thread_1",
          },
        },
      });

      expect(result.intake.outcome).toBe("accepted");
      expect(result.intake.bindingOutcome).toBe("resume-existing");
      expect(result.disposition).toBe("model-turn");
      expect(result.text).toContain("faq-journey_primary");
      expect(result.turn?.conversation.id).toBe(conversation.id);

      const events = await runtime.listEvents(conversation.id);
      expect(events.map((event) => event.type)).toEqual(expect.arrayContaining([
        "channel.event.received",
        "channel.received",
        "channel.sent",
        "message.completed",
      ]));
      expect(events.find((event) => event.type === "channel.event.received")?.data).toMatchObject({
        nature: "message",
        bindingOutcome: "resume-existing",
        handlingDisposition: "model-turn",
        source: {
          eventId: "evt_1",
          streamId: "thread_1",
        },
      });
      expect(events.find((event) => event.type === "channel.received")?.data).toMatchObject({
        channel: {
          kind: "chat",
          provider: "web",
          externalThreadId: "thread_1",
        },
        text: "Can you check my ticket?",
      });
    });

    it("deduplicates repeated Channel Events from the same source stream", async () => {
      const agent = createAgent("agent_primary", {
        instructions: "Help customers with flights.",
      }).compile();
      const storage = new RecordingStorage();
      const runtime = createRuntime({
        storage,
        agent,
        models: createModels(),
      });
      const conversation = await runtime.createConversation({
        agentId: agent.id,
        context: {},
      });
      const input = {
        conversationId: conversation.id,
        event: {
          nature: "message" as const,
          channel: "chat" as const,
          payload: { text: "Can you check my ticket?" },
          source: {
            sourceType: "provider-adapter" as const,
            eventId: "provider_evt_1",
            streamId: "thread_1",
          },
        },
      };

      const first = await runtime.handleChannelEvent(input);
      const second = await runtime.handleChannelEvent(input);

      expect(first.intake.outcome).toBe("accepted");
      expect(second.intake).toMatchObject({
        outcome: "ignored",
        reasonCode: "duplicate-channel-event",
        conversationId: conversation.id,
      });
      expect(second.events).toEqual([]);
      const events = await runtime.listEvents(conversation.id);
      expect(events.filter((event) => event.type === "channel.event.received")).toHaveLength(1);
      expect(events.filter((event) => event.type === "message.completed" && event.data.intermediate !== true)).toHaveLength(2);
    });

    it("runs provider adapter sources through verify, normalize, identity, binding, and intake", async () => {
      const storage = new RecordingStorage();
      const runtime = createRuntime({
        storage,
        agent: createAgent("agent_primary", {
          instructions: "Help customers with flights.",
        }).compile(),
        models: createModels(),
      });
      const conversation = await runtime.createConversation({
        agentId: "agent_primary",
        context: {},
      });
      const source = defineChannelEventSource<{
        id: string;
        threadId: string;
        text: string;
      }>({
        id: "gmail.inbound",
        channel: { channelId: "gmail", kind: "email", provider: "gmail" },
        verify(raw) {
          return raw.id ? { verified: true } : { verified: false, reason: "missing id" };
        },
        normalize({ raw, channel }) {
          return {
            nature: "message",
            direction: "inbound",
            intent: "customer-message",
            actor: { type: "customer" },
            channel: channel ?? "email",
            payload: { text: raw.text },
            source: {
              sourceType: "provider-adapter",
              provider: "gmail",
              eventId: raw.id,
              streamId: raw.threadId,
            },
          };
        },
        identity(_event, raw) {
          return {
            dedupeKey: `gmail:${raw.threadId}:${raw.id}`,
            streamId: raw.threadId,
          };
        },
        bind() {
          return {
            outcome: "resume-existing",
            conversationId: conversation.id,
          };
        },
      });

      const result = await handleChannelEventFromSource(runtime, source, {
        raw: {
          id: "history_123",
          threadId: "thread_123",
          text: "Can you check my ticket?",
        },
      });

      expect(result.intake).toMatchObject({
        outcome: "accepted",
        bindingOutcome: "resume-existing",
        conversationId: conversation.id,
      });
      expect(result.channelEvent).toMatchObject({
        channel: {
          kind: "email",
          provider: "gmail",
        },
        identity: {
          dedupeKey: "gmail:thread_123:history_123",
          streamId: "thread_123",
        },
        source: {
          sourceType: "provider-adapter",
          provider: "gmail",
          eventId: "history_123",
          streamId: "thread_123",
        },
      });
    });

    it("passes privacy settings when Channel Events start a new Conversation", async () => {
      const storage = new RecordingStorage();
      const runtime = createRuntime({
        storage,
        agent: createAgent("agent_primary", {
          instructions: "Help customers with flights.",
        }).compile(),
        models: createModels(),
      });

      const result = await runtime.handleChannelEvent({
        createConversation: {
          agentId: "agent_primary",
          context: { customerId: "customer_1" },
          privacy: {
            traceContent: "none",
            customerRelationVisibility: "none",
            masks: [{ pattern: "CD-[A-Z]{2}\\d{3}-\\d{4}", replacement: "[booking]" }],
          },
        },
        event: {
          nature: "message",
          direction: "inbound",
          intent: "customer-message",
          channel: "chat",
          payload: { text: "Please check CD-CL102-4821." },
        },
      });

      const conversation = result.conversation;
      expect(conversation).toBeDefined();
      if (!conversation) throw new Error("Expected Channel Event to create a Conversation.");

      expect(result.intake).toMatchObject({
        outcome: "accepted",
        bindingOutcome: "start-new",
        conversationId: conversation.id,
      });
      expect(conversation.context).toMatchObject({
        customerId: "customer_1",
        [cognideskSessionContextKey]: {
          privacy: {
            traceContent: "none",
            customerRelationVisibility: "none",
            masks: [{ pattern: "CD-[A-Z]{2}\\d{3}-\\d{4}", replacement: "[booking]" }],
          },
        },
      });

      const rawEvents = JSON.stringify(await runtime.listEvents(conversation.id));
      expect(rawEvents).not.toContain("CD-CL102-4821");
      expect(rawEvents).toContain("message.completed");
    });

    it("records non-message Channel Events without running a model", async () => {
      const storage = new RecordingStorage();
      const runtime = createRuntime({ storage });
      const conversation = await runtime.createConversation({
        agentId: "agent_primary",
        context: {},
      });

      const result = await runtime.handleChannelEvent({
        conversationId: conversation.id,
        event: {
          nature: "provider.object.updated",
          direction: "inbound",
          intent: "provider-update",
          channel: {
            channelId: "zendesk.ticketing",
            kind: "ticketing",
            provider: "zendesk",
            externalThreadId: "ticket_123",
          },
          payload: {
            providerObject: { id: "ticket_123", status: "open" },
          },
          source: {
            sourceType: "provider-adapter",
            provider: "zendesk",
            eventId: "webhook_1",
            streamId: "ticket_123",
            raw: { type: "ticket.updated" },
          },
        },
      });

      expect(result.intake.outcome).toBe("accepted");
      expect(result.intake.bindingOutcome).toBe("resume-existing");
      expect(result.disposition).toBe("record-only");
      expect(result.turn).toBeUndefined();
      expect(result.events).toHaveLength(1);
      expect(result.events[0]?.type).toBe("channel.event.received");
      expect(result.events[0]?.data).toMatchObject({
        channel: {
          kind: "ticketing",
          provider: "zendesk",
          externalThreadId: "ticket_123",
        },
        nature: "provider.object.updated",
        bindingOutcome: "resume-existing",
        handlingDisposition: "record-only",
        payload: {
          providerObject: { id: "ticket_123", status: "open" },
        },
      });
    });

    it("fails closed when configured channel intake does not enable receive capability", async () => {
      const runtime = createRuntime({
        storage: new RecordingStorage(),
        channels: [defineChannelPolicy({
          id: "email",
          channel: "email",
          enabledCapabilities: ["draft"],
        })],
      });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: "email",
      });

      const result = await runtime.handleChannelEvent({
        conversationId: conversation.id,
        event: {
          nature: "message",
          channel: "email",
          payload: { text: "hello" },
        },
      });

      expect(result.intake).toMatchObject({
        outcome: "blocked",
        bindingOutcome: "resume-existing",
        reasonCode: "capability-not-enabled",
        blockers: [{
          code: "capability-not-enabled",
          kind: "missing-configuration",
        }],
      });
      expect(result.disposition).toBe("no-op");
      expect(result.events).toEqual([]);
    });

    it("provides Core SDK wrappers for outbound contact, channel handoff, and channel handoff review", async () => {
      const runtime = createRuntime({ storage: new RecordingStorage() });
      const conversation = await runtime.createConversation({
        agentId: "support",
        context: {},
        channel: "messaging",
      });

      const outbound = await runtime.requestOutboundContact({
        conversationId: conversation.id,
        channel: "messaging",
        text: "Follow-up message",
        payload: { templateId: "tmpl_1" },
      });
      const handoffRequest = await runtime.requestChannelHandoff({
        conversationId: conversation.id,
        fromChannel: "messaging",
        toChannel: "voice",
        reasonCode: "sdk-user-defined",
        payload: { channelSegmentId: "voice_segment_1" },
      });
      const handoff = await runtime.requestChannelHandoffReview({
        conversationId: conversation.id,
        channel: "messaging",
        reasonCode: "sdk-user-defined",
        payload: { nextChannel: "voice" },
      });

      expect(outbound.channelEvent).toMatchObject({
        nature: "outbound.contact.requested",
        direction: "outbound",
        intent: "outbound-contact",
      });
      expect(outbound.disposition).toBe("provider-operation");
      expect(outbound.events[0]?.type).toBe("channel.event.received");
      expect(handoffRequest.channelEvent).toMatchObject({
        nature: "channel.handoff.requested",
        direction: "internal",
        intent: "channel-handoff",
        payload: {
          reasonCode: "sdk-user-defined",
          toChannel: "voice",
        },
      });
      expect(handoffRequest.disposition).toBe("handoff-review");
      expect(handoffRequest.events[0]?.type).toBe("channel.event.received");
      expect(handoff.channelEvent).toMatchObject({
        nature: "custom",
        direction: "internal",
        intent: "handoff-review",
      });
      expect(handoff.disposition).toBe("handoff-review");
      expect(handoff.events[0]?.type).toBe("channel.event.received");
    });

    it("returns blocked intake when an explicit binding cannot resolve", async () => {
      const runtime = createRuntime({ storage: new RecordingStorage() });

      const result = await runtime.handleChannelEvent({
        conversationId: "missing_conversation",
        event: {
          nature: "message",
          channel: "chat",
          payload: { text: "hello" },
        },
      });

      expect(result.intake).toMatchObject({
        outcome: "blocked",
        bindingOutcome: "blocked",
        reason: "Conversation 'missing_conversation' does not exist.",
      });
      expect(result.disposition).toBe("no-op");
      expect(result.events).toEqual([]);
    });

    it("fails closed for unsupported Channel Event kind input", () => {
      expect(() => defineChannelEvent({
        kind: "message",
        channel: "chat",
        payload: { text: "hello" },
      } as unknown as Parameters<typeof defineChannelEvent>[0])).toThrow(
        "Channel Event uses nature; kind is not supported.",
      );
    });

    it("requires Channel Event nature", () => {
      expect(() => defineChannelEvent({
        channel: "chat",
        payload: { text: "hello" },
      } as unknown as Parameters<typeof defineChannelEvent>[0])).toThrow("Channel Event requires nature.");
    });

    it("normalizes Channel Events with nature", () => {
      const event = defineChannelEvent({
        nature: "message",
        channel: "chat",
        payload: { text: "hello" },
      });

      expect(event.nature).toBe("message");
      expect(event.direction).toBe("inbound");
      expect(event.channel.kind).toBe("chat");
    });
});
