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
export const GenesysCloudFullApiDataPrivacyOperationKeys = [
  "deleteDataprivacyMaskingrule",
  "getDataprivacyMaskingrule",
  "getDataprivacyMaskingrules",
  "patchDataprivacyMaskingrule",
  "postDataprivacyMaskingrules",
  "postDataprivacyMaskingrulesValidate"
] as const;
export type GenesysCloudFullApiDataPrivacyOperationKey = typeof GenesysCloudFullApiDataPrivacyOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiDataPrivacyOperationPathParamMap {
  "deleteDataprivacyMaskingrule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "getDataprivacyMaskingrule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "getDataprivacyMaskingrules": {};
  "patchDataprivacyMaskingrule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "postDataprivacyMaskingrules": {};
  "postDataprivacyMaskingrulesValidate": {};
}

export interface GenesysCloudFullApiDataPrivacyOperationRequestMap {
  "deleteDataprivacyMaskingrule": GenesysCloudFullApiOperationInput<"deleteDataprivacyMaskingrule">;
  "getDataprivacyMaskingrule": GenesysCloudFullApiOperationInput<"getDataprivacyMaskingrule">;
  "getDataprivacyMaskingrules": GenesysCloudFullApiOperationInput<"getDataprivacyMaskingrules">;
  "patchDataprivacyMaskingrule": GenesysCloudFullApiOperationInput<"patchDataprivacyMaskingrule">;
  "postDataprivacyMaskingrules": GenesysCloudFullApiOperationInput<"postDataprivacyMaskingrules">;
  "postDataprivacyMaskingrulesValidate": GenesysCloudFullApiOperationInput<"postDataprivacyMaskingrulesValidate">;
}

export interface GenesysCloudFullApiDataPrivacyGeneratedClient {
  DeleteDataprivacyMaskingrule(...args: GenesysCloudFullApiOperationArgs<"deleteDataprivacyMaskingrule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteDataprivacyMaskingrule"]>;
  GetDataprivacyMaskingrule(...args: GenesysCloudFullApiOperationArgs<"getDataprivacyMaskingrule">): Promise<GenesysCloudFullApiOperationResponseMap["getDataprivacyMaskingrule"]>;
  GetDataprivacyMaskingrules(...args: GenesysCloudFullApiOperationArgs<"getDataprivacyMaskingrules">): Promise<GenesysCloudFullApiOperationResponseMap["getDataprivacyMaskingrules"]>;
  PatchDataprivacyMaskingrule(...args: GenesysCloudFullApiOperationArgs<"patchDataprivacyMaskingrule">): Promise<GenesysCloudFullApiOperationResponseMap["patchDataprivacyMaskingrule"]>;
  PostDataprivacyMaskingrules(...args: GenesysCloudFullApiOperationArgs<"postDataprivacyMaskingrules">): Promise<GenesysCloudFullApiOperationResponseMap["postDataprivacyMaskingrules"]>;
  PostDataprivacyMaskingrulesValidate(...args: GenesysCloudFullApiOperationArgs<"postDataprivacyMaskingrulesValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postDataprivacyMaskingrulesValidate"]>;
}

export const GenesysCloudFullApiDataPrivacyGeneratedFunctionNames = [
  "DeleteDataprivacyMaskingrule",
  "GetDataprivacyMaskingrule",
  "GetDataprivacyMaskingrules",
  "PatchDataprivacyMaskingrule",
  "PostDataprivacyMaskingrules",
  "PostDataprivacyMaskingrulesValidate"
] as const satisfies readonly (keyof GenesysCloudFullApiDataPrivacyGeneratedClient)[];

export function createGenesysCloudFullApiDataPrivacyGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiDataPrivacyGeneratedClient {
  return {
    DeleteDataprivacyMaskingrule: (...args) => callOperation("deleteDataprivacyMaskingrule", ...(args as GenesysCloudFullApiOperationArgs<"deleteDataprivacyMaskingrule">)),
    GetDataprivacyMaskingrule: (...args) => callOperation("getDataprivacyMaskingrule", ...(args as GenesysCloudFullApiOperationArgs<"getDataprivacyMaskingrule">)),
    GetDataprivacyMaskingrules: (...args) => callOperation("getDataprivacyMaskingrules", ...(args as GenesysCloudFullApiOperationArgs<"getDataprivacyMaskingrules">)),
    PatchDataprivacyMaskingrule: (...args) => callOperation("patchDataprivacyMaskingrule", ...(args as GenesysCloudFullApiOperationArgs<"patchDataprivacyMaskingrule">)),
    PostDataprivacyMaskingrules: (...args) => callOperation("postDataprivacyMaskingrules", ...(args as GenesysCloudFullApiOperationArgs<"postDataprivacyMaskingrules">)),
    PostDataprivacyMaskingrulesValidate: (...args) => callOperation("postDataprivacyMaskingrulesValidate", ...(args as GenesysCloudFullApiOperationArgs<"postDataprivacyMaskingrulesValidate">)),
  };
}
