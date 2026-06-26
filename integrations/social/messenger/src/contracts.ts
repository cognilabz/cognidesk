import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";

export type MessengerSocialJsonPrimitive = string | number | boolean | null;
export type MessengerSocialJsonValue =
  | MessengerSocialJsonPrimitive
  | MessengerSocialJsonObject
  | readonly MessengerSocialJsonValue[];
export type MessengerSocialProviderExtensionValue = MessengerSocialJsonValue | object | undefined;
export interface MessengerSocialJsonObject {
  [key: string]: MessengerSocialProviderExtensionValue;
}
export type MessengerSocialProviderPayload = MessengerSocialJsonObject | object;
export type MessengerSocialProviderQuery = Record<string, MessengerSocialProviderExtensionValue>;
export interface MessengerSocialProviderResponse extends MessengerSocialJsonObject {}
export interface MessengerSocialProviderExtensionFields extends MessengerSocialJsonObject {}

export interface MessengerSocialClientOptions {
  providerClient?: MessengerSocialProviderClient | undefined;
  accessToken?: string | undefined;
  pageAccessToken?: string | undefined;
  pageId?: string | undefined;
  graphApiVersion?: string | undefined;
  graphApiBaseUrl?: string | undefined;
  baseUrl?: string | undefined;
  fetch?: typeof fetch;
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderJsonRetryOptions | undefined;
}

export interface MessengerCredentialStatusInput {
  pageAccessToken?: string;
  pageId?: string;
  appSecret?: string;
  verifyToken?: string;
  pageWebhookSubscribed?: boolean;
  scopes?: string[];
  expiresAt?: string;
}

export interface MessengerApiResponse {
  recipient_id?: string;
  message_id?: string;
  attachment_id?: string;
  [key: string]: MessengerSocialProviderExtensionValue;
}

export interface MessengerSendMessageInput {
  recipient: { id: string };
  messagingType?: "RESPONSE" | "UPDATE" | "MESSAGE_TAG";
  message?: MessengerSocialJsonObject;
  senderAction?: "typing_on" | "typing_off" | "mark_seen";
  tag?: string;
  notificationType?: "REGULAR" | "SILENT_PUSH" | "NO_PUSH";
  additionalFields?: MessengerSocialProviderExtensionFields;
}

export type MessengerAttachmentType = "image" | "audio" | "video" | "file";

export interface MessengerUploadAttachmentInput {
  type: MessengerAttachmentType;
  url: string;
  isReusable?: boolean;
}

export interface MessengerProviderSendMessageInput extends MessengerSocialJsonObject {
  recipient: { id: string };
  messaging_type: NonNullable<MessengerSendMessageInput["messagingType"]>;
  message?: MessengerSocialJsonObject;
  sender_action?: NonNullable<MessengerSendMessageInput["senderAction"]>;
  tag?: string;
  notification_type?: NonNullable<MessengerSendMessageInput["notificationType"]>;
}

export interface MessengerProviderUploadAttachmentInput extends MessengerSocialJsonObject {
  message: {
    attachment: {
      type: MessengerAttachmentType;
      payload: {
        is_reusable: boolean;
        url: string;
      };
    };
  };
}

export interface MessengerHandoverInput {
  recipientId: string;
  targetAppId?: string;
  metadata?: string;
}

export interface MessengerProviderHandoverInput extends MessengerSocialJsonObject {
  recipient: { id: string };
  target_app_id?: string;
  metadata?: string;
}

export interface MessengerConversationSearchInput {
  fields?: string[];
  limit?: number;
  after?: string;
  userId?: string;
}

export interface MessengerConversationResponse {
  data?: Array<MessengerSocialJsonObject>;
  paging?: MessengerSocialJsonObject;
  [key: string]: MessengerSocialProviderExtensionValue;
}

export interface MessengerSocialProviderClient {
  sendMessage(input: MessengerProviderSendMessageInput): Promise<MessengerApiResponse>;
  uploadAttachment(input: MessengerProviderUploadAttachmentInput): Promise<MessengerApiResponse>;
  passThreadControl(input: MessengerProviderHandoverInput): Promise<MessengerApiResponse>;
  takeThreadControl(input: MessengerProviderHandoverInput): Promise<MessengerApiResponse>;
  requestThreadControl(input: MessengerProviderHandoverInput): Promise<MessengerApiResponse>;
  listConversations(input?: MessengerConversationSearchInput): Promise<MessengerConversationResponse>;
  getConversationMessages(
    conversationId: string,
    input?: Omit<MessengerConversationSearchInput, "userId">,
  ): Promise<MessengerConversationResponse>;
  getPage(): Promise<MessengerSocialProviderResponse>;
}

export interface MessengerWebhookPayload {
  object?: string;
  entry?: Array<{
    id?: string;
    time?: number;
    messaging?: Array<MessengerSocialJsonObject>;
    changes?: Array<MessengerSocialJsonObject>;
    [key: string]: MessengerSocialProviderExtensionValue;
  }>;
  [key: string]: MessengerSocialProviderExtensionValue;
}

export interface ParseMessengerWebhookOptions {
  appSecret?: string;
  requireSignature?: boolean;
  rawBody?: string;
}

export interface MessengerChallengeVerificationInput {
  mode?: string | null;
  token?: string | null;
  challenge?: string | null;
  expectedVerifyToken: string;
}

export interface MessengerSocialClient {
  providerClient: MessengerSocialProviderClient;
  sendMessage(input: MessengerSendMessageInput): Promise<MessengerApiResponse>;
  sendText(input: {
    recipientId: string;
    text: string;
    messagingType?: MessengerSendMessageInput["messagingType"];
    tag?: string;
  }): Promise<MessengerApiResponse>;
  sendSenderAction(input: {
    recipientId: string;
    action: NonNullable<MessengerSendMessageInput["senderAction"]>;
  }): Promise<MessengerApiResponse>;
  uploadAttachment(input: MessengerUploadAttachmentInput): Promise<MessengerApiResponse>;
  passThreadControl(input: MessengerHandoverInput & { targetAppId: string }): Promise<MessengerApiResponse>;
  takeThreadControl(input: Omit<MessengerHandoverInput, "targetAppId">): Promise<MessengerApiResponse>;
  requestThreadControl(input: Omit<MessengerHandoverInput, "targetAppId">): Promise<MessengerApiResponse>;
  listConversations(input?: MessengerConversationSearchInput): Promise<MessengerConversationResponse>;
  getConversationMessages(
    conversationId: string,
    input?: Omit<MessengerConversationSearchInput, "userId">,
  ): Promise<MessengerConversationResponse>;
  getPage(): Promise<MessengerSocialProviderResponse>;
}

export interface MessengerLiveCheckOptions extends MessengerSocialClientOptions {
  client?: Pick<MessengerSocialClient, "getPage" | "listConversations"> | undefined;
}
