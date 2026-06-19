export type GenesysEngageJsonPrimitive = string | number | boolean | null;
export type GenesysEngageJsonValue =
  | GenesysEngageJsonPrimitive
  | GenesysEngageJsonObject
  | readonly GenesysEngageJsonValue[];
export type GenesysEngageProviderExtensionValue = GenesysEngageJsonValue | object | undefined;

export interface GenesysEngageJsonObject {
  [key: string]: GenesysEngageProviderExtensionValue;
}

export type GenesysEngageProviderPayload = GenesysEngageJsonObject | object;
export type GenesysEngageProviderQuery = Record<string, GenesysEngageProviderExtensionValue>;
export interface GenesysEngageProviderResponse extends GenesysEngageJsonObject {}
export interface GenesysEngageProviderExtensionFields extends GenesysEngageJsonObject {}

export interface GenesysEngageContactCenterClientOptions {
  gmsBaseUrl: string;
  apiBasePath?: string;
  authorizationHeader?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface GenesysEngageCredentialStatusInput {
  gmsBaseUrl?: string;
  authConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface GenesysEngageHandoffInput {
  path?: string;
  payload: GenesysEngageProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface GenesysEngageCreateCallbackInput {
  serviceName: string;
  payload: GenesysEngageProviderPayload;
  query?: Record<string, string | number | boolean | undefined>;
  contentType?: "application/json" | "application/x-www-form-urlencoded";
  idempotencyKey?: string | undefined;
}

export type GenesysEngageHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GenesysEngageRequestInput {
  method: GenesysEngageHttpMethod;
  path: string;
  body?: BodyInit | GenesysEngageJsonObject | undefined;
  contentType?: string | undefined;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
  returnResponse?: boolean | undefined;
}

export interface GenesysEngageChatV2SessionInput {
  serviceName: string;
  chatId: string;
  userId: string;
  secureKey: string;
  alias: string;
}

export interface GenesysEngageChatV2RequestInput {
  serviceName: string;
  payload: GenesysEngageProviderPayload;
  contentType?: "application/x-www-form-urlencoded" | "multipart/form-data";
}

export interface GenesysEngageChatV2MessageInput extends GenesysEngageChatV2SessionInput {
  message: string;
  messageType?: string;
  transcriptPosition?: number;
}

export interface GenesysEngageChatV2SessionPayloadInput extends GenesysEngageChatV2SessionInput {
  payload?: GenesysEngageProviderPayload;
}

export interface GenesysEngageChatV2PushUrlInput extends GenesysEngageChatV2SessionInput {
  pushUrl: string;
}

export interface GenesysEngageChatV2UpdateNicknameInput extends GenesysEngageChatV2SessionInput {
  nickname: string;
}

export interface GenesysEngageChatV2UpdateDataInput extends GenesysEngageChatV2SessionInput {
  userData: GenesysEngageJsonObject;
}

export interface GenesysEngageChatV2ReadReceiptInput extends GenesysEngageChatV2SessionInput {
  transcriptPosition: number | string;
}

export interface GenesysEngageChatV2FileInput extends GenesysEngageChatV2SessionInput {
  fileId?: string;
  file?: Blob | FormData | string;
  fileName?: string;
  userData?: GenesysEngageJsonObject;
}

export interface GenesysEngageContactCenterClient {
  request(input: GenesysEngageRequestInput & { returnResponse?: false }): Promise<GenesysEngageJsonObject>;
  request(input: GenesysEngageRequestInput & { returnResponse: true }): Promise<Response>;
  createHandoff(input: GenesysEngageHandoffInput): Promise<GenesysEngageProviderResponse>;
  createCallback(input: GenesysEngageCreateCallbackInput): Promise<GenesysEngageProviderResponse>;
  requestChatV2(input: GenesysEngageChatV2RequestInput): Promise<GenesysEngageProviderResponse>;
  sendChatV2Message(input: GenesysEngageChatV2MessageInput): Promise<GenesysEngageProviderResponse>;
  startChatV2Typing(input: GenesysEngageChatV2SessionPayloadInput): Promise<GenesysEngageProviderResponse>;
  stopChatV2Typing(input: GenesysEngageChatV2SessionPayloadInput): Promise<GenesysEngageProviderResponse>;
  refreshChatV2(input: GenesysEngageChatV2SessionPayloadInput): Promise<GenesysEngageProviderResponse>;
  disconnectChatV2(input: GenesysEngageChatV2SessionInput): Promise<GenesysEngageProviderResponse>;
  pushChatV2Url(input: GenesysEngageChatV2PushUrlInput): Promise<GenesysEngageProviderResponse>;
  updateChatV2Nickname(input: GenesysEngageChatV2UpdateNicknameInput): Promise<GenesysEngageProviderResponse>;
  sendChatV2CustomNotice(input: GenesysEngageChatV2SessionPayloadInput): Promise<GenesysEngageProviderResponse>;
  updateChatV2Data(input: GenesysEngageChatV2UpdateDataInput): Promise<GenesysEngageProviderResponse>;
  sendChatV2ReadReceipt(input: GenesysEngageChatV2ReadReceiptInput): Promise<GenesysEngageProviderResponse>;
  getChatV2FileLimits(input: GenesysEngageChatV2SessionInput): Promise<GenesysEngageProviderResponse>;
  uploadChatV2File(input: GenesysEngageChatV2FileInput): Promise<GenesysEngageProviderResponse>;
  downloadChatV2File(input: GenesysEngageChatV2FileInput): Promise<Response>;
  deleteChatV2File(input: GenesysEngageChatV2FileInput): Promise<GenesysEngageProviderResponse>;
  readiness(): Promise<GenesysEngageProviderResponse>;
}

export interface GenesysEngageLiveCheckOptions extends GenesysEngageContactCenterClientOptions {
  client?: Pick<GenesysEngageContactCenterClient, "readiness">;
}
