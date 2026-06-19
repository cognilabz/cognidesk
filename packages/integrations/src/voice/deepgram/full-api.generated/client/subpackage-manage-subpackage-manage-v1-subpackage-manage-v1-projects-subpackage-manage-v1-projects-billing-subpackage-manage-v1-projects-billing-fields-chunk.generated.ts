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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsOperationKeys = [
  "GET /v1/projects/{project_id}/billing/fields"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsOperationPathParamMap {
  "GET /v1/projects/{project_id}/billing/fields": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsOperationRequestMap {
  "GET /v1/projects/{project_id}/billing/fields": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/billing/fields">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedClient {
  List15(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/billing/fields">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/billing/fields"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedFunctionNames = [
  "List15"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedClient {
  return {
    List15: (...args) => callOperation("GET /v1/projects/{project_id}/billing/fields", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/billing/fields">)),
  };
}
