import {
  ProviderApiError,
  SLACK_WEB_API_GENERATED_FUNCTION_COUNT,
  SLACK_WEB_API_OPERATION_COUNT,
  SLACK_WEB_API_PATH_COUNT,
  createSlackWorkplaceClient,
  createSlackWorkplaceLiveChecks,
  describe,
  expect,
  it,
  parseSlackSignedRequest,
  runProviderConformance,
  signSlack,
  slackWorkplaceCredentialStatuses,
  slackWorkplaceProviderManifest,
  validateSlackRequestSignature,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("posts channel messages through Slack chat.postMessage", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({
          ok: true,
          channel: "C123",
          ts: "1710000000.000100",
          message: { text: "Reset link sent." },
        }), { status: 200 })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const result = await client.postMessage({
        channel: "C123",
        text: "Reset link sent.",
        threadTs: "1710000000.000000",
        metadata: { event_type: "cognidesk_reply", event_payload: { conversationId: "conversation_1" } },
      });

      expect(result.ts).toBe("1710000000.000100");
      expect(fetchMock).toHaveBeenCalledWith(
        "https://slack.com/api/chat.postMessage",
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({
            authorization: "Bearer xoxb-token",
            "content-type": "application/json; charset=utf-8",
          }),
        }),
      );
      const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
      expect(JSON.parse(request.body)).toEqual({
        channel: "C123",
        text: "Reset link sent.",
        thread_ts: "1710000000.000000",
        metadata: {
          event_type: "cognidesk_reply",
          event_payload: { conversationId: "conversation_1" },
        },
      });
    });

  it("surfaces Slack Retry-After details for caller-owned rate-limit policy", async () => {
      const fetchMock = vi.fn(async () =>
        new Response("", { status: 429, headers: { "retry-after": "30" } })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      let caught: unknown;
      try {
        await client.postMessage({ channel: "C123", text: "Slow down." });
      } catch (error) {
        caught = error;
      }

      expect(caught).toBeInstanceOf(ProviderApiError);
      expect(caught).toMatchObject({
        provider: "slack",
        status: 429,
        retryAfter: "30",
        response: {
          headers: {
            "retry-after": "30",
          },
        },
      });
      expect((caught as Error).message).toBe("Slack Web API returned 429. Retry-After: 30.");
    });

  it("passes per-operation AbortSignal through Slack Web API fetch", async () => {
      const controller = new AbortController();
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({ ok: true, messages: [] }), { status: 200 })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await client.conversationsHistory({ channel: "C123", signal: controller.signal });

      const request = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
      expect(request.signal).toBe(controller.signal);
    });

  it("posts internal assist messages through Slack chat.postEphemeral when a target user is available", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({
          ok: true,
          message_ts: "1710000000.000200",
        }), { status: 200 })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const result = await client.postInternalAssistMessage({
        channel: "C123",
        user: "U_AGENT",
        text: "Suggested answer: ask for the invoice number.",
        threadTs: "1710000000.000000",
      });

      expect(result.message_ts).toBe("1710000000.000200");
      const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { body: string }];
      expect(url).toBe("https://slack.com/api/chat.postEphemeral");
      expect(JSON.parse(init.body)).toEqual({
        channel: "C123",
        user: "U_AGENT",
        text: "Suggested answer: ask for the invoice number.",
        thread_ts: "1710000000.000000",
      });
    });

  it("updates Slack messages through chat.update", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({
          ok: true,
          channel: "C123",
          ts: "1710000000.000100",
          text: "Updated support note.",
        }), { status: 200 })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await client.updateMessage({
        channel: "C123",
        ts: "1710000000.000100",
        text: "Updated support note.",
      });

      const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { body: string }];
      expect(url).toBe("https://slack.com/api/chat.update");
      expect(JSON.parse(init.body)).toEqual({
        channel: "C123",
        ts: "1710000000.000100",
        text: "Updated support note.",
      });
    });

  it("reads conversation history with Slack conversations.history controls", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({
          ok: true,
          messages: [{ type: "message", text: "Need help", ts: "1710000000.000000" }],
          has_more: false,
        }), { status: 200 })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const history = await client.conversationsHistory({
        channel: "C123",
        oldest: "1709999999.000000",
        limit: 5,
        includeAllMetadata: true,
      });

      expect(history.messages).toHaveLength(1);
      const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { headers: Record<string, string> }];
      expect(url).toBe("https://slack.com/api/conversations.history?channel=C123&include_all_metadata=true&limit=5&oldest=1709999999.000000");
      expect(init.headers.authorization).toBe("Bearer xoxb-token");
    });

  it("reads thread replies and performs Slack external file upload steps", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.includes("conversations.replies")) {
          return new Response(JSON.stringify({ ok: true, messages: [{ ts: "1710000000.000000" }] }), { status: 200 });
        }
        if (url.includes("files.getUploadURLExternal")) {
          return new Response(JSON.stringify({
            ok: true,
            upload_url: "https://files.slack.com/upload/v1/ABC",
            file_id: "F123",
          }), { status: 200 });
        }
        if (url.includes("files.completeUploadExternal")) {
          return new Response(JSON.stringify({ ok: true, files: [{ id: "F123", title: "receipt.pdf" }] }), { status: 200 });
        }
        return new Response("OK - 5", { status: 200 });
      });
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await expect(client.conversationsReplies({
        channel: "C123",
        ts: "1710000000.000000",
        limit: 5,
      })).resolves.toMatchObject({ messages: [{ ts: "1710000000.000000" }] });
      await expect(client.getUploadUrlExternal({
        filename: "receipt.pdf",
        length: 5,
        altTxt: "Receipt PDF",
      })).resolves.toMatchObject({ file_id: "F123" });
      await expect(client.uploadExternalFileBytes({
        uploadUrl: "https://files.slack.com/upload/v1/ABC",
        body: "bytes",
        contentType: "application/pdf",
      }).then((response) => response.text())).resolves.toBe("OK - 5");
      await expect(client.completeUploadExternal({
        files: [{ id: "F123", title: "receipt.pdf" }],
        channelId: "C123",
        initialComment: "Attached receipt.",
        threadTs: "1710000000.000000",
      })).resolves.toMatchObject({ files: [{ id: "F123" }] });

      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://slack.com/api/conversations.replies?channel=C123&ts=1710000000.000000&limit=5",
        expect.objectContaining({ method: "GET" }),
      );
      const getUploadRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
      expect(JSON.parse(getUploadRequest.body)).toEqual({
        filename: "receipt.pdf",
        length: 5,
        alt_txt: "Receipt PDF",
      });
      const uploadRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { headers: Record<string, string>; body: string };
      expect(uploadRequest.headers["content-type"]).toBe("application/pdf");
      expect(uploadRequest.body).toBe("bytes");
      const completeRequest = (fetchMock.mock.calls[3] as unknown[])[1] as { body: string };
      expect(JSON.parse(completeRequest.body)).toEqual({
        files: [{ id: "F123", title: "receipt.pdf" }],
        channel_id: "C123",
        initial_comment: "Attached receipt.",
        thread_ts: "1710000000.000000",
      });
    });
});
