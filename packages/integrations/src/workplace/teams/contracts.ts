import type {
  TeamsGraphGeneratedClient,
  TeamsGraphGeneratedOperationCaller,
} from "./graph-api-client.generated.js";

export type TeamsWorkplaceJsonPrimitive = string | number | boolean | null;
export type TeamsWorkplaceJsonValue =
  | TeamsWorkplaceJsonPrimitive
  | TeamsWorkplaceJsonObject
  | readonly TeamsWorkplaceJsonValue[];
export type TeamsWorkplaceProviderExtensionValue = TeamsWorkplaceJsonValue | object | undefined;
export interface TeamsWorkplaceJsonObject {
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}
export type TeamsWorkplaceProviderPayload = TeamsWorkplaceJsonObject | object;
export type TeamsWorkplaceProviderQuery = Record<string, TeamsWorkplaceProviderExtensionValue>;
export interface TeamsWorkplaceProviderResponse extends TeamsWorkplaceJsonObject {}
export interface TeamsWorkplaceProviderExtensionFields extends TeamsWorkplaceJsonObject {}

export interface TeamsWorkplaceClientOptions {
  accessToken: string;
  permissionMode?: "delegated" | "application";
  graphApiBaseUrl?: string;
  graphApiVersion?: string;
  fetch?: typeof fetch;
}

export type TeamsGraphHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface TeamsGraphResource {
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsGraphOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: TeamsWorkplaceProviderQuery | undefined;
  body?: TeamsWorkplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  returnResponse?: boolean | undefined;
}

export interface TeamsCredentialStatusInput {
  accessToken?: string;
  tenantId?: string;
  appClientId?: string;
  clientState?: string;
  scopes?: string[];
  requiredScopes?: string[];
  expiresAt?: string;
  adminConsentGranted?: boolean;
}

