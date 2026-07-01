import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  applyRuntimePrivacyToTelemetryAttributes,
  applyRuntimePrivacyToValue,
  type RuntimePrivacySettings,
  type TextGenerationInput,
} from "../src/index.js";
import { redactModelInput } from "../src/runtime/privacy.js";
import { RecordingStorage } from "./runtime/fixtures.js";

const maskingSettings: RuntimePrivacySettings = {
  masks: [
    {
      name: "email",
      pattern: "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}",
      flags: "gi",
      replacement: "[email]",
    },
    { name: "booking", pattern: "ABC\\d+", replacement: "[booking]" },
  ],
};

class ProviderPayload {
  readonly provider = "test";

  send() {
    return "ok";
  }
}

describe("runtime privacy redaction", () => {
  it("preserves non-plain model input objects while masking plain prompt data", async () => {
    const storage = new RecordingStorage();
    await storage.createConversation({
      id: "conversation_schema_redaction",
      agentId: "agent_primary",
      context: {},
    });
    const responseFormat = z.object({ answer: z.string() });
    const toolInput = z.object({ bookingReference: z.string() });
    const providerPayload = new ProviderPayload();
    const controller = new AbortController();
    const onTextDelta = () => undefined;
    const input: TextGenerationInput = {
      role: "response",
      promptTask: "response",
      promptPayload: {
        customer: {
          note: "Email michael@example.com about ABC123.",
        },
        providerPayload,
      },
      messages: [
        {
          role: "user",
          content: "Email michael@example.com about ABC123.",
        },
      ],
      responseFormat,
      tools: [
        {
          name: "lookupBooking",
          description: "Lookup ABC123 for michael@example.com.",
          input: toolInput,
        },
      ],
      toolChoice: "auto",
      onTextDelta,
      signal: controller.signal,
    };

    const redacted = await redactModelInput({
      storage,
      privacy: { settings: maskingSettings },
    }, "conversation_schema_redaction", input);

    expect(redacted.responseFormat).toBe(responseFormat);
    expect(redacted.tools?.[0]?.input).toBe(toolInput);
    expect(redacted.signal).toBe(controller.signal);
    expect(redacted.onTextDelta).toBe(onTextDelta);
    expect((redacted.promptPayload as Record<string, unknown>).providerPayload).toBe(providerPayload);
    expect(redacted.promptPayload).toMatchObject({
      customer: {
        note: "Email [email] about [booking].",
      },
    });
    expect(redacted.messages[0]?.content).toBe("Email [email] about [booking].");
    expect(redacted.tools?.[0]?.description).toBe("Lookup [booking] for [email].");
    expect(responseFormat.safeParse({ answer: "ok" }).success).toBe(true);
    expect(toolInput.safeParse({ bookingReference: "ABC123" }).success).toBe(true);
  });

  it("keeps class and library objects opaque during generic value redaction", () => {
    const schema = z.object({ note: z.string() });
    const providerPayload = new ProviderPayload();
    const redacted = applyRuntimePrivacyToValue({
      text: "Email michael@example.com about ABC123.",
      nested: {
        schema,
        providerPayload,
        items: ["ABC123", { note: "michael@example.com" }],
      },
    }, maskingSettings) as {
      text: string;
      nested: {
        schema: typeof schema;
        providerPayload: ProviderPayload;
        items: Array<string | { note: string }>;
      };
    };

    expect(redacted.text).toBe("Email [email] about [booking].");
    expect(redacted.nested.schema).toBe(schema);
    expect(redacted.nested.providerPayload).toBe(providerPayload);
    expect(redacted.nested.items[0]).toBe("[booking]");
    expect(redacted.nested.items[1]).toEqual({ note: "[email]" });
  });

  it("still masks model text and telemetry attributes inside plain data", () => {
    const telemetry = applyRuntimePrivacyToTelemetryAttributes({
      "cognidesk.model.messages": [
        { role: "user", content: "Email michael@example.com about ABC123." },
      ],
      "cognidesk.model.prompt_payload": {
        ticket: "ABC123",
        customer: { email: "michael@example.com" },
      },
      "cognidesk.tool.input": {
        note: "michael@example.com",
      },
      "cognidesk.model.text": "ABC123 belongs to michael@example.com.",
    }, maskingSettings);

    expect(JSON.stringify(telemetry)).not.toContain("michael@example.com");
    expect(JSON.stringify(telemetry)).not.toContain("ABC123");
    expect(telemetry).toMatchObject({
      "cognidesk.model.messages": [
        { role: "user", content: "Email [email] about [booking]." },
      ],
      "cognidesk.model.prompt_payload": {
        ticket: "[booking]",
        customer: { email: "[email]" },
      },
      "cognidesk.tool.input": {
        note: "[email]",
      },
      "cognidesk.model.text": "[booking] belongs to [email].",
    });
  });
});
