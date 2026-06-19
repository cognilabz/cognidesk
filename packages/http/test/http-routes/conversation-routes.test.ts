import { describe, expect, it } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import type { ConversationRecord } from "@cognidesk/core";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP conversation routes", () => {
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
