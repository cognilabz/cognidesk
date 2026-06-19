// Generated endpoint chunk for DeepgramSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DeepgramSpeechGeneratedOperationCaller,
  DeepgramSpeechFullApiOperationArgs,
  DeepgramSpeechFullApiOperationInput,
  DeepgramSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { DeepgramSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsOperationKeys = [
  "GET /v1/projects/{project_id}/requests/{request_id}",
  "GET /v1/projects/{project_id}/requests"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsOperationPathParamMap {
  "GET /v1/projects/{project_id}/requests/{request_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "request_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/requests": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsOperationRequestMap {
  "GET /v1/projects/{project_id}/requests/{request_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/requests/{request_id}">;
  "GET /v1/projects/{project_id}/requests": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/requests">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient {
  Get7(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/requests/{request_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/requests/{request_id}"]>;
  List11(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/requests">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/requests"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedFunctionNames = [
  "Get7",
  "List11"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient {
  return {
    Get7: (...args) => callOperation("GET /v1/projects/{project_id}/requests/{request_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/requests/{request_id}">)),
    List11: (...args) => callOperation("GET /v1/projects/{project_id}/requests", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/requests">)),
  };
}
