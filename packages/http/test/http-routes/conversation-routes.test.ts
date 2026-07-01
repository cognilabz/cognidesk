import { describe, expect, it, vi } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import type { ConversationRecord, RuntimeEvent } from "@cognidesk/core";
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
      "http://localhost/conversations?agentId=agent_primary&customerId=customer_primary&limit=2&before=2026-05-27T00%3A00%3A00.000Z&after=2026-05-24T00%3A00%3A00.000Z",
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(listConversations).toHaveBeenCalledWith({
      agentId: "agent_primary",
      customerId: "customer_primary",
      beforeUpdatedAt: "2026-05-27T00:00:00.000Z",
      afterUpdatedAt: "2026-05-24T00:00:00.000Z",
      limit: 2,
    });
    await expect(response.json()).resolves.toMatchObject({
      conversations: [
        { id: "conversation_2", agentId: "agent_primary" },
        { id: "conversation_1", agentId: "agent_primary" },
      ],
    });
  });

  it("passes composite conversation list cursors to the runtime", async () => {
    const runtime = new FakeRuntime();
    const listConversations = vi.spyOn(runtime, "listConversations");
    const handler = createCognideskHttpHandler({ runtime });

    const response = await handler.handle(new Request(
      "http://localhost/conversations?agentId=agent_primary&limit=2&beforeUpdatedAt=2026-05-27T00%3A00%3A00.000Z&beforeId=conversation_9&afterUpdatedAt=2026-05-24T00%3A00%3A00.000Z&afterId=conversation_1",
    ));

    expect(response.status).toBe(200);
    expect(listConversations).toHaveBeenCalledWith({
      agentId: "agent_primary",
      before: { updatedAt: "2026-05-27T00:00:00.000Z", id: "conversation_9" },
      after: { updatedAt: "2026-05-24T00:00:00.000Z", id: "conversation_1" },
      limit: 2,
    });
  });

  it("rejects incomplete composite conversation list cursors", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime });

    const response = await handler.handle(new Request(
      "http://localhost/conversations?beforeUpdatedAt=2026-05-27T00%3A00%3A00.000Z&beforeId=",
    ));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "beforeUpdatedAt and beforeId must be provided together.",
    });
  });

  it("reads, updates, and deletes a customer conversation", async () => {
    const runtime = new FakeRuntime();
    const getConversation = vi.spyOn(runtime, "getConversation");
    const updateConversationContext = vi.spyOn(runtime, "updateConversationContext");
    const deleteConversation = vi.spyOn(runtime, "deleteConversation");
    const handler = createCognideskHttpHandler({ runtime });

    const readResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1"));
    expect(readResponse.status).toBe(200);
    expect(getConversation).toHaveBeenCalledWith("conversation_1");
    await expect(readResponse.json()).resolves.toMatchObject({
      conversation: {
        id: "conversation_1",
        context: { customerId: "customer_primary" },
      },
    });

    const updateResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1", {
      method: "PATCH",
      body: JSON.stringify({
        context: {
          customerId: "customer_secondary",
          customer: { id: "customer_secondary", segment: "priority" },
        },
      }),
    }));
    expect(updateResponse.status).toBe(200);
    expect(updateConversationContext).toHaveBeenCalledWith({
      conversationId: "conversation_1",
      context: {
        customerId: "customer_secondary",
        customer: { id: "customer_secondary", segment: "priority" },
      },
    });
    await expect(updateResponse.json()).resolves.toMatchObject({
      conversation: {
        id: "conversation_1",
        context: {
          customerId: "customer_secondary",
          customer: { id: "customer_secondary", segment: "priority" },
        },
      },
    });

    const deleteResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1", {
      method: "DELETE",
    }));
    expect(deleteResponse.status).toBe(204);
    expect(deleteConversation).toHaveBeenCalledWith("conversation_1");
  });

  it("returns 404 for missing conversation reads, updates, and deletes", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime });

    const readResponse = await handler.handle(new Request("http://localhost/conversations/missing"));
    expect(readResponse.status).toBe(404);

    const updateResponse = await handler.handle(new Request("http://localhost/conversations/missing", {
      method: "PATCH",
      body: JSON.stringify({ context: { customerId: "customer_secondary" } }),
    }));
    expect(updateResponse.status).toBe(404);

    const deleteResponse = await handler.handle(new Request("http://localhost/conversations/missing", {
      method: "DELETE",
    }));
    expect(deleteResponse.status).toBe(404);
  });

  it("creates conversations and posts user messages", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "agent_primary",
        cors: true,
      });

      const createResponse = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        body: JSON.stringify({ context: { locale: "en" } }),
      }));
      expect(createResponse.status).toBe(201);
      expect(createResponse.headers.get("access-control-allow-origin")).toBe("*");
      const created = await createResponse.json() as { conversation: ConversationRecord };
      expect(created.conversation.agentId).toBe("agent_primary");

      const messageResponse = await handler.handle(new Request(`http://localhost/conversations/${created.conversation.id}/messages`, {
        method: "POST",
        body: JSON.stringify({ message: "Where is my ticket?" }),
      }));
      expect(messageResponse.status).toBe(200);
      const message = await messageResponse.json() as { text: string; activeJourneyId?: string };
      expect(message.text).toBe("Handled: Where is my ticket?");
      expect(message.activeJourneyId).toBe("journey_primary");
    });

  it("emits chat start messages during conversation creation", async () => {
    const runtime = new FakeRuntime();
    const createConversation = vi.spyOn(runtime, "createConversation");
    const handler = createCognideskHttpHandler({
      runtime,
      agentId: "agent_primary",
    });

    const response = await handler.handle(new Request("http://localhost/conversations", {
      method: "POST",
      body: JSON.stringify({
        context: { locale: "en", customerId: "customer_1" },
        privacy: { traceContent: "none", masks: [{ pattern: "ABC\\d+", replacement: "[booking]" }] },
        chatStart: {
          type: "message",
          text: "Welcome aboard.",
          visibleToModel: true,
        },
      }),
    }));

    expect(response.status).toBe(201);
    expect(createConversation).toHaveBeenCalledWith(expect.objectContaining({
      agentId: "agent_primary",
      context: { locale: "en", customerId: "customer_1" },
      privacy: { traceContent: "none", masks: [{ pattern: "ABC\\d+", replacement: "[booking]" }] },
    }));
    const created = await response.json() as { conversation: ConversationRecord; events: RuntimeEvent[] };
    expect(created.conversation.id).toBe("conversation_1");
    expect(created.events).toEqual([
      expect.objectContaining({
        type: "message.started",
        data: { role: "assistant" },
      }),
      expect.objectContaining({
        type: "message.completed",
        data: {
          text: "Welcome aboard.",
          intermediate: true,
          visibleToModel: true,
        },
      }),
    ]);
  });

  it("emits handler default chat start messages", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({
      runtime,
      agentId: "agent_primary",
      chatStart: "Default welcome.",
    });

    const response = await handler.handle(new Request("http://localhost/conversations", {
      method: "POST",
      body: JSON.stringify({ context: { locale: "en" } }),
    }));

    expect(response.status).toBe(201);
    const created = await response.json() as { events: RuntimeEvent[] };
    expect(created.events.at(-1)).toEqual(expect.objectContaining({
      type: "message.completed",
      data: {
        text: "Default welcome.",
        intermediate: true,
        visibleToModel: true,
      },
    }));
  });

  it("lets request chat start override the handler default", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({
      runtime,
      agentId: "agent_primary",
      chatStart: "Default welcome.",
    });

    const response = await handler.handle(new Request("http://localhost/conversations", {
      method: "POST",
      body: JSON.stringify({
        chatStart: {
          type: "message",
          text: "Request welcome.",
        },
      }),
    }));

    expect(response.status).toBe(201);
    const created = await response.json() as { events: RuntimeEvent[] };
    expect(created.events.at(-1)).toEqual(expect.objectContaining({
      type: "message.completed",
      data: {
        text: "Request welcome.",
        intermediate: true,
        visibleToModel: true,
      },
    }));
  });

  it("lets request chat start null disable the handler default", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({
      runtime,
      agentId: "agent_primary",
      chatStart: "Default welcome.",
    });

    const response = await handler.handle(new Request("http://localhost/conversations", {
      method: "POST",
      body: JSON.stringify({ chatStart: null }),
    }));

    expect(response.status).toBe(201);
    const created = await response.json() as { events?: RuntimeEvent[] };
    expect(created.events).toBeUndefined();
  });
});
