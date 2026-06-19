// Generated provider schema DTOs for GmailFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type GmailFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type GmailFullApiSchemaJsonValue = GmailFullApiSchemaJsonPrimitive | readonly GmailFullApiSchemaJsonValue[] | { readonly [key: string]: GmailFullApiSchemaJsonValue | undefined };

export type GmailFullApiSchemaDraft = {
  id?: string;
  message?: GmailFullApiSchemaMessage2;
};

export type GmailFullApiSchemaListDraftsResponse = {
  drafts?: ReadonlyArray<GmailFullApiSchemaDraft2>;
  resultSizeEstimate?: number;
  nextPageToken?: string;
};

export type GmailFullApiSchemaMessage = {
  id?: string;
  classificationLabelValues?: ReadonlyArray<GmailFullApiSchemaClassificationLabelValue>;
  labelIds?: ReadonlyArray<string>;
  internalDate?: string;
  historyId?: string;
  sizeEstimate?: number;
  payload?: GmailFullApiSchemaMessagePart;
  snippet?: string;
  raw?: string;
  threadId?: string;
};

export type GmailFullApiSchemaProfile = {
  historyId?: string;
  emailAddress?: string;
  messagesTotal?: number;
  threadsTotal?: number;
};

export type GmailFullApiSchemaListHistoryResponse = {
  history?: ReadonlyArray<GmailFullApiSchemaHistory>;
  nextPageToken?: string;
  historyId?: string;
};

export type GmailFullApiSchemaLabel = {
  messagesTotal?: number;
  color?: GmailFullApiSchemaLabelColor;
  messagesUnread?: number;
  messageListVisibility?: "show" | "hide";
  type?: "system" | "user";
  threadsTotal?: number;
  threadsUnread?: number;
  id?: string;
  name?: string;
  labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
};

export type GmailFullApiSchemaListLabelsResponse = {
  labels?: ReadonlyArray<GmailFullApiSchemaLabel2>;
};

export type GmailFullApiSchemaMessagePartBody = {
  attachmentId?: string;
  size?: number;
  data?: string;
};

export type GmailFullApiSchemaBatchDeleteMessagesRequest = {
  ids?: ReadonlyArray<string>;
};

export type GmailFullApiSchemaBatchModifyMessagesRequest = {
  ids?: ReadonlyArray<string>;
  addLabelIds?: ReadonlyArray<string>;
  removeLabelIds?: ReadonlyArray<string>;
  removeClassificationLabelIds?: ReadonlyArray<string>;
  addClassificationLabels?: ReadonlyArray<GmailFullApiSchemaClassificationLabelValue>;
};

export type GmailFullApiSchemaListMessagesResponse = {
  nextPageToken?: string;
  messages?: ReadonlyArray<GmailFullApiSchemaMessage2>;
  resultSizeEstimate?: number;
};

export type GmailFullApiSchemaModifyMessageRequest = {
  removeLabelIds?: ReadonlyArray<string>;
  addClassificationLabels?: ReadonlyArray<GmailFullApiSchemaClassificationLabelValue>;
  removeClassificationLabelIds?: ReadonlyArray<string>;
  addLabelIds?: ReadonlyArray<string>;
};

export type GmailFullApiSchemaCseIdentity = {
  emailAddress?: string;
  signAndEncryptKeyPairs?: GmailFullApiSchemaSignAndEncryptKeyPairs;
  primaryKeyPairId?: string;
};

export type GmailFullApiSchemaListCseIdentitiesResponse = {
  cseIdentities?: ReadonlyArray<GmailFullApiSchemaCseIdentity2>;
  nextPageToken?: string;
};

export type GmailFullApiSchemaCseKeyPair = {
  subjectEmailAddresses?: ReadonlyArray<string>;
  privateKeyMetadata?: ReadonlyArray<GmailFullApiSchemaCsePrivateKeyMetadata>;
  pkcs7?: string;
  pem?: string;
  disableTime?: string;
  enablementState?: "stateUnspecified" | "enabled" | "disabled";
  keyPairId?: string;
};

export type GmailFullApiSchemaDisableCseKeyPairRequest = {};

export type GmailFullApiSchemaEnableCseKeyPairRequest = {};

export type GmailFullApiSchemaListCseKeyPairsResponse = {
  cseKeyPairs?: ReadonlyArray<GmailFullApiSchemaCseKeyPair2>;
  nextPageToken?: string;
};

