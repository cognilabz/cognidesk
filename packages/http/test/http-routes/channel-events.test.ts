import { describe, expect, it, vi } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP channel-event routes", () => {
  it("handles channel events through the primary intake route", async () => {
      const runtime = new FakeRuntime();
      const handleChannelEvent = vi.spyOn(runtime, "handleChannelEvent");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
      });

      const response = await handler.handle(new Request("http://localhost/channel-events", {
        method: "POST",
        body: JSON.stringify({
          event: {
            id: "provider_event_1",
            conversationId: "conversation_1",
            channel: {
              channelId: "intercom-thread-123",
              kind: "chat",
              provider: "intercom",
              externalThreadId: "thread_123",
            },
            nature: "message",
            direction: "inbound",
            intent: "customer-message",
            actor: "customer",
            text: "Where is my ticket?",
            payload: { turn: { source: "intercom" } },
          },
          app: { surface: "support" },
        }),
      }));

      expect(response.status).toBe(200);
      const body = await response.json() as {
        channelEvent: { id?: string };
        intake: { outcome: string; conversationId?: string };
        text?: string;
        activeJourneyId?: string;
      };
      expect(body.intake).toEqual({
        outcome: "accepted",
        bindingOutcome: "resume-existing",
        conversationId: "conversation_1",
        handling: "started",
      });
      expect(body.channelEvent.id).toBe("provider_event_1");
      expect(body.text).toBe("Handled: Where is my ticket?");
      expect(body.activeJourneyId).toBe("ticket-status");
      expect(handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
        conversationId: "conversation_1",
        event: expect.objectContaining({
          id: "provider_event_1",
          channel: expect.objectContaining({
            channelId: "intercom-thread-123",
            kind: "chat",
            provider: "intercom",
          }),
          nature: "message",
          payload: expect.objectContaining({
            text: "Where is my ticket?",
            turn: { source: "intercom" },
          }),
        }),
        app: { surface: "support" },
      }));
    });

    it("accepts flat adapter channel-event submissions", async () => {
      const runtime = new FakeRuntime();
      const handleChannelEvent = vi.spyOn(runtime, "handleChannelEvent");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
      });

      const response = await handler.handle(new Request("http://localhost/channel-events", {
        method: "POST",
        body: JSON.stringify({
          id: "provider_event_2",
          conversationId: "conversation_1",
          channel: {
            channelId: "gmail-thread-123",
            kind: "email",
            provider: "gmail",
            externalThreadId: "thread_123",
          },
          text: "Please refund my ticket.",
          subject: "Refund request",
          provider: "gmail",
          providerPackageId: "email.gmail",
          eventId: "history_123",
          dedupeKey: "gmail:thread_123:history_123",
          idempotencyKey: "retry-safe-history-123",
          identityStreamId: "gmail:thread_123",
          sequence: "123",
          raw: { historyId: "123" },
          turn: { source: "gmail" },
          app: { surface: "mailbox" },
        }),
      }));

      expect(response.status).toBe(200);
      expect(await response.json()).toMatchObject({
        text: "Handled: Please refund my ticket.",
        activeJourneyId: "ticket-status",
      });
      expect(handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
        conversationId: "conversation_1",
        event: expect.objectContaining({
          id: "provider_event_2",
          nature: "message",
          direction: "inbound",
          intent: "customer-message",
          actor: { type: "customer" },
          channel: expect.objectContaining({
            channelId: "gmail-thread-123",
            kind: "email",
            provider: "gmail",
          }),
          payload: {
            text: "Please refund my ticket.",
            subject: "Refund request",
            turn: { source: "gmail" },
          },
          source: expect.objectContaining({
            sourceType: "provider-adapter",
            provider: "gmail",
            providerPackageId: "email.gmail",
            eventId: "history_123",
            raw: { historyId: "123" },
          }),
          identity: {
            dedupeKey: "gmail:thread_123:history_123",
            idempotencyKey: "retry-safe-history-123",
            streamId: "gmail:thread_123",
            sequence: "123",
          },
        }),
        handling: { turn: { source: "gmail" } },
        app: { surface: "mailbox" },
      }));
    });
});
