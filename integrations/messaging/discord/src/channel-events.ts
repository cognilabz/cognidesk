import type {
  DiscordChannelEvent,
  DiscordInteractionPayload,
  NormalizeDiscordChannelEventInput,
} from "./contracts.js";

export function normalizeDiscordInteractionChannelEvent(input: NormalizeDiscordChannelEventInput): DiscordChannelEvent {
  const payload = input.interaction.payload;
  const message = isRecord(payload.message) ? payload.message : undefined;
  const channelId = stringField(payload, "channel_id") ?? stringField(message, "channel_id") ?? "discord";
  const guildId = stringField(payload, "guild_id") ?? stringField(message, "guild_id");
  const messageId = stringField(message, "id");
  const eventId = stringField(payload, "id") ?? messageId;
  const streamId = [guildId, channelId, messageId].filter(Boolean).join(":");
  const verified = input.interaction.validSignature;

  return {
    nature: "message",
    direction: "inbound",
    intent: "customer-message",
    actor: discordActor(payload),
    channel: {
      channelId,
      kind: "community",
      provider: "discord",
      externalThreadId: channelId,
    },
    payload: {
      text: stringField(message, "content") ?? discordCommandSummary(payload),
      providerObject: payload,
      metadata: {
        guildId,
        channelId,
        interactionType: typeof payload.type === "number" ? payload.type : undefined,
      },
    },
    identity: {
      ...(eventId ? { dedupeKey: `discord:${eventId}` } : {}),
      streamId,
    },
    source: {
      sourceType: "provider-adapter",
      provider: "discord",
      providerPackageId: "messaging.discord",
      ...(eventId ? { eventId } : {}),
      streamId,
      raw: payload,
      ...(input.receivedAt ? { receivedAt: input.receivedAt } : {}),
      ...(verified !== undefined ? { verified } : {}),
    },
  };
}

function discordActor(payload: DiscordInteractionPayload) {
  const user = isRecord(payload.user)
    ? payload.user
    : isRecord(payload.member) && isRecord(payload.member.user)
      ? payload.member.user
      : undefined;
  const id = stringField(user, "id");
  const displayName = stringField(user, "username");
  return {
    type: "customer" as const,
    ...(id ? { id } : {}),
    ...(displayName ? { displayName } : {}),
  };
}

function discordCommandSummary(payload: DiscordInteractionPayload) {
  const data = isRecord(payload.data) ? payload.data : undefined;
  const name = stringField(data, "name");
  return name ? `/${name}` : undefined;
}

function stringField(input: Record<string, unknown> | undefined, key: string): string | undefined {
  const value = input?.[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
