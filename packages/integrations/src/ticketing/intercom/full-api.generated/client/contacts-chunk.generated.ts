// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiContactsOperationKeys = [
  "ListContacts",
  "CreateContact",
  "DeleteContact",
  "ShowContact",
  "UpdateContact",
  "ArchiveContact",
  "BlockContact",
  "listCompaniesForAContact",
  "listSegmentsForAContact",
  "listSubscriptionsForAContact",
  "listTagsForAContact",
  "UnarchiveContact",
  "ShowContactByExternalId",
  "MergeContact",
  "SearchContacts"
] as const;
export type IntercomFullApiContactsOperationKey = typeof IntercomFullApiContactsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiContactsOperationPathParamMap {
  "ListContacts": {};
  "CreateContact": {};
  "DeleteContact": { "contact_id": IntercomFullApiPathParamValue };
  "ShowContact": { "contact_id": IntercomFullApiPathParamValue };
  "UpdateContact": { "contact_id": IntercomFullApiPathParamValue };
  "ArchiveContact": { "contact_id": IntercomFullApiPathParamValue };
  "BlockContact": { "contact_id": IntercomFullApiPathParamValue };
  "listCompaniesForAContact": { "contact_id": IntercomFullApiPathParamValue };
  "listSegmentsForAContact": { "contact_id": IntercomFullApiPathParamValue };
  "listSubscriptionsForAContact": { "contact_id": IntercomFullApiPathParamValue };
  "listTagsForAContact": { "contact_id": IntercomFullApiPathParamValue };
  "UnarchiveContact": { "contact_id": IntercomFullApiPathParamValue };
  "ShowContactByExternalId": { "external_id": IntercomFullApiPathParamValue };
  "MergeContact": {};
  "SearchContacts": {};
}

export interface IntercomFullApiContactsOperationRequestMap {
  "ListContacts": IntercomFullApiOperationInput<"ListContacts">;
  "CreateContact": IntercomFullApiOperationInput<"CreateContact">;
  "DeleteContact": IntercomFullApiOperationInput<"DeleteContact">;
  "ShowContact": IntercomFullApiOperationInput<"ShowContact">;
  "UpdateContact": IntercomFullApiOperationInput<"UpdateContact">;
  "ArchiveContact": IntercomFullApiOperationInput<"ArchiveContact">;
  "BlockContact": IntercomFullApiOperationInput<"BlockContact">;
  "listCompaniesForAContact": IntercomFullApiOperationInput<"listCompaniesForAContact">;
  "listSegmentsForAContact": IntercomFullApiOperationInput<"listSegmentsForAContact">;
  "listSubscriptionsForAContact": IntercomFullApiOperationInput<"listSubscriptionsForAContact">;
  "listTagsForAContact": IntercomFullApiOperationInput<"listTagsForAContact">;
  "UnarchiveContact": IntercomFullApiOperationInput<"UnarchiveContact">;
  "ShowContactByExternalId": IntercomFullApiOperationInput<"ShowContactByExternalId">;
  "MergeContact": IntercomFullApiOperationInput<"MergeContact">;
  "SearchContacts": IntercomFullApiOperationInput<"SearchContacts">;
}

