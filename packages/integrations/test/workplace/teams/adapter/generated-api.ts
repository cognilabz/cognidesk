import {
  createTeamsWorkplaceClient,
  expect,
  it,
  vi,
} from "./helpers.js";

export function registerTeamsGeneratedApiTests() {
  it("exposes generated Microsoft Graph Teams/workplace slice operations as callable functions", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "DELETE") return new Response(null, { status: 204 });
      return new Response(JSON.stringify({
        ok: true,
        url,
        method: init.method,
      }), { status: 200 });
    });
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.graphApi.ChatsChatCreateChat({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official Graph schema requires typed members.
      body: { chatType: "oneOnOne", members: [] },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.graphApi.ChatsCreateMessages({
      pathParams: { "chat-id": "19:chat@thread.v2" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official Graph schema requires @odata.type.
      body: { body: { content: "Generated send", contentType: "text" } },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.graphApi.TeamsChannelsCreateMessages({
      pathParams: { "team-id": "team_123", "channel-id": "19:channel@thread.tacv2" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official Graph schema requires @odata.type.
      body: { body: { content: "Generated channel send", contentType: "text" } },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.graphApi.SubscriptionsSubscriptionUpdateSubscription({
      pathParams: { "subscription-id": "subscription_123" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official Graph schema requires full subscription shape.
      body: { expirationDateTime: "2026-06-18T00:00:00Z" },
    })).resolves.toMatchObject({ method: "PATCH" });
    await expect(client.graphApi.SubscriptionsSubscriptionReauthorize({
      pathParams: { "subscription-id": "subscription_123" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.graphApi.SubscriptionsSubscriptionDeleteSubscription({
      pathParams: { "subscription-id": "subscription_123" },
    })).resolves.toEqual({});
    await expect(client.graphApi.CommunicationsCreateCalls({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official Graph schema requires call routing fields.
      body: { callbackUri: "https://example.test/calls" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.graphApi.UsersCreateOnlineMeetings({
      pathParams: { "user-id": "user_123" },
      query: { "$select": ["id", "joinWebUrl"] },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official Graph schema requires online meeting defaults.
      body: { startDateTime: "2026-06-17T10:00:00Z", endDateTime: "2026-06-17T10:30:00Z", subject: "Support call" },
    })).resolves.toMatchObject({ method: "POST" });

    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.graphApi.UsersUserGetUser()).rejects.toThrow("Missing Teams Graph path parameter 'user-id'");
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://graph.microsoft.com/v1.0/chats/19%3Achat%40thread.v2/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer graph-token",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      8,
      "https://graph.microsoft.com/v1.0/users/user_123/onlineMeetings?%24select=id&%24select=joinWebUrl",
      expect.objectContaining({ method: "POST" }),
    );
  });
}
