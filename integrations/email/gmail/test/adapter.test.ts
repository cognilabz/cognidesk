import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import type { GmailOfficialClient } from "../src/contracts.js";
import {
  GMAIL_EMAIL_OPERATION_ALIASES,
  createGmailEmailClient,
  createGmailEmailIntegration,
  createGmailEmailLiveChecks,
  createGmailRawMessage,
  gmailEmailCredentialStatuses,
  gmailEmailProviderManifest,
  parseGmailPubSubNotification,
  type GmailEmailOperationOutputMap,
} from "../src/index.js";

describe("@cognidesk/integration-email-gmail", () => {
  it("declares a scoped official-sdk manifest whose operations match executable handlers", () => {
    const client = createGmailEmailClient({ rawClient: gmailClientMock() });
    expect(gmailEmailProviderManifest).toMatchObject({
      id: "email.gmail",
      packageName: "@cognidesk/integration-email-gmail",
      category: "email",
      provider: "gmail",
      trustLevel: "official",
      coverage: { scope: "support-workflow-subset" },
      metadata: {
        implementation: {
          strategy: "official-sdk",
          sdkPackage: "@googleapis/gmail",
          rawClientEscapeHatch: "GmailEmailClient.rawClient",
          integrationKitStatus: "implemented",
        },
        categoryProfile: {
          id: "email",
          conformant: true,
        },
      },
    });
    expect(gmailEmailProviderManifest.operations.map((operation: { alias: string }) => operation.alias))
      .toEqual([...GMAIL_EMAIL_OPERATION_ALIASES]);
    expect(Object.keys(client.handlers)).toEqual([...GMAIL_EMAIL_OPERATION_ALIASES]);
    expect(gmailEmailProviderManifest.coverage.notes.join(" "))
      .toContain("official service-specific @googleapis/gmail SDK");
    expect(gmailEmailProviderManifest.coverage.notes.join(" "))
      .toContain("Operation handlers are bound through @cognidesk/integration-kit");
  });

  it("binds every manifest operation through the integration-kit runtime contract", async () => {
    const rawClient = gmailClientMock();
    const integration = createGmailEmailIntegration({ rawClient });

    expect(integration.bindingReport).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(integration.operationAliases).toEqual([...GMAIL_EMAIL_OPERATION_ALIASES]);

    await expect(integration.run("email.thread.read", { threadId: "thread_1" }))
      .resolves.toMatchObject({ provider: "gmail", id: "thread_1" });
  });

  it("keeps the manifest-only module free of Gmail SDK client imports", async () => {
    const manifestSource = await readFile(
      fileURLToPath(new URL("../src/manifest.ts", import.meta.url)),
      "utf8",
    );

    expect(manifestSource).not.toMatch(/from\s+["']@googleapis\/gmail["']/);
    expect(gmailEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
  });

  it("exposes the injected official raw client for advanced Gmail methods", () => {
    const rawClient = gmailClientMock();
    const client = createGmailEmailClient({ rawClient, userId: "support@example.test" });

    expect(client.rawClient).toBe(rawClient);
    expect(client.userId).toBe("support@example.test");
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

  it("reads Gmail threads through users.threads.get and normalizes messages", async () => {
    const rawClient = gmailClientMock();
    rawClient.users.threads.get = vi.fn(async () => ({
      data: {
        id: "thread_1",
        historyId: "history_1",
        messages: [{
          id: "message_1",
          threadId: "thread_1",
          labelIds: ["INBOX"],
          payload: {
            headers: [
              { name: "Subject", value: "Need help" },
              { name: "From", value: "customer@example.test" },
              { name: "To", value: "support@example.test" },
            ],
            parts: [{
              partId: "1",
              filename: "receipt.pdf",
              mimeType: "application/pdf",
              body: { attachmentId: "att_1", size: 42 },
            }],
          },
        }],
      },
    })) as never;
    const client = createGmailEmailClient({ rawClient });

    const thread = await client.readThread({
      threadId: "thread_1",
      format: "metadata",
      metadataHeaders: ["Subject", "From", "To"],
    });

    expect(rawClient.users.threads.get).toHaveBeenCalledWith({
      userId: "me",
      id: "thread_1",
      format: "metadata",
      metadataHeaders: ["Subject", "From", "To"],
    }, undefined);
    expect(thread).toMatchObject({
      id: "thread_1",
      historyId: "history_1",
      messages: [{
        id: "message_1",
        subject: "Need help",
        from: "customer@example.test",
        to: ["support@example.test"],
        attachments: [{ attachmentId: "att_1", filename: "receipt.pdf", size: 42 }],
      }],
    });
  });

  it("sends replies and drafts via official Gmail SDK methods", async () => {
    const rawClient = gmailClientMock();
    const client = createGmailEmailClient({ rawClient });

    await client.sendReply({
      threadId: "thread_1",
      from: "support@example.test",
      to: ["customer@example.test"],
      subject: "Re: Need help",
      text: "Here is the answer.",
      inReplyTo: "<incoming@example.test>",
      references: ["<incoming@example.test>"],
    });
    await client.createDraft({
      threadId: "thread_1",
      raw: "cmF3",
    });
    await client.sendDraft({ draftId: "draft_1" });

    const sendCall = vi.mocked(rawClient.users.messages.send).mock.calls[0]?.[0] as {
      userId?: string;
      requestBody?: { raw?: string; threadId?: string };
    } | undefined;
    expect(sendCall).toMatchObject({
      userId: "me",
      requestBody: { threadId: "thread_1" },
    });
    const decoded = Buffer.from(sendCall?.requestBody?.raw ?? "", "base64url").toString("utf8");
    expect(decoded).toContain("In-Reply-To: <incoming@example.test>\r\n");
    expect(rawClient.users.drafts.create).toHaveBeenCalledWith({
      userId: "me",
      requestBody: { message: { raw: "cmF3", threadId: "thread_1" } },
    }, undefined);
    expect(rawClient.users.drafts.send).toHaveBeenCalledWith({
      userId: "me",
      requestBody: { id: "draft_1" },
    }, undefined);
  });

  it("archives, watches, and exposes Gmail extension helpers through typed handlers", async () => {
    const controller = new AbortController();
    const rawClient = gmailClientMock();
    const client = createGmailEmailClient({ rawClient });

    await expect(client.execute("email.archive", { threadId: "thread_1", signal: controller.signal }))
      .resolves.toMatchObject({ id: "thread_1" });
    await expect(client.execute("mailbox.watch", {
      topicName: "projects/project-1/topics/gmail",
      labelIds: ["INBOX"],
      labelFilterBehavior: "include",
    })).resolves.toMatchObject({ historyId: "watch_history" });
    await expect(client.execute("gmail.history.list", {
      startHistoryId: "watch_history",
      historyTypes: ["messageAdded"],
    })).resolves.toMatchObject({ historyId: "next_history" });
    await expect(client.execute("gmail.attachment.get", {
      messageId: "message_1",
      attachmentId: "att_1",
    })).resolves.toMatchObject({ data: "Ynl0ZXM" });
    await expect(client.execute("gmail.labels.list", undefined))
      .resolves.toMatchObject({ labels: [{ id: "INBOX" }] });

    expect(rawClient.users.threads.modify).toHaveBeenCalledWith({
      userId: "me",
      id: "thread_1",
      requestBody: { removeLabelIds: ["INBOX"] },
    }, { signal: controller.signal });
    expect(rawClient.users.watch).toHaveBeenCalledWith({
      userId: "me",
      requestBody: {
        topicName: "projects/project-1/topics/gmail",
        labelIds: ["INBOX"],
        labelFilterBehavior: "include",
      },
    }, undefined);
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
    await expect(parseGmailPubSubNotification({ message: {} }))
      .rejects.toThrow("message.data is required");
  });

  it("reports readiness as credential-blocked until Gmail credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: gmailEmailProviderManifest,
      expectedPackageName: "@cognidesk/integration-email-gmail",
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [gmailEmailProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "draft", "send", "update-provider-object"],
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
    expect(result.checks.some((check: { id: string; status: string }) =>
      check.id === "provider.live.profile" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes readiness conformance when Gmail live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: gmailEmailProviderManifest,
      expectedPackageName: "@cognidesk/integration-email-gmail",
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [gmailEmailProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "draft", "send", "update-provider-object"],
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

  it("types operation outputs by alias", () => {
    if (false) {
      const client = undefined as unknown as ReturnType<typeof createGmailEmailClient>;
      const thread = client.execute("email.thread.read", { threadId: "thread_1" });
      const watch = client.execute("mailbox.watch", { topicName: "projects/project-1/topics/gmail" });

      expectTypeOf<Awaited<typeof thread>>().toEqualTypeOf<GmailEmailOperationOutputMap["email.thread.read"]>();
      expectTypeOf<Awaited<typeof watch>>().toEqualTypeOf<GmailEmailOperationOutputMap["mailbox.watch"]>();
    }
  });
});

function gmailClientMock(): GmailOfficialClient {
  return {
    users: {
      getProfile: vi.fn(async () => ({
        data: { emailAddress: "support@example.test", messagesTotal: 10 },
      })),
      watch: vi.fn(async () => ({
        data: { historyId: "watch_history", expiration: "1710000000000" },
      })),
      history: {
        list: vi.fn(async () => ({
          data: { history: [{ id: "history_1" }], historyId: "next_history" },
        })),
      },
      threads: {
        get: vi.fn(async () => ({
          data: { id: "thread_1", messages: [] },
        })),
        modify: vi.fn(async () => ({
          data: { id: "thread_1", messages: [] },
        })),
      },
      messages: {
        send: vi.fn(async () => ({
          data: {
            id: "message_1",
            threadId: "thread_1",
            labelIds: ["SENT"],
            payload: { headers: [{ name: "Subject", value: "Re: Need help" }] },
          },
        })),
        attachments: {
          get: vi.fn(async () => ({
            data: { attachmentId: "att_1", data: "Ynl0ZXM" },
          })),
        },
      },
      drafts: {
        create: vi.fn(async () => ({
          data: {
            id: "draft_1",
            message: { id: "message_1", threadId: "thread_1", labelIds: ["DRAFT"] },
          },
        })),
        send: vi.fn(async () => ({
          data: { id: "message_2", threadId: "thread_1", labelIds: ["SENT"] },
        })),
      },
      labels: {
        list: vi.fn(async () => ({
          data: { labels: [{ id: "INBOX", name: "Inbox" }] },
        })),
      },
    },
  } as unknown as GmailOfficialClient;
}
