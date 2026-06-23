import { describe, expect, it } from "vitest";
import {
  createChannelHandoffReviewEventInput,
  createCognideskClient,
  createProviderObjectChannelEventInput,
} from "../../src/index.js";

describe("createCognideskClient output resolution and builders", () => {
  it("resolves channel outputs through the Core output-resolution route", async () => {
      const requests: Array<{ operation: string; url: string; body: any; signal: AbortSignal | null }> = [];
      const controller = new AbortController();
      const client = createCognideskClient({
        baseUrl: "http://localhost/api/",
        requestOptions(context) {
          requests.push({ operation: context.operation, url: "", body: null, signal: null });
          return undefined;
        },
        fetch: async (url, init) => {
          const body = JSON.parse(String(init?.body ?? "{}")) as any;
          const last = requests[requests.length - 1];
          if (last) {
            last.url = String(url);
            last.body = body;
            last.signal = init?.signal instanceof AbortSignal ? init.signal : null;
          }
          return Response.json({
            outputIntent: {
              id: "out_1",
              kind: "message.reply",
              channel: body.intent.channel,
              text: body.intent.text,
            },
            resolution: {
              id: "res_1",
              intentId: "out_1",
              outcome: "send",
              status: "resolved",
              deliveryMode: "send",
              channel: body.intent.channel,
              resolvedAt: "2026-05-25T00:00:00.000Z",
            },
            events: [],
            shouldExecute: true,
          });
        },
      });

      const result = await client.resolveChannelOutput({
        conversationId: "conversation_1",
        intent: {
          id: "out_1",
          kind: "message.reply",
          channel: { channelId: "web-chat", kind: "chat", provider: "web" },
          text: "Here is the update.",
        },
        app: { surface: "operator" },
        signal: controller.signal,
      });

      expect(result.resolution.outcome).toBe("send");
      expect(requests).toEqual([{
        operation: "resolveChannelOutput",
        url: "http://localhost/api/channel-outputs/resolve",
        body: {
          conversationId: "conversation_1",
          intent: {
            id: "out_1",
            kind: "message.reply",
            channel: { channelId: "web-chat", kind: "chat", provider: "web" },
            text: "Here is the update.",
          },
          app: { surface: "operator" },
        },
        signal: controller.signal,
      }]);
    });

    it("exports channel-event builders for adapter request construction", () => {
      expect(createProviderObjectChannelEventInput({
        conversationId: "conversation_1",
        channel: { channelId: "zendesk-ticket-123", kind: "ticketing", provider: "zendesk" },
        providerObject: { id: "ticket_123" },
        provider: "zendesk",
      })).toMatchObject({
        event: {
          nature: "provider.object.updated",
          intent: "provider-update",
          actor: { type: "provider" },
        },
      });
      expect(createChannelHandoffReviewEventInput({
        conversationId: "conversation_1",
        channel: "chat",
      })).toMatchObject({
        event: {
          nature: "custom",
          intent: "handoff-review",
        },
        handling: { disposition: "handoff-review" },
      });
    });
});
