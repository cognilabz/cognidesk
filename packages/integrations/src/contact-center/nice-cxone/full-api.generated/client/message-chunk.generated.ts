// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiMessageOperationKeys = [
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages",
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status",
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound",
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound",
  "digital-message-api-docs:searchMessages:GET:/messages",
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}",
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal",
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}",
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}",
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal",
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete",
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes",
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}",
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}",
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read",
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment",
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}",
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}"
] as const;
export type NiceCxoneFullApiMessageOperationKey = typeof NiceCxoneFullApiMessageOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiMessageOperationPathParamMap {
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": { "channelId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": { "channelId": NiceCxoneFullApiPathParamValue; "messageIdOnExternalPlatform": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": { "channelId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": { "channelId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:searchMessages:GET:/messages": {};
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": { "messageId": NiceCxoneFullApiPathParamValue; "tagId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": { "messageId": NiceCxoneFullApiPathParamValue; "tagId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": { "messageId": NiceCxoneFullApiPathParamValue; "noteId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": { "messageId": NiceCxoneFullApiPathParamValue; "noteId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": { "messageId": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": { "messageId": NiceCxoneFullApiPathParamValue; "reactionType": NiceCxoneFullApiPathParamValue };
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": { "messageId": NiceCxoneFullApiPathParamValue; "reactionType": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiMessageOperationRequestMap {
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": NiceCxoneFullApiOperationInput<"digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages">;
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": NiceCxoneFullApiOperationInput<"digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status">;
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": NiceCxoneFullApiOperationInput<"digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound">;
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": NiceCxoneFullApiOperationInput<"digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound">;
  "digital-message-api-docs:searchMessages:GET:/messages": NiceCxoneFullApiOperationInput<"digital-message-api-docs:searchMessages:GET:/messages">;
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:getMessage:GET:/messages/{messageId}">;
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": NiceCxoneFullApiOperationInput<"digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal">;
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}">;
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}">;
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": NiceCxoneFullApiOperationInput<"digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal">;
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": NiceCxoneFullApiOperationInput<"digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete">;
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": NiceCxoneFullApiOperationInput<"digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes">;
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}">;
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}">;
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": NiceCxoneFullApiOperationInput<"digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read">;
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": NiceCxoneFullApiOperationInput<"digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment">;
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}">;
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": NiceCxoneFullApiOperationInput<"digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}">;
}

export interface NiceCxoneFullApiMessageGeneratedClient {
  DigitalMessageApiDocsChannelsChannelIdCreatemessage(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages"]>;
  DigitalMessageApiDocsUpdateMessageStatus(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status"]>;
  DigitalMessageApiDocsSendOutboundMessage(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound"]>;
  DigitalMessageApiDocsSendInboundMessage(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound"]>;
  DigitalMessageApiDocsSearchMessages(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:searchMessages:GET:/messages">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:searchMessages:GET:/messages"]>;
  DigitalMessageApiDocsGetMessage(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:getMessage:GET:/messages/{messageId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:getMessage:GET:/messages/{messageId}"]>;
  DigitalMessageApiDocsRemoveMessageAuthorName(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal"]>;
  DigitalMessageApiDocsAddMessageTag(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}"]>;
  DigitalMessageApiDocsRemoveMessageTag(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}"]>;
  DigitalMessageApiDocsRemoveMessageContent(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal"]>;
  DigitalMessageApiDocsDeleteDFOMessageBymessageId(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete"]>;
  DigitalMessageApiDocsCreateMessageNote(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes"]>;
  DigitalMessageApiDocsUpdateMessageNote(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}"]>;
  DigitalMessageApiDocsDeleteMessageNote(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}"]>;
  DigitalMessageApiDocsMarkDFOMessageRead(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read"]>;
  DigitalMessageApiDocsSetMessageSentiment(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment"]>;
  DigitalMessageApiDocsAddDFOMessageReact(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}"]>;
  DigitalMessageApiDocsDeleteDFOMessageReact(...args: NiceCxoneFullApiOperationArgs<"digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}"]>;
}

export const NiceCxoneFullApiMessageGeneratedFunctionNames = [
  "DigitalMessageApiDocsChannelsChannelIdCreatemessage",
  "DigitalMessageApiDocsUpdateMessageStatus",
  "DigitalMessageApiDocsSendOutboundMessage",
  "DigitalMessageApiDocsSendInboundMessage",
  "DigitalMessageApiDocsSearchMessages",
  "DigitalMessageApiDocsGetMessage",
  "DigitalMessageApiDocsRemoveMessageAuthorName",
  "DigitalMessageApiDocsAddMessageTag",
  "DigitalMessageApiDocsRemoveMessageTag",
  "DigitalMessageApiDocsRemoveMessageContent",
  "DigitalMessageApiDocsDeleteDFOMessageBymessageId",
  "DigitalMessageApiDocsCreateMessageNote",
  "DigitalMessageApiDocsUpdateMessageNote",
  "DigitalMessageApiDocsDeleteMessageNote",
  "DigitalMessageApiDocsMarkDFOMessageRead",
  "DigitalMessageApiDocsSetMessageSentiment",
  "DigitalMessageApiDocsAddDFOMessageReact",
  "DigitalMessageApiDocsDeleteDFOMessageReact"
] as const satisfies readonly (keyof NiceCxoneFullApiMessageGeneratedClient)[];

export function createNiceCxoneFullApiMessageGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiMessageGeneratedClient {
  return {
    DigitalMessageApiDocsChannelsChannelIdCreatemessage: (...args) => callOperation("digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages">)),
    DigitalMessageApiDocsUpdateMessageStatus: (...args) => callOperation("digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status">)),
    DigitalMessageApiDocsSendOutboundMessage: (...args) => callOperation("digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound">)),
    DigitalMessageApiDocsSendInboundMessage: (...args) => callOperation("digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound">)),
    DigitalMessageApiDocsSearchMessages: (...args) => callOperation("digital-message-api-docs:searchMessages:GET:/messages", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:searchMessages:GET:/messages">)),
    DigitalMessageApiDocsGetMessage: (...args) => callOperation("digital-message-api-docs:getMessage:GET:/messages/{messageId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:getMessage:GET:/messages/{messageId}">)),
    DigitalMessageApiDocsRemoveMessageAuthorName: (...args) => callOperation("digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal">)),
    DigitalMessageApiDocsAddMessageTag: (...args) => callOperation("digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}">)),
    DigitalMessageApiDocsRemoveMessageTag: (...args) => callOperation("digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}">)),
    DigitalMessageApiDocsRemoveMessageContent: (...args) => callOperation("digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal">)),
    DigitalMessageApiDocsDeleteDFOMessageBymessageId: (...args) => callOperation("digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete">)),
    DigitalMessageApiDocsCreateMessageNote: (...args) => callOperation("digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes">)),
    DigitalMessageApiDocsUpdateMessageNote: (...args) => callOperation("digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}">)),
    DigitalMessageApiDocsDeleteMessageNote: (...args) => callOperation("digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}">)),
    DigitalMessageApiDocsMarkDFOMessageRead: (...args) => callOperation("digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read">)),
    DigitalMessageApiDocsSetMessageSentiment: (...args) => callOperation("digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment">)),
    DigitalMessageApiDocsAddDFOMessageReact: (...args) => callOperation("digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}">)),
    DigitalMessageApiDocsDeleteDFOMessageReact: (...args) => callOperation("digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}", ...(args as NiceCxoneFullApiOperationArgs<"digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}">)),
  };
}