export interface TeamsItemBody {
  content?: string;
  contentType?: "text" | "html" | string;
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsChatMessageResource {
  id?: string;
  replyToId?: string | null;
  etag?: string;
  messageType?: string;
  createdDateTime?: string;
  lastModifiedDateTime?: string;
  lastEditedDateTime?: string | null;
  deletedDateTime?: string | null;
  subject?: string | null;
  summary?: string | null;
  chatId?: string;
  importance?: "normal" | "high" | "urgent" | string;
  locale?: string;
  webUrl?: string;
  from?: TeamsWorkplaceProviderExtensionValue;
  body?: TeamsItemBody;
  attachments?: TeamsWorkplaceJsonValue[];
  mentions?: TeamsWorkplaceJsonValue[];
  reactions?: TeamsWorkplaceJsonValue[];
  hostedContents?: TeamsWorkplaceJsonValue[];
  policyViolation?: TeamsWorkplaceProviderExtensionValue;
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsChatMessageCollectionResponse {
  value?: TeamsChatMessageResource[];
  "@odata.context"?: string;
  "@odata.nextLink"?: string;
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsUserResource {
  id?: string;
  displayName?: string;
  userPrincipalName?: string;
  mail?: string | null;
  jobTitle?: string | null;
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsChatMessageInput {
  content?: string;
  contentType?: "text" | "html";
  body?: TeamsItemBody;
  subject?: string;
  importance?: "normal" | "high" | "urgent" | string;
  attachments?: TeamsWorkplaceJsonValue[];
  mentions?: TeamsWorkplaceJsonValue[];
  hostedContents?: TeamsWorkplaceJsonValue[];
  additionalFields?: TeamsWorkplaceProviderExtensionFields;
}

export interface TeamsUpdateChatMessageInput extends TeamsChatMessageInput {
  policyViolation?: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsSendChannelMessageInput extends TeamsChatMessageInput {
  teamId: string;
  channelId: string;
}

export interface TeamsSendChannelReplyInput extends TeamsChatMessageInput {
  teamId: string;
  channelId: string;
  messageId: string;
}

export interface TeamsSendChatMessageInput extends TeamsChatMessageInput {
  chatId: string;
}

export interface TeamsListChannelMessagesInput {
  teamId: string;
  channelId: string;
  top?: number;
  expand?: string;
}

export interface TeamsListChannelRepliesInput {
  teamId: string;
  channelId: string;
  messageId: string;
  top?: number;
}

export interface TeamsListChatMessagesInput {
  chatId: string;
  top?: number;
  orderby?: string;
  filter?: string;
}

export interface TeamsGetChannelMessageInput {
  teamId: string;
  channelId: string;
  messageId: string;
  replyId?: string;
}

export interface TeamsGetChatMessageInput {
  chatId: string;
  messageId: string;
}

export interface TeamsUpdateChannelMessageInput {
  teamId: string;
  channelId: string;
  messageId: string;
  replyId?: string;
  message: TeamsUpdateChatMessageInput;
}

export interface TeamsUpdateChatMessageRequest {
  chatId: string;
  messageId: string;
  message: TeamsUpdateChatMessageInput;
}

export interface TeamsCreateSubscriptionInput {
  changeType: string;
  notificationUrl: string;
  resource: string;
  expirationDateTime: string;
  clientState?: string;
  lifecycleNotificationUrl?: string;
  includeResourceData?: boolean;
  encryptionCertificate?: string;
  encryptionCertificateId?: string;
  latestSupportedTlsVersion?: string;
  additionalFields?: TeamsWorkplaceProviderExtensionFields;
}

export interface TeamsSubscriptionResource {
  id?: string;
  resource?: string;
  applicationId?: string;
  changeType?: string;
  clientState?: string;
  notificationUrl?: string;
  lifecycleNotificationUrl?: string;
  expirationDateTime?: string;
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsWorkplaceClient {
  graphApi: TeamsGraphGeneratedClient;
  requestOperation: TeamsGraphGeneratedOperationCaller;
  sendChannelMessage(input: TeamsSendChannelMessageInput): Promise<TeamsChatMessageResource>;
  sendChannelReply(input: TeamsSendChannelReplyInput): Promise<TeamsChatMessageResource>;
  sendChatMessage(input: TeamsSendChatMessageInput): Promise<TeamsChatMessageResource>;
  postInternalAssistMessage(input: TeamsSendChannelMessageInput | TeamsSendChatMessageInput): Promise<TeamsChatMessageResource>;
  listChannelMessages(input: TeamsListChannelMessagesInput): Promise<TeamsChatMessageCollectionResponse>;
  listChannelReplies(input: TeamsListChannelRepliesInput): Promise<TeamsChatMessageCollectionResponse>;
  listChatMessages(input: TeamsListChatMessagesInput): Promise<TeamsChatMessageCollectionResponse>;
  getChannelMessage(input: TeamsGetChannelMessageInput): Promise<TeamsChatMessageResource>;
  getChatMessage(input: TeamsGetChatMessageInput): Promise<TeamsChatMessageResource>;
  updateChannelMessage(input: TeamsUpdateChannelMessageInput): Promise<Partial<TeamsChatMessageResource>>;
  updateChatMessage(input: TeamsUpdateChatMessageRequest): Promise<Partial<TeamsChatMessageResource>>;
  createSubscription(input: TeamsCreateSubscriptionInput): Promise<TeamsSubscriptionResource>;
  getCurrentUser(): Promise<TeamsUserResource>;
}

export interface TeamsLiveCheckOptions extends TeamsWorkplaceClientOptions {
  client?: Pick<TeamsWorkplaceClient, "getCurrentUser">;
}

export interface TeamsChangeNotification {
  id?: string;
  subscriptionId?: string;
  subscriptionExpirationDateTime?: string;
  clientState?: string;
  changeType?: string;
  resource?: string;
  tenantId?: string;
  resourceData?: {
    "@odata.type"?: string;
    "@odata.id"?: string;
    "@odata.etag"?: string;
    id?: string;
    [key: string]: TeamsWorkplaceProviderExtensionValue;
  };
  encryptedContent?: TeamsWorkplaceProviderExtensionValue;
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface TeamsChangeNotificationCollection {
  value?: TeamsChangeNotification[];
  validationTokens?: string[];
  [key: string]: TeamsWorkplaceProviderExtensionValue;
}

export interface ParseTeamsChangeNotificationOptions {
  clientState?: string;
  requireClientState?: boolean;
}

export interface TeamsParsedChangeNotificationRequest {
  rawBody: string;
  contentType?: string;
  validationToken?: string;
  payload?: TeamsChangeNotificationCollection;
  notifications: TeamsChangeNotification[];
  validClientState?: boolean;
}

export interface ValidateTeamsChangeNotificationClientStateInput {
  notifications: TeamsChangeNotification[];
  clientState: string;
}
