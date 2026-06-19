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
export const GenesysCloudFullApiFaxOperationKeys = [
  "deleteFaxDocument",
  "getFaxDocument",
  "getFaxDocumentContent",
  "getFaxDocuments",
  "getFaxSettings",
  "getFaxSummary",
  "putFaxDocument",
  "putFaxSettings"
] as const;
export type GenesysCloudFullApiFaxOperationKey = typeof GenesysCloudFullApiFaxOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiFaxOperationPathParamMap {
  "deleteFaxDocument": { "documentId": GenesysCloudFullApiPathParamValue };
  "getFaxDocument": { "documentId": GenesysCloudFullApiPathParamValue };
  "getFaxDocumentContent": { "documentId": GenesysCloudFullApiPathParamValue };
  "getFaxDocuments": {};
  "getFaxSettings": {};
  "getFaxSummary": {};
  "putFaxDocument": { "documentId": GenesysCloudFullApiPathParamValue };
  "putFaxSettings": {};
}

export interface GenesysCloudFullApiFaxOperationRequestMap {
  "deleteFaxDocument": GenesysCloudFullApiOperationInput<"deleteFaxDocument">;
  "getFaxDocument": GenesysCloudFullApiOperationInput<"getFaxDocument">;
  "getFaxDocumentContent": GenesysCloudFullApiOperationInput<"getFaxDocumentContent">;
  "getFaxDocuments": GenesysCloudFullApiOperationInput<"getFaxDocuments">;
  "getFaxSettings": GenesysCloudFullApiOperationInput<"getFaxSettings">;
  "getFaxSummary": GenesysCloudFullApiOperationInput<"getFaxSummary">;
  "putFaxDocument": GenesysCloudFullApiOperationInput<"putFaxDocument">;
  "putFaxSettings": GenesysCloudFullApiOperationInput<"putFaxSettings">;
}

export interface GenesysCloudFullApiFaxGeneratedClient {
  DeleteFaxDocument(...args: GenesysCloudFullApiOperationArgs<"deleteFaxDocument">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFaxDocument"]>;
  GetFaxDocument(...args: GenesysCloudFullApiOperationArgs<"getFaxDocument">): Promise<GenesysCloudFullApiOperationResponseMap["getFaxDocument"]>;
  GetFaxDocumentContent(...args: GenesysCloudFullApiOperationArgs<"getFaxDocumentContent">): Promise<GenesysCloudFullApiOperationResponseMap["getFaxDocumentContent"]>;
  GetFaxDocuments(...args: GenesysCloudFullApiOperationArgs<"getFaxDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["getFaxDocuments"]>;
  GetFaxSettings(...args: GenesysCloudFullApiOperationArgs<"getFaxSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getFaxSettings"]>;
  GetFaxSummary(...args: GenesysCloudFullApiOperationArgs<"getFaxSummary">): Promise<GenesysCloudFullApiOperationResponseMap["getFaxSummary"]>;
  PutFaxDocument(...args: GenesysCloudFullApiOperationArgs<"putFaxDocument">): Promise<GenesysCloudFullApiOperationResponseMap["putFaxDocument"]>;
  PutFaxSettings(...args: GenesysCloudFullApiOperationArgs<"putFaxSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putFaxSettings"]>;
}

export const GenesysCloudFullApiFaxGeneratedFunctionNames = [
  "DeleteFaxDocument",
  "GetFaxDocument",
  "GetFaxDocumentContent",
  "GetFaxDocuments",
  "GetFaxSettings",
  "GetFaxSummary",
  "PutFaxDocument",
  "PutFaxSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiFaxGeneratedClient)[];

export function createGenesysCloudFullApiFaxGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiFaxGeneratedClient {
  return {
    DeleteFaxDocument: (...args) => callOperation("deleteFaxDocument", ...(args as GenesysCloudFullApiOperationArgs<"deleteFaxDocument">)),
    GetFaxDocument: (...args) => callOperation("getFaxDocument", ...(args as GenesysCloudFullApiOperationArgs<"getFaxDocument">)),
    GetFaxDocumentContent: (...args) => callOperation("getFaxDocumentContent", ...(args as GenesysCloudFullApiOperationArgs<"getFaxDocumentContent">)),
    GetFaxDocuments: (...args) => callOperation("getFaxDocuments", ...(args as GenesysCloudFullApiOperationArgs<"getFaxDocuments">)),
    GetFaxSettings: (...args) => callOperation("getFaxSettings", ...(args as GenesysCloudFullApiOperationArgs<"getFaxSettings">)),
    GetFaxSummary: (...args) => callOperation("getFaxSummary", ...(args as GenesysCloudFullApiOperationArgs<"getFaxSummary">)),
    PutFaxDocument: (...args) => callOperation("putFaxDocument", ...(args as GenesysCloudFullApiOperationArgs<"putFaxDocument">)),
    PutFaxSettings: (...args) => callOperation("putFaxSettings", ...(args as GenesysCloudFullApiOperationArgs<"putFaxSettings">)),
  };
}
