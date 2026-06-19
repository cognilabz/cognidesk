import {
  createOutlookEmailClient,
  describe,
  expect,
  it,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("exposes generated functions for the Microsoft Graph Outlook mailbox slice", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/me/sendMail") && init.method === "POST") {
        return new Response(null, { status: 202 });
      }
      if (url.endsWith("/users/support%40example.test/sendMail") && init.method === "POST") {
        return new Response(null, { status: 202 });
      }
      if (url.endsWith("/users/support%40example.test") && init.method === "GET") {
        return new Response(JSON.stringify({ id: "user_1", mail: "support@example.test" }), { status: 200 });
      }
      if (url.endsWith("/me/mailFolders/Inbox/messages/delta()?%24top=2") && init.method === "GET") {
        return new Response(JSON.stringify({ value: [{ id: "message_1" }] }), { status: 200 });
      }
      if (url.endsWith("/me/messages/message_1/attachments/createUploadSession") && init.method === "POST") {
        return new Response(JSON.stringify({ uploadUrl: "https://upload.example.test/session" }), { status: 200 });
      }
      if (url.endsWith("/subscriptions/subscription_1") && init.method === "PATCH") {
        return new Response(JSON.stringify({ id: "subscription_1", expirationDateTime: "2026-06-19T00:00:00Z" }), { status: 200 });
      }
      if (url.endsWith("/subscriptions/subscription_1/reauthorize") && init.method === "POST") {
        return new Response(JSON.stringify({}), { status: 200 });
      }
      if (url.endsWith("/subscriptions/subscription_1") && init.method === "DELETE") {
        return new Response(null, { status: 204 });
      }
      return new Response(JSON.stringify({ error: { message: `unexpected ${init.method} ${url}` } }), { status: 500 });
    });
    const client = createOutlookEmailClient({
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.graphApi.MeSendMail({
      body: {
        // @ts-expect-error Minimal fixture intentionally exercises generated Graph validation with incomplete message DTO.
        Message: { subject: "Approved reply" },
      },
    })).resolves.toEqual({});
    await expect(client.graphApi.UsersUserSendMail({
      pathParams: { "user-id": "support@example.test" },
      body: {
        // @ts-expect-error Minimal fixture intentionally exercises generated Graph validation with incomplete message DTO.
        Message: { subject: "Approved reply" },
      },
    })).resolves.toEqual({});
    await expect(client.graphApi.UsersUserGetUser({
      pathParams: { "user-id": "support@example.test" },
    })).resolves.toMatchObject({ id: "user_1" });
    await expect(client.graphApi.MeMailFoldersMailFolderMessagesDelta({
      pathParams: { "mailFolder-id": "Inbox" },
      query: { "$top": 2 },
    })).resolves.toMatchObject({ value: [{ id: "message_1" }] });
    await expect(client.graphApi.MeMessagesMessageAttachmentsCreateUploadSession({
      pathParams: { "message-id": "message_1" },
      body: { AttachmentItem: { "@odata.type": "#microsoft.graph.attachmentItem", attachmentType: "file", name: "receipt.pdf", size: 12 } },
    })).resolves.toMatchObject({ uploadUrl: "https://upload.example.test/session" });
    await expect(client.graphApi.SubscriptionsSubscriptionUpdateSubscription({
      pathParams: { "subscription-id": "subscription_1" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full subscription shape.
      body: { expirationDateTime: "2026-06-19T00:00:00Z" },
    })).resolves.toMatchObject({ id: "subscription_1" });
    await expect(client.graphApi.SubscriptionsSubscriptionReauthorize({
      pathParams: { "subscription-id": "subscription_1" },
    })).resolves.toEqual({});
    await expect(client.graphApi.SubscriptionsSubscriptionDeleteSubscription({
      pathParams: { "subscription-id": "subscription_1" },
    })).resolves.toEqual({});
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.graphApi.UsersUserGetUser()).rejects.toThrow("Missing Outlook Graph path parameter 'user-id'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.microsoft.com/v1.0/me/sendMail",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/json",
        }),
      }),
    );
  });
});
