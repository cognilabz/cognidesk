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
export const NiceCxoneFullApiContactOperationKeys = [
  "digital-contact-api-docs:searchContacts:GET:/contacts",
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}",
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}",
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon",
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination",
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages",
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment",
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment",
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields",
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}",
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue",
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties",
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript",
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close",
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status"
] as const;
export type NiceCxoneFullApiContactOperationKey = typeof NiceCxoneFullApiContactOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiContactOperationPathParamMap {
  "digital-contact-api-docs:searchContacts:GET:/contacts": {};
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": { "contactNumber": NiceCxoneFullApiPathParamValue; "customFieldIdentifier": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": { "contactNumber": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": { "contactNumber": NiceCxoneFullApiPathParamValue; "agentContactId": NiceCxoneFullApiPathParamValue };
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": { "contactNumber": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiContactOperationRequestMap {
  "digital-contact-api-docs:searchContacts:GET:/contacts": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:searchContacts:GET:/contacts">;
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}">;
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}">;
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon">;
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination">;
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages">;
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment">;
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment">;
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields">;
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}">;
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue">;
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties">;
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript">;
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close">;
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": NiceCxoneFullApiOperationInput<"digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status">;
}

export interface NiceCxoneFullApiContactGeneratedClient {
  DigitalContactApiDocsSearchContacts(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:searchContacts:GET:/contacts">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:searchContacts:GET:/contacts"]>;
  DigitalContactApiDocsGetContact(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}"]>;
  DigitalContactApiDocsUpdateContact(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}"]>;
  DigitalContactApiDocsCreateContactsContactnumberAbandon(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon"]>;
  DigitalContactApiDocsGetContactDetailPagination(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination"]>;
  DigitalContactApiDocsGetContactMessages(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages"]>;
  DigitalContactApiDocsChangeContactInboxAssignee(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment"]>;
  DigitalContactApiDocsUnassignContactInboxAssignee(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment"]>;
  DigitalContactApiDocsSetContactCustomFieldValues(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields"]>;
  DigitalContactApiDocsRemoveContactCustomFieldValue(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}"]>;
  DigitalContactApiDocsChangeContactRoutingQueue(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue"]>;
  DigitalContactApiDocsUpdateContactRoutingProperties(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties"]>;
  DigitalContactApiDocsSendContactTranscript(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript"]>;
  DigitalContactApiDocsCreateContactsAgentContactsClose(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close"]>;
  DigitalContactApiDocsChangeContactStatus(...args: NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status">): Promise<NiceCxoneFullApiOperationResponseMap["digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status"]>;
}

export const NiceCxoneFullApiContactGeneratedFunctionNames = [
  "DigitalContactApiDocsSearchContacts",
  "DigitalContactApiDocsGetContact",
  "DigitalContactApiDocsUpdateContact",
  "DigitalContactApiDocsCreateContactsContactnumberAbandon",
  "DigitalContactApiDocsGetContactDetailPagination",
  "DigitalContactApiDocsGetContactMessages",
  "DigitalContactApiDocsChangeContactInboxAssignee",
  "DigitalContactApiDocsUnassignContactInboxAssignee",
  "DigitalContactApiDocsSetContactCustomFieldValues",
  "DigitalContactApiDocsRemoveContactCustomFieldValue",
  "DigitalContactApiDocsChangeContactRoutingQueue",
  "DigitalContactApiDocsUpdateContactRoutingProperties",
  "DigitalContactApiDocsSendContactTranscript",
  "DigitalContactApiDocsCreateContactsAgentContactsClose",
  "DigitalContactApiDocsChangeContactStatus"
] as const satisfies readonly (keyof NiceCxoneFullApiContactGeneratedClient)[];

export function createNiceCxoneFullApiContactGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiContactGeneratedClient {
  return {
    DigitalContactApiDocsSearchContacts: (...args) => callOperation("digital-contact-api-docs:searchContacts:GET:/contacts", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:searchContacts:GET:/contacts">)),
    DigitalContactApiDocsGetContact: (...args) => callOperation("digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}">)),
    DigitalContactApiDocsUpdateContact: (...args) => callOperation("digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}">)),
    DigitalContactApiDocsCreateContactsContactnumberAbandon: (...args) => callOperation("digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon">)),
    DigitalContactApiDocsGetContactDetailPagination: (...args) => callOperation("digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination">)),
    DigitalContactApiDocsGetContactMessages: (...args) => callOperation("digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages">)),
    DigitalContactApiDocsChangeContactInboxAssignee: (...args) => callOperation("digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment">)),
    DigitalContactApiDocsUnassignContactInboxAssignee: (...args) => callOperation("digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment">)),
    DigitalContactApiDocsSetContactCustomFieldValues: (...args) => callOperation("digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields">)),
    DigitalContactApiDocsRemoveContactCustomFieldValue: (...args) => callOperation("digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}">)),
    DigitalContactApiDocsChangeContactRoutingQueue: (...args) => callOperation("digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue">)),
    DigitalContactApiDocsUpdateContactRoutingProperties: (...args) => callOperation("digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties">)),
    DigitalContactApiDocsSendContactTranscript: (...args) => callOperation("digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript">)),
    DigitalContactApiDocsCreateContactsAgentContactsClose: (...args) => callOperation("digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close">)),
    DigitalContactApiDocsChangeContactStatus: (...args) => callOperation("digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status", ...(args as NiceCxoneFullApiOperationArgs<"digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status">)),
  };
}
