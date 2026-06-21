import {
  createTeamsWorkplaceClient,
  expect,
  graphFetchCall,
  graphFetchJsonBody,
  IntegrationError,
  it,
  vi,
} from "./helpers.js";

export function registerTeamsMessageOperationTests() {
  it("sends Teams channel messages through the official Microsoft Graph client", async () => {
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
    const request = graphFetchCall(fetchMock);
    expect(request.url).toBe("https://graph.microsoft.com/v1.0/teams/team_123/channels/19%3Achannel%40thread.tacv2/messages");
    expect(request.method).toBe("POST");
    expect(request.headers.get("authorization")).toBe("Bearer graph-token");
    expect(graphFetchJsonBody(fetchMock)).toEqual({
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

    expect(graphFetchCall(fetchMock, 0)).toMatchObject({
      url: "https://graph.microsoft.com/v1.0/chats/19%3Achat%40thread.v2/messages",
      method: "POST",
    });
    expect(graphFetchCall(fetchMock, 1)).toMatchObject({
      url: "https://graph.microsoft.com/v1.0/chats/19%3Achat%40thread.v2/messages",
      method: "POST",
    });
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

  it("reads messages, updates messages where Graph permits it, and preserves OData continuation links", async () => {
    const fetchMock = vi.fn(async (request: RequestInfo | URL, init?: RequestInit) => {
      const url = request instanceof Request ? request.url : request.toString();
      const method = init?.method ?? (request instanceof Request ? request.method : "GET");
      if (method === "GET" && url.includes("/channels/")) {
        return new Response(JSON.stringify({
          value: [{ id: "channel_message_1" }],
          "@odata.nextLink": "https://graph.microsoft.com/v1.0/teams/team_123/channels/channel_123/messages?$skip=10",
        }), { status: 200 });
      }
      if (method === "GET" && url.includes("/chats/")) {
        return new Response(JSON.stringify({
          value: [{ id: "chat_message_1" }],
          "@odata.nextLink": "https://graph.microsoft.com/v1.0/chats/chat_123/messages?$skip=10",
        }), { status: 200 });
      }
      if (method === "PATCH") {
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
    })).resolves.toMatchObject({ value: [{ id: "channel_message_1" }], nextLink: expect.stringContaining("$skip=10") });
    await expect(client.listChatMessages({
      chatId: "chat_123",
      top: 2,
      orderby: "lastModifiedDateTime desc",
      filter: "lastModifiedDateTime gt 2026-06-17T00:00:00Z",
    })).resolves.toMatchObject({ value: [{ id: "chat_message_1" }], nextLink: expect.stringContaining("$skip=10") });
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

    const channelListUrl = new URL(graphFetchCall(fetchMock, 0).url);
    expect(channelListUrl.pathname).toBe("/v1.0/teams/team_123/channels/channel_123/messages");
    expect(channelListUrl.searchParams.get("$top")).toBe("3");
    expect(channelListUrl.searchParams.get("$expand")).toBe("replies");
    const chatListUrl = new URL(graphFetchCall(fetchMock, 1).url);
    expect(chatListUrl.pathname).toBe("/v1.0/chats/chat_123/messages");
    expect(chatListUrl.searchParams.get("$top")).toBe("2");
    expect(chatListUrl.searchParams.get("$orderby")).toBe("lastModifiedDateTime desc");
    expect(chatListUrl.searchParams.get("$filter")).toBe("lastModifiedDateTime gt 2026-06-17T00:00:00Z");
    expect(graphFetchJsonBody(fetchMock, 2)).toEqual({
      body: { content: "Updated support note.", contentType: "text" },
    });
    expect(graphFetchJsonBody(fetchMock, 3)).toEqual({
      policyViolation: { verdictDetails: "none" },
    });
    expect(graphFetchCall(fetchMock, 4)).toMatchObject({
      url: "https://graph.microsoft.com/v1.0/me",
      method: "GET",
    });
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

    expect(graphFetchCall(fetchMock)).toMatchObject({
      url: "https://graph.microsoft.com/v1.0/chats/chat_123/messages/message_123",
      method: "PATCH",
    });
    expect(graphFetchJsonBody(fetchMock)).toEqual({
      policyViolation: { dlpAction: "BlockAccess" },
    });
  });

  it("covers Teams channel replies, message reads with attachments, Graph subscriptions, and raw requests", async () => {
    const fetchMock = vi.fn(async (request: RequestInfo | URL, init?: RequestInit) => {
      const url = request instanceof Request ? request.url : request.toString();
      const method = init?.method ?? (request instanceof Request ? request.method : "GET");
      if (method === "POST" && url.endsWith("/replies")) {
        return new Response(JSON.stringify({ id: "reply_1", replyToId: "message_1" }), { status: 201 });
      }
      if (method === "GET" && url.includes("/replies?")) {
        return new Response(JSON.stringify({ value: [{ id: "reply_1" }] }), { status: 200 });
      }
      if (method === "GET" && url.includes("/messages/message_1")) {
        return new Response(JSON.stringify({
          id: "message_1",
          attachments: [{ id: "attachment_1", contentType: "reference" }],
        }), { status: 200 });
      }
      if (method === "GET" && url.includes("/chats/chat_123/messages/chat_message_1")) {
        return new Response(JSON.stringify({ id: "chat_message_1", attachments: [] }), { status: 200 });
      }
      if (method === "POST" && url.endsWith("/subscriptions")) {
        return new Response(JSON.stringify({
          id: "subscription_1",
          resource: "teams/team_123/channels/channel_123/messages",
        }), { status: 201 });
      }
      if (new URL(url).pathname.endsWith("/teams/team_123/channels/channel_123/messages/raw-message")) {
        return new Response(JSON.stringify({ id: "raw-message" }), { status: 200 });
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
    await expect(client.requestGraph({
      method: "GET",
      path: "/teams/{teamId}/channels/{channelId}/messages/{messageId}",
      pathParams: {
        teamId: "team_123",
        channelId: "channel_123",
        messageId: "raw-message",
      },
      query: { "$select": "id" },
      headers: { "client-request-id": "request_1" },
    })).resolves.toEqual({ id: "raw-message" });

    expect(graphFetchCall(fetchMock, 0)).toMatchObject({
      url: "https://graph.microsoft.com/v1.0/teams/team_123/channels/channel_123/messages/message_1/replies",
      method: "POST",
    });
    expect(graphFetchJsonBody(fetchMock, 4)).toEqual({
      changeType: "created,updated",
      notificationUrl: "https://example.test/teams/notifications",
      resource: "teams/team_123/channels/channel_123/messages",
      expirationDateTime: "2026-06-18T00:00:00Z",
      clientState: "secret-state",
    });
    const rawRequest = graphFetchCall(fetchMock, 5);
    expect(rawRequest.url).toContain("/v1.0/teams/team_123/channels/channel_123/messages/raw-message");
    expect(rawRequest.headers.get("client-request-id")).toBe("request_1");
  });

  it("normalizes Microsoft Graph errors into IntegrationError", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        error: {
          code: "TooManyRequests",
          message: "Rate limit exceeded.",
          innerError: {
            "request-id": "graph-request-id",
            date: "2026-06-18T00:00:00Z",
          },
        },
      }), {
        status: 429,
        headers: {
          "content-type": "application/json",
          "request-id": "graph-request-id",
        },
      })
    );
    const client = createTeamsWorkplaceClient({
      accessToken: "graph-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    let caught: unknown;
    try {
      await client.getCurrentUser();
    } catch (error) {
      caught = error;
    }

    expect(caught).toBeInstanceOf(IntegrationError);
    expect(caught).toMatchObject({
      provider: "teams",
      code: "provider-rate-limited",
      statusCode: 429,
      requestId: "graph-request-id",
      retryable: true,
      details: { graphCode: "TooManyRequests" },
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
