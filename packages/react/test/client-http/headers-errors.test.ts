import { describe, expect, it } from "vitest";
import { CognideskApiError, createCognideskClient } from "../../src/index.js";

describe("createCognideskClient headers and API errors", () => {
  it("passes shared and per-operation headers to fetch requests", async () => {
      const requests: Array<{
        url: string;
        method: string;
        credentials: RequestCredentials | undefined;
        headers: Record<string, string | null>;
      }> = [];
      const client = createCognideskClient({
        baseUrl: "http://localhost/api/",
        headers: { authorization: "Bearer shared-token" },
        credentials: "include",
        requestOptions: (context) => ({
          headers: {
            "x-cognidesk-operation": context.operation,
            ...(context.conversationId ? { "x-cognidesk-conversation": context.conversationId } : {}),
          },
        }),
        fetch: async (url, init) => {
          const headers = new Headers(init?.headers);
          requests.push({
            url: String(url),
            method: init?.method ?? "GET",
            credentials: init?.credentials,
            headers: {
              authorization: headers.get("authorization"),
              contentType: headers.get("content-type"),
              operation: headers.get("x-cognidesk-operation"),
              conversation: headers.get("x-cognidesk-conversation"),
            },
          });
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
          return Response.json({ events: [] });
        },
      });

      const created = await client.createConversation({ agentId: "flight-service" });
      await client.listEvents(created.conversation.id);

      expect(requests).toEqual([
        {
          url: "http://localhost/api/conversations",
          method: "POST",
          credentials: "include",
          headers: {
            authorization: "Bearer shared-token",
            contentType: "application/json",
            operation: "createConversation",
            conversation: null,
          },
        },
        {
          url: "http://localhost/api/conversations/conversation_1/events",
          method: "GET",
          credentials: "include",
          headers: {
            authorization: "Bearer shared-token",
            contentType: null,
            operation: "listEvents",
            conversation: "conversation_1",
          },
        },
      ]);
    });

    it("throws CognideskApiError with parsed response bodies", async () => {
      const client = createCognideskClient({
        baseUrl: "http://localhost/api",
        fetch: async () => Response.json({
          error: { code: "message_rejected" },
          message: "Message was rejected.",
        }, { status: 422 }),
      });

      let caught: unknown;
      try {
        await client.sendMessage("conversation_1", "hello");
      } catch (error) {
        caught = error;
      }

      expect(caught).toBeInstanceOf(CognideskApiError);
      const apiError = caught as CognideskApiError;
      expect(apiError.message).toBe("Failed to send message: 422");
      expect(apiError.status).toBe(422);
      expect(apiError.body).toEqual({
        error: { code: "message_rejected" },
        message: "Message was rejected.",
      });
      expect(apiError.response.status).toBe(422);
    });
});
