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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesOperationKeys = [
  "POST /v1/projects/{project_id}/invites",
  "DELETE /v1/projects/{project_id}/invites/{email}",
  "GET /v1/projects/{project_id}/invites"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesOperationPathParamMap {
  "POST /v1/projects/{project_id}/invites": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "DELETE /v1/projects/{project_id}/invites/{email}": { "project_id": DeepgramSpeechFullApiPathParamValue; "email": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/invites": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesOperationRequestMap {
  "POST /v1/projects/{project_id}/invites": DeepgramSpeechFullApiOperationInput<"POST /v1/projects/{project_id}/invites">;
  "DELETE /v1/projects/{project_id}/invites/{email}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/invites/{email}">;
  "GET /v1/projects/{project_id}/invites": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/invites">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient {
  Create4(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/invites">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/projects/{project_id}/invites"]>;
  Delete6(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/invites/{email}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/invites/{email}"]>;
  List10(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/invites">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/invites"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedFunctionNames = [
  "Create4",
  "Delete6",
  "List10"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient {
  return {
    Create4: (...args) => callOperation("POST /v1/projects/{project_id}/invites", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/invites">)),
    Delete6: (...args) => callOperation("DELETE /v1/projects/{project_id}/invites/{email}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/invites/{email}">)),
    List10: (...args) => callOperation("GET /v1/projects/{project_id}/invites", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/invites">)),
  };
}
