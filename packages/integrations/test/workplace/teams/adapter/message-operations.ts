import {
  createTeamsWorkplaceClient,
  expect,
  it,
  vi,
} from "./helpers.js";

export function registerTeamsMessageOperationTests() {
  it("sends Teams channel messages through Microsoft Graph", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "message_123",
        body: { content: "Reset link sent.", contentType: "text" },
      }), { status: 201 })
    );
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.sendChannelMessage({
      teamId: "team_123",
      channelId: "19:channel@thread.tacv2",
      content: "Reset link sent.",
      importance: "normal",
      additionalFields: { metadata: { conversationId: "conversation_1" } },
    });

    expect(result.id).toBe("message_123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.microsoft.com/v1.0/teams/team_123/channels/19%3Achannel%40thread.tacv2/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer graph-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      body: { content: "Reset link sent.", contentType: "text" },
      importance: "normal",
      metadata: { conversationId: "conversation_1" },
    });
  });

  it("sends Teams chat messages and internal assist messages through Microsoft Graph", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "chat_message_123",
        chatId: "chat_123",
      }), { status: 201 })
    );
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.sendChatMessage({
      chatId: "19:chat@thread.v2",
      body: { content: "<b>Suggested answer</b>", contentType: "html" },
    })).resolves.toMatchObject({ id: "chat_message_123" });
    await expect(client.postInternalAssistMessage({
      chatId: "19:chat@thread.v2",
      content: "Supervisor review requested.",
    })).resolves.toMatchObject({ chatId: "chat_123" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.microsoft.com/v1.0/chats/19%3Achat%40thread.v2/messages",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://graph.microsoft.com/v1.0/chats/19%3Achat%40thread.v2/messages",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("rejects normal Teams sends with application permissions", async () => {
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      permissionMode: "application",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.sendChannelMessage({
      teamId: "team_123",
      channelId: "channel_123",
      content: "Application send should not be allowed.",
    })).rejects.toThrow("application permissions can send Teams messages only for migration/import flows");
    await expect(client.sendChatMessage({
      chatId: "chat_123",
      content: "Application send should not be allowed.",
    })).rejects.toThrow("application permissions can send Teams messages only for migration/import flows");
    await expect(client.postInternalAssistMessage({
      chatId: "chat_123",
      content: "Application send should not be allowed.",
    })).rejects.toThrow("application permissions can send Teams messages only for migration/import flows");
  });

  it("reads messages, updates messages where Graph permits it, and checks /me", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.includes("/channels/")) {
        return new Response(JSON.stringify({ value: [{ id: "channel_message_1" }] }), { status: 200 });
      }
      if (init.method === "GET" && url.includes("/chats/")) {
        return new Response(JSON.stringify({ value: [{ id: "chat_message_1" }] }), { status: 200 });
      }
      if (init.method === "PATCH") {
        return new Response(null, { status: 204 });
      }
      return new Response(JSON.stringify({
        id: "user_123",
        displayName: "Support Agent",
        userPrincipalName: "agent@example.test",
      }), { status: 200 });
    });
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listChannelMessages({
      teamId: "team_123",
      channelId: "channel_123",
      top: 3,
      expand: "replies",
    })).resolves.toMatchObject({ value: [{ id: "channel_message_1" }] });
    await expect(client.listChatMessages({
      chatId: "chat_123",
      top: 2,
      orderby: "lastModifiedDateTime desc",
      filter: "lastModifiedDateTime gt 2026-06-17T00:00:00Z",
    })).resolves.toMatchObject({ value: [{ id: "chat_message_1" }] });
    await expect(client.updateChannelMessage({
      teamId: "team_123",
      channelId: "channel_123",
      messageId: "message_123",
      message: { content: "Updated support note." },
    })).resolves.toEqual({});
    await expect(client.updateChatMessage({
      chatId: "chat_123",
      messageId: "message_123",
      message: { policyViolation: { verdictDetails: "none" } },
    })).resolves.toEqual({});
    await expect(client.getCurrentUser()).resolves.toMatchObject({ id: "user_123" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.microsoft.com/v1.0/teams/team_123/channels/channel_123/messages?%24top=3&%24expand=replies",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://graph.microsoft.com/v1.0/chats/chat_123/messages?%24top=2&%24orderby=lastModifiedDateTime+desc&%24filter=lastModifiedDateTime+gt+2026-06-17T00%3A00%3A00Z",
      expect.objectContaining({ method: "GET" }),
    );
    const updateRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      body: { content: "Updated support note.", contentType: "text" },
    });
    const policyUpdateRequest = (fetchMock.mock.calls[3] as unknown[])[1] as { body: string };
    expect(JSON.parse(policyUpdateRequest.body)).toEqual({
      policyViolation: { verdictDetails: "none" },
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://graph.microsoft.com/v1.0/me",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("fails closed for application-permission Teams message updates except policyViolation", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "message_123" }), { status: 200 }));
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      permissionMode: "application",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.updateChatMessage({
      chatId: "chat_123",
      messageId: "message_123",
      message: { content: "Application-only content edit." },
    })).rejects.toThrow("application permissions can update only the chatMessage policyViolation property");
    expect(fetchMock).not.toHaveBeenCalled();

    await expect(client.updateChatMessage({
      chatId: "chat_123",
      messageId: "message_123",
      message: { policyViolation: { dlpAction: "BlockAccess" } },
    })).resolves.toMatchObject({ id: "message_123" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.microsoft.com/v1.0/chats/chat_123/messages/message_123",
      expect.objectContaining({ method: "PATCH" }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      policyViolation: { dlpAction: "BlockAccess" },
    });
  });

  it("covers Teams channel replies, message reads with attachments, and Graph subscriptions", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "POST" && url.endsWith("/replies")) {
        return new Response(JSON.stringify({ id: "reply_1", replyToId: "message_1" }), { status: 201 });
      }
      if (init.method === "GET" && url.endsWith("/replies?%24top=5")) {
        return new Response(JSON.stringify({ value: [{ id: "reply_1" }] }), { status: 200 });
      }
      if (init.method === "GET" && url.includes("/messages/message_1")) {
        return new Response(JSON.stringify({
          id: "message_1",
          attachments: [{ id: "attachment_1", contentType: "reference" }],
        }), { status: 200 });
      }
      if (init.method === "GET" && url.includes("/chats/chat_123/messages/chat_message_1")) {
        return new Response(JSON.stringify({ id: "chat_message_1", attachments: [] }), { status: 200 });
      }
      if (init.method === "POST" && url.endsWith("/subscriptions")) {
        return new Response(JSON.stringify({
          id: "subscription_1",
          resource: "teams/team_123/channels/channel_123/messages",
        }), { status: 201 });
      }
      return new Response("{}", { status: 200 });
    });
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.sendChannelReply({
      teamId: "team_123",
      channelId: "channel_123",
      messageId: "message_1",
      content: "Thread reply.",
    })).resolves.toMatchObject({ id: "reply_1" });
    await expect(client.listChannelReplies({
      teamId: "team_123",
      channelId: "channel_123",
      messageId: "message_1",
      top: 5,
    })).resolves.toMatchObject({ value: [{ id: "reply_1" }] });
    await expect(client.getChannelMessage({
      teamId: "team_123",
      channelId: "channel_123",
      messageId: "message_1",
    })).resolves.toMatchObject({ attachments: [{ id: "attachment_1" }] });
    await expect(client.getChatMessage({
      chatId: "chat_123",
      messageId: "chat_message_1",
    })).resolves.toMatchObject({ id: "chat_message_1" });
    await expect(client.createSubscription({
      changeType: "created,updated",
      notificationUrl: "https://example.test/teams/notifications",
      resource: "teams/team_123/channels/channel_123/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
      clientState: "secret-state",
    })).resolves.toMatchObject({ id: "subscription_1" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.microsoft.com/v1.0/teams/team_123/channels/channel_123/messages/message_1/replies",
      expect.objectContaining({ method: "POST" }),
    );
    const subscriptionRequest = (fetchMock.mock.calls[4] as unknown[])[1] as { body: string };
    expect(JSON.parse(subscriptionRequest.body)).toEqual({
      changeType: "created,updated",
      notificationUrl: "https://example.test/teams/notifications",
      resource: "teams/team_123/channels/channel_123/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
      clientState: "secret-state",
    });
  });

  it("rejects non-Teams Graph subscription resources", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "subscription_1" }), { status: 201 }));
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createSubscription({
      changeType: "created",
      notificationUrl: "https://example.test/teams/notifications",
      resource: "users/user_123/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
    })).rejects.toThrow("Teams subscription resource must target Teams channel messages");
    expect(fetchMock).not.toHaveBeenCalled();
  });
}
