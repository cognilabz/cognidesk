export type DiscordThreadAutoArchiveDuration = 60 | 1440 | 4320 | 10080;

export interface DiscordGatewayServiceConfig {
  applicationId: string;
  guildId: string;
  supportChannelId: string;
  webAppUrl: string;
  threadAutoArchiveDuration: DiscordThreadAutoArchiveDuration;
  mirrorPollIntervalMs: number;
}

export interface DiscordGatewayServiceCopy {
  supportThreadNamePrefix?: string;
  sourceThreadNamePrefix?: string;
  webMessagePrefix?: string;
  voiceMessagePrefix?: string;
  connectedMessage?: (input: { conversationId: string; conversationUrl: string }) => string;
  promptFallbackMessage?: (input: { conversationId: string; conversationUrl: string }) => string;
  turnFailureMessage?: (input: { discordThreadId: string; conversationUrl: string }) => string;
}
