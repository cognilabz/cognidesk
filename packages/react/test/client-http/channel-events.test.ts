import { describe, expect, it } from "vitest";
import { createChannelEventInput, createCognideskClient } from "../../src/index.js";

describe("createCognideskClient channel-event methods", () => {
  it("posts ergonomic channel-event client methods for adapter code", async () => {
      const requests: Array<{ operation: string; url: string; body: any; signal: AbortSignal | null }> = [];
      const operations: string[] = [];
      const controller = new AbortController();
      const emailChannel = {
        channelId: "gmail-thread-123",
        kind: "email" as const,
        provider: "gmail",
        externalThreadId: "thread_123",
      };
      const ticketChannel = {
        channelId: "zendesk-ticket-123",
        kind: "ticketing" as const,
        provider: "zendesk",
        externalThreadId: "ticket_123",
      };
      const client = createCognideskClient({
        baseUrl: "http://localhost/api",
        requestOptions(context) {
          operations.push(context.operation);
          return undefined;
        },
        fetch: async (url, init) => {
          const body = JSON.parse(String(init?.body ?? "{}")) as any;
          requests.push({
            operation: operations[operations.length - 1] ?? "",
            url: String(url),
            body,
            signal: init?.signal instanceof AbortSignal ? init.signal : null,
          });
          return Response.json({
            channelEvent: {
              ...body.event,
              direction: body.event.direction ?? "inbound",
            },
            intake: {
              outcome: "accepted",
              bindingOutcome: body.binding?.outcome ?? "not-required",
              ...(body.conversationId ? { conversationId: body.conversationId } : {}),
              handling: "started",
            },
            disposition: body.handling?.disposition ?? "record-only",
            events: [],
          });
        },
      });

      await client.receiveMessage({
        conversationId: "conversation_1",
        channel: emailChannel,
        text: "Please refund my ticket.",
        provider: "gmail",
        eventId: "history_123",
        dedupeKey: "gmail:thread_1:history_123",
        idempotencyKey: "retry-safe-history-123",
        identityStreamId: "gmail:thread_1",
        sequence: 123,
        raw: { historyId: "123" },
        turn: { source: "gmail" },
        signal: controller.signal,
      });
      await client.recordProviderUpdate({
        conversationId: "conversation_1",
        channel: ticketChannel,
        providerObject: { id: "ticket_123" },
        status: "open",
        provider: "zendesk",
      });
      await client.finalizeVoiceTurn({
        conversationId: "conversation_voice",
        transcript: "I need an agent.",
        provider: "twilio",
      });
      await client.requestOutboundContact({
        agentId: "flight-service",
        channel: { channelId: "sms-outbound", kind: "sms", provider: "twilio" },
        payload: { to: "+15550100", templateId: "boarding-pass" },
      });
      await client.submitScheduledEvent({
        conversationId: "conversation_1",
        channel: "email",
        payload: { scheduleId: "followup_1" },
      });
      await client.recordChannelOutputResolution({
        conversationId: "conversation_1",
        channel: emailChannel,
        payload: { draftId: "draft_1", status: "approved" },
      });
      await client.requestChannelHandoff({
        conversationId: "conversation_1",
        fromChannel: emailChannel,
        channel: { channelId: "voice-segment-1", kind: "voice", provider: "twilio" },
        reasonCode: "sdk-user-defined",
        payload: { channelSegmentId: "voice-segment-1" },
      });
      await client.requestChannelHandoffReview({
        conversationId: "conversation_1",
        channel: ticketChannel,
        payload: { queue: "tier-2" },
      });

      expect(requests.map((request) => request.url)).toEqual(Array.from({ length: 8 }, () => "http://localhost/api/channel-events"));
      expect(requests.map((request) => request.operation)).toEqual([
        "receiveMessage",
        "recordProviderUpdate",
        "finalizeVoiceTurn",
        "requestOutboundContact",
        "submitScheduledEvent",
        "recordChannelOutputResolution",
        "requestChannelHandoff",
        "requestChannelHandoffReview",
      ]);
      expect(requests[0]?.signal).toBe(controller.signal);
      expect(requests.map((request) => request.body.event.nature)).toEqual([
        "message",
        "provider.object.updated",
        "voice.turn.finalized",
        "outbound.contact.requested",
        "schedule.due",
        "output.resolution",
        "channel.handoff.requested",
        "custom",
      ]);
      expect(requests[0]?.body).toMatchObject({
        conversationId: "conversation_1",
        event: {
          channel: emailChannel,
          direction: "inbound",
          intent: "customer-message",
          actor: { type: "customer" },
          payload: {
            text: "Please refund my ticket.",
            turn: { source: "gmail" },
          },
          identity: {
            dedupeKey: "gmail:thread_1:history_123",
            idempotencyKey: "retry-safe-history-123",
            streamId: "gmail:thread_1",
            sequence: 123,
          },
          source: {
            sourceType: "provider-adapter",
            provider: "gmail",
            eventId: "history_123",
            raw: { historyId: "123" },
          },
        },
        handling: { turn: { source: "gmail" } },
      });
      expect(requests[4]?.body.event.source).toEqual({ sourceType: "schedule-adapter" });
      expect(requests[5]?.body.handling).toEqual({ disposition: "output-resolution" });
      expect(requests[6]?.body).toMatchObject({
        event: {
          intent: "channel-handoff",
          actor: { type: "application" },
          payload: {
            reasonCode: "sdk-user-defined",
            channelSegmentId: "voice-segment-1",
          },
        },
        handling: { disposition: "handoff-review" },
      });
      expect(requests[7]?.body).toMatchObject({
        event: {
          intent: "handoff-review",
          actor: { type: "operator" },
        },
        handling: { disposition: "handoff-review" },
      });
    });

    it("uses top-level nature for wrapped channel events and rejects top-level kind", () => {
      const input = createChannelEventInput({
        nature: "message",
        event: {
          channel: { channelId: "gmail-thread-123", kind: "email", provider: "gmail" },
          text: "Please refund my ticket.",
        },
      });

      expect(input.event).toMatchObject({
        nature: "message",
        direction: "inbound",
        intent: "customer-message",
      });
      expect(() => createChannelEventInput({
        kind: "message",
        event: {
          channel: { channelId: "gmail-thread-123", kind: "email", provider: "gmail" },
          text: "Please refund my ticket.",
        },
      } as never)).toThrow("Channel Event uses nature; kind is not supported.");
    });
});
