import { createHmac, timingSafeEqual } from "node:crypto";
import {
  defineIntegration,
  type IntegrationOperationContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/integration-kit";
import { twilioSmsProviderManifest } from "./manifest.js";

export { twilioSmsProviderManifest } from "./manifest.js";

export interface TwilioSmsClientOptions {
  accountSid: string;
  authToken: string;
  rawClient?: TwilioSmsRawClient;
}

export interface TwilioSmsRawClient {
  messages: {
    create(input: Record<string, unknown>): Promise<TwilioMessageResource>;
    get?(sid: string): { fetch(): Promise<TwilioMessageResource>; update(input: Record<string, unknown>): Promise<TwilioMessageResource> };
    list?(input?: Record<string, unknown>): Promise<TwilioMessageResource[]>;
  };
  incomingPhoneNumbers?: {
    list(input?: Record<string, unknown>): Promise<TwilioIncomingPhoneNumberResource[]>;
  };
  api?: {
    accounts(accountSid: string): { fetch(): Promise<TwilioAccountResource> };
  };
}

export interface TwilioSendSmsInput {
  to: string;
  body?: string;
  from?: string;
  messagingServiceSid?: string;
  statusCallback?: string;
  mediaUrl?: string | string[];
  contentSid?: string;
  contentVariables?: Record<string, unknown>;
  maxPrice?: string;
  provideFeedback?: boolean;
  validityPeriodSeconds?: number;
  smartEncoded?: boolean;
  shortenUrls?: boolean;
  sendAt?: string | Date;
  scheduleType?: "fixed";
}

export interface TwilioListMessagesInput {
  to?: string;
  from?: string;
  dateSent?: string | Date;
  dateSentBefore?: string | Date;
  dateSentAfter?: string | Date;
  pageSize?: number;
  limit?: number;
}

export type TwilioMessageStatusUpdate = "canceled" | "cancelled";
export type TwilioMessageStatus =
  | "accepted"
  | "canceled"
  | "delivered"
  | "failed"
  | "partially_delivered"
  | "queued"
  | "read"
  | "received"
  | "receiving"
  | "scheduled"
  | "sending"
  | "sent"
  | "undelivered";

export interface TwilioMessageResource {
  sid: string;
  accountSid?: string;
  account_sid?: string;
  messagingServiceSid?: string | null;
  messaging_service_sid?: string | null;
  to?: string;
  from?: string;
  body?: string;
  status?: TwilioMessageStatus | string;
  direction?: string;
  [key: string]: unknown;
}

export interface TwilioMessageListResource {
  messages: TwilioMessageResource[];
}

export interface TwilioIncomingPhoneNumberResource {
  sid?: string;
  phoneNumber?: string;
  phone_number?: string;
  capabilities?: {
    sms?: boolean;
    mms?: boolean;
    voice?: boolean;
    fax?: boolean;
  };
  [key: string]: unknown;
}

export interface TwilioAccountResource {
  sid?: string;
  friendlyName?: string;
  friendly_name?: string;
  status?: string;
  [key: string]: unknown;
}

export interface TwilioSmsClient {
  getRawClient(): Promise<TwilioSmsRawClient>;
  sendMessage(input: TwilioSendSmsInput): Promise<TwilioMessageResource>;
  fetchMessage(messageSid: string): Promise<TwilioMessageResource>;
  listMessages(input?: TwilioListMessagesInput): Promise<TwilioMessageListResource>;
  updateMessageStatus(messageSid: string, status: TwilioMessageStatusUpdate): Promise<TwilioMessageResource>;
  fetchAccount(): Promise<TwilioAccountResource>;
  listIncomingPhoneNumbers(input?: { phoneNumber?: string }): Promise<TwilioIncomingPhoneNumberResource[]>;
}

export interface TwilioSmsWebhook {
  messageSid?: string;
  smsSid?: string;
  accountSid?: string;
  messagingServiceSid?: string;
  from?: string;
  to?: string;
  body?: string;
  messageStatus?: string;
  smsStatus?: string;
  numMedia?: number;
  media: Array<{ url: string; contentType?: string }>;
  raw: Record<string, string>;
}

export interface ParseTwilioSmsWebhookOptions {
  authToken?: string;
  publicUrl?: string;
  requireSignature?: boolean;
}

export const twilioSmsIntegration = defineIntegration({
  manifest: twilioSmsProviderManifest,
  operations: {
    "sms.message.receive": async (request: unknown, context: IntegrationOperationContext) =>
      parseTwilioSmsWebhook(request as Request, context.metadata as ParseTwilioSmsWebhookOptions | undefined),
    "sms.message.send": async (input: unknown, context: IntegrationOperationContext) =>
      metadataClient<TwilioSmsClient>(context).sendMessage(input as TwilioSendSmsInput),
    "sms.message.read": async (messageSid: unknown, context: IntegrationOperationContext) =>
      metadataClient<TwilioSmsClient>(context).fetchMessage(messageSid as string),
    "sms.message.search": async (input: unknown, context: IntegrationOperationContext) =>
      metadataClient<TwilioSmsClient>(context).listMessages(input as TwilioListMessagesInput | undefined),
  },
});

function metadataClient<Client>(context: IntegrationOperationContext): Client {
  const client = context.metadata?.client;
  if (!client) throw new Error("Pass a Twilio SMS client as context.metadata.client.");
  return client as Client;
}

export function createTwilioSmsClient(options: TwilioSmsClientOptions): TwilioSmsClient {
  let rawClientPromise: Promise<TwilioSmsRawClient> | undefined;
  const getRawClient = () => {
    rawClientPromise ??= options.rawClient
      ? Promise.resolve(options.rawClient)
      : createTwilioRawClient(options);
    return rawClientPromise;
  };
  return {
    getRawClient,
    async sendMessage(input) {
      const rawClient = await getRawClient();
      return rawClient.messages.create(sendMessageBody(input));
    },
    async fetchMessage(messageSid) {
      const message = (await getRawClient()).messages.get?.(messageSid);
      if (!message) throw new Error("Twilio helper client does not expose messages.get().");
      return message.fetch();
    },
    async listMessages(input = {}) {
      const list = (await getRawClient()).messages.list;
      if (!list) throw new Error("Twilio helper client does not expose messages.list().");
      return { messages: await list(messageListQuery(input)) };
    },
    async updateMessageStatus(messageSid, status) {
      const message = (await getRawClient()).messages.get?.(messageSid);
      if (!message) throw new Error("Twilio helper client does not expose messages.get().");
      return message.update({ status: normalizeMessageStatus(status) });
    },
    async fetchAccount() {
      const rawClient = await getRawClient();
      const account = rawClient.api?.accounts(options.accountSid);
      if (!account) return { sid: options.accountSid };
      return account.fetch();
    },
    async listIncomingPhoneNumbers(input = {}) {
      const list = (await getRawClient()).incomingPhoneNumbers?.list;
      if (!list) throw new Error("Twilio helper client does not expose incomingPhoneNumbers.list().");
      return list(input.phoneNumber ? { phoneNumber: input.phoneNumber } : {});
    },
  };
}

export function twilioSmsCredentialStatuses(input: {
  accountSid?: string;
  authToken?: string;
  fromNumber?: string;
  messagingServiceSid?: string;
}): ProviderCredentialStatusInput[] {
  const accountConfigured = Boolean(input.accountSid && input.authToken);
  const senderConfigured = Boolean(input.fromNumber || input.messagingServiceSid);
  return [
    {
      providerPackageId: twilioSmsProviderManifest.id,
      requirementId: "twilio-account",
      state: accountConfigured ? "configured" : "missing",
      message: accountConfigured
        ? "Twilio account credentials are configured."
        : "Twilio Account SID and Auth Token are required.",
    },
    {
      providerPackageId: twilioSmsProviderManifest.id,
      requirementId: "twilio-sms-sender",
      state: senderConfigured ? "configured" : "missing",
      message: senderConfigured
        ? "Twilio SMS sender is configured."
        : "A Twilio from number or Messaging Service SID is required.",
    },
  ];
}

export async function parseTwilioSmsWebhook(
  request: Request,
  options: ParseTwilioSmsWebhookOptions = {},
): Promise<TwilioSmsWebhook> {
  const raw = await parseFormRequest(request);
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.authToken) throw new Error("Twilio auth token is required to validate webhook signatures.");
    const signature = request.headers.get("x-twilio-signature") ?? "";
    const url = options.publicUrl ?? request.url;
    if (!validateTwilioRequestSignature({ url, params: raw, signature, authToken: options.authToken })) {
      throw new Error("Twilio webhook signature validation failed.");
    }
  }
  return {
    ...(raw.MessageSid ? { messageSid: raw.MessageSid } : {}),
    ...(raw.SmsSid ? { smsSid: raw.SmsSid } : {}),
    ...(raw.AccountSid ? { accountSid: raw.AccountSid } : {}),
    ...(raw.MessagingServiceSid ? { messagingServiceSid: raw.MessagingServiceSid } : {}),
    ...(raw.From ? { from: raw.From } : {}),
    ...(raw.To ? { to: raw.To } : {}),
    ...(raw.Body ? { body: raw.Body } : {}),
    ...(raw.MessageStatus ? { messageStatus: raw.MessageStatus } : {}),
    ...(raw.SmsStatus ? { smsStatus: raw.SmsStatus } : {}),
    ...(raw.NumMedia !== undefined ? { numMedia: Number(raw.NumMedia) } : {}),
    media: parseTwilioMedia(raw),
    raw,
  };
}

