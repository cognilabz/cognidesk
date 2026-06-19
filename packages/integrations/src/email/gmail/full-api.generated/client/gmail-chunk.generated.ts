// Generated endpoint chunk for GmailFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GmailGeneratedOperationCaller,
  GmailFullApiOperationArgs,
  GmailFullApiOperationInput,
  GmailFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GmailFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GmailFullApiGmailOperationKeys = [
  "users.drafts.create",
  "users.drafts.delete",
  "users.drafts.get",
  "users.drafts.list",
  "users.drafts.send",
  "users.drafts.update",
  "users.getProfile",
  "users.history.list",
  "users.labels.create",
  "users.labels.delete",
  "users.labels.get",
  "users.labels.list",
  "users.labels.patch",
  "users.labels.update",
  "users.messages.attachments.get",
  "users.messages.batchDelete",
  "users.messages.batchModify",
  "users.messages.delete",
  "users.messages.get",
  "users.messages.import",
  "users.messages.insert",
  "users.messages.list",
  "users.messages.modify",
  "users.messages.send",
  "users.messages.trash",
  "users.messages.untrash",
  "users.settings.cse.identities.create",
  "users.settings.cse.identities.delete",
  "users.settings.cse.identities.get",
  "users.settings.cse.identities.list",
  "users.settings.cse.identities.patch",
  "users.settings.cse.keypairs.create",
  "users.settings.cse.keypairs.disable",
  "users.settings.cse.keypairs.enable",
  "users.settings.cse.keypairs.get",
  "users.settings.cse.keypairs.list",
  "users.settings.cse.keypairs.obliterate",
  "users.settings.delegates.create",
  "users.settings.delegates.delete",
  "users.settings.delegates.get",
  "users.settings.delegates.list",
  "users.settings.filters.create",
  "users.settings.filters.delete",
  "users.settings.filters.get",
  "users.settings.filters.list",
  "users.settings.forwardingAddresses.create",
  "users.settings.forwardingAddresses.delete",
  "users.settings.forwardingAddresses.get",
  "users.settings.forwardingAddresses.list",
  "users.settings.getAutoForwarding",
  "users.settings.getImap",
  "users.settings.getLanguage",
  "users.settings.getPop",
  "users.settings.getVacation",
  "users.settings.sendAs.create",
  "users.settings.sendAs.delete",
  "users.settings.sendAs.get",
  "users.settings.sendAs.list",
  "users.settings.sendAs.patch",
  "users.settings.sendAs.smimeInfo.delete",
  "users.settings.sendAs.smimeInfo.get",
  "users.settings.sendAs.smimeInfo.insert",
  "users.settings.sendAs.smimeInfo.list",
  "users.settings.sendAs.smimeInfo.setDefault",
  "users.settings.sendAs.update",
  "users.settings.sendAs.verify",
  "users.settings.updateAutoForwarding",
  "users.settings.updateImap",
  "users.settings.updateLanguage",
  "users.settings.updatePop",
  "users.settings.updateVacation",
  "users.stop",
  "users.threads.delete",
  "users.threads.get",
  "users.threads.list",
  "users.threads.modify",
  "users.threads.trash",
  "users.threads.untrash",
  "users.watch"
] as const;
export type GmailFullApiGmailOperationKey = typeof GmailFullApiGmailOperationKeys[number];
// End hardened literal operation keys.

