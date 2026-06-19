import { describe, expect, it, vi } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import type { ResolveChannelOutputInput } from "@cognidesk/core";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP output and compatibility routes", () => {
  it("resolves channel outputs through the Core runtime route", async () => {
      const runtime = new FakeRuntime();
      const resolveChannelOutput = vi.fn(async (input: ResolveChannelOutputInput) => ({
        conversation: undefined,
        outputIntent: {
          id: input.intent.id,
          kind: input.intent.kind ?? "message.reply",
          channel: input.intent.channel as any,
          text: input.intent.text,
        },
        resolution: {
          id: "res_1",
          intentId: input.intent.id,
          outcome: "send" as const,
          status: "resolved" as const,
          deliveryMode: "send" as const,
          channel: input.intent.channel as any,
          resolvedAt: "2026-05-25T00:00:00.000Z",
        },
        events: [],
        shouldExecute: true,
      }));
      Object.assign(runtime, { resolveChannelOutput });
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
      });

      const response = await handler.handle(new Request("http://localhost/channel-outputs/resolve", {
        method: "POST",
        body: JSON.stringify({
          conversationId: "conversation_1",
          intent: {
            id: "out_1",
            kind: "message.reply",
            channel: {
              channelId: "web-chat",
              kind: "chat",
              provider: "web",
            },
            text: "Here is the update.",
          },
          app: { surface: "operator" },
        }),
      }));

      expect(response.status).toBe(200);
      expect(await response.json()).toMatchObject({
        resolution: {
          id: "res_1",
          outcome: "send",
          status: "resolved",
        },
        shouldExecute: true,
      });
      expect(resolveChannelOutput).toHaveBeenCalledWith(expect.objectContaining({
        conversationId: "conversation_1",
        intent: {
          id: "out_1",
          kind: "message.reply",
          channel: {
            channelId: "web-chat",
            kind: "chat",
            provider: "web",
          },
          text: "Here is the update.",
        },
        app: { surface: "operator" },
        signal: expect.any(AbortSignal),
      }));
    });

    it("normalizes provider object update shortcuts for ticketing adapters", async () => {
      const runtime = new FakeRuntime();
      const handleChannelEvent = vi.spyOn(runtime, "handleChannelEvent");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
      });

      const response = await handler.handle(new Request("http://localhost/channel-events", {
        method: "POST",
        body: JSON.stringify({
          conversationId: "conversation_1",
          channel: {
            channelId: "zendesk-ticket-123",
            kind: "ticketing",
            provider: "zendesk",
            externalThreadId: "ticket_123",
          },
          providerObject: { id: "ticket_123", priority: "high" },
          status: "open",
          provider: "zendesk",
          eventId: "ticket.updated.123",
        }),
      }));

      expect(response.status).toBe(200);
      expect(handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
        conversationId: "conversation_1",
        event: expect.objectContaining({
          kind: "provider.object.updated",
          nature: "provider.object.updated",
          direction: "internal",
          intent: "provider-update",
          actor: { type: "provider" },
          payload: {
            providerObject: { id: "ticket_123", priority: "high" },
            status: "open",
          },
          source: expect.objectContaining({
            sourceType: "provider-adapter",
            provider: "zendesk",
            eventId: "ticket.updated.123",
          }),
        }),
      }));
    });

    it("keeps the messages route as a channel-event compatibility wrapper", async () => {
      const runtime = new FakeRuntime();
      const handleChannelEvent = vi.spyOn(runtime, "handleChannelEvent");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
      });

      const response = await handler.handle(new Request("http://localhost/conversations/conversation_1/messages", {
        method: "POST",
        body: JSON.stringify({
          message: "hello",
          channel: {
            channelId: "web-chat",
            kind: "chat",
            provider: "web",
          },
          turn: { source: "test" },
        }),
      }));

      expect(response.status).toBe(200);
      expect(await response.json()).toMatchObject({
        text: "Handled: hello",
        activeJourneyId: "ticket-status",
      });
      expect(handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
        conversationId: "conversation_1",
        event: expect.objectContaining({
          channel: expect.objectContaining({
            channelId: "web-chat",
            kind: "chat",
            provider: "web",
          }),
          nature: "message",
          direction: "inbound",
          intent: "customer-message",
          actor: { type: "customer" },
          payload: { text: "hello", turn: { source: "test" } },
        }),
        handling: { turn: { source: "test" } },
      }));
    });

    it("passes conversation channel context to runtime conversation creation", async () => {
      const runtime = new FakeRuntime();
      const createConversation = vi.spyOn(runtime, "createConversation");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
      });

      const response = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: JSON.stringify({
          context: { locale: "en" },
          channel: {
            channelId: "intercom-thread-123",
            kind: "chat",
            provider: "intercom",
            externalThreadId: "thread_123",
            metadata: { visitorId: "visitor_456" },
          },
        }),
      }));

      expect(response.status).toBe(201);
      expect(createConversation).toHaveBeenCalledWith(expect.objectContaining({
        agentId: "flight-service",
        context: { locale: "en" },
        channel: expect.objectContaining({
          channelId: "intercom-thread-123",
          kind: "chat",
          provider: "intercom",
          externalThreadId: "thread_123",
          metadata: { visitorId: "visitor_456" },
        }),
      }));
    });
});
