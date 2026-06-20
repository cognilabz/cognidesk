import { describe, expect, it } from "vitest";
import { createRuntime } from "../../src/index.js";
import { RecordingStorage } from "./fixtures.js";

describe("runtime conversations", () => {
  it("lists conversations through the runtime", async () => {
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage });

    const oldConversation = await runtime.createConversation({
      id: "conv_old",
      agentId: "flight-service",
      context: { locale: "en" },
    });
    const otherConversation = await runtime.createConversation({
      id: "conv_other",
      agentId: "other-agent",
      context: {},
    });
    const newConversation = await runtime.createConversation({
      id: "conv_new",
      agentId: "flight-service",
      context: { locale: "de" },
    });

    await runtime.emit({
      conversationId: oldConversation.id,
      type: "message.completed",
      createdAt: "2099-01-01T00:00:00.000Z",
      data: { text: "old" },
    });
    await runtime.emit({
      conversationId: otherConversation.id,
      type: "message.completed",
      createdAt: "2099-01-02T00:00:00.000Z",
      data: { text: "other" },
    });
    await runtime.emit({
      conversationId: newConversation.id,
      type: "message.completed",
      createdAt: "2099-01-03T00:00:00.000Z",
      data: { text: "new" },
    });

    await expect(runtime.listConversations<{ locale?: string }>({
      agentId: "flight-service",
      limit: 2,
    })).resolves.toMatchObject([
      { id: "conv_new", context: { locale: "de" } },
      { id: "conv_old", context: { locale: "en" } },
    ]);
  });

  it("lists conversations through the runtime with a composite cursor", async () => {
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage });
    const updatedAt = "2099-02-01T00:00:00.000Z";

    for (const id of ["conv_cursor_a", "conv_cursor_b", "conv_cursor_c", "conv_cursor_d"]) {
      await runtime.createConversation({ id, agentId: "flight-service", context: {} });
      await runtime.emit({
        conversationId: id,
        type: "message.completed",
        createdAt: updatedAt,
        data: { text: id },
      });
    }

    const firstPage = await runtime.listConversations({ agentId: "flight-service", limit: 2 });
    expect(firstPage.map((conversation) => conversation.id)).toEqual(["conv_cursor_a", "conv_cursor_b"]);

    const cursor = firstPage[1]!;
    await expect(runtime.listConversations({
      agentId: "flight-service",
      before: { updatedAt: cursor.updatedAt, id: cursor.id },
      limit: 2,
    })).resolves.toMatchObject([
      { id: "conv_cursor_c" },
      { id: "conv_cursor_d" },
    ]);
  });
});