export type GmailFullApiSchemaObliterateCseKeyPairRequest = {};

export type GmailFullApiSchemaDelegate = {
  delegateEmail?: string;
  verificationStatus?: "verificationStatusUnspecified" | "accepted" | "pending" | "rejected" | "expired";
};

export type GmailFullApiSchemaListDelegatesResponse = {
  delegates?: ReadonlyArray<GmailFullApiSchemaDelegate2>;
};

export type GmailFullApiSchemaFilter = {
  id?: string;
  action?: GmailFullApiSchemaFilterAction;
  criteria?: GmailFullApiSchemaFilterCriteria;
};

export type GmailFullApiSchemaListFiltersResponse = {
  filter?: ReadonlyArray<GmailFullApiSchemaFilter2>;
};

export type GmailFullApiSchemaForwardingAddress = {
  forwardingEmail?: string;
  verificationStatus?: "verificationStatusUnspecified" | "accepted" | "pending";
};

export type GmailFullApiSchemaListForwardingAddressesResponse = {
  forwardingAddresses?: ReadonlyArray<GmailFullApiSchemaForwardingAddress2>;
};

export type GmailFullApiSchemaAutoForwarding = {
  disposition?: "dispositionUnspecified" | "leaveInInbox" | "archive" | "trash" | "markRead";
  emailAddress?: string;
  enabled?: boolean;
};

export type GmailFullApiSchemaImapSettings = {
  enabled?: boolean;
  autoExpunge?: boolean;
  expungeBehavior?: "expungeBehaviorUnspecified" | "archive" | "trash" | "deleteForever";
  maxFolderSize?: number;
};

export type GmailFullApiSchemaLanguageSettings = {
  displayLanguage?: string;
};

export type GmailFullApiSchemaPopSettings = {
  accessWindow?: "accessWindowUnspecified" | "disabled" | "fromNowOn" | "allMail";
  disposition?: "dispositionUnspecified" | "leaveInInbox" | "archive" | "trash" | "markRead";
};

export type GmailFullApiSchemaVacationSettings = {
  responseSubject?: string;
  endTime?: string;
  responseBodyPlainText?: string;
  responseBodyHtml?: string;
  restrictToDomain?: boolean;
  startTime?: string;
  enableAutoReply?: boolean;
  restrictToContacts?: boolean;
};

export type GmailFullApiSchemaSendAs = {
  isDefault?: boolean;
  signature?: string;
  sendAsEmail?: string;
  replyToAddress?: string;
  treatAsAlias?: boolean;
  displayName?: string;
  isPrimary?: boolean;
  verificationStatus?: "verificationStatusUnspecified" | "accepted" | "pending";
  smtpMsa?: GmailFullApiSchemaSmtpMsa;
};

export type GmailFullApiSchemaListSendAsResponse = {
  sendAs?: ReadonlyArray<GmailFullApiSchemaSendAs2>;
};

export type GmailFullApiSchemaSmimeInfo = {
  pkcs12?: string;
  encryptedKeyPassword?: string;
  id?: string;
  issuerCn?: string;
  pem?: string;
  expiration?: string;
  isDefault?: boolean;
};

export type GmailFullApiSchemaListSmimeInfoResponse = {
  smimeInfo?: ReadonlyArray<GmailFullApiSchemaSmimeInfo2>;
};

export type GmailFullApiSchemaThread = {
  messages?: ReadonlyArray<GmailFullApiSchemaMessage2>;
  snippet?: string;
  historyId?: string;
  id?: string;
};

export type GmailFullApiSchemaListThreadsResponse = {
  threads?: ReadonlyArray<GmailFullApiSchemaThread2>;
  nextPageToken?: string;
  resultSizeEstimate?: number;
};

export type GmailFullApiSchemaModifyThreadRequest = {
  removeLabelIds?: ReadonlyArray<string>;
  addLabelIds?: ReadonlyArray<string>;
};

export type GmailFullApiSchemaWatchRequest = {
  labelIds?: ReadonlyArray<string>;
  topicName?: string;
  labelFilterAction?: "include" | "exclude";
  labelFilterBehavior?: "include" | "exclude";
};

export type GmailFullApiSchemaWatchResponse = {
  historyId?: string;
  expiration?: string;
};

