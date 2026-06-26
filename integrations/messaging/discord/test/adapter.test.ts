import { createHash, generateKeyPairSync, sign } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createDiscordMessagingClient,
  createDiscordIntegration,
  createDiscordMessagingIntegration,
  createDiscordMessagingLiveChecks,
  discordMessagingCredentialStatuses,
  discordMessagingOperationAliases,
  discordMessagingProviderManifest,
  discordIntegrationManifest,
  discordInteractionPongResponse,
  normalizeDiscordInteractionChannelEvent,
  parseDiscordInteractionRequest,
  validateDiscordInteractionSignature,
} from "../src/index.js";
import type { DiscordInteractionPayload, DiscordRestLike } from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/integration-messaging-discord", () => {
  it("exports split package metadata with exact provider-namespaced operation bindings", () => {
    expect(discordMessagingProviderManifest).toMatchObject({
      id: "messaging.discord",
      packageName: "@cognidesk/integration-messaging-discord",
      provider: "discord",
      category: "messaging",
      trustLevel: "official",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(discordMessagingProviderManifest.operations.map((operation) => operation.alias))
      .toEqual([...discordMessagingOperationAliases]);
    expect(discordMessagingProviderManifest.operations.every((operation) => operation.alias.startsWith("discord.")))
      .toBe(true);
    expect(discordMessagingProviderManifest.coverage.notes.join(" ")).toContain("discord.js");
    expect(discordMessagingProviderManifest.coverage.notes.join(" ")).toContain("removes the generated Discord HTTP API clone");
    expect(discordMessagingProviderManifest.metadata?.providerClient).toMatchObject({
      package: "discord.js",
      importPolicy: "runtime-entrypoint-only",
    });
    expect(discordMessagingProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk-support-slice",
      sdkPackage: "discord.js",
      sdkRuntimeSurface: "REST + Routes + Client gateway",
      operationMethodMap: {
        "discord.message.send": "REST.post(Routes.channelMessages)",
        "discord.webhook.execute": "REST.post(Routes.webhook)",
        "discord.channel-messages.list": "REST.get(Routes.channelMessages)",
      },
      strictExceptions: {
        "discord.interaction.receive": expect.stringContaining("local protocol handling"),
      },
    });
    expect(discordMessagingProviderManifest.operations
      .filter((operation) => operation.providerOperation)
      .map((operation) => operation.providerOperation))
      .not.toEqual(expect.arrayContaining([
        expect.stringMatching(/^(GET|POST|PATCH|PUT|DELETE) /),
      ]));

    const integration = createDiscordMessagingIntegration({
      botToken: "discord-bot-token",
      publicKey: "a".repeat(64),
      messagingClient: fakeDiscordMessagingClient(),
    });
    const integrationAlias = createDiscordIntegration({
      botToken: "discord-bot-token",
      publicKey: "a".repeat(64),
      messagingClient: fakeDiscordMessagingClient(),
    });
    expect(integration.operationAliases).toEqual([...discordMessagingOperationAliases]);
    expect(integrationAlias.manifest.id).toBe("messaging.discord");
    expect(discordIntegrationManifest.packageName).toBe("@cognidesk/integration-messaging-discord");
    expect(discordMessagingProviderManifest.metadata).toMatchObject({
      integrationName: "Discord Integration",
      integrationPackageName: "@cognidesk/integration-messaging-discord",
      integrationEntryPoints: {
        manifest: "@cognidesk/integration-messaging-discord/manifest",
        runtime: "@cognidesk/integration-messaging-discord/runtime",
      },
    });
    expect(assertIntegrationConformance({
      manifest: integration.manifest,
      operations: integration.operations,
    })).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
  });

  it("uses discord.js REST and Routes-backed calls for messaging support operations", async () => {
    const restCalls: Array<{ method: string; route: string; options?: unknown }> = [];
    const rest: DiscordRestLike = {
      async get(route, options) {
        restCalls.push({ method: "GET", route, options });
        if (route === "/users/@me") return { id: "bot_123", username: "cognidesk", bot: true };
        if (route === "/oauth2/applications/@me") return { id: "app_123", name: "Cognidesk" };
        if (route === "/guilds/guild_123") return { id: "guild_123", name: "Support" };
        if (route === "/channels/channel_123") return { id: "channel_123", type: 15, name: "support" };
        if (route === "/channels/channel_123/messages") return [{ id: "message_1" }];
        return [{ id: "message_1" }];
      },
      async post(route, options) {
        restCalls.push({ method: "POST", route, options });
        if (route.startsWith("/webhooks/")) return { id: "webhook_message_123" };
        return route.includes("/threads")
          ? { id: "thread_123", name: "booking-help" }
          : { id: "message_123", content: "We can help." };
      },
    };
    const client = createDiscordMessagingClient({
      botToken: "discord-bot-token",
      rest,
    });

    await expect(client.sendChannelMessage({
      channelId: "channel_123",
      content: "We can help.",
      allowedMentions: { parse: [] },
      additionalFields: { nonce: "nonce_123" },
    })).resolves.toMatchObject({ id: "message_123" });
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
    })).resolves.toMatchObject({ id: "thread_123" });
    await expect(client.executeWebhook({
      webhookUrl: "https://discord.com/api/webhooks/123/token",
      content: "Moderator note.",
      wait: true,
      threadId: "thread_123",
    })).resolves.toMatchObject({ id: "webhook_message_123" });
    await expect(client.getCurrentBot()).resolves.toMatchObject({ id: "bot_123" });
    await expect(client.getCurrentApplication()).resolves.toMatchObject({ id: "app_123" });
    await expect(client.getGuild("guild_123")).resolves.toMatchObject({ name: "Support" });
    await expect(client.getChannel("channel_123")).resolves.toMatchObject({ type: 15 });
    await expect(client.listChannelMessages({
      channelId: "channel_123",
      before: "message_9",
      limit: 5,
    })).resolves.toEqual([{ id: "message_1" }]);

    expect(restCalls).toEqual(expect.arrayContaining([
      expect.objectContaining({ method: "POST", route: "/channels/channel_123/messages" }),
      expect.objectContaining({ method: "POST", route: "/channels/channel_123/threads" }),
      expect.objectContaining({ method: "POST", route: "/channels/forum_123/threads" }),
      expect.objectContaining({ method: "POST", route: "/webhooks/123/token" }),
      expect.objectContaining({ method: "GET", route: "/channels/channel_123/messages" }),
    ]));
    const messageCall = restCalls.find((call) => call.route === "/channels/channel_123/messages");
    expect(messageCall?.options).toMatchObject({
      body: {
        content: "We can help.",
        allowed_mentions: { parse: [] },
        nonce: "nonce_123",
      },
    });
    const webhookCall = restCalls.find((call) => call.route === "/webhooks/123/token");
    expect(webhookCall?.options).toMatchObject({
      auth: false,
      body: {
        content: "Moderator note.",
      },
    });
    expect((webhookCall?.options as { query?: URLSearchParams } | undefined)?.query?.toString())
      .toBe("wait=true&thread_id=thread_123");
    expect((restCalls.find((call) => call.method === "GET" && call.route === "/channels/channel_123/messages")?.options as { query?: URLSearchParams } | undefined)?.query?.toString())
      .toBe("before=message_9&limit=5");

    const callsBeforeRejectedWebhook = restCalls.length;
    await expect(client.executeWebhook({
      webhookUrl: "https://example.test/api/webhooks/123/token",
      content: "Nope.",
    })).rejects.toThrow("Discord webhookUrl must be a Discord webhook execution URL");
    expect(restCalls).toHaveLength(callsBeforeRejectedWebhook);

    await expect(createDiscordMessagingClient({}).sendChannelMessage({
      channelId: "channel_123",
      content: "Needs a bot token.",
    })).rejects.toThrow("Discord botToken is required for discord.message.send");
  });

  it("validates and parses Discord interaction signatures and normalizes Channel Events", async () => {
    const { publicKey, privateKey } = generateKeyPairSync("ed25519");
    const publicKeyDer = publicKey.export({ format: "der", type: "spki" }) as Buffer;
    const publicKeyHex = publicKeyDer.subarray(-32).toString("hex");
    const rawBody = JSON.stringify({
      type: 2,
      id: "interaction_123",
      guild_id: "guild_123",
      channel_id: "channel_123",
      user: { id: "user_123", username: "customer" },
      data: { name: "support" },
      message: { id: "message_123", content: "Need help", channel_id: "channel_123" },
    });
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
    const interaction = await parseDiscordInteractionRequest(request, {
      publicKey: publicKeyHex,
      requireSignature: true,
    });
    const event = normalizeDiscordInteractionChannelEvent({ interaction, receivedAt: "2026-06-21T00:00:00.000Z" });

    expect(discordInteractionPongResponse()).toEqual({ type: 1 });
    expect(event).toMatchObject({
      nature: "message",
      channel: {
        kind: "community",
        provider: "discord",
        externalThreadId: "channel_123",
      },
      actor: {
        id: "user_123",
        displayName: "customer",
      },
      payload: {
        text: "Need help",
      },
      identity: {
        dedupeKey: "discord:interaction_123",
        streamId: "guild_123:channel_123:message_123",
      },
      source: {
        provider: "discord",
        providerPackageId: "messaging.discord",
        verified: true,
      },
    });

    const invalidRequest = new Request("https://example.test/discord/interactions", {
      method: "POST",
      headers: {
        "x-signature-ed25519": "00".repeat(64),
        "x-signature-timestamp": timestamp,
      },
      body: rawBody,
    });
    await expect(parseDiscordInteractionRequest(invalidRequest, {
      publicKey: publicKeyHex,
      requireSignature: true,
    })).rejects.toThrow("signature validation failed");
  });

  it("uses a bounded raw-body hash when Discord omits interaction and message ids", () => {
    const rawBody = JSON.stringify({
      type: 2,
      guild_id: "guild_123",
      channel_id: "channel_123",
      user: { id: "user_123", username: "customer" },
      data: { name: "support" },
      message: { content: "Need help ".repeat(500) },
    });
    const eventId = `raw-body-sha256:${createHash("sha256").update(rawBody).digest("hex").slice(0, 32)}`;
    const event = normalizeDiscordInteractionChannelEvent({
      interaction: {
        rawBody,
        payload: JSON.parse(rawBody) as DiscordInteractionPayload,
        validSignature: true,
      },
    });

    expect(event).toMatchObject({
      identity: {
        dedupeKey: `discord:${eventId}`,
        streamId: "guild_123:channel_123",
      },
      source: {
        eventId,
        verified: true,
      },
    });
    if (!event.identity?.dedupeKey) throw new Error("Discord interaction should include a dedupe key.");
    expect(event.identity.dedupeKey.length).toBeLessThan(80);
    expect(event.identity.dedupeKey).not.toContain("Need help");
  });

  it("passes readiness and provider conformance without importing provider SDKs from /manifest", async () => {
    const checks = createDiscordMessagingLiveChecks({
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
    const result = await runProviderConformance({
      manifest: discordMessagingProviderManifest,
      expectedPackageName: "@cognidesk/integration-messaging-discord",
      credentialStatuses: discordMessagingCredentialStatuses({
        botToken: "configured",
        applicationId: "app_123",
        publicKey: "a".repeat(64),
        guildId: "guild_123",
        channelId: "channel_123",
      }),
      live: { enabled: true, checks },
    });
    expect(result.status).toBe("passed");

    const manifestSource = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(manifestSource).not.toMatch(/(?:from\s+["']discord\.js["']|import\s+["']discord\.js["'])/);
    const packageJson = JSON.parse(await readFile(path.join(packageRoot, "package.json"), "utf8")) as {
      dependencies: Record<string, string>;
      exports: Record<string, unknown>;
    };
    expect(packageJson.dependencies).toHaveProperty("discord.js");
    expect(packageJson.exports).toHaveProperty("./manifest");
  });
});

function fakeDiscordMessagingClient() {
  return {
    rest: {} as never,
    async sendChannelMessage() {
      return { id: "message_123" };
    },
    async createThread() {
      return { id: "thread_123" };
    },
    async createForumPost() {
      return { id: "thread_123" };
    },
    async executeWebhook() {
      return { id: "webhook_message_123" };
    },
    async getCurrentBot() {
      return { id: "bot_123" };
    },
    async getCurrentApplication() {
      return { id: "app_123" };
    },
    async getGuild() {
      return { id: "guild_123" };
    },
    async getChannel() {
      return { id: "channel_123" };
    },
    async listChannelMessages() {
      return [];
    },
    createGatewayClient() {
      return {} as never;
    },
  };
}
