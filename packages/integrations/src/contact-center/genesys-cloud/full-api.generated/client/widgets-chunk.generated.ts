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
export const GenesysCloudFullApiWidgetsOperationKeys = [
  "deleteWidgetsDeployment",
  "getWidgetsDeployment",
  "getWidgetsDeployments",
  "postWidgetsDeployments",
  "putWidgetsDeployment"
] as const;
export type GenesysCloudFullApiWidgetsOperationKey = typeof GenesysCloudFullApiWidgetsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWidgetsOperationPathParamMap {
  "deleteWidgetsDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "getWidgetsDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "getWidgetsDeployments": {};
  "postWidgetsDeployments": {};
  "putWidgetsDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiWidgetsOperationRequestMap {
  "deleteWidgetsDeployment": GenesysCloudFullApiOperationInput<"deleteWidgetsDeployment">;
  "getWidgetsDeployment": GenesysCloudFullApiOperationInput<"getWidgetsDeployment">;
  "getWidgetsDeployments": GenesysCloudFullApiOperationInput<"getWidgetsDeployments">;
  "postWidgetsDeployments": GenesysCloudFullApiOperationInput<"postWidgetsDeployments">;
  "putWidgetsDeployment": GenesysCloudFullApiOperationInput<"putWidgetsDeployment">;
}

export interface GenesysCloudFullApiWidgetsGeneratedClient {
  DeleteWidgetsDeployment(...args: GenesysCloudFullApiOperationArgs<"deleteWidgetsDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWidgetsDeployment"]>;
  GetWidgetsDeployment(...args: GenesysCloudFullApiOperationArgs<"getWidgetsDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["getWidgetsDeployment"]>;
  GetWidgetsDeployments(...args: GenesysCloudFullApiOperationArgs<"getWidgetsDeployments">): Promise<GenesysCloudFullApiOperationResponseMap["getWidgetsDeployments"]>;
  PostWidgetsDeployments(...args: GenesysCloudFullApiOperationArgs<"postWidgetsDeployments">): Promise<GenesysCloudFullApiOperationResponseMap["postWidgetsDeployments"]>;
  PutWidgetsDeployment(...args: GenesysCloudFullApiOperationArgs<"putWidgetsDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["putWidgetsDeployment"]>;
}

export const GenesysCloudFullApiWidgetsGeneratedFunctionNames = [
  "DeleteWidgetsDeployment",
  "GetWidgetsDeployment",
  "GetWidgetsDeployments",
  "PostWidgetsDeployments",
  "PutWidgetsDeployment"
] as const satisfies readonly (keyof GenesysCloudFullApiWidgetsGeneratedClient)[];

export function createGenesysCloudFullApiWidgetsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWidgetsGeneratedClient {
  return {
    DeleteWidgetsDeployment: (...args) => callOperation("deleteWidgetsDeployment", ...(args as GenesysCloudFullApiOperationArgs<"deleteWidgetsDeployment">)),
    GetWidgetsDeployment: (...args) => callOperation("getWidgetsDeployment", ...(args as GenesysCloudFullApiOperationArgs<"getWidgetsDeployment">)),
    GetWidgetsDeployments: (...args) => callOperation("getWidgetsDeployments", ...(args as GenesysCloudFullApiOperationArgs<"getWidgetsDeployments">)),
    PostWidgetsDeployments: (...args) => callOperation("postWidgetsDeployments", ...(args as GenesysCloudFullApiOperationArgs<"postWidgetsDeployments">)),
    PutWidgetsDeployment: (...args) => callOperation("putWidgetsDeployment", ...(args as GenesysCloudFullApiOperationArgs<"putWidgetsDeployment">)),
  };
}
