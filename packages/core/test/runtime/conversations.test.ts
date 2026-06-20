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
});