export type GmailFullApiSchemaMessage2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaDraft2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaClassificationLabelValue = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaMessagePart = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaHistory = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaLabelColor = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaLabel2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaSignAndEncryptKeyPairs = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaCseIdentity2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaCsePrivateKeyMetadata = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaCseKeyPair2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaDelegate2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaFilterAction = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaFilterCriteria = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaFilter2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaForwardingAddress2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaSmtpMsa = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaSendAs2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaSmimeInfo2 = GmailFullApiSchemaJsonValue;

export type GmailFullApiSchemaThread2 = GmailFullApiSchemaJsonValue;

export interface GmailFullApiOperationQueryMap {
  "users.drafts.create": {};
  "users.drafts.delete": {};
  "users.drafts.get": {
  format?: "minimal" | "full" | "raw" | "metadata";
};
  "users.drafts.list": {
  q?: string;
  includeSpamTrash?: boolean;
  maxResults?: number;
  pageToken?: string;
};
  "users.drafts.send": {};
  "users.drafts.update": {};
  "users.getProfile": {};
  "users.history.list": {
  pageToken?: string;
  maxResults?: number;
  historyTypes?: ReadonlyArray<"messageAdded" | "messageDeleted" | "labelAdded" | "labelRemoved">;
  startHistoryId?: string;
  labelId?: string;
};
  "users.labels.create": {};
  "users.labels.delete": {};
  "users.labels.get": {};
  "users.labels.list": {};
  "users.labels.patch": {};
  "users.labels.update": {};
  "users.messages.attachments.get": {};
  "users.messages.batchDelete": {};
  "users.messages.batchModify": {};
  "users.messages.delete": {};
  "users.messages.get": {
  format?: "minimal" | "full" | "raw" | "metadata";
  metadataHeaders?: ReadonlyArray<string>;
};
  "users.messages.import": {
  internalDateSource?: "receivedTime" | "dateHeader";
  neverMarkSpam?: boolean;
  processForCalendar?: boolean;
  deleted?: boolean;
};
  "users.messages.insert": {
  deleted?: boolean;
  internalDateSource?: "receivedTime" | "dateHeader";
};
  "users.messages.list": {
  q?: string;
  maxResults?: number;
  labelIds?: ReadonlyArray<string>;
  includeSpamTrash?: boolean;
  pageToken?: string;
};
  "users.messages.modify": {};
  "users.messages.send": {};
  "users.messages.trash": {};
  "users.messages.untrash": {};
  "users.settings.cse.identities.create": {};
  "users.settings.cse.identities.delete": {};
  "users.settings.cse.identities.get": {};
  "users.settings.cse.identities.list": {
  pageSize?: number;
  pageToken?: string;
};
  "users.settings.cse.identities.patch": {};
  "users.settings.cse.keypairs.create": {};
  "users.settings.cse.keypairs.disable": {};
  "users.settings.cse.keypairs.enable": {};
  "users.settings.cse.keypairs.get": {};
  "users.settings.cse.keypairs.list": {
  pageToken?: string;
  pageSize?: number;
};
  "users.settings.cse.keypairs.obliterate": {};
  "users.settings.delegates.create": {};
  "users.settings.delegates.delete": {};
  "users.settings.delegates.get": {};
  "users.settings.delegates.list": {};
  "users.settings.filters.create": {};
  "users.settings.filters.delete": {};
  "users.settings.filters.get": {};
  "users.settings.filters.list": {};
  "users.settings.forwardingAddresses.create": {};
  "users.settings.forwardingAddresses.delete": {};
  "users.settings.forwardingAddresses.get": {};
  "users.settings.forwardingAddresses.list": {};
  "users.settings.getAutoForwarding": {};
  "users.settings.getImap": {};
  "users.settings.getLanguage": {};
  "users.settings.getPop": {};
  "users.settings.getVacation": {};
  "users.settings.sendAs.create": {};
  "users.settings.sendAs.delete": {};
  "users.settings.sendAs.get": {};
  "users.settings.sendAs.list": {};
  "users.settings.sendAs.patch": {};
  "users.settings.sendAs.smimeInfo.delete": {};
  "users.settings.sendAs.smimeInfo.get": {};
  "users.settings.sendAs.smimeInfo.insert": {};
  "users.settings.sendAs.smimeInfo.list": {};
  "users.settings.sendAs.smimeInfo.setDefault": {};
  "users.settings.sendAs.update": {};
  "users.settings.sendAs.verify": {};
  "users.settings.updateAutoForwarding": {};
  "users.settings.updateImap": {};
  "users.settings.updateLanguage": {};
  "users.settings.updatePop": {};
  "users.settings.updateVacation": {};
  "users.stop": {};
  "users.threads.delete": {};
  "users.threads.get": {
  metadataHeaders?: ReadonlyArray<string>;
  format?: "full" | "metadata" | "minimal";
};
  "users.threads.list": {
  q?: string;
  pageToken?: string;
  labelIds?: ReadonlyArray<string>;
  includeSpamTrash?: boolean;
  maxResults?: number;
};
  "users.threads.modify": {};
  "users.threads.trash": {};
  "users.threads.untrash": {};
  "users.watch": {};
}

