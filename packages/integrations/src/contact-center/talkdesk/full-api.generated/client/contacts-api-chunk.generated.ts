// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiContactsAPIOperationKeys = [
  "list-contacts",
  "get-contact",
  "contacts-contact-id-delete",
  "contacts-contact-id-integrations-get",
  "contacts-contact-id-custom-fields-get",
  "internal-contacts-gdpr-post"
] as const;
export type TalkdeskFullApiContactsAPIOperationKey = typeof TalkdeskFullApiContactsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiContactsAPIOperationPathParamMap {
  "list-contacts": {};
  "get-contact": { "contact_id": TalkdeskFullApiPathParamValue };
  "contacts-contact-id-delete": { "contact_id": TalkdeskFullApiPathParamValue };
  "contacts-contact-id-integrations-get": { "contact_id": TalkdeskFullApiPathParamValue };
  "contacts-contact-id-custom-fields-get": { "contact_id": TalkdeskFullApiPathParamValue };
  "internal-contacts-gdpr-post": {};
}

export interface TalkdeskFullApiContactsAPIOperationRequestMap {
  "list-contacts": TalkdeskFullApiOperationInput<"list-contacts">;
  "get-contact": TalkdeskFullApiOperationInput<"get-contact">;
  "contacts-contact-id-delete": TalkdeskFullApiOperationInput<"contacts-contact-id-delete">;
  "contacts-contact-id-integrations-get": TalkdeskFullApiOperationInput<"contacts-contact-id-integrations-get">;
  "contacts-contact-id-custom-fields-get": TalkdeskFullApiOperationInput<"contacts-contact-id-custom-fields-get">;
  "internal-contacts-gdpr-post": TalkdeskFullApiOperationInput<"internal-contacts-gdpr-post">;
}

export interface TalkdeskFullApiContactsAPIGeneratedClient {
  ListContacts(...args: TalkdeskFullApiOperationArgs<"list-contacts">): Promise<TalkdeskFullApiOperationResponseMap["list-contacts"]>;
  GetContact(...args: TalkdeskFullApiOperationArgs<"get-contact">): Promise<TalkdeskFullApiOperationResponseMap["get-contact"]>;
  ContactsContactIdDelete(...args: TalkdeskFullApiOperationArgs<"contacts-contact-id-delete">): Promise<TalkdeskFullApiOperationResponseMap["contacts-contact-id-delete"]>;
  ContactsContactIdIntegrationsGet(...args: TalkdeskFullApiOperationArgs<"contacts-contact-id-integrations-get">): Promise<TalkdeskFullApiOperationResponseMap["contacts-contact-id-integrations-get"]>;
  ContactsContactIdCustomFieldsGet(...args: TalkdeskFullApiOperationArgs<"contacts-contact-id-custom-fields-get">): Promise<TalkdeskFullApiOperationResponseMap["contacts-contact-id-custom-fields-get"]>;
  InternalContactsGdprPost(...args: TalkdeskFullApiOperationArgs<"internal-contacts-gdpr-post">): Promise<TalkdeskFullApiOperationResponseMap["internal-contacts-gdpr-post"]>;
}

export const TalkdeskFullApiContactsAPIGeneratedFunctionNames = [
  "ListContacts",
  "GetContact",
  "ContactsContactIdDelete",
  "ContactsContactIdIntegrationsGet",
  "ContactsContactIdCustomFieldsGet",
  "InternalContactsGdprPost"
] as const satisfies readonly (keyof TalkdeskFullApiContactsAPIGeneratedClient)[];

export function createTalkdeskFullApiContactsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiContactsAPIGeneratedClient {
  return {
    ListContacts: (...args) => callOperation("list-contacts", ...(args as TalkdeskFullApiOperationArgs<"list-contacts">)),
    GetContact: (...args) => callOperation("get-contact", ...(args as TalkdeskFullApiOperationArgs<"get-contact">)),
    ContactsContactIdDelete: (...args) => callOperation("contacts-contact-id-delete", ...(args as TalkdeskFullApiOperationArgs<"contacts-contact-id-delete">)),
    ContactsContactIdIntegrationsGet: (...args) => callOperation("contacts-contact-id-integrations-get", ...(args as TalkdeskFullApiOperationArgs<"contacts-contact-id-integrations-get">)),
    ContactsContactIdCustomFieldsGet: (...args) => callOperation("contacts-contact-id-custom-fields-get", ...(args as TalkdeskFullApiOperationArgs<"contacts-contact-id-custom-fields-get">)),
    InternalContactsGdprPost: (...args) => callOperation("internal-contacts-gdpr-post", ...(args as TalkdeskFullApiOperationArgs<"internal-contacts-gdpr-post">)),
  };
}
