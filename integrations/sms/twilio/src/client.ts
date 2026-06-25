import type TwilioSDK from "twilio";
import type {
  TwilioListMessagesInput,
  TwilioMessageStatusUpdate,
  TwilioSendSmsInput,
  TwilioSmsClient,
  TwilioSmsClientOptions,
  TwilioSmsRawClient,
  TwilioSmsSdkMessageCreateOptions,
  TwilioSmsSdkMessageListOptions,
} from "./contracts.js";

export function createTwilioSmsClient(options: TwilioSmsClientOptions): TwilioSmsClient {
  let rawClientPromise: Promise<TwilioSmsRawClient> | undefined;
  const getRawClient = () => {
    rawClientPromise ??= options.rawClient
      ? Promise.resolve(options.rawClient)
      : options.sdkClient
        ? Promise.resolve(options.sdkClient)
        : createTwilioRawClient(options);
    return rawClientPromise;
  };
  return {
    getRawClient,
    getSdkClient: getRawClient,
    async sendMessage(input) {
      const rawClient = await getRawClient();
      return rawClient.messages.create(sendMessageBody(input));
    },
    async fetchMessage(messageSid) {
      return (await getRawClient()).messages.get(messageSid).fetch();
    },
    async listMessages(input = {}) {
      return { messages: await (await getRawClient()).messages.list(messageListQuery(input)) };
    },
    async updateMessageStatus(messageSid, status) {
      return (await getRawClient()).messages.get(messageSid).update({ status: normalizeMessageStatus(status) });
    },
    async fetchAccount() {
      return (await getRawClient()).api.accounts(options.accountSid).fetch();
    },
    async listIncomingPhoneNumbers(input = {}) {
      return (await getRawClient()).incomingPhoneNumbers.list(input.phoneNumber ? { phoneNumber: input.phoneNumber } : {});
    },
  };
}

async function createTwilioRawClient(options: TwilioSmsClientOptions): Promise<TwilioSmsRawClient> {
  const mod = await import("twilio");
  type TwilioFactory = (accountSid?: string, authToken?: string) => TwilioSDK.Twilio;
  const createClient = ((mod as { default?: unknown }).default ?? mod) as TwilioFactory;
  return createClient(options.accountSid, options.authToken) as unknown as TwilioSmsRawClient;
}

function sendMessageBody(input: TwilioSendSmsInput): TwilioSmsSdkMessageCreateOptions {
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
    maxPrice: twilioNumber(input.maxPrice, "maxPrice"),
    provideFeedback: input.provideFeedback,
    validityPeriod: input.validityPeriodSeconds,
    smartEncoded: input.smartEncoded,
    shortenUrls: input.shortenUrls,
    sendAt: twilioDate(input.sendAt),
    scheduleType: input.scheduleType,
  }) as unknown as TwilioSmsSdkMessageCreateOptions;
}

function messageListQuery(input: TwilioListMessagesInput): TwilioSmsSdkMessageListOptions {
  return compact({
    to: input.to,
    from: input.from,
    dateSent: twilioDate(input.dateSent),
    dateSentBefore: twilioDate(input.dateSentBefore),
    dateSentAfter: twilioDate(input.dateSentAfter),
    pageSize: input.pageSize,
    limit: input.limit,
  }) as TwilioSmsSdkMessageListOptions;
}

function normalizeMessageStatus(status: TwilioMessageStatusUpdate) {
  return status === "cancelled" ? "canceled" : status;
}

function twilioDate(value: string | Date | undefined) {
  if (value === undefined) return undefined;
  return typeof value === "string" ? new Date(value) : value;
}

function twilioNumber(value: string | number | undefined, fieldName: string) {
  if (value === undefined) return undefined;
  if (typeof value === "number") return value;
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) throw new Error(`Twilio ${fieldName} must be numeric.`);
  return numberValue;
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
