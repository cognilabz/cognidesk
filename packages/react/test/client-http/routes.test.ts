import { describe, expect, it } from "vitest";
import { createCognideskClient } from "../../src/index.js";

describe("createCognideskClient HTTP route calls", () => {
  it("posts conversations and channel events to the HTTP adapter routes", async () => {
      const requests: Array<{ url: string; body: unknown }> = [];
      const channel = {
        channelId: "web-chat",
        kind: "chat" as const,
        provider: "web",
        metadata: { surface: "test" },
      };
      const client = createCognideskClient({
        baseUrl: "http://localhost/api/",
        fetch: async (url, init) => {
          requests.push({ url: String(url), body: JSON.parse(String(init?.body ?? "{}")) as unknown });
          if (String(url).includes("/conversations?")) {
            return Response.json({
              conversations: [
                {
                  id: "conversation_1",
                  agentId: "flight-service",
                  lifecycle: "active",
                  context: {},
                  createdAt: "2026-05-25T00:00:00.000Z",
                  updatedAt: "2026-05-25T00:00:00.000Z",
                },
              ],
            });
          }
          if (String(url).endsWith("/conversations")) {
            return Response.json({
              conversation: {
                id: "conversation_1",
                agentId: "flight-service",
                lifecycle: "active",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
            });
          }
          if (String(url).endsWith("/voice/conversations")) {
            return Response.json({
              conversation: {
                id: "conversation_voice",
                agentId: "flight-service",
                lifecycle: "active",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
              channelSegment: {
                id: "voice_segment_1",
                conversationId: "conversation_voice",
                channel: "voice",
                startedAt: "2026-05-25T00:00:00.000Z",
              },
              connection: {
                id: "voice_connection_1",
                channelSegmentId: "voice_segment_1",
                status: "starting",
                adapter: "cognidesk-voice-websocket",
              },
              socket: {
                url: "ws://localhost/api/voice/connections/voice_connection_1/socket?token=voice-token",
                token: "voice-token",
                expiresAt: "2026-05-25T00:01:00.000Z",
                protocol: "cognidesk.voice.v1",
              },
              events: [],
            });
          }
          if (String(url).endsWith("/voice-segments")) {
            return Response.json({
              conversation: {
                id: "conversation_1",
                agentId: "flight-service",
                lifecycle: "active",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
              channelSegment: {
                id: "voice_segment_2",
                conversationId: "conversation_1",
                channel: "voice",
                startedAt: "2026-05-25T00:00:00.000Z",
              },
              connection: {
                id: "voice_connection_2",
                channelSegmentId: "voice_segment_2",
                status: "starting",
                adapter: "cognidesk-voice-websocket",
              },
              socket: {
                url: "ws://localhost/api/voice/connections/voice_connection_2/socket?token=voice-token-2",
                token: "voice-token-2",
                expiresAt: "2026-05-25T00:01:00.000Z",
                protocol: "cognidesk.voice.v1",
              },
              events: [],
            });
          }
          if (String(url).endsWith("/widgets/prompt_1/submissions")) {
            return Response.json({
              event: {
                id: "event_1",
                conversationId: "conversation_1",
                offset: 1,
                type: "ui.submitted",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: JSON.parse(String(init?.body ?? "{}")) as unknown,
              },
            });
          }
          if (String(url).endsWith("/channel-events")) {
            const body = JSON.parse(String(init?.body ?? "{}")) as {
              conversationId?: string;
              event: { id?: string; payload?: { text?: string } };
            };
            return Response.json({
              channelEvent: {
                id: body.event.id,
                kind: "message",
                nature: "message",
                direction: "inbound",
                channel,
              },
              intake: {
                outcome: "accepted",
                bindingOutcome: "resume-existing",
                ...(body.conversationId ? { conversationId: body.conversationId } : {}),
                handling: "started",
              },
              events: [],
              text: body.event.payload?.text ? `Handled: ${body.event.payload.text}` : "ok",
              activeJourneyId: "ticket-status",
              disposition: "model-turn",
            });
          }
          if (String(url).endsWith("/handoff")) {
            return Response.json({
              conversation: {
                id: "conversation_1",
                agentId: "flight-service",
                lifecycle: "handoff",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
              event: {
                id: "event_2",
                conversationId: "conversation_1",
                offset: 2,
                type: "handoff.requested",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: JSON.parse(String(init?.body ?? "{}")) as unknown,
              },
            });
          }
          if (String(url).endsWith("/resume")) {
            return Response.json({
              conversation: {
                id: "conversation_1",
                agentId: "flight-service",
                lifecycle: "active",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
              event: {
                id: "event_3",
                conversationId: "conversation_1",
                offset: 3,
                type: "handoff.resumed",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: JSON.parse(String(init?.body ?? "{}")) as unknown,
              },
            });
          }
          if (String(url).endsWith("/intermediate-messages")) {
            return Response.json({
              events: [{
                id: "event_4",
                conversationId: "conversation_1",
                offset: 4,
                type: "message.completed",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: { text: "Still checking.", intermediate: true },
              }],
            });
          }
          if (String(url).endsWith("/preambles")) {
            return Response.json({
              text: "I am still checking that for you.",
              events: [{
                id: "event_5",
                conversationId: "conversation_1",
                offset: 5,
                type: "message.completed",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: { text: "I am still checking that for you.", intermediate: true },
              }],
            });
          }
          if (String(url).endsWith("/compact")) {
            return Response.json({
              summary: { summary: "Compacted." },
              snapshot: {
                conversationId: "conversation_1",
                lifecycle: "active",
                activeStateIds: [],
                compactionSummary: { summary: "Compacted." },
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
              events: [],
            });
          }
          if (String(url).endsWith("/snapshot")) {
            return Response.json({
              snapshot: {
                conversationId: "conversation_1",
                lifecycle: "active",
                activeStateIds: [],
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
            });
          }
          if (String(url).includes("/replay")) {
            return Response.json({
              conversation: {
                id: "conversation_1",
                agentId: "flight-service",
                lifecycle: "active",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
              snapshot: null,
              events: [],
              messages: [],
              openPrompts: [],
            });
          }
          if (String(url).endsWith("/close")) {
            return Response.json({
              conversation: {
                id: "conversation_1",
                agentId: "flight-service",
                lifecycle: "closed",
                context: {},
                createdAt: "2026-05-25T00:00:00.000Z",
                updatedAt: "2026-05-25T00:00:00.000Z",
              },
            });
          }
          if (String(url).includes("/custom-events/")) {
            return Response.json({
              event: {
                id: "event_custom",
                conversationId: "conversation_1",
                offset: 2,
                type: "custom.lead.captured",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: {},
              },
            });
          }
          if (String(url).includes("/journey-events/")) {
            return Response.json({
              event: {
                id: "event_journey",
                conversationId: "conversation_1",
                offset: 3,
                type: "journey.event.emitted",
                createdAt: "2026-05-25T00:00:00.000Z",
                data: {},
              },
              snapshot: null,
              events: [],
            });
          }
          return Response.json({ text: "ok", events: [], activeJourneyId: "ticket-status" });
        },
      });

      const created = await client.createConversation({ agentId: "flight-service", context: { locale: "en" }, channel });
      const listed = await client.listConversations({
        agentId: "flight-service",
        beforeUpdatedAt: "2026-05-27T00:00:00.000Z",
        afterUpdatedAt: "2026-05-24T00:00:00.000Z",
        limit: 5,
      });
      await client.listConversations({
        agentId: "flight-service",
        before: { updatedAt: "2026-05-27T00:00:00.000Z", id: "conversation_9" },
        after: { updatedAt: "2026-05-24T00:00:00.000Z", id: "conversation_1" },
        limit: 2,
      });
      await client.startVoiceConversation({
        agentId: "flight-service",
        context: { locale: "en" },
      });
      await client.startVoiceSegment(created.conversation.id);
      const handled = await client.handleChannelEvent({
        conversationId: created.conversation.id,
        event: {
          id: "provider_event_1",
          channel,
          kind: "message",
          nature: "message",
          direction: "inbound",
          intent: "customer-message",
          actor: { type: "customer" },
          payload: { text: "hello from channel event" },
        },
        app: { surface: "test" },
      });
      const sent = await client.sendMessage(created.conversation.id, "hello", { channel, turn: { source: "test" } });
      await client.submitWidget(created.conversation.id, {
        promptId: "prompt_1",
        widgetKind: "confirmation",
        output: { confirmed: true },
      });
      await client.emitCustomEvent(created.conversation.id, "lead.captured", {
        payload: { email: "alex@example.com" },
      });
      await client.emitJourneyEvent(created.conversation.id, "ticket.synced", {
        payload: { bookingReference: "ABC123" },
        routing: "targeted",
        target: { journeyId: "ticket-status", stateId: "wait" },
      });
      await client.requestHandoff(created.conversation.id, {
        reason: "Customer wants a human",
        summary: "Needs review.",
      });
      await client.resumeConversation(created.conversation.id, {
        reason: "Human finished review",
        payload: { ticketId: "T-1" },
      });
      await client.emitIntermediateMessage(created.conversation.id, {
        text: "Still checking.",
        visibleToModel: true,
      });
      await client.emitGeneratedPreamble(created.conversation.id, {
        purpose: "checking booking",
        maxWords: 8,
      });
      await client.compactConversation(created.conversation.id, {
        fromOffset: 1,
        toOffset: 4,
        schemaVersion: "test.v1",
      });
      await client.getSnapshot(created.conversation.id);
      await client.replayConversation(created.conversation.id, { afterOffset: 0 });
      await client.closeConversation(created.conversation.id, {
        reason: "Resolved",
      });

      expect(requests).toEqual([
        {
          url: "http://localhost/api/conversations",
          body: { agentId: "flight-service", context: { locale: "en" }, channel },
        },
        {
          url: "http://localhost/api/conversations?agentId=flight-service&before=2026-05-27T00%3A00%3A00.000Z&after=2026-05-24T00%3A00%3A00.000Z&limit=5",
          body: {},
        },
        {
          url: "http://localhost/api/conversations?agentId=flight-service&beforeUpdatedAt=2026-05-27T00%3A00%3A00.000Z&beforeId=conversation_9&afterUpdatedAt=2026-05-24T00%3A00%3A00.000Z&afterId=conversation_1&limit=2",
          body: {},
        },
        {
          url: "http://localhost/api/voice/conversations",
          body: { agentId: "flight-service", context: { locale: "en" } },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/voice-segments",
          body: {},
        },
        {
          url: "http://localhost/api/channel-events",
          body: {
            conversationId: "conversation_1",
            event: {
              id: "provider_event_1",
              channel,
              kind: "message",
              nature: "message",
              direction: "inbound",
              intent: "customer-message",
              actor: { type: "customer" },
              payload: { text: "hello from channel event" },
            },
            app: { surface: "test" },
          },
        },
        {
          url: "http://localhost/api/channel-events",
          body: {
            conversationId: "conversation_1",
            event: {
              channel,
              kind: "message",
              nature: "message",
              direction: "inbound",
              intent: "customer-message",
              actor: { type: "customer" },
              payload: { text: "hello", turn: { source: "test" } },
            },
            handling: { turn: { source: "test" } },
          },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/widgets/prompt_1/submissions",
          body: { widgetKind: "confirmation", output: { confirmed: true } },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/custom-events/lead.captured",
          body: { payload: { email: "alex@example.com" } },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/journey-events/ticket.synced",
          body: {
            payload: { bookingReference: "ABC123" },
            routing: "targeted",
            target: { journeyId: "ticket-status", stateId: "wait" },
          },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/handoff",
          body: { reason: "Customer wants a human", summary: "Needs review." },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/resume",
          body: { reason: "Human finished review", payload: { ticketId: "T-1" } },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/intermediate-messages",
          body: { text: "Still checking.", visibleToModel: true },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/preambles",
          body: { purpose: "checking booking", maxWords: 8 },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/compact",
          body: { fromOffset: 1, toOffset: 4, schemaVersion: "test.v1" },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/snapshot",
          body: {},
        },
        {
          url: "http://localhost/api/conversations/conversation_1/replay?after=0",
          body: {},
        },
        {
          url: "http://localhost/api/conversations/conversation_1/close",
          body: { reason: "Resolved" },
        },
      ]);
      expect(handled.intake).toEqual({
        outcome: "accepted",
        bindingOutcome: "resume-existing",
        conversationId: "conversation_1",
        handling: "started",
      });
      expect(listed.conversations).toHaveLength(1);
      expect(sent.activeJourneyId).toBe("ticket-status");
      expect(sent.text).toBe("Handled: hello");
    });
});
