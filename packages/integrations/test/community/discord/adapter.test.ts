import { generateKeyPairSync, sign } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createDiscordCommunityClient,
  createDiscordCommunityLiveChecks,
  DISCORD_HTTP_API_GENERATED_FUNCTION_COUNT,
  DISCORD_HTTP_API_OPERATION_COUNT,
  DISCORD_HTTP_API_PATH_COUNT,
  discordCommunityCredentialStatuses,
  discordCommunityProviderManifest,
  discordInteractionPongResponse,
  parseDiscordInteractionRequest,
  validateDiscordInteractionSignature,
} from "../../../src/community/discord/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Discord community support", () => {
    expect(discordCommunityProviderManifest).toMatchObject({
      id: "community.discord",
      packageName: "@cognidesk/integrations",
      category: "community",
      provider: "discord",
      trustLevel: "official",
    });
    expect(discordCommunityProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "thread",
        "read-provider-object",
        "notify",
        "discord.interaction-signature",
      ]));
    expect(discordCommunityProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(discordCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(discordCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("OpenAPI spec as a public preview");
    expect(discordCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("Gateway ingestion");
    expect(discordCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("Discord Interactions Endpoint URL/outgoing-webhook path only");
    expect(discordCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("Discord Webhook Events subscriptions are outside this package");
    expect(discordCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("Voice Gateway/media transport");
    expect(discordCommunityProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json",
        "https://github.com/discord/discord-api-spec",
        "https://docs.discord.com/developers/resources/message",
        "https://docs.discord.com/developers/interactions/receiving-and-responding",
        "https://docs.discord.com/developers/events/gateway",
        "https://docs.discord.com/developers/topics/voice-connections",
        "https://docs.discord.com/developers/topics/rpc",
        "https://docs.discord.com/developers/events/webhook-events",
        "https://docs.discord.com/developers/topics/rate-limits",
      ]));
    const receiveCapability = discordCommunityProviderManifest.capabilities.find((capability) =>
      capability.capability === "receive"
    );
    const threadCapability = discordCommunityProviderManifest.capabilities.find((capability) =>
      capability.capability === "thread"
    );
    expect(receiveCapability?.description).toContain("outgoing-webhook interaction requests");
    expect(receiveCapability?.description).toContain("does not subscribe to Gateway message events");
    expect(receiveCapability?.providerObjects).toEqual([
      { kind: "discordInteraction", label: "Discord Interaction" },
    ]);
    expect(threadCapability?.providerObjects).toEqual(expect.arrayContaining([
      { kind: "discordForumPost", label: "Discord Forum Post" },
      { kind: "discordMediaPost", label: "Discord Media Channel Post" },
    ]));
    expect(discordCommunityProviderManifest.privacyNotes.join(" ")).toContain("SDK-user-owned configuration");
    expect(discordCommunityProviderManifest.limitations.join(" ")).toContain("fail closed");
    expect(discordCommunityProviderManifest.limitations.join(" ")).not.toContain("OAuth scopes, gateway intents");
    expect(discordCommunityProviderManifest.limitations.join(" ")).toContain("per-route and global buckets");
    expect(discordCommunityProviderManifest.metadata?.generatedProviderSliceVerification).toMatchObject({
      provider: "discord-http-api-v10-preview-openapi",
      apiVersion: "10",
      documentedPathCount: 150,
      documentedOperationCount: 242,
      implementedOperationCount: 242,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 242,
    });
    expect(DISCORD_HTTP_API_PATH_COUNT).toBe(150);
    expect(DISCORD_HTTP_API_OPERATION_COUNT).toBe(242);
    expect(DISCORD_HTTP_API_GENERATED_FUNCTION_COUNT).toBe(242);
  });

  it("reports bot, application, public key, guild, channel, and webhook readiness without exposing secrets", () => {
    expect(discordCommunityCredentialStatuses({
      botToken: "configured",
      applicationId: "app_123",
      publicKey: "a".repeat(64),
      guildId: "guild_123",
      channelId: "channel_123",
      webhookUrl: "https://discord.com/api/webhooks/123/token",
      scopes: ["bot", "applications.commands"],
      requiredScopes: ["bot", "applications.commands"],
    })).toMatchObject([
      { requirementId: "discord-bot-token", state: "configured" },
      { requirementId: "discord-application-id", state: "configured" },
      { requirementId: "discord-public-key", state: "configured" },
      { requirementId: "discord-guild-id", state: "configured" },
      { requirementId: "discord-channel-id", state: "configured" },
      { requirementId: "discord-webhook-url", state: "configured" },
    ]);

    expect(discordCommunityCredentialStatuses({
      botToken: "configured",
      applicationId: "app_123",
      scopes: ["bot"],
      requiredScopes: ["bot", "applications.commands"],
      channelId: "channel_123",
      channelPermissionGranted: false,
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "discord-bot-token", state: "insufficient-scope" }),
      expect.objectContaining({ requirementId: "discord-channel-id", state: "permission-blocked" }),
    ]));
  });

  it("sends channel messages and executes webhook messages using Discord API shapes", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/webhooks/")) {
        return new Response(JSON.stringify({ id: "webhook_message_123" }), { status: 200 });
      }
      return new Response(JSON.stringify({ id: "message_123", content: "We can help." }), { status: 200 });
    });
    const client = createDiscordCommunityClient({
      botToken: "discord-bot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.sendChannelMessage({
      channelId: "channel_123",
      content: "We can help.",
      allowedMentions: { parse: [] },
      additionalFields: { nonce: "nonce_123" },
    })).resolves.toMatchObject({ id: "message_123" });
    await expect(client.executeWebhook({
      webhookUrl: "https://discord.com/api/webhooks/123/token",
      content: "Moderator note.",
      wait: true,
      threadId: "thread_123",
    })).resolves.toMatchObject({ id: "webhook_message_123" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://discord.com/api/v10/channels/channel_123/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bot discord-bot-token",
          "content-type": "application/json; charset=utf-8",
        }),
      }),
    );
    const channelRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(channelRequest.body)).toEqual({
      content: "We can help.",
      allowed_mentions: { parse: [] },
      nonce: "nonce_123",
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://discord.com/api/webhooks/123/token?wait=true&thread_id=thread_123",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("rejects non-Discord webhook URLs before outbound delivery", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "webhook_message_123" }), { status: 200 })
    );
    const client = createDiscordCommunityClient({
      botToken: "discord-bot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.executeWebhook({
      webhookUrl: "https://example.test/api/webhooks/123/token",
      content: "Moderator note.",
    })).rejects.toThrow("Discord webhookUrl must be a Discord webhook execution URL");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates text-channel threads and forum/media posts", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "thread_123", name: "booking-help" }), { status: 201 })
    );
    const client = createDiscordCommunityClient({
      botToken: "discord-bot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createThread({
      channelId: "channel_123",
      name: "booking-help",
      autoArchiveDuration: 1440,
      reason: "Cognidesk support thread",
    })).resolves.toMatchObject({ id: "thread_123" });
    await expect(client.createForumPost({
      channelId: "forum_123",
      name: "Cannot change booking",
      content: "The customer cannot change a booking.",
      appliedTags: ["tag_123"],
    })).resolves.toMatchObject({ name: "booking-help" });

    const threadRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string; headers: Record<string, string> };
    expect(JSON.parse(threadRequest.body)).toEqual({
      name: "booking-help",
      auto_archive_duration: 1440,
    });
    expect(threadRequest.headers["x-audit-log-reason"]).toBe("Cognidesk support thread");
    const forumRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(forumRequest.body)).toEqual({
      name: "Cannot change booking",
      applied_tags: ["tag_123"],
      message: { content: "The customer cannot change a booking." },
    });
  });

  it("reads current bot, current application, guild, channel, and channel messages", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/users/@me")) return new Response(JSON.stringify({ id: "bot_123", username: "cognidesk" }));
      if (url.endsWith("/oauth2/applications/@me")) return new Response(JSON.stringify({ id: "app_123", name: "Cognidesk" }));
      if (url.endsWith("/guilds/guild_123")) return new Response(JSON.stringify({ id: "guild_123", name: "Support" }));
      if (url.endsWith("/channels/channel_123")) return new Response(JSON.stringify({ id: "channel_123", type: 15, name: "support" }));
      return new Response(JSON.stringify([{ id: "message_1" }]), { status: 200 });
    });
    const client = createDiscordCommunityClient({
      botToken: "discord-bot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getCurrentBot()).resolves.toMatchObject({ id: "bot_123" });
    await expect(client.getCurrentApplication()).resolves.toMatchObject({ id: "app_123" });
    await expect(client.getGuild("guild_123")).resolves.toMatchObject({ name: "Support" });
    await expect(client.getChannel("channel_123")).resolves.toMatchObject({ type: 15 });
    await expect(client.listChannelMessages({
      channelId: "channel_123",
      limit: 5,
      before: "message_9",
    })).resolves.toEqual([{ id: "message_1" }]);

    expect(fetchMock).toHaveBeenLastCalledWith(
      "https://discord.com/api/v10/channels/channel_123/messages?before=message_9&limit=5",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("exposes generated functions for Discord HTTP API v10 operations", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/webhooks/")) return new Response(JSON.stringify({ id: "webhook_message_123" }), { status: 200 });
      if (url.endsWith("/channels/channel_123/messages?limit=1")) {
        return new Response(JSON.stringify([{ id: "message_1" }]), { status: 200 });
      }
      return new Response(JSON.stringify({ id: "message_123", content: "Generated hello." }), { status: 200 });
    });
    const client = createDiscordCommunityClient({
      botToken: "discord-bot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.httpApi.CreateMessage({
      pathParams: { channel_id: "channel_123" },
      body: { content: "Generated hello." },
    })).resolves.toMatchObject({ id: "message_123" });
    await expect(client.requestOperation("GET /channels/{channel_id}/messages", {
      pathParams: { channel_id: "channel_123" },
      query: { limit: 1 },
    })).resolves.toEqual([{ id: "message_1" }]);
    await expect(client.httpApi.ExecuteWebhook({
      pathParams: { webhook_id: "123", webhook_token: "token" },
      query: { wait: true },
      body: { content: "Token delivery." },
      auth: "none",
    })).resolves.toMatchObject({ id: "webhook_message_123" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://discord.com/api/v10/channels/channel_123/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bot discord-bot-token",
          "content-type": "application/json; charset=utf-8",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://discord.com/api/v10/channels/channel_123/messages?limit=1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://discord.com/api/v10/webhooks/123/token?wait=true",
      expect.objectContaining({
        method: "POST",
        headers: expect.not.objectContaining({ authorization: expect.any(String) }),
      }),
    );
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Discord HTTP API operation");
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.httpApi.CreateMessage({ body: { content: "Missing channel." } }))
      .rejects.toThrow("requires path parameter 'channel_id'");
  });

  it("validates and parses Discord interaction signatures with Ed25519", async () => {
    const { publicKey, privateKey } = generateKeyPairSync("ed25519");
    const publicKeyDer = publicKey.export({ format: "der", type: "spki" }) as Buffer;
    const publicKeyHex = publicKeyDer.subarray(-32).toString("hex");
    const rawBody = JSON.stringify({ type: 1, id: "interaction_123" });
    const timestamp = "1718565000";
    const signature = sign(null, Buffer.concat([Buffer.from(timestamp), Buffer.from(rawBody)]), privateKey).toString("hex");

    expect(validateDiscordInteractionSignature({
      publicKey: publicKeyHex,
      rawBody,
      timestamp,
      signature,
    })).toBe(true);

    const request = new Request("https://example.test/discord/interactions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-signature-ed25519": signature,
        "x-signature-timestamp": timestamp,
      },
      body: rawBody,
    });
    await expect(parseDiscordInteractionRequest(request, {
      publicKey: publicKeyHex,
      requireSignature: true,
    })).resolves.toMatchObject({
      validSignature: true,
      payload: { type: 1, id: "interaction_123" },
    });
    expect(discordInteractionPongResponse()).toEqual({ type: 1 });
  });

  it("fails closed when interaction signatures are required but missing or invalid", async () => {
    const { publicKey } = generateKeyPairSync("ed25519");
    const publicKeyDer = publicKey.export({ format: "der", type: "spki" }) as Buffer;
    const publicKeyHex = publicKeyDer.subarray(-32).toString("hex");
    const missingHeaderRequest = new Request("https://example.test/discord/interactions", {
      method: "POST",
      body: JSON.stringify({ type: 1 }),
    });
    await expect(parseDiscordInteractionRequest(missingHeaderRequest, {
      publicKey: publicKeyHex,
      requireSignature: true,
    })).rejects.toThrow("signature headers are required");

    const invalidRequest = new Request("https://example.test/discord/interactions", {
      method: "POST",
      headers: {
        "x-signature-ed25519": "00".repeat(64),
        "x-signature-timestamp": "1718565000",
      },
      body: JSON.stringify({ type: 1 }),
    });
    await expect(parseDiscordInteractionRequest(invalidRequest, {
      publicKey: publicKeyHex,
      requireSignature: true,
    })).rejects.toThrow("signature validation failed");
  });

  it("runs live-check adapters and provider conformance without real credentials", async () => {
    const checks = createDiscordCommunityLiveChecks({
      botToken: "discord-bot-token",
      applicationId: "app_123",
      guildId: "guild_123",
      channelId: "channel_123",
      client: {
        async getCurrentBot() {
          return { id: "bot_123", username: "cognidesk", bot: true };
        },
        async getCurrentApplication() {
          return { id: "app_123", name: "Cognidesk" };
        },
        async getGuild() {
          return { id: "guild_123", name: "Support" };
        },
        async getChannel() {
          return { id: "channel_123", name: "support", type: 15 };
        },
      },
    });
    const credentialStatuses = discordCommunityCredentialStatuses({
      botToken: "configured",
      applicationId: "app_123",
      publicKey: "a".repeat(64),
      guildId: "guild_123",
      channelId: "channel_123",
    });
    const result = await runProviderConformance({
      manifest: discordCommunityProviderManifest,
      expectedPackageName: "@cognidesk/integrations",
      credentialStatuses,
      live: { enabled: true, checks },
    });

    expect(result.passed).toBe(true);
  });
});
