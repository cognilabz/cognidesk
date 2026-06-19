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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesOperationKeys = [
  "GET /v1/projects/{project_id}/members/{member_id}/scopes",
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesOperationPathParamMap {
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": { "project_id": DeepgramSpeechFullApiPathParamValue; "member_id": DeepgramSpeechFullApiPathParamValue };
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": { "project_id": DeepgramSpeechFullApiPathParamValue; "member_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesOperationRequestMap {
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/members/{member_id}/scopes">;
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": DeepgramSpeechFullApiOperationInput<"PUT /v1/projects/{project_id}/members/{member_id}/scopes">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient {
  List9(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/members/{member_id}/scopes">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/members/{member_id}/scopes"]>;
  Update4(...args: DeepgramSpeechFullApiOperationArgs<"PUT /v1/projects/{project_id}/members/{member_id}/scopes">): Promise<DeepgramSpeechFullApiOperationResponseMap["PUT /v1/projects/{project_id}/members/{member_id}/scopes"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedFunctionNames = [
  "List9",
  "Update4"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient {
  return {
    List9: (...args) => callOperation("GET /v1/projects/{project_id}/members/{member_id}/scopes", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/members/{member_id}/scopes">)),
    Update4: (...args) => callOperation("PUT /v1/projects/{project_id}/members/{member_id}/scopes", ...(args as DeepgramSpeechFullApiOperationArgs<"PUT /v1/projects/{project_id}/members/{member_id}/scopes">)),
  };
}
