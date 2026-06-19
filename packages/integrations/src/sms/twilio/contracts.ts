import type {
  TwilioSmsFullApiGeneratedClient,
  TwilioSmsGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export interface TwilioSmsClientOptions {
  accountSid: string;
  authToken: string;
  apiBaseUrl?: string;
  apiVersion?: string;
  fetch?: typeof fetch;
}

export type TwilioSmsHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type TwilioSmsFormPrimitive = string | number | boolean | null | undefined;
export interface TwilioSmsFormObject {
  [key: string]: TwilioSmsFormValue;
}
export interface TwilioSmsFormArray extends Array<TwilioSmsFormValue> {}
export type TwilioSmsFormValue = TwilioSmsFormPrimitive | TwilioSmsFormObject | TwilioSmsFormArray;

export interface TwilioSmsClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: TwilioSmsFormObject | undefined;
  body?: TwilioSmsFormObject | undefined;
  contentType?: string | undefined;
}

export interface TwilioSmsOperationRequestInput extends TwilioSmsClientRequestInput {}

export interface TwilioSmsCredentialStatusInput {
  accountSid?: string;
  authToken?: string;
  fromNumber?: string;
  messagingServiceSid?: string;
}

export interface TwilioSendSmsInput {
  to: string;
  body?: string;
  from?: string;
  messagingServiceSid?: string;
  statusCallback?: string;
  mediaUrl?: string | string[];
  contentSid?: string;
  contentVariables?: TwilioSmsResource;
  maxPrice?: string;
  provideFeedback?: boolean;
  validityPeriodSeconds?: number;
  smartEncoded?: boolean;
  shortenUrls?: boolean;
  sendAt?: string;
  scheduleType?: "fixed";
}

export interface TwilioListMessagesInput {
  to?: string;
  from?: string;
  dateSent?: string;
  dateSentBefore?: string;
  dateSentAfter?: string;
  pageSize?: number;
  pageToken?: string;
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

export type TwilioMessageDirection =
  | "inbound"
  | "outbound-api"
  | "outbound-call"
  | "outbound-reply";

export interface TwilioMessageResource {
  sid: string;
  account_sid?: string;
  api_version?: string;
  messaging_service_sid?: string | null;
  to?: string;
  from?: string;
  body?: string;
  status?: TwilioMessageStatus;
  direction?: TwilioMessageDirection;
  num_segments?: string;
  num_media?: string;
  date_created?: string;
  date_updated?: string;
  date_sent?: string | null;
  price?: string | null;
  price_unit?: string | null;
  error_code?: number | null;
  error_message?: string | null;
  subresource_uris?: {
    media?: string;
    feedback?: string;
  };
  uri?: string;
}

export type TwilioSmsJsonPrimitive = string | number | boolean | null;
export type TwilioSmsJsonValue = TwilioSmsJsonPrimitive | TwilioSmsResource | readonly TwilioSmsJsonValue[];
export type TwilioSmsProviderExtensionValue = TwilioSmsJsonValue | object | undefined;
export type TwilioSmsProviderPayload = TwilioSmsResource | object;
export type TwilioSmsProviderQuery = Record<string, TwilioSmsProviderExtensionValue>;
export interface TwilioSmsProviderResponse extends TwilioSmsResource {}
export interface TwilioSmsProviderExtensionFields extends TwilioSmsResource {}

export interface TwilioSmsResource {
  [key: string]: TwilioSmsProviderExtensionValue;
}

export interface TwilioMessageListResource {
  messages: TwilioMessageResource[];
  next_page_uri?: string | null;
  previous_page_uri?: string | null;
  first_page_uri?: string;
  page?: number;
  page_size?: number;
  uri?: string;
}

export interface TwilioIncomingPhoneNumberResource {
  sid?: string;
  phone_number?: string;
  capabilities?: {
    sms?: boolean;
    mms?: boolean;
    voice?: boolean;
    fax?: boolean;
  };
  friendly_name?: string;
  account_sid?: string;
  address_requirements?: string;
  beta?: boolean;
  date_created?: string;
  date_updated?: string;
  sms_url?: string;
  sms_method?: string;
  uri?: string;
}

export interface TwilioAccountResource {
  sid?: string;
  friendly_name?: string;
  status?: "active" | "suspended" | "closed";
  type?: string;
  date_created?: string;
  date_updated?: string;
  owner_account_sid?: string;
  uri?: string;
  subresource_uris?: Record<string, string>;
}

export interface TwilioSmsOperationRequestMap {
  "api_v2010:CreateMessage": {
    pathParams?: { AccountSid?: string };
    body: {
      To: string;
      Body?: string;
      From?: string;
      MessagingServiceSid?: string;
      StatusCallback?: string;
      MediaUrl?: string | string[];
      ContentSid?: string;
      ContentVariables?: string;
      ScheduleType?: "fixed";
      SendAt?: string;
      ShortenUrls?: boolean;
    };
  };
  "api_v2010:FetchMessage": { pathParams: { Sid: string; AccountSid?: string } };
  "api_v2010:ListMessage": {
    pathParams?: { AccountSid?: string };
    query?: {
      To?: string;
      From?: string;
      DateSent?: string;
      "DateSent<"?: string;
      "DateSent>"?: string;
      PageSize?: number;
      PageToken?: string;
    };
  };
  "api_v2010:UpdateMessage": {
    pathParams: { Sid: string; AccountSid?: string };
    body: { Status?: TwilioMessageStatusUpdate };
  };
}

export interface TwilioSmsOperationResponseMap {
  "api_v2010:CreateMessage": TwilioMessageResource;
  "api_v2010:FetchMessage": TwilioMessageResource;
  "api_v2010:ListMessage": TwilioMessageListResource;
  "api_v2010:UpdateMessage": TwilioMessageResource;
}

export interface TwilioSmsClient {
  fullApi: TwilioSmsFullApiGeneratedClient;
  requestOperation: TwilioSmsGeneratedOperationCaller;
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

export interface TwilioSmsLiveCheckOptions extends TwilioSmsClientOptions {
  fromNumber?: string;
  client?: Pick<TwilioSmsClient, "fetchAccount" | "listIncomingPhoneNumbers">;
}