export function validateTwilioRequestSignature(input: {
  url: string;
  params: Record<string, string>;
  signature: string;
  authToken: string;
}) {
  const signed = Object.keys(input.params).sort()
    .reduce((value, key) => `${value}${key}${input.params[key] ?? ""}`, input.url);
  const expected = createHmac("sha1", input.authToken).update(signed).digest("base64");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

async function createTwilioRawClient(options: TwilioSmsClientOptions): Promise<TwilioSmsRawClient> {
  const mod = await import("twilio");
  const createClient = mod.default ?? mod;
  return createClient(options.accountSid, options.authToken) as unknown as TwilioSmsRawClient;
}

function sendMessageBody(input: TwilioSendSmsInput) {
  const senderCount = [input.from, input.messagingServiceSid].filter(Boolean).length;
  if (senderCount !== 1) {
    throw new Error("Exactly one of from or messagingServiceSid is required to send a Twilio SMS message.");
  }
  const mediaUrl = arrayOf(input.mediaUrl);
  if (input.contentVariables && !input.contentSid) {
    throw new Error("Twilio contentVariables require contentSid.");
  }
  if (!input.body && mediaUrl.length === 0 && !input.contentSid) {
    throw new Error("Twilio SMS requires body, mediaUrl, or contentSid.");
  }
  if (input.contentSid && (input.body || mediaUrl.length > 0)) {
    throw new Error("Twilio ContentSid messages cannot be combined with body or mediaUrl in this adapter.");
  }
  if ((input.sendAt || input.scheduleType) && (!input.messagingServiceSid || !input.sendAt || input.scheduleType !== "fixed")) {
    throw new Error("Twilio scheduled messages require messagingServiceSid, sendAt, and scheduleType 'fixed'.");
  }
  return compact({
    to: input.to,
    body: input.body,
    from: input.from,
    messagingServiceSid: input.messagingServiceSid,
    statusCallback: input.statusCallback,
    mediaUrl: mediaUrl.length > 0 ? mediaUrl : undefined,
    contentSid: input.contentSid,
    contentVariables: input.contentVariables ? JSON.stringify(input.contentVariables) : undefined,
    maxPrice: input.maxPrice,
    provideFeedback: input.provideFeedback,
    validityPeriod: input.validityPeriodSeconds,
    smartEncoded: input.smartEncoded,
    shortenUrls: input.shortenUrls,
    sendAt: input.sendAt,
    scheduleType: input.scheduleType,
  });
}

function messageListQuery(input: TwilioListMessagesInput) {
  return compact({
    to: input.to,
    from: input.from,
    dateSent: input.dateSent,
    dateSentBefore: input.dateSentBefore,
    dateSentAfter: input.dateSentAfter,
    pageSize: input.pageSize,
    limit: input.limit,
  });
}

function normalizeMessageStatus(status: TwilioMessageStatusUpdate) {
  return status === "cancelled" ? "canceled" : status;
}

async function parseFormRequest(request: Request): Promise<Record<string, string>> {
  const form = await request.formData();
  const values: Record<string, string> = {};
  for (const [key, value] of form as unknown as Iterable<[string, FormDataEntryValue]>) {
    if (typeof value === "string") values[key] = value;
  }
  return values;
}

function parseTwilioMedia(raw: Record<string, string>) {
  const count = Number(raw.NumMedia ?? 0);
  const media: Array<{ url: string; contentType?: string }> = [];
  for (let index = 0; index < count; index += 1) {
    const url = raw[`MediaUrl${index}`];
    if (url) {
      media.push({
        url,
        ...(raw[`MediaContentType${index}`] ? { contentType: raw[`MediaContentType${index}`] } : {}),
      });
    }
  }
  return media;
}

function arrayOf(value: string | string[] | undefined) {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function compact(input: Record<string, unknown | undefined>) {
  const output: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value;
  }
  return output;
}
