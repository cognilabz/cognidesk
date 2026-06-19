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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownOperationKeys = [
  "GET /v1/projects/{project_id}/billing/breakdown"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownOperationPathParamMap {
  "GET /v1/projects/{project_id}/billing/breakdown": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownOperationRequestMap {
  "GET /v1/projects/{project_id}/billing/breakdown": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/billing/breakdown">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedClient {
  List14(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/billing/breakdown">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/billing/breakdown"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedFunctionNames = [
  "List14"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedClient {
  return {
    List14: (...args) => callOperation("GET /v1/projects/{project_id}/billing/breakdown", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/billing/breakdown">)),
  };
}
