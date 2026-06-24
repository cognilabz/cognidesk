import { z } from "zod";
import {
  ConversationChannelKindSchema,
  type ConversationChannelKind,
} from "./base.js";

const channelCapabilityFlagDefaults = {
  realtime: false,
  async: false,
  voice: false,
  audioInput: false,
  audioOutput: false,
  richText: false,
  markdown: false,
  html: false,
  attachments: false,
  images: false,
  files: false,
  widgets: false,
  buttons: false,
  quickReplies: false,
  templates: false,
  publicReplies: false,
  privateReplies: false,
  typingIndicator: false,
  readReceipts: false,
  deliveryReceipts: false,
  threaded: false,
  supportsHumanTransfer: false,
};

export const ChannelCapabilityFlagsSchema = z.object({
  realtime: z.boolean().default(false),
  async: z.boolean().default(false),
  voice: z.boolean().default(false),
  audioInput: z.boolean().default(false),
  audioOutput: z.boolean().default(false),
  richText: z.boolean().default(false),
  markdown: z.boolean().default(false),
  html: z.boolean().default(false),
  attachments: z.boolean().default(false),
  images: z.boolean().default(false),
  files: z.boolean().default(false),
  widgets: z.boolean().default(false),
  buttons: z.boolean().default(false),
  quickReplies: z.boolean().default(false),
  templates: z.boolean().default(false),
  publicReplies: z.boolean().default(false),
  privateReplies: z.boolean().default(false),
  typingIndicator: z.boolean().default(false),
  readReceipts: z.boolean().default(false),
  deliveryReceipts: z.boolean().default(false),
  threaded: z.boolean().default(false),
  supportsHumanTransfer: z.boolean().default(false),
}).default(channelCapabilityFlagDefaults);
export type ChannelCapabilityFlags = z.infer<typeof ChannelCapabilityFlagsSchema>;
export type ChannelCapabilityFlagsInput = z.input<typeof ChannelCapabilityFlagsSchema>;

export const ChannelContextSchema = z.object({
  channelId: z.string().min(1),
  kind: ConversationChannelKindSchema,
  provider: z.string().min(1).optional(),
  externalThreadId: z.string().min(1).optional(),
  externalConversationId: z.string().min(1).optional(),
  externalMessageId: z.string().min(1).optional(),
  externalUserId: z.string().min(1).optional(),
  locale: z.string().min(1).optional(),
  timezone: z.string().min(1).optional(),
  capabilities: ChannelCapabilityFlagsSchema.default(channelCapabilityFlagDefaults),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelContext = z.infer<typeof ChannelContextSchema>;
export type ChannelContextInput = Omit<z.input<typeof ChannelContextSchema>, "capabilities"> & {
  capabilities?: Partial<ChannelCapabilityFlagsInput>;
};
export type ConversationChannel = ConversationChannelKind | ChannelContext;
export type ConversationChannelInput = ConversationChannelKind | ChannelContextInput;

export function defineChannelContext(input: ConversationChannelInput): ChannelContext {
  if (typeof input === "string") {
    return ChannelContextSchema.parse({
      channelId: input,
      kind: input,
      capabilities: defaultChannelCapabilityFlags(input),
    });
  }
  return ChannelContextSchema.parse({
    ...input,
    capabilities: {
      ...defaultChannelCapabilityFlags(input.kind),
      ...(input.capabilities ?? {}),
    },
  });
}

export function channelKindOf(channel?: ConversationChannelInput): ConversationChannelKind | undefined {
  if (!channel) return undefined;
  return typeof channel === "string" ? channel : channel.kind;
}

export function defaultChannelCapabilityFlags(kind: ConversationChannelKind): ChannelCapabilityFlags {
  const asyncChannels = new Set(["email", "ticketing", "form", "help-center", "community", "marketplace", "review"]);
  const shortMessagingChannels = new Set(["sms", "messaging", "social", "rcs"]);
  return ChannelCapabilityFlagsSchema.parse({
    realtime: kind === "chat" || kind === "voice" || kind === "workplace" || kind === "video" || kind === "cobrowsing",
    async: asyncChannels.has(kind) || shortMessagingChannels.has(kind),
    voice: kind === "voice" || kind === "video",
    audioInput: kind === "voice" || kind === "video",
    audioOutput: kind === "voice" || kind === "video",
    richText: kind !== "sms" && kind !== "voice",
    markdown: kind === "chat" || kind === "workplace" || kind === "community" || kind === "help-center",
    html: kind === "email" || kind === "help-center",
    attachments: kind !== "sms",
    images: kind !== "voice" && kind !== "sms",
    files: kind === "email" || kind === "ticketing" || kind === "workplace" || kind === "form",
    widgets: kind === "chat" || kind === "cobrowsing",
    buttons: kind === "chat" || kind === "messaging" || kind === "rcs",
    quickReplies: kind === "chat" || kind === "messaging" || kind === "social" || kind === "rcs",
    templates: kind === "messaging" || kind === "sms" || kind === "rcs",
    publicReplies: kind !== "ticketing" && kind !== "workplace",
    privateReplies: kind === "ticketing" || kind === "workplace" || kind === "community",
    typingIndicator: kind === "chat" || kind === "messaging" || kind === "workplace" || kind === "social",
    readReceipts: kind === "messaging" || kind === "workplace" || kind === "social",
    deliveryReceipts: kind === "email" || kind === "messaging" || kind === "sms" || kind === "rcs",
    threaded: kind === "email" || kind === "ticketing" || kind === "workplace" || kind === "community",
    supportsHumanTransfer: kind === "chat" || kind === "voice" || kind === "ticketing" || kind === "workplace" || kind === "cobrowsing",
  });
}
