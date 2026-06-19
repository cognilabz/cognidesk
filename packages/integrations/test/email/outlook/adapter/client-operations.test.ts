import {
  createOutlookEmailClient,
  createOutlookRecipient,
  describe,
  expect,
  it,
  ProviderApiError,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("creates draft messages through Microsoft Graph", async () => {
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
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.microsoft.com/v1.0/me/messages",
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

    expect(result).toEqual({ accepted: true, status: 202 });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.microsoft.com/v1.0/users/support%40example.test/sendMail",
      expect.objectContaining({ method: "POST" }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
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

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    expect(request.signal).toBe(controller.signal);
  });

  it("throws structured Microsoft Graph ProviderApiError metadata", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        error: {
          code: "InvalidAuthenticationToken",
          message: "Access token is expired.",
        },
      }), {
        status: 401,
        headers: { "request-id": "graph-request-id" },
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

    expect(caught).toBeInstanceOf(ProviderApiError);
    expect(caught).toMatchObject({
      provider: "outlook",
      status: 401,
      code: "InvalidAuthenticationToken",
      body: {
        error: {
          code: "InvalidAuthenticationToken",
          message: "Access token is expired.",
        },
      },
      response: {
        requestId: "graph-request-id",
      },
    });
    expect((caught as Error).message).toBe("Access token is expired. (InvalidAuthenticationToken)");
  });

  it("lists, reads, updates messages, and checks the mailbox user", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.includes("/messages?")) {
        return new Response(JSON.stringify({
          value: [{ id: "message_1", subject: "Help" }],
          "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/messages?$skip=10",
        }), { status: 200 });
      }
      if (init.method === "GET" && url.includes("/messages/message_1?")) {
        return new Response(JSON.stringify({ id: "message_1", subject: "Help" }), { status: 200 });
      }
      if (init.method === "PATCH") {
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
    const [listUrl] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(listUrl).toBe(
      "https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages?%24select=id%2Csubject&%24top=10&%24filter=isRead+eq+false&%24orderby=receivedDateTime+desc",
    );
    const updateRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      categories: ["handled"],
      isRead: true,
    });
  });

  it("covers Microsoft Graph mail delta, attachments, raw attachment values, and subscriptions", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/messages/delta")) {
        return new Response(JSON.stringify({
          value: [{ id: "message_1" }],
          "@odata.deltaLink": "https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages/delta?$deltatoken=opaque",
        }), { status: 200 });
      }
      if (url.endsWith("/attachments")) {
        return new Response(JSON.stringify({ value: [{ id: "attachment_1", name: "receipt.pdf" }] }), { status: 200 });
      }
      if (url.endsWith("/attachments/attachment_1")) {
        return new Response(JSON.stringify({ id: "attachment_1", name: "receipt.pdf" }), { status: 200 });
      }
      if (url.endsWith("/attachments/attachment_1/$value")) {
        return new Response("bytes", { status: 200 });
      }
      if (init.method === "POST" && url.endsWith("/subscriptions")) {
        return new Response(JSON.stringify({ id: "subscription_1", resource: "me/mailFolders('Inbox')/messages" }), { status: 201 });
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
      .resolves.toMatchObject({ value: [{ id: "attachment_1" }] });
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

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages/delta?%24select=id%2Csubject&%24top=2",
      expect.objectContaining({ method: "GET" }),
    );
    const subscriptionRequest = (fetchMock.mock.calls[4] as unknown[])[1] as { body: string };
    expect(JSON.parse(subscriptionRequest.body)).toEqual({
      changeType: "created,updated",
      notificationUrl: "https://example.test/outlook/webhook",
      resource: "me/mailFolders('Inbox')/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
      clientState: "client-state",
    });
  });
});
