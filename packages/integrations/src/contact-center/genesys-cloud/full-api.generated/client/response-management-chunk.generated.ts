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
export const GenesysCloudFullApiResponseManagementOperationKeys = [
  "deleteResponsemanagementLibrary",
  "deleteResponsemanagementResponse",
  "deleteResponsemanagementResponseasset",
  "getResponsemanagementLibraries",
  "getResponsemanagementLibrary",
  "getResponsemanagementResponse",
  "getResponsemanagementResponseasset",
  "getResponsemanagementResponseassetsStatusStatusId",
  "getResponsemanagementResponses",
  "postResponsemanagementLibraries",
  "postResponsemanagementLibrariesBulk",
  "postResponsemanagementLibrariesQuery",
  "postResponsemanagementResponseassetsBulk",
  "postResponsemanagementResponseassetsSearch",
  "postResponsemanagementResponseassetsUploads",
  "postResponsemanagementResponses",
  "postResponsemanagementResponsesQuery",
  "putResponsemanagementLibrary",
  "putResponsemanagementResponse",
  "putResponsemanagementResponseasset"
] as const;
export type GenesysCloudFullApiResponseManagementOperationKey = typeof GenesysCloudFullApiResponseManagementOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiResponseManagementOperationPathParamMap {
  "deleteResponsemanagementLibrary": { "libraryId": GenesysCloudFullApiPathParamValue };
  "deleteResponsemanagementResponse": { "responseId": GenesysCloudFullApiPathParamValue };
  "deleteResponsemanagementResponseasset": { "responseAssetId": GenesysCloudFullApiPathParamValue };
  "getResponsemanagementLibraries": {};
  "getResponsemanagementLibrary": { "libraryId": GenesysCloudFullApiPathParamValue };
  "getResponsemanagementResponse": { "responseId": GenesysCloudFullApiPathParamValue };
  "getResponsemanagementResponseasset": { "responseAssetId": GenesysCloudFullApiPathParamValue };
  "getResponsemanagementResponseassetsStatusStatusId": { "statusId": GenesysCloudFullApiPathParamValue };
  "getResponsemanagementResponses": {};
  "postResponsemanagementLibraries": {};
  "postResponsemanagementLibrariesBulk": {};
  "postResponsemanagementLibrariesQuery": {};
  "postResponsemanagementResponseassetsBulk": {};
  "postResponsemanagementResponseassetsSearch": {};
  "postResponsemanagementResponseassetsUploads": {};
  "postResponsemanagementResponses": {};
  "postResponsemanagementResponsesQuery": {};
  "putResponsemanagementLibrary": { "libraryId": GenesysCloudFullApiPathParamValue };
  "putResponsemanagementResponse": { "responseId": GenesysCloudFullApiPathParamValue };
  "putResponsemanagementResponseasset": { "responseAssetId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiResponseManagementOperationRequestMap {
  "deleteResponsemanagementLibrary": GenesysCloudFullApiOperationInput<"deleteResponsemanagementLibrary">;
  "deleteResponsemanagementResponse": GenesysCloudFullApiOperationInput<"deleteResponsemanagementResponse">;
  "deleteResponsemanagementResponseasset": GenesysCloudFullApiOperationInput<"deleteResponsemanagementResponseasset">;
  "getResponsemanagementLibraries": GenesysCloudFullApiOperationInput<"getResponsemanagementLibraries">;
  "getResponsemanagementLibrary": GenesysCloudFullApiOperationInput<"getResponsemanagementLibrary">;
  "getResponsemanagementResponse": GenesysCloudFullApiOperationInput<"getResponsemanagementResponse">;
  "getResponsemanagementResponseasset": GenesysCloudFullApiOperationInput<"getResponsemanagementResponseasset">;
  "getResponsemanagementResponseassetsStatusStatusId": GenesysCloudFullApiOperationInput<"getResponsemanagementResponseassetsStatusStatusId">;
  "getResponsemanagementResponses": GenesysCloudFullApiOperationInput<"getResponsemanagementResponses">;
  "postResponsemanagementLibraries": GenesysCloudFullApiOperationInput<"postResponsemanagementLibraries">;
  "postResponsemanagementLibrariesBulk": GenesysCloudFullApiOperationInput<"postResponsemanagementLibrariesBulk">;
  "postResponsemanagementLibrariesQuery": GenesysCloudFullApiOperationInput<"postResponsemanagementLibrariesQuery">;
  "postResponsemanagementResponseassetsBulk": GenesysCloudFullApiOperationInput<"postResponsemanagementResponseassetsBulk">;
  "postResponsemanagementResponseassetsSearch": GenesysCloudFullApiOperationInput<"postResponsemanagementResponseassetsSearch">;
  "postResponsemanagementResponseassetsUploads": GenesysCloudFullApiOperationInput<"postResponsemanagementResponseassetsUploads">;
  "postResponsemanagementResponses": GenesysCloudFullApiOperationInput<"postResponsemanagementResponses">;
  "postResponsemanagementResponsesQuery": GenesysCloudFullApiOperationInput<"postResponsemanagementResponsesQuery">;
  "putResponsemanagementLibrary": GenesysCloudFullApiOperationInput<"putResponsemanagementLibrary">;
  "putResponsemanagementResponse": GenesysCloudFullApiOperationInput<"putResponsemanagementResponse">;
  "putResponsemanagementResponseasset": GenesysCloudFullApiOperationInput<"putResponsemanagementResponseasset">;
}

export interface GenesysCloudFullApiResponseManagementGeneratedClient {
  DeleteResponsemanagementLibrary(...args: GenesysCloudFullApiOperationArgs<"deleteResponsemanagementLibrary">): Promise<GenesysCloudFullApiOperationResponseMap["deleteResponsemanagementLibrary"]>;
  DeleteResponsemanagementResponse(...args: GenesysCloudFullApiOperationArgs<"deleteResponsemanagementResponse">): Promise<GenesysCloudFullApiOperationResponseMap["deleteResponsemanagementResponse"]>;
  DeleteResponsemanagementResponseasset(...args: GenesysCloudFullApiOperationArgs<"deleteResponsemanagementResponseasset">): Promise<GenesysCloudFullApiOperationResponseMap["deleteResponsemanagementResponseasset"]>;
  GetResponsemanagementLibraries(...args: GenesysCloudFullApiOperationArgs<"getResponsemanagementLibraries">): Promise<GenesysCloudFullApiOperationResponseMap["getResponsemanagementLibraries"]>;
  GetResponsemanagementLibrary(...args: GenesysCloudFullApiOperationArgs<"getResponsemanagementLibrary">): Promise<GenesysCloudFullApiOperationResponseMap["getResponsemanagementLibrary"]>;
  GetResponsemanagementResponse(...args: GenesysCloudFullApiOperationArgs<"getResponsemanagementResponse">): Promise<GenesysCloudFullApiOperationResponseMap["getResponsemanagementResponse"]>;
  GetResponsemanagementResponseasset(...args: GenesysCloudFullApiOperationArgs<"getResponsemanagementResponseasset">): Promise<GenesysCloudFullApiOperationResponseMap["getResponsemanagementResponseasset"]>;
  GetResponsemanagementResponseassetsStatusStatusId(...args: GenesysCloudFullApiOperationArgs<"getResponsemanagementResponseassetsStatusStatusId">): Promise<GenesysCloudFullApiOperationResponseMap["getResponsemanagementResponseassetsStatusStatusId"]>;
  GetResponsemanagementResponses(...args: GenesysCloudFullApiOperationArgs<"getResponsemanagementResponses">): Promise<GenesysCloudFullApiOperationResponseMap["getResponsemanagementResponses"]>;
  PostResponsemanagementLibraries(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementLibraries">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementLibraries"]>;
  PostResponsemanagementLibrariesBulk(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementLibrariesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementLibrariesBulk"]>;
  PostResponsemanagementLibrariesQuery(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementLibrariesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementLibrariesQuery"]>;
  PostResponsemanagementResponseassetsBulk(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementResponseassetsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementResponseassetsBulk"]>;
  PostResponsemanagementResponseassetsSearch(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementResponseassetsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementResponseassetsSearch"]>;
  PostResponsemanagementResponseassetsUploads(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementResponseassetsUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementResponseassetsUploads"]>;
  PostResponsemanagementResponses(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementResponses">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementResponses"]>;
  PostResponsemanagementResponsesQuery(...args: GenesysCloudFullApiOperationArgs<"postResponsemanagementResponsesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postResponsemanagementResponsesQuery"]>;
  PutResponsemanagementLibrary(...args: GenesysCloudFullApiOperationArgs<"putResponsemanagementLibrary">): Promise<GenesysCloudFullApiOperationResponseMap["putResponsemanagementLibrary"]>;
  PutResponsemanagementResponse(...args: GenesysCloudFullApiOperationArgs<"putResponsemanagementResponse">): Promise<GenesysCloudFullApiOperationResponseMap["putResponsemanagementResponse"]>;
  PutResponsemanagementResponseasset(...args: GenesysCloudFullApiOperationArgs<"putResponsemanagementResponseasset">): Promise<GenesysCloudFullApiOperationResponseMap["putResponsemanagementResponseasset"]>;
}

export const GenesysCloudFullApiResponseManagementGeneratedFunctionNames = [
  "DeleteResponsemanagementLibrary",
  "DeleteResponsemanagementResponse",
  "DeleteResponsemanagementResponseasset",
  "GetResponsemanagementLibraries",
  "GetResponsemanagementLibrary",
  "GetResponsemanagementResponse",
  "GetResponsemanagementResponseasset",
  "GetResponsemanagementResponseassetsStatusStatusId",
  "GetResponsemanagementResponses",
  "PostResponsemanagementLibraries",
  "PostResponsemanagementLibrariesBulk",
  "PostResponsemanagementLibrariesQuery",
  "PostResponsemanagementResponseassetsBulk",
  "PostResponsemanagementResponseassetsSearch",
  "PostResponsemanagementResponseassetsUploads",
  "PostResponsemanagementResponses",
  "PostResponsemanagementResponsesQuery",
  "PutResponsemanagementLibrary",
  "PutResponsemanagementResponse",
  "PutResponsemanagementResponseasset"
] as const satisfies readonly (keyof GenesysCloudFullApiResponseManagementGeneratedClient)[];

export function createGenesysCloudFullApiResponseManagementGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiResponseManagementGeneratedClient {
  return {
    DeleteResponsemanagementLibrary: (...args) => callOperation("deleteResponsemanagementLibrary", ...(args as GenesysCloudFullApiOperationArgs<"deleteResponsemanagementLibrary">)),
    DeleteResponsemanagementResponse: (...args) => callOperation("deleteResponsemanagementResponse", ...(args as GenesysCloudFullApiOperationArgs<"deleteResponsemanagementResponse">)),
    DeleteResponsemanagementResponseasset: (...args) => callOperation("deleteResponsemanagementResponseasset", ...(args as GenesysCloudFullApiOperationArgs<"deleteResponsemanagementResponseasset">)),
    GetResponsemanagementLibraries: (...args) => callOperation("getResponsemanagementLibraries", ...(args as GenesysCloudFullApiOperationArgs<"getResponsemanagementLibraries">)),
    GetResponsemanagementLibrary: (...args) => callOperation("getResponsemanagementLibrary", ...(args as GenesysCloudFullApiOperationArgs<"getResponsemanagementLibrary">)),
    GetResponsemanagementResponse: (...args) => callOperation("getResponsemanagementResponse", ...(args as GenesysCloudFullApiOperationArgs<"getResponsemanagementResponse">)),
    GetResponsemanagementResponseasset: (...args) => callOperation("getResponsemanagementResponseasset", ...(args as GenesysCloudFullApiOperationArgs<"getResponsemanagementResponseasset">)),
    GetResponsemanagementResponseassetsStatusStatusId: (...args) => callOperation("getResponsemanagementResponseassetsStatusStatusId", ...(args as GenesysCloudFullApiOperationArgs<"getResponsemanagementResponseassetsStatusStatusId">)),
    GetResponsemanagementResponses: (...args) => callOperation("getResponsemanagementResponses", ...(args as GenesysCloudFullApiOperationArgs<"getResponsemanagementResponses">)),
    PostResponsemanagementLibraries: (...args) => callOperation("postResponsemanagementLibraries", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementLibraries">)),
    PostResponsemanagementLibrariesBulk: (...args) => callOperation("postResponsemanagementLibrariesBulk", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementLibrariesBulk">)),
    PostResponsemanagementLibrariesQuery: (...args) => callOperation("postResponsemanagementLibrariesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementLibrariesQuery">)),
    PostResponsemanagementResponseassetsBulk: (...args) => callOperation("postResponsemanagementResponseassetsBulk", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementResponseassetsBulk">)),
    PostResponsemanagementResponseassetsSearch: (...args) => callOperation("postResponsemanagementResponseassetsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementResponseassetsSearch">)),
    PostResponsemanagementResponseassetsUploads: (...args) => callOperation("postResponsemanagementResponseassetsUploads", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementResponseassetsUploads">)),
    PostResponsemanagementResponses: (...args) => callOperation("postResponsemanagementResponses", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementResponses">)),
    PostResponsemanagementResponsesQuery: (...args) => callOperation("postResponsemanagementResponsesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postResponsemanagementResponsesQuery">)),
    PutResponsemanagementLibrary: (...args) => callOperation("putResponsemanagementLibrary", ...(args as GenesysCloudFullApiOperationArgs<"putResponsemanagementLibrary">)),
    PutResponsemanagementResponse: (...args) => callOperation("putResponsemanagementResponse", ...(args as GenesysCloudFullApiOperationArgs<"putResponsemanagementResponse">)),
    PutResponsemanagementResponseasset: (...args) => callOperation("putResponsemanagementResponseasset", ...(args as GenesysCloudFullApiOperationArgs<"putResponsemanagementResponseasset">)),
  };
}
