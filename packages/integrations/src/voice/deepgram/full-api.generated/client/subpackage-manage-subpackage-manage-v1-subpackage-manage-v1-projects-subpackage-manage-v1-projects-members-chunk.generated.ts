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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersOperationKeys = [
  "DELETE /v1/projects/{project_id}/members/{member_id}",
  "GET /v1/projects/{project_id}/members"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersOperationPathParamMap {
  "DELETE /v1/projects/{project_id}/members/{member_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "member_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/members": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersOperationRequestMap {
  "DELETE /v1/projects/{project_id}/members/{member_id}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/members/{member_id}">;
  "GET /v1/projects/{project_id}/members": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/members">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient {
  Delete5(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/members/{member_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/members/{member_id}"]>;
  List8(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/members">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/members"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedFunctionNames = [
  "Delete5",
  "List8"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient {
  return {
    Delete5: (...args) => callOperation("DELETE /v1/projects/{project_id}/members/{member_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/members/{member_id}">)),
    List8: (...args) => callOperation("GET /v1/projects/{project_id}/members", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/members">)),
  };
}
