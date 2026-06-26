import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";

export type WhatsAppMessagingJsonPrimitive = string | number | boolean | null;
export type WhatsAppMessagingJsonValue =
  | WhatsAppMessagingJsonPrimitive
  | WhatsAppMessagingJsonObject
  | readonly WhatsAppMessagingJsonValue[];
export type WhatsAppMessagingProviderExtensionValue = WhatsAppMessagingJsonValue | object | undefined;

export interface WhatsAppMessagingJsonObject {
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export type WhatsAppMessagingProviderPayload = WhatsAppMessagingJsonObject | object;
export type WhatsAppMessagingProviderQuery = Record<string, WhatsAppMessagingProviderExtensionValue>;
export interface WhatsAppMessagingProviderResponse extends WhatsAppMessagingJsonObject {}
export interface WhatsAppMessagingProviderExtensionFields extends WhatsAppMessagingJsonObject {}

export interface WhatsAppMessagingClientOptions {
  accessToken?: string;
  phoneNumberId?: string;
  graphApiVersion?: string;
  graphApiBaseUrl?: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
  providerClient?: WhatsAppMessagingProviderClient | undefined;
}

export interface WhatsAppCredentialStatusInput {
  accessToken?: string;
  phoneNumberId?: string;
  appSecret?: string;
  verifyToken?: string;
  wabaWebhookSubscribed?: boolean;
  scopes?: string[];
  expiresAt?: string;
}

export interface WhatsAppApiResponse {
  messaging_product?: "whatsapp" | string;
  contacts?: Array<{ input?: string; wa_id?: string; [key: string]: WhatsAppMessagingJsonValue | undefined }>;
  messages?: Array<{ id?: string; message_status?: string; [key: string]: WhatsAppMessagingJsonValue | undefined }>;
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export type WhatsAppMessageType =
  | "text"
  | "template"
  | "image"
  | "document"
  | "audio"
  | "video"
  | "sticker"
  | "interactive"
  | "location"
  | "contacts";

export interface WhatsAppMessageInput {
  to: string;
  type: WhatsAppMessageType;
  recipientType?: "individual";
  text?: { body: string; preview_url?: boolean };
  template?: WhatsAppMessagingJsonObject;
  image?: WhatsAppMessagingJsonObject;
  document?: WhatsAppMessagingJsonObject;
  audio?: WhatsAppMessagingJsonObject;
  video?: WhatsAppMessagingJsonObject;
  sticker?: WhatsAppMessagingJsonObject;
  interactive?: WhatsAppMessagingJsonObject;
  location?: WhatsAppMessagingJsonObject;
  contacts?: WhatsAppMessagingJsonValue[];
  context?: { message_id: string };
  additionalFields?: WhatsAppMessagingProviderExtensionFields;
}

export interface WhatsAppUploadMediaInput {
  file: Blob;
  type: string;
  filename?: string;
  messagingProduct?: "whatsapp";
}

export interface WhatsAppMediaResource {
  id?: string;
  url?: string;
  mime_type?: string;
  sha256?: string;
  file_size?: number;
  messaging_product?: string;
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppPhoneNumberResource {
  id?: string;
  display_phone_number?: string;
  verified_name?: string;
  quality_rating?: string;
  platform_type?: string;
  code_verification_status?: string;
  name_status?: string;
  throughput?: WhatsAppMessagingProviderExtensionValue;
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppBusinessProfileResource {
  about?: string;
  address?: string;
  description?: string;
  email?: string;
  profile_picture_url?: string;
  websites?: string[];
  vertical?: string;
  messaging_product?: string;
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppBusinessProfileResponse {
  data?: WhatsAppBusinessProfileResource[];
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppUpdateBusinessProfileInput {
  about?: string;
  address?: string;
  description?: string;
  email?: string;
  profilePictureHandle?: string;
  websites?: string[];
  vertical?: string;
  messagingProduct?: "whatsapp";
}

export interface WhatsAppMessagingProviderClient {
  sendMessage(input: WhatsAppMessageInput): Promise<WhatsAppApiResponse>;
  uploadMedia(input: WhatsAppUploadMediaInput): Promise<WhatsAppMediaResource>;
  getMedia(mediaId: string): Promise<WhatsAppMediaResource>;
  downloadMedia(input: string | WhatsAppMediaResource): Promise<Response>;
  getPhoneNumber(fields?: string[]): Promise<WhatsAppPhoneNumberResource>;
  getBusinessProfile(fields?: string[]): Promise<WhatsAppBusinessProfileResponse>;
  updateBusinessProfile(
    input: WhatsAppUpdateBusinessProfileInput,
  ): Promise<{ success?: boolean; [key: string]: WhatsAppMessagingJsonValue | undefined }>;
}

export interface WhatsAppMessagingClient extends WhatsAppMessagingProviderClient {
  providerClient: WhatsAppMessagingProviderClient;
}

export interface WhatsAppLiveCheckOptions extends WhatsAppMessagingClientOptions {
  client?: Pick<WhatsAppMessagingClient, "getPhoneNumber">;
}

export interface ValidateWhatsAppWebhookSignatureInput {
  appSecret: string;
  rawBody: string | Buffer;
  signature: string;
}

export interface ParseWhatsAppWebhookOptions {
  appSecret?: string;
  requireSignature?: boolean;
}

export interface WhatsAppWebhookPayload {
  object?: string;
  entry?: WhatsAppWebhookEntry[];
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppWebhookEntry {
  id?: string;
  changes?: WhatsAppWebhookChange[];
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppWebhookChange {
  field?: string;
  value?: {
    messaging_product?: string;
    metadata?: WhatsAppMessagingProviderExtensionFields;
    contacts?: WhatsAppMessagingJsonValue[];
    messages?: WhatsAppMessagingJsonValue[];
    statuses?: WhatsAppMessagingJsonValue[];
    errors?: WhatsAppMessagingJsonValue[];
    [key: string]: WhatsAppMessagingProviderExtensionValue;
  };
  [key: string]: WhatsAppMessagingProviderExtensionValue;
}

export interface WhatsAppSignedWebhook {
  rawBody: string;
  contentType?: string;
  payload: WhatsAppWebhookPayload;
}

export interface VerifyWhatsAppWebhookChallengeInput {
  mode: string | null;
  verifyToken: string | null;
  challenge: string | null;
  expectedVerifyToken: string;
}
