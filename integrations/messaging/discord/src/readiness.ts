import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { createDiscordMessagingClient } from "./client.js";
import type { DiscordCredentialStatusInput, DiscordLiveCheckOptions } from "./contracts.js";
import { discordMessagingProviderManifest } from "./manifest.js";

export function discordMessagingCredentialStatuses(
  input: DiscordCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const missingScopes = (input.requiredScopes ?? []).filter((scope) => !(input.scopes ?? []).includes(scope));
  const botState = !input.botToken
    ? "missing"
    : input.expiresAt && Date.parse(input.expiresAt) <= Date.now()
      ? "expired"
      : missingScopes.length > 0
        ? "insufficient-scope"
        : input.botInstalled === false
          ? "permission-blocked"
          : "configured";
  const channelState = !input.channelId
    ? "missing"
    : input.channelPermissionGranted === false
      ? "permission-blocked"
      : "configured";

  return [
    {
      providerPackageId: discordMessagingProviderManifest.id,
      requirementId: "discord-bot-token",
      state: botState,
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: botState === "configured"
        ? "Discord bot token is configured."
        : botState === "insufficient-scope"
          ? `Discord bot installation is missing required scopes: ${missingScopes.join(", ")}.`
          : botState === "expired"
            ? "Discord bot token is expired."
            : botState === "permission-blocked"
              ? "Discord bot token is present but the bot is not installed or lacks required guild permissions."
              : "A Discord bot token is required for REST channel, guild, and bot readiness calls.",
    },
    {
      providerPackageId: discordMessagingProviderManifest.id,
      requirementId: "discord-application-id",
      state: input.applicationId ? "configured" : "missing",
      message: input.applicationId
        ? "Discord application ID is configured."
        : "A Discord application ID is required for interaction and installation readiness.",
    },
    {
      providerPackageId: discordMessagingProviderManifest.id,
      requirementId: "discord-public-key",
      state: input.publicKey ? "configured" : "missing",
      message: input.publicKey
        ? "Discord interaction public key is configured."
        : "A Discord application public key is required to validate interaction signatures.",
    },
    {
      providerPackageId: discordMessagingProviderManifest.id,
      requirementId: "discord-guild-id",
      state: input.guildId ? "configured" : "missing",
      message: input.guildId
        ? "Discord guild ID is configured."
        : "A Discord guild/server ID is optional but recommended for messaging support routing checks.",
    },
    {
      providerPackageId: discordMessagingProviderManifest.id,
      requirementId: "discord-channel-id",
      state: channelState,
      message: channelState === "configured"
        ? "Discord channel or forum ID is configured."
        : channelState === "permission-blocked"
          ? "Discord channel is configured but bot channel permissions are blocked or incomplete."
          : "A Discord channel or forum ID is optional but recommended for message and thread readiness checks.",
    },
    {
      providerPackageId: discordMessagingProviderManifest.id,
      requirementId: "discord-webhook-url",
      state: input.webhookUrl ? "configured" : "missing",
      message: input.webhookUrl
        ? "Discord webhook URL is configured."
        : "A Discord webhook URL is optional for webhook-based outbound messages.",
    },
  ];
}

export function createDiscordMessagingLiveChecks(options: DiscordLiveCheckOptions) {
  return [
    {
      id: "current-bot",
      description: "Discord /users/@me endpoint is reachable with the configured bot token.",
      requiredCredentialIds: ["discord-bot-token"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createDiscordMessagingClient(options);
        const bot = await client.getCurrentBot();
        if (context.signal?.aborted) throw new Error("Discord current bot live check aborted.");
        return {
          details: {
            id: typeof bot.id === "string" ? bot.id : undefined,
            username: typeof bot.username === "string" ? bot.username : undefined,
            bot: typeof bot.bot === "boolean" ? bot.bot : undefined,
          },
        };
      },
    },
    {
      id: "current-application",
      description: "Discord current bot application endpoint is reachable with the configured bot token.",
      requiredCredentialIds: ["discord-bot-token", "discord-application-id"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createDiscordMessagingClient(options);
        const application = await client.getCurrentApplication();
        if (context.signal?.aborted) throw new Error("Discord current application live check aborted.");
        return {
          details: {
            id: typeof application.id === "string" ? application.id : undefined,
            configuredApplicationId: options.applicationId,
            name: typeof application.name === "string" ? application.name : undefined,
          },
        };
      },
    },
    {
      id: "guild",
      description: "Discord guild endpoint is reachable when SDK configuration includes a guild ID.",
      requiredCredentialIds: ["discord-bot-token", "discord-guild-id"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.guildId) throw new Error("Discord guild ID is required for the guild live check.");
        const client = options.client ?? createDiscordMessagingClient(options);
        const guild = await client.getGuild(options.guildId);
        if (context.signal?.aborted) throw new Error("Discord guild live check aborted.");
        return {
          details: {
            id: typeof guild.id === "string" ? guild.id : undefined,
            name: typeof guild.name === "string" ? guild.name : undefined,
          },
        };
      },
    },
    {
      id: "channel",
      description: "Discord channel endpoint is reachable when SDK configuration includes a channel ID.",
      requiredCredentialIds: ["discord-bot-token", "discord-channel-id"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.channelId) throw new Error("Discord channel ID is required for the channel live check.");
        const client = options.client ?? createDiscordMessagingClient(options);
        const channel = await client.getChannel(options.channelId);
        if (context.signal?.aborted) throw new Error("Discord channel live check aborted.");
        return {
          details: {
            id: typeof channel.id === "string" ? channel.id : undefined,
            name: typeof channel.name === "string" ? channel.name : undefined,
            type: typeof channel.type === "number" ? channel.type : undefined,
          },
        };
      },
    },
  ];
}
