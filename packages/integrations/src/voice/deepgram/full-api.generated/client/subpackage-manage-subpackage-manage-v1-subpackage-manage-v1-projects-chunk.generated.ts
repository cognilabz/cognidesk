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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsOperationKeys = [
  "DELETE /v1/projects/{project_id}",
  "GET /v1/projects/{project_id}",
  "DELETE /v1/projects/{project_id}/leave",
  "GET /v1/projects",
  "PATCH /v1/projects/{project_id}"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsOperationPathParamMap {
  "DELETE /v1/projects/{project_id}": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "DELETE /v1/projects/{project_id}/leave": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects": {};
  "PATCH /v1/projects/{project_id}": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsOperationRequestMap {
  "DELETE /v1/projects/{project_id}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}">;
  "GET /v1/projects/{project_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}">;
  "DELETE /v1/projects/{project_id}/leave": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/leave">;
  "GET /v1/projects": DeepgramSpeechFullApiOperationInput<"GET /v1/projects">;
  "PATCH /v1/projects/{project_id}": DeepgramSpeechFullApiOperationInput<"PATCH /v1/projects/{project_id}">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient {
  Delete3(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}"]>;
  Get3(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}"]>;
  Leave(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/leave">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/leave"]>;
  List4(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects"]>;
  Update3(...args: DeepgramSpeechFullApiOperationArgs<"PATCH /v1/projects/{project_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["PATCH /v1/projects/{project_id}"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedFunctionNames = [
  "Delete3",
  "Get3",
  "Leave",
  "List4",
  "Update3"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient {
  return {
    Delete3: (...args) => callOperation("DELETE /v1/projects/{project_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}">)),
    Get3: (...args) => callOperation("GET /v1/projects/{project_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}">)),
    Leave: (...args) => callOperation("DELETE /v1/projects/{project_id}/leave", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/leave">)),
    List4: (...args) => callOperation("GET /v1/projects", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects">)),
    Update3: (...args) => callOperation("PATCH /v1/projects/{project_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"PATCH /v1/projects/{project_id}">)),
  };
}
