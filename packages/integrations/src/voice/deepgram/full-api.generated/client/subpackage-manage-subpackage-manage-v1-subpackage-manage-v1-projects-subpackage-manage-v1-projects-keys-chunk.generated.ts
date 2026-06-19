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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysOperationKeys = [
  "POST /v1/projects/{project_id}/keys",
  "DELETE /v1/projects/{project_id}/keys/{key_id}",
  "GET /v1/projects/{project_id}/keys/{key_id}",
  "GET /v1/projects/{project_id}/keys"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysOperationPathParamMap {
  "POST /v1/projects/{project_id}/keys": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "DELETE /v1/projects/{project_id}/keys/{key_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "key_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/keys/{key_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "key_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/keys": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysOperationRequestMap {
  "POST /v1/projects/{project_id}/keys": DeepgramSpeechFullApiOperationInput<"POST /v1/projects/{project_id}/keys">;
  "DELETE /v1/projects/{project_id}/keys/{key_id}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/keys/{key_id}">;
  "GET /v1/projects/{project_id}/keys/{key_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/keys/{key_id}">;
  "GET /v1/projects/{project_id}/keys": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/keys">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient {
  Create3(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/keys">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/projects/{project_id}/keys"]>;
  Delete4(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/keys/{key_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/keys/{key_id}"]>;
  Get6(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/keys/{key_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/keys/{key_id}"]>;
  List7(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/keys">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/keys"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedFunctionNames = [
  "Create3",
  "Delete4",
  "Get6",
  "List7"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient {
  return {
    Create3: (...args) => callOperation("POST /v1/projects/{project_id}/keys", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/keys">)),
    Delete4: (...args) => callOperation("DELETE /v1/projects/{project_id}/keys/{key_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/keys/{key_id}">)),
    Get6: (...args) => callOperation("GET /v1/projects/{project_id}/keys/{key_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/keys/{key_id}">)),
    List7: (...args) => callOperation("GET /v1/projects/{project_id}/keys", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/keys">)),
  };
}