export interface GmailFullApiGmailOperationPathParamMap {
  "users.drafts.create": { "userId": GmailFullApiPathParamValue };
  "users.drafts.delete": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.drafts.get": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.drafts.list": { "userId": GmailFullApiPathParamValue };
  "users.drafts.send": { "userId": GmailFullApiPathParamValue };
  "users.drafts.update": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.getProfile": { "userId": GmailFullApiPathParamValue };
  "users.history.list": { "userId": GmailFullApiPathParamValue };
  "users.labels.create": { "userId": GmailFullApiPathParamValue };
  "users.labels.delete": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.labels.get": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.labels.list": { "userId": GmailFullApiPathParamValue };
  "users.labels.patch": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.labels.update": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.messages.attachments.get": { "userId": GmailFullApiPathParamValue; "messageId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.messages.batchDelete": { "userId": GmailFullApiPathParamValue };
  "users.messages.batchModify": { "userId": GmailFullApiPathParamValue };
  "users.messages.delete": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.messages.get": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.messages.import": { "userId": GmailFullApiPathParamValue };
  "users.messages.insert": { "userId": GmailFullApiPathParamValue };
  "users.messages.list": { "userId": GmailFullApiPathParamValue };
  "users.messages.modify": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.messages.send": { "userId": GmailFullApiPathParamValue };
  "users.messages.trash": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.messages.untrash": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.settings.cse.identities.create": { "userId": GmailFullApiPathParamValue };
  "users.settings.cse.identities.delete": { "userId": GmailFullApiPathParamValue; "cseEmailAddress": GmailFullApiPathParamValue };
  "users.settings.cse.identities.get": { "userId": GmailFullApiPathParamValue; "cseEmailAddress": GmailFullApiPathParamValue };
  "users.settings.cse.identities.list": { "userId": GmailFullApiPathParamValue };
  "users.settings.cse.identities.patch": { "userId": GmailFullApiPathParamValue; "emailAddress": GmailFullApiPathParamValue };
  "users.settings.cse.keypairs.create": { "userId": GmailFullApiPathParamValue };
  "users.settings.cse.keypairs.disable": { "userId": GmailFullApiPathParamValue; "keyPairId": GmailFullApiPathParamValue };
  "users.settings.cse.keypairs.enable": { "userId": GmailFullApiPathParamValue; "keyPairId": GmailFullApiPathParamValue };
  "users.settings.cse.keypairs.get": { "userId": GmailFullApiPathParamValue; "keyPairId": GmailFullApiPathParamValue };
  "users.settings.cse.keypairs.list": { "userId": GmailFullApiPathParamValue };
  "users.settings.cse.keypairs.obliterate": { "userId": GmailFullApiPathParamValue; "keyPairId": GmailFullApiPathParamValue };
  "users.settings.delegates.create": { "userId": GmailFullApiPathParamValue };
  "users.settings.delegates.delete": { "userId": GmailFullApiPathParamValue; "delegateEmail": GmailFullApiPathParamValue };
  "users.settings.delegates.get": { "userId": GmailFullApiPathParamValue; "delegateEmail": GmailFullApiPathParamValue };
  "users.settings.delegates.list": { "userId": GmailFullApiPathParamValue };
  "users.settings.filters.create": { "userId": GmailFullApiPathParamValue };
  "users.settings.filters.delete": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.settings.filters.get": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.settings.filters.list": { "userId": GmailFullApiPathParamValue };
  "users.settings.forwardingAddresses.create": { "userId": GmailFullApiPathParamValue };
  "users.settings.forwardingAddresses.delete": { "userId": GmailFullApiPathParamValue; "forwardingEmail": GmailFullApiPathParamValue };
  "users.settings.forwardingAddresses.get": { "userId": GmailFullApiPathParamValue; "forwardingEmail": GmailFullApiPathParamValue };
  "users.settings.forwardingAddresses.list": { "userId": GmailFullApiPathParamValue };
  "users.settings.getAutoForwarding": { "userId": GmailFullApiPathParamValue };
  "users.settings.getImap": { "userId": GmailFullApiPathParamValue };
  "users.settings.getLanguage": { "userId": GmailFullApiPathParamValue };
  "users.settings.getPop": { "userId": GmailFullApiPathParamValue };
  "users.settings.getVacation": { "userId": GmailFullApiPathParamValue };
  "users.settings.sendAs.create": { "userId": GmailFullApiPathParamValue };
  "users.settings.sendAs.delete": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.sendAs.get": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.sendAs.list": { "userId": GmailFullApiPathParamValue };
  "users.settings.sendAs.patch": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.sendAs.smimeInfo.delete": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.settings.sendAs.smimeInfo.get": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.settings.sendAs.smimeInfo.insert": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.sendAs.smimeInfo.list": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.sendAs.smimeInfo.setDefault": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.settings.sendAs.update": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.sendAs.verify": { "userId": GmailFullApiPathParamValue; "sendAsEmail": GmailFullApiPathParamValue };
  "users.settings.updateAutoForwarding": { "userId": GmailFullApiPathParamValue };
  "users.settings.updateImap": { "userId": GmailFullApiPathParamValue };
  "users.settings.updateLanguage": { "userId": GmailFullApiPathParamValue };
  "users.settings.updatePop": { "userId": GmailFullApiPathParamValue };
  "users.settings.updateVacation": { "userId": GmailFullApiPathParamValue };
  "users.stop": { "userId": GmailFullApiPathParamValue };
  "users.threads.delete": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.threads.get": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.threads.list": { "userId": GmailFullApiPathParamValue };
  "users.threads.modify": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.threads.trash": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.threads.untrash": { "userId": GmailFullApiPathParamValue; "id": GmailFullApiPathParamValue };
  "users.watch": { "userId": GmailFullApiPathParamValue };
}

export interface GmailFullApiGmailOperationRequestMap {
  "users.drafts.create": GmailFullApiOperationInput<"users.drafts.create">;
  "users.drafts.delete": GmailFullApiOperationInput<"users.drafts.delete">;
  "users.drafts.get": GmailFullApiOperationInput<"users.drafts.get">;
  "users.drafts.list": GmailFullApiOperationInput<"users.drafts.list">;
  "users.drafts.send": GmailFullApiOperationInput<"users.drafts.send">;
  "users.drafts.update": GmailFullApiOperationInput<"users.drafts.update">;
  "users.getProfile": GmailFullApiOperationInput<"users.getProfile">;
  "users.history.list": GmailFullApiOperationInput<"users.history.list">;
  "users.labels.create": GmailFullApiOperationInput<"users.labels.create">;
  "users.labels.delete": GmailFullApiOperationInput<"users.labels.delete">;
  "users.labels.get": GmailFullApiOperationInput<"users.labels.get">;
  "users.labels.list": GmailFullApiOperationInput<"users.labels.list">;
  "users.labels.patch": GmailFullApiOperationInput<"users.labels.patch">;
  "users.labels.update": GmailFullApiOperationInput<"users.labels.update">;
  "users.messages.attachments.get": GmailFullApiOperationInput<"users.messages.attachments.get">;
  "users.messages.batchDelete": GmailFullApiOperationInput<"users.messages.batchDelete">;
  "users.messages.batchModify": GmailFullApiOperationInput<"users.messages.batchModify">;
  "users.messages.delete": GmailFullApiOperationInput<"users.messages.delete">;
  "users.messages.get": GmailFullApiOperationInput<"users.messages.get">;
  "users.messages.import": GmailFullApiOperationInput<"users.messages.import">;
  "users.messages.insert": GmailFullApiOperationInput<"users.messages.insert">;
  "users.messages.list": GmailFullApiOperationInput<"users.messages.list">;
  "users.messages.modify": GmailFullApiOperationInput<"users.messages.modify">;
  "users.messages.send": GmailFullApiOperationInput<"users.messages.send">;
  "users.messages.trash": GmailFullApiOperationInput<"users.messages.trash">;
  "users.messages.untrash": GmailFullApiOperationInput<"users.messages.untrash">;
  "users.settings.cse.identities.create": GmailFullApiOperationInput<"users.settings.cse.identities.create">;
  "users.settings.cse.identities.delete": GmailFullApiOperationInput<"users.settings.cse.identities.delete">;
  "users.settings.cse.identities.get": GmailFullApiOperationInput<"users.settings.cse.identities.get">;
  "users.settings.cse.identities.list": GmailFullApiOperationInput<"users.settings.cse.identities.list">;
  "users.settings.cse.identities.patch": GmailFullApiOperationInput<"users.settings.cse.identities.patch">;
  "users.settings.cse.keypairs.create": GmailFullApiOperationInput<"users.settings.cse.keypairs.create">;
  "users.settings.cse.keypairs.disable": GmailFullApiOperationInput<"users.settings.cse.keypairs.disable">;
  "users.settings.cse.keypairs.enable": GmailFullApiOperationInput<"users.settings.cse.keypairs.enable">;
  "users.settings.cse.keypairs.get": GmailFullApiOperationInput<"users.settings.cse.keypairs.get">;
  "users.settings.cse.keypairs.list": GmailFullApiOperationInput<"users.settings.cse.keypairs.list">;
  "users.settings.cse.keypairs.obliterate": GmailFullApiOperationInput<"users.settings.cse.keypairs.obliterate">;
  "users.settings.delegates.create": GmailFullApiOperationInput<"users.settings.delegates.create">;
  "users.settings.delegates.delete": GmailFullApiOperationInput<"users.settings.delegates.delete">;
  "users.settings.delegates.get": GmailFullApiOperationInput<"users.settings.delegates.get">;
  "users.settings.delegates.list": GmailFullApiOperationInput<"users.settings.delegates.list">;
  "users.settings.filters.create": GmailFullApiOperationInput<"users.settings.filters.create">;
  "users.settings.filters.delete": GmailFullApiOperationInput<"users.settings.filters.delete">;
  "users.settings.filters.get": GmailFullApiOperationInput<"users.settings.filters.get">;
  "users.settings.filters.list": GmailFullApiOperationInput<"users.settings.filters.list">;
  "users.settings.forwardingAddresses.create": GmailFullApiOperationInput<"users.settings.forwardingAddresses.create">;
  "users.settings.forwardingAddresses.delete": GmailFullApiOperationInput<"users.settings.forwardingAddresses.delete">;
  "users.settings.forwardingAddresses.get": GmailFullApiOperationInput<"users.settings.forwardingAddresses.get">;
  "users.settings.forwardingAddresses.list": GmailFullApiOperationInput<"users.settings.forwardingAddresses.list">;
  "users.settings.getAutoForwarding": GmailFullApiOperationInput<"users.settings.getAutoForwarding">;
  "users.settings.getImap": GmailFullApiOperationInput<"users.settings.getImap">;
  "users.settings.getLanguage": GmailFullApiOperationInput<"users.settings.getLanguage">;
  "users.settings.getPop": GmailFullApiOperationInput<"users.settings.getPop">;
  "users.settings.getVacation": GmailFullApiOperationInput<"users.settings.getVacation">;
  "users.settings.sendAs.create": GmailFullApiOperationInput<"users.settings.sendAs.create">;
  "users.settings.sendAs.delete": GmailFullApiOperationInput<"users.settings.sendAs.delete">;
  "users.settings.sendAs.get": GmailFullApiOperationInput<"users.settings.sendAs.get">;
  "users.settings.sendAs.list": GmailFullApiOperationInput<"users.settings.sendAs.list">;
  "users.settings.sendAs.patch": GmailFullApiOperationInput<"users.settings.sendAs.patch">;
  "users.settings.sendAs.smimeInfo.delete": GmailFullApiOperationInput<"users.settings.sendAs.smimeInfo.delete">;
  "users.settings.sendAs.smimeInfo.get": GmailFullApiOperationInput<"users.settings.sendAs.smimeInfo.get">;
  "users.settings.sendAs.smimeInfo.insert": GmailFullApiOperationInput<"users.settings.sendAs.smimeInfo.insert">;
  "users.settings.sendAs.smimeInfo.list": GmailFullApiOperationInput<"users.settings.sendAs.smimeInfo.list">;
  "users.settings.sendAs.smimeInfo.setDefault": GmailFullApiOperationInput<"users.settings.sendAs.smimeInfo.setDefault">;
  "users.settings.sendAs.update": GmailFullApiOperationInput<"users.settings.sendAs.update">;
  "users.settings.sendAs.verify": GmailFullApiOperationInput<"users.settings.sendAs.verify">;
  "users.settings.updateAutoForwarding": GmailFullApiOperationInput<"users.settings.updateAutoForwarding">;
  "users.settings.updateImap": GmailFullApiOperationInput<"users.settings.updateImap">;
  "users.settings.updateLanguage": GmailFullApiOperationInput<"users.settings.updateLanguage">;
  "users.settings.updatePop": GmailFullApiOperationInput<"users.settings.updatePop">;
  "users.settings.updateVacation": GmailFullApiOperationInput<"users.settings.updateVacation">;
  "users.stop": GmailFullApiOperationInput<"users.stop">;
  "users.threads.delete": GmailFullApiOperationInput<"users.threads.delete">;
  "users.threads.get": GmailFullApiOperationInput<"users.threads.get">;
  "users.threads.list": GmailFullApiOperationInput<"users.threads.list">;
  "users.threads.modify": GmailFullApiOperationInput<"users.threads.modify">;
  "users.threads.trash": GmailFullApiOperationInput<"users.threads.trash">;
  "users.threads.untrash": GmailFullApiOperationInput<"users.threads.untrash">;
  "users.watch": GmailFullApiOperationInput<"users.watch">;
}

export interface GmailFullApiGmailGeneratedClient {
  UsersDraftsCreate(...args: GmailFullApiOperationArgs<"users.drafts.create">): Promise<GmailFullApiOperationResponseMap["users.drafts.create"]>;
  UsersDraftsDelete(...args: GmailFullApiOperationArgs<"users.drafts.delete">): Promise<GmailFullApiOperationResponseMap["users.drafts.delete"]>;
  UsersDraftsGet(...args: GmailFullApiOperationArgs<"users.drafts.get">): Promise<GmailFullApiOperationResponseMap["users.drafts.get"]>;
  UsersDraftsList(...args: GmailFullApiOperationArgs<"users.drafts.list">): Promise<GmailFullApiOperationResponseMap["users.drafts.list"]>;
  UsersDraftsSend(...args: GmailFullApiOperationArgs<"users.drafts.send">): Promise<GmailFullApiOperationResponseMap["users.drafts.send"]>;
  UsersDraftsUpdate(...args: GmailFullApiOperationArgs<"users.drafts.update">): Promise<GmailFullApiOperationResponseMap["users.drafts.update"]>;
  UsersGetProfile(...args: GmailFullApiOperationArgs<"users.getProfile">): Promise<GmailFullApiOperationResponseMap["users.getProfile"]>;
  UsersHistoryList(...args: GmailFullApiOperationArgs<"users.history.list">): Promise<GmailFullApiOperationResponseMap["users.history.list"]>;
  UsersLabelsCreate(...args: GmailFullApiOperationArgs<"users.labels.create">): Promise<GmailFullApiOperationResponseMap["users.labels.create"]>;
  UsersLabelsDelete(...args: GmailFullApiOperationArgs<"users.labels.delete">): Promise<GmailFullApiOperationResponseMap["users.labels.delete"]>;
  UsersLabelsGet(...args: GmailFullApiOperationArgs<"users.labels.get">): Promise<GmailFullApiOperationResponseMap["users.labels.get"]>;
  UsersLabelsList(...args: GmailFullApiOperationArgs<"users.labels.list">): Promise<GmailFullApiOperationResponseMap["users.labels.list"]>;
  UsersLabelsPatch(...args: GmailFullApiOperationArgs<"users.labels.patch">): Promise<GmailFullApiOperationResponseMap["users.labels.patch"]>;
  UsersLabelsUpdate(...args: GmailFullApiOperationArgs<"users.labels.update">): Promise<GmailFullApiOperationResponseMap["users.labels.update"]>;
  UsersMessagesAttachmentsGet(...args: GmailFullApiOperationArgs<"users.messages.attachments.get">): Promise<GmailFullApiOperationResponseMap["users.messages.attachments.get"]>;
  UsersMessagesBatchDelete(...args: GmailFullApiOperationArgs<"users.messages.batchDelete">): Promise<GmailFullApiOperationResponseMap["users.messages.batchDelete"]>;
  UsersMessagesBatchModify(...args: GmailFullApiOperationArgs<"users.messages.batchModify">): Promise<GmailFullApiOperationResponseMap["users.messages.batchModify"]>;
  UsersMessagesDelete(...args: GmailFullApiOperationArgs<"users.messages.delete">): Promise<GmailFullApiOperationResponseMap["users.messages.delete"]>;
  UsersMessagesGet(...args: GmailFullApiOperationArgs<"users.messages.get">): Promise<GmailFullApiOperationResponseMap["users.messages.get"]>;
  UsersMessagesImport(...args: GmailFullApiOperationArgs<"users.messages.import">): Promise<GmailFullApiOperationResponseMap["users.messages.import"]>;
  UsersMessagesInsert(...args: GmailFullApiOperationArgs<"users.messages.insert">): Promise<GmailFullApiOperationResponseMap["users.messages.insert"]>;
  UsersMessagesList(...args: GmailFullApiOperationArgs<"users.messages.list">): Promise<GmailFullApiOperationResponseMap["users.messages.list"]>;
  UsersMessagesModify(...args: GmailFullApiOperationArgs<"users.messages.modify">): Promise<GmailFullApiOperationResponseMap["users.messages.modify"]>;
  UsersMessagesSend(...args: GmailFullApiOperationArgs<"users.messages.send">): Promise<GmailFullApiOperationResponseMap["users.messages.send"]>;
  UsersMessagesTrash(...args: GmailFullApiOperationArgs<"users.messages.trash">): Promise<GmailFullApiOperationResponseMap["users.messages.trash"]>;
  UsersMessagesUntrash(...args: GmailFullApiOperationArgs<"users.messages.untrash">): Promise<GmailFullApiOperationResponseMap["users.messages.untrash"]>;
  UsersSettingsCseIdentitiesCreate(...args: GmailFullApiOperationArgs<"users.settings.cse.identities.create">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.identities.create"]>;
  UsersSettingsCseIdentitiesDelete(...args: GmailFullApiOperationArgs<"users.settings.cse.identities.delete">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.identities.delete"]>;
  UsersSettingsCseIdentitiesGet(...args: GmailFullApiOperationArgs<"users.settings.cse.identities.get">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.identities.get"]>;
  UsersSettingsCseIdentitiesList(...args: GmailFullApiOperationArgs<"users.settings.cse.identities.list">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.identities.list"]>;
  UsersSettingsCseIdentitiesPatch(...args: GmailFullApiOperationArgs<"users.settings.cse.identities.patch">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.identities.patch"]>;
  UsersSettingsCseKeypairsCreate(...args: GmailFullApiOperationArgs<"users.settings.cse.keypairs.create">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.keypairs.create"]>;
  UsersSettingsCseKeypairsDisable(...args: GmailFullApiOperationArgs<"users.settings.cse.keypairs.disable">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.keypairs.disable"]>;
  UsersSettingsCseKeypairsEnable(...args: GmailFullApiOperationArgs<"users.settings.cse.keypairs.enable">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.keypairs.enable"]>;
  UsersSettingsCseKeypairsGet(...args: GmailFullApiOperationArgs<"users.settings.cse.keypairs.get">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.keypairs.get"]>;
  UsersSettingsCseKeypairsList(...args: GmailFullApiOperationArgs<"users.settings.cse.keypairs.list">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.keypairs.list"]>;
  UsersSettingsCseKeypairsObliterate(...args: GmailFullApiOperationArgs<"users.settings.cse.keypairs.obliterate">): Promise<GmailFullApiOperationResponseMap["users.settings.cse.keypairs.obliterate"]>;
  UsersSettingsDelegatesCreate(...args: GmailFullApiOperationArgs<"users.settings.delegates.create">): Promise<GmailFullApiOperationResponseMap["users.settings.delegates.create"]>;
  UsersSettingsDelegatesDelete(...args: GmailFullApiOperationArgs<"users.settings.delegates.delete">): Promise<GmailFullApiOperationResponseMap["users.settings.delegates.delete"]>;
  UsersSettingsDelegatesGet(...args: GmailFullApiOperationArgs<"users.settings.delegates.get">): Promise<GmailFullApiOperationResponseMap["users.settings.delegates.get"]>;
  UsersSettingsDelegatesList(...args: GmailFullApiOperationArgs<"users.settings.delegates.list">): Promise<GmailFullApiOperationResponseMap["users.settings.delegates.list"]>;
  UsersSettingsFiltersCreate(...args: GmailFullApiOperationArgs<"users.settings.filters.create">): Promise<GmailFullApiOperationResponseMap["users.settings.filters.create"]>;
  UsersSettingsFiltersDelete(...args: GmailFullApiOperationArgs<"users.settings.filters.delete">): Promise<GmailFullApiOperationResponseMap["users.settings.filters.delete"]>;
  UsersSettingsFiltersGet(...args: GmailFullApiOperationArgs<"users.settings.filters.get">): Promise<GmailFullApiOperationResponseMap["users.settings.filters.get"]>;
  UsersSettingsFiltersList(...args: GmailFullApiOperationArgs<"users.settings.filters.list">): Promise<GmailFullApiOperationResponseMap["users.settings.filters.list"]>;
  UsersSettingsForwardingAddressesCreate(...args: GmailFullApiOperationArgs<"users.settings.forwardingAddresses.create">): Promise<GmailFullApiOperationResponseMap["users.settings.forwardingAddresses.create"]>;
  UsersSettingsForwardingAddressesDelete(...args: GmailFullApiOperationArgs<"users.settings.forwardingAddresses.delete">): Promise<GmailFullApiOperationResponseMap["users.settings.forwardingAddresses.delete"]>;
  UsersSettingsForwardingAddressesGet(...args: GmailFullApiOperationArgs<"users.settings.forwardingAddresses.get">): Promise<GmailFullApiOperationResponseMap["users.settings.forwardingAddresses.get"]>;
  UsersSettingsForwardingAddressesList(...args: GmailFullApiOperationArgs<"users.settings.forwardingAddresses.list">): Promise<GmailFullApiOperationResponseMap["users.settings.forwardingAddresses.list"]>;
  UsersSettingsGetAutoForwarding(...args: GmailFullApiOperationArgs<"users.settings.getAutoForwarding">): Promise<GmailFullApiOperationResponseMap["users.settings.getAutoForwarding"]>;
  UsersSettingsGetImap(...args: GmailFullApiOperationArgs<"users.settings.getImap">): Promise<GmailFullApiOperationResponseMap["users.settings.getImap"]>;
  UsersSettingsGetLanguage(...args: GmailFullApiOperationArgs<"users.settings.getLanguage">): Promise<GmailFullApiOperationResponseMap["users.settings.getLanguage"]>;
  UsersSettingsGetPop(...args: GmailFullApiOperationArgs<"users.settings.getPop">): Promise<GmailFullApiOperationResponseMap["users.settings.getPop"]>;
  UsersSettingsGetVacation(...args: GmailFullApiOperationArgs<"users.settings.getVacation">): Promise<GmailFullApiOperationResponseMap["users.settings.getVacation"]>;
  UsersSettingsSendAsCreate(...args: GmailFullApiOperationArgs<"users.settings.sendAs.create">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.create"]>;
  UsersSettingsSendAsDelete(...args: GmailFullApiOperationArgs<"users.settings.sendAs.delete">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.delete"]>;
  UsersSettingsSendAsGet(...args: GmailFullApiOperationArgs<"users.settings.sendAs.get">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.get"]>;
  UsersSettingsSendAsList(...args: GmailFullApiOperationArgs<"users.settings.sendAs.list">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.list"]>;
  UsersSettingsSendAsPatch(...args: GmailFullApiOperationArgs<"users.settings.sendAs.patch">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.patch"]>;
  UsersSettingsSendAsSmimeInfoDelete(...args: GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.delete">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.smimeInfo.delete"]>;
  UsersSettingsSendAsSmimeInfoGet(...args: GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.get">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.smimeInfo.get"]>;
  UsersSettingsSendAsSmimeInfoInsert(...args: GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.insert">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.smimeInfo.insert"]>;
  UsersSettingsSendAsSmimeInfoList(...args: GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.list">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.smimeInfo.list"]>;
  UsersSettingsSendAsSmimeInfoSetDefault(...args: GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.setDefault">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.smimeInfo.setDefault"]>;
  UsersSettingsSendAsUpdate(...args: GmailFullApiOperationArgs<"users.settings.sendAs.update">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.update"]>;
  UsersSettingsSendAsVerify(...args: GmailFullApiOperationArgs<"users.settings.sendAs.verify">): Promise<GmailFullApiOperationResponseMap["users.settings.sendAs.verify"]>;
  UsersSettingsUpdateAutoForwarding(...args: GmailFullApiOperationArgs<"users.settings.updateAutoForwarding">): Promise<GmailFullApiOperationResponseMap["users.settings.updateAutoForwarding"]>;
  UsersSettingsUpdateImap(...args: GmailFullApiOperationArgs<"users.settings.updateImap">): Promise<GmailFullApiOperationResponseMap["users.settings.updateImap"]>;
  UsersSettingsUpdateLanguage(...args: GmailFullApiOperationArgs<"users.settings.updateLanguage">): Promise<GmailFullApiOperationResponseMap["users.settings.updateLanguage"]>;
  UsersSettingsUpdatePop(...args: GmailFullApiOperationArgs<"users.settings.updatePop">): Promise<GmailFullApiOperationResponseMap["users.settings.updatePop"]>;
  UsersSettingsUpdateVacation(...args: GmailFullApiOperationArgs<"users.settings.updateVacation">): Promise<GmailFullApiOperationResponseMap["users.settings.updateVacation"]>;
  UsersStop(...args: GmailFullApiOperationArgs<"users.stop">): Promise<GmailFullApiOperationResponseMap["users.stop"]>;
  UsersThreadsDelete(...args: GmailFullApiOperationArgs<"users.threads.delete">): Promise<GmailFullApiOperationResponseMap["users.threads.delete"]>;
  UsersThreadsGet(...args: GmailFullApiOperationArgs<"users.threads.get">): Promise<GmailFullApiOperationResponseMap["users.threads.get"]>;
  UsersThreadsList(...args: GmailFullApiOperationArgs<"users.threads.list">): Promise<GmailFullApiOperationResponseMap["users.threads.list"]>;
  UsersThreadsModify(...args: GmailFullApiOperationArgs<"users.threads.modify">): Promise<GmailFullApiOperationResponseMap["users.threads.modify"]>;
  UsersThreadsTrash(...args: GmailFullApiOperationArgs<"users.threads.trash">): Promise<GmailFullApiOperationResponseMap["users.threads.trash"]>;
  UsersThreadsUntrash(...args: GmailFullApiOperationArgs<"users.threads.untrash">): Promise<GmailFullApiOperationResponseMap["users.threads.untrash"]>;
  UsersWatch(...args: GmailFullApiOperationArgs<"users.watch">): Promise<GmailFullApiOperationResponseMap["users.watch"]>;
}

export const GmailFullApiGmailGeneratedFunctionNames = [
  "UsersDraftsCreate",
  "UsersDraftsDelete",
  "UsersDraftsGet",
  "UsersDraftsList",
  "UsersDraftsSend",
  "UsersDraftsUpdate",
  "UsersGetProfile",
  "UsersHistoryList",
  "UsersLabelsCreate",
  "UsersLabelsDelete",
  "UsersLabelsGet",
  "UsersLabelsList",
  "UsersLabelsPatch",
  "UsersLabelsUpdate",
  "UsersMessagesAttachmentsGet",
  "UsersMessagesBatchDelete",
  "UsersMessagesBatchModify",
  "UsersMessagesDelete",
  "UsersMessagesGet",
  "UsersMessagesImport",
  "UsersMessagesInsert",
  "UsersMessagesList",
  "UsersMessagesModify",
  "UsersMessagesSend",
  "UsersMessagesTrash",
  "UsersMessagesUntrash",
  "UsersSettingsCseIdentitiesCreate",
  "UsersSettingsCseIdentitiesDelete",
  "UsersSettingsCseIdentitiesGet",
  "UsersSettingsCseIdentitiesList",
  "UsersSettingsCseIdentitiesPatch",
  "UsersSettingsCseKeypairsCreate",
  "UsersSettingsCseKeypairsDisable",
  "UsersSettingsCseKeypairsEnable",
  "UsersSettingsCseKeypairsGet",
  "UsersSettingsCseKeypairsList",
  "UsersSettingsCseKeypairsObliterate",
  "UsersSettingsDelegatesCreate",
  "UsersSettingsDelegatesDelete",
  "UsersSettingsDelegatesGet",
  "UsersSettingsDelegatesList",
  "UsersSettingsFiltersCreate",
  "UsersSettingsFiltersDelete",
  "UsersSettingsFiltersGet",
  "UsersSettingsFiltersList",
  "UsersSettingsForwardingAddressesCreate",
  "UsersSettingsForwardingAddressesDelete",
  "UsersSettingsForwardingAddressesGet",
  "UsersSettingsForwardingAddressesList",
  "UsersSettingsGetAutoForwarding",
  "UsersSettingsGetImap",
  "UsersSettingsGetLanguage",
  "UsersSettingsGetPop",
  "UsersSettingsGetVacation",
  "UsersSettingsSendAsCreate",
  "UsersSettingsSendAsDelete",
  "UsersSettingsSendAsGet",
  "UsersSettingsSendAsList",
  "UsersSettingsSendAsPatch",
  "UsersSettingsSendAsSmimeInfoDelete",
  "UsersSettingsSendAsSmimeInfoGet",
  "UsersSettingsSendAsSmimeInfoInsert",
  "UsersSettingsSendAsSmimeInfoList",
  "UsersSettingsSendAsSmimeInfoSetDefault",
  "UsersSettingsSendAsUpdate",
  "UsersSettingsSendAsVerify",
  "UsersSettingsUpdateAutoForwarding",
  "UsersSettingsUpdateImap",
  "UsersSettingsUpdateLanguage",
  "UsersSettingsUpdatePop",
  "UsersSettingsUpdateVacation",
  "UsersStop",
  "UsersThreadsDelete",
  "UsersThreadsGet",
  "UsersThreadsList",
  "UsersThreadsModify",
  "UsersThreadsTrash",
  "UsersThreadsUntrash",
  "UsersWatch"
] as const satisfies readonly (keyof GmailFullApiGmailGeneratedClient)[];

export function createGmailFullApiGmailGeneratedClient(
  callOperation: GmailGeneratedOperationCaller,
): GmailFullApiGmailGeneratedClient {
  return {
    UsersDraftsCreate: (...args) => callOperation("users.drafts.create", ...(args as GmailFullApiOperationArgs<"users.drafts.create">)),
    UsersDraftsDelete: (...args) => callOperation("users.drafts.delete", ...(args as GmailFullApiOperationArgs<"users.drafts.delete">)),
    UsersDraftsGet: (...args) => callOperation("users.drafts.get", ...(args as GmailFullApiOperationArgs<"users.drafts.get">)),
    UsersDraftsList: (...args) => callOperation("users.drafts.list", ...(args as GmailFullApiOperationArgs<"users.drafts.list">)),
    UsersDraftsSend: (...args) => callOperation("users.drafts.send", ...(args as GmailFullApiOperationArgs<"users.drafts.send">)),
    UsersDraftsUpdate: (...args) => callOperation("users.drafts.update", ...(args as GmailFullApiOperationArgs<"users.drafts.update">)),
    UsersGetProfile: (...args) => callOperation("users.getProfile", ...(args as GmailFullApiOperationArgs<"users.getProfile">)),
    UsersHistoryList: (...args) => callOperation("users.history.list", ...(args as GmailFullApiOperationArgs<"users.history.list">)),
    UsersLabelsCreate: (...args) => callOperation("users.labels.create", ...(args as GmailFullApiOperationArgs<"users.labels.create">)),
    UsersLabelsDelete: (...args) => callOperation("users.labels.delete", ...(args as GmailFullApiOperationArgs<"users.labels.delete">)),
    UsersLabelsGet: (...args) => callOperation("users.labels.get", ...(args as GmailFullApiOperationArgs<"users.labels.get">)),
    UsersLabelsList: (...args) => callOperation("users.labels.list", ...(args as GmailFullApiOperationArgs<"users.labels.list">)),
    UsersLabelsPatch: (...args) => callOperation("users.labels.patch", ...(args as GmailFullApiOperationArgs<"users.labels.patch">)),
    UsersLabelsUpdate: (...args) => callOperation("users.labels.update", ...(args as GmailFullApiOperationArgs<"users.labels.update">)),
    UsersMessagesAttachmentsGet: (...args) => callOperation("users.messages.attachments.get", ...(args as GmailFullApiOperationArgs<"users.messages.attachments.get">)),
    UsersMessagesBatchDelete: (...args) => callOperation("users.messages.batchDelete", ...(args as GmailFullApiOperationArgs<"users.messages.batchDelete">)),
    UsersMessagesBatchModify: (...args) => callOperation("users.messages.batchModify", ...(args as GmailFullApiOperationArgs<"users.messages.batchModify">)),
    UsersMessagesDelete: (...args) => callOperation("users.messages.delete", ...(args as GmailFullApiOperationArgs<"users.messages.delete">)),
    UsersMessagesGet: (...args) => callOperation("users.messages.get", ...(args as GmailFullApiOperationArgs<"users.messages.get">)),
    UsersMessagesImport: (...args) => callOperation("users.messages.import", ...(args as GmailFullApiOperationArgs<"users.messages.import">)),
    UsersMessagesInsert: (...args) => callOperation("users.messages.insert", ...(args as GmailFullApiOperationArgs<"users.messages.insert">)),
    UsersMessagesList: (...args) => callOperation("users.messages.list", ...(args as GmailFullApiOperationArgs<"users.messages.list">)),
    UsersMessagesModify: (...args) => callOperation("users.messages.modify", ...(args as GmailFullApiOperationArgs<"users.messages.modify">)),
    UsersMessagesSend: (...args) => callOperation("users.messages.send", ...(args as GmailFullApiOperationArgs<"users.messages.send">)),
    UsersMessagesTrash: (...args) => callOperation("users.messages.trash", ...(args as GmailFullApiOperationArgs<"users.messages.trash">)),
    UsersMessagesUntrash: (...args) => callOperation("users.messages.untrash", ...(args as GmailFullApiOperationArgs<"users.messages.untrash">)),
    UsersSettingsCseIdentitiesCreate: (...args) => callOperation("users.settings.cse.identities.create", ...(args as GmailFullApiOperationArgs<"users.settings.cse.identities.create">)),
    UsersSettingsCseIdentitiesDelete: (...args) => callOperation("users.settings.cse.identities.delete", ...(args as GmailFullApiOperationArgs<"users.settings.cse.identities.delete">)),
    UsersSettingsCseIdentitiesGet: (...args) => callOperation("users.settings.cse.identities.get", ...(args as GmailFullApiOperationArgs<"users.settings.cse.identities.get">)),
    UsersSettingsCseIdentitiesList: (...args) => callOperation("users.settings.cse.identities.list", ...(args as GmailFullApiOperationArgs<"users.settings.cse.identities.list">)),
    UsersSettingsCseIdentitiesPatch: (...args) => callOperation("users.settings.cse.identities.patch", ...(args as GmailFullApiOperationArgs<"users.settings.cse.identities.patch">)),
    UsersSettingsCseKeypairsCreate: (...args) => callOperation("users.settings.cse.keypairs.create", ...(args as GmailFullApiOperationArgs<"users.settings.cse.keypairs.create">)),
    UsersSettingsCseKeypairsDisable: (...args) => callOperation("users.settings.cse.keypairs.disable", ...(args as GmailFullApiOperationArgs<"users.settings.cse.keypairs.disable">)),
    UsersSettingsCseKeypairsEnable: (...args) => callOperation("users.settings.cse.keypairs.enable", ...(args as GmailFullApiOperationArgs<"users.settings.cse.keypairs.enable">)),
    UsersSettingsCseKeypairsGet: (...args) => callOperation("users.settings.cse.keypairs.get", ...(args as GmailFullApiOperationArgs<"users.settings.cse.keypairs.get">)),
    UsersSettingsCseKeypairsList: (...args) => callOperation("users.settings.cse.keypairs.list", ...(args as GmailFullApiOperationArgs<"users.settings.cse.keypairs.list">)),
    UsersSettingsCseKeypairsObliterate: (...args) => callOperation("users.settings.cse.keypairs.obliterate", ...(args as GmailFullApiOperationArgs<"users.settings.cse.keypairs.obliterate">)),
    UsersSettingsDelegatesCreate: (...args) => callOperation("users.settings.delegates.create", ...(args as GmailFullApiOperationArgs<"users.settings.delegates.create">)),
    UsersSettingsDelegatesDelete: (...args) => callOperation("users.settings.delegates.delete", ...(args as GmailFullApiOperationArgs<"users.settings.delegates.delete">)),
    UsersSettingsDelegatesGet: (...args) => callOperation("users.settings.delegates.get", ...(args as GmailFullApiOperationArgs<"users.settings.delegates.get">)),
    UsersSettingsDelegatesList: (...args) => callOperation("users.settings.delegates.list", ...(args as GmailFullApiOperationArgs<"users.settings.delegates.list">)),
    UsersSettingsFiltersCreate: (...args) => callOperation("users.settings.filters.create", ...(args as GmailFullApiOperationArgs<"users.settings.filters.create">)),
    UsersSettingsFiltersDelete: (...args) => callOperation("users.settings.filters.delete", ...(args as GmailFullApiOperationArgs<"users.settings.filters.delete">)),
    UsersSettingsFiltersGet: (...args) => callOperation("users.settings.filters.get", ...(args as GmailFullApiOperationArgs<"users.settings.filters.get">)),
    UsersSettingsFiltersList: (...args) => callOperation("users.settings.filters.list", ...(args as GmailFullApiOperationArgs<"users.settings.filters.list">)),
    UsersSettingsForwardingAddressesCreate: (...args) => callOperation("users.settings.forwardingAddresses.create", ...(args as GmailFullApiOperationArgs<"users.settings.forwardingAddresses.create">)),
    UsersSettingsForwardingAddressesDelete: (...args) => callOperation("users.settings.forwardingAddresses.delete", ...(args as GmailFullApiOperationArgs<"users.settings.forwardingAddresses.delete">)),
    UsersSettingsForwardingAddressesGet: (...args) => callOperation("users.settings.forwardingAddresses.get", ...(args as GmailFullApiOperationArgs<"users.settings.forwardingAddresses.get">)),
    UsersSettingsForwardingAddressesList: (...args) => callOperation("users.settings.forwardingAddresses.list", ...(args as GmailFullApiOperationArgs<"users.settings.forwardingAddresses.list">)),
    UsersSettingsGetAutoForwarding: (...args) => callOperation("users.settings.getAutoForwarding", ...(args as GmailFullApiOperationArgs<"users.settings.getAutoForwarding">)),
    UsersSettingsGetImap: (...args) => callOperation("users.settings.getImap", ...(args as GmailFullApiOperationArgs<"users.settings.getImap">)),
    UsersSettingsGetLanguage: (...args) => callOperation("users.settings.getLanguage", ...(args as GmailFullApiOperationArgs<"users.settings.getLanguage">)),
    UsersSettingsGetPop: (...args) => callOperation("users.settings.getPop", ...(args as GmailFullApiOperationArgs<"users.settings.getPop">)),
    UsersSettingsGetVacation: (...args) => callOperation("users.settings.getVacation", ...(args as GmailFullApiOperationArgs<"users.settings.getVacation">)),
    UsersSettingsSendAsCreate: (...args) => callOperation("users.settings.sendAs.create", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.create">)),
    UsersSettingsSendAsDelete: (...args) => callOperation("users.settings.sendAs.delete", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.delete">)),
    UsersSettingsSendAsGet: (...args) => callOperation("users.settings.sendAs.get", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.get">)),
    UsersSettingsSendAsList: (...args) => callOperation("users.settings.sendAs.list", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.list">)),
    UsersSettingsSendAsPatch: (...args) => callOperation("users.settings.sendAs.patch", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.patch">)),
    UsersSettingsSendAsSmimeInfoDelete: (...args) => callOperation("users.settings.sendAs.smimeInfo.delete", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.delete">)),
    UsersSettingsSendAsSmimeInfoGet: (...args) => callOperation("users.settings.sendAs.smimeInfo.get", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.get">)),
    UsersSettingsSendAsSmimeInfoInsert: (...args) => callOperation("users.settings.sendAs.smimeInfo.insert", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.insert">)),
    UsersSettingsSendAsSmimeInfoList: (...args) => callOperation("users.settings.sendAs.smimeInfo.list", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.list">)),
    UsersSettingsSendAsSmimeInfoSetDefault: (...args) => callOperation("users.settings.sendAs.smimeInfo.setDefault", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.smimeInfo.setDefault">)),
    UsersSettingsSendAsUpdate: (...args) => callOperation("users.settings.sendAs.update", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.update">)),
    UsersSettingsSendAsVerify: (...args) => callOperation("users.settings.sendAs.verify", ...(args as GmailFullApiOperationArgs<"users.settings.sendAs.verify">)),
    UsersSettingsUpdateAutoForwarding: (...args) => callOperation("users.settings.updateAutoForwarding", ...(args as GmailFullApiOperationArgs<"users.settings.updateAutoForwarding">)),
    UsersSettingsUpdateImap: (...args) => callOperation("users.settings.updateImap", ...(args as GmailFullApiOperationArgs<"users.settings.updateImap">)),
    UsersSettingsUpdateLanguage: (...args) => callOperation("users.settings.updateLanguage", ...(args as GmailFullApiOperationArgs<"users.settings.updateLanguage">)),
    UsersSettingsUpdatePop: (...args) => callOperation("users.settings.updatePop", ...(args as GmailFullApiOperationArgs<"users.settings.updatePop">)),
    UsersSettingsUpdateVacation: (...args) => callOperation("users.settings.updateVacation", ...(args as GmailFullApiOperationArgs<"users.settings.updateVacation">)),
    UsersStop: (...args) => callOperation("users.stop", ...(args as GmailFullApiOperationArgs<"users.stop">)),
    UsersThreadsDelete: (...args) => callOperation("users.threads.delete", ...(args as GmailFullApiOperationArgs<"users.threads.delete">)),
    UsersThreadsGet: (...args) => callOperation("users.threads.get", ...(args as GmailFullApiOperationArgs<"users.threads.get">)),
    UsersThreadsList: (...args) => callOperation("users.threads.list", ...(args as GmailFullApiOperationArgs<"users.threads.list">)),
    UsersThreadsModify: (...args) => callOperation("users.threads.modify", ...(args as GmailFullApiOperationArgs<"users.threads.modify">)),
    UsersThreadsTrash: (...args) => callOperation("users.threads.trash", ...(args as GmailFullApiOperationArgs<"users.threads.trash">)),
    UsersThreadsUntrash: (...args) => callOperation("users.threads.untrash", ...(args as GmailFullApiOperationArgs<"users.threads.untrash">)),
    UsersWatch: (...args) => callOperation("users.watch", ...(args as GmailFullApiOperationArgs<"users.watch">)),
  };
}
