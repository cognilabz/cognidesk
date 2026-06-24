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
  voiceChannelNamePrefix?: string;
  webMessagePrefix?: string;
  voiceMessagePrefix?: string;
  promptFallbackMessage?: (input: { conversationId: string; conversationUrl: string }) => string;
  turnFailureMessage?: (input: { discordThreadId: string; conversationUrl: string }) => string;
  voiceHandoffMessage?: (input: {
    conversationId: string;
    conversationUrl: string;
    discordThreadId: string;
    discordThreadUrl: string;
    discordVoiceChannelId: string;
    discordVoiceChannelUrl: string;
  }) => string;
}
