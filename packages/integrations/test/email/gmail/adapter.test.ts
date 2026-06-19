import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createGmailEmailClient,
  createGmailEmailLiveChecks,
  createGmailRawMessage,
  GMAIL_FULL_API_GENERATED_FUNCTION_COUNT,
  GMAIL_FULL_API_GENERATED_FUNCTION_NAMES,
  GMAIL_FULL_API_OPERATION_COUNT,
  ProviderApiError,
  gmailEmailCredentialStatuses,
  gmailEmailProviderManifest,
  parseGmailPubSubNotification,
  type GmailFullApiOperationResponseMap,
  type GmailOperationResponseMap,
} from "../../../src/email/gmail/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Gmail email", () => {
    expect(gmailEmailProviderManifest).toMatchObject({
      id: "email.gmail",
      packageName: "@cognidesk/integrations",
      category: "email",
      provider: "gmail",
      trustLevel: "official",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(gmailEmailProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "gmail",
      documentedOperationCount: 79,
      implementedOperationCount: 79,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 79,
    });
    expect(GMAIL_FULL_API_OPERATION_COUNT).toBe(79);
    expect(GMAIL_FULL_API_GENERATED_FUNCTION_COUNT).toBe(79);
    expect(GMAIL_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "UsersSettingsFiltersCreate",
      "UsersMessagesBatchModify",
      "UsersThreadsTrash",
      "UsersSettingsSendAsSmimeInfoGet",
    ]));
    expect(gmailEmailProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "draft", "send", "thread", "attach", "update-provider-object"]));
    expect(gmailEmailProviderManifest.capabilities.find((capability) =>
      capability.capability === "attach"
    )).toMatchObject({
      label: "Read Gmail attachment content",
      exposesSensitiveData: true,
    });
    expect(gmailEmailProviderManifest.coverage.notes.join(" "))
      .toContain("every method in the official Gmail API Discovery document");
    expect(gmailEmailProviderManifest.coverage.notes.join(" "))
      .toContain("operation-specific alternatives");
    expect(gmailEmailProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "google-oauth-access-token"
    )?.scopes).toContain("https://www.googleapis.com/auth/gmail.metadata");
    expect(gmailEmailProviderManifest.metadata).toMatchObject({
      scopeAlternatives: {
        profile: expect.arrayContaining(["https://www.googleapis.com/auth/gmail.metadata"]),
        watch: expect.arrayContaining(["https://www.googleapis.com/auth/gmail.metadata"]),
        send: expect.arrayContaining(["https://www.googleapis.com/auth/gmail.send"]),
        metadataOnlyCaveat: expect.stringContaining("disallows q with gmail.metadata"),
      },
    });
    expect(gmailEmailProviderManifest.coverage.notes.join(" "))
      .toContain("Google Cloud Pub/Sub push notification parsing");
    expect(gmailEmailProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/list",
        "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/getProfile",
        "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch",
        "https://developers.google.com/workspace/gmail/api/guides/push",
        "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments/get",
      ]));
    expect(gmailEmailProviderManifest.limitations.join(" "))
      .toContain("Google Cloud Pub/Sub topic");
    expect(gmailEmailProviderManifest.limitations.join(" "))
      .toContain("history synchronization strategy");
  });

  it("exposes generated functions for every documented Gmail Discovery method", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createGmailEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.UsersSettingsFiltersCreate({
      pathParams: { userId: "me" },
      body: { criteria: { from: "customer@example.test" }, action: { addLabelIds: ["Label_1"] } },
    });
    await client.fullApi.UsersMessagesBatchModify({
      pathParams: { userId: "me" },
      body: { ids: ["message_1"], addLabelIds: ["STARRED"] },
    });
    await client.fullApi.UsersThreadsTrash({ pathParams: { userId: "me", id: "thread_1" } });
    await client.fullApi.UsersSettingsSendAsSmimeInfoGet({
      pathParams: { userId: "me", sendAsEmail: "support@example.test", id: "smime_1" },
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://gmail.googleapis.com/gmail/v1/users/me/settings/filters",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://gmail.googleapis.com/gmail/v1/users/me/messages/batchModify",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://gmail.googleapis.com/gmail/v1/users/me/threads/thread_1/trash",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/support%40example.test/smimeInfo/smime_1",
      expect.objectContaining({ method: "GET" }),
    );
    // @ts-expect-error Missing id intentionally exercises runtime validation.
    await expect(client.requestOperation("users.threads.trash", { pathParams: { userId: "me" } }))
      .rejects.toThrow("Missing Gmail path parameter 'id'");
  });

  it("types selected Gmail operation responses without a generic facade", () => {
    if (false) {
      const client = undefined as unknown as import("../../../src/email/gmail/index.js").GmailEmailClient;
      const message = client.requestOperation("users.messages.get", {
        pathParams: { userId: "me", id: "message_1" },
        query: { format: "full" },
      });
      const attachment = client.requestOperation("users.messages.attachments.get", {
        pathParams: { userId: "me", messageId: "message_1", id: "att_1" },
      });

      expectTypeOf<Awaited<typeof message>>().toEqualTypeOf<GmailFullApiOperationResponseMap["users.messages.get"]>();
      expectTypeOf<Awaited<typeof attachment>>().toEqualTypeOf<GmailFullApiOperationResponseMap["users.messages.attachments.get"]>();
      expectTypeOf<GmailOperationResponseMap["users.messages.list"]>().toHaveProperty("resultSizeEstimate").toEqualTypeOf<number | undefined>();
    }
  });

  it("creates RFC 2822 raw messages encoded for Gmail", () => {
    const raw = createGmailRawMessage({
      from: "support@example.test",
      to: ["customer@example.test"],
      subject: "Reset help",
      text: "Here is the reset link.",
      messageId: "<fixed@example.test>",
    });
    const decoded = Buffer.from(raw, "base64url").toString("utf8");
    expect(decoded).toContain("From: support@example.test\r\n");
    expect(decoded).toContain("To: customer@example.test\r\n");
    expect(decoded).toContain("Subject: Reset help\r\n");
    expect(decoded).toContain("Message-ID: <fixed@example.test>\r\n");
    expect(decoded).toContain("\r\n\r\nHere is the reset link.");
  });

  it("creates Gmail drafts for approval workflows", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "draft_1",
        message: { id: "message_1", threadId: "thread_1" },
      }), { status: 200 })
    );
    const client = createGmailEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const draft = await client.createDraft({
      raw: "cmF3",
      threadId: "thread_1",
    });

    expect(draft.id).toBe("draft_1");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://gmail.googleapis.com/gmail/v1/users/me/drafts",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      message: {
        raw: "cmF3",
        threadId: "thread_1",
      },
    });
  });

  it("lists messages with Gmail query and labels", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        messages: [{ id: "message_1", threadId: "thread_1" }],
        nextPageToken: "next",
      }), { status: 200 })
    );
    const client = createGmailEmailClient({
      accessToken: "oauth-token",
      userId: "support@example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.listMessages({
      query: "from:customer@example.test",
      labelIds: ["INBOX", "UNREAD"],
      maxResults: 10,
    });

    expect(result.messages).toHaveLength(1);
    const listCall = fetchMock.mock.calls[0] as unknown[] | undefined;
    expect(listCall?.[0]).toBe(
      "https://gmail.googleapis.com/gmail/v1/users/support%40example.test/messages?q=from%3Acustomer%40example.test&labelIds=INBOX&labelIds=UNREAD&maxResults=10",
    );
  });

  it("passes per-operation AbortSignal through Gmail fetch", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ emailAddress: "support@example.test" }), { status: 200 })
    );
    const client = createGmailEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.getProfile({ signal: controller.signal });

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    expect(request.signal).toBe(controller.signal);
  });

  it("throws structured Gmail ProviderApiError metadata", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        error: {
          code: 403,
          message: "Permission denied.",
          status: "PERMISSION_DENIED",
        },
      }), {
        status: 403,
        headers: { "x-goog-request-id": "gmail-request-id" },
      })
    );
    const client = createGmailEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    let caught: unknown;
    try {
      await client.getProfile();
    } catch (error) {
      caught = error;
    }

    expect(caught).toBeInstanceOf(ProviderApiError);
    expect(caught).toMatchObject({
      provider: "gmail",
      status: 403,
      code: "PERMISSION_DENIED",
      body: {
        error: {
          message: "Permission denied.",
          status: "PERMISSION_DENIED",
        },
      },
      response: {
        requestId: "gmail-request-id",
      },
    });
    expect((caught as Error).message).toBe("Permission denied.");
  });

  it("covers Gmail watch, history, labels, and attachment request shapes", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/watch")) return new Response(JSON.stringify({ historyId: "123", expiration: "1710000000000" }), { status: 200 });
      if (url.includes("/history?")) return new Response(JSON.stringify({ history: [{ id: "124" }], historyId: "124" }), { status: 200 });
      if (url.endsWith("/labels")) return new Response(JSON.stringify({ labels: [{ id: "INBOX", name: "Inbox" }] }), { status: 200 });
      return new Response(JSON.stringify({ attachmentId: "att_1", data: "Ynl0ZXM" }), { status: 200 });
    });
    const client = createGmailEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.watchMailbox({
      topicName: "projects/project-1/topics/gmail",
      labelIds: ["INBOX"],
      labelFilterBehavior: "include",
    })).resolves.toMatchObject({ historyId: "123" });
    await expect(client.listHistory({
      startHistoryId: "123",
      historyTypes: ["messageAdded", "labelRemoved"],
      labelId: "INBOX",
      maxResults: 10,
    })).resolves.toMatchObject({ historyId: "124" });
    await expect(client.listLabels()).resolves.toMatchObject({ labels: [{ id: "INBOX" }] });
    await expect(client.getAttachment({
      messageId: "message_1",
      attachmentId: "att_1",
    })).resolves.toMatchObject({ data: "Ynl0ZXM" });

    const watchRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(watchRequest.body)).toEqual({
      topicName: "projects/project-1/topics/gmail",
      labelIds: ["INBOX"],
      labelFilterBehavior: "include",
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://gmail.googleapis.com/gmail/v1/users/me/history?startHistoryId=123&historyTypes=messageAdded&historyTypes=labelRemoved&labelId=INBOX&maxResults=10",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://gmail.googleapis.com/gmail/v1/users/me/messages/message_1/attachments/att_1",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("parses Gmail Pub/Sub push notifications into mailbox history cursors", async () => {
    const payload = { emailAddress: "support@example.test", historyId: "12345" };
    const request = new Request("https://example.test/gmail/push", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message: {
          data: Buffer.from(JSON.stringify(payload)).toString("base64url"),
          messageId: "pubsub-message-1",
          publishTime: "2026-06-17T12:00:00Z",
          attributes: { source: "gmail" },
        },
        subscription: "projects/project-1/subscriptions/gmail",
      }),
    });

    await expect(parseGmailPubSubNotification(request)).resolves.toMatchObject({
      emailAddress: "support@example.test",
      historyId: "12345",
      messageId: "pubsub-message-1",
      publishTime: "2026-06-17T12:00:00Z",
      subscription: "projects/project-1/subscriptions/gmail",
      attributes: { source: "gmail" },
    });
  });

  it("fails closed on missing or invalid Gmail Pub/Sub message data", async () => {
    await expect(parseGmailPubSubNotification({ message: {} }))
      .rejects.toThrow("message.data is required");
    await expect(parseGmailPubSubNotification({ message: { data: "not-json" } }))
      .rejects.toThrow("base64url-encoded JSON");
    await expect(parseGmailPubSubNotification({
      message: { data: Buffer.from(JSON.stringify({ emailAddress: "support@example.test" })).toString("base64url") },
    })).rejects.toThrow("emailAddress and historyId");
  });

  it("reports live conformance as credential-blocked until Gmail credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: gmailEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [gmailEmailProviderManifest.id],
        enabledCapabilities: ["receive", "draft", "send", "thread", "attach", "update-provider-object"],
      }],
      credentialStatuses: gmailEmailCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createGmailEmailLiveChecks({
          accessToken: "missing",
          client: {
            async getProfile() {
              return { emailAddress: "support@example.test" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.profile" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Gmail live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: gmailEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [gmailEmailProviderManifest.id],
        enabledCapabilities: ["receive", "draft", "send", "thread", "attach", "update-provider-object"],
      }],
      credentialStatuses: gmailEmailCredentialStatuses({
        accessToken: "configured",
        scopes: ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose"],
      }),
      live: {
        enabled: true,
        checks: createGmailEmailLiveChecks({
          accessToken: "configured",
          client: {
            async getProfile() {
              return { emailAddress: "support@example.test", messagesTotal: 10 };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.profile",
      status: "passed",
    }));
  });
});