export interface GmailFullApiOperationQueryRequiredMap {
  "users.drafts.create": false;
  "users.drafts.delete": false;
  "users.drafts.get": false;
  "users.drafts.list": false;
  "users.drafts.send": false;
  "users.drafts.update": false;
  "users.getProfile": false;
  "users.history.list": false;
  "users.labels.create": false;
  "users.labels.delete": false;
  "users.labels.get": false;
  "users.labels.list": false;
  "users.labels.patch": false;
  "users.labels.update": false;
  "users.messages.attachments.get": false;
  "users.messages.batchDelete": false;
  "users.messages.batchModify": false;
  "users.messages.delete": false;
  "users.messages.get": false;
  "users.messages.import": false;
  "users.messages.insert": false;
  "users.messages.list": false;
  "users.messages.modify": false;
  "users.messages.send": false;
  "users.messages.trash": false;
  "users.messages.untrash": false;
  "users.settings.cse.identities.create": false;
  "users.settings.cse.identities.delete": false;
  "users.settings.cse.identities.get": false;
  "users.settings.cse.identities.list": false;
  "users.settings.cse.identities.patch": false;
  "users.settings.cse.keypairs.create": false;
  "users.settings.cse.keypairs.disable": false;
  "users.settings.cse.keypairs.enable": false;
  "users.settings.cse.keypairs.get": false;
  "users.settings.cse.keypairs.list": false;
  "users.settings.cse.keypairs.obliterate": false;
  "users.settings.delegates.create": false;
  "users.settings.delegates.delete": false;
  "users.settings.delegates.get": false;
  "users.settings.delegates.list": false;
  "users.settings.filters.create": false;
  "users.settings.filters.delete": false;
  "users.settings.filters.get": false;
  "users.settings.filters.list": false;
  "users.settings.forwardingAddresses.create": false;
  "users.settings.forwardingAddresses.delete": false;
  "users.settings.forwardingAddresses.get": false;
  "users.settings.forwardingAddresses.list": false;
  "users.settings.getAutoForwarding": false;
  "users.settings.getImap": false;
  "users.settings.getLanguage": false;
  "users.settings.getPop": false;
  "users.settings.getVacation": false;
  "users.settings.sendAs.create": false;
  "users.settings.sendAs.delete": false;
  "users.settings.sendAs.get": false;
  "users.settings.sendAs.list": false;
  "users.settings.sendAs.patch": false;
  "users.settings.sendAs.smimeInfo.delete": false;
  "users.settings.sendAs.smimeInfo.get": false;
  "users.settings.sendAs.smimeInfo.insert": false;
  "users.settings.sendAs.smimeInfo.list": false;
  "users.settings.sendAs.smimeInfo.setDefault": false;
  "users.settings.sendAs.update": false;
  "users.settings.sendAs.verify": false;
  "users.settings.updateAutoForwarding": false;
  "users.settings.updateImap": false;
  "users.settings.updateLanguage": false;
  "users.settings.updatePop": false;
  "users.settings.updateVacation": false;
  "users.stop": false;
  "users.threads.delete": false;
  "users.threads.get": false;
  "users.threads.list": false;
  "users.threads.modify": false;
  "users.threads.trash": false;
  "users.threads.untrash": false;
  "users.watch": false;
}

