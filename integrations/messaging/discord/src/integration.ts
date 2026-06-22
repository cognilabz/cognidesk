import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createDiscordMessagingClient } from "./client.js";
import type {
  DiscordMessagingClient,
  DiscordMessagingClientOptions,
  DiscordGetChannelInput,
  DiscordGetGuildInput,
  ParseDiscordInteractionRequestInput,
} from "./contracts.js";
import {
  parseDiscordInteractionRequest,
  validateDiscordInteractionSignature,
} from "./interactions.js";
import { discordMessagingManifestInput } from "./manifest.js";

export interface DiscordMessagingIntegrationOptions extends DiscordMessagingClientOptions {
  publicKey?: string;
  messagingClient?: DiscordMessagingClient;
}

export function createDiscordMessagingOperationHandlers(options: DiscordMessagingIntegrationOptions) {
  const client = options.messagingClient ?? createDiscordMessagingClient(options);

  return {
    "discord.interaction.receive": async (input: ParseDiscordInteractionRequestInput) => {
      const publicKey = input.publicKey ?? options.publicKey;
      return parseDiscordInteractionRequest(input.request, {
        ...(publicKey ? { publicKey } : {}),
        ...(input.requireSignature !== undefined ? { requireSignature: input.requireSignature } : {}),
      });
    },
    "discord.message.send": (
      input: Parameters<typeof client.sendChannelMessage>[0],
      _context: IntegrationOperationContext,
    ) => client.sendChannelMessage(input),
    "discord.thread.create": (
      input: Parameters<typeof client.createThread>[0],
      _context: IntegrationOperationContext,
    ) => client.createThread(input),
    "discord.forum-post.create": (
      input: Parameters<typeof client.createForumPost>[0],
      _context: IntegrationOperationContext,
    ) => client.createForumPost(input),
    "discord.webhook.execute": (
      input: Parameters<typeof client.executeWebhook>[0],
      _context: IntegrationOperationContext,
    ) => client.executeWebhook(input),
    "discord.bot.read": () => client.getCurrentBot(),
    "discord.application.read": () => client.getCurrentApplication(),
    "discord.guild.read": (input: DiscordGetGuildInput) => client.getGuild(input.guildId),
    "discord.channel.read": (input: DiscordGetChannelInput) => client.getChannel(input.channelId),
    "discord.channel-messages.list": (input: Parameters<typeof client.listChannelMessages>[0]) =>
      client.listChannelMessages(input),
    "discord.interaction-signature.verify": async (input: Parameters<typeof validateDiscordInteractionSignature>[0]) =>
      validateDiscordInteractionSignature({
        ...input,
        publicKey: input.publicKey ?? options.publicKey ?? "",
      }),
  } as const;
}

export function createDiscordMessagingIntegration(options: DiscordMessagingIntegrationOptions) {
  return defineIntegration({
    manifest: discordMessagingManifestInput,
    operations: createDiscordMessagingOperationHandlers(options),
  });
}

export const createDiscordIntegration = createDiscordMessagingIntegration;
export const createDiscordIntegrationOperationHandlers = createDiscordMessagingOperationHandlers;
