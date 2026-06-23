import {
  createOutlookEmailClient,
  createOutlookRecipient,
  describe,
  expect,
  graphFetchCall,
  graphFetchJsonBody,
  IntegrationError,
  it,
  vi,
} from "./helpers.js";

describe("@cognidesk/integration-email-outlook client", () => {
  it("creates draft messages through the official Microsoft Graph client", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "draft_1",
        subject: "Reset help",
        conversationId: "conversation_1",
      }), { status: 201 })
    );
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const draft = await client.createDraft({
      subject: "Reset help",
      body: { contentType: "text", content: "Here is the reset link." },
      toRecipients: [createOutlookRecipient("customer@example.test", "Customer")],
      categories: ["cognidesk"],
    });

    expect(draft.id).toBe("draft_1");
    const request = graphFetchCall(fetchMock);
    expect(request.url).toBe("https://graph.microsoft.com/v1.0/me/messages");
    expect(request.method).toBe("POST");
    expect(request.headers.get("authorization")).toBe("Bearer oauth-token");
    expect(graphFetchJsonBody(fetchMock)).toEqual({
      subject: "Reset help",
      body: { contentType: "text", content: "Here is the reset link." },
      toRecipients: [{
        emailAddress: {
          address: "customer@example.test",
          name: "Customer",
        },
      }],
      categories: ["cognidesk"],
    });
  });

  it("sends mail without imposing SDK outbound policy defaults", async () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 202 }));
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      userId: "support@example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.sendMail({
      message: {
        subject: "Approved reply",
        body: { contentType: "html", content: "<p>Your reset link is ready.</p>" },
        toRecipients: [createOutlookRecipient("customer@example.test")],
      },
      saveToSentItems: true,
    });

    expect(result).toEqual({ accepted: true });
    expect(graphFetchCall(fetchMock)).toMatchObject({
      url: "https://graph.microsoft.com/v1.0/users/support%40example.test/sendMail",
      method: "POST",
    });
    expect(graphFetchJsonBody(fetchMock)).toEqual({
      message: {
        subject: "Approved reply",
        body: { contentType: "html", content: "<p>Your reset link is ready.</p>" },
        toRecipients: [{ emailAddress: { address: "customer@example.test" } }],
      },
      saveToSentItems: true,
    });
  });

  it("passes per-operation AbortSignal through Microsoft Graph fetch", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "user_1", mail: "support@example.test" }), { status: 200 })
    );
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.getMailboxUser({ signal: controller.signal });

    expect(graphFetchCall(fetchMock).signal).toBe(controller.signal);
  });

  it("keeps concurrent clients on their scoped Microsoft Graph fetch transports", async () => {
    const fetchA = vi.fn(async () =>
      new Response(JSON.stringify({ id: "mailbox_a", mail: "a@example.test" }), { status: 200 })
    );
    const fetchB = vi.fn(async () =>
      new Response(JSON.stringify({ id: "mailbox_b", mail: "b@example.test" }), { status: 200 })
    );
    const clientA = createOutlookEmailClient({
      accessToken: "token-a",
      fetch: fetchA as unknown as typeof fetch,
    });
    const clientB = createOutlookEmailClient({
      accessToken: "token-b",
      fetch: fetchB as unknown as typeof fetch,
    });

    const [mailboxA, mailboxB] = await Promise.all([
      clientA.getMailboxUser(),
      clientB.getMailboxUser(),
    ]);

    expect(mailboxA).toMatchObject({ id: "mailbox_a", mail: "a@example.test" });
    expect(mailboxB).toMatchObject({ id: "mailbox_b", mail: "b@example.test" });
    expect(fetchA).toHaveBeenCalledTimes(1);
    expect(fetchB).toHaveBeenCalledTimes(1);
    expect(graphFetchCall(fetchA).headers.get("authorization")).toBe("Bearer token-a");
    expect(graphFetchCall(fetchB).headers.get("authorization")).toBe("Bearer token-b");
  });

  it("throws structured Microsoft Graph IntegrationError metadata", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        error: {
          code: "InvalidAuthenticationToken",
          message: "Access token is expired.",
          innerError: {
            "request-id": "graph-request-id",
            date: "2026-06-18T00:00:00Z",
          },
        },
      }), {
        status: 401,
        headers: {
          "content-type": "application/json",
          "request-id": "graph-request-id",
        },
      })
    );
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    let caught: unknown;
    try {
      await client.getMailboxUser();
    } catch (error) {
      caught = error;
    }

    expect(caught).toBeInstanceOf(IntegrationError);
    expect(caught).toMatchObject({
      provider: "outlook",
      statusCode: 401,
      code: "provider-auth",
      requestId: "graph-request-id",
      details: {
        graphCode: "InvalidAuthenticationToken",
      },
    });
    expect((caught as Error).message).toContain("Access token is expired");
  });

  it("lists, reads, updates messages, and exposes OData continuation links", async () => {
    const fetchMock = vi.fn(async (request: RequestInfo | URL, init?: RequestInit) => {
      const url = request instanceof Request ? request.url : request.toString();
      const method = init?.method ?? (request instanceof Request ? request.method : "GET");
      if (method === "GET" && url.includes("/messages?")) {
        return new Response(JSON.stringify({
          value: [{ id: "message_1", subject: "Help" }],
          "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/messages?$skip=10",
        }), { status: 200 });
      }
      if (method === "GET" && url.includes("/messages/message_1?")) {
        return new Response(JSON.stringify({ id: "message_1", subject: "Help" }), { status: 200 });
      }
      if (method === "PATCH") {
        return new Response(JSON.stringify({ id: "message_1", isRead: true, categories: ["handled"] }), { status: 200 });
      }
      return new Response(JSON.stringify({
        id: "user_1",
        mail: "support@example.test",
        userPrincipalName: "support@example.test",
      }), { status: 200 });
    });
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const listed = await client.listMessages({
      folderId: "Inbox",
      top: 10,
      filter: "isRead eq false",
      orderBy: ["receivedDateTime desc"],
      select: ["id", "subject"],
    });
    const message = await client.getMessage({
      id: "message_1",
      select: ["id", "subject"],
      expand: ["attachments"],
    });
    const updated = await client.updateMessage({
      id: "message_1",
      isRead: true,
      categories: ["handled"],
    });
    const mailboxUser = await client.getMailboxUser();

    expect(listed.value).toHaveLength(1);
    expect(listed.nextLink).toContain("$skip=10");
    expect(message.subject).toBe("Help");
    expect(updated.isRead).toBe(true);
    expect(mailboxUser.mail).toBe("support@example.test");
    const listUrl = new URL(graphFetchCall(fetchMock, 0).url);
    expect(listUrl.pathname).toBe("/v1.0/me/mailFolders/Inbox/messages");
    expect(listUrl.searchParams.get("$select")).toBe("id,subject");
    expect(listUrl.searchParams.get("$top")).toBe("10");
    expect(listUrl.searchParams.get("$filter")).toBe("isRead eq false");
    expect(listUrl.searchParams.get("$orderby")).toBe("receivedDateTime desc");
    expect(graphFetchJsonBody(fetchMock, 2)).toEqual({
      categories: ["handled"],
      isRead: true,
    });
  });

  it("covers Microsoft Graph mail delta, attachments, raw attachment values, subscriptions, and raw requests", async () => {
    const fetchMock = vi.fn(async (request: RequestInfo | URL, init?: RequestInit) => {
      const url = request instanceof Request ? request.url : request.toString();
      const method = init?.method ?? (request instanceof Request ? request.method : "GET");
      if (url.includes("/messages/delta")) {
        return new Response(JSON.stringify({
          value: [{ id: "message_1" }],
          "@odata.deltaLink": "https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages/delta?$deltatoken=opaque",
        }), { status: 200 });
      }
      if (url.endsWith("/attachments")) {
        return new Response(JSON.stringify({
          value: [{ id: "attachment_1", name: "receipt.pdf" }],
          "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/messages/message_1/attachments?$skip=1",
        }), { status: 200 });
      }
      if (url.endsWith("/attachments/attachment_1")) {
        return new Response(JSON.stringify({ id: "attachment_1", name: "receipt.pdf" }), { status: 200 });
      }
      if (url.endsWith("/attachments/attachment_1/$value")) {
        return new Response("bytes", { status: 200 });
      }
      if (method === "POST" && url.endsWith("/subscriptions")) {
        return new Response(JSON.stringify({ id: "subscription_1", resource: "me/mailFolders('Inbox')/messages" }), { status: 201 });
      }
      if (new URL(url).pathname.endsWith("/me/messages/raw-message")) {
        return new Response(JSON.stringify({ id: "raw-message" }), { status: 200 });
      }
      return new Response("{}", { status: 200 });
    });
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.deltaMessages({
      folderId: "Inbox",
      top: 2,
      select: ["id", "subject"],
    })).resolves.toMatchObject({ value: [{ id: "message_1" }], deltaLink: expect.stringContaining("$deltatoken") });
    await expect(client.listAttachments({ messageId: "message_1" }))
      .resolves.toMatchObject({ value: [{ id: "attachment_1" }], nextLink: expect.stringContaining("$skip=1") });
    await expect(client.getAttachment({ messageId: "message_1", attachmentId: "attachment_1" }))
      .resolves.toMatchObject({ name: "receipt.pdf" });
    await expect(client.getAttachmentValue({ messageId: "message_1", attachmentId: "attachment_1" }).then((r) => r.text()))
      .resolves.toBe("bytes");
    await expect(client.createSubscription({
      changeType: "created,updated",
      notificationUrl: "https://example.test/outlook/webhook",
      resource: "me/mailFolders('Inbox')/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
      clientState: "client-state",
    })).resolves.toMatchObject({ id: "subscription_1" });
    await expect(client.requestGraph({
      method: "GET",
      path: "/me/messages/{messageId}",
      pathParams: { messageId: "raw-message" },
      query: { "$select": "id" },
      headers: { "client-request-id": "request_1" },
    })).resolves.toEqual({ id: "raw-message" });

    const deltaUrl = new URL(graphFetchCall(fetchMock, 0).url);
    expect(deltaUrl.pathname).toBe("/v1.0/me/mailFolders/Inbox/messages/delta");
    expect(deltaUrl.searchParams.get("$select")).toBe("id,subject");
    expect(deltaUrl.searchParams.get("$top")).toBe("2");
    expect(graphFetchJsonBody(fetchMock, 4)).toEqual({
      changeType: "created,updated",
      notificationUrl: "https://example.test/outlook/webhook",
      resource: "me/mailFolders('Inbox')/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
      clientState: "client-state",
    });
    const rawRequest = graphFetchCall(fetchMock, 5);
    expect(rawRequest.url).toContain("/v1.0/me/messages/raw-message");
    expect(rawRequest.headers.get("client-request-id")).toBe("request_1");
  });
});
