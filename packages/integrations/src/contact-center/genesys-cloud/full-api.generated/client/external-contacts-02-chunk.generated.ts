// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiExternalContacts02OperationKeys = [
  "postExternalcontactsBulkOrganizationsUpdate",
  "postExternalcontactsBulkRelationships",
  "postExternalcontactsBulkRelationshipsAdd",
  "postExternalcontactsBulkRelationshipsRemove",
  "postExternalcontactsBulkRelationshipsUpdate",
  "postExternalcontactsContactJourneySegments",
  "postExternalcontactsContactNotes",
  "postExternalcontactsContactPromotion",
  "postExternalcontactsContacts",
  "postExternalcontactsContactsEnrich",
  "postExternalcontactsContactsExports",
  "postExternalcontactsContactsMerge",
  "postExternalcontactsContactsSchemas",
  "postExternalcontactsExternalsources",
  "postExternalcontactsIdentifierlookup",
  "postExternalcontactsIdentifierlookupContacts",
  "postExternalcontactsIdentifierlookupOrganizations",
  "postExternalcontactsImportCsvJobs",
  "postExternalcontactsImportCsvSettings",
  "postExternalcontactsImportCsvUploads",
  "postExternalcontactsImportJobs",
  "postExternalcontactsImportSettings",
  "postExternalcontactsMergeContacts",
  "postExternalcontactsOrganizationNotes",
  "postExternalcontactsOrganizations",
  "postExternalcontactsOrganizationsEnrich",
  "postExternalcontactsOrganizationsSchemas",
  "postExternalcontactsRelationships",
  "putExternalcontactsContact",
  "putExternalcontactsContactNote",
  "putExternalcontactsContactsSchema",
  "putExternalcontactsConversation",
  "putExternalcontactsExternalsource",
  "putExternalcontactsImportCsvSetting",
  "putExternalcontactsImportJob",
  "putExternalcontactsImportSetting",
  "putExternalcontactsOrganization",
  "putExternalcontactsOrganizationNote",
  "putExternalcontactsOrganizationsSchema",
  "putExternalcontactsOrganizationTrustorTrustorId",
  "putExternalcontactsRelationship"
] as const;
export type GenesysCloudFullApiExternalContacts02OperationKey = typeof GenesysCloudFullApiExternalContacts02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiExternalContacts02OperationPathParamMap {
  "postExternalcontactsBulkOrganizationsUpdate": {};
  "postExternalcontactsBulkRelationships": {};
  "postExternalcontactsBulkRelationshipsAdd": {};
  "postExternalcontactsBulkRelationshipsRemove": {};
  "postExternalcontactsBulkRelationshipsUpdate": {};
  "postExternalcontactsContactJourneySegments": { "contactId": GenesysCloudFullApiPathParamValue };
  "postExternalcontactsContactNotes": { "contactId": GenesysCloudFullApiPathParamValue };
  "postExternalcontactsContactPromotion": { "contactId": GenesysCloudFullApiPathParamValue };
  "postExternalcontactsContacts": {};
  "postExternalcontactsContactsEnrich": {};
  "postExternalcontactsContactsExports": {};
  "postExternalcontactsContactsMerge": {};
  "postExternalcontactsContactsSchemas": {};
  "postExternalcontactsExternalsources": {};
  "postExternalcontactsIdentifierlookup": {};
  "postExternalcontactsIdentifierlookupContacts": {};
  "postExternalcontactsIdentifierlookupOrganizations": {};
  "postExternalcontactsImportCsvJobs": {};
  "postExternalcontactsImportCsvSettings": {};
  "postExternalcontactsImportCsvUploads": {};
  "postExternalcontactsImportJobs": {};
  "postExternalcontactsImportSettings": {};
  "postExternalcontactsMergeContacts": {};
  "postExternalcontactsOrganizationNotes": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "postExternalcontactsOrganizations": {};
  "postExternalcontactsOrganizationsEnrich": {};
  "postExternalcontactsOrganizationsSchemas": {};
  "postExternalcontactsRelationships": {};
  "putExternalcontactsContact": { "contactId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsContactNote": { "contactId": GenesysCloudFullApiPathParamValue; "noteId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsContactsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsConversation": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsExternalsource": { "externalSourceId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsImportCsvSetting": { "settingsId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsImportJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsImportSetting": { "settingsId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsOrganization": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsOrganizationNote": { "externalOrganizationId": GenesysCloudFullApiPathParamValue; "noteId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsOrganizationsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsOrganizationTrustorTrustorId": { "externalOrganizationId": GenesysCloudFullApiPathParamValue; "trustorId": GenesysCloudFullApiPathParamValue };
  "putExternalcontactsRelationship": { "relationshipId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiExternalContacts02OperationRequestMap {
  "postExternalcontactsBulkOrganizationsUpdate": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkOrganizationsUpdate">;
  "postExternalcontactsBulkRelationships": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkRelationships">;
  "postExternalcontactsBulkRelationshipsAdd": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkRelationshipsAdd">;
  "postExternalcontactsBulkRelationshipsRemove": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkRelationshipsRemove">;
  "postExternalcontactsBulkRelationshipsUpdate": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkRelationshipsUpdate">;
  "postExternalcontactsContactJourneySegments": GenesysCloudFullApiOperationInput<"postExternalcontactsContactJourneySegments">;
  "postExternalcontactsContactNotes": GenesysCloudFullApiOperationInput<"postExternalcontactsContactNotes">;
  "postExternalcontactsContactPromotion": GenesysCloudFullApiOperationInput<"postExternalcontactsContactPromotion">;
  "postExternalcontactsContacts": GenesysCloudFullApiOperationInput<"postExternalcontactsContacts">;
  "postExternalcontactsContactsEnrich": GenesysCloudFullApiOperationInput<"postExternalcontactsContactsEnrich">;
  "postExternalcontactsContactsExports": GenesysCloudFullApiOperationInput<"postExternalcontactsContactsExports">;
  "postExternalcontactsContactsMerge": GenesysCloudFullApiOperationInput<"postExternalcontactsContactsMerge">;
  "postExternalcontactsContactsSchemas": GenesysCloudFullApiOperationInput<"postExternalcontactsContactsSchemas">;
  "postExternalcontactsExternalsources": GenesysCloudFullApiOperationInput<"postExternalcontactsExternalsources">;
  "postExternalcontactsIdentifierlookup": GenesysCloudFullApiOperationInput<"postExternalcontactsIdentifierlookup">;
  "postExternalcontactsIdentifierlookupContacts": GenesysCloudFullApiOperationInput<"postExternalcontactsIdentifierlookupContacts">;
  "postExternalcontactsIdentifierlookupOrganizations": GenesysCloudFullApiOperationInput<"postExternalcontactsIdentifierlookupOrganizations">;
  "postExternalcontactsImportCsvJobs": GenesysCloudFullApiOperationInput<"postExternalcontactsImportCsvJobs">;
  "postExternalcontactsImportCsvSettings": GenesysCloudFullApiOperationInput<"postExternalcontactsImportCsvSettings">;
  "postExternalcontactsImportCsvUploads": GenesysCloudFullApiOperationInput<"postExternalcontactsImportCsvUploads">;
  "postExternalcontactsImportJobs": GenesysCloudFullApiOperationInput<"postExternalcontactsImportJobs">;
  "postExternalcontactsImportSettings": GenesysCloudFullApiOperationInput<"postExternalcontactsImportSettings">;
  "postExternalcontactsMergeContacts": GenesysCloudFullApiOperationInput<"postExternalcontactsMergeContacts">;
  "postExternalcontactsOrganizationNotes": GenesysCloudFullApiOperationInput<"postExternalcontactsOrganizationNotes">;
  "postExternalcontactsOrganizations": GenesysCloudFullApiOperationInput<"postExternalcontactsOrganizations">;
  "postExternalcontactsOrganizationsEnrich": GenesysCloudFullApiOperationInput<"postExternalcontactsOrganizationsEnrich">;
  "postExternalcontactsOrganizationsSchemas": GenesysCloudFullApiOperationInput<"postExternalcontactsOrganizationsSchemas">;
  "postExternalcontactsRelationships": GenesysCloudFullApiOperationInput<"postExternalcontactsRelationships">;
  "putExternalcontactsContact": GenesysCloudFullApiOperationInput<"putExternalcontactsContact">;
  "putExternalcontactsContactNote": GenesysCloudFullApiOperationInput<"putExternalcontactsContactNote">;
  "putExternalcontactsContactsSchema": GenesysCloudFullApiOperationInput<"putExternalcontactsContactsSchema">;
  "putExternalcontactsConversation": GenesysCloudFullApiOperationInput<"putExternalcontactsConversation">;
  "putExternalcontactsExternalsource": GenesysCloudFullApiOperationInput<"putExternalcontactsExternalsource">;
  "putExternalcontactsImportCsvSetting": GenesysCloudFullApiOperationInput<"putExternalcontactsImportCsvSetting">;
  "putExternalcontactsImportJob": GenesysCloudFullApiOperationInput<"putExternalcontactsImportJob">;
  "putExternalcontactsImportSetting": GenesysCloudFullApiOperationInput<"putExternalcontactsImportSetting">;
  "putExternalcontactsOrganization": GenesysCloudFullApiOperationInput<"putExternalcontactsOrganization">;
  "putExternalcontactsOrganizationNote": GenesysCloudFullApiOperationInput<"putExternalcontactsOrganizationNote">;
  "putExternalcontactsOrganizationsSchema": GenesysCloudFullApiOperationInput<"putExternalcontactsOrganizationsSchema">;
  "putExternalcontactsOrganizationTrustorTrustorId": GenesysCloudFullApiOperationInput<"putExternalcontactsOrganizationTrustorTrustorId">;
  "putExternalcontactsRelationship": GenesysCloudFullApiOperationInput<"putExternalcontactsRelationship">;
}

export interface GenesysCloudFullApiExternalContacts02GeneratedClient {
  PostExternalcontactsBulkOrganizationsUpdate(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkOrganizationsUpdate"]>;
  PostExternalcontactsBulkRelationships(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationships">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkRelationships"]>;
  PostExternalcontactsBulkRelationshipsAdd(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationshipsAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkRelationshipsAdd"]>;
  PostExternalcontactsBulkRelationshipsRemove(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationshipsRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkRelationshipsRemove"]>;
  PostExternalcontactsBulkRelationshipsUpdate(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationshipsUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkRelationshipsUpdate"]>;
  PostExternalcontactsContactJourneySegments(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactJourneySegments">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactJourneySegments"]>;
  PostExternalcontactsContactNotes(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactNotes">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactNotes"]>;
  PostExternalcontactsContactPromotion(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactPromotion">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactPromotion"]>;
  PostExternalcontactsContacts(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContacts">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContacts"]>;
  PostExternalcontactsContactsEnrich(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsEnrich">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactsEnrich"]>;
  PostExternalcontactsContactsExports(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsExports">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactsExports"]>;
  PostExternalcontactsContactsMerge(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsMerge">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactsMerge"]>;
  PostExternalcontactsContactsSchemas(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsContactsSchemas"]>;
  PostExternalcontactsExternalsources(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsExternalsources">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsExternalsources"]>;
  PostExternalcontactsIdentifierlookup(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsIdentifierlookup">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsIdentifierlookup"]>;
  PostExternalcontactsIdentifierlookupContacts(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsIdentifierlookupContacts">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsIdentifierlookupContacts"]>;
  PostExternalcontactsIdentifierlookupOrganizations(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsIdentifierlookupOrganizations">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsIdentifierlookupOrganizations"]>;
  PostExternalcontactsImportCsvJobs(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsImportCsvJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsImportCsvJobs"]>;
  PostExternalcontactsImportCsvSettings(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsImportCsvSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsImportCsvSettings"]>;
  PostExternalcontactsImportCsvUploads(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsImportCsvUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsImportCsvUploads"]>;
  PostExternalcontactsImportJobs(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsImportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsImportJobs"]>;
  PostExternalcontactsImportSettings(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsImportSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsImportSettings"]>;
  PostExternalcontactsMergeContacts(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsMergeContacts">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsMergeContacts"]>;
  PostExternalcontactsOrganizationNotes(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizationNotes">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsOrganizationNotes"]>;
  PostExternalcontactsOrganizations(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizations">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsOrganizations"]>;
  PostExternalcontactsOrganizationsEnrich(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizationsEnrich">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsOrganizationsEnrich"]>;
  PostExternalcontactsOrganizationsSchemas(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizationsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsOrganizationsSchemas"]>;
  PostExternalcontactsRelationships(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsRelationships">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsRelationships"]>;
  PutExternalcontactsContact(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsContact">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsContact"]>;
  PutExternalcontactsContactNote(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsContactNote">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsContactNote"]>;
  PutExternalcontactsContactsSchema(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsContactsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsContactsSchema"]>;
  PutExternalcontactsConversation(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsConversation">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsConversation"]>;
  PutExternalcontactsExternalsource(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsExternalsource">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsExternalsource"]>;
  PutExternalcontactsImportCsvSetting(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsImportCsvSetting">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsImportCsvSetting"]>;
  PutExternalcontactsImportJob(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsImportJob">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsImportJob"]>;
  PutExternalcontactsImportSetting(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsImportSetting">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsImportSetting"]>;
  PutExternalcontactsOrganization(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganization">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsOrganization"]>;
  PutExternalcontactsOrganizationNote(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganizationNote">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsOrganizationNote"]>;
  PutExternalcontactsOrganizationsSchema(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganizationsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsOrganizationsSchema"]>;
  PutExternalcontactsOrganizationTrustorTrustorId(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganizationTrustorTrustorId">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsOrganizationTrustorTrustorId"]>;
  PutExternalcontactsRelationship(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsRelationship">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsRelationship"]>;
}

export const GenesysCloudFullApiExternalContacts02GeneratedFunctionNames = [
  "PostExternalcontactsBulkOrganizationsUpdate",
  "PostExternalcontactsBulkRelationships",
  "PostExternalcontactsBulkRelationshipsAdd",
  "PostExternalcontactsBulkRelationshipsRemove",
  "PostExternalcontactsBulkRelationshipsUpdate",
  "PostExternalcontactsContactJourneySegments",
  "PostExternalcontactsContactNotes",
  "PostExternalcontactsContactPromotion",
  "PostExternalcontactsContacts",
  "PostExternalcontactsContactsEnrich",
  "PostExternalcontactsContactsExports",
  "PostExternalcontactsContactsMerge",
  "PostExternalcontactsContactsSchemas",
  "PostExternalcontactsExternalsources",
  "PostExternalcontactsIdentifierlookup",
  "PostExternalcontactsIdentifierlookupContacts",
  "PostExternalcontactsIdentifierlookupOrganizations",
  "PostExternalcontactsImportCsvJobs",
  "PostExternalcontactsImportCsvSettings",
  "PostExternalcontactsImportCsvUploads",
  "PostExternalcontactsImportJobs",
  "PostExternalcontactsImportSettings",
  "PostExternalcontactsMergeContacts",
  "PostExternalcontactsOrganizationNotes",
  "PostExternalcontactsOrganizations",
  "PostExternalcontactsOrganizationsEnrich",
  "PostExternalcontactsOrganizationsSchemas",
  "PostExternalcontactsRelationships",
  "PutExternalcontactsContact",
  "PutExternalcontactsContactNote",
  "PutExternalcontactsContactsSchema",
  "PutExternalcontactsConversation",
  "PutExternalcontactsExternalsource",
  "PutExternalcontactsImportCsvSetting",
  "PutExternalcontactsImportJob",
  "PutExternalcontactsImportSetting",
  "PutExternalcontactsOrganization",
  "PutExternalcontactsOrganizationNote",
  "PutExternalcontactsOrganizationsSchema",
  "PutExternalcontactsOrganizationTrustorTrustorId",
  "PutExternalcontactsRelationship"
] as const satisfies readonly (keyof GenesysCloudFullApiExternalContacts02GeneratedClient)[];

export function createGenesysCloudFullApiExternalContacts02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiExternalContacts02GeneratedClient {
  return {
    PostExternalcontactsBulkOrganizationsUpdate: (...args) => callOperation("postExternalcontactsBulkOrganizationsUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsUpdate">)),
    PostExternalcontactsBulkRelationships: (...args) => callOperation("postExternalcontactsBulkRelationships", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationships">)),
    PostExternalcontactsBulkRelationshipsAdd: (...args) => callOperation("postExternalcontactsBulkRelationshipsAdd", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationshipsAdd">)),
    PostExternalcontactsBulkRelationshipsRemove: (...args) => callOperation("postExternalcontactsBulkRelationshipsRemove", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationshipsRemove">)),
    PostExternalcontactsBulkRelationshipsUpdate: (...args) => callOperation("postExternalcontactsBulkRelationshipsUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkRelationshipsUpdate">)),
    PostExternalcontactsContactJourneySegments: (...args) => callOperation("postExternalcontactsContactJourneySegments", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactJourneySegments">)),
    PostExternalcontactsContactNotes: (...args) => callOperation("postExternalcontactsContactNotes", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactNotes">)),
    PostExternalcontactsContactPromotion: (...args) => callOperation("postExternalcontactsContactPromotion", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactPromotion">)),
    PostExternalcontactsContacts: (...args) => callOperation("postExternalcontactsContacts", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContacts">)),
    PostExternalcontactsContactsEnrich: (...args) => callOperation("postExternalcontactsContactsEnrich", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsEnrich">)),
    PostExternalcontactsContactsExports: (...args) => callOperation("postExternalcontactsContactsExports", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsExports">)),
    PostExternalcontactsContactsMerge: (...args) => callOperation("postExternalcontactsContactsMerge", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsMerge">)),
    PostExternalcontactsContactsSchemas: (...args) => callOperation("postExternalcontactsContactsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsContactsSchemas">)),
    PostExternalcontactsExternalsources: (...args) => callOperation("postExternalcontactsExternalsources", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsExternalsources">)),
    PostExternalcontactsIdentifierlookup: (...args) => callOperation("postExternalcontactsIdentifierlookup", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsIdentifierlookup">)),
    PostExternalcontactsIdentifierlookupContacts: (...args) => callOperation("postExternalcontactsIdentifierlookupContacts", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsIdentifierlookupContacts">)),
    PostExternalcontactsIdentifierlookupOrganizations: (...args) => callOperation("postExternalcontactsIdentifierlookupOrganizations", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsIdentifierlookupOrganizations">)),
    PostExternalcontactsImportCsvJobs: (...args) => callOperation("postExternalcontactsImportCsvJobs", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsImportCsvJobs">)),
    PostExternalcontactsImportCsvSettings: (...args) => callOperation("postExternalcontactsImportCsvSettings", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsImportCsvSettings">)),
    PostExternalcontactsImportCsvUploads: (...args) => callOperation("postExternalcontactsImportCsvUploads", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsImportCsvUploads">)),
    PostExternalcontactsImportJobs: (...args) => callOperation("postExternalcontactsImportJobs", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsImportJobs">)),
    PostExternalcontactsImportSettings: (...args) => callOperation("postExternalcontactsImportSettings", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsImportSettings">)),
    PostExternalcontactsMergeContacts: (...args) => callOperation("postExternalcontactsMergeContacts", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsMergeContacts">)),
    PostExternalcontactsOrganizationNotes: (...args) => callOperation("postExternalcontactsOrganizationNotes", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizationNotes">)),
    PostExternalcontactsOrganizations: (...args) => callOperation("postExternalcontactsOrganizations", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizations">)),
    PostExternalcontactsOrganizationsEnrich: (...args) => callOperation("postExternalcontactsOrganizationsEnrich", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizationsEnrich">)),
    PostExternalcontactsOrganizationsSchemas: (...args) => callOperation("postExternalcontactsOrganizationsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsOrganizationsSchemas">)),
    PostExternalcontactsRelationships: (...args) => callOperation("postExternalcontactsRelationships", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsRelationships">)),
    PutExternalcontactsContact: (...args) => callOperation("putExternalcontactsContact", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsContact">)),
    PutExternalcontactsContactNote: (...args) => callOperation("putExternalcontactsContactNote", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsContactNote">)),
    PutExternalcontactsContactsSchema: (...args) => callOperation("putExternalcontactsContactsSchema", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsContactsSchema">)),
    PutExternalcontactsConversation: (...args) => callOperation("putExternalcontactsConversation", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsConversation">)),
    PutExternalcontactsExternalsource: (...args) => callOperation("putExternalcontactsExternalsource", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsExternalsource">)),
    PutExternalcontactsImportCsvSetting: (...args) => callOperation("putExternalcontactsImportCsvSetting", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsImportCsvSetting">)),
    PutExternalcontactsImportJob: (...args) => callOperation("putExternalcontactsImportJob", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsImportJob">)),
    PutExternalcontactsImportSetting: (...args) => callOperation("putExternalcontactsImportSetting", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsImportSetting">)),
    PutExternalcontactsOrganization: (...args) => callOperation("putExternalcontactsOrganization", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganization">)),
    PutExternalcontactsOrganizationNote: (...args) => callOperation("putExternalcontactsOrganizationNote", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganizationNote">)),
    PutExternalcontactsOrganizationsSchema: (...args) => callOperation("putExternalcontactsOrganizationsSchema", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganizationsSchema">)),
    PutExternalcontactsOrganizationTrustorTrustorId: (...args) => callOperation("putExternalcontactsOrganizationTrustorTrustorId", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsOrganizationTrustorTrustorId">)),
    PutExternalcontactsRelationship: (...args) => callOperation("putExternalcontactsRelationship", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsRelationship">)),
  };
}
