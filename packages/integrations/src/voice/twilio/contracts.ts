import type {
  TwilioVoiceFullApiGeneratedClient,
  TwilioVoiceGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type TwilioVoiceJsonPrimitive = string | number | boolean | null;
export type TwilioVoiceJsonValue =
  | TwilioVoiceJsonPrimitive
  | TwilioVoiceJsonObject
  | readonly TwilioVoiceJsonValue[];
export type TwilioVoiceProviderExtensionValue = TwilioVoiceJsonValue | object | undefined;
export interface TwilioVoiceJsonObject {
  [key: string]: TwilioVoiceProviderExtensionValue;
}
export type TwilioVoiceProviderPayload = TwilioVoiceJsonObject | object;
export type TwilioVoiceProviderQuery = Record<string, TwilioVoiceProviderExtensionValue>;
export interface TwilioVoiceProviderResponse extends TwilioVoiceJsonObject {}
export interface TwilioVoiceProviderExtensionFields extends TwilioVoiceJsonObject {}

export interface TwilioVoiceClientOptions {
  accountSid: string;
  authToken?: string;
  apiKeySid?: string;
  apiKeySecret?: string;
  apiBaseUrl?: string;
  apiVersion?: string;
  fetch?: typeof fetch;
}

export type TwilioVoiceHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type TwilioVoiceFormPrimitive = string | number | boolean | null | undefined;
export interface TwilioVoiceFormObject {
  [key: string]: TwilioVoiceFormValue;
}
export interface TwilioVoiceFormArray extends Array<TwilioVoiceFormValue> {}
export type TwilioVoiceFormValue = TwilioVoiceFormPrimitive | TwilioVoiceFormObject | TwilioVoiceFormArray;

export interface TwilioVoiceClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: TwilioVoiceFormObject | undefined;
  body?: TwilioVoiceFormObject | undefined;
  contentType?: string | undefined;
}

export interface TwilioVoiceOperationRequestInput extends TwilioVoiceClientRequestInput {}

export interface TwilioOutboundCallInput {
  to: string;
  from: string;
  url?: string;
  twiml?: string;
  applicationSid?: string;
  method?: "GET" | "POST";
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
  statusCallbackEvent?: TwilioCallStatusCallbackEvent[];
  timeoutSeconds?: number;
  machineDetection?: "Enable" | "DetectMessageEnd";
  sendDigits?: string;
  metadata?: Record<string, string>;
}

export interface TwilioCallUpdateInput {
  url?: string;
  twiml?: string;
  method?: "GET" | "POST";
  status?: TwilioCallUpdateStatus;
  fallbackUrl?: string;
  fallbackMethod?: "GET" | "POST";
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
  timeLimitSeconds?: number;
}

export interface TwilioCallRedirectInput {
  url?: string;
  twiml?: string;
  method?: "GET" | "POST";
  fallbackUrl?: string;
  fallbackMethod?: "GET" | "POST";
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
}

export interface TwilioCallEndInput {
  status?: TwilioCallUpdateStatus;
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
}

export type TwilioCallStatusCallbackEvent =
  | "initiated"
  | "ringing"
  | "answered"
  | "completed";

export type TwilioCallUpdateStatus = "canceled" | "completed";
export type TwilioCallStatus =
  | "queued"
  | "initiated"
  | "ringing"
  | "in-progress"
  | "completed"
  | "busy"
  | "failed"
  | "no-answer"
  | "canceled";
export type TwilioCallDirection =
  | "inbound"
  | "outbound-api"
  | "outbound-dial"
  | "trunking-originating"
  | "trunking-terminating";

export interface TwilioCallResource {
  sid: string;
  account_sid?: string;
  to?: string;
  from?: string;
  status?: TwilioCallStatus;
  direction?: TwilioCallDirection | string;
  uri?: string;
  [key: string]: TwilioVoiceProviderExtensionValue;
}

export interface TwilioAccountResource {
  sid: string;
  friendly_name?: string;
  status?: "active" | "suspended" | "closed" | string;
  type?: string;
  uri?: string;
  [key: string]: TwilioVoiceProviderExtensionValue;
}

export interface TwilioVoiceResource {
  [key: string]: TwilioVoiceProviderExtensionValue;
}

export interface TwilioVoiceClient {
  fullApi: TwilioVoiceFullApiGeneratedClient;
  requestOperation: TwilioVoiceGeneratedOperationCaller;
  createOutboundCall(input: TwilioOutboundCallInput): Promise<TwilioCallResource>;
  fetchCall(callSid: string): Promise<TwilioCallResource>;
  updateCall(callSid: string, input: TwilioCallUpdateInput): Promise<TwilioCallResource>;
  redirectCall(callSid: string, input: TwilioCallRedirectInput): Promise<TwilioCallResource>;
  endCall(callSid: string, input?: TwilioCallEndInput): Promise<TwilioCallResource>;
  fetchAccount(): Promise<TwilioAccountResource>;
}

export interface TwilioCredentialStatusInput {
  accountSid?: string;
  authToken?: string;
  apiKeySid?: string;
  apiKeySecret?: string;
  webhookAuthToken?: string;
  fromNumber?: string;
}

export interface TwilioVoiceWebhook {
  callSid?: string;
  accountSid?: string;
  from?: string;
  to?: string;
  callStatus?: TwilioCallStatus;
  direction?: TwilioCallDirection | string;
  raw: Record<string, string>;
}

export interface ParseTwilioVoiceWebhookOptions {
  authToken?: string;
  publicUrl?: string;
  requireSignature?: boolean;
}

export interface TwilioMediaStreamTwiMLOptions {
  websocketUrl: string;
  mode?: "connect" | "start";
  track?: "inbound_track" | "outbound_track" | "both_tracks";
  statusCallback?: string;
  name?: string;
  customParameters?: Record<string, string>;
}

export interface TwilioLiveCheckOptions extends TwilioVoiceClientOptions {
  client?: Pick<TwilioVoiceClient, "fetchAccount">;
}
