import type TwilioSDK from "twilio";

type TwilioSdkMessages = TwilioSDK.Twilio["messages"];
type TwilioSdkMessageContext = ReturnType<TwilioSdkMessages["get"]>;
type TwilioSdkIncomingPhoneNumbers = TwilioSDK.Twilio["incomingPhoneNumbers"];

export type TwilioSmsSdkMessageCreateOptions = Parameters<TwilioSdkMessages["create"]>[0];
export type TwilioSmsSdkMessageListOptions = NonNullable<Parameters<TwilioSdkMessages["list"]>[0]>;
export type TwilioSmsSdkMessageUpdateOptions = Parameters<TwilioSdkMessageContext["update"]>[0];
export type TwilioSmsSdkIncomingPhoneNumberListOptions =
  NonNullable<Parameters<TwilioSdkIncomingPhoneNumbers["list"]>[0]>;

export interface TwilioSmsClientOptions {
  accountSid: string;
  authToken: string;
  rawClient?: TwilioSmsRawClient;
  /** @deprecated Use rawClient. */
  sdkClient?: TwilioSmsRawClient;
}

export interface TwilioSmsRawClient {
  messages: {
    create(input: TwilioSmsSdkMessageCreateOptions): Promise<TwilioMessageResource>;
    get(sid: string): {
      fetch(): Promise<TwilioMessageResource>;
      update(input: TwilioSmsSdkMessageUpdateOptions): Promise<TwilioMessageResource>;
    };
    list(input?: TwilioSmsSdkMessageListOptions): Promise<TwilioMessageResource[]>;
  };
  incomingPhoneNumbers: {
    list(input?: TwilioSmsSdkIncomingPhoneNumberListOptions): Promise<TwilioIncomingPhoneNumberResource[]>;
  };
  api: {
    accounts(accountSid: string): { fetch(): Promise<TwilioAccountResource> };
  };
}

export type TwilioSmsSdkClient = TwilioSmsRawClient;

export interface TwilioSendSmsInput {
  to: string;
  body?: string;
  from?: string;
  messagingServiceSid?: string;
  statusCallback?: string;
  mediaUrl?: string | string[];
  contentSid?: string;
  contentVariables?: Record<string, unknown>;
  maxPrice?: string | number;
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
  /** @deprecated Use getRawClient. */
  getSdkClient(): Promise<TwilioSmsRawClient>;
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
