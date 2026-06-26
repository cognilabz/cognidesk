import { describe, expect, it, vi } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import type { RuntimeEvent } from "@cognidesk/core";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP event, voice, and error routes", () => {
  it("returns event history as JSON and streams SSE events", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({ runtime, agentId: "agent_primary" });
      await handler.handle(new Request("http://localhost/conversations", { method: "POST", body: "{}" }));
      await handler.handle(new Request("http://localhost/conversations/conversation_1/messages", {
        method: "POST",
        body: JSON.stringify({ message: "hello" }),
      }));

      const eventsResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/events?after=0"));
      expect(eventsResponse.status).toBe(200);
      const eventBody = await eventsResponse.json() as { events: RuntimeEvent[] };
      expect(eventBody.events).toHaveLength(1);

      const controller = new AbortController();
      const streamResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/events/stream?after=0", {
        signal: controller.signal,
      }));
      const reader = streamResponse.body?.getReader();
      expect(reader).toBeDefined();
      const first = await reader!.read();
      const second = await reader!.read();
      controller.abort();

      const decoded = `${new TextDecoder().decode(first.value)}${new TextDecoder().decode(second.value)}`;
      expect(decoded).toContain(": cognidesk stream ready");
      expect(decoded).toContain("event: event");
      expect(decoded).toContain("message.completed");
    });

    it("starts voice conversations and voice segments", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "agent_primary",
        basePath: "/api",
        voice: {
          async createSocket({ result }) {
            return {
              url: `/api/voice/connections/${result.connection.id}/socket?token=test-token`,
              token: "test-token",
              expiresAt: "2026-05-25T00:01:00.000Z",
              protocol: "cognidesk.voice.v1",
            };
          },
        },
      });

      const createdResponse = await handler.handle(new Request("http://localhost/api/voice/conversations", {
        method: "POST",
        body: JSON.stringify({ context: { locale: "en" } }),
      }));
      expect(createdResponse.status).toBe(201);
      const created = await createdResponse.json() as {
        channelSegment: { id: string };
        connection: { id: string };
        socket: { url: string; token: string; protocol: string };
        eventsUrl: string;
      };
      expect(created.channelSegment.id).toBe("voice_segment_1");
      expect(created.connection.id).toBe("voice_connection_1");
      expect(created.socket).toMatchObject({
        url: "/api/voice/connections/voice_connection_1/socket?token=test-token",
        token: "test-token",
        protocol: "cognidesk.voice.v1",
      });
      expect(created.eventsUrl).toBe("/api/conversations/conversation_1/events/stream");

      const segmentResponse = await handler.handle(new Request("http://localhost/api/conversations/conversation_1/voice-segments", {
        method: "POST",
        body: JSON.stringify({}),
      }));
      expect(segmentResponse.status).toBe(200);
      const segment = await segmentResponse.json() as { socket: { token: string } };
      expect(segment.socket.token).toBe("test-token");
    });

    it("emits chat start messages when starting voice conversations", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "agent_primary",
        basePath: "/api",
        voice: {
          async createSocket({ result }) {
            return {
              url: `/api/voice/connections/${result.connection.id}/socket?token=test-token`,
              token: "test-token",
              expiresAt: "2026-05-25T00:01:00.000Z",
              protocol: "cognidesk.voice.v1",
            };
          },
        },
      });

      const response = await handler.handle(new Request("http://localhost/api/voice/conversations", {
        method: "POST",
        body: JSON.stringify({
          context: { locale: "en" },
          chatStart: {
            type: "message",
            text: "Welcome by voice.",
            visibleToModel: true,
          },
        }),
      }));

      expect(response.status).toBe(201);
      const created = await response.json() as { events: RuntimeEvent[] };
      expect(created.events).toEqual([
        expect.objectContaining({
          type: "voice.segment.started",
        }),
        expect.objectContaining({
          type: "message.started",
          data: { role: "assistant" },
        }),
        expect.objectContaining({
          type: "message.completed",
          data: {
            text: "Welcome by voice.",
            intermediate: true,
            visibleToModel: true,
          },
        }),
      ]);
    });

    it("returns 400 for malformed JSON, wrong body shapes, and invalid offsets", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({ runtime, agentId: "agent_primary" });

      const malformed = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: "{not json",
      }));
      const nonStringMessage = await handler.handle(new Request("http://localhost/conversations/conversation_1/messages", {
        method: "POST",
        body: JSON.stringify({ message: 123 }),
      }));
      const invalidOffset = await handler.handle(new Request("http://localhost/conversations/conversation_1/events?after=abc"));
      const invalidChannel = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: JSON.stringify({ channel: { channelId: "web" } }),
      }));

      expect(malformed.status).toBe(400);
      expect(await malformed.json()).toEqual({ error: "Request body must be valid JSON." });
      expect(nonStringMessage.status).toBe(400);
      expect(await nonStringMessage.json()).toEqual({ error: "message must be a string." });
      expect(invalidOffset.status).toBe(400);
      expect(await invalidOffset.json()).toEqual({ error: "after must be a non-negative integer." });
      expect(invalidChannel.status).toBe(400);
      expect(await invalidChannel.json()).toEqual({ error: "channel must be a valid conversation channel." });
    });

    it("redacts internal runtime errors by default", async () => {
      const runtime = new FakeRuntime();
      vi.spyOn(runtime, "createConversation")
        .mockRejectedValue(new Error("secret database token leaked from adapter"));
      const handler = createCognideskHttpHandler({ runtime, agentId: "agent_primary" });

      const response = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: "{}",
      }));
      const body = await response.json() as { error: string };

      expect(response.status).toBe(500);
      expect(body).toEqual({ error: "Internal server error" });
      expect(body.error).not.toContain("secret database token");
    });

    it("can expose internal runtime errors for debugging when enabled", async () => {
      const runtime = new FakeRuntime();
      vi.spyOn(runtime, "createConversation")
        .mockRejectedValue(new Error("secret database token leaked from adapter"));
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "agent_primary",
        exposeInternalErrors: true,
      });

      const response = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: "{}",
      }));

      expect(response.status).toBe(500);
      expect(await response.json()).toEqual({ error: "secret database token leaked from adapter" });
    });
});