export interface GmailFullApiOperationRequestBodyMap {
  "users.drafts.create": GmailFullApiSchemaDraft;
  "users.drafts.delete": never;
  "users.drafts.get": never;
  "users.drafts.list": never;
  "users.drafts.send": GmailFullApiSchemaDraft;
  "users.drafts.update": GmailFullApiSchemaDraft;
  "users.getProfile": never;
  "users.history.list": never;
  "users.labels.create": GmailFullApiSchemaLabel;
  "users.labels.delete": never;
  "users.labels.get": never;
  "users.labels.list": never;
  "users.labels.patch": GmailFullApiSchemaLabel;
  "users.labels.update": GmailFullApiSchemaLabel;
  "users.messages.attachments.get": never;
  "users.messages.batchDelete": GmailFullApiSchemaBatchDeleteMessagesRequest;
  "users.messages.batchModify": GmailFullApiSchemaBatchModifyMessagesRequest;
  "users.messages.delete": never;
  "users.messages.get": never;
  "users.messages.import": GmailFullApiSchemaMessage;
  "users.messages.insert": GmailFullApiSchemaMessage;
  "users.messages.list": never;
  "users.messages.modify": GmailFullApiSchemaModifyMessageRequest;
  "users.messages.send": GmailFullApiSchemaMessage;
  "users.messages.trash": never;
  "users.messages.untrash": never;
  "users.settings.cse.identities.create": GmailFullApiSchemaCseIdentity;
  "users.settings.cse.identities.delete": never;
  "users.settings.cse.identities.get": never;
  "users.settings.cse.identities.list": never;
  "users.settings.cse.identities.patch": GmailFullApiSchemaCseIdentity;
  "users.settings.cse.keypairs.create": GmailFullApiSchemaCseKeyPair;
  "users.settings.cse.keypairs.disable": GmailFullApiSchemaDisableCseKeyPairRequest;
  "users.settings.cse.keypairs.enable": GmailFullApiSchemaEnableCseKeyPairRequest;
  "users.settings.cse.keypairs.get": never;
  "users.settings.cse.keypairs.list": never;
  "users.settings.cse.keypairs.obliterate": GmailFullApiSchemaObliterateCseKeyPairRequest;
  "users.settings.delegates.create": GmailFullApiSchemaDelegate;
  "users.settings.delegates.delete": never;
  "users.settings.delegates.get": never;
  "users.settings.delegates.list": never;
  "users.settings.filters.create": GmailFullApiSchemaFilter;
  "users.settings.filters.delete": never;
  "users.settings.filters.get": never;
  "users.settings.filters.list": never;
  "users.settings.forwardingAddresses.create": GmailFullApiSchemaForwardingAddress;
  "users.settings.forwardingAddresses.delete": never;
  "users.settings.forwardingAddresses.get": never;
  "users.settings.forwardingAddresses.list": never;
  "users.settings.getAutoForwarding": never;
  "users.settings.getImap": never;
  "users.settings.getLanguage": never;
  "users.settings.getPop": never;
  "users.settings.getVacation": never;
  "users.settings.sendAs.create": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.delete": never;
  "users.settings.sendAs.get": never;
  "users.settings.sendAs.list": never;
  "users.settings.sendAs.patch": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.smimeInfo.delete": never;
  "users.settings.sendAs.smimeInfo.get": never;
  "users.settings.sendAs.smimeInfo.insert": GmailFullApiSchemaSmimeInfo;
  "users.settings.sendAs.smimeInfo.list": never;
  "users.settings.sendAs.smimeInfo.setDefault": never;
  "users.settings.sendAs.update": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.verify": never;
  "users.settings.updateAutoForwarding": GmailFullApiSchemaAutoForwarding;
  "users.settings.updateImap": GmailFullApiSchemaImapSettings;
  "users.settings.updateLanguage": GmailFullApiSchemaLanguageSettings;
  "users.settings.updatePop": GmailFullApiSchemaPopSettings;
  "users.settings.updateVacation": GmailFullApiSchemaVacationSettings;
  "users.stop": never;
  "users.threads.delete": never;
  "users.threads.get": never;
  "users.threads.list": never;
  "users.threads.modify": GmailFullApiSchemaModifyThreadRequest;
  "users.threads.trash": never;
  "users.threads.untrash": never;
  "users.watch": GmailFullApiSchemaWatchRequest;
}

