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
export const NiceCxoneFullApiContactsOperationKeys = [
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript",
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition",
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript",
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript",
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files",
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end",
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor",
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record",
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition",
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags",
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions",
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}",
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}",
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal",
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript",
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts"
] as const;
export type NiceCxoneFullApiContactsOperationKey = typeof NiceCxoneFullApiContactsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiContactsOperationPathParamMap {
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": {};
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": { "contactStateId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": { "contactId": NiceCxoneFullApiPathParamValue };
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": {};
}

export interface NiceCxoneFullApiContactsOperationRequestMap {
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript">;
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition">;
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript">;
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript">;
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files">;
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end">;
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor">;
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record">;
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition">;
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags">;
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions">;
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}">;
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}">;
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal">;
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript">;
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": NiceCxoneFullApiOperationInput<"admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts">;
}

export interface NiceCxoneFullApiContactsGeneratedClient {
  AdminContactsApiDocsChatTranscript(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript"]>;
  AdminContactsApiDocsGetContactsIdDisposition(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition"]>;
  AdminContactsApiDocsGetHistoricalChatTranscript(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript"]>;
  AdminContactsApiDocsEmailTranscript(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript"]>;
  AdminContactsApiDocsContactFiles(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files"]>;
  AdminContactsApiDocsEndAContact(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end"]>;
  AdminContactsApiDocsMonitorAContactCall(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor"]>;
  AdminContactsApiDocsRecordAContact(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record"]>;
  AdminContactsApiDocsPostContactsIdSetDisposition(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition"]>;
  AdminContactsApiDocsAssignTagsContact(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags"]>;
  AdminContactsApiDocsGetContactStateDescriptions(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions"]>;
  AdminContactsApiDocsGetContactStateById(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}"]>;
  AdminContactsApiDocsPutPersistentContactsId(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}"]>;
  AdminContactsApiDocsSignalAContact(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal"]>;
  AdminContactsApiDocsGetContactsIdSmsHistoricalTranscript(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript"]>;
  AdminContactsApiDocsGetContactsSmsHistoricalContacts(...args: NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts"]>;
}

export const NiceCxoneFullApiContactsGeneratedFunctionNames = [
  "AdminContactsApiDocsChatTranscript",
  "AdminContactsApiDocsGetContactsIdDisposition",
  "AdminContactsApiDocsGetHistoricalChatTranscript",
  "AdminContactsApiDocsEmailTranscript",
  "AdminContactsApiDocsContactFiles",
  "AdminContactsApiDocsEndAContact",
  "AdminContactsApiDocsMonitorAContactCall",
  "AdminContactsApiDocsRecordAContact",
  "AdminContactsApiDocsPostContactsIdSetDisposition",
  "AdminContactsApiDocsAssignTagsContact",
  "AdminContactsApiDocsGetContactStateDescriptions",
  "AdminContactsApiDocsGetContactStateById",
  "AdminContactsApiDocsPutPersistentContactsId",
  "AdminContactsApiDocsSignalAContact",
  "AdminContactsApiDocsGetContactsIdSmsHistoricalTranscript",
  "AdminContactsApiDocsGetContactsSmsHistoricalContacts"
] as const satisfies readonly (keyof NiceCxoneFullApiContactsGeneratedClient)[];

export function createNiceCxoneFullApiContactsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiContactsGeneratedClient {
  return {
    AdminContactsApiDocsChatTranscript: (...args) => callOperation("admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript">)),
    AdminContactsApiDocsGetContactsIdDisposition: (...args) => callOperation("admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition">)),
    AdminContactsApiDocsGetHistoricalChatTranscript: (...args) => callOperation("admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript">)),
    AdminContactsApiDocsEmailTranscript: (...args) => callOperation("admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript">)),
    AdminContactsApiDocsContactFiles: (...args) => callOperation("admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files">)),
    AdminContactsApiDocsEndAContact: (...args) => callOperation("admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end">)),
    AdminContactsApiDocsMonitorAContactCall: (...args) => callOperation("admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor">)),
    AdminContactsApiDocsRecordAContact: (...args) => callOperation("admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record">)),
    AdminContactsApiDocsPostContactsIdSetDisposition: (...args) => callOperation("admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition">)),
    AdminContactsApiDocsAssignTagsContact: (...args) => callOperation("admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags">)),
    AdminContactsApiDocsGetContactStateDescriptions: (...args) => callOperation("admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions">)),
    AdminContactsApiDocsGetContactStateById: (...args) => callOperation("admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}">)),
    AdminContactsApiDocsPutPersistentContactsId: (...args) => callOperation("admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}">)),
    AdminContactsApiDocsSignalAContact: (...args) => callOperation("admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal">)),
    AdminContactsApiDocsGetContactsIdSmsHistoricalTranscript: (...args) => callOperation("admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript">)),
    AdminContactsApiDocsGetContactsSmsHistoricalContacts: (...args) => callOperation("admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts", ...(args as NiceCxoneFullApiOperationArgs<"admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts">)),
  };
}