export interface IntercomFullApiContactsGeneratedClient {
  intercomListContacts(...args: IntercomFullApiOperationArgs<"ListContacts">): Promise<IntercomFullApiOperationResponseMap["ListContacts"]>;
  intercomCreateContact(...args: IntercomFullApiOperationArgs<"CreateContact">): Promise<IntercomFullApiOperationResponseMap["CreateContact"]>;
  intercomDeleteContact(...args: IntercomFullApiOperationArgs<"DeleteContact">): Promise<IntercomFullApiOperationResponseMap["DeleteContact"]>;
  intercomShowContact(...args: IntercomFullApiOperationArgs<"ShowContact">): Promise<IntercomFullApiOperationResponseMap["ShowContact"]>;
  intercomUpdateContact(...args: IntercomFullApiOperationArgs<"UpdateContact">): Promise<IntercomFullApiOperationResponseMap["UpdateContact"]>;
  intercomArchiveContact(...args: IntercomFullApiOperationArgs<"ArchiveContact">): Promise<IntercomFullApiOperationResponseMap["ArchiveContact"]>;
  intercomBlockContact(...args: IntercomFullApiOperationArgs<"BlockContact">): Promise<IntercomFullApiOperationResponseMap["BlockContact"]>;
  intercomListCompaniesForAContact(...args: IntercomFullApiOperationArgs<"listCompaniesForAContact">): Promise<IntercomFullApiOperationResponseMap["listCompaniesForAContact"]>;
  intercomListSegmentsForAContact(...args: IntercomFullApiOperationArgs<"listSegmentsForAContact">): Promise<IntercomFullApiOperationResponseMap["listSegmentsForAContact"]>;
  intercomListSubscriptionsForAContact(...args: IntercomFullApiOperationArgs<"listSubscriptionsForAContact">): Promise<IntercomFullApiOperationResponseMap["listSubscriptionsForAContact"]>;
  intercomListTagsForAContact(...args: IntercomFullApiOperationArgs<"listTagsForAContact">): Promise<IntercomFullApiOperationResponseMap["listTagsForAContact"]>;
  intercomUnarchiveContact(...args: IntercomFullApiOperationArgs<"UnarchiveContact">): Promise<IntercomFullApiOperationResponseMap["UnarchiveContact"]>;
  intercomShowContactByExternalId(...args: IntercomFullApiOperationArgs<"ShowContactByExternalId">): Promise<IntercomFullApiOperationResponseMap["ShowContactByExternalId"]>;
  intercomMergeContact(...args: IntercomFullApiOperationArgs<"MergeContact">): Promise<IntercomFullApiOperationResponseMap["MergeContact"]>;
  intercomSearchContacts(...args: IntercomFullApiOperationArgs<"SearchContacts">): Promise<IntercomFullApiOperationResponseMap["SearchContacts"]>;
}

export const IntercomFullApiContactsGeneratedFunctionNames = [
  "intercomListContacts",
  "intercomCreateContact",
  "intercomDeleteContact",
  "intercomShowContact",
  "intercomUpdateContact",
  "intercomArchiveContact",
  "intercomBlockContact",
  "intercomListCompaniesForAContact",
  "intercomListSegmentsForAContact",
  "intercomListSubscriptionsForAContact",
  "intercomListTagsForAContact",
  "intercomUnarchiveContact",
  "intercomShowContactByExternalId",
  "intercomMergeContact",
  "intercomSearchContacts"
] as const satisfies readonly (keyof IntercomFullApiContactsGeneratedClient)[];

export function createIntercomFullApiContactsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiContactsGeneratedClient {
  return {
    intercomListContacts: (...args) => callOperation("ListContacts", ...(args as IntercomFullApiOperationArgs<"ListContacts">)),
    intercomCreateContact: (...args) => callOperation("CreateContact", ...(args as IntercomFullApiOperationArgs<"CreateContact">)),
    intercomDeleteContact: (...args) => callOperation("DeleteContact", ...(args as IntercomFullApiOperationArgs<"DeleteContact">)),
    intercomShowContact: (...args) => callOperation("ShowContact", ...(args as IntercomFullApiOperationArgs<"ShowContact">)),
    intercomUpdateContact: (...args) => callOperation("UpdateContact", ...(args as IntercomFullApiOperationArgs<"UpdateContact">)),
    intercomArchiveContact: (...args) => callOperation("ArchiveContact", ...(args as IntercomFullApiOperationArgs<"ArchiveContact">)),
    intercomBlockContact: (...args) => callOperation("BlockContact", ...(args as IntercomFullApiOperationArgs<"BlockContact">)),
    intercomListCompaniesForAContact: (...args) => callOperation("listCompaniesForAContact", ...(args as IntercomFullApiOperationArgs<"listCompaniesForAContact">)),
    intercomListSegmentsForAContact: (...args) => callOperation("listSegmentsForAContact", ...(args as IntercomFullApiOperationArgs<"listSegmentsForAContact">)),
    intercomListSubscriptionsForAContact: (...args) => callOperation("listSubscriptionsForAContact", ...(args as IntercomFullApiOperationArgs<"listSubscriptionsForAContact">)),
    intercomListTagsForAContact: (...args) => callOperation("listTagsForAContact", ...(args as IntercomFullApiOperationArgs<"listTagsForAContact">)),
    intercomUnarchiveContact: (...args) => callOperation("UnarchiveContact", ...(args as IntercomFullApiOperationArgs<"UnarchiveContact">)),
    intercomShowContactByExternalId: (...args) => callOperation("ShowContactByExternalId", ...(args as IntercomFullApiOperationArgs<"ShowContactByExternalId">)),
    intercomMergeContact: (...args) => callOperation("MergeContact", ...(args as IntercomFullApiOperationArgs<"MergeContact">)),
    intercomSearchContacts: (...args) => callOperation("SearchContacts", ...(args as IntercomFullApiOperationArgs<"SearchContacts">)),
  };
}