export interface GmailFullApiOperationRequestBodyRequiredMap {
  "users.drafts.create": true;
  "users.drafts.delete": false;
  "users.drafts.get": false;
  "users.drafts.list": false;
  "users.drafts.send": true;
  "users.drafts.update": true;
  "users.getProfile": false;
  "users.history.list": false;
  "users.labels.create": true;
  "users.labels.delete": false;
  "users.labels.get": false;
  "users.labels.list": false;
  "users.labels.patch": true;
  "users.labels.update": true;
  "users.messages.attachments.get": false;
  "users.messages.batchDelete": true;
  "users.messages.batchModify": true;
  "users.messages.delete": false;
  "users.messages.get": false;
  "users.messages.import": true;
  "users.messages.insert": true;
  "users.messages.list": false;
  "users.messages.modify": true;
  "users.messages.send": true;
  "users.messages.trash": false;
  "users.messages.untrash": false;
  "users.settings.cse.identities.create": true;
  "users.settings.cse.identities.delete": false;
  "users.settings.cse.identities.get": false;
  "users.settings.cse.identities.list": false;
  "users.settings.cse.identities.patch": true;
  "users.settings.cse.keypairs.create": true;
  "users.settings.cse.keypairs.disable": true;
  "users.settings.cse.keypairs.enable": true;
  "users.settings.cse.keypairs.get": false;
  "users.settings.cse.keypairs.list": false;
  "users.settings.cse.keypairs.obliterate": true;
  "users.settings.delegates.create": true;
  "users.settings.delegates.delete": false;
  "users.settings.delegates.get": false;
  "users.settings.delegates.list": false;
  "users.settings.filters.create": true;
  "users.settings.filters.delete": false;
  "users.settings.filters.get": false;
  "users.settings.filters.list": false;
  "users.settings.forwardingAddresses.create": true;
  "users.settings.forwardingAddresses.delete": false;
  "users.settings.forwardingAddresses.get": false;
  "users.settings.forwardingAddresses.list": false;
  "users.settings.getAutoForwarding": false;
  "users.settings.getImap": false;
  "users.settings.getLanguage": false;
  "users.settings.getPop": false;
  "users.settings.getVacation": false;
  "users.settings.sendAs.create": true;
  "users.settings.sendAs.delete": false;
  "users.settings.sendAs.get": false;
  "users.settings.sendAs.list": false;
  "users.settings.sendAs.patch": true;
  "users.settings.sendAs.smimeInfo.delete": false;
  "users.settings.sendAs.smimeInfo.get": false;
  "users.settings.sendAs.smimeInfo.insert": true;
  "users.settings.sendAs.smimeInfo.list": false;
  "users.settings.sendAs.smimeInfo.setDefault": false;
  "users.settings.sendAs.update": true;
  "users.settings.sendAs.verify": false;
  "users.settings.updateAutoForwarding": true;
  "users.settings.updateImap": true;
  "users.settings.updateLanguage": true;
  "users.settings.updatePop": true;
  "users.settings.updateVacation": true;
  "users.stop": false;
  "users.threads.delete": false;
  "users.threads.get": false;
  "users.threads.list": false;
  "users.threads.modify": true;
  "users.threads.trash": false;
  "users.threads.untrash": false;
  "users.watch": true;
}

