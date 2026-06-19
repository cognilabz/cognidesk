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
export const GenesysCloudFullApiIntentsOperationKeys = [
  "deleteIntentsCategory",
  "deleteIntentsCustomerintent",
  "getIntentsAssignmentsExternalcontact",
  "getIntentsCategories",
  "getIntentsCategory",
  "getIntentsCustomerintent",
  "getIntentsCustomerintents",
  "getIntentsCustomerintentSourceintents",
  "getIntentsSourceintents",
  "patchIntentsCategory",
  "patchIntentsCustomerintent",
  "postIntentsAssignmentsExternalcontactCustomerintentAssignment",
  "postIntentsCategories",
  "postIntentsCustomerintents",
  "postIntentsCustomerintentSourceintentsBulkAdd",
  "postIntentsCustomerintentSourceintentsBulkRemove"
] as const;
export type GenesysCloudFullApiIntentsOperationKey = typeof GenesysCloudFullApiIntentsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiIntentsOperationPathParamMap {
  "deleteIntentsCategory": { "categoryId": GenesysCloudFullApiPathParamValue };
  "deleteIntentsCustomerintent": { "customerIntentId": GenesysCloudFullApiPathParamValue };
  "getIntentsAssignmentsExternalcontact": { "externalContactId": GenesysCloudFullApiPathParamValue };
  "getIntentsCategories": {};
  "getIntentsCategory": { "categoryId": GenesysCloudFullApiPathParamValue };
  "getIntentsCustomerintent": { "customerIntentId": GenesysCloudFullApiPathParamValue };
  "getIntentsCustomerintents": {};
  "getIntentsCustomerintentSourceintents": { "customerIntentId": GenesysCloudFullApiPathParamValue };
  "getIntentsSourceintents": {};
  "patchIntentsCategory": { "categoryId": GenesysCloudFullApiPathParamValue };
  "patchIntentsCustomerintent": { "customerIntentId": GenesysCloudFullApiPathParamValue };
  "postIntentsAssignmentsExternalcontactCustomerintentAssignment": { "externalContactId": GenesysCloudFullApiPathParamValue; "customerIntentId": GenesysCloudFullApiPathParamValue };
  "postIntentsCategories": {};
  "postIntentsCustomerintents": {};
  "postIntentsCustomerintentSourceintentsBulkAdd": { "customerIntentId": GenesysCloudFullApiPathParamValue };
  "postIntentsCustomerintentSourceintentsBulkRemove": { "customerIntentId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiIntentsOperationRequestMap {
  "deleteIntentsCategory": GenesysCloudFullApiOperationInput<"deleteIntentsCategory">;
  "deleteIntentsCustomerintent": GenesysCloudFullApiOperationInput<"deleteIntentsCustomerintent">;
  "getIntentsAssignmentsExternalcontact": GenesysCloudFullApiOperationInput<"getIntentsAssignmentsExternalcontact">;
  "getIntentsCategories": GenesysCloudFullApiOperationInput<"getIntentsCategories">;
  "getIntentsCategory": GenesysCloudFullApiOperationInput<"getIntentsCategory">;
  "getIntentsCustomerintent": GenesysCloudFullApiOperationInput<"getIntentsCustomerintent">;
  "getIntentsCustomerintents": GenesysCloudFullApiOperationInput<"getIntentsCustomerintents">;
  "getIntentsCustomerintentSourceintents": GenesysCloudFullApiOperationInput<"getIntentsCustomerintentSourceintents">;
  "getIntentsSourceintents": GenesysCloudFullApiOperationInput<"getIntentsSourceintents">;
  "patchIntentsCategory": GenesysCloudFullApiOperationInput<"patchIntentsCategory">;
  "patchIntentsCustomerintent": GenesysCloudFullApiOperationInput<"patchIntentsCustomerintent">;
  "postIntentsAssignmentsExternalcontactCustomerintentAssignment": GenesysCloudFullApiOperationInput<"postIntentsAssignmentsExternalcontactCustomerintentAssignment">;
  "postIntentsCategories": GenesysCloudFullApiOperationInput<"postIntentsCategories">;
  "postIntentsCustomerintents": GenesysCloudFullApiOperationInput<"postIntentsCustomerintents">;
  "postIntentsCustomerintentSourceintentsBulkAdd": GenesysCloudFullApiOperationInput<"postIntentsCustomerintentSourceintentsBulkAdd">;
  "postIntentsCustomerintentSourceintentsBulkRemove": GenesysCloudFullApiOperationInput<"postIntentsCustomerintentSourceintentsBulkRemove">;
}

export interface GenesysCloudFullApiIntentsGeneratedClient {
  DeleteIntentsCategory(...args: GenesysCloudFullApiOperationArgs<"deleteIntentsCategory">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIntentsCategory"]>;
  DeleteIntentsCustomerintent(...args: GenesysCloudFullApiOperationArgs<"deleteIntentsCustomerintent">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIntentsCustomerintent"]>;
  GetIntentsAssignmentsExternalcontact(...args: GenesysCloudFullApiOperationArgs<"getIntentsAssignmentsExternalcontact">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsAssignmentsExternalcontact"]>;
  GetIntentsCategories(...args: GenesysCloudFullApiOperationArgs<"getIntentsCategories">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsCategories"]>;
  GetIntentsCategory(...args: GenesysCloudFullApiOperationArgs<"getIntentsCategory">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsCategory"]>;
  GetIntentsCustomerintent(...args: GenesysCloudFullApiOperationArgs<"getIntentsCustomerintent">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsCustomerintent"]>;
  GetIntentsCustomerintents(...args: GenesysCloudFullApiOperationArgs<"getIntentsCustomerintents">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsCustomerintents"]>;
  GetIntentsCustomerintentSourceintents(...args: GenesysCloudFullApiOperationArgs<"getIntentsCustomerintentSourceintents">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsCustomerintentSourceintents"]>;
  GetIntentsSourceintents(...args: GenesysCloudFullApiOperationArgs<"getIntentsSourceintents">): Promise<GenesysCloudFullApiOperationResponseMap["getIntentsSourceintents"]>;
  PatchIntentsCategory(...args: GenesysCloudFullApiOperationArgs<"patchIntentsCategory">): Promise<GenesysCloudFullApiOperationResponseMap["patchIntentsCategory"]>;
  PatchIntentsCustomerintent(...args: GenesysCloudFullApiOperationArgs<"patchIntentsCustomerintent">): Promise<GenesysCloudFullApiOperationResponseMap["patchIntentsCustomerintent"]>;
  PostIntentsAssignmentsExternalcontactCustomerintentAssignment(...args: GenesysCloudFullApiOperationArgs<"postIntentsAssignmentsExternalcontactCustomerintentAssignment">): Promise<GenesysCloudFullApiOperationResponseMap["postIntentsAssignmentsExternalcontactCustomerintentAssignment"]>;
  PostIntentsCategories(...args: GenesysCloudFullApiOperationArgs<"postIntentsCategories">): Promise<GenesysCloudFullApiOperationResponseMap["postIntentsCategories"]>;
  PostIntentsCustomerintents(...args: GenesysCloudFullApiOperationArgs<"postIntentsCustomerintents">): Promise<GenesysCloudFullApiOperationResponseMap["postIntentsCustomerintents"]>;
  PostIntentsCustomerintentSourceintentsBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postIntentsCustomerintentSourceintentsBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postIntentsCustomerintentSourceintentsBulkAdd"]>;
  PostIntentsCustomerintentSourceintentsBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postIntentsCustomerintentSourceintentsBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postIntentsCustomerintentSourceintentsBulkRemove"]>;
}

export const GenesysCloudFullApiIntentsGeneratedFunctionNames = [
  "DeleteIntentsCategory",
  "DeleteIntentsCustomerintent",
  "GetIntentsAssignmentsExternalcontact",
  "GetIntentsCategories",
  "GetIntentsCategory",
  "GetIntentsCustomerintent",
  "GetIntentsCustomerintents",
  "GetIntentsCustomerintentSourceintents",
  "GetIntentsSourceintents",
  "PatchIntentsCategory",
  "PatchIntentsCustomerintent",
  "PostIntentsAssignmentsExternalcontactCustomerintentAssignment",
  "PostIntentsCategories",
  "PostIntentsCustomerintents",
  "PostIntentsCustomerintentSourceintentsBulkAdd",
  "PostIntentsCustomerintentSourceintentsBulkRemove"
] as const satisfies readonly (keyof GenesysCloudFullApiIntentsGeneratedClient)[];

export function createGenesysCloudFullApiIntentsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiIntentsGeneratedClient {
  return {
    DeleteIntentsCategory: (...args) => callOperation("deleteIntentsCategory", ...(args as GenesysCloudFullApiOperationArgs<"deleteIntentsCategory">)),
    DeleteIntentsCustomerintent: (...args) => callOperation("deleteIntentsCustomerintent", ...(args as GenesysCloudFullApiOperationArgs<"deleteIntentsCustomerintent">)),
    GetIntentsAssignmentsExternalcontact: (...args) => callOperation("getIntentsAssignmentsExternalcontact", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsAssignmentsExternalcontact">)),
    GetIntentsCategories: (...args) => callOperation("getIntentsCategories", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsCategories">)),
    GetIntentsCategory: (...args) => callOperation("getIntentsCategory", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsCategory">)),
    GetIntentsCustomerintent: (...args) => callOperation("getIntentsCustomerintent", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsCustomerintent">)),
    GetIntentsCustomerintents: (...args) => callOperation("getIntentsCustomerintents", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsCustomerintents">)),
    GetIntentsCustomerintentSourceintents: (...args) => callOperation("getIntentsCustomerintentSourceintents", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsCustomerintentSourceintents">)),
    GetIntentsSourceintents: (...args) => callOperation("getIntentsSourceintents", ...(args as GenesysCloudFullApiOperationArgs<"getIntentsSourceintents">)),
    PatchIntentsCategory: (...args) => callOperation("patchIntentsCategory", ...(args as GenesysCloudFullApiOperationArgs<"patchIntentsCategory">)),
    PatchIntentsCustomerintent: (...args) => callOperation("patchIntentsCustomerintent", ...(args as GenesysCloudFullApiOperationArgs<"patchIntentsCustomerintent">)),
    PostIntentsAssignmentsExternalcontactCustomerintentAssignment: (...args) => callOperation("postIntentsAssignmentsExternalcontactCustomerintentAssignment", ...(args as GenesysCloudFullApiOperationArgs<"postIntentsAssignmentsExternalcontactCustomerintentAssignment">)),
    PostIntentsCategories: (...args) => callOperation("postIntentsCategories", ...(args as GenesysCloudFullApiOperationArgs<"postIntentsCategories">)),
    PostIntentsCustomerintents: (...args) => callOperation("postIntentsCustomerintents", ...(args as GenesysCloudFullApiOperationArgs<"postIntentsCustomerintents">)),
    PostIntentsCustomerintentSourceintentsBulkAdd: (...args) => callOperation("postIntentsCustomerintentSourceintentsBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postIntentsCustomerintentSourceintentsBulkAdd">)),
    PostIntentsCustomerintentSourceintentsBulkRemove: (...args) => callOperation("postIntentsCustomerintentSourceintentsBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postIntentsCustomerintentSourceintentsBulkRemove">)),
  };
}
