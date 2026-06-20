import { describe, expect, it, vi } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import type { ConversationRecord } from "@cognidesk/core";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP conversation routes", () => {
  it("lists conversations with filters and pagination", async () => {
    const runtime = new FakeRuntime();
    const listConversations = vi.spyOn(runtime, "listConversations");
    const handler = createCognideskHttpHandler({
      runtime,
      cors: true,
    });

    const response = await handler.handle(new Request(
      "http://localhost/conversations?agentId=flight-service&limit=2&before=2026-05-27T00%3A00%3A00.000Z&after=2026-05-24T00%3A00%3A00.000Z",
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(listConversations).toHaveBeenCalledWith({
      agentId: "flight-service",
      beforeUpdatedAt: "2026-05-27T00:00:00.000Z",
      afterUpdatedAt: "2026-05-24T00:00:00.000Z",
      limit: 2,
    });
    await expect(response.json()).resolves.toMatchObject({
      conversations: [
        { id: "conversation_2", agentId: "flight-service" },
        { id: "conversation_1", agentId: "flight-service" },
      ],
    });
  });

  it("creates conversations and posts user messages", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
        cors: true,
      });

      const createResponse = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: JSON.stringify({ context: { locale: "en" } }),
      }));
      expect(createResponse.status).toBe(201);
      expect(createResponse.headers.get("access-control-allow-origin")).toBe("*");
      const created = await createResponse.json() as { conversation: ConversationRecord };
      expect(created.conversation.agentId).toBe("flight-service");

      const messageResponse = await handler.handle(new Request(`http://localhost/conversations/${created.conversation.id}/messages`, {
        method: "POST",
        body: JSON.stringify({ message: "Where is my ticket?" }),
      }));
      expect(messageResponse.status).toBe(200);
      const message = await messageResponse.json() as { text: string; activeJourneyId?: string };
      expect(message.text).toBe("Handled: Where is my ticket?");
      expect(message.activeJourneyId).toBe("ticket-status");
    });
});