export interface GmailFullApiOperationResponseMap {
  "users.drafts.create": GmailFullApiSchemaDraft;
  "users.drafts.delete": void;
  "users.drafts.get": GmailFullApiSchemaDraft;
  "users.drafts.list": GmailFullApiSchemaListDraftsResponse;
  "users.drafts.send": GmailFullApiSchemaMessage;
  "users.drafts.update": GmailFullApiSchemaDraft;
  "users.getProfile": GmailFullApiSchemaProfile;
  "users.history.list": GmailFullApiSchemaListHistoryResponse;
  "users.labels.create": GmailFullApiSchemaLabel;
  "users.labels.delete": void;
  "users.labels.get": GmailFullApiSchemaLabel;
  "users.labels.list": GmailFullApiSchemaListLabelsResponse;
  "users.labels.patch": GmailFullApiSchemaLabel;
  "users.labels.update": GmailFullApiSchemaLabel;
  "users.messages.attachments.get": GmailFullApiSchemaMessagePartBody;
  "users.messages.batchDelete": void;
  "users.messages.batchModify": void;
  "users.messages.delete": void;
  "users.messages.get": GmailFullApiSchemaMessage;
  "users.messages.import": GmailFullApiSchemaMessage;
  "users.messages.insert": GmailFullApiSchemaMessage;
  "users.messages.list": GmailFullApiSchemaListMessagesResponse;
  "users.messages.modify": GmailFullApiSchemaMessage;
  "users.messages.send": GmailFullApiSchemaMessage;
  "users.messages.trash": GmailFullApiSchemaMessage;
  "users.messages.untrash": GmailFullApiSchemaMessage;
  "users.settings.cse.identities.create": GmailFullApiSchemaCseIdentity;
  "users.settings.cse.identities.delete": void;
  "users.settings.cse.identities.get": GmailFullApiSchemaCseIdentity;
  "users.settings.cse.identities.list": GmailFullApiSchemaListCseIdentitiesResponse;
  "users.settings.cse.identities.patch": GmailFullApiSchemaCseIdentity;
  "users.settings.cse.keypairs.create": GmailFullApiSchemaCseKeyPair;
  "users.settings.cse.keypairs.disable": GmailFullApiSchemaCseKeyPair;
  "users.settings.cse.keypairs.enable": GmailFullApiSchemaCseKeyPair;
  "users.settings.cse.keypairs.get": GmailFullApiSchemaCseKeyPair;
  "users.settings.cse.keypairs.list": GmailFullApiSchemaListCseKeyPairsResponse;
  "users.settings.cse.keypairs.obliterate": void;
  "users.settings.delegates.create": GmailFullApiSchemaDelegate;
  "users.settings.delegates.delete": void;
  "users.settings.delegates.get": GmailFullApiSchemaDelegate;
  "users.settings.delegates.list": GmailFullApiSchemaListDelegatesResponse;
  "users.settings.filters.create": GmailFullApiSchemaFilter;
  "users.settings.filters.delete": void;
  "users.settings.filters.get": GmailFullApiSchemaFilter;
  "users.settings.filters.list": GmailFullApiSchemaListFiltersResponse;
  "users.settings.forwardingAddresses.create": GmailFullApiSchemaForwardingAddress;
  "users.settings.forwardingAddresses.delete": void;
  "users.settings.forwardingAddresses.get": GmailFullApiSchemaForwardingAddress;
  "users.settings.forwardingAddresses.list": GmailFullApiSchemaListForwardingAddressesResponse;
  "users.settings.getAutoForwarding": GmailFullApiSchemaAutoForwarding;
  "users.settings.getImap": GmailFullApiSchemaImapSettings;
  "users.settings.getLanguage": GmailFullApiSchemaLanguageSettings;
  "users.settings.getPop": GmailFullApiSchemaPopSettings;
  "users.settings.getVacation": GmailFullApiSchemaVacationSettings;
  "users.settings.sendAs.create": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.delete": void;
  "users.settings.sendAs.get": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.list": GmailFullApiSchemaListSendAsResponse;
  "users.settings.sendAs.patch": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.smimeInfo.delete": void;
  "users.settings.sendAs.smimeInfo.get": GmailFullApiSchemaSmimeInfo;
  "users.settings.sendAs.smimeInfo.insert": GmailFullApiSchemaSmimeInfo;
  "users.settings.sendAs.smimeInfo.list": GmailFullApiSchemaListSmimeInfoResponse;
  "users.settings.sendAs.smimeInfo.setDefault": void;
  "users.settings.sendAs.update": GmailFullApiSchemaSendAs;
  "users.settings.sendAs.verify": void;
  "users.settings.updateAutoForwarding": GmailFullApiSchemaAutoForwarding;
  "users.settings.updateImap": GmailFullApiSchemaImapSettings;
  "users.settings.updateLanguage": GmailFullApiSchemaLanguageSettings;
  "users.settings.updatePop": GmailFullApiSchemaPopSettings;
  "users.settings.updateVacation": GmailFullApiSchemaVacationSettings;
  "users.stop": void;
  "users.threads.delete": void;
  "users.threads.get": GmailFullApiSchemaThread;
  "users.threads.list": GmailFullApiSchemaListThreadsResponse;
  "users.threads.modify": GmailFullApiSchemaThread;
  "users.threads.trash": GmailFullApiSchemaThread;
  "users.threads.untrash": GmailFullApiSchemaThread;
  "users.watch": GmailFullApiSchemaWatchResponse;
}
