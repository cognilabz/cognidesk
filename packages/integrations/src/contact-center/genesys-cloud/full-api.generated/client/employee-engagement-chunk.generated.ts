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
export const GenesysCloudFullApiEmployeeEngagementOperationKeys = [
  "deleteEmployeeengagementCelebration",
  "getEmployeeengagementCelebrations",
  "getEmployeeengagementRecognition",
  "getEmployeeengagementRecognitions",
  "patchEmployeeengagementCelebration",
  "postEmployeeengagementRecognitions"
] as const;
export type GenesysCloudFullApiEmployeeEngagementOperationKey = typeof GenesysCloudFullApiEmployeeEngagementOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiEmployeeEngagementOperationPathParamMap {
  "deleteEmployeeengagementCelebration": { "celebrationId": GenesysCloudFullApiPathParamValue };
  "getEmployeeengagementCelebrations": {};
  "getEmployeeengagementRecognition": { "recognitionId": GenesysCloudFullApiPathParamValue };
  "getEmployeeengagementRecognitions": {};
  "patchEmployeeengagementCelebration": { "celebrationId": GenesysCloudFullApiPathParamValue };
  "postEmployeeengagementRecognitions": {};
}

export interface GenesysCloudFullApiEmployeeEngagementOperationRequestMap {
  "deleteEmployeeengagementCelebration": GenesysCloudFullApiOperationInput<"deleteEmployeeengagementCelebration">;
  "getEmployeeengagementCelebrations": GenesysCloudFullApiOperationInput<"getEmployeeengagementCelebrations">;
  "getEmployeeengagementRecognition": GenesysCloudFullApiOperationInput<"getEmployeeengagementRecognition">;
  "getEmployeeengagementRecognitions": GenesysCloudFullApiOperationInput<"getEmployeeengagementRecognitions">;
  "patchEmployeeengagementCelebration": GenesysCloudFullApiOperationInput<"patchEmployeeengagementCelebration">;
  "postEmployeeengagementRecognitions": GenesysCloudFullApiOperationInput<"postEmployeeengagementRecognitions">;
}

export interface GenesysCloudFullApiEmployeeEngagementGeneratedClient {
  DeleteEmployeeengagementCelebration(...args: GenesysCloudFullApiOperationArgs<"deleteEmployeeengagementCelebration">): Promise<GenesysCloudFullApiOperationResponseMap["deleteEmployeeengagementCelebration"]>;
  GetEmployeeengagementCelebrations(...args: GenesysCloudFullApiOperationArgs<"getEmployeeengagementCelebrations">): Promise<GenesysCloudFullApiOperationResponseMap["getEmployeeengagementCelebrations"]>;
  GetEmployeeengagementRecognition(...args: GenesysCloudFullApiOperationArgs<"getEmployeeengagementRecognition">): Promise<GenesysCloudFullApiOperationResponseMap["getEmployeeengagementRecognition"]>;
  GetEmployeeengagementRecognitions(...args: GenesysCloudFullApiOperationArgs<"getEmployeeengagementRecognitions">): Promise<GenesysCloudFullApiOperationResponseMap["getEmployeeengagementRecognitions"]>;
  PatchEmployeeengagementCelebration(...args: GenesysCloudFullApiOperationArgs<"patchEmployeeengagementCelebration">): Promise<GenesysCloudFullApiOperationResponseMap["patchEmployeeengagementCelebration"]>;
  PostEmployeeengagementRecognitions(...args: GenesysCloudFullApiOperationArgs<"postEmployeeengagementRecognitions">): Promise<GenesysCloudFullApiOperationResponseMap["postEmployeeengagementRecognitions"]>;
}

export const GenesysCloudFullApiEmployeeEngagementGeneratedFunctionNames = [
  "DeleteEmployeeengagementCelebration",
  "GetEmployeeengagementCelebrations",
  "GetEmployeeengagementRecognition",
  "GetEmployeeengagementRecognitions",
  "PatchEmployeeengagementCelebration",
  "PostEmployeeengagementRecognitions"
] as const satisfies readonly (keyof GenesysCloudFullApiEmployeeEngagementGeneratedClient)[];

export function createGenesysCloudFullApiEmployeeEngagementGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiEmployeeEngagementGeneratedClient {
  return {
    DeleteEmployeeengagementCelebration: (...args) => callOperation("deleteEmployeeengagementCelebration", ...(args as GenesysCloudFullApiOperationArgs<"deleteEmployeeengagementCelebration">)),
    GetEmployeeengagementCelebrations: (...args) => callOperation("getEmployeeengagementCelebrations", ...(args as GenesysCloudFullApiOperationArgs<"getEmployeeengagementCelebrations">)),
    GetEmployeeengagementRecognition: (...args) => callOperation("getEmployeeengagementRecognition", ...(args as GenesysCloudFullApiOperationArgs<"getEmployeeengagementRecognition">)),
    GetEmployeeengagementRecognitions: (...args) => callOperation("getEmployeeengagementRecognitions", ...(args as GenesysCloudFullApiOperationArgs<"getEmployeeengagementRecognitions">)),
    PatchEmployeeengagementCelebration: (...args) => callOperation("patchEmployeeengagementCelebration", ...(args as GenesysCloudFullApiOperationArgs<"patchEmployeeengagementCelebration">)),
    PostEmployeeengagementRecognitions: (...args) => callOperation("postEmployeeengagementRecognitions", ...(args as GenesysCloudFullApiOperationArgs<"postEmployeeengagementRecognitions">)),
  };
}
